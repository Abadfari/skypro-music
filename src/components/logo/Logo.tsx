import Image from "next/image";

const Logo = ({ width, height }) => {
  return (
    <Image
      className="logo__image"
      src="/img/logo.png"
      alt="логотип Skypro Music"
      width={width}
      height={height}
    />
  );
};

export default Logo;
