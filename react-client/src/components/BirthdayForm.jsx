import React from "react";

class BirthdayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend_name: '',
            birthdate: '',
            account_id: '',
            reminder1: '',
            reminder2: '',
            reminder3: '',
            phone_number: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeBday = this.changeBday.bind(this);
        this.changeReminder1 = this.changeReminder1.bind(this);
        this.changeReminder2 = this.changeReminder2.bind(this);
        this.changeReminder3 = this.changeReminder3.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }

    changeBday(e) {
        const data = new FormData(e.target);
        console.log(e);
        this.setState({
            birthdate: e.target.value
        })       
        console.log(this.state);
    }
    changeName(e) {
        this.setState({
            friend_name: e.target.value
        })
        console.log(this.state);
    }
    changeReminder1(e) {
        this.setState({
            reminder1: e.target.value
        })
        console.log(this.state);
    }
    changeReminder2(e) {
        this.setState({
            reminder2: e.target.value
        })
        console.log(this.state);
    }
    changeReminder3(e) {
        this.setState({
            reminder3: e.target.value
        })
        console.log(this.state);
    }
    submitInfo() {
        fetch('/birthdays', 
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
            <div className="reminder">
            <img src="https://i.gifer.com/origin/88/88e7607e33483b52197951f7588be9dc_w200.gif"></img>
                Enter your friend's birthday here and we'll text you a reminder on that date!
                <p></p>
                <form onSubmit = {this.submitInfo}>
                    Name  
                    <input type="text" onChange = {this.changeName}></input>
                    <p></p>
                    Birthday  
                    <input type="text" data-parse="date" placeholder="YYYY-MM-DD" pattern="\d{4}\-\d{2}/-d{2}" required name="bday" onChange = {this.changeBday}></input>
                    <p></p>
                    Reminder Date 1  
                    <input type="text" data-parse="date" placeholder="YYYY-MM-DD" pattern="\d{4}\-\d{2}/-d{2}" required name="reminder1" onChange = {this.changeReminder1}></input>
                    <p></p>
                    Reminder Date 2 (optional)  
                    <input type="text" data-parse="date" placeholder="YYYY-MM-DD" pattern="\d{4}\-\d{2}/-d{2}" name="reminder2" onChange = {this.changeReminder2}></input>
                    <p></p>
                    Reminder Date 3 (optional)  
                    <input type="text" data-parse="date" placeholder="YYYY-MM-DD" pattern="\d{4}\-\d{2}/-d{2}" name="reminder3" onChange = {this.changeReminder3}></input>
                    <p></p>
                    <button type="submit">Create Reminder</button>
                </form>
            </div>
        )
    }

}

export default BirthdayForm;