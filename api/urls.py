from django.urls import path, include
from rest_framework.routers import DefaultRouter
from TaskManagerApp.api.urls import task_router


router = DefaultRouter()
# Tasks
router.registry.extend(task_router.registry)


urlpatterns = [
    path('', include(router.urls)),
]
