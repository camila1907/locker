# Generated by Django 3.1.5 on 2021-02-03 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locker', '0003_remove_locker_fecha'),
    ]

    operations = [
        migrations.AddField(
            model_name='locker',
            name='codigo',
            field=models.TextField(blank=True, max_length=100, verbose_name='codigo'),
        ),
    ]
