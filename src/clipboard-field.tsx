import * as React from "react";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useRecordContext, TextField } from "react-admin";
import Button from "@mui/material/Button";

const CopyToClipboardButton = (inputs: any) => {
  const handleClick = () => navigator.clipboard.writeText(inputs.content);

  return (
    <Button
      onClick={handleClick}
      endIcon={<ContentCopyIcon />}
      size="small"
      style={{
        display: "inline-block",
        visibility: inputs.visible ? "visible" : "hidden",
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        lineHeight: 0,
      }}
    />
  );
};

export const ClipboardField = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const record = useRecordContext();
  if (!record) return;

  const displayText = record[props.source];

  return (
    <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <TextField {...props} />
      <CopyToClipboardButton content={displayText} visible={isHovering} />
    </span>
  );
};
