import { useState, useContext } from "react";
import FloatingLabelInput from "../../../../components/inputs/FloatingLabelInput";
import { Link } from "react-router-dom";
import ImageUrlUploader from "../../../../components/ImageUrlUploader";

import { formDataContext } from "../../../../contexts/formDataContext";

const Links = () => {
  const { formData, setFormData } = useContext(formDataContext)
  // const [formData, setFormData] = useState({
  //   file: "",
  //   fee: "",
  //   description: "",
  //   website: "",
  //   twitter: "",
  //   telegram: "",
  // });
  const handler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const fileHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };
  return (
    <>
      <div className="grid mx-auto items-start max-w-[1300px] mt-2 grid-cols-1 lg:grid-cols-2 w-full gap-5 lg:gap-10">
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-8 w-full bg-black rounded-xl p-5">
          <div className="w-full flex justify-between items-start flex-row gap-20">
            <div className="mt-10">
              <FloatingLabelInput
                handler={handler}
                name="fee"
                placeholder="Deploy Fee"
                bgColor="abc bg-black"
                value={formData.fee}
                topLabel="Deploy Fee"
              />
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
            value={formData.description}
            topLabel="Description"
          />
          <FloatingLabelInput
            handler={handler}
            name="website"
            placeholder="https://xyz.com"
            bgColor="abc bg-black"
            value={formData.website}
            topLabel="Website"
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-8 w-full">
          <div className="bg-black rounded-xl flex mb-3 flex-col gap-5 w-full p-5">
            <FloatingLabelInput
              handler={handler}
              name="twitter"
              placeholder="https://twitter.com"
              bgColor="abc bg-black"
              value={formData.twitter}
              topLabel="Twitter"
            />
            <FloatingLabelInput
              handler={handler}
              name="telegram"
              placeholder="https://xyz.com"
              bgColor="abc bg-black"
              value={formData.telegram}
              topLabel="Telegram"
            />
            <ImageUrlUploader />
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
