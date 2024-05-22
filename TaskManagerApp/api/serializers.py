from rest_framework import serializers
from ..models import Task, ServiceSet, Service
from ..models import Person



class ServiceSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Service
        fields = [
            'id',
            'SituationType'
            ]


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'CompanyId', 'TaskId', 
          'TaskName', 'DateRegistration', 
          'SituationType', 'ServiceName', 
          'PersonFullNameId', 'ITTaskTypeName', 
          'TypeOfActionName', 'Description', 
          'CategoryOfTaskName', 'ResultOfTaskName', 
          'DateOfDone', 'Comments', 'manual_selection', 
          'manual_sort', 'PriorityColor', 'ProjectName', 
          'Priority', 'CreatedByUser', 'TaskTypeId', 'EffortsId' ]
        read_only_fields = ['ServiceName']


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


class ServiceSetSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceSet
        fields = [
            'task_id_s',
            'service_id_s',
        ]
