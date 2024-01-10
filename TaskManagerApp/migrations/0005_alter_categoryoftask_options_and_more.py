# Generated by Django 4.0 on 2023-12-29 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManagerApp', '0004_alter_priorityinfo_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='categoryoftask',
            options={'verbose_name_plural': 'Category Of Task'},
        ),
        migrations.AlterModelOptions(
            name='executiontime',
            options={'verbose_name_plural': 'Execution Time'},
        ),
        migrations.AlterModelOptions(
            name='ittasktype',
            options={'verbose_name_plural': 'IT Task Type'},
        ),
        migrations.AlterModelOptions(
            name='priorityinfo',
            options={'verbose_name_plural': 'Priority Info'},
        ),
        migrations.AlterModelOptions(
            name='resultoftask',
            options={'verbose_name_plural': 'Result Of Task'},
        ),
        migrations.AddField(
            model_name='person',
            name='PhoneNumber',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
