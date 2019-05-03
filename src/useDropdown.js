import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace('', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>all</option>
        {options.map(a => (
          <option key={a} value={a}>
            {a}
          </option>
          // keys must be unique for each option
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
