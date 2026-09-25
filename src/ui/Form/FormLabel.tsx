import type { formLabelProps } from "../../interfaces/dataDefinitions";

export default function FormLabel({id, labelName, className}: formLabelProps) {
    return (
        <>
        <label htmlFor={id} className={`font-bold text-sm lg:text-base uppercase tracking-[0.3em] ${className}`}>{labelName}</label>
        </>
    )
}