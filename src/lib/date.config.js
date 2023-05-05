export class DateConfig {
    #currentDate;
    #days_of_the_week = {
        "1": "Monday", 
        "2": "Tuesday" , 
        "3": "Wednesday", 
        "4": "Thursday", 
        "5": "Friday", 
        "6": "Saturday",
        "7": "Sunday"
    };

    #months_of_the_year = {
               "01": "January", 
               "02": "February" , 
               "03": "March", 
               "04": "April", 
               "05": "May", 
               "06": "June",
               "07": "July", 
               "08": "August", 
               "09": "September", 
               "10": "October", 
               "11": "November", 
               "12": "December" 
            };

    constructor(date = null) {
        this.#currentDate = date;
    }

    dateObject() {
        let date = this.#currentDate;
        if(!date) return null; 

        const fullYear = date?.getFullYear()?.toString() ?? null;
        const shortYear =  fullYear.substring(2) ?? null;
                
        let month = date?.getMonth() ?? null;
        let monthName = null;
        let dayOfTheWeek = date?.getDay() ?? null; 
        let dayOfTheWeekName = null;
        let dayOfTheMonth = date?.getDate() ?? null;
        
        if(!isNaN(month)) {
            month += 1;
            month = (month < 10)? `0${month}`: month.toString();
            const months = this.#months_of_the_year;
            monthName = months[month];
        }

        if(!isNaN(dayOfTheWeek)) {
            dayOfTheWeek = (dayOfTheWeek == 0)? '7' : dayOfTheWeek.toString();
            const days = this.#days_of_the_week;
            dayOfTheWeekName = days[dayOfTheWeek];
        }

        if(!isNaN(dayOfTheMonth)) {
            dayOfTheMonth = (dayOfTheMonth < 10)? `0${dayOfTheMonth}` : dayOfTheMonth.toString();
        }

        return {
            fullYear,
            shortYear,
            month,
            monthName,
            dayOfTheMonth,
            dayOfTheWeek,
            dayOfTheWeekName
        }
    }
}
