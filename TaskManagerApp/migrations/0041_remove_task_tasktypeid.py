# Generated by Django 4.0 on 2024-06-01 18:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0040_storypoint'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='TaskTypeId',
        ),
    ]