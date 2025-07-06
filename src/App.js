import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);
  const [flaws, setFlaws] = useState(null);

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(URL.createObjectURL(file));
    }
  };

  const next = () => setStep((s) => s + 1);

  return (
    <div className="p-4 font-sans text-center max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">PostBolt Prototype</h1>
      {step === 1 && (
        <>
          <p className="mb-2">Upload front of item:</p>
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFront)} />
          {front && <img src={front} alt="Front" className="mt-2 rounded shadow" />}
          <button className="mt-4 bg-yellow-400 px-4 py-2 rounded" onClick={next}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <p className="mb-2">Upload back of item:</p>
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setBack)} />
          {back && <img src={back} alt="Back" className="mt-2 rounded shadow" />}
          <button className="mt-4 bg-yellow-400 px-4 py-2 rounded" onClick={next}>Next</button>
        </>
      )}
      {step === 3 && (
        <>
          <p className="mb-2">Upload any flaws (optional):</p>
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFlaws)} />
          {flaws && <img src={flaws} alt="Flaw" className="mt-2 rounded shadow" />}
          <button className="mt-4 bg-green-500 px-4 py-2 text-white rounded" onClick={next}>Generate Listing</button>
        </>
      )}
      {step === 4 && (
        <>
          <h2 className="text-xl font-semibold">Listing Preview</h2>
          <p className="mt-4">✨ Demographic-Tuned Title: “Chic Fall Midi Dress - Size M”</p>
          <p className="mt-2">💬 Description: “Perfect for autumn nights, dinner dates, and casual office wear...”</p>
          <p className="mt-2">💲 Suggested Price: $38.99</p>
          <p className="mt-2">📊 Target Demographic: Women 25–35</p>
          <p className="mt-2">#Hashtags: #FallFashion #MinimalStyle #ClosetCleanout</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Post Listing</button>
        </>
      )}
    </div>
  );
}
