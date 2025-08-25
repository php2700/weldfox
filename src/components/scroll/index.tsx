import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScollTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location?.pathname]);
  return null;
};
