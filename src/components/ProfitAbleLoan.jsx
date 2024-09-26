import React from "react";

export const ProfitAbleLoan = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col gap-5 bg-white bg-opacity-10 backdrop-blur-lg p-10">
          <h2 className="text-6xl font-bold text-white">Profitable Loans</h2>
          <div className="flex flex-col gap-5">
            <p className="text-white">
              1. It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-white">
              2. It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-white">
              3. It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-white bg-opacity-10 backdrop-blur-lg p-5">
          <img
            className="w-[400px] shadow-2xl  shadow-white h-[400px]"
            src="/CreditCards1.png"
            alt="locker"
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
