from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin


from .models import Company
from .models import Task
from .models import Situation
from .models import Service
from .models import ServiceSet
from .models import Person
from .models import Department
from .models import ITTaskType
from .models import TypeOfAction
from .models import CategoryOfTask
from .models import ResultOfTask
from .models import Efforts
from .models import EffortsStats
from .models import PriorityInfo



class CompanyResource(resources.ModelResource):
    class Meta:
        model = Company

class CompanyAdmin(ImportExportModelAdmin):
    resource_classes = [CompanyResource]


class EffortsResource(resources.ModelResource):
    class Meta:
        model = Efforts

class EffortsAdmin(ImportExportModelAdmin):
    resource_classes = [EffortsResource]



class EffortsStatsResource(resources.ModelResource):
    class Meta:
        model = EffortsStats

class EffortsStatsAdmin(ImportExportModelAdmin):
    resource_classes = [EffortsStatsResource]


class ServiceSetResource(resources.ModelResource):
    class Meta:
        model = ServiceSet

class ServiceSetAdmin(ImportExportModelAdmin):
    resource_classes = [ServiceSetResource]



class PersonResource(resources.ModelResource):
    class Meta:
        model = Person

class PersonAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_classes = [PersonResource]
    list_display = ['PersonFullName', 'Position', 'DepartmentName']
    pass

class TaskResource(resources.ModelResource):
    class Meta:
        model = Task

class TaskAdmin(ImportExportModelAdmin):
    resource_classes = [TaskResource]


class SituationResource(resources.ModelResource):
    class Meta:
        model = Situation

class SituationAdmin(ImportExportModelAdmin):
    resource_classes = [SituationResource]


class ServiceResource(resources.ModelResource):
    class Meta:
        model = Service

class ServiceAdmin(ImportExportModelAdmin):
    resource_classes = [ServiceResource]



class DepartmentResource(resources.ModelResource):
    class Meta:
        model = Department

class DepartmentAdmin(ImportExportModelAdmin):
    resource_classes = [DepartmentResource]


class ITTaskTypeResource(resources.ModelResource):
    class Meta:
        model = ITTaskType

class ITTaskTypeAdmin(ImportExportModelAdmin):
    resource_classes = [ITTaskTypeResource]


class TypeOfActionResource(resources.ModelResource):
    class Meta:
        model = TypeOfAction

class TypeOfActionAdmin(ImportExportModelAdmin):
    resource_classes = [TypeOfActionResource]


class CategoryOfTaskResource(resources.ModelResource):
    class Meta:
        model = CategoryOfTask

class CategoryOfTaskAdmin(ImportExportModelAdmin):
    resource_classes = [CategoryOfTaskResource]


class ResultOfTaskResource(resources.ModelResource):
    class Meta:
        model = ResultOfTask

class ResultOfTaskAdmin(ImportExportModelAdmin):
    resource_classes = [ResultOfTaskResource]


admin.site.register(Company, CompanyAdmin)
admin.site.register(Task, TaskAdmin)
admin.site.register(Situation, SituationAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(ServiceSet, ServiceSetAdmin)
admin.site.register(Person, PersonAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(ITTaskType, ITTaskTypeAdmin)
admin.site.register(TypeOfAction, TypeOfActionAdmin)
admin.site.register(CategoryOfTask, CategoryOfTaskAdmin)
admin.site.register(ResultOfTask, ResultOfTaskAdmin)
admin.site.register(Efforts, EffortsAdmin)
admin.site.register(EffortsStats, EffortsStatsAdmin)

