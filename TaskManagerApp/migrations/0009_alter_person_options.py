# Generated by Django 4.0 on 2024-01-07 18:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0008_person_email_person_position_task_taskid_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='person',
            options={'verbose_name_plural': 'People'},
        ),
    ]