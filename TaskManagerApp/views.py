from django.shortcuts import render
from django.views.generic import ListView, TemplateView
from .models import Task
from django.http import HttpResponse
from datetime import datetime
from django.utils import timezone



class HomePageView(ListView):
    model = Task
    template_name = 'home.html'
    context_object_name = 'all_tasks_list'


class AboutPageView(TemplateView):
    template_name = 'about.html'

class DataImportPageView(TemplateView):
    template_name = 'DataImport.html'


def TimePageView(request):
    current_tz = 'Europe/Moscow'
    timezone.activate(current_tz)
    # now = timezone.localtime(timezone.now())
    current_time = timezone.now().time()
    now = timezone.localtime(timezone.now())
    return render(request, 'CurrentTime.html', {'current_time':now})
