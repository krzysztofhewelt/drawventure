import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'validation.required',
    default: 'validation.error',
  },
  string: {
    email: 'validation.email',
  },
});
