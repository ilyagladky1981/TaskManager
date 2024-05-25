from django.urls import path
from .views import api_task_detail, api_tasks, api_control_panel, api_control_panel_project, api_service_set
from .views import api_get_person_fio

urlpatterns = [
    path('serviceset/<int:UserId>/', api_service_set),
    path('tasks/<int:UserId>/<int:taskId>/', api_task_detail),
    path('tasks/<int:UserId>/', api_tasks),
    path('control/<int:UserId>/<int:CompanyId>/<int:ProjectID>/', api_control_panel_project),
    path('control/<int:UserId>/<int:CompanyId>/', api_control_panel),
    path('people/<int:UserId>/<int:CompanyId>/', api_get_person_fio),
]
