// const regexEmail = /^(?=.{1,35}$)\S+@\S+\.\S+$/
 const regexPassword = /^(?=.*\d).{6,10}$/
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


const validation = (userData) => {
    let errors = {}

    //     Dentro de la función debes hacer lo siguiente:
    // a) Declara una variable llamada errors y que su valor sea un objeto vacío.
    // En el input email, valida si el email que ingresa el usuario coincide con el formato regex de la constante regexEmail, aplicándole a esta el método test() y dentro de sus paréntesis coloca userData.email; agrega la propiedad email al objeto errors en donde su valor sea "Debe ser un correo electrónico".
    // En el input password, si este campo está vacío, agrega la propiedad password al objeto errors en donde su valor sea "Se requiere un password".
    // if (!regexEmail.test(userData.email)) {
    //     errors.email = "Email invalido"
    // }
    // if (!regexPassword.test(userData.password)) {
    //     errors.password = "Se requiere un password"
    // }
    // return errors;

    if(!regexEmail.test(userData.email)) {
        errors.email = "El email es invalido";
    }
    if(!userData.email) {
        errors.email = "El email no puede estar vacio";
    }
    if(userData.email.length > 35) {
        errors.email = "El email no puede tener mas de 35 caracteres";
    }

    if(!regexPassword.test(userData.password)) {
        errors.password = "El password debe tener al menos un numero y entre 6 y 10 caracteres en total";
    }
    return errors;
}













export default validation;