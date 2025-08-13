import Image from "next/image";

export const PollSuccess = () => {
  return (
    <>
      <div className="flex flex-col md:gap-5 gap-3 items-center justify-center">
        <Image
          src="/poll-success.svg"
          width={65}
          height={65}
          className="object-contain md:w-[65px] w-[40px] md:h-[65px] h-[40px]"
          alt="Success Icon"
        />
        <p className="max-w-[240px] mx-auto text-lg font-semibold text-center leading-[120%]">
          Your response has been recorded
        </p>
      </div>
      <hr className="my-5" />
    </>
  );
};
