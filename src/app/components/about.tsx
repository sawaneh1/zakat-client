import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#f5f7f9]  ">
      <div className="flex justify-between sm:px-20 items-center  sm:py-20">
        <div className="grid grid-cols-2  gap-10  ">
          <div className="">
            <div className="bg-white h-64 w-64  ">tr one</div>
            <div className="">test</div>
          </div>

          <div className=" ">
            <div>test</div>
            <div className="h-64   w-64 bg-white relative">
              <div className="w-44 h-20">
                <Image
                  src={"/test.jpeg"}
                  width={100}
                  height={780}
                  alt="img1"
                  className="rounded-[100%] absolute"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
