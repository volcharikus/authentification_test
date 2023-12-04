import {object, string} from "yup";

export const SignUpnFormSchema = object({
    firstName: string().required('Required First Name').min(2),
    lastName: string().required('Required Last Name').min(2),
    position: string().required('Required Position'),
})