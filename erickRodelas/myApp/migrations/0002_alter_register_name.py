# Generated by Django 5.0.6 on 2024-07-11 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='name',
            field=models.CharField(max_length=200),
        ),
    ]