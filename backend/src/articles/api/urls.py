from django.urls import path
from .views import ArticleCreate, ArticleListView, ArticleDetailView, ArticleUpdateView, ArticleDeleteView, ArticleDetail

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('articles/', ArticleListView.as_view()),
    path('articles/create', ArticleCreate.as_view(), name="article-create"),
    path('articles/edit/<pk>/', ArticleDetail.as_view(), name="article-edit"),
    path('articles/<pk>/', ArticleDetailView.as_view()),
    path('articles/delete/<pk>/', ArticleDetail.as_view(), name="article-delete"),
]
