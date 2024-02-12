'use server';
import { z } from 'zod';

interface StateProps {
  name?: string;
  subject?: string;
  message?: string;
  email?: string;
}

export async function sendEmail(
  prevState: StateProps | undefined,
  formData: FormData,
): Promise<StateProps | undefined> {
  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    subject: z.string().min(1, 'Subject is required'),
    message: z
      .string()
      .min(1)
      .max(250, 'Message must be 250 characters or less'),
    email: z.string().email('Invalid email address'),
  });

  const result = schema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return {
      name: 'Name is required',
      subject: 'Name is required',
      message: 'Max character is 250',
      email: 'Invalid email address',
    };
  }

  const data = result.data;
  console.log(data);
}
