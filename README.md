# Business Day Math

[![NPM](https://nodei.co/npm/business-day-math.png)](https://nodei.co/npm/business-day-math/) [![Build Status](https://travis-ci.org/joeybaker/business-day-math.png?branch=master)](https://travis-ci.org/joeybaker/business-day-math)

Business days are hard to calculate because you have to jump weekends. In addition, calculating across different timezones is difficult because the day of the week that the start date is on can vary.

This module allows you to accommodate all these needs.

## Install
`npm install business-day-math`

## Usage
```javascript
var bizDays = require('business-day-math')
  , friPT = new Date('Fri May 9 2014 17:00:00 GMT-0700 (PST)')

 bizDays(1, friPT, 'America/Los_Angeles').toString() // Mon May 12 2014 17:00:00 GMT-0700 (PST)
 bizDays(-1, friPT, 'America/Los_Angeles').toString() // Thu May 8 2014 17:00:00 GMT-0700 (PST)
```

## Options

1. `days` (`Number`) _requried_: The number of days to add or subtract from the start date.
2. `startDate` (`Date`) _optional_: The date to start from. If not provided, will default to today.
3. `timezone` (`String`) _optional_: The timezone files are named as one of the options from the [RFC 3999 list of timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g. "Europe/London" is GMT). If not provided will default to the computer's timezone.

## Tests
Tests are [prova](https://github.com/azer/prova), based on [tape](https://github.com/substack/tape). They can be run with `npm test`.

## Developing
To publish, run `gulp publish --bump=patch`

## Changelog
### 2.0.0
Now browserifiable.

**Breaking change**: must now require a timezone file instead of passing a timezone string. This is for browserify compatibility.
### 1.0.0
Initial Release
