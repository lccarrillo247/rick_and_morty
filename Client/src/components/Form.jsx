import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";

export default function Form(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const handleChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
    })

        setErrors(
            validation({
                ...userData,
                [evento.target.name]: evento.target.value
            })
        )
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        return props.login(userData)
    };

    return (
        <div className={styles.formBackground}>            
        <div className={styles.formContainer}>            
        <form
        onSubmit={handleSubmit}
        >
            {/* <label>EMAIL</label> */}
            <input
            type="text"
            name="email"
            placeholder="Email..."
            value={userData.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            {/* <label>PASSWORD</label> */}
            <input
            type="password"
            name="password"
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <button type='submit'>SUBMIT</button>
        </form>
            </div>
            </div>
    )
}