import React from "react";
import Draggable from "react-draggable";

function Cvpdf(props) {
  return (
    <Draggable scale={1}>
      <div
        className="trashcontainer noselect"
        onDoubleClick={() => props.showtrash()}
        onClick={() => props.trashselect()}
      >
        {props.boolean ? (
          <div
            className="trashhh"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "82px",
            }}
          >
            <img
              className="icone"
              src={
                "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
              }
              alt="pdffilelogo"
            />
            <p style={{ color: "white", fontSize: "13px", margin: "6px" }}>
              Mon CV.pdf
            </p>
          </div>
        ) : (
          <div
            className="trashh"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "82px",
            }}
          >
            <img
              className="icone"
              src={
                "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
              }
              alt="corbeille"
            />
            <p style={{ color: "white", fontSize: "13px", margin: "6px" }}>
              Mon CV.pdf
            </p>
          </div>
        )}
      </div>
    </Draggable>
  );
}

export default Cvpdf;
