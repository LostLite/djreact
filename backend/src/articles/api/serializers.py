from rest_framework import serializers
from articles.models import Article

class ArticleCreateUpdateSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=520)
    content = serializers.CharField ()

    # is called if we save serializer if it does not have an instance
    def create(self, validated_data):
       article = Article.objects.create(**validated_data)
       return article

class ArticleSerializer(serializers.ModelSerializer):
    # is called if we save serializer if it has an instance
    def update(self, instance, validated_data):
       instance.__dict__.update(validated_data)
       instance.save()
       return instance
       
    class Meta:
        model = Article
        fields = ('id','title', 'content')