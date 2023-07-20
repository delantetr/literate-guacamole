# literate-guacamole
Project-2

## Description
Our project is an online platform that serves as the ultimate hub for music discovery, where users can explore our database of artists, albums, and reviews.

We wanted to create a space where discussing music with others allows you to explore different perspectives and interpretations, which can lead to a deeper understanding and appreciation of the artistry behind the music. It opens your mind to new ideas and insights, enriching your overall musical experience.

As a user, I was searching for a platform that could elevate my music discovery journey that allows me to create reviews, and even update and delete them. I want to be able to read others opinions that may lead me to discover new facets of the music I had missed or different perspectives that enriched my own understanding.




## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
Our app is deployed through heroku but to be able to access our files through a code editor you would need: 
* Code editor
* Command line
* Dependencies :
    * "bcrypt": "^5.0.0",
    * "connect-session-sequelize": "^7.0.4",
    * "dotenv": "^8.2.0",
    * "express": "^4.17.1",
    * "express-handlebars": "^5.2.0",
    * "express-session": "^1.17.1",
    * "handlebars": "^4.7.6",
    * "multer": "^1.4.5-lts.1",
    * "mysql2": "^2.2.5",
    * "sequelize": "^6.3.5"

## Usage

Upon arrival to the page you are greeted with an aside nav bar that contains artists in our database and the hero div to the right renders random artist, its album, and its reviews(if any). By clicking the artist, the hero div will change and show you a list of albums, this artist currently has in our database. User is able to click on album and the hero div will change to show album's image and reviews. User can sign up and log in to submit, update, or delete reviews. If the user does not log in, they are unable to edit or create any reviews.

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

## Link to Deployed Heroku

