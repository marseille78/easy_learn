import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Logo, Root, Select, UserButton } from "./Header.styled";
import { ISelectOption } from "../../types";
import SelectLang from "../SelectLang/SelectLang";

const OptionsStudyLangs: Array<ISelectOption> = [
  {
    value: "lang_fr",
    label: "Французька",
  },
  {
    value: "lang_en",
    label: "Англійська",
  },
  {
    value: "lang_es",
    label: "Іспанська",
  },
];

const Header: FC = () => {
  return (
    <Root data-cmp="Header">
      <Logo href="/">
        <div>ELL</div>
        <div>
          <span>Easy</span>
          <span>Learn</span>
          <span>Language</span>
        </div>
      </Logo>
      <Select>
        <SelectLang value="fr" options={OptionsStudyLangs}/>
      </Select>
      <UserButton>
        <FaUserCircle />
      </UserButton>
    </Root>
  );
};

export default Header;
