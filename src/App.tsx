import React from 'react';
import Header from './components/Header';
import './App.css';
import {useEffect, useState} from "react";
import ListNotes from './components/ListNotes';
import {Note} from "./models/note.model";

/*

{
    id: "1",
    title: "Demo Title",
    body: "This is just a demo content",
  }

*/



function App() {

const [notes, setNotes] = useState<Note[]>([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data =>setNotes(data))
  .catch(err => console.log(err));
}, [])


  return (
   <>
   
      <Header />
      <div>
      <ListNotes notes={notes} setNotes={setNotes} />
      </div>
    
    </>
  );
}

export default App;
