"use client";

import { useEffect, useMemo, useState } from "react";

const Page: React.FC = () => {
  const shapes = useMemo(
    () => [
      {
        title: "Square",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/768px-Square_-_black_simple.svg.png",
        keyTrigger: "a",
      },
      {
        title: "Circle",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Circle_-_black_simple_fullpage.svg/768px-Circle_-_black_simple_fullpage.svg.png",
        keyTrigger: "b",
      },
      {
        title: "Triangle",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/800px-Regular_triangle.svg.png",
        keyTrigger: "c",
      },
      {
        title: "Trapezoid",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Trapezoid.svg/1200px-Trapezoid.svg.png",
        keyTrigger: "d",
      },
    ],
    []
  );

  const [currentShape, setCurrentShape] = useState({
    title: "",
    imageUrl: "",
    keyTrigger: "",
  });
  const [previousShape, setPreviousShape] = useState({
    title: "",
    imageUrl: "",
    keyTrigger: "",
  });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const generateRandomShape = () => {
      let newShape;
      do {
        newShape = shapes[Math.floor(Math.random() * shapes.length)];
      } while (previousShape && newShape.title === previousShape.title);
      setCurrentShape(newShape);
    };

    generateRandomShape();
  }, [previousShape]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const shape = shapes.find((shape) => shape.keyTrigger === event.key);
      if (shape && shape.title === currentShape.title) {
        setScore(score + 1);
        // setPreviousShape(currentShape);
      }
      // Move to the next shape regardless of whether the choice was correct
      setPreviousShape((prev) => ({ ...prev })); // Trigger useEffect to generate new shape
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentShape, score, shapes]);

  // const [currentShape, setCurrentShape] = useState({ title: "", imageUrl: "" });
  // const [previousShape, setPreviousShape] = useState({
  //   title: "",
  //   imageUrl: "",
  // });
  // const [score, setScore] = useState(0);

  // useEffect(() => {
  //   // Function to generate a new random shape that is not the same as the previous shape
  //   const generateRandomShape = () => {
  //     let newShape;
  //     do {
  //       newShape = shapes[Math.floor(Math.random() * shapes.length)];
  //     } while (previousShape && newShape.title === previousShape.title);
  //     setCurrentShape(newShape);
  //   };

  //   generateRandomShape();
  // }, [previousShape]); // This effect runs whenever previousShape changes

  const handleShapeClick = (shapeName: string) => {
    if (shapeName === currentShape.title) {
      setScore(score + 1); // Increment score if the correct shape is selected
    }
    setPreviousShape(currentShape); // Set the current shape as the previous shape for the next round
  };
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {/* randomly select a shape */}
              {currentShape.title}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Select the right answer from below. Score: {score}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {shapes.map((shape) => (
              <div
                key={shape.title}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                onClick={() => handleShapeClick(shape.title)}
              >
                <img
                  src={shape.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
