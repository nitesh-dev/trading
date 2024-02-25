import React from "react";
import "../styles/loading.css";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      {isLoading && (
        <div className="loading-layer">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
