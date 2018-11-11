import React, { Component } from 'react';

class Signin extends Component {

    handleSubmit=event=>{
        event.preventDefault();
        //console.log(this.inputNode1.value);
        //console.log(this.inputNode2.value);
        let formData = new FormData();
        formData.append("email", this.inputNode1.value);
        formData.append("password", this.inputNode2.value);

        fetch
        (
            "http://unipastas-back.herokuapp.com/user_token",
            {
                method: 'POST',
                body: formData, // data can be `string` or {object}!,
                headers:
                {
                    "Content-Type": 'application/json',
                },
            },
        ).then(res => res.json()).then(res => console.log(res.jwt))
    };


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>email</label> <br />
                    <input type='email' id='email' name='email' ref={node=>{this.inputNode1=node}} />
                    <br />
                    <label htmlFor='password'>Password</label> <br />
                    <input type='password' id='password' name='password' ref={node=>{this.inputNode2=node}} />
                    <br />
                    <input type='submit' value='Sign In'/>
                </form>

            </div>
        );
    }
}

export default Signin;
