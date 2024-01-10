from django.shortcuts import render
from django.views.generic import ListView, TemplateView
from .models import Task


class HomePageView(ListView):
    model = Task
    template_name = 'home.html'
    context_object_name = 'all_tasks_list'


class AboutPageView(TemplateView):
    template_name = 'about.html'

class DataImportPageView(TemplateView):
    template_name = 'DataImport.html'


