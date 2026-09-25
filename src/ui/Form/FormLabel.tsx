import type { formLabelProps } from "../../interfaces/dataDefinitions";

export default function FormLabel({labelName, className}: formLabelProps) {
    return (
        <>
        <span className={`font-bold text-sm lg:text-base uppercase tracking-[0.3em] ${className}`}>{labelName}</span>
        </>
    )
}