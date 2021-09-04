from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class Comment(models.Model):
    author = models.CharField(max_length=100)
    rating= models.IntegerField(max_length=1)
    body = models.TextField()
    location = models.ForeignKey(
        Location,
        on_delete=models.CASCADE, related_name='comments',
    )

    def __str__(self):
        return self.author

# class Profile(models.Model):
#     username = models.CharField(max_length=100)
#     body = models.TextField()
#     location = models.ForeignKey(
#         , 
#         on_delete=models.CASCADE, related_name='comments',
#     )

#     def __str__(self):
#         return self.author


