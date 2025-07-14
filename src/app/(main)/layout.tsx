const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        magni aliquid quisquam, libero quasi facere.
      </p>
      {children}
    </div>
  );
};

export default MainLayout;
