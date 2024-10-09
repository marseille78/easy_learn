import { FC } from "react";
import { ISelectOption } from "../../types";
import { Root } from "./SelectLang.styled";

interface SelectLangProps {
  value: string;
  options: Array<ISelectOption>;
}

const SelectLang: FC<SelectLangProps> = ({ value, options }) => {
  return <Root>SelectLang</Root>;
};

export default SelectLang;
