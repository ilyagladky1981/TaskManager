# Generated by Django 4.0 on 2024-01-12 14:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0012_remove_efforts_taskid_task_effortsid'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='EffortsStat',
            new_name='EffortsStats',
        ),
        migrations.AlterModelOptions(
            name='effortsstats',
            options={'verbose_name_plural': 'EffortsStats'},
        ),
        migrations.RenameField(
            model_name='person',
            old_name='FullName',
            new_name='PersonFullName',
        ),
    ]
