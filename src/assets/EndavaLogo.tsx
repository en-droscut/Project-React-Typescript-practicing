import endavaLogo from "./endava-logo.png";

type LogoProps = {
  size?: number;
};

const EndavaLogo: React.FC<LogoProps> = ({ size = 13 }) => {
  return <img src={endavaLogo} width={size} alt="Endava logo" />;
};

export default EndavaLogo;
