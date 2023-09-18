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
        <form className={styles.formGrid}
        onSubmit={handleSubmit}
        >
            <label className={styles.formLabel}
            >email</label>
            <input className={styles.formInput}
            type="text"
            name="email"
            placeholder="Email..."
            value={userData.email}
            onChange={handleChange}
            />
            {errors.email && <p clasName={styles.formError}
            >{errors.email}</p>}
            <label className={styles.formLabel}
            >pasword</label>
            <input className={styles.formInput}
            type="password"
            name="password"
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
            />
            {errors.password && <p clasName={styles.formError}
            >{errors.password}</p>}
            <button type='submit'>SUBMIT</button>
        </form>
            </div>
            </div>
    )
}