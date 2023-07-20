# literate-guacamole
Project-2

## Description
This project allows the user to engage with our website when logged in and lets the user create, read, update and delete reviews on albums provided by our database. If the user is logged out, the user still has the ability to read reviews already submitted. 



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
Our app is deployed through heroku but to be able to access our files through a code editor you would need: 
-code editor
-command line 
-dependencies :  
    "bcrypt": "^5.0.0",
    "connect-session-sequelize": "^7.0.4",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-handlebars": "^5.2.0",
    "express-session": "^1.17.1",
    "handlebars": "^4.7.6",
    "multer": "^1.4.5-lts.1",
    "mysql2": "^2.2.5",
    "sequelize": "^6.3.5"

## Usage

Upon arrival to the page you are greeted with an aside nav bar that contains artists in our database and the hero renders random artist, its album, and its reviews(if any). By clicking the artist, the hero div will change and show you a list of albums, this artist currently has in our database. User is able to click on album and the hero div will change to show album's image and reviews. User can sign up and log in to submit, update, or delete reviews. If the user does not log in, they are unable to edit or create any reviews.

Homepage with random album review:
![homepage](https://github.com/delantetr/literate-guacamole/assets/132783183/4303bf89-609f-4723-b244-c1423ee5c16c)
Artist Album List Page:
![artistAlbumList](https://github.com/delantetr/literate-guacamole/assets/132783183/3cb3bcd7-387e-4bab-ab6a-b9dc0771a1f8)
Logged Out View of Album Reviews
![logOutAlbumView](https://github.com/delantetr/literate-guacamole/assets/132783183/7ad985e0-7595-47c3-b194-8da1f364f33f)
Logged In View of Album Reviews
![logInAlbumView](https://github.com/delantetr/literate-guacamole/assets/132783183/f1fbee9d-e6ff-4e13-98e3-20ebed3ba57f)

## Credits
Delante Randolph
https://github.com/delantetr

Craig von Bartheld
https://github.com/Craigien

Abigail Sinchan
https://github.com/abisinchan


## License

MIT License


## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

If your project has a lot of features, list them here.


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Link to Deployed Heroku

