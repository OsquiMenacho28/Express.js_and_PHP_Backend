# REST API with PHP, Vue.js & MySQL

This project demonstrates how to build a web application using Vue.js for the frontend and PHP with MySQL for the backend. The application displays a list of actors and allows you to perform CRUD (Create, Read, Update, Delete) operations on actor records.

## Prerequisites

Before you start, make sure you have the following installed on your system:

- [Node.js and npm](https://nodejs.org/): Required to run the Vue.js frontend.
- [XAMPP](https://www.apachefriends.org/index.html): To run the PHP backend and host the MySQL database.

## Setup

1. Clone the repository:

```
git clone https://github.com/OsquiMenacho28/Express.js_and_PHP_Backend.git
cd Express.js_and_PHP_Backend
```

2. Install frontend dependencies:

```
cd api_php
npm install
```

3. Configure PHP and MySQL:

   - Start XAMPP and ensure Apache and MySQL services are running.
   - Connect correctly to the database by checking the `database.php` file.

4. Start the Vue.js development server:

```
npm run serve
```

This will start the development server at http://localhost:8080.

## Serve the PHP Project

To serve the PHP project and make it accessible via your local web server, follow these steps:

1. **Install the PHP Server Extension**:

   - Install the "PHP Server" extension for your code editor (e.g., Visual Studio Code).

2. **Open a PHP File**:

   - Open one of the PHP CRUD (Create, Read, Update, Delete) files (e.g., `getActors.php`) located in the `api_php/server/API/` directory.

3. **Right-Click to Serve**:

   - Right-click on the opened PHP file.
   - Choose the "PHP Server: Serve Project" option from the context menu.

This will start serving the PHP project, making it accessible at `http://localhost:3000/api_php/server/API/getActors.php`. Make sure you have XAMPP running with Apache to handle PHP requests.

## Project Structure

- **Frontend (src):** Contains the Vue.js frontend application.
- **Backend (server):** Contains the PHP backend for handling API requests.
- **database.php:** Contains the MySQL database connection.

## API Routes

### Get Actors

- **URL:** http://localhost:3000/api_php/server/API/getActors.php
- **Method:** GET
- **Description:** Get a list of actors. Supports pagination.

### Get Actor by ID

- **URL:** http://localhost:3000/api_php/server/API/getActorById.php?id={actor_id}
- **Method:** GET
- **Description:** Get a specific actor by their ID.

### Create Actor

- **URL:** http://localhost:3000/api_php/server/API/createActor.php
- **Method:** POST
- **Description:** Create a new actor.

### Update Actor

- **URL:** http://localhost:3000/api_php/server/API/updateActor.php?id={actor_id}
- **Method:** PUT
- **Description:** Update an actor's information.

### Delete Actor

- **URL:** http://localhost:3000/api_php/server/API/deleteActor.php?id={actor_id}
- **Method:** DELETE
- **Description:** Delete an actor by their ID.

## Documentation

**Note:** The API documentation is under construction and will be available soon. It will provide clear details about the API endpoints, request parameters, and response formats.

## Testing

You can test the APIs using tools like [Talend API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm) or any API testing tool of your choice.

## Enjoy the Application!

Now that you have configured and understood the Vue.js web application with PHP and MySQL, enjoy exploring the functionality. You can perform CRUD (Create, Read, Update, Delete) operations on the Sakila Actors database through the provided user interface. Additionally, automatically generated APIs using PHP code are accessible and testable using Talend API Tester.

Have fun exploring and learning with this project! 😄
