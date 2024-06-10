"use client";
import CountUp from "react-countup";

const stats = [
  {
    number: 3,
    text: "Years of exprience",
  },
  {
    number: 120,
    text: "Projects completed",
  },
  {
    number: 100,
    text: "Plus Happy Client",
  },
  {
    number: 2,
    text: "Plus Best Awards",
  },
];

const Stats = () => {
  return (
    <div className="container m-auto py-6">
      <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none md:justify-between justify-center gap-6 ">
        {stats.map((item, i) => (
          <div className="flex gap-2 items-center" key={i}>
            <CountUp
              end={item.number}
              duration={5}
              delay={2}
              className="text-3xl lg:text-4xl font-extrabold"
            />
            <p
              className={`${
                item.text.length < 20
                  ? "max-w-[100px]"
                  : "max-w-150"
              }  text-white/70 text-sm`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
