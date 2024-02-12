'use client';
import SubmitButton from '@/components/contact/SubmitButton';
import { sendEmail } from '@/components/contact/actions';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
  subject: '',
  name: '',
  email: '',
};

const ContactForm = () => {
  const [state, formAction] = useFormState(sendEmail, initialState);
  return (
    <form
      className="w-full bg-bgInactiveLight dark:bg-bgInactiveDark p-6 rounded-lg"
      action={formAction}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div className="mb-4 md:mb-6">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink"
          />
          {state?.name && (
            <p className="text-red-600 text-sm mt-1">{state?.name}</p>
          )}
        </div>
        <div className="mb-4 md:mb-6">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink"
          />
          <p className="text-red-600 text-sm mt-1">{state?.email}</p>
        </div>
      </div>
      <div className="mb-4 md:mb-6">
        <input
          type="text"
          placeholder="Your Subject"
          name="subject"
          className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink"
        />
        <p className="text-red-600 text-sm mt-1">{state?.subject}</p>
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink min-h-24 md:min-h-32"
      ></textarea>
      <p className="text-red-600 text-sm mt-1">{state?.message}</p>
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
