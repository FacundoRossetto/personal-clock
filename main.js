let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let day = document.getElementById("day")
let date = document.getElementById("date")
let checkMeridiem = document.getElementById("meridiem")



const clock = () => {
    //Javascript object with current time
    const current = new Date()

    //A 12-hour digital clock includes meridiem (AM/PM)
    let  meridiem = "AM" 

    //We wil display different  current time units
    let ss = current.getSeconds()
    let mm = current.getMinutes()
    let hh = current.getHours()

    //Will also display the current day
    let currentDay = current.getDay()

    //Conditions on current hours to display time in 12-hour format
    //This will display hours like '00 AM' for 12hs, '06 PM' for 18hs, etc.
    if(hh === 00){
    hh = 12
    meridiem = "AM"
    } else if(hh === 12){
    meridiem ="PM"
    } else if(hh > 12){
    hh = hh - 12
    meridiem = "PM"
    }

    //Render current time on the screen:
    //Ensure that time must be displayed in 2-digits format when is less than 10
    hours.textContent = `${hh<10? `0${hh}`:hh}` + " :"
    minutes.textContent =`${mm<10? `0${mm}`:mm}` + " :" 
    seconds.textContent =`${ss<10? `0${ss}`:ss}`
    //Meridiem sets PM or AM
    checkMeridiem.textContent = meridiem;
    //Return current date in D/M/YYY format
    date.textContent = current.toLocaleDateString()
    //Sets the day with the function created below and its argument
    day.textContent = getDayName(currentDay)
}

//Function to get the day
//Returns the day name corresponding to the argument "value"
const getDayName = (value) =>{
    const DayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    return DayNames[value]
}

//Method to call clock() function and to increment it every clock second
//This method executes a function at specified intervals in miliseconds
setInterval(clock,1000)