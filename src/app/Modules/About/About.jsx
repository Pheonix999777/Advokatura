"use client";
import Container from "@/app/Components/Container/Container";
import "./style.scss";
import ArrowRightLonger from "../../../../public/icons/ArrowRightLonger.svg";
import Img from "../../../../public/imges/Rectangle 24379.png";
import Image from "next/image";
import Service from "./Service/Service";
import { useState } from "react";

export default function About() {
  const [progress, setProgress] = useState(50);

  const segmentWidth = 100 / 3;

  const getSegmentWidth = (index) => {
    const segmentStart = index * segmentWidth;
    const segmentEnd = (index + 1) * segmentWidth;

    if (progress < segmentStart) {
      return 0;
    } else if (progress < segmentEnd) {
      return ((progress - segmentStart) / segmentWidth) * 100;
    } else {
      return 100;
    }
  };

  return (
    <section className="about" id="about">
      <Container>
        <div className="about__main">
          <span className="title">Новости</span>
          <span className="title">Полезные</span>
        </div>
        <div className="about__flex">
          <div className="about__wrapper">
            <div className="about__box">
              <div className="about__div">
                <span className="about__text">Полезно знать</span>
                <span className="about__text">17:34</span>
              </div>
              <h2 className="about__box-title">
                C 13 марта 2023 г. по указу Президента Узбекистан от №134 Налог
                на расстаможку понижается до 12%
              </h2>

              <div className="about__progress-container">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="about__progress">
                    <div className="about__progress-bg"></div>
                    <div
                      className="about__progress-fill"
                      style={{
                        width: `${getSegmentWidth(index)}%`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              <a className="about__link-event" href="">
                Все событии
              </a>
            </div>
            <div className="about__info">
              <p className="about__info-text">
                Информационное сообщение о гражданских делах, рассмотренных
                судами.
              </p>
            </div>
          </div>

          <div className="about__right">
            <span className="about__events">Событя дня</span>
            <div className="about__right-box">
              <h2 className="about__right-title">
                Информационное сообщение о гражданских делах, рассмотренных
                судами в I полугодии 2022 года
              </h2>
              <div>
                <p className="about__right-text">
                  В этом документе явно показано, сколько раз и как проводилась
                  процесс всего происходящего во время заседания суда
                </p>
                <ArrowRightLonger />
              </div>
            </div>

            <Image src={Img} alt="" width={809} height={499} />
          </div>
        </div>

        <Service />
      </Container>
    </section>
  );
}
