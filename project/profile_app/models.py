from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE , null=True , blank=True)
    Mobile = models.IntegerField()
    Full_Name = models.CharField(max_length=30 , null=True , blank=True)
    Email = models.EmailField( null=True , blank=True)
    Addres = models.CharField(max_length=500 , null=True , blank=True)
    Postal_Code = models.CharField(max_length=50 , null=True , blank=True)

    
    def __str__(self):
        return str(self.Mobile)