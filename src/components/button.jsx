import { MdArrowForward, MdSearch } from 'react-icons/md';

export function Button() {
  return (
    <button className="bg-primary-600 hover:bg-primary-700 text-gray-50 text-lg text-bold rounded-lg py-4 px-6 w-fit flex items-center justify-center gap-2">Learn More<MdArrowForward className='color-gray-50'/></button>
  );
}