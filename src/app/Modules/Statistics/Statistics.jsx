"use client";
import { useState } from "react";
import "./style.scss";
import Container from "@/app/Components/Container/Container";
import { county, Info, States } from "@/app/utils/data";

export default function Statistics() {
  const [showAdditionalSvg, setShowAdditionalSvg] = useState();

  const handleClick = (id) => {
    setShowAdditionalSvg(id);
  };

  return (
    <section className="statistics">
      <Container>
        <div class="statistics__map">
          <div className="statistics__map-box">
            <span className="title">Статистика</span>

            <svg className="statistics__svg" viewBox="0 0 1278 848">
              {States.map((item, index) => (
                <path
                  key={index}
                  class={item.class}
                  fill={showAdditionalSvg === item.id ? "#51801B" : "#2C3639"}
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={item.d}
                  onClick={() => handleClick(item.id)}
                ></path>
              ))}
            </svg>
          </div>

          {county.map((item, index) => (
            <div
              key={index}
              className={showAdditionalSvg === item.id ? item.class : ""}
              style={{
                display: showAdditionalSvg === item.id ? "block" : "none",
              }}
            >
              <span className="states__title">{item.name}</span>
              <p className="states__text">Advokaturasi</p>
            </div>
          ))}

          <div className="statistics__wrapper">
            <h3 className="statistics__title">
              Ўзбекистон Республикаси судлари интерактив харитаси
            </h3>
            <div className="statistics__wrapper-box">
              {Info.map((info, i) => (
                <div key={i} className="statistics__list">
                  <span className="statistics__wrapper-title">
                    {info.title}
                  </span>
                  <p className="statistics__wrapper-text">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
