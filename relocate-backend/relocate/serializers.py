from rest_framework import serializers
from  .models import Location, Comment

class LocationSerializer(serializers.HyperlinkedModelSerializer):
    comments = serializers.HyperlinkedRelatedField(
        view_name='comment_detail',
        many=True,
        read_only=True
    )
    location_url = serializers.ModelSerializer.serializer_url_field(
        view_name='location_detail'
    )
    class Meta:
        model = Location
        fields = ('id', 'location_url', 'name', 'city', 'state', 'image_url', 'description', 'comments',)


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    location = serializers.HyperlinkedRelatedField(
        view_name='location_detail',
        read_only=True
    )
    location_id = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(),
        source='location'
    )
    class Meta:
        model = Comment
        fields = ('id', 'location','location_id', 'author', 'rating', 'body',)