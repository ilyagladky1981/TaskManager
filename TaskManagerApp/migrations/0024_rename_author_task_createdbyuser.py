# Generated by Django 4.0 on 2024-05-20 12:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0023_alter_task_personfullnameid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='Author',
            new_name='CreatedByUser',
        ),
    ]
