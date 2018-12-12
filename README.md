# Amazon Price Scraper

Loops through an array of ASINs and gets the current buybox price for each ASIN.

## Getting Started

Clone the repository, `npm i`, and `npm start`.

You can edit the array of ASINs to be whatever you would like scraped. You could also pull the ASINs from a database.

There are script options to run this headless or on an ubuntu webserver.

To run on ubuntu:

```
npm run start:ubuntu
```

To run headless:
```
npm run start:headless
```

### Prerequisites

Tested on Node v8.11.2 and NPM v5.6.0.

### Installing

All you need to do is an install.

```
npm i
```

## Built With

* [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Scraping library

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License
