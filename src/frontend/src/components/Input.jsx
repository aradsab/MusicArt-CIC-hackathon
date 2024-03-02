import React from 'react'

const Input = () => {
  return (
    <div className="flex flex-col space-y-4 w-full max-w-lg mx-auto mt-10">
            <textarea
                className="p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                rows="6"
                placeholder="Enter your text here..."
            ></textarea>
            <button
                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                type="button"
            >
                Submit
            </button>
    </div>
  )
}

export default Input