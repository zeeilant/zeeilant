import { useEffect, useState } from 'react';
import '../styles/cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };

    setIsTouch(isTouchDevice());
    if (isTouchDevice()) return;

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.body.addEventListener('mouseover', onElementMouseOver);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseover', onElementMouseOver);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseDown = () => {
      document.documentElement.classList.add('cursor-clicked');
    };

    const onMouseUp = () => {
      document.documentElement.classList.remove('cursor-clicked');
    };

    const onElementMouseOver = (e) => {
      const target = e.target;
      const isClickable = (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.classList.contains('clickable') ||
        getComputedStyle(target).cursor === 'pointer'
      );
      
      setIsPointer(isClickable);
      
      if (isClickable) {
        document.documentElement.classList.add('cursor-hover');
      } else {
        document.documentElement.classList.remove('cursor-hover');
      }
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isPointer ? 'pointer' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`cursor-ring ${isVisible ? 'visible' : ''} ${isPointer ? 'pointer' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`cursor-highlight ${isVisible ? 'visible' : ''} ${isPointer ? 'pointer' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 