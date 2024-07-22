from django.urls import path
from pages_app import views

app_name="pages_app"
urlpatterns = [
    path('home/' , views.index , name='index'),
    path('cart/' , views.cart , name='cart'),
    path('category/' , views.category , name='category'),
    path('profile/' , views.profile , name='profile'),

    path('products/<int:id>/' , views.products , name='products'),
]