import React from 'react';
import './Options.scss';

const Options = ({
  options,
  optionTitleAs,
  name,
  id,
  initOption,
  className,
  onChange,
}) => {
  const optionsList = options ? options : [];

  return (
    <select name={name} id={id} className={className} onChange={onChange}>
      {initOption && <option>{initOption}</option>}

      {optionsList.map((opt) => (
        <option value={opt.id} key={opt.id}>
          {opt[optionTitleAs]}
        </option>
      ))}
    </select>
  );
};

export default Options;
