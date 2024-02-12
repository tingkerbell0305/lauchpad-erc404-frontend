import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import CreateToken from "./pages/dapp/tokens/create-token/Index";
import BasicInfo from "./pages/dapp/tokens/create-token/BasicInfo";
// import Functions from "./pages/dapp/tokens/create-token/Functions";
import Links from "./pages/dapp/tokens/create-token/Links";
import Confirm from "./pages/dapp/tokens/create-token/Confirm";
import Pool from "./pages/dapp/tokens/create-token/Pool";

import { formDataContext } from "./contexts/formDataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'big-integer';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    decimals: "",
    supply: "",
    file: "",
    fee: "",
    description: "",
    website: "",
    twitter: "",
    telegram: "",
    dataUri: "",
    imageType: "",
    imageCount: "",
  })

  const formDataValue = useMemo(
    () => ({ formData, setFormData }),
    [formData]
  );

  const [contractAddr, setContractAddr] = useState("");

  return (
    <>
      <formDataContext.Provider value={formDataValue}>
        <Routes>
          <Route path="/" element={<CreateToken getContractAddress={(contractAddr) => { setContractAddr(contractAddr) }} />}>
            <Route element={<BasicInfo />} path="" />
            {/* <Route element={<Functions />} path="Functions" /> */}
            <Route element={<Links />} path="links" />
            <Route element={<Confirm deployedContractAddr={contractAddr} />} path="confirm" />
          </Route>
          <Route path="/pool" element={<Pool />}></Route>
        </Routes>
        <ToastContainer pauseOnFocusLoss={true} position="top-right" autoClose={3000} toastClassName={'toast-theme text-white'} />
      </formDataContext.Provider>
    </>
  );
};

export default App;
