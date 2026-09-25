import type { ResultProps } from "../interfaces/dataDefinitions"
import ResultSpan from "../ui/Results/ResultSpan";

export default function Results({ age }: ResultProps) {
    return (
        <div className="flex flex-col justify-start gap-3">
            <ResultSpan value={age.years} label={age.years === 1 ? "year" : "years"} />
            <ResultSpan value={age.months} label={age.months === 1 ? "month" : "months"} />
            <ResultSpan value={age.days} label={age.days === 1 ? "day" : "days"} />
        </div>
    );
}