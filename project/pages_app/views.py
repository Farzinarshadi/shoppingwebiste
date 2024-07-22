from django.shortcuts import render
from products_app.models import Product

def index(request):
    products = Product.objects.all()
    off_products = Product.objects.filter(is_off=True)
    new_products = Product.objects.all().order_by('-id')[:4]
    return render(request , 'pages/index.html' , {
        "products":products,
        "off_products":off_products,
        "new_products":new_products,
    })

def cart(request):
    return render(request , 'pages/cart.html')

def category(request):
    return render(request , 'pages/category.html')

def profile(request):
    return render(request , 'pages/profile.html')


def products(request , id):
    product = Product.objects.get(id=id)
    return render(request , 'pages/product.html' , {
        "product":product
    })