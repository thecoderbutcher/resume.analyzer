import { useRef, useState } from "react";

const InputDate = ({ placeholder, name, register, onChange }) => {
  const ref = useRef(null);
  const [value, setValue] = useState();
  const handleFocus = () => ref.current?.showPicker?.();

  return (
    <div className="relative w-full">
      <input
        {...register(name)}
        ref={ref}
        type="date"
        onFocus={handleFocus}
        onChange={(e) => {
          onChange(e.target.value);
          setValue(e.target.value);
        }}
        className={`w-full ${!value ? "text-transparent" : ""} bg-transparent focus:outline-none focus:text-transparent focus:ring-blue-500 [&::-webkit-calendar-picker-indicator]:opacity-0`}
      />
      {!value && (
        <span className="absolute left-0.5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          {placeholder}
        </span>
      )}
    </div>
  );
};

export default InputDate;
