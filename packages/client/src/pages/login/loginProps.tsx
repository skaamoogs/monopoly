import { ILoginForm } from "./login";

const LoginProps: ILoginForm = {
    headerLevel: 'h2',
    headerName: 'Вход в игру',
    linkTitle: 'создать аккаунт',
    linkAction: () => { console.log('router to registr page') },
    submitBtnName: 'Войти',
    inputsProps: [
        {
            fieldId: 'login',
            fieldName: 'Логин',
            inputType: 'text'
        },
        {
            fieldId: 'password',
            fieldName: 'Пароль',
            inputType: 'password'
        }
    ]
}

export default LoginProps;
