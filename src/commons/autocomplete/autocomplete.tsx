import React from "react";
import Button from 'react-toolbox/lib/button/Button';
interface AutoCompleteProps{
    label : string;
}

export default (props:AutoCompleteProps)=>{
    return (
        <>
        <Button label={props.label} />
        <Button icon='add' flat primary  />
        </>
    )
}
