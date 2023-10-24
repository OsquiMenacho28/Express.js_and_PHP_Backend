# Node.js REST API with Express & MySQL

This repository contains a Node.js application that serves as a REST API using Express and interacts with a MySQL database. This simple project focuses on managing actor information in a database, and, in addition, generate a Backend for said table.

## Project setup

To get started, make sure you have Node.js installed. If not, you can download it from [Node.js](https://nodejs.org/en).

1. Clone this repository to your local machine or download the ZIP file and extract it.
2. Open your terminal or command prompt and navigate to the project directory.
3. Run the following command to install the project dependencies:

```
npm install
```

## Connecting to the Database

Before you can run the application, you need to set up the MySQL database and create the necessary table.

1. Create a database named "sakila_actors" in MySQL Workbench or phpMyAdmin.
2. Within the "sakila_actors" database, create a table named "Actor" with the following fields:
   - actor_id (Primary Key)
   - first_name
   - last_name
   - last_update

Make sure to set up your database connection in the project's configuration file.

## Compiling and Running the Application

After setting up the database and installing the dependencies, you can compile and run the application.

Use the following command to start the application:

```
npm run build
```

## Enjoy the App

Once you've completed all the above steps, your Node.js REST API is up and running, and you're ready to enjoy using the app! This API provides endpoints to interact with the "Actor" data in the MySQL database.
