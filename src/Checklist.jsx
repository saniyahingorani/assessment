import React, { useState } from 'react';

const Checklist = () => {
  const [selected, setOptions] = useState([]);

  const handleChange = (option) => {
    const isChecked  = selected.find(item => item.label === option.label);

    if (isChecked ) {
      setOptions(selected.filter(item => item.label !== option.label));
    } else {
      setOptions([...selected, option]);
    }
  };

  return (
    <div>
      <h2>Select Options</h2>
      <Checkbox label="Are You Citizen?" isChecked ={selected.find(option => option.label === "Are You Citizen?")} onChange={handleChange} />
      <Checkbox label="Are You Over 21?" isChecked ={selected.find(option => option.label === "Are You Over 21?")} onChange={handleChange} />
      <div>
        <ul>
          {selected.map((option, index) => (
            <li key={index}>{option.label} : {option.isChecked  ? 'Yes' : 'No'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Checkbox = ({ label, isChecked , onChange }) => {
  const handleChange = () => {
    onChange({ label, isChecked : !isChecked  });
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked  ? isChecked .isChecked  : false} onChange={handleChange}/>
      <label>{label}</label>
    </div>
  );
};

export default Checklist;
