from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
# from stringfield import StringField
from ..models import Task, ServiceSet, Service, CategorySet
from ..models import Person, Situation, ITTaskType
from ..models import PriorityColor
import io


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
          'manual_sort', 'ProjectName', 'StoryPoint',
          'Priority', 'CreatedByUser',  'EffortsId' )


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
          'manual_sort', 'ProjectName', 'StoryPoint',
          'Priority', 'CreatedByUser',  'EffortsId' ]


class ControlSerializer(serializers.ModelSerializer):
    PersonFullName = serializers.CharField(source='PersonFullNameId.PersonFullName')

    class Meta:
        model = Task
        depth = 1
        fields = ['id', 'CompanyId', 'TaskId', 
          'TaskName', 'DateRegistration', 
          'SituationType', 'ServiceName', 
          'PersonFullName', 'ITTaskTypeName', 
          'TypeOfActionName', 'Description', 
          'CategoryOfTaskName', 'ResultOfTaskName', 
          'DateOfDone', 'Comments', 'manual_selection', 
          'manual_sort',  'ProjectName', 'StoryPoint',
          'Priority', 'CreatedByUser',  'EffortsId' ]


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

class SituationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Situation
        fields = [
            'id',
            'SituationType'
            ]


class ITTaskTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ITTaskType
        fields = [
            'id',
            'ITTaskTypeName'
            ]


class PriorityColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriorityColor
        fields = [
            'id',
            'color',
            'priority'
            ]


class TaskNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id']
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['fullTaskName'] = f"{instance.id}_{instance.TaskName}" 
        data['fullTaskName'] += f"_{instance.PersonFullNameId.PersonFullName}_{instance.DateRegistration}"
        return data





