import { ApplyInput } from "./types";

export const validateApplyInfo = (values:ApplyInput) =>  {
    let errors:ApplyInput = {about:"",characterName:"",class:"",firstName:"",lastName:""}
    if(!values.firstName.trim()){
        errors.firstName = "Förnamn är obligatoriskt";
    }

    if(!values.lastName.trim()){
        errors.lastName = "Efternamn är obligatoriskt";
    }

    if(!values.characterName.trim()){
        errors.characterName = "Namn på din karaktär är obligatoriskt";
    }

    if(!values.class.trim()){
        errors.class = "Class/Spec är obligatoriskt"
    }

    return errors


}