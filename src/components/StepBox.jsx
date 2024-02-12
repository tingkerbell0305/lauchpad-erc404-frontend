import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const StepBox = ({ activeUrl, num, name, desc }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // console.log('11111', pathname.split("/")[1])
    if (pathname.split("/")[1] === activeUrl.split("/")[1]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname]);

  const handlePage = (num) => {
    if (num === 1)
      navigate("/")
    else if (num === 2)
      navigate("/links")
    else
      navigate("/confirm")
    // setPageNumber(num);
  }

  return (
    <div className="flex self-start md:self-auto text-center justify-start items-center flex-col gap-0">
      <div className="w-10 grid place-items-center md:-mt-2 -mb-2 aspect-square rounded-full bg-primary">
        <button
          className={`grid place-items-center  rounded-full aspect-square w-6 ${active ? "bg-yellow-300" : "bg-gray"}`}
          onClick={() => handlePage(num)}
        >
          <p className="text-black text-xs font-semibold">{num}</p>
        </button>
      </div>
      <p
        className={`${active ? "text-white" : "text-gray"
          } text-lg sm:text-xl font-medium mt-3`}
      >
        {name}
      </p>
      {desc && (
        <p
          className={`${active ? "text-white" : "text-gray"
            } text-xs font-medium`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default StepBox;
