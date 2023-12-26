from django.contrib import admin

from .models import Task
from .models import Situation
from .models import Service
from .models import Person
from .models import Department
from .models import ITTaskType
from .models import TypeOfAction
from .models import CategoryOfTask
from .models import ResultOfTask
from .models import ExecutionTime
from .models import PriorityInfo


admin.site.register(Task)
admin.site.register(Situation)
admin.site.register(Service)
admin.site.register(Person)
admin.site.register(Department)
admin.site.register(ITTaskType)
admin.site.register(TypeOfAction)
admin.site.register(CategoryOfTask)
admin.site.register(ResultOfTask)
admin.site.register(ExecutionTime)
admin.site.register(PriorityInfo)
