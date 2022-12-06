## Technical Details

Spring / Maven / Java 19

## Dependency

[Workbench](https://www.mysql.com/products/workbench/)
MySQL Schema / DB - employee-schema
MySQL Table - employee

1. [Create Employee Schema](docker-mysql-8/create-schema.sql)
2. [Create Table Called Employee](docker-mysql-8/create-table.sql) 
3. [Create Some Data](docker-mysql-8/create-data.sql) 

## Default Functional Capability

The application makes the following api available:

GET `/api/employees`

## Run locally

`.\mvnw package spring-boot:run -Dspring-boot.run.arguments="--spring.datasource.username=root --spring.datasource.password=123456 --spring.datasource.url=jdbc:mysql://localhost:3306/employee-schema" && java -jar target\employee-0.0.1-SNAPSHOT.jar`

## Build Docker Image

`docker build -t dragonspears/docker-sample-spring .`

## Run Docker Container

`docker run -d --rm -p 8080:8080 --name backend -e spring.datasource.password=123456 -e spring.datasource.username=admin -e spring.datasource.url=jdbc:mysql://host.docker.internal:3306/employee-schema dragonspears/docker-sample-spring`

## Set environment variables are located

`.env`
`.\src\environments`

