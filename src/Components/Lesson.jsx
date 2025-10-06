import { useParams } from "react-router-dom";
import lessonData from "../Data/data.json";
import { useState } from "react";

export default function Lesson() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const { numb } = useParams();

  const matchData = lessonData.filter(
    (lesson) => lesson.lesson_no === Number(numb)
  );

  //   const handleModal = () => {
  //     setModal(true);
  //   };

  return (
    <div className="container py-30">
      {modal && (
        <div className="inset z-50 fixed top-0 left-0 h-screen bg-black opacity-70 w-full">
          <div className="flex justify-center items-center text-center h-screen">
            <p>{modalData.word}</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 gap-6 px-5">
        {matchData.map((data, idx) => (
          <div
            key={idx}
            className={`border p-5 rounded-md hover:scale-125 hover:bg-[#2C7063] ${
              data.difficulty === "easy" ? "bg-[#3B644A]" : "bg-[#A03E52]"
            }`}
          >
            <p>
              <span className="font-bold">Word: </span> {data.word}
            </p>
            <p>
              <span className="font-bold">Meaning: </span>
              {data.meaning}
            </p>
            <p>
              <span className="font-bold">Pronunciation: </span>
              {data.pronunciation}
            </p>
            <p>
              <span className="font-bold">Part of Speech: </span>
              {data.part_of_speech}
            </p>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => {
                  setModal(data);
                }}
                className="mt-3 py-2 px-4 bg-[#D6904D] font-bold shadow-2xl rounded-md hover:bg-[#A66DBF]"
              >
                When to say
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
