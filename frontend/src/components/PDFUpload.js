import { useState } from "react";
const PDFUpload = ({ onFileChange }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setFileName(file.name);
          onFileChange(file);
        }
      };

    return (
        <div className="flex flex-col items-center">
            <label htmlFor="pdf-upload" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 bg-gray-50 transition-all">
                {fileName ? (
                    <span className="text-sm font-medium text-gray-600">{fileName}</span>
                ):(
                    <>
                        <span className="text-gray-500 text-lg font-medium">
                            Upload a PDF
                        </span>
                        <span className="text-gray-400 text-sm">Click to browse documents</span>
                    </>
                )}
                <input
                    id="pdf-upload"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
        </div>
    )
}

export default PDFUpload;