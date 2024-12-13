import { useState } from "react";
import { FaFileAlt, FaFilePdf } from "react-icons/fa";
const Inputs = ({ onSelect }) => {
    const [ selected, setSelected ] = useState('Text');

    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option);
    };

    return (
        <div className="flex items-center bg-gray-100 p-2 rounded-full shadow-md text-xl">
            <div className={`flex items-center gap-2 px-4 rounded-full cursor-pointer ${selected==="Text" ? "bg-white shadow-sm border border-black":""}`} onClick={() => handleSelect('Text')}>
                <FaFileAlt className={selected === "Text" ? "text-blue-500" : "text-gray-500"} />
                <span className={selected === "Text" ? "text-blue-500" : "text-gray-500"}>Text</span>
            </div>
            <div className={`flex items-center gap-2 px-4 rounded-full cursor-pointer ${selected==="PDF" ? "bg-white shadow-sm border border-black":""}`} onClick={() => handleSelect('PDF')}>
                <FaFilePdf className={selected === "PDF" ? "text-blue-500" : "text-gray-500"} />
                <span className={selected === "PDF" ? "text-blue-500" : "text-gray-500"}>PDF</span>
            </div>
        </div>
    )
}

export default Inputs;