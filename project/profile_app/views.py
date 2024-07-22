from django.shortcuts import render, redirect
from .forms import SigninForm
from .models import UserProfile
from django.contrib.auth.models import User
from django.contrib.auth import login , logout


def signin_views(request):
    if request.method == "POST":
        form = SigninForm(request.POST)
        if form.is_valid():
            mobile = form.cleaned_data.get("Mobile")
            try:
                user_profile = UserProfile.objects.get(Mobile=mobile)
                user = user_profile.user  
                login(request, user) 
                return redirect('pages_app:index')
            except UserProfile.DoesNotExist:
                user = User.objects.create_user(
                    username=mobile,
                    email="",
                    password=str(mobile),
                )
                UserProfile.objects.create(
                    user=user,
                    Mobile=mobile,
                )
                login(request, user)  
    else:
        form = SigninForm()

    return render(request, "pages/profile/signin.html", {
        'form': form
    })


def logout_views(request):
    logout(request)
    return redirect('pages_app:index')