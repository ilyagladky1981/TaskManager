from rest_framework import serializers
from ..models import Task
from ..models import Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'PersonFullName', 'Email']


class TaskSerializer(serializers.ModelSerializer):
    AuthorFullName = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Task
        fields = ['TaskId', 'TaskName', 'AuthorFullName']



