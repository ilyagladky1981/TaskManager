from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
# from stringfield import StringField
from ..models import Task, ServiceSet, Service, CategorySet
from ..models import Person, Situation, ITTaskType
from ..models import PriorityColor


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


class TaskShortInfoSerializer(serializers.ModelSerializer):
    PersonFullName = serializers.CharField(source='PersonFullNameId.PersonFullName')
    class Meta:
        model = Task
        fields = [
            'id', 
            'TaskName',
            'DateRegistration',
            'PersonFullName' 
        ]

class TaskNameSerializer(serializers.Serializer):
    strres = serializers.CharField(source=__str__)
    # id = serializers.IntegerField()
    # PersonFullName = serializers.CharField()



class TaskModel():
    def __init__(self, id, PersonFullName):
        self.id = id
        self.PersonFullName = PersonFullName
    
    def __str__(self):
        return f"Task.id={self.id}_{self.PersonFullName}"


def encode():
    model = TaskModel(1, 'Денисов Николай Валерьевич')
    model_sr = TaskNameSerializer(model)
    print(model_sr.data,type(model_sr.data),sep='\n')
    json = JSONRenderer().render(model_sr.data)
    print(json)

def decode():
    stream = io.BytesIO(b'{"id":1,"PersonFullName":"\xd0\x94\xd0\xb5\xd0\xbd\xd0\xb8\xd1\x81\xd0\xbe\xd0\xb2 \xd0\x9d\xd0\xb8\xd0\xba\xd0\xbe\xd0\xbb\xd0\xb0\xd0\xb9 \xd0\x92\xd0\xb0\xd0\xbb\xd0\xb5\xd1\x80\xd1\x8c\xd0\xb5\xd0\xb2\xd0\xb8\xd1\x87"}')
    data = JSONParser().parser(stream)

