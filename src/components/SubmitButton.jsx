'use client';

export default function SubmitButton() {
  return (
    <button 
      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScDNdLRnB6OmX913KqqjYiw9eQI5Thk9h0MaIFOruGUHTtL5Q/viewform')}
      className="btn submit-paper"
    >
      Register
    </button>
  );
}
