import type { FormInputProps } from "../../interfaces/dataDefinitions";

export default function FormInput({ id, placeholder, value, onChange, className, "aria-invalid": ariaInvalid, "aria-describedby": ariaDescribedBy, }: FormInputProps) {
    return (
        <input
            id={id}
            type="number"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedBy}
            className={`p-3 border w-full text-black text-2xl lg:text-3xl font-bold rounded-xl bg-textbox ${className}`}
        />
    )
}