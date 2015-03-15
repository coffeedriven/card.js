/*! card.js v0.0.1 https://github.com/coffeedriven/cardjs/LICENCE */

;(function ( global ) {
    'use strict';

    /*
      card.js v0.0.1
      A JavaScript library for card type detection.
      https://github.com/coffeedriven/cardjs/
      Copyright (c) 2015 Maciej Dzikowicki <mdzikowicki@gmail.com>
      MIT Licence
    */

    var card = function(number) {
      if (typeof number !== 'string') {
        throw new TypeError('cardNumber must be a string!');
      }

      var cardNumber = number.trim().replace(/\s/g, '');

      return new Card(cardNumber);
    };

    card.CARD_TYPES = [
      {type: 'visa', numberRegex: /^4[0-9]{12}(?:[0-9]{3})?$/, iinNumberRegex: /^4/},
      {type: 'mastercard', numberRegex:/^5[1-5][0-9]{14}$/, iinNumberRegex: /^5[1-5]/},
      {type: 'amex', numberRegex:/^3[47][0-9]{13}$/, iinNumberRegex: /^3[47]/},
      {type: 'maestro', numberRegex:/^(?:5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d{12}(?:\d\d)?$/, iinNumberRegex: /^(?:5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/},
      {type: 'diners', numberRegex:/^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/, iinNumberRegex: /^3(?:0[0-5]|[68][0-9])/},
      {type: 'discover', numberRegex:/^6(?:011|5[0-9]{2})[0-9]{12}$/, iinNumberRegex: /^6(?:011|5)/},
      {type: 'jcb', numberRegex:/^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/, iinNumberRegex: /^(?:2131|1800|35[0-9]{2})/},
      {type: 'uatp', numberRegex:/^1[0-9]{14}$/, iinNumberRegex:/^1/},
      {type: 'interpayment', numberRegex:/^(636)\d{13,16}$/, iinNumberRegex:/^(636)/},
      {type: 'instapayment', numberRegex:/^(63[7-9])\d{13}$/, iinNumberRegex:/^(63[7-9])/},
      {type: 'unionpay', numberRegex:/^(62|88)\d{14,17}$/, iinNumberRegex:/^(62|88)/},
      {type: 'dankort', numberRegex:/^(5019)\d{12}$/, iinNumberRegex:/^(5019)/}
    ];

    var Card = function(cardNumber) {
      this._cardNumber = cardNumber;
    };

    Card.prototype.isValid = function() {
      return luhnChk(this._cardNumber);
    };

    var checkType = function(cardNumber, regexType) {
      var cardType = null;
      card.CARD_TYPES.some(function(type) {
        return type[regexType].test(cardNumber) ? (cardType = type, true) : false;
      });
      return !!cardType ? cardType.type : undefined;
    };

    Card.prototype.getType = function() {
      return checkType(this._cardNumber, 'numberRegex');
    };

    Card.prototype.getIINType = function() {
      return checkType(this._cardNumber, 'iinNumberRegex');
    };

    /**
     * Implementation thanks to gist: https://gist.github.com/ShirtlessKirk/2134376
     */
    var luhnChk = (function(arr) {
      return function(ccNum) {
        var
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;

        while (len) {
          val = parseInt(ccNum.charAt(--len), 10);
          sum += (bit ^= 1) ? arr[val] : val;
        }

        return sum && sum % 10 === 0;
      };
    }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

    // Node and other CommonJS-like environments that support module.exports.
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = card;

      //Browser.
    } else {
      global.card = card;
    }

})( this );
