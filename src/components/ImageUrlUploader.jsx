import React, { useState, useContext } from "react";
import FloatingLabelInput from "../components/inputs/FloatingLabelInput";
import { formDataContext } from "../contexts/formDataContext";

function ImageUrlUploader() {
  // const [imageUrls, setImageUrls] = useState([""]); // Initial state with one empty URL field
  // const [imageCount, setImageCount] = useState(1); // Initial state for image count
  // const [imageExtension, setImageExtension] = useState("png"); // Initial state for image extension
  const {formData, setFormData} = useContext(formDataContext)
  
  const handler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleChange = (e, index) => {
  //   const newImageUrls = [...imageUrls];
  //   newImageUrls[index] = e.target.value;
  //   setImageUrls(newImageUrls);
  // };

  // const handleAddField = () => {
  //   setImageUrls([...imageUrls, ""]);
  // };

  // const handleRemoveField = (index) => {
  //   if (index !== 0) {
  //     const newImageUrls = [...imageUrls];
  //     newImageUrls.splice(index, 1);
  //     setImageUrls(newImageUrls);
  //   }
  // };

  // const handleSave = () => {
  //   // You can implement saving functionality here
  //   console.log("Image URLs saved:", imageUrls);
  //   // Clear input fields after saving
  //   setImageUrls([""]);
  // };

  const handleImageCountChange = (e) => {
    formData.imageCount = e.target.value;
  };

  const handleImageExtensionChange = (e) => {
    formData.imageType = e.target.value;
  };

  return (
    <div className="w-full">
      {/* {imageUrls.map((url, index) => (
        <div key={index} className="flex gap-3 items-center mb-3">
          <div className="tooltip w-full mt-5">
            <input
              type="text"
              placeholder={`https://xyz.com/`}
              value={url}
              onChange={(e) => handleChange(e, index)}
              className="border  w-full border-black outline-none flex-grow placeholder:text-black font-semibold text-black rounded-md p-2"
            />
            <span class="tooltiptext">Tooltip text</span>
          </div>
          {index !== 0 && (
            <button
              onClick={() => handleRemoveField(index)}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      ))} */}
      <FloatingLabelInput
        handler={handler}
        name="dataUri"
        placeholder="https://xyz.com/"
        bgColor="abc bg-black"
        value={formData.dataUri}
        topLabel="NFT image URL"
      />
      <div className="w-full flex justify-start sm:gap-10 items-center flex-wrap mt-5">
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
            className="border w-40  border-black outline-none placeholder:text-black font-semibold text-black rounded-md p-2"
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
            className="border w-40 border-black outline-none placeholder:text-black font-semibold text-black rounded-md p-2"
          />
        </div>
        {/* <button
          onClick={handleAddField}
          className="bg-yellow-300 text-black h-[45px] font-bold py-2 px-4 rounded"
        >
          Add
        </button>
        <button
          onClick={handleSave}
          className="connect-button font-bold py-2 h-[44px] px-4 rounded-lg"
        >
          Save Images
        </button> */}
      </div>
    </div>
  );
}

export default ImageUrlUploader;
