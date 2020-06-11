// code taken from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["days", "hours", "minutes", "seconds"]

  connect() {
    this.updateCounter()
    this.timeinterval = setInterval(this.updateCounter.bind(this), 1000)
  }

  updateCounter() {
    const t = this.timeRemaining();

    this.daysTarget.innerHTML    = ('0' + t.days).slice(-2)
    this.hoursTarget.innerHTML   = ('0' + t.hours).slice(-2)
    this.minutesTarget.innerHTML = ('0' + t.minutes).slice(-2)
    this.secondsTarget.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(this.timeinterval);
    }
  }

  timeRemaining() {
    var t       = this.endDate - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours   = Math.floor( (t/(1000*60*60)) % 24 );
    var days    = Math.floor( t/(1000*60*60*24) );

    return {
      'total':   t,
      'days':    days,
      'hours':   hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  get endDate() {
    return new Date(this.data.get("endDate"))
  }
}
