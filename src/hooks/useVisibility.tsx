/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/
'use client';

import { useEffect, useRef } from 'react';
import useStateMounted from './useStateMounted';

function useVisibility<T>(options: IntersectionObserverInit): [React.RefObject<T>, boolean, React.Dispatch<React.SetStateAction<boolean>>] {

  const [isVisible, setVisible] = useStateMounted<boolean>(false);
  const element = useRef<any>(null)

  const callHandler: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setVisible(true);
      observer.disconnect();
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callHandler, options);
    if (element.current) {
      observer.observe(element.current);
    }
    return () => {
      if (element.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(element.current);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element, options]);

  return [element, isVisible, setVisible];
}

export default useVisibility;