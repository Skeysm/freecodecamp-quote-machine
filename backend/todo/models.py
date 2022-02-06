from django.db import models

# Create your models here.

class Quote(models.Model):
    text = models.CharField(max_length=120)
    author = models.TextField()

    def _str_(self):
        return self.text

