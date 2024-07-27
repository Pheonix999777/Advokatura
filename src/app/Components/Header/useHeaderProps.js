import { useState } from "react";

export default function useHeaderProps() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setActive(index);
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  return { handleClick, handleToggle, active, open };
}
