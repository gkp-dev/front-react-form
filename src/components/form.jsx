import React, { Component } from 'react';
import './scss/form.css'

class Form extends Component {
        state = {
        lastname: '',
        firstname: '',
        email:''
    }
    
    handleChange = (arg, event) => {
        this.setState({ [arg]: event.target.value })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { lastname, firstname, email } = this.state;
        console.log(lastname, firstname, email)
        
        const data = {
            lastname,
            firstname,
            email
        }

        async function postData() {
            
            const result = await fetch(`${process.env.REACT_APP_API_URL}/sendData`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
                
            )
            
            const resultData = await result.json()

        }
        postData()
        
        
        
    }
    

    render() { 
        const { lastname, firstname, email } = this.state;
        return ( 
            <form onSubmit ={this.handleSubmit}>
                <div className="input-field">
                    <label for="nom">Nom</label><br />
                    <input type="text" id="nom" value={lastname} onChange={(event) => { this.handleChange("lastname",event) }}/>
                </div>
                <div className="input-field">
                    <label for="prenom">Prénom</label><br />
                    <input type="text" id="prenom" value={firstname} onChange={(event) => { this.handleChange("firstname",event) }}/>
                </div>
                <div className="input-field">
                    <label for="nom">Email</label><br />
                    <input type="email" id="email" value={email} onChange={(event) => { this.handleChange("email",event) }}/>
                </div>

                <input type="submit" className='btn orange' value="submit"/>
                
            </form>
         );
    }
}
 
export default Form;