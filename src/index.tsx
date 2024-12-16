import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PostHogProvider } from "posthog-js/react";
import { cmsContent } from "./cms";
import posthog from "posthog-js";

posthog.init(
  cmsContent.config.metaCreds.publicKey,
  {
    api_host: cmsContent.config.metaCreds.publicHost,
    person_profiles: "always",
  }
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PostHogProvider 
      client={posthog}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
