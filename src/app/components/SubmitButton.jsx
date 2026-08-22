"use client";

export default function SubmitButton() {
  return (
    <button
      onClick={() =>
        window.open(
          "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISCESTI2027%2FSubmission%2FManage",
        )
      }
      className="btn submit-paper"
    >
      Submit Abstract
      <br />
      Extended Abstract
    </button>
  );
}
