# PHP Backend API

Hosted at [Heroku](https://tkassignment.herokuapp.com/).

## Run Locally

Clone this repo then run the code below in your terminal:

### `cd server`
### `composer install`
### `php -S 127.0.0.1:8000`

Ensure you have php and composer (PHP package manager) installed on your machine locally and that port 8000 is not in use by another app. If everything goes well, you should be able to access the app on http://localhost:8000 or http://127.0.0.1:8000/ on your browser.

### `PHPUnit Test`

To run the tests on this app, run the following code from the terminal:

### `./vendor/bin/phpunit  --no-configuration src/Tests`

### Deployment

This app is being hosted on heroku.
