import React from 'react'
import { useState } from 'react'
import jurassicApi from '../util/apiCalls.mjs'

const Input = () => {
  const [textValue, setTextValue] = useState('');
  const [image, setImage] = useState('R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');

  const handleChange = (event) => {    
    const newText = event.target.value.replace(/(\r\n|\n|\r)/gm, ". ");
    const textFiltered = filterWords(newText);
    setTextValue(textFiltered);  
  };

  const callApi = async (value) => {
    try {
      // Remove line breaks from the value
      const sanitizedValue = value.replace(/\r?\n|\r/g, "");
  
      // Wait for the Promise to resolve and get the result
      const returnText = await jurassicApi(sanitizedValue);
      console.log("console1 " + returnText);
      setImage(returnText);
    } catch (error) {
      // Handle any errors that might occur during the API call
      console.error('Error calling the API:', error);
    }
  };

  // NOTE: we have all these words to prevent people from typing them into our bot
  function filterWords(inputString) {
    
    const lowercaseWordsToRemove = wordsToRemove.map(word => word.toLowerCase());
    const words = inputString.split(/\s+/);
    const filteredWords = words.filter(word => 
      !lowercaseWordsToRemove.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  }

  return (
    <div name='input' className="flex flex-col space-y-4 w-full max-w-lg mx-auto mt-10 mb-10">
            <textarea
                className="p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                rows="6"
                placeholder="Enter your text here..."
                value={textValue} 
                onChange={handleChange}
                maxLength="400"
            ></textarea>
            <button
                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                type="button"
                onClick={() => callApi(textValue)}
            >
                Submit
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <img src={`data:image/jpeg;base64,${image}`} alt="Generated" style={{ maxWidth: '100%', maxHeight: '100vh' }} />
            </div>
    </div>
  )
}

export default Input