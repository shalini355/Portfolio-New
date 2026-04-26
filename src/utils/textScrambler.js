import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#_';

export function useScramble(text, trigger = true) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, ' '));
  
  useEffect(() => {
    if (!trigger) return;
    
    let iterations = 0;
    const maxIterations = 20;
    
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        text.split('').map((letter, index) => {
          if (index < iterations / (maxIterations / text.length)) return text[index];
          if (letter === ' ') return ' ';
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iterations += 1;
    }, 40);
    
    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
}
