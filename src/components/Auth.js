import { Typography, TextField, Button } from '@mui/material';
import React, { Component } from 'react'
import '../styles/Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: ""
            }
        };

        this.inform = {
            email: "meetshaikhfaisal@gmail.com",
            password: "123456789"
        }
    }

    handleForm = (key, value) => {
        let { form } = this.state;
        form[key] = value;
        this.setState({ form });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { form } = this.state;
        const { email, password } = this.inform;
        if (form.email === email && form.password === password) {
            console.log("Valid information");
            localStorage.setItem('isAuth', 1);
            this.props.updateAuth(1);

            //redirect
        } else {
            alert('Invalid email & password');
        }
    };

    render() {
        return (
            <>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                    <div>

                        <form onSubmit={this.handleSubmit}>
                            <Typography variant='h4'  > Login </Typography>
                            <p style={{ color: "rgb(108, 115, 127)" }}>Don't have an account? <span style={{ color: "blue" }}>Register</span></p>
                            <TextField type="text" id="outlined-basic" label="Email Address" variant="outlined" style={{ margin: "10px", width: "100%" }} onChange={(e) => this.handleForm("email", e.target.value)} />
                            <TextField type="password" id="outlined-basic" label="Password" variant="outlined" style={{ margin: "10px", width: "100%" }} onChange={(e) => this.handleForm("password", e.target.value)} />
                            <Button variant="contained" type="submit" style={{ margin: "10px", width: "100%" }} >Continue</Button>
                        </form>

                    </div>

                    <div>
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-232.jpg?w=740&t=st=1680867101~exp=1680867701~hmac=c5e094b8fc013c8325ac651e6661f4f3b0a8dbb98f1ad9f4e5561b10a78956e4" alt="logo" />
                    </div>

                </div>



            </>
        )
    }
}
export default Auth;