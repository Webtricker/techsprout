'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { registerSchema } from '@/schemas/registerSchema';
import { FormInputField } from '../FormInputField';

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      passwordConfirmation: '',
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-900'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormInputField
              control={form.control}
              label='Name'
              name='name'
              placeholder='Enter your name'
            />
            <FormInputField
              control={form.control}
              label='Username'
              name='userName'
              placeholder='Enter a username'
            />
            <FormInputField
              control={form.control}
              label='Email'
              name='email'
              placeholder='Enter your email'
              type='email'
            />
            <FormInputField
              control={form.control}
              label='Phone Number'
              name='phoneNumber'
              placeholder='Enter your number'
            />
            <FormInputField
              control={form.control}
              label='Password'
              name='password'
              placeholder='Enter a password'
            />
            <FormInputField
              control={form.control}
              label='Confirm Password'
              name='passwordConfirmation'
              placeholder='Type you password again'
            />
            <Button type='submit' className='bg-primary hover:bg-accent w-full'>
              REGISTER
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
