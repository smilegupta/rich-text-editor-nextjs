import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";
const editor = () => {
 const [text, setText] = useState("");
    return (
         <ReactQuill
                  onChange={(e) => setText(e)}
                  value={text}
                  placeholder="Something about the group"
                />
    )
}

export default editor
