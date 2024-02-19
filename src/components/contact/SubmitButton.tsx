'use client';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="text-white bg-lime-600 dark:bg-amber-500 px-6 p-2.5 rounded-md flex items-center justify-center gap-x-3 text-xl mt-6 disabled:bg-lime-900 dark:disabled:bg-amber-900 min-w-[174px]"
    >
      <FontAwesomeIcon icon={faPaperPlane} /> {pending ? 'Pending ...' : 'Send'}
    </button>
  );
}
