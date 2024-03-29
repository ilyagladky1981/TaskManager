# Generated by Django 4.0 on 2024-01-24 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0011_alter_officehours_workdayend_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='officehours',
            name='WorkdayEnd',
            field=models.TimeField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='officehours',
            name='WorkdayStart',
            field=models.TimeField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='task',
            name='DateOfDone',
            field=models.DateTimeField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='task',
            name='DateRegistration',
            field=models.DateTimeField(blank=True, default=None),
        ),
    ]
