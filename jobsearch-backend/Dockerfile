# FROM maven:3.8.2-jdk-8 # for Java 8
FROM maven:3.9.1-openjdk-19.0.2

WORKDIR /jobsearch-backend
COPY . .
RUN mvn clean install

CMD mvn spring-boot:run