
"""
vector_pipeline_real.py

The "graduation" step up from vector_demo.py (hand-rolled bag-of-words +
a manual cosine-similarity loop written by hand). Same ITEMS, same idea,
but now every step is done by a real library instead of by hand.
"""

import uuid

import chromadb
from sklearn.feature_extraction.text import TfidfVectorizer

ITEMS = {
    "porsche_911": "Porsche 911 - a two-door sports car with a rear-mounted "
                   "six-cylinder engine, built for speed and precise handling.",
    "toyota_corolla": "Toyota Corolla - a reliable, affordable compact sedan "
                       "popular for daily commuting and low running costs.",
    "ford_mustang": "Ford Mustang - an iconic American muscle car with a "
                    "powerful V8 engine option and aggressive styling.",
    "iphone_15": "iPhone 15 - Apple's flagship smartphone with an A16 chip, "
                 "a dual camera system, and tight iOS ecosystem integration.",
    "pixel_8": "Pixel 8 - Google's flagship Android phone with a Tensor G3 "
               "chip, near-stock Android, and strong AI camera features.",
    "budget_phone_x": "Budget Phone X - an affordable Android smartphone with "
                       "a large battery, a basic camera, and entry-level specs "
                       "for under 200 dollars.",
}


def build_index():
    ids = list(ITEMS.keys())
    docs = list(ITEMS.values())

    vectorizer = TfidfVectorizer()
    doc_vectors = vectorizer.fit_transform(docs).toarray()

    client = chromadb.Client()
    collection = client.create_collection(
        name=f"vehicles_and_phones_{uuid.uuid4().hex[:8]}",
        metadata={"hnsw:space": "cosine"},
    )
    collection.add(
        ids=ids,
        embeddings=doc_vectors.tolist(),
        documents=docs,
    )
    return collection, vectorizer


def query(collection, vectorizer, question, n_results=3):
    query_vector = vectorizer.transform([question]).toarray().tolist()
    results = collection.query(query_embeddings=query_vector, n_results=n_results)

    ids = results["ids"][0]
    docs = results["documents"][0]
    distances = results["distances"][0]

    print(f"\nQuery: {question!r}")
    for rank, (item_id, doc, dist) in enumerate(zip(ids, docs, distances), start=1):
        similarity = 1 - dist
        print(f"  {rank}. {item_id:16s}  cosine similarity = {similarity:.3f}   {doc[:60]}...")

    return ids


if __name__ == "__main__":
    print("Building index (embedding every item with TF-IDF, storing in chromadb)...")
    collection, vectorizer = build_index()
    print(f"Indexed {collection.count()} items.\n")

    query(collection, vectorizer, "budget phone")
    query(collection, vectorizer, "fast sports car")
    query(collection, vectorizer, "reliable family car for commuting")
