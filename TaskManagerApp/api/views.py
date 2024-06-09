from django.shortcuts import render
from django.views.generic import ListView, TemplateView
from ..models import Task, Person
from ..models import ResultOfTask, Situation, ITTaskType
from ..models import ServiceSet, Service 
from ..models import CategoryOfTask, CategorySet
from ..models import PriorityColor
from django.db.models import Q

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from rest_framework import status

from django.http import HttpResponse
from datetime import datetime
from django.utils import timezone
from django.http import JsonResponse
from .serializers import TaskSerializer, DepthTaskSerializer, ControlSerializer
from .serializers import ServiceSetSerializer, CategorySetSerializer
from .serializers import CategoryOfTaskSerializer, ServiceSerializer
from .serializers import PersonFIOSerializer
from .serializers import SituationSerializer
from .serializers import ITTaskTypeSerializer
from .serializers import PriorityColorSerializer
# from .serializers import TaskShortInfoSerializer
from .serializers import TaskNameSerializer


from django.views.decorators.clickjacking import xframe_options_exempt

import json



def isSavedSerializedNewList(dataList, NewTaskId, DataSerializer, DataFieldName)->(bool, dict()):
    SaveSucces = True
    errors = {}
    for dataId in dataList:
        dataForSerialize = {DataFieldName:str(dataId), 'TaskId':NewTaskId}
        serializer = DataSerializer(data=dataForSerialize)
        SaveSucces &= serializer.is_valid()
        if serializer.is_valid():
            serializer.save()
        else:
          errors.update(serializer.errors)
    return (SaveSucces, errors)


@api_view(['GET','POST'])
def api_tasks(request, UserId):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializerTask = TaskSerializer(data=request.data)
        if serializerTask.is_valid():
            serializerTask.save()
            newTaskId = serializerTask.data['id']
            serviceSetRequestData = json.loads(request.data['ServiceName'])
            (serviceSetSaveSucces, errorsSS) = isSavedSerializedNewList(dataList=serviceSetRequestData,
                                    NewTaskId=newTaskId, DataSerializer=ServiceSetSerializer,
                                    DataFieldName='ServiceId')
            categorySetRequestData = json.loads(request.data['CategoryOfTaskName'])
            (categorySetSaveSucces, errorsCS) = isSavedSerializedNewList(dataList=categorySetRequestData,
                                    NewTaskId=newTaskId, DataSerializer=CategorySetSerializer,
                                    DataFieldName='CategoryId')
            errorsSS.update(errorsCS)
            ...
            TaskSaveSucces = serviceSetSaveSucces
            TaskSaveSucces &= categorySetSaveSucces
            if TaskSaveSucces:
                return Response(serializerTask.data, 
                                    status=status.HTTP_201_CREATED)
            else:
                errorsTasks = serializerTask.errors
                errorsTasks.update(errorsSS)
                task = Task.objects.get(id=newTaskId)
                task.delete()
                return Response(errorsTasks,
                        status=status.HTTP_400_BAD_REQUEST)
        return Response(serializerTask.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def api_task_detail(request, taskId, UserId):
    task = Task.objects.get(id=taskId)
    if request.method == 'GET':
        serializer = DepthTaskSerializer(task)
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


@api_view(['GET'])
def api_control_panel(request, CompanyId, UserId):
    if request.method == 'GET':
        q = (Q(ResultOfTaskName__Name='') | Q(ResultOfTaskName__Name='в_работе')) & Q(CompanyId=CompanyId) & Q(id__gte=1425)
        control_panel = Task.objects.filter(q) # .order_by('-PriorityColor')
        serializer = ControlSerializer(control_panel, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def api_control_panel_project(request, CompanyId, ProjectID, UserId):
    if request.method == 'GET':
        q = (Q(ResultOfTaskName__Name='') | Q(ResultOfTaskName__Name='в_работе')) & Q(CompanyId=CompanyId) & Q(id__gte=1425) & Q(ProjectName=ProjectID)
        control_panel = Task.objects.filter(q) #.order_by('-PriorityColor')
        serializer = ControlSerializer(control_panel, many=True)
        return Response(serializer.data)


@api_view(['GET','POST'])
def api_service_set(request, UserId):
    if request.method == 'GET':
        service_set = ServiceSet.objects.all()
        serializer = ServiceSetSerializer(service_set, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ServiceSetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, 
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_person_fio_api(request, CompanyId, UserId):
    if request.method == 'GET':
        people = Person.objects.all()
        serializer = PersonFIOSerializer(people, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def get_situations(request, CompanyId, UserId):
    if request.method == 'GET':
        situation = Situation.objects.all()
        serializer = SituationSerializer(situation, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def get_ittasktypename(request, CompanyId, UserId):
    if request.method == 'GET':
        ittasktypenames = ITTaskType.objects.all()
        serializer = ITTaskTypeSerializer(ittasktypenames, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def get_prioritycolor(request, CompanyId, UserId):
    if request.method == 'GET':
        priorityColors = PriorityColor.objects.all()
        serializer = PriorityColorSerializer(priorityColors, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_projectname(request, CompanyId, UserId):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskNameSerializer(tasks, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def get_categories(request, CompanyId, UserId):
    if request.method == 'GET':
        categories = CategoryOfTask.objects.all()
        serializer = CategoryOfTaskSerializer(categories, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def get_services(request, CompanyId, UserId):
    if request.method == 'GET':
        service = Service.objects.all()
        serializer = ServiceSerializer(service, many=True)
        return Response(serializer.data)


# ServiceSet, Service 
# CategoryOfTask, CategorySet
# ServiceSetSerializer, CategorySetSerializer
# CategoryOfTaskSerializer, ServiceSerializer

@api_view(['GET'])
def get_person_fio_api7(request, CompanyId, UserId):
    if request.method == 'GET':
        people = Person.objects.all()
        serializer = PersonFIOSerializer(people, many=True)
        return Response(serializer.data)



