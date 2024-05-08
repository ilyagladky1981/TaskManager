from django.shortcuts import render
from django.http import JsonResponse

from TaskManagerApp.models import Task
from .serializers import TaskSerializer


def api_tasks(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return JsonResponse(serializer.data, safe=False)


