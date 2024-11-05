import React, { useId } from "react";

const Form: React.FC = () => {
  const id = useId();
  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id={id} />
      </div>
    </div>
  );
};

export default Form;
