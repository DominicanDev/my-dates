import { DateConfig } from "./date.config.js";

export class MyDate {
    #config;
    #date;
    #fullYear;
    #shortYear;
    #month;
    #monthName;
    #dayOfTheMonth;
    #week;
    #dayOfTheWeek;
    #dayOfTheWeekName;
    
    constructor(date = null){
        this.#date = date ?? new Date();
        this.#config = new DateConfig(this.#date);
        this.#dateInit(this.#config);
    }

    #dateInit(config){
        const { fullYear, shortYear, month, monthName, dayOfTheMonth, dayOfTheWeek, dayOfTheWeekName} = config.dateObject();
        this.#fullYear = fullYear;
        this.#shortYear = shortYear;
        this.#month = month;
        this.#monthName = monthName;
        this.#dayOfTheMonth = dayOfTheMonth;
        this.#dayOfTheWeek = dayOfTheWeek
        this.#dayOfTheWeekName = dayOfTheWeekName;
    }

    getShortYear(){ return this.#shortYear; }

    getFullYear() { return this.#fullYear; }

    getMonth() { return this.#month; }

    getMonthName() { return this.#monthName; }

    getDayOfTheMonth() {return this.#dayOfTheMonth; }

    getDayOfTheWeek() { return this.#dayOfTheWeek; }

    getDayOfTheWeekName() { return this.#dayOfTheWeekName; }
}

