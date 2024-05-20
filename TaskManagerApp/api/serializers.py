from rest_framework import serializers
from ..models import Task
from ..models import Person



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

