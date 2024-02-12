import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelopeOpenText,
  faMap,
  faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Info = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-4">Don't be shy !</h2>
      <p className="text-balance dark:text-textDark-600">
        Feel free to get in touch with me. I am always open to discuss about new
        projects, creative ideas or opportunities & to be part of your visions.
      </p>
      <div className="flex flex-col gap-y-6 mt-6">
        <div className="flex gap-x-4">
          <FontAwesomeIcon
            icon={faMap}
            className="text-3xl text-lime-600 dark:text-amber-500"
          />
          <div className="flex flex-col">
            <span className="block uppercase">Address Point</span>
            <span className="font-medium">Mirpur-13, Dhaka</span>
          </div>
        </div>

        <div className="flex gap-x-4">
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="text-3xl text-lime-600 dark:text-amber-500"
          />
          <div className="flex flex-col">
            <span className="block uppercase">Mail Me</span>
            <Link
              href="mailto:ab.ahadovi.dev@gmail.com"
              className="font-medium"
            >
              ab.ahadovi.dev@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex gap-x-4">
          <FontAwesomeIcon
            icon={faSquarePhone}
            className="text-4xl text-lime-600 dark:text-amber-500"
          />
          <div className="flex flex-col">
            <span className="block uppercase">Call Me</span>
            <Link href="tel:+8801738068145" className="font-medium">
              +8801738068145
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-5 md:mt-8">
        <Link
          href="https://www.linkedin.com/in/ahad-ovi/"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-600 dark:bg-amber-600 text-white text-xl"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link
          href="https://github.com/ahadovi"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-600 dark:bg-amber-600 text-white text-xl"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>

        {/* <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-600 dark:bg-amber-600 text-white text-xl"
        >
          <FontAwesomeIcon icon={faMedium} />
        </Link>
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-600 dark:bg-amber-600 text-white text-xl"
        >
          <FontAwesomeIcon icon={faDev} />
        </Link> */}

        <Link
          href="https://wa.me/8801738068145"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-600 dark:bg-amber-600 text-white text-xl"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </div>
    </div>
  );
};

export default Info;
