import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
//= Images
import largeThumb from '../../public/ovi-big.png';
import mobileThumb from '../../public/ovi.png';

export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-80px)] md:min-h-dvh container py-6 lg:py-10 grid place-content-center">
      <div className="grid items-center text-center lg:text-left gap-6 lg:gap-10 grid-cols-1 lg:grid-cols-2">
        <div className="">
          <div className="mask-big hidden lg:block">
            <Image
              src={largeThumb}
              alt="Abdul Ahad ovi"
              sizes="100vw"
              placeholder="blur"
              className="w-full h-auto"
            />
          </div>
          <div className="lg:hidden">
            <Image
              src={mobileThumb}
              alt="Abdl Ahad Ovi"
              sizes="100vw"
              placeholder="blur"
              className="block bg-bgInactiveLight dark:bg-bgInactiveDark rounded-full overflow-hidden w-full max-w-[65%] sm:max-w-[40%] mx-auto h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3">
          <h2 className="font-bold text-lime-600 dark:text-amber-500 text-2xl lg:text-3xl uppercase relative lg:before:absolute lg:before:left-0 lg:before:content-[''] lg:before:w-8 lg:before:h-1 lg:before:bg-lime-600 dark:before:bg-amber-500 lg:pl-10 before:top-2/4">
            I'm Abdul Ahad Ovi
          </h2>
          <h3 className="lg:text-xl font-medium dark:text-white/[0.90]">
            Sr. Frontend Web Developer
          </h3>
          <p className="dark:text-textDark text-balance text-base">
            Passionate and proactive developer with 5+ years of experience, who
            loves to write clean, maintainable code. I am always eager to learn
            from every single incident for getting the best of me.
          </p>
          <div className="flex items-center gap-x-3 justify-center lg:justify-start flex-wrap">
            <Link
              href="https://github.com/ahadovi"
              download
              target="_blank"
              className="bg-lime-600 dark:bg-amber-500 w-11 h-11 lg:w-12 lg:h-12 rounded-full text-white mt-4 inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ahad-ovi/"
              download
              target="_blank"
              className="bg-lime-600 dark:bg-amber-500 w-11 h-11 lg:w-12 lg:h-12 rounded-full text-white mt-4 inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link
              href="/cv/Abdul_Ahad_Ovi.pdf"
              download
              target="_blank"
              className="bg-lime-600 dark:bg-amber-500 py-2.5 px-6 rounded-full text-white mt-4 inline-flex items-center justify-center gap-x-2.5 font-medium lg:text-xl"
            >
              <FontAwesomeIcon icon={faFileDownload} /> Download CV{' '}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
