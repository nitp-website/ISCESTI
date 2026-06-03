'use client';

export default function SubmitButton() {
  return (
    <button 
      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdm8NbhrmpQDAEY-M9rmgEPLRqXg3tHdZK6pwoaOQs2gkH-tA/viewform')}
      className="btn submit-paper"
    >
      Submit Paper
    </button>
  );
}
