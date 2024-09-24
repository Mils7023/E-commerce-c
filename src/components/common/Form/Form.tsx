"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  UseFormReturn,
  useForm,
} from "react-hook-form";

export type ISubmitHandler<T extends FieldValues> = (
  data: T,
  methods: UseFormReturn<T>
) => unknown | Promise<unknown>;

export interface FormProps<T extends FieldValues> {
  onSubmit: ISubmitHandler<T>;
  schema: any;
  children: React.ReactNode;
  className: string;
  defaultValues?: DefaultValues<T>;
  resetData?: DefaultValues<T>;
}

export function Form<T extends FieldValues>({
  schema,
  children,
  onSubmit,
  defaultValues,
  resetData,
  ...rest
}: FormProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver<any>(schema as any),
  });

  useEffect(() => {
    if (resetData) {
      methods.reset(resetData);
    }
  }, [methods, resetData]);

  // Prevent form submission on Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      methods.handleSubmit((values) => {
        onSubmit(values, methods);
      })();
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) => {
          onSubmit(values, methods);
        })}
        onKeyDown={handleKeyDown} // Handle key down event
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}
