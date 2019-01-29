import React from "react";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner_name: '',
            email: '',
            password: '',
            phone_number: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePN = this.changePN.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }
    changeName(e) {
        this.setState({
            owner_name: e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    changePN(e) {
        this.setState({
            phone_number: e.target.value
        })
        console.log(this.state);
    }
    submitInfo() {
        fetch('/accounts', 
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log("error!");
            }
        })
        .catch(error => {
            console.log("MAYDAY");
            console.error(error);
        })

    }
    render() {
        return (
            <div className="signup">
                <h2>Create an Account</h2>
                <form onSubmit = {this.submitInfo}>
                    Name
                    <input type="text" onChange = {this.changeName}></input>
                    <p></p>
                    Email
                    <input type="email" onChange = {this.changeEmail}></input>
                    <p></p>
                    Password
                    <input type="password" onChange = {this.changePassword}></input>
                    <p></p>
                    Phone Number
                    <input type="text" onChange = {this.changePN}></input>
                    <p></p>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }

}

export default Signup;