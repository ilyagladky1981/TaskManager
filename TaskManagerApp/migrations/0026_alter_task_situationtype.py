# Generated by Django 4.0 on 2024-05-21 11:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0025_alter_serviceset_serviceid_alter_serviceset_taskid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='SituationType',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.situation'),
        ),
    ]