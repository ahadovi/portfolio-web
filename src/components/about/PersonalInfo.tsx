import { getAge } from '@/lib/utils';
import { faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faFonticonsFi } from '@fortawesome/free-brands-svg-icons/faFonticonsFi';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const PersonalInfo = () => {
  return (
    <div>
      <h3 className="block text-xl md:text-2xl font-medium md:font-bold uppercase mb-4 md:mb-6 dark:text-white">
        Personal infos
      </h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:gap-x-16 md:gap-y-4 break-words">
        <li>
          Name: <br className="md:hidden" />{' '}
          <strong className="text-[15.5px] font-medium">Abdul Ahad Ovi</strong>
        </li>
        <li>
          Age: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            {getAge('1993-01-05')} Years
          </strong>
        </li>
        <li>
          Nationality: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            &#127463;&#127465; Bangladeshi
          </strong>
        </li>
        <li>
          Freelance: <br className="md:hidden" />{' '}
          <strong className="text-[15.5px] font-medium">Not Available</strong>
        </li>
        <li>
          Remote: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            Available <em>(Recommended)</em>
          </strong>
        </li>
        <li>
          Address: <br className="md:hidden" />{' '}
          <strong className="text-[15.5px] font-medium">
            Mirpur-13, Dhaka
          </strong>
        </li>
        <li>
          Phone: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            <Link href="tel:+8801738068145">+8801738068145</Link>
          </strong>
        </li>
        <li>
          Eamil: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            <Link href="mailto:ab.ahadovi.dev@gmail.com">
              ab.ahadovi.dev@gmail.com
            </Link>
          </strong>
        </li>
        <li>
          Skype: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            <Link href="skype:ahadovi2">ahadovi2</Link>
          </strong>
        </li>
        <li>
          GitHub: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            <Link href="https://github.com/ahadovi" target="_blank">
              ahadovi
            </Link>
          </strong>
        </li>
        <li>
          LinkedIn: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            <Link href="https://www.linkedin.com/in/ahad-ovi/" target="_blank">
              ahad-ovi
            </Link>
          </strong>
        </li>
        <li className="text-balance">
          Languages: <br className="md:hidden" />
          <strong className="text-[15.5px] font-medium">
            &#127463;&#127465; Bangla, &#127482;&#127480; English
          </strong>
        </li>
      </ul>
      <div className="flex items-center gap-x-3 mt-6 md:mt-10">
        <Link
          href="https://braincraftapps.com/our-team"
          target="_blank"
          className="bg-lime-600 dark:bg-amber-500 w-11 h-11 lg:w-12 lg:h-12 rounded-full text-white inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
        >
          <Image
            src="/bc.png"
            alt="bc"
            width={14}
            height={14}
            className="w-[12px] md:w-[14px] h-auto"
          />
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~017eb64f70acbcfb06"
          target="_blank"
          className="bg-lime-600 dark:bg-amber-500 w-11 h-11 lg:w-12 lg:h-12 rounded-full text-white inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
        >
          <FontAwesomeIcon icon={faUpwork} />
        </Link>
        <Link
          href="https://www.fiverr.com/ahadovi33"
          target="_blank"
          className="bg-lime-600 dark:bg-amber-500 w-11 h-11 lg:w-12 lg:h-12 rounded-full text-white inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
        >
          <FontAwesomeIcon icon={faFonticonsFi} />
        </Link>
        <Link
          href="/cv/Abdul_Ahad_Ovi.pdf"
          download
          target="_blank"
          className="bg-lime-600 dark:bg-amber-500 py-2.5 px-6 rounded-full text-white inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
        >
          <FontAwesomeIcon icon={faFileDownload} /> Download CV{' '}
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
