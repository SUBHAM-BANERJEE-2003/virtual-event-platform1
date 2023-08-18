from django.urls import path
from .views import getUserDetails
urlpatterns=[
    path('signup',getUserDetails.as_view(),name="Users")
]