"""
Toy vector database — built to make A10 (embedding) and A11 (vector database)
concrete by running real code, not just talking about it.

Pipeline mirrors the real thing exactly, just with a simple hand-built
embedding instead of a trained neural model:

    text  -->  EMBEDDING  -->  vector (numbers that encode meaning)
    vectors -->  stored in a VECTOR DATABASE (here: just a dict)
    new question --> same embedding step --> QUERY VECTOR
    query vector --> SIMILARITY SEARCH (cosine similarity) --> closest matches

In production, the embedding step is a trained neural network (OpenAI,
Cohere, sentence-transformers, etc). Here we use "bag of words" counting
instead — deliberately dumb and transparent, so you can see every number
being produced instead of trusting a black-box API. The similarity search
step at the end is IDENTICAL to production — cosine similarity is cosine
similarity whether the vectors came from a neural net or from word counts.

Run it:  python3 vector_demo.py
"""

import re
import math

# ---------------------------------------------------------------------------
# STEP 0 — The data we're going to store (this is what gets embedded)
# ---------------------------------------------------------------------------
ITEMS = {
    "Porsche 911":   "high performance luxury sports car german engineering",
    "Ferrari 488":    "high performance luxury sports car italian engineering",
    "Tesla Model 3":  "electric sports car luxury performance american",
    "MacBook Pro":    "laptop computer productivity apple lightweight",
    "Dell XPS":       "laptop computer productivity windows lightweight",
    "ThinkPad X1":    "laptop computer productivity business lightweight",
}


# ---------------------------------------------------------------------------
# STEP 1 — THE EMBEDDING MODEL (A10)
# Converts text into a vector: a list of numbers that encodes meaning.
# Here: build a vocabulary from every word across all items, then represent
# each piece of text as "how many times does each vocab word appear".
# Similar text -> similar word counts -> mathematically close vectors.
# ---------------------------------------------------------------------------

def tokenize(text: str):
    return re.findall(r"[a-z]+", text.lower())


def build_vocabulary(texts):
    vocab = set()
    for t in texts:
        vocab.update(tokenize(t))
    return sorted(vocab)  # fixed order so every vector lines up


def embed(text: str, vocab: list[str]) -> list[float]:
    """THE EMBEDDING STEP — text in, vector out."""
    tokens = tokenize(text)
    return [float(tokens.count(word)) for word in vocab]


# ---------------------------------------------------------------------------
# STEP 2 — THE VECTOR DATABASE (A11)
# Stores every item's vector. In production this is Pinecone / Weaviate /
# pgvector etc. Here it's just a dict — the point isn't the storage engine,
# it's what happens when you QUERY it.
# ---------------------------------------------------------------------------

def cosine_similarity(a: list[float], b: list[float]) -> float:
    dot = sum(x * y for x, y in zip(a, b))
    mag_a = math.sqrt(sum(x * x for x in a))
    mag_b = math.sqrt(sum(y * y for y in b))
    if mag_a == 0 or mag_b == 0:
        return 0.0
    return dot / (mag_a * mag_b)


class ToyVectorDB:
    def __init__(self, vocab: list[str]):
        self.vocab = vocab
        self.store: dict[str, list[float]] = {}

    def add(self, name: str, text: str):
        self.store[name] = embed(text, self.vocab)

    def similarity_search(self, query_text: str, top_k: int = 3):
        """
        THE RETRIEVAL STEP (A11):
        1. The query gets run through the SAME embedding step -> query vector
        2. Compare the query vector against every stored vector
        3. Rank by cosine similarity
        4. Return the closest matches
        """
        query_vector = embed(query_text, self.vocab)  # same embed() as storage
        scored = [
            (name, cosine_similarity(query_vector, vec))
            for name, vec in self.store.items()
        ]
