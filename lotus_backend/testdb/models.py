from django.db import models

# Create your models here.

# the below is completely a test model
class User(models.Model):
    first_name = models.CharField(max_length=80, blank=True)
    last_name = models.CharField(max_length=80, blank=True)
    password = models.CharField(max_length=80, blank=True)

    # there can be definitions here that save the data