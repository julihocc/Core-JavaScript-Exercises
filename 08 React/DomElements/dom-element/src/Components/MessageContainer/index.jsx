import { Message } from "../Message";
import { useEffect } from "react";

export const MessageContainer = () => {
  useEffect(() => {
    console.log("MessageContainer re-rendered");
  } );

  return (
    <div className="container">
      <h2 className="text-secondary">Message Container</h2>
      <Message message={"This is a message"} />
    </div>
  );
};
