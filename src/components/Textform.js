import { useState } from "react";


export default function Textform(props) {
  // starte
  let [text,setText]=useState("hello");

  // funstion
  function handleuppercase(){
    console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handlelowercase(){
    let newText = text.toLowerCase();
    setText(newText);
  }
  function cleartext(){
    let newText = '';
    setText(newText);
    
  }
  function handleonchange(event){
    setText(event.target.value);
  
  }
  function dark(){


    let changetext=document.getElementById("textcolor");
    changetext.classList.toggle("text-white");
    changetext.classList.toggle("text-black");
    let changecolor=document.getElementById("color");
    changecolor.classList.toggle("bg-gray-800");
    
    
  }

  function selection(){
    let selecttext=document.getElementById("select");
    selecttext.select();
    navigator.clipboard.writeText(selecttext.value);
  
  }
 
    return (
      <>
      <div className="bg-gray-800 " id="color">
        <div className=" h-[100vh] p-12 text-white" id="textcolor">
            <div className="m-5 mx-auto container w-full" >
              <h1 className='font-bold w-full text-center my-5 text-lg font-serif '>{props.heading}</h1>
              <textarea className='text-gray-800  border border-black block mx-auto   w-full  bg-slate-50' id="select" onChange={handleonchange} value={text} rows='8' placeholder="" /><br />
              <div className="md:flex">
              <button className=' block mx-auto border border-black bg-blue-400 text-white w-60 rounded-md p-2 hover:brightness-75 m-2 '  onClick={handleuppercase}>convert to Upper-case</button>
              <button className=' block mx-auto border border-black bg-blue-400 text-white w-60 rounded-md p-2 hover:brightness-75 m-2 '  onClick={cleartext}>Clear text</button>
              <button className=' block mx-auto border border-black bg-blue-400 text-white w-60 rounded-md p-2 hover:brightness-75 m-2 '  onClick={handlelowercase}>convert to Lower-case</button>
              <button className=' block mx-auto border border-black bg-blue-400 text-white w-60 rounded-md p-2 hover:brightness-75 m-2 '  onClick={selection}>copy</button>
            </div>
        </div>
        <p className="text-center mt-12 bg-white max-w-xs mx-auto text-black">{text.length} alpabhets</p>
        <button className='mt-12 block mx-auto border border-black bg-blue-400 text-white w-50 rounded-md p-2 hover:brightness-75 w-full' onClick={dark}>change-color</button>
        </div>

      </div>
    </>

  )
}

