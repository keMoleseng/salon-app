import React, { Suspense, useState } from 'react';

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
          ...values,
          [name]: value
        })
      }

    return {
        handleChange,
        values,
        setValues
    }
}

export function Form(props) {
    const { children, ...other } = props;

    return(
        <form
            {...other}
        >
            {children}
        </form>
    )
}