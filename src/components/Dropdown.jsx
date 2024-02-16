/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import { useEffect, useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
const DropDown = ({ data, setLoading, btnstr, defaultValue, setSelectedValue }) => {
    const [dropDownSelected, setDropDownSelected] = useState(false)
    const [selected, setSelected] = useState(defaultValue)
    const [width, setWidth] = useState (105)

    const wrapperRef = useRef(null);

    let keyValueData = {}
    data.map((item) => { keyValueData[item.key] = item.value })

    useEffect(() => {
        setSelected(defaultValue)
    }, [defaultValue])

    const handleClickOutside = (event) => {
        try {
            if (wrapperRef && !wrapperRef.current.contains(event.target)) {
                setDropDownSelected(false);
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        setWidth (wrapperRef.current.offsetWidth)
      }, [wrapperRef.current]);

    return (
        <div className="">
            <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className='text-v3-primary w-full sm:w-[120px] bg-v3-primary border border-primary focus:ring-blue-500 font-medium rounded-md text-sm px-[14px] py-[5px] tracking-wide text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-500 justify-between'
                type="button"
                onClick={() => {
                    setDropDownSelected(!dropDownSelected);
                }}
                ref={wrapperRef}
            >
                {keyValueData[selected] ? keyValueData[selected] + " " : btnstr}
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
                        ? `z-20 bg-v3-primary border absolute border-primary divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-[8px] overflow-y-auto`
                        : `hidden`
                }
                style={{width: `${width}px`}}
            >
                <ul
                    className={`py-2 text-sm text-v3-primary font-medium dark:text-gray-200`}
                    aria-labelledby="dropdownButton"
                >
                    {data?.map((item, idx) => (
                        <li key={idx}>
                            <a
                                className="flex flex-row items-center px-4 py-2 hover:bg-dropdown dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                onClick={() => {
                                    setLoading(true)
                                    setDropDownSelected(false)
                                    setSelected(item["key"])
                                    setSelectedValue(item["key"])
                                }}
                            >
                                {item["value"]}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDown