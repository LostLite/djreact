from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, base_name='articles')
urlpatterns = router.urls

# from django.urls import path
# from .views import (
#     ArticleViewSet,
#     ArticleCreateView,
#     ArticleListView,
#     ArticleDetailView,
#     ArticleUpdateView,
#     ArticleDeleteView
# )


# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('articles/', ArticleListView.as_view()),
#     path('articles/create', ArticleCreateView.as_view()),
#     path('articles/<pk>/', ArticleDetailView.as_view()),
#     path('articles/edit/<pk>/', ArticleUpdateView.as_view()),
#     path('articles/delete/<pk>/', ArticleDeleteView.as_view()),
# ]
