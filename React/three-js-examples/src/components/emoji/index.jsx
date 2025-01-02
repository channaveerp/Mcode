// import React, { useState } from "react";
// import { Picker } from "emoji-mart";

// export default function EmojiMart() {
//   const [emoji, setEmoji] = useState(null);

//   const handleEmojiSelect = (emoji) => {
//     setEmoji(emoji.native); // Set the selected emoji
//   };

//   return (
//     <div>
//       <h1>Choose an Emoji</h1>
//       <Picker onEmojiSelect={handleEmojiSelect} />
//       {emoji && <p>Selected Emoji: {emoji}</p>}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Picker from "emoji-picker-react";

// export default function EmojiPicker() {
//   const [showPicker, setShowPicker] = useState(false);
//   const [emoji, setEmoji] = useState(""); // Initialize emoji as an empty string

//   const onEmojiClick = (emojiObject) => {
//     console.log(
//       "Selected Emoji:",
//       emojiObject?.emoji,
//       emojiObject?.native,
//       emojiObject
//     ); // Check emojiObject contents
//     if (emojiObject && emojiObject.emoji) {
//       setEmoji((prevInput) => prevInput + emojiObject?.emoji); // Concatenate emoji
//       setShowPicker(false); // Close picker after selection
//     }
//   };

//   return (
//     <div>
//       <p>Selected Emoji: {emoji}</p>
//       <button onClick={() => setShowPicker((val) => !val)}>Emoji</button>
//       {showPicker && (
//         <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
//       )}
//     </div>
//   );
// }

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function EmojiPicker() {
  return <Picker data={data} onEmojiSelect={console.log} />;
}
