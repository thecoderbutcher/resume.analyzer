const InputForm = ({ error, errormessage, children, Icon }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`flex items-center w-full bg-gray-700 px-2 py-1 rounded-md ${error ? "border border-red-600/50" : ""}`}
      >
        {children}
        <Icon className={`${error ? "text-red-600/70" : "text-gray-400"}`} />
      </div>
      {error && <p className="text-red-500 text-xs">{errormessage}</p>}
    </div>
  );
};

export default InputForm;
