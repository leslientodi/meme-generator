import React from "react";


export default function Meme() {
    let memeImage = ['../images/meme1.jpeg', '../images/meme2.jpeg', '../images/meme3.jpeg']
    const [image, setMeme] = React.useState("")
    function newMeme () {
        const memeOut = memeImage[Math.floor(Math.random()*memeImage.length)]
         setMeme(memeOut)
    }
    return (
        <>
            <form>
                <input className="input-1"></input>
                <input className="input-2"></input><br></br>
                
            </form>
            <button className="button" onClick={newMeme}>Get a new meme🖼️</button>
            <img className="meme-image" src={image}></img>
        </>
        
        
    )
}