import {object, string} from "yup";


export const loginFormSchema = object({
    phone: string().required('Required Phone number').test('key',
        () => 'Incorrect phone number',
        (value: string | undefined) => value?.length === 12)
})

