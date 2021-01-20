import { useState, useEffect } from 'react';

const InScroll = (ref) => {
  const [isInScroll, setIsInScroll] = useState(false);

  useEffect(() => {
    let checkScroll;
    if (ref.current) {
      const topPos = ref.current.getBoundingClientRect().y;
      checkScroll = () => {
        if (window.scrollY + window.innerHeight - 170 >= topPos) {
          setIsInScroll(true);
        } else setIsInScroll(false);
      };
      document.addEventListener('scroll', checkScroll);
    }
    return () => {
      document.removeEventListener('scroll', checkScroll);
    };
  }, [ref]);

  return isInScroll;
};

export default InScroll;
