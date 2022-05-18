# Workout_Notes
This is a fullstack Javascript web app.
This project can track workouts using REST API. It consists of users, categories,exercises, workouts, workout volume and works with the C.R.U.D. protocol within REST API 

## Directory Structure
- -server/
- /models - Define all model/table schema via Sequelize ORM which are generated when running server;
- /migrations - you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.
- /controllers - Store all controller files for different modules which contains REST API method;
- /routes - Store all routes for different modules;
- /seeders - Contains set of data which if it's seeded it will store it to database;
- server.js - Base filfe that runs the Nodejs App;
- env.example - An example environment variable.

- -client/src
- App.js - Contains Layout which it self contains home page content main navigation and url's to other pages
- /components - Contains all the app's front end structure - create, read, update delete method for teams, players, results, validations, styling, main navigation which is presented in every page, home page and images 

## Packages Used
## SERVER
**-Express** : Flexible and minimal web app for Node.js framework.   
**- MySQL** : It's required as a support for Sequelize package for MySQL databases.    
**-Sequelize** : Promise-base Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.  
**-Sequelize.cli** : Sequelize Command-Line Interface(CLI) ships support for migrations and project bootstrapping.  
**-Cors** :  Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.  
**-Dotenv** : Zero-dependency module that loads environment variables from a .env file into process.env. 

## CLIENT
**-React** : Front-end library for building user interfaces based on UI components.   
**-Material-UI** : Front-end framework for React compononents that implements Google's Material Design.  
**-Formik** : Formik is a  lightweight library for ReactJS and React Native and addresses three key pain points of form creation:  
&nbsp; &nbsp; How the form state is manipulated.  
&nbsp; &nbsp; How form validation and error messages are handled.  
&nbsp; &nbsp; How form submission is handled.  
**-Yup**: Schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema is extremely expressive and allows modelling complex, interdependent validations, or value transformations.  
**-React Router** : It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.  
**-Dotenv** : Zero-dependency module that loads environment variables from a .env file into process.env.   

 

## Development Dependancies

 **- Nodemon** : Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Instaling packages and dependancies
Because the app is running on two servers it's better to open two terminals and run the command to install packages and dependancies in server and client via:            
#
````
npm install 
````
## Environment configurations

## Server
In server's folder: create a file with the following name and location .env and copy the contents from .env.example into it. Replace the values with your specific configuration. Create a new database which you will use this project
#
```
#Database
DB_HOST=your-db-host
DB_USER=your-db-username
DB_PASS=your-db-password
DB_SCHEMA=your-db-schema-name

```

## Client
In client's folder: create a file with the following name and location .env and copy the contents from .env.example into it. Replace the values with your specific configuration.
#
```
#URL for your Backend/server 
REACT_APP_URL= your-server-name-and-port-number

```
## Migrating the tables
Before you start the server you need to migrate the tables into the database. From the server folder type:
#
```
sequelize db:migrate
```

## Running the Seeds
You can use seeders to manage all data migrations in database. In seeders we have test data for teams, players and results. To commit the seeds to database run the command:
#
```
sequelize db:seed:all
```

## Running the App
You can then run server.js in node, or use nodemon to run the app locally.
For the client's folder after installing the dependancies you can run the app via npm start.