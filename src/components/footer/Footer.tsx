import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-[90px] bg-dark-primary">
      <div className="container">
        <div className="max-w-[920px]">
          <div className="grid grid-cols-[326px_1fr_1fr_1fr]">
            <div>
              <Link href="/">
                <Image
                  src="/light-logo.svg"
                  alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
                  width={148}
                  height={33}
                  className="object-contain"
                />
              </Link>
              <p className="mt-6 mb-12 text-background">
                Stay informed with trusted news and expert insight, delivered
                daily, for free.
              </p>
            </div>
            <div>he</div>
            <div>he</div>
            <div>he</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
