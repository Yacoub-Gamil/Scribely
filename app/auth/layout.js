function layout({ children }) {
  return (
    <div className="h-full w-full bg-white ">
      <div className="max-w-[90%] mx-auto">{children}</div>
    </div>
  );
}

export default layout;
