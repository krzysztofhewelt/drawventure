import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import paths from '@routes/paths';
import { auth } from '@lib/firebase';
import Logo from '@icons/Logo.svg';
import Dog from '@icons/Dog.svg';
import Input from '@components/Input';
import Button from '@components/Button';
import { t } from 'i18next';
import Form from '@components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Password from '@components/Password';
import { regex } from 'consts/regex';

type RegisterData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [createUserWithEmailAndPassword, _user] = useCreateUserWithEmailAndPassword(auth);

  const schema = yup.object().shape({
    email: yup.string().required().email().matches(regex.email, 'validation.email'),
    password: yup.string().required().matches(regex.password, 'validation.password'),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'validation.passwordConfirmation'),
  });

  const methods = useForm<RegisterData>({
    resolver: yupResolver(schema),
  });

  const handleRegister: SubmitHandler<RegisterData> = async (data) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      navigate(paths.LOGIN);
    } catch (e) {
      // TODO }
    }
  };

  if (user) {
    return <Navigate to={paths.ROOT} replace />;
  }

  return (
    <main>
      <div className="mx-auto grid h-full max-h-screen w-full grid-rows-3 items-center text-center lg:w-1/2">
        <img src={Logo} className="mx-auto my-auto w-3/4" alt="logo" />

        <Form formMethods={methods} className="flex w-full flex-col gap-3" onSubmit={handleRegister}>
          <Input name="email" placeholder={t('authenticateForms.email')} />
          <Password name="password" placeholder={t('authenticateForms.password')} />
          <Password name="confirmPassword" placeholder={t('authenticateForms.confirmPassword')} />

          <Button type="submit" className="button_primary" text={t('button.register')} />

          <p className="text-center">
            {t('authenticateForms.alreadyRegister')}{' '}
            <NavLink className="link_primary" to={paths.LOGIN}>
              {t('authenticateForms.login')}
            </NavLink>
          </p>
        </Form>

        <img src={Dog} className="mx-auto h-full" alt="logo" />
      </div>
    </main>
  );
}
