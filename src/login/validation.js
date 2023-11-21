const validation = (values)=> {
    let errors = {};
    if (!validation.name){
        errors.name="Name Required";
    }
    else if(values.name.length<6){
        errors.name="Name must be at least 6 characters";

    }

    if (!validation.password){
        errors.password="password Required";
    }
    else if(values.password.length<8){
        errors.password="password must be at least 8 characters";

    }
    return errors;
    
}
export default validation;

