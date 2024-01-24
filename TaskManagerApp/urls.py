from django.urls import path

from .views import HomePageView
from .views import AboutPageView
from .views import TimePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('time/', TimePageView, name='currenttime'),
]
