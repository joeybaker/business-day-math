var tz = require('timezone')
'use strict';

module.exports = function(inputBizDays, startDate, timezone){
  var getDayOfWeek
    , startDayOfWeek
    , daysToAdd
    , weeksToAdd
    , absBizDays

  startDate || (startDate = new Date())

  getDayOfWeek = function getDayOfWeek(date){
    if (timezone)
      return parseInt(tz(timezone)(date, Object.keys(timezone.zones)[0], '%w'), 10)
    else return date.getDay()
  }

  absBizDays = Math.abs(inputBizDays)

  startDayOfWeek = getDayOfWeek(startDate)

  // get the count of weeks then set to a netative number if we're subtracting
  weeksToAdd = Math.floor(absBizDays / 5) * (inputBizDays < 0 ? -1 : 1)

  // we're doing some funky math here to accomodate negative numbers
  daysToAdd = inputBizDays % 5

  // the following logic is from http://javascript.about.com/library/blbusdayadd.htm
  // (which I'm ashamed to admit, but hell, this is a very concise algorithm)
  // we're starting on a saturday and are adding days
  if (startDayOfWeek === 6 && daysToAdd > -1) {
    // we have no days to add, but we want to make sure to end up on a weekday
    if (daysToAdd === 0) {
      daysToAdd -= 2
      startDayOfWeek += 2
    }
    daysToAdd++
    startDayOfWeek -= 6
  }
  if (startDayOfWeek === 0 && daysToAdd < 1) {
    if (daysToAdd === 0) {
      daysToAdd += 2
      startDayOfWeek -= 2
    }
    daysToAdd--
    startDayOfWeek += 6
  }
  if (startDayOfWeek + daysToAdd > 5) {
    daysToAdd += 2
  }
  if (startDayOfWeek + daysToAdd < 1) {
    daysToAdd -= 2
  }

  return new Date(startDate.valueOf() + ((weeksToAdd * 7) + daysToAdd) * (1000 * 60 * 60 * 24))
}
