## Intent

This is a sample project to create and deploy a dockerized 3 tier application.  It is NOT production ready and should not be considered to be production code. It is purely to demonstrate the build / deploy of dockerized applications.  

This application has only been tested on Windows 10/11.  It may work on other OS's but no guarantee.  

It is composed of 3 parts:

1. [Angular 14 front-end](docker-sample-angular) - See the docker-sample-angular folder
2. [Spring / Maven back-end](springboot-crud) - See the springboot-crud folder
3. MySQL 8 database server

## Dependencies

1. MS Windows
2. Docker Desktop
2. Docker Compose
3. [Workbench](https://www.mysql.com/products/workbench/)
4. Postman
5. NPM

## Architecture
[Architecture](assets/architecture.png)

## First Time Process to run the application

1. `git clone ` the application down
2. `docker compose up -d`
3. `docker exec -it docker-sample-3-tier-db-1 mysql -uroot -p`
4. `update mysql.user set host = '%' where user='admin';`
5. `update mysql.user set host = '%' where user='root';`
6. `docker restart docker-sample-3-tier-db-1`
7. Open up Workbench
8. [Create Employee Schema](docker-mysql-8/create-schema.sql)
9. [Create Table Called Employee](docker-mysql-8/create-table.sql) 
10. Open up Postman, do a GET on `http://localhost:8080/api/employees/` -- The results should be `[]`.  This tests connectivity to the DB via the Spring/Maven backend.
11. Open up the browser to:  `http://localhost:3000` -- This will show end to end connectivity, no employees, and show an environment variable being used.  
12. [Create Some Data](docker-mysql-8/create-data.sql) 

## Run the application

1. `docker compose up -d`

## Stop the application

1. `docker compose down`