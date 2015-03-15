describe('card object creation', function() {
  it('should throw TypeError for null argument', function() {
    expect(function() {
      card(null);
    }).toThrow(new TypeError('cardNumber must be a string!'));
  });

  it('should throw TypeError for undefined argument', function() {
    expect(function() {
      card(undefined);
    }).toThrow(new TypeError('cardNumber must be a string!'));
  });
});

it('should detect card type', function() {
  expect(card('4111111111111111').getType()).toBe('visa');
  expect(card('5280934283171080').getType()).toBe('mastercard');
  expect(card('371095063560404').getType()).toBe('amex');
  expect(card('5018000000000000').getType()).toBe('maestro');
  expect(card('3050000000000000').getType()).toBe('diners');
  expect(card('6011894492395579').getType()).toBe('discover');
  expect(card('3528000000000000').getType()).toBe('jcb');
  expect(card('152800000000000').getType()).toBe('uatp');
  expect(card('6200000000000000').getType()).toBe('unionpay');
  expect(card('6360000000000000').getType()).toBe('interpayment');
  expect(card('6370000000000000').getType()).toBe('instapayment');
  expect(card('5019000000000000').getType()).toBe('dankort');

  expect(card('9999000000000000').getType()).toBeUndefined();
});

it('detect card type based on few numbers', function() {
  expect(card('4').getIINType()).toBe('visa');
  expect(card('52').getIINType()).toBe('mastercard');
  expect(card('37').getIINType()).toBe('amex');
  expect(card('5018').getIINType()).toBe('maestro');
  expect(card('305').getIINType()).toBe('diners');
  expect(card('6011').getIINType()).toBe('discover');
  expect(card('65').getIINType()).toBe('discover');
  expect(card('3528').getIINType()).toBe('jcb');
  expect(card('1').getIINType()).toBe('uatp');
  expect(card('62').getIINType()).toBe('unionpay');
  expect(card('636').getIINType()).toBe('interpayment');
  expect(card('637').getIINType()).toBe('instapayment');
  expect(card('5019').getIINType()).toBe('dankort');

  expect(card('9999').getIINType()).toBeUndefined();
});

describe('card type validation', function() {
  it('should validate visa card', function() {
    expect(card('4111111111111111').isValid()).toBe(true);
    expect(card('5280934283171080').isValid()).toBe(true);
    expect(card('371095063560404').isValid()).toBe(true);
    expect(card('5019000000000000').isValid()).toBe(false);
    expect(card('6360000000000000').isValid()).toBe(false);
  });
});
