import z from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: 'Name must be at least 2 characters.',
      })
      .max(50, {
        message: 'Name must not exceed 50 characters.',
      }),
    userName: z
      .string()
      .min(2, {
        message: 'User name must be at least 2 characters.',
      })
      .max(50, {
        message: 'User name must not exceed 50 characters.',
      }),
    email: z.email({
      message: 'Please enter a valid email address.',
    }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.',
    }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match.',
    path: ['passwordConfirmation'],
  });
