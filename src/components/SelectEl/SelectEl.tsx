import { FC } from "react";
import { ISelectOption } from "../../types";

interface SelectProps {
  name: string;
  options: Array<ISelectOption>;
}

const SelectEl: FC<SelectProps> = ({ name, options }) => {
  const listOptions = options.map(({ value, label }) => (
    <option value={value}>{label}</option>
  ));

  return (
    <select className="form-select" name={name}>
      {listOptions}
    </select>
  );
};

export default SelectEl;
