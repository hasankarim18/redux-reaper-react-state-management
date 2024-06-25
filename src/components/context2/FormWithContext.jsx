import { createContext } from "react";
import InputForm from "./InputForm";
import OutPut from "./OutPut";

const FormExampleContext = createContext();

const FormWithContext = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 p-4 rounded-lg">
        <InputForm />
      </div>
      <div className="border-2 p-4 rounded-lg">
        <OutPut />
      </div>
    </div>
  );
};

export default FormWithContext;
