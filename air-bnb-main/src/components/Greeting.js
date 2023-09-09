import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, dob, occupation });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Personal Information</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth:
          </label>
          <input
            type="text"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            readOnly
            required
            onClick={() => {
              const picker = new window.flatpickr('#dob', {
                dateFormat: 'Y-m-d',
                defaultDate: dob || 'today',
                onChange: (selectedDates) => {
                  setDob(selectedDates[0].toISOString().split('T')[0]);
                },
              });
              picker.open();
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
            Occupation:
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Greeting;
