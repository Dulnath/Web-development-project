import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import background from './images/background.jpg'
import './studentSign.css'

//This is the student sign in form(account creation form for students)
export const StdForm = () => {
    const history = useHistory();

    const styles = {
        header: {
          backgroundImage: `url(${background})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }
    }

    const [values,setValue] = useState({username:'',password:''});

    //This is the function to submit data to the database
    const submitForm = e => {
        e.preventDefault();
        alert('A name was submitted: ');

        axios.post(' http://localhost:4005/app/signup',{values})
        .then(function(response){
            console.log(response);
            history.push('/stdSign');
        })
    }

    const [subs] = useState([
        {id:"1",label:"Physical science", value:"Maths"},
        {id:"2",label:"Biological Science", value:"physics"},
        {id:"3",label:"Othe Stream", value:"chemsitry"},
    ]);

    const [batch] = useState([
        {id:"1",label:" Batch OF 2021 ", value:"Batch OF 2021"},
        {id:"2",label:"Batch OF 2022 ", value:"Batch OF 2022"},
        {id:"3",label:"Batch OF 2023", value:"Batch OF 2023"},
    ]);

    /*Note! i did not use the button component i defined here as styling for this button 
    was already in the form template i used*/ 

    //This function submits an http request and then sends the user back to the login page
    //no databinding is done so even though an http request is made no data is sent to the server
    return ( 
        <div style={styles.header}>
            <div style={styles.content}>
                <section className="form animated flipInX">
                <h2>Sign up as a student</h2>
                <form className="loginbox" onSubmit={submitForm}>
                     <input placeholder="Fullname" type="text" id="Fullname" required onChange={e=>setValue({uname:e.target.values})}></input>
                     <select name="subject" id="subject">
                        {subs.map((subs)=>(
                            <option key={Math.random().toString(36).substr(2,9)} value={subs.value}>{subs.label}</option>
                        ))}
                    </select><br/>
                     <select name="subject" id="subject">
                        {batch.map((batch)=>(
                            <option key={Math.random().toString(36).substr(2,9)} value={batch.value}>{batch.label}</option>
                        ))}
                    </select><br/>
                    <input placeholder="Username" type="text" id="username" required onChange={e=>setValue({uname:e.target.values})}></input>
                    <input placeholder="Password" type="password" id="password" required onChange={e=>setValue({password:e.target.values})}></input>
                <button id="sign" onClick={submitForm} >Sign up</button><br/>
                </form>
                </section>
            </div>
        </div>
    )
}

export default StdForm