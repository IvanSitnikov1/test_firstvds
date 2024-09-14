FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

ENV PYTHONUNBUFFERED=1

RUN pip install mysqlclient

CMD ["sh", "app.sh"]