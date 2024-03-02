import React from 'react'
import { useState } from 'react'
import jurassicApi from '../util/apiCalls.mjs'

const Input = () => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    // <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'></div>
    <div name='input' className="max-w-[1000px] flex flex-col space-y-4 w-full mx-auto mt-10 pb-10">
            <textarea
                className="p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                rows="6"
                placeholder="enter lyrics here..."
            ></textarea>
            <button
                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                type="button"
                onClick={() => jurassicApi(textValue)}
            >
                transform
            </button>
    </div>
  )
}

export default Input