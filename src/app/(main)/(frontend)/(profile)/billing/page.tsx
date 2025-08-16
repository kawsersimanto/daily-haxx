import { AddPaymentMethod } from "@/features/billing";

const BillingPage = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="max-w-[570px] mx-auto">
          <AddPaymentMethod />
        </div>
      </div>
    </section>
  );
};

export default BillingPage;
