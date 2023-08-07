import {useRef, useEffect} from "react";
import Typed from "typed.js";

export const useTyped = (strings= ["Add a strings array", "in this hook."], options) => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings,
      typeSpeed: 50,
      ...options,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return ref;
};
