include .env

.PHONY: db dbstart dbstop dbrestart dbsetup

db:
	mysql -h $(DB_HOST) -P $(DB_PORT) -u $(DB_ROOT_USER) --password=$(DB_ROOT_PASS)

dbstart: 
	docker run --rm -p $(DB_PORT):3306 --name mydb -e MYSQL_ROOT_PASSWORD=$(DB_ROOT_PASS) -d mysql:5.7.24

dbstop:
	docker stop mydb

dbrestart:
	docker stop mydb
	docker run --rm -p $(DB_PORT):3306 --name mydb -e MYSQL_ROOT_PASSWORD=$(DB_ROOT_PASS) -d mysql:5.7.24

dbsetup:
	mysql -h $(DB_HOST) -P $(DB_PORT) -u $(DB_ROOT_USER) --password=$(DB_ROOT_PASS) < ./db/create.sql

dbschema:
	mysqldump -h $(DB_HOST) -P $(DB_PORT) -u $(DB_ROOT_USER) --password=$(DB_ROOT_PASS) --no-data --column-statistics=0 $(DB_NAME)
