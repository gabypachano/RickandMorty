import React from "react";
import { useState } from "react";
import validation from "../validation";



const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setUserData({
            ...userData, [event.target.name] : event.target.value
        })

        setErrors(
            validation({
                ...userData, [event.target.name] : event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder="Escribe tu email..." value={userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </div>
           <button type="submit">Submit</button>


        </form>
    )

}



export default Form;