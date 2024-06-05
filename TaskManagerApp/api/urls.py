from django.urls import path
from .views import api_task_detail, api_tasks, api_control_panel, api_control_panel_project, api_service_set
from .views import get_person_fio_api, get_situations, get_ittasktypename
from .views import get_prioritycolor, get_projectname, get_person_fio_api5

urlpatterns = [
    path('serviceset/<int:UserId>/', api_service_set),
    path('tasks/<int:UserId>/<int:taskId>/', api_task_detail),
    path('tasks/<int:UserId>/', api_tasks),
    path('project/<int:UserId>/<int:CompanyId>/<int:ProjectID>/', api_control_panel_project),
    path('control/<int:UserId>/<int:CompanyId>/', api_control_panel),
    path('people/<int:UserId>/<int:CompanyId>/', get_person_fio_api),
    path('situations/<int:UserId>/<int:CompanyId>/', get_situations),
    path('ittasktypename/<int:UserId>/<int:CompanyId>/', get_ittasktypename),
    path('prioritycolor/<int:UserId>/<int:CompanyId>/', get_prioritycolor),
    path('projectname/<int:UserId>/<int:CompanyId>/', get_projectname),
    path('taskstest/<int:UserId>/<int:CompanyId>/', get_person_fio_api5),
    path('people55/<int:UserId>/<int:CompanyId>/', get_person_fio_api),
    path('people66/<int:UserId>/<int:CompanyId>/', get_person_fio_api),
]
