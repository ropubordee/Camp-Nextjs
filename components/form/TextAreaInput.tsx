import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div>
      <Label htmlFor={name} className="capitalize" >{labelText || name}</Label>
      <Textarea 
      id={name}
      name={name}
      defaultValue={defaultValue}
      rows={5}
      required
      />
      
    </div>
  );
};

export default TextAreaInput;
