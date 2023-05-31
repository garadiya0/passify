import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const getActiveTab = async () => {
    /* eslint-disable no-undef */
    const activeTab = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    console.log("👉", activeTab[0]);
    setActiveTabVal({
      title: activeTab[0].title,
      url: activeTab[0].url,
      tabID: activeTab[0].id,
    });
  };

  const [inputUrl, setInputUrl] = useState("");

  // WHEN ENTER KEY IS PRESSED
  const keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      console.log("URL", inputUrl);
      if (inputUrl) {
        console.log("SAVED!! ☑✅");
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <section className="App">
      <div className="input-box">
        <input
          type="url"
          value={inputUrl}
          onKeyDown={keyDownHandler}
          onChange={(event) => setInputUrl(event.target.value)}
          placeholder="Add a link to secure..."
        />
        <p>You have currently{"9 tasks"} to perform</p>
      </div>
    </section>
  );
}

export default App;
