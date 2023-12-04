import {array, object, string} from "yup";

export const verifyFormSchema = object({

    code: array().of(string().required('Required code').min(1))
})