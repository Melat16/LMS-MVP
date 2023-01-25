import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import expandIcon from "../public/expand.svg";
import collapseIcon from "../public/collapse.svg";

export default function PackageDetail({ packageName }) {
  const router = useRouter();
  const [expanded, setexpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const [total, setTotal] = useState("0.00");
  const toggle = (i) => {
    if (expanded.includes(i)) {
      const temp = expanded.filter((val) => val !== i);
      return setexpanded(temp);
    }
    const temp = [...expanded];
    temp.push(i);
    setexpanded(temp);
  };
  const addToCart = (i) => {
    if (selected.includes(i)) {
      const temp = selected.filter((val) => val !== i);
      setTotal((temp.length * 600.0).toFixed(2).toString());
      return setSelected(temp);
    }
    const temp = [...selected];
    temp.push(i);
    if (temp.length === 3) setTotal("1400.00");
    else setTotal((temp.length * 600.0).toFixed(2).toString());
    return setSelected(temp);
  };
  const data = [
    {
      question: "What is the best way to attend a course?",
      price: 600.0,
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      question: "What is the best way to attend a course?",
      price: 600.0,
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      question: "What is the best way to attend a course?",
      price: 600.0,
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-between pb-24">
        <div className="flex-col items-start mx-10">
          <div className="grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-5 ">
            <div className="flex items-center ">
              <Image
                src="/scratch-og.png"
                width={600}
                height={600}
                style={{ objectFit: "fill" }}
                alt="Picture of the author"
              />
            </div>
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h1 className="font-semibold text-3xl uppercase">
                  {packageName}
                </h1>
                <p className="font-light text-sm">Beginner Level</p>
                <p className="mt-3 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="pl-5 text-sm mt-2">
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex justify-start items-end">
                <p className="text-xl mr-5 ">600 Birr/Course </p>
                <div className="">
                  <Strikethrough className="text-xl mr-5 font-light">
                    1800 Birr
                  </Strikethrough>
                  <p className="text-xl font-semibold -mt-2">
                    {" "}
                    1400 Birr/Package
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-3xl mb-10">Courses in Package</h1>
            {data.map((item, i) => (
              <div key={i.toString()} className="mb-7 bg-[#FFF4EE]">
                <div className="flex py-6 justify-between items-center cursor-pointer bg-white border-[0.5px] border-[#FBC400] ">
                  <h1 className="text-xl pl-5 font-light">{item.question}</h1>
                  <div className="flex items-center">
                    <h1 className="text-xl mr-5 font-semibold">
                      {item.price.toFixed(2).toString()} Birr
                    </h1>

                    <span
                      className="px-4 py-2 mr-4 bg-[#01605D] rounded-md text-white"
                      onClick={() => addToCart(i)}
                    >
                      {selected.includes(i) ? "Remove" : "Add"}
                    </span>
                    {expanded.includes(i) && (
                      <CollapseIcon
                        className="px-6 py-5 mr-4 bg-[#01605D] rounded-md text-white"
                        onClick={() => toggle(i)}
                      />
                    )}
                    {!expanded.includes(i) && (
                      <ExpandIcon
                        className="px-6 py-5  mr-4 bg-[#01605D] rounded-md text-white"
                        onClick={() => toggle(i)}
                      />
                    )}
                  </div>
                </div>
                {expanded.includes(i) && (
                  <div className="bg-white text-start p-5 ">
                    <p className="text-sm font-light">{item.answer}</p>{" "}
                  </div>
                )}
              </div>
            ))}{" "}
          </div>
        </div>
        <div className="bg-white shadow-xl shadow-black drop-shadow-2xl w-full h-20 fixed bottom-0 flex items-center justify-end px-10">
          <div className="flex items-center mr-10">
            <p className="mr-2 text-sm">Total Calculated Cost: </p>
            {selected.length === 3 && (
              <div className="flex items-start flex-col">
                <Strikethrough className="-mt-5 text-xl font-light">
                  1800.00
                </Strikethrough>
                <p className="text-xl font-semibold -mt-2">1400.00 Birr</p>
              </div>
            )}
            {selected.length < 3 && (
              <p className="font-semibold text-lg">{`${total} Birr`}</p>
            )}
          </div>
          <button
            className={`px-8 py-3 rounded text-white bg-[#01605D] cursor-pointer hover:bg-[#01605D]/90`}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

const Strikethrough = styled.span`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    right: 0;
    border-top: 2px solid;
    border-color: black;

    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
`;

const ExpandIcon = styled.span`
  background-image: url(${expandIcon.src});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: center;
`;

const CollapseIcon = styled.span`
  background-image: url(${collapseIcon.src});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: center;
`;
