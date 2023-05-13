import styles from './Form.module.css'
import fondo from '../../img/fondo2.gif'
import { useState } from 'react'
import validate from '../../utils/validation'

const Form = ({login}) => {
    const [userData, setUserData]= useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:''
    })

    const handleChange = (e)=>{//Validation input form
        const {name,value}= e.target
        const newUserdata = {
            ...userData,
            [name]:value
            }
            setUserData(newUserdata)
        const errors = validate(newUserdata)
        setErrors(errors)
    }

    const handleSubmit = (e) =>{//Submit form data
        e.preventDefault()
        
        login(userData)
    }

    return  <form className={styles.formLogin} onSubmit={handleSubmit} action="">
                <h1>Log In</h1>
                <img src={fondo} alt="Rick & Morty"/>
                <label htmlFor="">Email</label>
                <input name={'email'} type="email" onChange={handleChange} value={userData.email} />
                {/* Condictional render to email error input */}
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <label htmlFor="">Password</label>
                <input name={'password'} type="password" onChange={handleChange} value={userData.password}/>
                {/* Condictional render to password error input */}
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                <button type='submit'>Submit</button>
            </form>
}
export default Form