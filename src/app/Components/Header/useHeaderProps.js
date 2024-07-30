import { useEffect, useRef, useState } from "react";

export default function useHeaderProps() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const menuBoxRef = useRef(null);

  const handleClick = (index) => {
    setActive(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuBoxRef.current && !menuBoxRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuBoxRef]);

  return { handleClick, handleToggle, active, open, menuBoxRef };
}
