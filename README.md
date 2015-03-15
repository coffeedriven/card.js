[![Build Status](https://travis-ci.org/coffeedriven/card.js.png)](https://travis-ci.org/coffeedriven/card.js)
[![Code Coverage](https://codeclimate.com/github/coffeedriven/card.js/badges/coverage.svg)](https://codeclimate.com/github/coffeedriven/card.js)
[![Code Climate](https://codeclimate.com/github/coffeedriven/card.js/badges/gpa.svg)](https://codeclimate.com/github/coffeedriven/card.js)

# card.js
card.js - parse and validate credit card number in javascript.

## Features

  - Credit card type detection based on IIN number. See more on [wikipedia](http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29)
  - Credit card type detection for full length card number
  - Luhn algorithm validation
  
## Loading

The library is the single JavaScript file *card.js* (or minified, *card.min.js*).   

It can be loaded via a script tag in an HTML document for the browser

    <script src='./relative/path/to/card.js'></script>
   
(check [examples/browser](examples/browser)) or as a CommonJS, [Node.js](http://nodejs.org).

For Node, put the *card.js* file into the same directory as the file that is requiring it and use

    var card = require('./card.js'); 

or put it in a *node_modules* directory within the directory and use `require('card.js')`. See example in [examples/nodejs](examples/nodejs).

The library is also available from the [npm](https://npmjs.org/) registry, so

    $ npm install card.js

will install this directory in a *node_modules* directory within the current directory.  

## Usage

```
card('4111111111111111').getType(); // output: visa
card('41').getType(); // output: visa
card('4111111111111111').isValid(); // output: true
```

## Supported browsers

  - Chrome
  - Firefox
  - Internet Explorer 9
  - Safari
  - Opera
  
## Supported card types:
 
Issuing network | card type returned by `getType`
--- | ---
Visa | visa
Mastercard | mastercard
American Express | amex
Maestro | meastro
Diners Club | diners
Discover | discover
JCB | jcb
UATP | uatp
InterPayment | interpayment
InstaPayment | instapayment
China UnionPay | unionpay
Dankort | dankort
