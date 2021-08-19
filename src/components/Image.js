import React from "react";

export default function Image({ images }) {
  return (
    <div>
      <img src={images.url} style={{ height: "200px" }} />
      <p>{images.legend}</p>
    </div>
  );
}
