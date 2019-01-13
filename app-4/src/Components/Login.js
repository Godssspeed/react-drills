import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: 'WillYoung',
            password: 'Testing1234'
        }
        this.handleChange = this.handleChange.bind(this);    
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(e){
        this.setState({username:e.target.value})
    }

    handleChange2(e){
        this.setState({password:e.target.value})
    }

    handleClick() {
        let {username,password} = this.state;
        if(username === 'WillYoung' && password === 'Testing1234'){
            window.alert('Login Successful')
        } else {
            window.alert('You Lose The Game')
        }
    }
    
    render (){

        console.log(this.state.username);
        console.log(this.state.password);
        return (
            <div>
                <input type='text' onChange={(e => this.handleChange(e))} /> 
                <input type='text' onChange={(e => this.handleChange2(e))} /> 
                <button onClick={(prop => this.handleClick(prop))}>Login</button>
            </div>
        )
    }


}

export default Login;