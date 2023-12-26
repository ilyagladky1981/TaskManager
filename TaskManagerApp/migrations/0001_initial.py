# Generated by Django 4.0 on 2023-12-25 07:39

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryOfTask',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CategoryOfTaskName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DepartmentName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ExecutionTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TimeExec', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='ITTaskType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ITTaskTypeName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Persons',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Surname', models.CharField(max_length=50)),
                ('Patronymic', models.CharField(max_length=50)),
                ('FullName', models.CharField(max_length=150)),
                ('DepartmentName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.department')),
            ],
        ),
        migrations.CreateModel(
            name='PriorityInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PriorityWeight', models.DecimalField(decimal_places=2, max_digits=5)),
                ('QuantityOfAsk', models.PositiveIntegerField()),
                ('UsersConcern', models.PositiveIntegerField()),
                ('AllUsersCnt', models.PositiveIntegerField()),
                ('UsersProcent', models.DecimalField(decimal_places=2, max_digits=5)),
                ('PriorityName', models.CharField(max_length=255)),
                ('PriorityCalculated', models.DecimalField(decimal_places=2, max_digits=5)),
                ('NpriorCalculated', models.PositiveIntegerField()),
                ('RealPriority', models.DecimalField(decimal_places=4, max_digits=6)),
            ],
        ),
        migrations.CreateModel(
            name='ResultOfTask',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ResultOfTaskName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ServiceName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Situation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SituationType', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TypeOfAction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TypeOfActionName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TaskName', models.CharField(max_length=255)),
                ('DateRegistration', models.DateTimeField(db_index=True, default=datetime.date.today)),
                ('Description', models.CharField(max_length=255)),
                ('DateOfDone', models.DateTimeField(default=None)),
                ('Comments', models.URLField(max_length=1000)),
                ('manual_selection', models.PositiveIntegerField()),
                ('manual_sort', models.PositiveIntegerField()),
                ('PriorityColor', models.PositiveIntegerField()),
                ('ProcentDone', models.FloatField()),
                ('ActualExecutionTime', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.executiontime')),
                ('CategoryOfTaskName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.categoryoftask')),
                ('ITTaskTypeName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.ittasktype')),
                ('PersonFullName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.persons')),
                ('Priority', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.priorityinfo')),
                ('ProjectName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.tasks')),
                ('ResultOfTaskName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.resultoftask')),
                ('ServiceName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.service')),
                ('SituationName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.situation')),
                ('TypeOfActionName', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TaskManagerApp.typeofaction')),
            ],
        ),
    ]
