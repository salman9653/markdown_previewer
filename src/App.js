import React, { useState } from 'react'
import { marked } from 'marked';
import {firstText} from './firstText';

export default function App() {

  marked.setOptions({ breaks: true });

   const [text, setText] = useState(firstText);
    function handelChange(event) {
        setText(event.target.value);
    }
    function markdown() {
        return { __html: marked.parse(text) };
    }
   
    return (
            <div className="container" style={{display : 'flex' , alignItems: "center", justifyContent:"center",flexDirection:"column"}}>
              <textarea
                  onChange={handelChange}
                  id="editor" rows="15" cols="100"
                  value={text}
              >
              </textarea>
               <div id='preview' dangerouslySetInnerHTML={markdown()}></div>              
            </div>
    )
}
