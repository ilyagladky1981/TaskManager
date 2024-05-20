from django.urls import path
from .views import api_task_detail, api_tasks, api_control_panel, api_control_panel_project

urlpatterns = [
    path('tasks/<int:taskId>/', api_task_detail),
    path('tasks/', api_tasks),
    path('control/<int:CompanyId>/<int:ProjectID>/', api_control_panel_project),
    path('control/<int:CompanyId>/', api_control_panel),
]
