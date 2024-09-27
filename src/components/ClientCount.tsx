import frame from "@/assets/frame.png";
import Image from "next/image";

interface FrameProps {
  count: number;
  name: string;
}

const data = [
  { count: 500, name: "Total Clients" },
  { count: 10, name: "Years of Service" },
  { count: 20, name: "Coordinators" },
  { count: 750, name: "Events Organized" },
];
const ClientCount = () => {
  return (
    <section
      className="py-10
px-10 flex items-center justify-center flex-col h-[70vh]  "
    >
      <p className="text-5xl text-gray-600 cookie-regular">
        Why we are the Best for the events
      </p>
      <div className=" flex flex-wrap gap-4  items-center justify-around w-full mt-14">
        {data.map((item, index) => (
          <Frame key={index} count={item.count} name={item.name} />
        ))}
      </div>
    </section>
  );
};

export default ClientCount;

const Frame = ({ count, name }: FrameProps) => {
  return (
    <div className="size-36 rounded-full flex items-center justify-center flex-col text-center relative">
      <Image
        src={frame}
        alt="frame"
        className="absolute object-cover w-full h-full"
      ></Image>
      <span className="text-3xl text-purple-800 cookie-regular">{count}+</span>
      <p className="text-sm text-wrap sintony-bold z-10 text-center ">{name}</p>
    </div>
  );
};
