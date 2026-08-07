"""
test_retrieval.py

Retrieval-quality regression tests for vector_pipeline_real.py.
"""

from vector_pipeline_real import build_index, query


def test_budget_phone_query_returns_a_phone_first():
    collection, vectorizer = build_index()
    top_results = query(collection, vectorizer, "budget phone", n_results=3)
    assert top_results[0] == "budget_phone_x"


def test_sports_car_query_returns_a_car_not_a_phone():
    collection, vectorizer = build_index()
    top_results = query(collection, vectorizer, "fast sports car", n_results=3)
    assert top_results[0] in {"porsche_911", "ford_mustang"}


def test_commuting_query_prefers_the_practical_car():
    collection, vectorizer = build_index()
    top_results = query(collection, vectorizer, "reliable family car for commuting", n_results=3)
    assert top_results[0] == "toyota_corolla"


def test_unrelated_query_does_not_crash_and_still_returns_k_results():
    collection, vectorizer = build_index()
    top_results = query(collection, vectorizer, "capital of France", n_results=3)
    assert len(top_results) == 3
