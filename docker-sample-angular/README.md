## Technical Details

Angular 14

## Default Functional Capability

The application makes an ajax call to `http://localhost:8080/api/employees` by default


## Run locally

`ng serve -o`

## Build Docker Image

`docker build -t dragonspears/docker-sample-angular .`

## Run Docker Container

`docker run -d -p 3000:80 --rm dragonspears/docker-sample-angular`

## Set environment variables are located

`.env`
`.\src\environments`

