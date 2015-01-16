var test = require('prova')
  , addBusinessDays = require('../index.js')
  , londonTz = require('timezone/Europe/London')
  , laTz = require('timezone/America/Los_Angeles')
  , previousFriPT = new Date('Fri May 2 2014 17:00:00 GMT-0700 (PST)')
  , previousFriGMT = new Date('Fri May 2 2014 17:00:00 GMT-0000')
  , monGMT = new Date('Mon May 5 2014 17:00:00 GMT-0000')
  , monPT = new Date('Mon May 5 2014 17:00:00 GMT-0700 (PST)')
  , wedPT = new Date('Wed May 7 2014 17:00:00 GMT-0700 (PST)')
  , thuPT = new Date('Thu May 8 2014 17:00:00 GMT-0700 (PST)')
  , friPT = new Date('Fri May 9 2014 17:00:00 GMT-0700 (PST)')
  , satPT = new Date('Sat May 10 2014 17:00:00 GMT-0700 (PST)')
  , sunPT = new Date('Sun May 11 2014 17:00:00 GMT-0700 (PST)')
  , nextMonPT = new Date('Mon May 12 2014 17:00:00 GMT-0700 (PST)')
  , nextNextFriPT = new Date('Fri May 23 2014 17:00:00 GMT-0700 (PST)')
  , nextMonGMT = new Date('Mon May 12 2014 00:00:00 GMT-0000')

// jscs:disable disallowAnonymousFunctions
test('works with a timezone', function(t){
  t.equal(
    addBusinessDays(
      1
      , thuPT
      , laTz
    ).toString()
    , friPT.toString()
    , 'it adds one day in the end of the week in PT'
  )

  t.equal(
    addBusinessDays(
      1
      , thuPT
      , londonTz
    ).toString()
    , nextMonGMT.toString()
    , 'it adds one day in the end of the week in GMT'
  )

  t.equal(
    addBusinessDays(
      1
      , friPT
      , laTz
    ).toString()
    , nextMonPT.toString()
    , 'it bumps a fri to a mon with one day in PT'
  )

  t.equal(
    addBusinessDays(
      1
      , friPT // sat GMT
      , londonTz
    ).toString()
    , nextMonGMT.toString()
    , 'it bumps a sat to a mon with one day in GMT'
  )

  t.end()
})

test('basic math with a timezone', function(t){
  t.equal(
    addBusinessDays(
      2
      , thuPT
      , laTz
    ).toString()
    , nextMonPT.toString()
    , 'it bumps over a weekend if adding 2 days from a thurs in PT'
  )

  t.equal(
    addBusinessDays(
      -1
      , thuPT
      , laTz
    ).toString()
    , wedPT.toString()
    , 'subtracts a day from the middle of the week'
  )

  t.equal(
    addBusinessDays(
      -1
      , monPT
      , laTz
    ).toString()
    , previousFriPT.toString()
    , 'subtracts a days over a weekend'
  )

  t.equal(
    addBusinessDays(
      2
      , thuPT
      , laTz
    ).toString()
    , nextMonPT.toString()
    , 'it bumps over a weekend if adding 2 days from a thurs in PT'
  )

  t.equal(
    addBusinessDays(
      -1
      , sunPT
      , laTz
    ).toString()
    , friPT.toString()
    , 'subtracts a day from a Sunday'
  )

  t.equal(
    addBusinessDays(
      -1
      , satPT
      , laTz
    ).toString()
    , friPT.toString()
    , 'subtracts a day from a Saturday'
  )

  t.equal(
    addBusinessDays(
      14
      , monPT
      , laTz
    ).toString()
    , nextNextFriPT.toString()
    , 'adds days over weeks'
  )

  t.end()
})

test('basic math without a timezone', function(t){
  t.equal(
    addBusinessDays(
      -1
      , thuPT
    ).toString()
    , wedPT.toString()
    , 'subtracts a day from the middle of the week'
  )

  t.equal(
    addBusinessDays(
      -1
      , monGMT
    ).toString()
    , previousFriGMT.toString()
    , 'subtracts a day over a weekend'
  )

  t.end()

})
