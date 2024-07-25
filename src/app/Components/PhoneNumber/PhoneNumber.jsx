import "./style.scss";

export default function PhoneNumber({ number, href }) {
  return (
    <a className="number" href={href}>
      {number}
    </a>
  );
}
