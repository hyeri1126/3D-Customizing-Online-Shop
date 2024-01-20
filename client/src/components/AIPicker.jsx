import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  const showAlert = () => {
    alert("현재는 AI 서비스가 중단되었습니다.");
  };
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              // handleClick={() => handleSubmit("logo")}
              handleClick={() => showAlert()}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              // handleClick={() => handleSubmit("full")}
              handleClick={() => showAlert()}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
