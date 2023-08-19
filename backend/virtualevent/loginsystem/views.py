from django.shortcuts import render
from .models import Users
from rest_framework import generics
from .serializer import UserDataSerializer 
from django.http import JsonResponse
class getUserDetails(generics.CreateAPIView):
    serializer_class = UserDataSerializer
    def get_queryset(self):
        return Users.objects.all()