"use client";
import "./style.scss";
import Logo from "../../../../public/imges/image 635.png";
import Image from "next/image";
import Container from "../Container/Container";
import { Links, navbar } from "@/app/utils/data";
import { useState } from "react";

export default function Footer() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <footer className="footer">
      <div className="footer__test">
        <div className="footer__logo-box">
          <Image src={Logo} alt="" width={138} height={54} />
        </div>
        <div className="footer__flex">
          <div className="footer__box">
            <ul className="footer__ul">
              {navbar.map((item, index) => (
                <li key={index} className="footer__list">
                  <a
                    className={`footer__link ${
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

            <div className="footer__bottom">
              <a className="footer__text" href="">
                О нас
              </a>
              <div className="footer__div">
                {Links.map((link, index) => (
                  <a className="footer__text" key={index} href={link.href}>
                    {link.title}
                  </a>
                ))}
              </div>
              <a className="footer__writing" href="">
                Публичная оферта
              </a>
            </div>
          </div>

          <div className="footer__right-main">
            <div className="footer__right">
              <div className="footer__right-box">
                <a className="footer__right-email" href="">
                  info@hmadad.com
                </a>
                <div className="footer__right-div">
                  <a className="footer__right-number" href="">
                    +(90) 123-45-67
                  </a>
                  <a className="footer__right-number" href="">
                    +(71) 263 80 34
                  </a>
                </div>
              </div>

              <div className="footer__right-bottom">
                <div className="footer__right-content">
                  FAX:{" "}
                  <a className="footer__right-link" href="">
                    +(71) 263 80 34
                  </a>
                </div>
                <span className="footer__right-text">
                  Понедельник - Пятница 9:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
