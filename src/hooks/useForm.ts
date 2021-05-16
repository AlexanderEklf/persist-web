import React from "react";
import { useState } from "react"

type Change = React.ChangeEvent<HTMLInputElement>

export const useForm = (initalValues:any)=>{
    const [values, setValues] = useState(initalValues);

    return [values, (e:Change) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
}