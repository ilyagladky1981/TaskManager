from django.urls import path
from .views import api_task_detail, api_tasks, api_control_panel, api_control_panel_project, api_service_set


urlpatterns = [
    path('tasks/<int:UserId>/serviceset/', api_service_set),
    path('tasks/<int:UserId>/<int:taskId>/', api_task_detail),
    path('tasks/<int:UserId>/', api_tasks),
    path('control/<int:UserId>/<int:CompanyId>/<int:ProjectID>/', api_control_panel_project),
    path('control/<int:UserId>/<int:CompanyId>/', api_control_panel),
]
