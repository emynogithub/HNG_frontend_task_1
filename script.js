'use strict'

const currentUTC = document.getElementById('currentUTC')
const day = document.getElementById('day')



const currentDate = Date.now();
console.log(currentDate)

currentUTC.textContent = currentDate

//getting the day

const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const WeekDay = today.getDay(); 

const currentDayOfWeek = WeekDays[WeekDay];
console.log(currentDayOfWeek);

day.textContent =currentDayOfWeek
// console.log(today, WeekDay)

