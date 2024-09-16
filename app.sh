#!/bin/bash

sleep 10
python manage.py migrate --noinput

python manage.py collectstatic --noinput

mkdir images

python manage.py runserver --noreload 0.0.0.0:8000