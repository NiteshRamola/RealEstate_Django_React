# Generated by Django 3.2.3 on 2021-05-25 10:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='messages',
            new_name='message',
        ),
    ]
