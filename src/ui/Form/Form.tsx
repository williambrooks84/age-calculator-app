import { useState } from "react";
import type { FormProps } from "../../interfaces/dataDefinitions";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import iconArrow from "../../assets/icon-arrow.svg";

export default function Form({ onValidSubmit }: FormProps) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const dayNumber = Number(day);
    const monthNumber = Number(month);
    const yearNumber = Number(year);

    const isLeapYear = yearNumber % 4 === 0 && (yearNumber % 100 !== 0 || yearNumber % 400 === 0);

    const dayErrorMessage = day === "" ? "This field is required" : isInvalidDate() ? "Must be a valid date" : isDayError() ? "Must be a valid day" : null;
    const monthErrorMessage = month === "" ? "This field is required" : isMonthError() ? "Must be a valid month" : null;
    const yearErrorMessage = year === "" ? "This field is required" : isYearError() ? "Must be in the past" : null;

    function isInvalidDate() {
        // 31st on a month that doesn't have 31 days
        if (
            dayNumber === 31 &&
            (monthNumber === 2 ||
                monthNumber === 4 ||
                monthNumber === 6 ||
                monthNumber === 9 ||
                monthNumber === 11)
        ) {
            return true;
        }

        // 30th on February
        if (dayNumber === 30 && monthNumber === 2) {
            return true;
        }

        // 29th February on a non-leap year
        if (dayNumber === 29 && monthNumber === 2 && !isLeapYear) {
            return true;
        }

        return false;
    }

    function isFutureDate() {
        return (
            yearNumber > currentYear ||
            (yearNumber === currentYear && monthNumber > currentMonth) ||
            (yearNumber === currentYear &&
                monthNumber === currentMonth &&
                dayNumber > currentDay)
        );
    }

    function isDayError() {

        if (day == "") {
            return true;
        }
        //If the day is before 1 or after 31
        if (dayNumber < 1 || dayNumber > 31) {
            return true;
        }

        //if the day is 31 on a month that doesn't have 31 days
        if (dayNumber == 31 && (monthNumber == 2 || monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11)) {
            return true;
        }

        //if the day is 30 on February
        if (dayNumber == 30 && monthNumber == 2) {
            return true;
        }

        //if the day is 29/02 not on a leap year
        if (dayNumber == 29 && monthNumber == 2 && !isLeapYear) {
            return true;
        }

        else {
            return false;
        }
    }

    function isMonthError() {
        if (month == "") {
            return true;
        }

        //if the month is before 1 or after 12
        if (monthNumber < 1 || monthNumber > 12) {
            return true;
        }

        else {
            return false;
        }
    }

    function isYearError() {
        if (year == "") {
            return true;
        }

        //if the year is after this year
        if (yearNumber < 1 || yearNumber > currentYear) {
            return true;
        }

        //if the date is past today
        if (isFutureDate()) {
            return true;
        }

        else {
            return false;
        }
    }

    function isValidInput() {
        if (!isDayError() && !isMonthError() && !isYearError()) {
            return true;
        }
        else {
            return false;
        }
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setSubmitted(true);

        if (!isValidInput()) {
            return;
        }

        onValidSubmit(day, month, year);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
                    <div className="flex flex-col gap-2">
                        <FormLabel labelName="Day" className={`${submitted && isDayError()
                            ? "text-red-400"
                            : "text-grey-500"
                            }`} />
                        <FormInput
                            placeholder="DD"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            className={`${submitted && isDayError()
                                ? "border-red-400"
                                : "border-grey-200 focus:border-purple-500"
                                }`}
                        />
                        <p className="text-red-400 text-sm">{(submitted && dayErrorMessage) ?? ""}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormLabel labelName="Month" className={`${submitted && (isMonthError() || isInvalidDate())
                            ? "text-red-400"
                            : "text-grey-500"
                            }`} />
                        <FormInput
                            placeholder="MM"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className={`${submitted && (isMonthError() || isInvalidDate())
                                ? "border-red-400"
                                : "border-grey-200 focus:border-purple-500"
                                }`}
                        />
                        <p className="text-red-400 text-sm">{(submitted && monthErrorMessage) ?? ""}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormLabel labelName="Year" className={`${submitted && (isYearError() || isInvalidDate())
                            ? "text-red-400"
                            : "text-grey-500"
                            }`} />
                        <FormInput
                            placeholder="YYYY"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className={`${submitted && (isYearError() || isInvalidDate())
                                ? "border-red-400"
                                : "border-grey-200 focus:border-purple-500"
                                }`}
                        />
                        <p className="text-red-400 text-sm">{(submitted && yearErrorMessage) ?? ""}</p>
                    </div>
                </div>
            </fieldset>

            <div className="relative flex items-center pt-20 pb-20 xl:py-0">
                <hr className="flex-1 border-grey-200" />

                <button
                    type="submit"
                    className="absolute left-1/2 -translate-x-1/2 rounded-full p-5
                   bg-gray-500 hover:bg-purple-500 focus:bg-purple-500 outline-none
                   xl:static xl:translate-x-0"
                >
                    <img
                        src={iconArrow}
                        alt=""
                        className="w-9 h-9 lg:w-12 lg:h-12"
                    />
                </button>
            </div>
        </form>
    );
}