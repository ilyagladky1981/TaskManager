from django.test import TestCase
from .models import Task

class TaskModelTest(TestCase):
    def setUp(self):
        Task.objects.create(TaskName='just a test')
    
    def test_TaskName_content(self):
        task=Task.objects.get(id=1)
        expected_object_name = f'{task.TaskName}'
        self.assertEqual(expected_object_name, 'just a test')

class HomePageViewTest(TestCase):
    def setUp(self):
        Task.objects.create(TaskName='this is another test')
    
    def test_view_url_exists_at_proper_location(self):
        resp = self.client.get('/')
        self.assertEqual(resp.status_code, 200)
    
    def test_view_url_by_name(self):
        resp = self.client.get(reverse('home'))
        self.assertEqual(resp.status_code, 200)
    
    def test_view_uses_correct_template(self):
        resp = self.client.get(reverse('home'))
        self.assertEqual(resp.status_code, 200)
        self.assertTemplateUsed(resp, 'home.html')
