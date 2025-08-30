import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FixTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // ไม่ render UI อะไร
};

export default FixTop;
