'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { registerSchema } from '@/schemas/registerSchema';
import { FormInputField } from '../FormInputField';
import OtpModal from '../OtpModal';
import { useOtpStore } from '@/store/Otpstore';

export default function RegisterForm() {
  const { setModalStatus } = useOtpStore();
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
    // const { data } = useQuery({
    //   queryKey: ['user'],
    //   queryFn: () => null,
    // });
    setModalStatus('open');
  }

  return (
    <section className='common-container flex min-h-screen items-center justify-center py-20'>
      <div className='bg-accent/5 w-full max-w-lg rounded-lg p-6 shadow-md'>
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
              type='password'
            />
            <FormInputField
              control={form.control}
              label='Confirm Password'
              name='passwordConfirmation'
              placeholder='Type you password again'
              type='password'
            />
            <Button type='submit' className='bg-primary hover:bg-accent w-full'>
              REGISTER
            </Button>
          </form>
        </Form>
      </div>
      <OtpModal />
    </section>
  );
}
