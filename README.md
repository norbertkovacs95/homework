# homework

The application have a backend built on top of Node.js and MongoDB and a frontend built on React. 

Backend:
In order to install all dependencies, navigate into the ./backend directory and run the 'npm i' command. It is important to start a local
MongoDB session at localhost:27017 since the rest api is built on top of a MongoDB database. To start MongoDB create a new directory called
'db', and navigate into it's parent folder and run the following command: 'mongod --dbpath=db --bind_ip 127.0.0.1'. If you want MongoDB to 
run on a different port, simply change '127.0.0.1' in the previous command. However in this case, you should change the .backend/config file
accordingly.

Once all dependencies are installed and MongoDB is running, type 'npm start' to run the server. The servers have a REST api which supports
the following route: GET /api/pages/:page where :page should be a number between 0 and n. For requests other than '/api/pages/:page', 
the server serves the index.html React homepage.

Frontend:
The frontend of the page can be viewed simply by configuring the server and navigating to localhost:3000. However if you would
like to debug the frontend alone, you should 'npm i' the dependencies in ./frontend. After the dependencies are installed, the React app
can be viewed by runing 'npm start'.

