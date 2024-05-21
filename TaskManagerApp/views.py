from django.shortcuts import render
from django.views.generic import ListView, TemplateView
from .models import Task
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from datetime import datetime
from django.utils import timezone
from django.http import JsonResponse
from .serializers import TaskSerializer
from django.views.decorators.clickjacking import xframe_options_exempt


# @xframe_options_exempt
@api_view(['GET'])
def api_tasks(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)



@api_view(['GET'])
def api_task_detail(request, task_id):
    if request.method == 'GET':
        task = Task.objects.get(id=task_id)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

