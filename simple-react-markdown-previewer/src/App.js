import './App.scss';
import React, { useState} from 'react';
import Previewer from './Previewer';

export default function App() {
  const defaultText = 
`# Welcome to my React Markdown Previewer!
## This is a sub-heading... 
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

This is an inline code: \`<div></div> \`

\`\`\`
// test codeblock 
function anotherExample(firstNum, secondNum) {
  return firstNum + secondNum;
}
\`\`\`

* Item1
* Item2
* Item3

> Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you. -- Princess Diana

Images can be embedded: 
![Free Code Camp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Text can also be bolded!**  

For more information on how to use markdown syntax, click [here](https://www.markdownguide.org/basic-syntax/)
`

  const [userInput, setuserInput] = useState(defaultText)

  const handleChange = (event) => {
    setuserInput(event.target.value)
  }

  return (
    <div className="App text-center">
      <textarea id="editor" value={userInput} onChange={handleChange} rows="10" cols="80"></textarea>
      <Previewer markedText={userInput}/>
    </div>
  );
}
