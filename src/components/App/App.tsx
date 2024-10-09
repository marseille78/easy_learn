import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./global";
import Layout from "../Layout";
// import Home from "../../pages/Home/Home";

const Home = lazy(() => import("../../pages/Home"));

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
