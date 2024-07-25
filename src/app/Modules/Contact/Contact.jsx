import Container from "@/app/Components/Container/Container";
import "./style.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Logos } from "@/app/utils/data";

export default function Contact() {
  return (
    <section className="contact">
      <Container>
        <span className="title">Полезные ссылки</span>
      </Container>
      <div className="contact__flex">
        <Marquee pauseOnClick>
          {Logos.map((item, index) => (
            <div key={index} className="contact__wrapper">
              <Image src={item.logo} alt="" />
              <h4 className="contact__title">{item.title}</h4>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
