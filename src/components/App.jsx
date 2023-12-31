import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const createEntry = (entry) => {
  return (
    <Entry
      key={entry.id}
      name={entry.name}
      emoji={entry.emoji}
      meaning={entry.meaning}
    />
  );
}

const App = () => {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
        
    </div>
  );
}

export default App;
