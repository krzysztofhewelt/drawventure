import { createElement, ReactNode } from 'react';
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
        {Array.isArray(children)
          ? children.map((child) => {
              return child.props.name
                ? createElement(child.type, {
                    ...{
                      ...child.props,
                      key: child.props.name,
                    },
                  })
                : child;
            })
          : children}
      </form>
    </FormProvider>
  );
};

export default Form;
