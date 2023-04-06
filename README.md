## Property Management System
This is a web application for managing landlords, apartments and todos (for now). It allows you to create, read, update and delete records for each of these entities.

### Features
#### Landlord Management:

1. Create a new landlord
2. Update an existing landlord
3. Delete a landlord
4. View a single landlord's details

#### Apartment Management:

1. Create a new apartment
2. Update an existing apartment
3. Delete an apartment
4. View a list of all apartments
5. View a single apartment's details

#### Todo Management:

1. Create a new todo
2. Update an existing todo
3. Delete a todo
4. View a list of all todos
5. View a single todo's details
6. Filter todos by apartment

### Technologies Used
This application was built using the following technologies:

-> Ruby on Rails
-> React
-> Bootstrap
-> Axios
-> Semantic-ui-react

### Getting Started
To get started with this application, you should have Ruby and Rails installed on your local machine.

1. Clone the repository to your local machine
2. Navigate to the project directory and run bundle install to install the necessary gems
3. Run rails db:create and rails db:migrate to create and migrate the database
4. Navigate to the client directory and run npm install to install the necessary npm packages
5. Run rails s to start the Rails server and npm start to start the React server
6. Run `foreman start -f Procfile.dev` to start the React server

### Contributing
Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b new-feature)
3. Make your changes and commit them (git commit -am 'Add new feature')
4. Push to the branch (git push origin new-feature)
5. Create a pull request

### License
This project is licensed under the MIT License. See the LICENSE file for more details.