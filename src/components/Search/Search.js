import React from "react";
import './form.scss'

const Form = ({ onSubmit, onChange }) => {
  return (
    <div>
      <form className="search_form" onSubmit={onSubmit}>
        <input type="text" placeholder="search" onChange={onChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
