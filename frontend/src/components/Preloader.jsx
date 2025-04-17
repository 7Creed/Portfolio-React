import { useEffect, useState } from "react";

const texts = ["Please wait...", "Setting up...", "Done!!!"];

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  // const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onFinish]);

  useEffect(() => {
    if (isFinished) return;
    // let interval;
    // let charIndex = 0;

    let currentText = texts[msgIndex];
    // let charIndex = 0;
    let typingSpeed = isDeleting ? 20 : 50;

    // const typeText = () => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          // console.log("here");
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // clearInterval(interval);
          // setTimeout(() => setTyping(false), 1000);
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // clearInterval(interval);
          // setTyping(true);
          if (msgIndex < texts.length - 1) {
            setIsDeleting(false);
            setMsgIndex((prev) => (prev + 1) % texts.length);
          } else {
            setIsFinished(true);
          }
        }
      }

      // return () => {
      //   second;
      // };
    }, typingSpeed);
    // };

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, msgIndex, isFinished]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-lg font-mono">
          &lt;loading&gt; {displayedText} &lt;/loading&gt;
        </div>
        <div className="text-white text-lg font-bold">
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
