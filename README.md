# Business Day Math

Business days are hard to calculate because you have to jump weekends. In addition, calculating across different timezones is difficult because the day of the week that the start date is on can vary.

This module allows you to accommadate all these needs.

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
3. `timezone` (`String`) _optional_: Must be a time zone string matching one of the options from the [RFC 3999 list of timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g. "Europe/London" is GMT). If not provided will default to the computer's timezone.

## Tests
Tests are [prova](https://github.com/azer/prova), based on [tape](https://github.com/substack/tape). They can be run with `npm test`.

## Changelog
### 1.0.0 Initial Release
