import Image from "next/image";
import Link from "next/link";
import { social } from "../";

export const Brand = () => {
  return (
    <div className="sm:col-span-1 col-span-2">
      <Link href="/">
        <Image
          src="/light-logo.svg"
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          width={148}
          height={33}
          className="object-contain w-[148px] h-[33px] dark:hidden"
        />
        <Image
          src="/dark-logo.svg"
          alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          width={148}
          height={33}
          className="object-contain w-[148px] h-[33px] not-dark:hidden"
        />
      </Link>
      <p className="mt-6 mb-12 text-white text-sm max-w-[308px]">
        Stay informed with trusted news and expert insight, delivered daily, for
        free.
      </p>
      <div className="flex items-center gap-5">
        {social.map((item, id) => (
          <Link
            key={id}
            href={item.link}
            className="transition-opacity duration-300 hover:opacity-50 ease-in-out"
          >
            <Image
              src={item.image}
              alt={item.name}
              height={24}
              width={24}
              className="h-6 w-6 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
