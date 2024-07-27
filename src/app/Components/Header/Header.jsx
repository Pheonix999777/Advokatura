"use client";
import Container from "../Container/Container";
import "./style.scss";
import { navbar } from "@/app/utils/data";
import Colors from "../../../../public/icons/colors.svg";
import Color from "../../../../public/icons/color.svg";
import { FiPhoneCall } from "react-icons/fi";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setActive(index);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="header">
      <Container>
        <div className="header__box">
          <a className="header__logo" href="/">
            Get it
          </a>
          <button className="header__menu" onClick={handleToggle}>
            <IoMdMenu />
          </button>
          <nav className={`header__nav ${open ? "active" : ""}`}>
            <button className="header__close" onClick={handleToggle}>
              <IoMdClose />
            </button>
            <ul className="header__ul">
              {navbar.map((item, index) => (
                <li key={index} className="header__list">
                  <a
                    className={`header__link ${
                      active === index ? "active" : ""
                    }`}
                    href={item.href}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__right">
            <a className="header__letter" href="">
              A
            </a>
            <span style={{ marginRight: "5px" }}>
              <Colors />
            </span>
            <span style={{ marginRight: "5px" }}>
              <Color />
            </span>
            <a className="header__action" href="">
              Telegram
            </a>
            <a className="header__action" href="">
              Instagram
            </a>
            <a className="header__action" href="">
              Facebook
            </a>
            <div className="header__link-box">
              <a className="header__phone" href="">
                <FiPhoneCall />
                +(90) 123-45-67
              </a>
              <a className="header__email" href="">
                info@hmadad.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
