from django.urls import path
from pages_app import views

app_name="pages_app"
urlpatterns = [
    path('' , views.index , name='index'),
]