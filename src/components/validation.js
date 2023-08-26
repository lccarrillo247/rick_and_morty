import Form from "./Form";

export default function validation(userData) {

    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if (!regexEmail.test(userData.email)) {
        errors.email = 'El email debe incluir @ y .'
    }
    if (!userData.email) {
        errors.email = 'Ingresa tu email bb'
    }
    if (userData.email.length > 35) {  // Por qué hps aquí no se usa .value?
        errors.email = 'Tu email no puede tener más de 35 caracteres'
    }
    if (!/\d/.test(userData.password)) {
        errors.password = 'Tu contraseña debe tener al menos un número'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Tu contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors;
}