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
    service_id = ServiceSerializer()
    task_id = TaskSerializer()

    class Meta:
        model = ServiceSet
        fields = [
            'task_id',
            'service_id'
        ]

    def create(self, validated_data) -> ServiceSet:
        service_id_gotten = ServiceSet.objects.create(**validated_data.get('service_id'));
        print(f"validated_data.get('service_id') = {validated_data.get('service_id')}")
        ...
        
        task_id_gotten = Task.objects.create(**validated_data.get('task_id'))
        print(f"validated_data.get('task_id') = {validated_data.get('task_id')}")


        service_set_unit = ServiceSet.objects.create(
            service_id=service_id_gotten, task_id=task_id_gotten
        )
        return service_set_unit
