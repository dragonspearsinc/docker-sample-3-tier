FROM openjdk:8-jdk-alpine

WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

#builds the app, #host.docker.internal allows us to bypass the networking isolation (so we can test with postman from the host), change this if you want to isolate
CMD ./mvnw package spring-boot:run -Dspring-boot.run.arguments="--spring.datasource.username=root --spring.datasource.password=123456 --spring.datasource.url=jdbc:mysql://localhost:3306/employee-schema" && java -jar target\employee-0.0.1-SNAPSHOT.jar

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} employee-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","/usr/local/app/employee-0.0.1-SNAPSHOT.jar"]
