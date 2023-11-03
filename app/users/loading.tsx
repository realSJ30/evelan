const Loading = () => {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto text-black flex flex-col">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-2">
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border border-neutral-100 border-solid shadow-md h-[340px] rounded-lg flex flex-col relative overflow-hidden hover:shadow-green-900 hover:border-0 transition"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
