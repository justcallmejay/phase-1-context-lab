/* Your Code Here */
function createEmployeeRecord(employee) {
    
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

createEmployeeRecord(["Grey", "Worm", "Security", 1])

function createEmployeeRecords(employees) {
    return employees.map(employee => {
        return createEmployeeRecord(employee)
    })
}

//When passing at indexText.js the two arrays need to be inside the brackets; otherwise, .map will iterate through each index in each string in each element

function createTimeInEvent (event) {
    let splitRec = event.split(' ')
    let [date, hour] = splitRec

    let newEvent = {
        type: "TimeIn",
        date: date,
        hour: hour
    }

    return (this.timeInEvents.push(newEvent))
}

createTimeInEvent("2014-02-28 1400")


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

