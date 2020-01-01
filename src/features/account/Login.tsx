import React from "react";
import LoginForm from "./components/LoginForm";
import Autocomplete from "../../commons/autocomplete/autocomplete" ;

export default class Login extends React.Component<any, any> {

    state={name:"",onSubmiting:false}
    onSubmit = (values: any) => {
        console.log(values);
        this.setState({name:values.name,onSubmiting:true})
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <LoginForm onSubmit={this.onSubmit}/>
                {this.state.onSubmiting && <h1>Hi {this.state.name} !</h1>}
                <Autocomplete label="Hello world " />
            </>
        );
    }
}
/*
const Login = () => {

    let name:string ="";
    let onSubmiting:boolean=false;
    const onSubmit = (values: any) => {
        console.log(values);
        name=values.name;
        onSubmiting=true;
    }
    return (
        <>
            <LoginForm onSubmit={onSubmit}/>
            {onSubmiting && <h1>Hi {name} !</h1>}
        </>
    );

}
*/
