'use client'
import React,{useState} from 'react';
import styles from '@/app/styles/signup.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faUser
} from "@fortawesome/free-solid-svg-icons";
const RegistrationForm = () => {
  const [user,setUser] = useState(null);
  const[email,setEmail] = useState("")
  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      response=>console.log('response',response)
      }).catch(error=>console.log('error: ', error))
  }
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>
        <div className={styles.title_container}>
          {user && <p>User created: {user.email}</p>}
          <h2>REGISTER FOR OUR WEBSITE</h2>
        </div>
        <div className={`${styles.clearfix} ${styles.row}`}>
          <div className="">
            <form onSubmit={handleSubmit}>
              <label><span className={styles.importants}>*</span>Email Id:</label>
              <div className={styles.input_field}>
                <div>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <input className={styles.inputtypes}type="email" name="email" value={email} placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} required/>
              </div>
              <label><span className={styles.importants}>*</span>Password:</label>
              <div className={styles.input_field}>
                <div>
                <FontAwesomeIcon icon={faLock}/>
                </div>
                <input className={styles.inputtypes}type="password" name="password" placeholder="Password" required />
              </div>
              <label><span className={styles.importants}>*</span>Re-type Password:</label>
              <div className={styles.input_field}>
                <div>
                <FontAwesomeIcon icon={faLock}/>
                </div>
                <input type="password" name="password" placeholder="Re-type Password" required />
              </div>
              <div className={`${styles.clearfix} ${styles.row}`}>
                <div className={styles.col_half}>
                <label><span className={styles.importants}>*</span>First Name:</label>
                  <div className={styles.input_field}>
                    <div>
                    <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <input type="text" name="name" placeholder="First Name" required/>
                  </div>
                </div>
                <div className={styles.col_half}>
                <label>Last Name:</label>
                  <div className={styles.input_field}>
                    <div>
                    <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <input type="text" name="name" placeholder="Last Name"/>
                  </div>
                </div>
              </div>
              <div className={`${styles.input_field} ${styles.radio_option}`}>
                <input type="radio" name="radiogroup1" id="rd1" />
                <label htmlFor="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2" />
                <label htmlFor="rd2">Female</label>
              </div>
               <div className={`${styles.input_field} ${styles.select_option}`}>
                <select>
                  <option>Select a country</option>
                  <option>India</option>
                  <option>Others</option>
                </select>
                <div className={styles.select_arrow}></div>
              </div>
               <div className={`${styles.input_field} ${styles.checkbox_option}`}>
                <input type="checkbox" id="cb1" required/>
                <label htmlFor="cb1"><span className={styles.importants}>*</span>I agree with terms and conditions</label>
              </div>
              <div className={`${styles.input_field} ${styles.checkbox_option}`}>
                <input type="checkbox" id="cb2" />
                <label htmlFor="cb2">I want to receive the newsletter</label>
              </div>
              <div className='buttoncontainer'>
              <input className={styles.buttonsubmit} type="submit" value="Register" />
              <input className={styles.buttonreset} type="reset" value="reset" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;