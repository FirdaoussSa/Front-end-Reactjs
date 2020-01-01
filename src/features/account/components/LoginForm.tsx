import React from "react";
import { Formik } from 'formik';

interface LoginFormProps {
    onSubmit : (values:any)=>void;
}
const LoginForm = (props:LoginFormProps) => {
    return (

        <>

            <Formik
                initialValues={{ name: 'jared' }}
                onSubmit={(values, actions) => {
                    props.onSubmit(values);
                }}
            >
                {propsF => (
                    <form onSubmit={propsF.handleSubmit}>
                        <input
                            type="text"
                            onChange={propsF.handleChange}
                            onBlur={propsF.handleBlur}
                            value={propsF.values.name}
                            name="name"
                        />
                        <button type="submit">Clik here </button>
                    </form>
                )}
            </Formik>


        </>
    )
}

export default LoginForm;