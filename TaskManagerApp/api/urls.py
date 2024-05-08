from django.urls import path
from .views import api_task_detail, api_tasks, api_control_panel
#from rest_framework.routers import DefaultRouter
#from .views import TaskViewSet

"""
task_router = DefaultRouter()
task_router.register(r'tasks', TaskViewSet)
"""

urlpatterns = [
    path('tasks/<int:taskId>/', api_task_detail),
    path('tasks/', api_tasks),
    path('control/<int:CompanyId>/', api_control_panel),
]
