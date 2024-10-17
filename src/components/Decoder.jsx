import { useState, useEffect } from 'react';
import '../styles/dta.css';

const DecoderTextAnimation = ({ text, duration = 2 }) => {
  const [decodedText, setDecodedText] = useState('');
  const [blinkCount, setBlinkCount] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDecodedText((prevText) => {
        if (prevText === text) {
          setIsBlinking(true); // Start the blinking effect when the full text is displayed
          return prevText;
        } else {
          const nextChar = text[prevText.length];
          return prevText + (nextChar ? nextChar : '');
        }
      });
    }, (duration * 1000) / text.length);

    return () => clearInterval(intervalId);
  }, [text, duration]);

  useEffect(() => {
    if (isBlinking) {
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev); // Toggle the cursor visibility

        setBlinkCount((prevCount) => {
          if (prevCount >= 6) { // 3 full blinks (show + hide)
            setIsBlinking(false);
            setDecodedText(''); // Reset the text
            setBlinkCount(0); // Reset the blink count
          }
          return prevCount + 1;
        });
      }, 500); // Blink duration

      return () => clearInterval(blinkInterval);
    }
  }, [isBlinking]);

  return (
    <div className="decoder-text">
      {decodedText}
      <span className={`cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
    </div>
  );
};

export default DecoderTextAnimation;
