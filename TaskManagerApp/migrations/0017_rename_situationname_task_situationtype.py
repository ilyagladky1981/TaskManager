# Generated by Django 4.0 on 2024-02-29 10:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0016_alter_task_priority'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='SituationName',
            new_name='SituationType',
        ),
    ]
