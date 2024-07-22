from django import forms
from . models import UserProfile

class SigninForm(forms.ModelForm):
    class Meta :
        model = UserProfile
        fields = ["Mobile"]