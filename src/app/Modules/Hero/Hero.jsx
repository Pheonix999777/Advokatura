import Container from "@/app/Components/Container/Container";
import "./style.scss";
import ArrowRight from "../../../../public/icons/ArrowRight.svg";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__main">
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
        </div>
      </Container>
    </section>
  );
}
