function Btn({ color, name, outline }) {
  return (
    <button
      className={`${
        color
          ? "text-white bg-main hover:bg-slate-100 hover:text-black"
          : "text-main bg-white hover:bg-slate-100"
      }  w-full lg:w-auto py-4 rounded-lg transition-colors delay-75
      lg:px-7 ${ outline?"border-2 border-gray-500":""}`}
    >
      <p className={` text-xl lg:text-base font-medium`}>{name}</p>
    </button>
  );
}

export default Btn;
