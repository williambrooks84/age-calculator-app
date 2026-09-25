import Form from "../ui/Form/Form"
import Results from "../ui/Results/Results";
import { useState } from "react";

export default function Card() {
    const [age, setAge] = useState<{
        years: number | null;
        months: number | null;
        days: number | null;
    }>({
        years: null,
        months: null,
        days: null,
    });

    function handleValidSubmit(day: string, month: string, year: string) {
        const birthDay = Number(day);
        const birthMonth = Number(month);
        const birthYear = Number(year);

        const result = calculateAge(birthDay, birthMonth, birthYear);
        setAge(result);
    }

    function calculateAge(
        birthDay: number,
        birthMonth: number,
        birthYear: number
    ) {
        const today = new Date();

        let years = today.getFullYear() - birthYear;
        let months = today.getMonth() + 1 - birthMonth;
        let days = today.getDate() - birthDay;

        //if days are empty subtract a month
        if (days < 0) {
            months--;

            const daysInPreviousMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();

            days += daysInPreviousMonth;
        }

        //if months are empty subtract a year
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    return (
        <div className="w-full flex flex-col md:w-1/2 m-3 md:m-0 px-5 py-15 md:p-15 bg-white rounded-3xl rounded-br-[10rem]">
            <Form onValidSubmit={handleValidSubmit} />
            <Results age={age} />
        </div>
    );
}