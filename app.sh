#!/bin/bash

sleep 10
python manage.py migrate --noinput

python manage.py collectstatic --noinput

python manage.py runserver --noreload 0.0.0.0:8000