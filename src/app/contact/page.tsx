import BigTitle from '@/components/BigTitle';
import ContactForm from '@/components/contact/ContactForm';
import Info from '@/components/contact/Info';

const Contact = () => {
  return (
    <div className="container pb-20 md:pb-6">
      <BigTitle
        title="get in"
        coloredTitle="touch"
        placeholderTitle="contact"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-8 xl:gap-10">
        <Info />
        <div className="xl:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
