import { MdArrowForward, MdSearch } from 'react-icons/md';

export function Button() {
  return (
    <button className="bg-primary-600 hover:bg-primary-700 text-gray-50 text-lg text-bold rounded-lg w-auto h-auto py-2 px-4 flex items-center gap-2">More Info <MdArrowForward className='color-gray-50'/></button>
  )
}