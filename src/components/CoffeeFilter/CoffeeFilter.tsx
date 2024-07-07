"use client";
import { useState } from "react";

type mockDataType = {
  is_caffeine: boolean;
  types: {}[];
};

const mockData = {
  types: [
    { type: "고소", clicked: false },
    { type: "밸런스", clicked: false },
    { type: "묵직한", clicked: false },
  ],
  is_caffein: false,
};
// types는 type : '고소', clicked : false를 가진 객체로 저장되어야할 듯
// 타입들을 모아놓은 배열?을 만들어서 저장해놔야할듯

function CoffeeFilter() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="min-w-40 w-60 ">
      <h1 className="text-xl font-semibold  mr-4 h-10 text-filterText border-b-2  border-b-filterBorder">
        커피 찾기
      </h1>
      <ul className="">
        <li className="flex justify-between items-center mt-4 mr-4 h-10  text-filterText border-b-2 border-b-filterBorder ">
          <p>디카페인</p>
          <input type="checkbox" />
        </li>
        <li
          className={`mt-4 mr-4 ${
            isClicked ? "" : "h-10"
          } text-filterText border-b-2 border-b-filterBorder`}
        >
          <div className="flex justify-between">
            <p>맛과 향</p>
            <button onClick={() => setIsClicked(!isClicked)}>!!</button>
          </div>

          {isClicked && (
            <div className="flex flex-wrap gap-3 text-sm w-full mt-2 mb-2 hover:cursor-pointer ">
              {mockData.types.map((t, idx) => (
                <div
                  key={idx}
                  // 지금은 스테이트로 관리를 안해서 되지 않지만 이렇게 짜면 될듯
                  onClick={() => {
                    t.clicked = !t.clicked;
                  }}
                  className={`${
                    t.clicked ? "text-white" : ""
                  } border rounded p-1`}
                >
                  {t.type}
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CoffeeFilter;
