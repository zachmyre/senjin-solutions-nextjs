import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { GiBrainTentacle, GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdPhone, MdOutlineEmail } from "react-icons/md";

import styles from "../../styles/Home.module.css";

import GradientButton from "../shared/GradientButton";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Showcase",
    path: "/showcase",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const socials = {
  linkedin: "https://www.linkedin.com/tristen.putnam",
  facebook: "https://www.facebook.com/senjinsolutions",
  twitter: "https://www.twitter.com/senjinsolutions",
  phonenumber: "19721231234",
  displayedPhonenumber: "972-123-1234",
  email: "support@senjinsolutions.com",
};

export const Header = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white w-screen flex">
      <div className="hidden lg:w-1/2 md:flex items-center justify-center">
        <div className="w-1/4 flex items-center justify-center">
          <Link href={"/"}>
            <a>
              <GiBrainTentacle className="w-24 h-24 text-primary p-3 transition ease-in-out delay-150 hover:-translate-y-2 hover:rotate-12 duration-300" />
            </a>
          </Link>
        </div>
        <div className="w-3/4 text-left flex items-center justify-start space-x-12">
          {routes.map((route, i) => (
            <li key={i} className="text-black list-none text-lg font-bold">
              <Link href={route.path}>
                <a
                  className={
                    router.pathname == route.path
                      ? styles.activenavlink
                      : styles.inactivenavlink
                  }
                >
                  {route.name}
                </a>
              </Link>
            </li>
          ))}
        </div>
      </div>

      <div className="hidden lg:w-1/2 md:flex items-center justify-around space-x-12">
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <div className="flex space-x-4">
            <a
              className="flex items-center space-x-4 hover:text-cyan-300"
              href={"tel:+" + socials.phonenumber}
            >
              <MdPhone className="w-6 h-6 text-primary" />
              <h1 className="font-bold">{socials.displayedPhonenumber}</h1>
            </a>
            <a
              className="flex items-center space-x-4 hover:text-cyan-300"
              href={"mailto:" + socials.email}
            >
              <MdOutlineEmail className="w-6 h-6 text-primary" />
              <h1 className="font-bold">{socials.email}</h1>
            </a>
          </div>
          <a href={socials.facebook} target={"_blank"} rel={"noreferrer"}>
            <FaFacebook className="text-primary h-8 w-6 hover:text-cyan-300" />
          </a>
          <a href={socials.twitter} target={"_blank"} rel={"noreferrer"}>
            <FaTwitter className="text-primary h-8 w-6 hover:text-cyan-300" />
          </a>
          <a href={socials.linkedin} target={"_blank"} rel={"noreferrer"}>
            <FaLinkedin className="text-primary h-8 w-6 hover:text-cyan-300" />
          </a>
        </div>
        <div>
          <GradientButton title="Get Solutions Now" />
        </div>
      </div>
                  {/* Mobile */}
      <div className="md:hidden w-screen">
      <div className="flex items-center justify-between px-6">
        <div>
          <Link href={"/"}>
            <a>
              <GiBrainTentacle className="w-20 h-20 text-primary p-3 transition ease-in-out delay-150 hover:-translate-y-2 hover:rotate-12 duration-300" />
            </a>
          </Link>
          </div>
          <div>
          <a>
            <GiHamburgerMenu className="w-20 h-20 text-primary p-3 hover:text-black hover:cursor-pointer" />
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
