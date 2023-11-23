import * as yup from 'yup';
import { regex } from 'consts/regex';

const email = yup.string().required().email().matches(regex.email, 'validation.email');
const password = yup.string().required().matches(regex.password, 'validation.password');

export const loginRegisterSchema = yup.object().shape({
  email: email,
  password: password,
});

export const changePasswordSchema = yup.object().shape({
  password: password,
  newPassword: password.notOneOf([yup.ref('password')], 'validation.newSamePassword'),
});

export const sendResetPasswordEmailSchema = yup.object().shape({
  email: email,
});

export const resetPasswordSchema = yup.object().shape({
  password: password,
});
