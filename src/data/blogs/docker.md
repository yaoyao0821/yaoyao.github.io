---
# slug: "/docker"
date: "2020-05-13"
title: "Docker Notes"
---



In my previous project, we used Docker to test and deploy. This is my learning note for Docker, it also contains related tasks and doc I worked on before. 


### Docker Introduction

Docker is an open platform for developing, shipping, and running applications. It enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.


### Docker in our projects

We have dockerfiles for client-ng(fake name) and server-ng(fake name), to test locally we need to run those dockerfiles separately to create two containers. This chapter is focusing on introducing steps to run in client-ng and server-ng, and code explanations to help understand dockerfiles better.


### How to run?

#### Preparation
1. Install a **Docker Desktop app** to help you to manage images and containers better.
2. In **client-ng**:
    1. Set the **env** to docker
    2. Build to get build files in the **dist/docker** folder.
3. Use **Azure CLI** to log in ([Doc on Azure](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli?tabs=azure-cli)):
    ```
        az login
        az acr login --name registryname
    ```

#### Steps
1. Use the command line to run the Dockerfile to get a new **image**.
    - In client-ng, the dockerfile is named Dockerfile.A, and we want to create an image named docker-viewer:  
    
    ```shell
        docker build -f Dockerfile.A -t docker-viewer .
    ```

    - In server-ng, the dockerfile is using the default name Dockerfile so we do not need to specify the path: 
    ```
        docker build -t docker-server .
    ```
2. Or we can pull the existing image from **Azure**. Here is an example using docker CLI to pull a server image:
	```shell
        docker pull registry.azurecr.io/path/node-server:4799
    ```
3. Use the command line to create a new **container** with **env configs**.
    - Here is an example to create a server container. Notice: port number mapping 
    ```shell
        docker run --name docker-server-pipeline --env-file ./env/pipeline.env -p 8800:8080 -d registry.azurecr.io/a/node-server:4799
    ```

    - Here is an example to create a client side container.
    ```shell
        docker run --env-file config/local/env.docker.local -p 8800:8800 -d docker-client
    ```

    - Explanations: --name defines the container name; --env-file defines the env file to be used when creating the container; -p sets port number mapping; -d defines the image used to create the container.
  
4. Now in the Docker Desktop you can see new containers and logs there. Once it’s ready you can run it in the browser.


### Dockerfile Notice
1. use envsubst to substitute environment variable placeholders inside configuration files. The env file was passed by command line when we created the image before. 

2. use [multiple stages](https://docs.docker.com/develop/develop-images/multistage-build/) for **reusability and security**. The idea is to install and build in the build-stage, and then copy those build files into the Server Image Stage.


## Related Tasks


### Health check for Azure

The task is to add a specific health route to check if the server is healthy (running). We can use it to see if our docker container is running or not.


### Disable Loggly

In the Azure pipeline Loggly is not available, and the server doesn't work after deployment. In this task, we cherry pick Glen's commits and resolve some conflicts to disable Loggly.


### Implement HTTPS for local testing (low priority)

When we do **local testing** using both server and viewer containers, HTTPS is necessary. It’s kind of tricky to implement HTTPS in local server and viewer containers.


#### client side

Enable the 443 port number with SSL and also copy https certs folder into the container. 

We can run docker-compose up to create and run images and containers.


#### server side

Idea: Add a new nginx as a **reverse proxy**. 

**Pipeline.env** is an env file for testing.

**Docker-compose.yml** sets all configurations, including env file, ports mapping, volumes for SSL folder and nginx config file, and bridge driver to help to build the reverse proxy. 

**Nginx.conf** is responsible for setting the nginx image, including 443 ports with SSL, server name setting, and reverse proxy setting using **proxy_pass**. The idea is straightforward, let's imagine we have a webapp running on http://127.0.0.1:5000/api and want it to be available on https://localhost:8080/webapp/, here's how we would do it in a minimal nginx.conf:
```
listen 8080;

location /webapp/ {

proxy_pass http://127.0.0.1:5000/api/;

}
```
In this case, the request with the /webapp/ URI will be proxied to http://127.0.0.1:5000/api/.  More details about **reverse proxy** can be checked in this link: [NGINX Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/?_bt=569828502937&_bk=&_bm=&_bn=g&_bg=133928957449&gclid=CjwKCAiAgbiQBhAHEiwAuQ6Bkust6KofBwrJzDTvktWTPfOAEtydRM9w).



### Troubleshooting in local testing



1. If the server fails, in most cases, it’s caused by the env config settings.
2. If there is a CORS error in the console, make sure code app.use(cors()) is in app.js.

# References

[https://docs.docker.com/get-started/overview/](https://docs.docker.com/get-started/overview/)

[https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli?tabs=azure-cli](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli?tabs=azure-cli)

[https://www.ibm.com/cloud/learn/docker](https://www.ibm.com/cloud/learn/docker)