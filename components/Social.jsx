
import  Link  from "next/link";
// Icon
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const socials = [
  {
    icon: <GitHubIcon />,
    path: "/",
  },
  {
    icon: <LinkedInIcon />,
    path: "/",
  },
  {
    icon: <YouTubeIcon />,
    path: "/",
  },
  {
    icon: <InstagramIcon />,
    path: "/",
  },
  {
    icon: <FacebookIcon />,
    path: "/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => ( 
         <Link className={iconStyles} key={i} href={item.path}> {item.icon}</Link>
      ))}
    </div>
  );
};

export default Social;
