import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface Props<T extends FieldValues> {
  className?: string;
  children: ReactNode;
  formMethods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const Form = <T extends FieldValues>({ className, children, formMethods, onSubmit }: Props<T>) => {
  return (
    <FormProvider {...formMethods}>
      <form className={className} onSubmit={formMethods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
