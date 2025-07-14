import Switcher from "@/components/switcher/Switcher";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_APP_NAME);
  return (
    <div>
      <Switcher />
    </div>
  );
};

export default Home;
