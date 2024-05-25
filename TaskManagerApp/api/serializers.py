from rest_framework import serializers
from ..models import Task, ServiceSet, Service, CategorySet
from ..models import Person



class CategorySetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorySet
        fields = [
            'CategoryId',
            'TaskId',
        ]

class ServiceSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Service
        fields = [
            'id',
            'SituationType'
            ]

class ServiceSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceSet
        fields = [
            'ServiceId',
            'TaskId',
        ]


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'CompanyId', 'TaskId', 
          'TaskName', 'DateRegistration', 
          'SituationType', 'ServiceName', 
          'PersonFullNameId', 'ITTaskTypeName', 
          'TypeOfActionName', 'Description', 
          'CategoryOfTaskName', 'ResultOfTaskName', 
          'DateOfDone', 'Comments', 'manual_selection', 
          'manual_sort', 'PriorityColor', 'ProjectName', 
          'Priority', 'CreatedByUser', 'TaskTypeId', 'EffortsId' )


class DepthTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        depth = 1
        fields = ['id', 'CompanyId', 'TaskId', 
          'TaskName', 'DateRegistration', 
          'SituationType', 'ServiceName', 
          'PersonFullNameId', 'ITTaskTypeName', 
          'TypeOfActionName', 'Description', 
          'CategoryOfTaskName', 'ResultOfTaskName', 
          'DateOfDone', 'Comments', 'manual_selection', 
          'manual_sort', 'PriorityColor', 'ProjectName', 
          'Priority', 'CreatedByUser', 'TaskTypeId', 'EffortsId' ]


class ControlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        depth = 1
        fields = ['id', 'CompanyId', 'TaskId', 
          'TaskName', 'DateRegistration', 
          'SituationType', 'ServiceName', 
          'PersonFullNameId', 'ITTaskTypeName', 
          'TypeOfActionName', 'Description', 
          'CategoryOfTaskName', 'ResultOfTaskName', 
          'DateOfDone', 'Comments', 'manual_selection', 
          'manual_sort', 'PriorityColor', 'ProjectName', 
          'Priority', 'CreatedByUser', 'TaskTypeId', 'EffortsId' ]


class PersonFIOSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Person
        fields = [
            'id',
            'PersonFullName'
            ]

class PersonSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Person
        fields = [
            'id',
            'Name',
            'Surname',
            'Patronymic',
            'PersonFullName',
            'WorkPhone',
            'MobilePhone',
            'Email',
            'DepartmentName',
            'Position',
            'CompanyName'
            ]

