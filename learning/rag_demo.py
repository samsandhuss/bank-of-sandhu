"""
rag_demo.py — a small, hands-built Retrieval-Augmented Generation (RAG) pipeline.

Pipeline stages:
  CHUNK    -> split source docs into small, citeable pieces           (A4)
  RETRIEVE -> score every chunk against the query, keep the top ones  (A5, A13)
  AUGMENT  -> combine retrieved chunks + the original query           (A6)
  GENERATE -> answer ONLY from what was retrieved, cite sources,      (A7, A9)
              or refuse if nothing scored high enough                 (A8)
"""

import os
import re
import math
from collections import Counter

DOCS = {
    "fca.md": (
        "The FCA requires firms to treat customers fairly at every stage of the product "
        "lifecycle. Firms must ensure staff are trained to identify vulnerable customers. "
        "Complaints must be acknowledged within five working days and resolved within eight weeks."
    ),
    "gdpr-ukdpa.md": (
        "Under UK GDPR, personal data must be processed lawfully, fairly, and transparently. "
        "Data subjects have the right to access, rectify, and erase their personal data. "
        "Data breaches must be reported to the ICO within 72 hours of discovery."
    ),
    "consumer-duty.md": (
        "The Consumer Duty requires firms to deliver good outcomes for retail customers. "
        "Firms must avoid causing foreseeable harm and must support customers in pursuing "
        "their financial objectives. Price and value must be regularly assessed."
    ),
}

CHUNK_SIZE = 120

STOPWORDS = {
    "a", "an", "the", "is", "are", "of", "to", "and", "or", "in", "on", "for",
    "at", "by", "with", "must", "their", "what", "how", "does",
}


def chunk_documents(docs):
    chunks = []
    for source, text in docs.items():
        sentences = re.split(r"(?<=[.])\s+", text.strip())
        buf = ""
        for sentence in sentences:
            if len(buf) + len(sentence) <= CHUNK_SIZE:
                buf = (buf + " " + sentence).strip()
            else:
                if buf:
                    chunks.append({"source": source, "text": buf})
                buf = sentence
        if buf:
            chunks.append({"source": source, "text": buf})
    return chunks


def tokenize(text):
    words = re.findall(r"[a-z0-9]+", text.lower())
    return [w for w in words if w not in STOPWORDS]


def vectorize(text):
    return Counter(tokenize(text))


def cosine_similarity(vec_a, vec_b):
    common = set(vec_a) & set(vec_b)
    dot = sum(vec_a[t] * vec_b[t] for t in common)
    mag_a = math.sqrt(sum(v * v for v in vec_a.values()))
    mag_b = math.sqrt(sum(v * v for v in vec_b.values()))
    if mag_a == 0 or mag_b == 0:
        return 0.0
    return dot / (mag_a * mag_b)


REFUSAL_THRESHOLD = 0.12


def retrieve(query, chunks, top_k=3):
    query_vec = vectorize(query)
    scored = []
    for chunk in chunks:
        score = cosine_similarity(query_vec, vectorize(chunk["text"]))
        scored.append({**chunk, "score": score})
    scored.sort(key=lambda c: c["score"], reverse=True)
    return scored[:top_k]


def augment(query, retrieved):
    context_block = "\n".join(
        f"[{i+1}] ({c['source']}, score={c['score']:.2f}): {c['text']}"
        for i, c in enumerate(retrieved)
    )
    return {"query": query, "context_block": context_block, "sources": [c["source"] for c in retrieved]}


def generate(augmented, retrieved):
    best_score = max((c["score"] for c in retrieved), default=0.0)
    if best_score < REFUSAL_THRESHOLD:
        return (
            "I don't have a source confident enough to answer that "
            f"(best match scored {best_score:.2f}, threshold is {REFUSAL_THRESHOLD})."
        )
    top = retrieved[0]
    return (
        f"Based on {top['source']} [1]: {top['text']}\n"
        f"(Generated from {len(retrieved)} retrieved chunk(s), no live model call.)"
    )


def run_rag(query, docs=DOCS):
    chunks = chunk_documents(docs)
    retrieved = retrieve(query, chunks)
    augmented = augment(query, retrieved)
    answer = generate(augmented, retrieved)

    print(f"\nQUERY: {query}")
    print("-" * 60)
    print("RETRIEVED (top matches, A5 + A13):")
    for c in retrieved:
        print(f"  [{c['score']:.2f}] {c['source']}: {c['text'][:70]}...")
    print("-" * 60)
    print("ANSWER (A7 + A9):")
    print(answer)
    print("=" * 60)
    return answer


if __name__ == "__main__":
    run_rag("How quickly must a data breach be reported to the ICO?")
    run_rag("What does the Consumer Duty require firms to assess regularly?")
    run_rag("What is the capital of France?")
