import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const socials = [
  { icon: <FaGithub />, link: "https://github.com/FullStackSimonIO" },
  { icon: <FaLinkedinIn />, link: "" },
  { icon: <FaYoutube />, link: "" },
  { icon: <FaTwitter />, link: "" },
];

const Social = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
