## Intent

This is a sample project to create and deploy a dockerized 3 tier application.  It is NOT production ready and should not be considered to be production code. It is purely to demonstrate the build / deploy of dockerized applications.  

This application has only been tested on Windows 10/11.  It may work on other OS's but no guarantee.  

It is composed of 3 parts:

1. [Angular 14 front-end](docker-sample-angular) - See the docker-sample-angular folder
2. [Spring / Maven back-end](springboot-crud) - See the springboot-crud folder
3. [MySQL 8 database server](docker-mysql-8) - See the docker-mysql-8 folder

## Dependencies

1. MS Windows
2. [Java](https://access.redhat.com/jbossnetwork/restricted/softwareDetail.html?softwareId=104805&product=core.service.openjdk&version=17.0.5&downloadType=distributions) / JAVA_HOME is added to the PATH.
2. Docker Desktop
2. Docker Compose
3. [Workbench](https://www.mysql.com/products/workbench/)
4. Postman
5. NPM

## Architecture
[Architecture](assets/architecture.png)

## First Time Process to run the application

1. `git clone https://github.com/dragonspearsinc/docker-sample-3-tier`
2. `cd docker-sample-3-tier`
3. `docker compose up -d`  //Depending on your internet connection, this may take a few minutes the first time
4. `docker exec -it docker-sample-3-tier-db-1 mysql -uroot -p`  //default passwrd is `123456`
5. `update mysql.user set host = '%' where user='admin';`
6. `update mysql.user set host = '%' where user='root';`
7. `docker restart docker-sample-3-tier-db-1`
7. Open up Workbench
8. [Create Employee Schema](docker-mysql-8/create-schema.sql)
9. [Create Table Called Employee](docker-mysql-8/create-table.sql) 
10. [Create Some Data](docker-mysql-8/create-data.sql) 
11. Open up Postman, do a GET on `http://localhost:8080/api/employees/` -- This tests connectivity to the DB via the Spring/Maven backend.
12. Open up the browser to:  `http://localhost:3000` -- This will show end to end connectivity, no employees, and show an environment variable being used (if it has been created in a `.env` file).  

## Run the application

1. `docker compose up -d`

## Stop the application

1. `docker compose down`
