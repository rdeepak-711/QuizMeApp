import '../App.css';
import Inputs from '../components/Inputs';
import { useState } from 'react';
import PDFUpload from '../components/PDFUpload';
const HomePage = () => {
    const [inputType, setInputType] = useState('Text');
    const [fileSelected, setFileSelected] = useState(false);
    const [textInput, setTextInput] = useState('');

    const handleSelect = (option) => {
        setInputType(option);
        console.log("Selected:", option);
    };

    const handleText = (e) => {
        setTextInput(e.target.value);
    }

    const handleFile = (file) => {
        setFileSelected(file !== null);
    }

    const disableButton = (inputType==='Text' && textInput.trim() === '') || (inputType==='PDF' && !fileSelected)

    return (
        <div className='flex flex-col w-screen h-screen items-center bg-gradient-to-r from-blue-200 to-cyan-200'>
            <div className='flex flex-col items-center gap-5 p-5'>
                <h1 className='text-6xl'>Quiz Me 🧠</h1>
                <p className='text-center text-lg'>Transform any text into an interactive quiz using AI. Perfect for studying and testing your knowledge!</p>
            </div>
            
            <Inputs onSelect={handleSelect}/>
            
            <div className='w-full lg:w-1/3 p-6'>
                {inputType==="Text" && <textarea placeholder='Paste your study material here..📝' className='w-full h-48 p-4 rounded-md' onChange={handleText}/>}
                {inputType==="PDF" && <PDFUpload onFileChange={handleFile}/>}
            </div>

            <div>
                <button className={`w-full p-3 mt-6 text-white bg-blue-500 rounded-md ${disableButton ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`} disabled={disableButton}>
                    Generate Questions
                </button>
            </div>
        </div>
    );
}

export default HomePage;