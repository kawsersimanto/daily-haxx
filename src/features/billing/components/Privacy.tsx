import Link from "next/link";

export const Privacy = () => {
  return (
    <div className="text-xs text-muted-foreground my-6 prose">
      <p>
        By providing your card information, you allow Haxx Inc. to charge your
        card for future payments in accordance with their terms.
      </p>
      <p>
        You can review important information from Haxx Inc. on their{" "}
        <Link href="#" className="text-primary underline hover:text-primary/80">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-primary underline hover:text-primary/80">
          Privacy Policy
        </Link>{" "}
        pages.
      </p>
    </div>
  );
};
