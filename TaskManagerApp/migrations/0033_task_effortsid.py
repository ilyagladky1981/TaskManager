# Generated by Django 4.0 on 2024-05-25 13:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0032_auto_20240525_1246'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='EffortsId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='TaskManagerApp.effortsstats'),
        ),
    ]
