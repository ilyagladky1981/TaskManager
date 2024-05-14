from django.shortcuts import render
from django.views.generic import ListView, TemplateView
from ..models import Task
from ..models import ResultOfTask
from django.db.models import Q

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from rest_framework import status

from django.http import HttpResponse
from datetime import datetime
from django.utils import timezone
from django.http import JsonResponse
from .serializers import TaskSerializer
from django.views.decorators.clickjacking import xframe_options_exempt



@api_view(['GET'])
def api_tasks(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    else:
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def api_task_detail(request, taskId):
    task = Task.objects.get(id=taskId)
    if request.method == 'GET':
        serializer = TaskSerializer(task)
        return Response(serializer.data)
    elif request.method == 'PUT' or request.method == 'PATCH':
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
            status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def api_control_panel(request, CompanyId):
    if request.method == 'GET':
        q = (Q(ResultOfTaskName__Name='') | Q(ResultOfTaskName__Name='в_работе')) & Q(CompanyId=CompanyId)
        control_panel = Task.objects.filter(q).order_by('-PriorityColor')
        serializer = TaskSerializer(control_panel, many=True)
        return Response(serializer.data)

