from django.urls import path

from .views import HomePageView
from .views import AboutPageView
from .views import TimePageView

from .views import api_tasks
from .views import api_task_detail


urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('time/', TimePageView, name='currenttime'),
    path('api/tasks/<int:task_id>/', api_task_detail),
    path('api/tasks/', api_tasks),
]
