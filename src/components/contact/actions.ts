'use client';
import toast from 'react-hot-toast';
import { z } from 'zod';

export async function sendEmail(formData: FormData) {
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

  const dataForm = result.data;
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(dataForm),
    });
    const result = await response.json();
    toast(`${result?.message}`, {
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  } catch (error) {
    toast('Message Sent Failed');
    console.error('Error:', error);
  }
}
