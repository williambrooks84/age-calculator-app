export interface formLabelProps {
    labelName: string;
    className: string;
}

export interface FormInputProps {
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

export interface FormProps {
    onValidSubmit: (day: string, month: string, year: string) => void;
}

export interface ResultProps {
    age: {
        years: number | null;
        months: number | null;
        days: number | null;
    };
}

export interface ResultSpanProps {
    value: number | null
    label: string
}