import { useState, useContext, useRef, useEffect, useMemo } from "react";
import FloatingLabelInput from "../../../../components/inputs/FloatingLabelInput";
import { formDataContext } from "../../../../contexts/formDataContext";
import { useNetwork } from "wagmi";
// import { Link } from "react-router-dom";
// import ImageUrlUploader from "../../../../components/ImageUrlUploader";

const Links = () => {
  const { formData, setFormData } = useContext(formDataContext)
  const [dropDownSelected, setDropDownSelected] = useState(false)
  const wrapperRef = useRef(null);
  const [selected, setSelected] = useState(1)
  const [isZksync, setIsZksync] = useState(false)
  const { chain } = useNetwork()
  
  useEffect(() => {
    setFormData({
      ...formData,
      "fee": selected
    })
  }, [selected])
  
  useEffect(() => {
    isZksyncSelected();
  }, [chain.id])

  const handler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const isZksync = useMemo( () => {
  //   if ( chain.id === 324 )
  //     return true;
  //   return false;
  // }, [chain.id]);

  const isZksyncSelected = () => {
    if (chain) {
      if (chain.id === 324 || chain.id === 280 ) {
        setIsZksync(true)
        return;
      }
    }
    setIsZksync(false)
  }
  
  const fileHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    try {
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        setDropDownSelected(false);
      }
    } catch (e) {
      console.log(e)
    }
  };

  const dropdownList = [0.3, 1]
  const dropdownList1 = [0.25, 1]

  return (
    <>
      <div className="grid mx-auto items-start max-w-[1300px] mt-2 grid-cols-1 lg:grid-cols-2 w-full gap-5 lg:gap-10">
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-8 w-full bg-black rounded-xl p-5">
          <div className="w-full flex justify-between items-start flex-row gap-20">
            <div className="mt-12">
              {/* <FloatingLabelInput
                handler={handler}
                name="fee"
                placeholder="Pool Fee Percentage"
                bgColor="abc bg-black"
                value={formData.fee}
                topLabel="Pool Fee Percentage"
              /> */}
              <label className="text-white text-lg">Pool Fee Percentage</label>
              <div className="mt-2">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className='text-white w-full sm:w-[120px] bg-primary border border-primary focus:ring-blue-500 font-medium rounded-md text-lg px-[14px] py-[5px] tracking-wide text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-500 justify-between'
                  type="button"
                  onClick={() => {
                    setDropDownSelected(!dropDownSelected);
                  }}
                  ref={wrapperRef}
                >
                  {selected}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="#6F6E84"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className={
                    dropDownSelected
                      ? `z-20 bg-primary border absolute border-primary divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-[8px] overflow-y-auto`
                      : `hidden`
                  }
                  style={{ width: `120px` }}
                >
                  <ul
                    className={`py-2 text-md text-white font-medium dark:text-gray-200`}
                    aria-labelledby="dropdownButton"
                  >
                    {
                      isZksync ? 
                      dropdownList1.map((item, idx) =>
                        <li key={idx}>
                          <a
                            className="flex flex-row items-center px-4 hover:bg-dropdown dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            onClick={() => {
                              setDropDownSelected(false)
                              setSelected(item)
                            }}
                          >
                            {item}
                          </a>
                        </li>
                      ) :
                      
                      dropdownList.map((item, idx) =>
                        <li key={idx}>
                          <a
                            className="flex flex-row items-center px-4 hover:bg-dropdown dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            onClick={() => {
                              setDropDownSelected(false)
                              setSelected(item)
                            }}
                          >
                            {item}
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col gap-2">
              <label htmlFor="coin" className="text-white  text-lg font-medium">
                Coin Image
              </label>
              <label
                htmlFor="coin"
                className="flex cursor-pointer text-cyan w-24 aspect-square justify-center items-center bg-gray bg-opacity-30 border-dashed border-gray rounded-lg border"
              >
                <input
                  type="file"
                  id="coin"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={fileHandler}
                  className="hidden"
                />
                {formData.file ? (
                  <img
                    src={formData.file}
                    className="w-20 aspect-square object-cover"
                    alt=""
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                )}
              </label>
            </div>
          </div>
          <FloatingLabelInput
            handler={handler}
            name="description"
            placeholder="Ex: Farming Token"
            bgColor="abc bg-black"
            type="text"
            value={formData.description}
            topLabel="Description"
          />
          <FloatingLabelInput
            handler={handler}
            name="website"
            placeholder="https://xyz.com"
            bgColor="abc bg-black"
            type="text"
            value={formData.website}
            topLabel="Website"
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-8 w-full">
          <div className="bg-black rounded-xl flex mb-3 flex-col gap-1 w-full p-5">
            <FloatingLabelInput
              handler={handler}
              name="twitter"
              placeholder="https://twitter.com"
              bgColor="abc bg-black"
              type="text"
              value={formData.twitter}
              topLabel="Twitter"
            />
            <FloatingLabelInput
              handler={handler}
              name="telegram"
              placeholder="https://xyz.com"
              bgColor="abc bg-black"
              type="text"
              value={formData.telegram}
              topLabel="Telegram"
            />
            {/* <ImageUrlUploader /> */}
            <FloatingLabelInput
              handler={handler}
              name="dataUri"
              placeholder="https://xyz.com/"
              bgColor="abc bg-black"
              type="text"
              value={formData.dataUri}
              topLabel="NFT image URL"
            />
            <div className="flex justify-between gap-8">
              <FloatingLabelInput
                handler={handler}
                name="imageCount"
                placeholder="Enter image count"
                bgColor="abc bg-black"
                type="number"
                value={formData.imageCount}
                topLabel="Image Count"
              />
              <FloatingLabelInput
                handler={handler}
                name="imageType"
                placeholder="Enter image extension"
                bgColor="abc bg-black"
                type="text"
                value={formData.imageType}
                topLabel="Image extension"
              />
            </div>
            {/* <div className="w-full flex justify-start sm:gap-10 items-center flex-wrap mt-5">
              <div className="flex flex-row items-center gap-2 pl-6 sm:pl-0 mb-6 sm:mb-0">
                <label htmlFor="imageCount" className="font-semibold text-white">
                  Image Count:
                </label>
                <input
                  id="imageCount"
                  type="number"
                  placeholder="Enter image count"
                  min="1"
                  // value={formData.imageCount}
                  onChange={handleImageCountChange}
                  className="bg-primary border  border-white w-40 outline-none placeholder:text-white font-semibold text-white rounded-md p-2"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <label htmlFor="imageExtension" className="font-semibold text-white">
                  Image Extension:
                </label>
                <input
                  id="imageExtension"
                  type="text"
                  placeholder="Enter image extension"
                  // value={formData.imageType}
                  onChange={handleImageExtensionChange}
                  className="bg-primary border  border-white w-40 outline-none placeholder:text-white font-semibold text-white rounded-md p-2"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-[1400px] mx-auto flex justify-center mb-5">
        <ImageUrlUploader />
      </div> */}
    </>
  );
};

export default Links;
