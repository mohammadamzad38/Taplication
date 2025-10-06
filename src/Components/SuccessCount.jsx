import CountUp from "react-countup";

export default function SuccessCount() {
  return (
    <div>
      <section className="flex justify-between mx-auto gap-5 max-w-4xl place-items-center pb-30">
        <div className="space-y-2 text-center bg-[#6D6C36] py-4 w-1/5 rounded-md">
          <p className="text-xl font-bold ">User</p>
          <CountUp
            className="text-3xl font-bold"
            start={8888.3}
            end={1000}
            duration={1}
          ></CountUp>
        </div>

        <div className="space-y-2 text-center bg-[#7B8A71] py-4 w-1/5 rounded-md">
          <p className="text-xl font-bold ">Lesson</p>
          <CountUp
            className="text-3xl font-bold"
            start={99999.3}
            end={78}
            duration={1}
          ></CountUp>
        </div>

        <div className="space-y-2 text-center bg-[#263F37] py-4 w-1/5 rounded-md">
          <p className="text-xl font-bold ">Vocabulary</p>
          <CountUp
            className="text-3xl font-bold"
            start={88888.3}
            end={5000}
            duration={1}
          ></CountUp>
        </div>
        <div className="space-y-2 text-center bg-[#101918] py-4 w-1/5 rounded-md">
          <p className="text-xl font-bold ">Tutorial</p>
          <CountUp
            className="text-3xl font-bold"
            start={4555555.3}
            end={2000}
            duration={1}
          ></CountUp>
        </div>
      </section>
    </div>
  );
}
