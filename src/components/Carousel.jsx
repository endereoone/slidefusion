import React, { useEffect, useRef, useState } from 'react';
import SliderItem from './SliderItem';

const Carousel = ({ images }) => {
  const [items, setItems] = useState(images);
  const [direction, setDirection] = useState('');
  const runningTimeRef = useRef(null);
  const autoSlideRef = useRef();
  console.log("🕵️‍♂️ > Carousel > autoSlideRef:", autoSlideRef.current);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const resetAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = 'none';
      void runningTimeRef.current.offsetHeight; // force reflow
      runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  const showSlider = (type) => {
    let newItems = [...items];

    if (type === 'next') {
      const first = newItems.shift();
      newItems.push(first);
      setDirection('next');
    } else {
      const last = newItems.pop();
      newItems.unshift(last);
      setDirection('prev');
    }

    setItems(newItems);
    resetAnimation();

    clearTimeout(autoSlideRef.current);
    autoSlideRef.current = setTimeout(() => showSlider('next'), timeAutoNext);
  };

  useEffect(() => {
    resetAnimation();
    autoSlideRef.current = setTimeout(() => showSlider('next'), timeAutoNext);

    return () => clearTimeout(autoSlideRef.current);
  }, [items]);

  return (
    <div className={`carousel ${direction}`}>
      <div className="list">
        {items.map((img, index) => (
          <SliderItem key={index} index={index} img={img} />
        ))}
      </div>

      <div className="arrows">
        <button className="prev" onClick={() => showSlider('prev')}>{'<'}</button>
        <button className="next" onClick={() => showSlider('next')}>{'>'}</button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default Carousel;
