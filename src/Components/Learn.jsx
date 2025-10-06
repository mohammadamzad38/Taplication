import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Learn() {
  const { user } = useContext(AuthContext);
  const lesson = Array.from({ length: 10 }, (_, i) => i + 1);
  const navigate = useNavigate();
  return (
    <div className="bg-[#3A5256] py-30">
      <section className="container ">
        <h2 className="text-5xl font-bold text-center my-10">
          Let’s Learn — Vocabulary Lessons
        </h2>
        <div className="grid grid-cols-3 gap-6 px-5">
          {lesson.map((numb, idx) => (
            <div
              onClick={() => {
                `${user ? navigate(`/lesson/${numb}`) : navigate("/login")}`;
              }}
              key={idx}
              className="border py-5 rounded-md hover:bg-[#2A3436] cursor-pointer"
            >
              <p className="text-2xl font-bold text-center ">Lesson {numb}</p>
            </div>
          ))}
        </div>
        <p className="text-5xl font-bold text-center my-10 pt-15">
          Learn The alphabet
        </p>
        <div className="flex justify-center items-center mt-20">
          <iframe
            width="1080"
            height="520"
            src="https://www.youtube-nocookie.com/embed/qzsQ_5TymMI?si=UGeK0ziO4z2lcCid"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex justify-center mt-20">
          <button
            onClick={() =>
              `${user ? navigate("/tutorials") : navigate("/login")}`
            }
            className="py-4  px-15 cursor-pointer border rounded-sm bg-[#273847] hover:bg-[#100F0C]"
          >
            View more
          </button>
        </div>
      </section>
    </div>
  );
}
