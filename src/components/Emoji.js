import { useContext } from "react";
import { EmojiContext } from "./Home.js"

const Emoji = (props) => {

  const { emoji, setEmoji } = useContext(EmojiContext)

  function handleChange() {
    if (emoji == "🤡") {
      setEmoji("👺");
    } else if (emoji == "👺") {
      setEmoji("🤡");
    } else {
      setEmoji("👹");
    }
  }


  return (
    <div>
      <h1>Emoji Thingy</h1>
      <p>{emoji}</p>
      <button onClick={handleChange}>Emoji Chango</button>
    </div>
  )
};



export default Emoji;
