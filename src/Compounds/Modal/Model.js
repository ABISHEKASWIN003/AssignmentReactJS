import React from "react";
import ReactDom from "react-dom";
import "../../App.css";
import Button from "../Button/Button";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "20px",
  zIndex: 1000,
  width: "80%",
  height: "100%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: "10%",
  left: "10%",
  transform: "translate(-50%, -50%)",
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({
  open,
  children,
  onClose,
  selected,
  setSelected,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <Button selected={selected} setSelected={setSelected} />
        <button onClick={onClose} className="button">
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
