# FReed <img align="left" height="50px" alt="FReed" src="/screenshots/logo.png"></img> 
An RSS Feed Reader developed using Phonegap

  - Allows the user to search and view the feed of any website which provides them
  - Arranges the feed for appealing display
  - Provides links to complete articles

### Whats New!
 - Database Integration

### Prerequisites
Trackit uses a number of open source projects:
* [Phonegap](http://phonegap.com) (for android, web & ios)
* [Framework7](https://framework7.io/)
* [jQuery](https://jquery.com) (jQuery and jQuery mobile)
* [rss2json](https://rss2json.com)
* [nodejs](https://nodejs.org/en/)
* [Postgresql](https://www.postgresql.org/)


### Installing

##### Clone the repository
```bash
$ git clone https://github.com/glen18martin/FReed.git
$ cd FReed
```

##### Start the NodeJS Server
```bash
$ cd server
$ node app.js
```

##### SETUP the database
 - DB name: FReed
 
  - table name: feeds
      - columns: srno | title | link | published_date
      - data type: srno(serial) , title(character) , link(character) , published_date(character)
   
  - table name: rss
      - columns: url
      - data type: url(character) 
 

##### Make necessary changes
* Change the PostgreSQL variable connectionString to your appropriate username and password in app.js
* Change the host address and port address to preferred choice in app.js and feed.js.
!PORT NUMBERS MUST BE SAME IN BOTH FILES

#### Finally build the app and install 
Built app will be generated at FReed\platforms\android\build\outputs\apk

### Development

Android BETA Ready !!! <br>
ios build in progress


## ScreenShots
<p align="center">
<img align="center" height="650px"  alt="Home" src="/screenshots/ss1.png"></img> &nbsp &nbsp
<img align="center" height="650px" alt="NEWS feed" src="/screenshots/ss2.png"></img></p>

<p align="center">
<img align="center" height="650px" alt="Select required feed" src="/screenshots/ss3.png"></img> &nbsp &nbsp
<img align="center" height="650px" alt="Browser" src="/screenshots/ss4.png"></img></p>


# Coming Soon!

 - App will store your favourite feed sites

