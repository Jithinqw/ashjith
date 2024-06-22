import React from "react";
import { Header } from "../components/Heading/Header";
import { cmsContent } from "../cms";
import { Button } from "wafflecss";

export const NotFound = () => {
  return (
    <>
      <Header />
      <div
        style={{
          color: "#000",
          background: "#fff",
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cmsContent.pages &&
          cmsContent.notFoundFeed &&
          cmsContent.notFoundFeed.cta && (
            <h1
              style={{
                display: "inline-block",
                borderRight: "1px solid rgba(0,0,0,.3)",
                margin: 0,
                marginRight: "20px",
                padding: "10px 23px 10px 0",
                fontSize: "24px",
                fontWeight: 500,
                verticalAlign: "top",
              }}
            >
              {cmsContent.notFoundFeed.cta}
            </h1>
          )}
        <Button
          data={{
            displayText: cmsContent.notFoundFeed.buttonCta,
          }}
          options={{
            size: "md",
          }}
        />
      </div>
    </>
  );
};
