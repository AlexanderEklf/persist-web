import { setegid } from "process";
import React from "react";
import { useState } from "react"
import { ApplyInput } from "../types";
import { validateApplyInfo } from "../validate";

type Change = React.ChangeEvent<HTMLInputElement>
type Submit = React.FormEvent<HTMLFormElement>

export const useForm = (initalValues:any)=>{
    const [values, setValues] = useState(initalValues);
    const [errors, setErrors] = useState<ApplyInput>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e:Submit) => {
        e.preventDefault();

        setErrors(validateApplyInfo(values))

        setIsSubmitting(true);
    }

    return [values, (e:Change) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    },
    handleSubmit,
    errors
]
}