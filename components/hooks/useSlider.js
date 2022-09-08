import { useRef, useEffect, useContext, useState } from "react";
import WidthContext from "../store/width-context";

const UseSlider = () => {
  const gapRef = useRef(15);
  const sliderContainer = useRef(null);
  const slider = useRef(null);
  const switchDebounceTimeoutRef = useRef(null);
  const count = useRef(1);
  const scrollLeft = useRef(null);
  const sliderChildrenExcessCount = useRef(null);
  const rightCountEnd = useRef(false);
  const leftCountEnd = useRef(true);
  const { docWidth } = useContext(WidthContext);
  const [hasReachedRightEnd, setHasReachedRightEnd] = useState(false);
  const [hasReachedLeftEnd, setHasReachedLeftEnd] = useState(true);

  useEffect(() => {
    let visibleElNum;

    if (docWidth > 666) {
      gapRef.current = 15;
    } else if (docWidth > 530 && docWidth < 666) {
      gapRef.current = 20;
    } else if (docWidth < 530) {
      gapRef.current = 10;
    }

    if (docWidth > 867) {
      visibleElNum = 4;
    } else if (docWidth > 666) {
      visibleElNum = 3;
    } else if (docWidth < 666) {
      visibleElNum = 2;
    }

    sliderChildrenExcessCount.current =
      slider.current.children.length - visibleElNum;

    if (sliderChildrenExcessCount.current === 0) {
      setHasReachedRightEnd(true);
    }

    scrollLeft.current = sliderContainer.current.scrollLeft;

    clearInterval(switchDebounceTimeoutRef.current);

    switchDebounceTimeoutRef.current = setInterval(() => {
      switchImage();
    }, 20000);

    const resizeHandler = () => {
      clearInterval(switchDebounceTimeoutRef.current);
      leftDirectionHandler();
    };

    // window.addEventListener("resize", resetSlider);

    return () => {
      clearInterval(switchDebounceTimeoutRef.current);
      // window.removeEventListener("resize", resetSlider);
    };
  }, [docWidth]);

  const switchImage = () => {
    if (rightCountEnd.current) {
      leftDirectionHandler();
    } else if (leftCountEnd.current) {
      rightDirectionHandler();
    }
  };

  const leftDirectionHandler = (event) => {
    if (count.current <= 1) {
      return;
    }

    if (event) {
      clearInterval(switchDebounceTimeoutRef.current);

      switchDebounceTimeoutRef.current = setInterval(() => {
        switchImage();
      }, 20000);
    }

    count.current--;
    const itemWidth = slider.current.firstElementChild.clientWidth;
    sliderContainer.current.scrollTo({
      left:
        itemWidth * count.current +
        gapRef.current * count.current -
        (itemWidth + gapRef.current),
      behavior: "smooth",
    });
    scrollLeft.current -= itemWidth;

    if (hasReachedRightEnd) {
      setHasReachedRightEnd(false);
    }

    if (count.current <= 1) {
      setHasReachedRightEnd(false);
      setHasReachedLeftEnd(true);
      rightCountEnd.current = false;
      leftCountEnd.current = true;
    }
  };

  const rightDirectionHandler = (event) => {
    if (count.current > sliderChildrenExcessCount.current) {
      return;
    }

    if (event) {
      clearInterval(switchDebounceTimeoutRef.current);

      switchDebounceTimeoutRef.current = setInterval(() => {
        switchImage();
      }, 20000);
    }

    const itemWidth = slider.current.firstElementChild.clientWidth;
    sliderContainer.current.scrollTo({
      left: itemWidth * count.current + gapRef.current * count.current,
      behavior: "smooth",
    });

    scrollLeft.current += itemWidth;
    count.current++;

    if (hasReachedLeftEnd) {
      setHasReachedLeftEnd(false);
    }

    if (count.current > sliderChildrenExcessCount.current) {
      setHasReachedRightEnd(true);
      setHasReachedLeftEnd(false);
      rightCountEnd.current = true;
      leftCountEnd.current = false;
    }
  };

  const resetSlider = () => {
    clearInterval(switchDebounceTimeoutRef.current);

    count.current = 1;
    sliderContainer.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
    scrollLeft.current = 0;

    setHasReachedLeftEnd(true);
    leftCountEnd.current = true;
    rightCountEnd.current = false;
    setHasReachedRightEnd(false);
  };

  return {
    rightCountEnd: hasReachedRightEnd,
    leftCountEnd: hasReachedLeftEnd,
    sliderContainerRef: sliderContainer,
    sliderRef: slider,
    leftDirectionHandler,
    rightDirectionHandler,
  };
};

export default UseSlider;
