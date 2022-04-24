# Generated by Django 3.2.13 on 2022-04-24 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('creation_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('modification_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('rep_image', models.CharField(blank=True, max_length=300, null=True)),
            ],
            options={
                'db_table': 'dataset',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ImageMetadata',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('annotation', models.JSONField(blank=True, null=True)),
                ('image_url', models.CharField(blank=True, max_length=300, null=True)),
                ('image_name', models.CharField(blank=True, max_length=50, null=True)),
                ('image_size', models.CharField(blank=True, max_length=30, null=True)),
                ('size', models.CharField(blank=True, max_length=20, null=True)),
                ('creation_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('modification_date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
            options={
                'db_table': 'image_metadata',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='WorkspaceDataset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workspace', models.IntegerField(blank=True, null=True)),
                ('dataset', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'workspace_dataset',
                'managed': False,
            },
        ),
    ]
