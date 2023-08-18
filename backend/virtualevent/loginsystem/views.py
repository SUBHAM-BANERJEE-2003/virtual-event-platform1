from django.shortcuts import render
from .models import Users
from rest_framework import generics
from .serializer import UserDataSerializer 
from django.http import JsonResponse
class getUserDetails(generics.ListAPIView):
    serializer_class = UserDataSerializer
    def post(self,request,*args,**kwargs):
        querysets = Users.objects.all()
        email = request.POST['email']
        user = Users.objects.filter(email=email).first()
        if user:
            return JsonResponse({'error':'email already exists'})
        user=Users.objects.create(email=email)
        user.save()
        return JsonResponse({'success': True})