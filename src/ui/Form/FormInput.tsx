import type { FormInputProps } from "../../interfaces/dataDefinitions";

export default function FormInput({ placeholder, value, onChange, className }: FormInputProps) {
    return (
        <input
            type="number"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`p-3 border w-full text-black text-2xl lg:text-3xl font-bold rounded-xl bg-textbox ${className}`}
        />
    )
}