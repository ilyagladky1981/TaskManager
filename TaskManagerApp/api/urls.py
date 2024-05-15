from django.urls import path
from .views import api_task_detail, api_tasks, api_control_panel

urlpatterns = [
    path('tasks/<int:taskId>/', api_task_detail),
    path('tasks/', api_tasks),
    path('control/<int:CompanyId>/', api_control_panel),
]
