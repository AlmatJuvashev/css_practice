import { createContext, useContext, useState } from "react";
import { twJoin } from "tailwind-merge";

const RadioButtonsContext = createContext();

// Parent Component
function RadioButtons({ children }) {
  const [checkedValue, setCheckedValue] = useState();
  function handleCheck(event) {
    setCheckedValue(event.target.value);
  }

  return (
    <RadioButtonsContext.Provider value={{ checkedValue, handleCheck }}>
      {children}
    </RadioButtonsContext.Provider>
  );
}

// Child Components

function RadioButton({ id, name, value, children, ...props }) {
  const { checkedValue, handleCheck } = useContext(RadioButtonsContext);

  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checkedValue === value}
        className="hidden"
        onChange={handleCheck}
        {...props}
      />
      <label
        htmlFor={id}
        className="group cursor-pointer relative pl-3 peer-checked:text-green-700"
      >
        {/* Radio button */}
        <span
          className={twJoin([
            "absolute -top-0.5 -left-5 inline-block h-6 w-6 border-4 border-green-700 rounded-full",
            "after:h-2 after:w-2 after:block after:absolute after:top-1/2 after:left-1/2 after:bg-green-700 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full",
            checkedValue === value ? "after:opacity-1" : "after:opacity-0",
            "transition-all",
          ])}
        ></span>
        {children}
      </label>
    </div>
  );
}

RadioButtons.RadioButton = RadioButton;

export default RadioButtons;
