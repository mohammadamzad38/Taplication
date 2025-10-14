import { useNavigate, useParams } from "react-router-dom";
import lessonData from "../Data/data.json";
import { useState } from "react";

export default function Lesson() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const { numb } = useParams();
  const navigation = useNavigate();

  const matchData = lessonData.filter(
    (lesson) => lesson.lesson_no === Number(numb)
  );

  //   const handleModal = () => {
  //     setModal(true);
  //   };

  return (
    <div className="container py-30">
      {modal && modalData && (
        <div className="inset-0 z-50 fixed h-full flex justify-center items-center w-full">
          <div className="flex space-y-2 flex-col text-xl rounded-tl-4xl rounded-br-4xl shadow-3xl text-black p-20 h-[500px] w-[600px] bg-[#ABC2A8]">
            <p className="text-center text-4xl font-bold mb-10">
              Lesson: {modalData.lesson_no}
            </p>
            <p>
              <span className="font-bold">Word:</span> {modalData.word}
            </p>
            <p>
              <span className="font-bold">Meaning:</span> {modalData.meaning}
            </p>
            <p>
              <span className="font-bold">When to say:</span>{" "}
              {modalData.when_to_say}
            </p>
            <p>
              <span className="font-bold">Example:</span> {modalData.example}
            </p>
            <button
              className="text-white bg-[#2C7063] rounded-md py-2 mt-10  shadow-2xl hover:bg-[#A66DBF]"
              onClick={() => {
                navigation(-1), setModal(false);
              }}
            >
              Back to Lesson
            </button>
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
                  setModal(true);
                  setModalData(data);
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
