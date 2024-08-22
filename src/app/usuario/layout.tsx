import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import Main from "../components/Main/Main";
import MainFooter from "../components/MainFooter/MainFooter";

const GenericLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="container-fluid d-flex min-vh-100 flex-column flex-grow-0 justify-content-center align-content-center"
      style={{
        background:
          "linear-gradient(140deg,rgba(216, 237, 232, 1) 13%,rgba(138, 182, 170, 1) 44%,rgba(138, 182, 170, 1) 52%,rgba(174, 195, 164, 1) 79%,rgba(215, 229, 208, 1) 92%)",
      }}
    >
      <MainHeader />
      <div className=" flex-grow-1 d-flex align-content-center justify-content-center">
        <Main>{children}</Main>
      </div>
      <MainFooter />
    </div>
  );
};

export default GenericLayout;
