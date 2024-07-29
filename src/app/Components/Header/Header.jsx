"use client";
import Container from "../Container/Container";
import "./style.scss";
import { navbar } from "@/app/utils/data";
import Colors from "../../../../public/icons/colors.svg";
import Color from "../../../../public/icons/color.svg";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import useHeaderProps from "./useHeaderProps";

export default function Header() {
  const { handleClick, handleToggle, active, open, menuBoxRef } =
    useHeaderProps();

  return (
    <header className="header">
      <Container>
        <div className="header__box">
          <a className="header__logo" href="/">
            Get it
          </a>
          <button className="header__menu" onClick={handleToggle}>
            {open ? <IoMdClose /> : <IoMdMenu />}
          </button>
          <div
            ref={menuBoxRef}
            className={`header__menu-box ${open ? "active" : ""}`}
          >
            <nav className="header__nav">
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
              <div className="header__right-icons">
                <a className="header__letter" href="">
                  A
                </a>
                <span style={{ marginRight: "5px" }}>
                  <Colors />
                </span>
                <span style={{ marginRight: "5px" }}>
                  <Color />
                </span>
              </div>

              <div className="header__action-box">
                <a className="header__action" href="">
                  Telegram
                </a>
                <a className="header__action" href="">
                  Instagram
                </a>
                <a className="header__action" href="">
                  Facebook
                </a>
              </div>

              <div className="header__link-box">
                <a className="header__phone" href="tel:+998901234567">
                  <FiPhoneCall />
                  +(90) 123-45-67
                </a>
                <a className="header__email" href="">
                  info@hmadad.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
