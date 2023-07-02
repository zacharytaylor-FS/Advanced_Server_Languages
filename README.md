# Advanced Serverside Language(s)
- Pug
- Express
- Sequelize


<p>Welcome to Advanced Serverside Languages Repo. The purpose of this repo is to share my knowledge with the dev community and it could be used to track my skills across this journey. You have access to Assignments and Activities folder with numerous projects I've completed at Full Sail. </p>

## Getting started

---

### MVC Design Pattern

- Model: Defines what data the app should contain. If the state of this data changes, then the model will usually notify the view.

- View: Defines how the app's data should be displayed. The view would define how a list is presented to the user, and receive data from the model.

- Controller: Contains logic that updates the model and/or view in response to input from the users of the app.
- Ex. A Shopping Cart could have input forms and buttons that allow you to carry out the RUD part of "CRUD", add or delete items. Model needs to be updated, input is sent to the controller, which then makes changes to the model, which then sends updated data to the view.

1. [Docker](#setup-docker)

1. [Backend API](#model)

1. [Express Framework](#express) HTTP verb-based routing

1. [Pug Jade]() Template Engine

1. [Database] MySQL

1. [Database Abstraction](#object-relational=mapping)

## Template Engine

### Pug Template Engine

## Setup Docker

## Express

## Model

### Setup Docker

### Abstract Database Layering

-   [Sequelize - (Used in this repo)](https://sequelize.org/)
-   [Doctrine - (PHP)](https://www.doctrine-project.org/)
-   [Hibernate - (Java)](https://hibernate.org/)
-   [Propel - (PHP)](http://propelorm.org/)
-   [ActiveRecord - (Ruby/Rails Framework)](https://guides.rubyonrails.org/active_record_basics.html)
-   [Django - (Python Framework)](https://docs.djangoproject.com/en/4.0/topics/db/)

> Database Abstraction Layering

    - A library of code meant to make interacting with SQL Database(s) easier through a set of utility functions and classes

Check out for official DBAL [Doctrine](https://www.doctrine.org/)

> Object Relational Mapping

    - A library of code meant to make interacting with SQL Database(s) easier,
    and maintaining relationships through data.

Check out example of ORM [Sequelize](http://www.sequelize.com)

Check out for official DBAL [Doctrine](https://www.doctrine.org/)

-   **DBAL** can be considered the _M_ in MVC applications. Makes managing data easier without writing out SQL
