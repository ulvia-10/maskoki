# Maskoki

## Requirements

- NodeJS (version 12)
- MySQL or MariaDB

## Installation

- Clone the repository

    ```
    git clone https://github.com/dhanifudin/maskoki
    ```

- Copy configuration in `server` directory, and setup the database
 configuration.

    ```
    cp server/.env.keep server/.env
    ```

- Install node modules

    ```
    npm install
    ```

- Run migration and seeder (if needed).

    ```
    npx knex migrate:latest
    npx knex seed:run
    ```

- Run the project

    ```
    npm start
    ```
- You can access the documentation from `/documentation` url.
