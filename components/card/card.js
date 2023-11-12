import Link from 'next/link';
import classNames from 'classnames';

export default function Card({ link, title, color }) {
  const colorContainer = classNames(
    'h-64 w-full lg:h-72 lg:w-72 xl:h-96 xl:w-96 flex flex-row justify-center items-center',
    {
      'bg-yellow-100': color === 'yellow',
      'bg-pink-100': color === 'pink',
      'bg-purple-100': color === 'purple',
      'bg-blue-100': color === 'blue',
    }
  );

  const colorText = classNames(
    'text-xl transition duration-500 ease-in-out  transform hover:-translate-x-1  hover:scale-100',
    {
      'text-yellow-900 hover:text-yellow-900': color === 'yellow',
      'text-pink-900 hover:text-pink-900': color === 'pink',
      'text-purple-900 hover:text-purple-900': color === 'purple',
      'text-blue-900 hover:text-blue-900': color === 'blue',
    }
  );

  return (
    <>
      <Link className={colorContainer} href={link}>
        <p className={colorText}>{title}</p>
      </Link>
    </>
  );
}
