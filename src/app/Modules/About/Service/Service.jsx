"use client";
import { useState } from "react";
import "./style.scss";
import { data } from "@/app/utils/data";

export default function Service() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="service" id="service">
      <span className="title">Наши услуги</span>
      <ul className="service__ul">
        {data.map((item, index) => (
          <li key={index} className="service__list">
            <item.Icon className="service__icon" />
            <h3 className="service__title">{item.title}</h3>
            <p className="service__text">{item.text}</p>
          </li>
        ))}
      </ul>

      <div className="service__tabs-box">
        <button
          className={`service__tabs ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Реквизиты для уплаты госпошлин
        </button>
        <button
          className={`service__tabs ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Образцы судебных документов
        </button>
      </div>
      <div className="service__tabs-box">
        <button
          className={`service__tabs ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => handleTabClick("tab3")}
        >
          График приёма граждан
        </button>
        <button
          className={`service__tabs ${activeTab === "tab4" ? "active" : ""}`}
          onClick={() => handleTabClick("tab4")}
        >
          Правовое просвещение
        </button>
      </div>

      <div className="service__info">
        <div className="service__info-box">
          <p className="service__info-text">
            A good plan violently executed now is better than a perfect plan
            executed next week. A good plan violently executed now is better
            than a perfect plan executed next week.
          </p>
          <div className="service__link-box">
            <a className="service__link" href="">
              Жиноят ишлари бўйича давлат божи реквизитлари
            </a>
            <a className="service__link" href="">
              Фуқаролик ишлари бўйича давлат божи реквизитлари
            </a>
            <a className="service__link" href="">
              Жиноят ишлари бўйича давлат божи реквизитлари
            </a>
          </div>
        </div>
        <div className="service__info-right">
          <a className="service__link" href="">
            Жиноят ишлари бўйича давлат божи реквизитлари
          </a>
          <a className="service__link" href="">
            Жиноят ишлари бўйича давлат божи реквизитлари
          </a>
          <a className="service__link" href="">
            Жиноят ишлари бўйича давлат божи реквизитлари
          </a>
          <a className="service__link" href="">
            Жиноят ишлари бўйича давлат божи реквизитлари
          </a>
        </div>
      </div>
    </section>
  );
}
