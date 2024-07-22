from django.db import models


class Product(models.Model):
    image = models.ImageField(upload_to='peoducts/')
    name = models.CharField(max_length=150)
    price = models.IntegerField()
    is_off = models.BooleanField(default=False)
    off_price = models.IntegerField()

    def __str__(self):
        return self.name