import SubmitButton from '@/components/contact/SubmitButton';
import { sendEmail } from '@/components/contact/actions';

const ContactForm = () => {
  return (
    <form
      className="w-full bg-bgInactiveLight dark:bg-bgInactiveDark p-6 rounded-lg"
      action={sendEmail}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div className="mb-4 md:mb-6">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink"
            required
          />
        </div>
        <div className="mb-4 md:mb-6">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink"
            required
          />
        </div>
      </div>
      <div className="mb-4 md:mb-6">
        <input
          type="text"
          placeholder="Your Subject"
          name="subject"
          className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full px-6 py-3 rounded-md border border-bgInactiveLightLink dark:border-bgInactiveDarkLink focus:outline-none bg-white dark:bg-bgInactiveDarkLink min-h-24 md:min-h-32"
      ></textarea>

      <SubmitButton />
    </form>
  );
};

export default ContactForm;
