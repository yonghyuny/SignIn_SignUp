import { MESSAGE } from "../../styles/MESSAGE";
import Logo from "../atom/Logo";
import Title, { TitleProps } from "../atom/Title";

export type LogoTitleProps = {
  text: TitleProps;
};

const LogoTitle = ({ text }: LogoTitleProps) => {
  return (
    <>
      <Logo />
      <Title {...text} />
    </>
  );
};

export default LogoTitle;
