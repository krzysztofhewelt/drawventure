import * as yup from 'yup';

const email = yup.string().required().email();
const password = yup
  .string()
  .required()
  .min(8, 'validation.password.min')
  .max(128, 'validation.password.max')
  .matches(/[a-z]+/, 'validation.password.oneLowercase')
  .matches(/[A-Z]+/, 'validation.password.oneUppercase')
  .matches(/[@$!%*#?&]+/, 'validation.password.oneSpecial')
  .matches(/\d+/, 'validation.password.oneNumber');

export const loginRegisterSchema = yup.object().shape({
  email: email,
  password: password,
});

export const changePasswordSchema = yup.object().shape({
  password: password,
  newPassword: password.notOneOf([yup.ref('password')], 'validation.password.newSamePassword'),
});

export const sendResetPasswordEmailSchema = yup.object().shape({
  email: email,
});

export const resetPasswordSchema = yup.object().shape({
  password: password,
});
