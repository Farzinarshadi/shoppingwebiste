from django.urls import path
from . import views

app_name = "profile_app"
urlpatterns = [
    path('signin/' , views.signin_views , name='signin'),
    path('logout/' , views.logout_views , name='logout'),
]