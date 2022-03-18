import { createRef, RefObject, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

type UseVisibility = (
  offset: number,
  throttleMilliseconds?: number
) => [boolean, RefObject<HTMLDivElement>, number];

const useVisibility: UseVisibility = (
  offset = 0,
  throttleMilliseconds = 200
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bottom, setBottom] = useState(0);
  const currentElement = createRef<HTMLDivElement>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const rect = currentElement.current.getBoundingClientRect();
    setIsVisible(
      rect.bottom + offset >= 0 && rect.top - offset <= window.innerHeight
    );
    if (rect.bottom + offset >= 0 && rect.top - offset <= window.innerHeight) {
      setBottom(rect.bottom);
    }
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentElement, bottom];
};

export default useVisibility;
