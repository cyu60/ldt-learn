"use client";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { useEffect, useMemo, useState } from "react";
import { Header } from "./header";

const LearnPage = () => {
  return (
    <div className="flex flex-row gap-12 px-6">
      <FeedWrapper>
        {" "}
        Feed
        <Header title="Feed header"></Header>
      </FeedWrapper>
      <StickyWrapper>Sticky</StickyWrapper>
    </div>
  );
};

const Page: React.FC = () => {
  const questions = useMemo(
    () => [
      {
        question: "What is a key element of the 'maker mindset'?",
        options: [
          "Competition with peers",
          "Teaching arts and crafts",
          "Learning and growth",
          "Prioritizing digital creation over physical creation",
        ],
        correctAnswer: "Learning and growth",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question:
          "What is a significant benefit of integrating making into education?",
        options: [
          "Standardization of educational content",
          "Democratization of invention and learning",
          "Increased emphasis on teaching skills",
          "Reduction in downtime in the classroom",
        ],
        correctAnswer: "Democratization of invention and learning",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question: "What innovation is highlighted in low-tech making?",
        options: [
          "Designing and building electronics on paper",
          "Utilizing traditional textbooks for learning",
          "Having students solve puzzles to transfer knowledge",
          "Learning by embodiment",
        ],
        correctAnswer: "Designing and building electronics on paper",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question: "What aspect of 3D printing is beneficial for learning?",
        options: [
          "Learning to use technology",
          "Development of spatial reasoning skills",
          "Learning opportunities through creating objects",
          "Becoming technically proficient",
        ],
        correctAnswer: "Development of spatial reasoning skills",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question: "What makes constructionism different from constructivism?",
        options: [
          "Constructivism is less situated than constructionism.",
          "Constructionism is all about learning by watching, while constructivism is about learning by doing.",
          "Constructionism involves a lot of reading, but constructivism does not.",
          "There's no difference; the concepts are virtually the same thing.",
        ],
        correctAnswer: "Constructivism is less situated than constructionism.",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question: "How can you best design activities for classrooms?",
        options: [
          "Design for success by discouraging mistakes",
          "Design for single experiences",
          "Design by developing simple content with no constraints",
          "Design for engagement by promoting interest-driven design",
        ],
        correctAnswer:
          "Design for engagement by promoting interest-driven design",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question: "Resnick is from MIT Media Labs and is known for:",
        options: [
          "Logo",
          "Critical pedagogy",
          "Scratch programming",
          "Erector sets",
        ],
        correctAnswer: "Scratch programming",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
      {
        question: "Who is not an amazing Makery expert?",
        options: ["Dr. Lee", "Helen", "Jacob", "The Turtle"],
        correctAnswer: "The Turtle",
        keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
      },
    ],
    []
  );
  // const questions = useMemo(
  //   () => [
  //     {
  //       question: "What is the capital of France?",
  //       options: ["Paris", "London", "Madrid", "Berlin"],
  //       correctAnswer: "Paris",
  //       keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"], // Using arrow keys now
  //     },
  //     {
  //       question: "What is 2+2?",
  //       options: ["3", "4", "5", "6"],
  //       correctAnswer: "4",
  //       keyTriggers: ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
  //     },
  //     // Add more questions here
  //   ],
  //   []
  // );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const optionColors = [
    "bg-green-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-yellow-500",
  ];

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const current = questions[currentQuestionIndex];
      const pressedKeyIndex = current.keyTriggers.indexOf(event.key);
      if (pressedKeyIndex !== -1) {
        const selectedOption = current.options[pressedKeyIndex];
        if (selectedOption === current.correctAnswer) {
          setScore((prevScore) => prevScore + 1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [currentQuestionIndex, questions]);

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {questions[currentQuestionIndex]?.question ? (`(${currentQuestionIndex+1} / ${questions.length})` + questions[currentQuestionIndex].question) : "Quiz Complete!"}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Your Score: {score}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <div
                key={index}
                className={`text-white p-4 rounded cursor-pointer ${optionColors[index]}`}
                style={{
                  minHeight: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// const Page: React.FC = () => {
//   const shapes = useMemo(
//     () => [
//       {
//         title: "Square",
//         imageUrl:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/768px-Square_-_black_simple.svg.png",
//         keyTrigger: "ArrowLeft",
//         color: "border-green-500",
//       },
//       {
//         title: "Circle",
//         imageUrl:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Circle_-_black_simple_fullpage.svg/768px-Circle_-_black_simple_fullpage.svg.png",
//         keyTrigger: "ArrowUp",
//         color: "border-blue-500",
//       },
//       {
//         title: "Triangle",
//         imageUrl:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/800px-Regular_triangle.svg.png",
//         keyTrigger: "ArrowRight",
//         color: "border-red-500",
//       },
//       {
//         title: "Pentagon",
//         imageUrl:
//           "https://cdn.mathblog.com/wp-content/uploads/2017/03/pentagon.jpeg",
//         keyTrigger: "ArrowDown",
//         color: "border-yellow-500",
//       },
//     ],
//     []
//   );

//   const [currentShape, setCurrentShape] = useState({
//     title: "",
//     imageUrl: "",
//     keyTrigger: "",
//   });
//   const [previousShape, setPreviousShape] = useState({
//     title: "",
//     imageUrl: "",
//     keyTrigger: "",
//   });
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const generateRandomShape = () => {
//       let newShape;
//       do {
//         newShape = shapes[Math.floor(Math.random() * shapes.length)];
//       } while (previousShape && newShape.title === previousShape.title);
//       setCurrentShape(newShape);
//     };

//     generateRandomShape();
//   }, [previousShape]);

//   useEffect(() => {
//     const handleKeyPress = (event: KeyboardEvent) => {
//       const shape = shapes.find((shape) => shape.keyTrigger === event.key);
//       if (shape && shape.title === currentShape.title) {
//         setScore((prevScore) => prevScore + 1);
//         // setPreviousShape(currentShape);
//       }
//       // Move to the next shape regardless of whether the choice was correct
//       setPreviousShape((prev) => ({ ...prev })); // Trigger useEffect to generate new shape
//     };

//     window.addEventListener("keyup", handleKeyPress);

//     return () => {
//       window.removeEventListener("keyup", handleKeyPress);
//     };
//   }, [currentShape, score, shapes]);

//   // const [currentShape, setCurrentShape] = useState({ title: "", imageUrl: "" });
//   // const [previousShape, setPreviousShape] = useState({
//   //   title: "",
//   //   imageUrl: "",
//   // });
//   // const [score, setScore] = useState(0);

//   // useEffect(() => {
//   //   // Function to generate a new random shape that is not the same as the previous shape
//   //   const generateRandomShape = () => {
//   //     let newShape;
//   //     do {
//   //       newShape = shapes[Math.floor(Math.random() * shapes.length)];
//   //     } while (previousShape && newShape.title === previousShape.title);
//   //     setCurrentShape(newShape);
//   //   };

//   //   generateRandomShape();
//   // }, [previousShape]); // This effect runs whenever previousShape changes

//   const handleShapeClick = (shapeName: string) => {
//     if (shapeName === currentShape.title) {
//       setScore(score + 1); // Increment score if the correct shape is selected
//     }
//     setPreviousShape(currentShape); // Set the current shape as the previous shape for the next round
//   };
//   return (
//     <div>
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               {/* randomly select a shape */}
//               {currentShape.title}
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-gray-600">
//               Select the right answer from below. Score: {score}
//             </p>
//           </div>
//           <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//             {shapes.map((shape) => (
//               <div
//                 key={shape.title}
//                 className={
//                   "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 border-8 " +
//                   shape.color
//                 }
//                 onClick={() => handleShapeClick(shape.title)}
//               >
//                 <div className="m-4">
//                   <img
//                     src={shape.imageUrl}
//                     alt=""
//                     className="absolute inset-0 -z-10 h-full w-full object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearnPage;
export default Page;
