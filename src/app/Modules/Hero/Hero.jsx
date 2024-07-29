"use client";
import Container from "@/app/Components/Container/Container";
import "./style.scss";
import ArrowRight from "../../../../public/icons/ArrowRight.svg";
import { FiPhoneCall } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <section className="hero" id="home">
      <Container>
        <div
          className={`hero__modal-div ${show ? "active" : ""}`}
          onClick={() => setShow(false)}
        >
          <form
            className={`hero__modal ${show ? "active" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hero__modal-box">
              <span className="hero__modal-title">
                Бесплатная <br /> Консультация
              </span>
              <p className="hero__modal-text">Номер телефона</p>
              <input
                className="hero__inp"
                type="number"
                name="number"
                placeholder="+998"
              />
              <p className="modal__contact-info">Или свяжитес с нами</p>
              <a className="modal__contact-link" href="">
                +(90) 123-45-67
              </a>
              <a className="modal__contact-link" href="">
                info@hmadad.com
              </a>
            </div>
            <button type="submit" className="modal__contact-btn">
              Отправить
            </button>
          </form>
        </div>

        <button className="hero__btn" onClick={() => setShow(true)}>
          <FiPhoneCall />
        </button>

        <h1 className="hero__titile">
          Если вы не пользуетесь своими правами, то вашими правами будут
          пользоваться <span style={{ color: "#026D2A" }}>другие</span>
        </h1>
        <div className="hero__flex">
          <div className="hero__box">
            <span className="hero__text">Для юридических лиц</span>
            <a className="hero__link" href="">
              Подробнее
              <span style={{ marginLeft: "10px" }}>
                <ArrowRight />
              </span>
            </a>
          </div>
          <div className="hero__box">
            <span className="hero__text">Для юридических лиц</span>
            <a className="hero__link" href="">
              Подробнее
              <span style={{ marginLeft: "10px" }}>
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
