import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signup from './components/Signup.jsx';
import BirthdayForm from './components/BirthdayForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Birthday Reminder App</h1><img src="https://i.pinimg.com/736x/ec/e6/7e/ece67e52bb5957f97e1610859296417f--logo-heart-k-logo.jpg"></img>
      <Signup />
      <BirthdayForm />

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));