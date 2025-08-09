'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { registerSchema } from '@/schemas/registerSchema';

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      userName: '',
      email: '',
      password: '',
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
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='First Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='userName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input placeholder='User Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder='E-Mail' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='passwordConfirmation'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password confirmation</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Password Confirmation' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full bg-blue-600 text-white hover:bg-blue-700'>
              REGISTER
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
