import type { ResultSpanProps } from "../../interfaces/dataDefinitions";

export default function ResultSpan({ value, label }: ResultSpanProps) {
    return (
        <>
            <p className="flex gap-2 text-5xl md:text-6xl lg-text-7xl xl:text-8xl italic font-bold">
                <span className="text-purple-500">
                    {value ?? "- -"}
                </span>
                {label}
            </p>
        </>
    )
}