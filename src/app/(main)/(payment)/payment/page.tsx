import { AddPaymentMethod } from "@/features/payment";

const PaymentPage = () => {
  return (
    <section className="flex items-center justify-center min-h-dvh py-8">
      <div className="container">
        <AddPaymentMethod />
      </div>
    </section>
  );
};

export default PaymentPage;
