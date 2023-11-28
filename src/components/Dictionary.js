import { useState } from "react";
import Card from 'react-bootstrap/Card';

export const Dictionary = () => {
  const [items, setItem] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    if (event.target.value === "") {
      setItem([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Word not found");
      }
      return response.json();
    })
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="posts-container">
      <h2 className="cta-header">
        Everything about words, <br />
        is one click away!
      </h2>
      <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a word"
            type="text"
            onChange={handleChange}
          />
      </form>
      {items.map((item) => {
         const id = crypto.randomUUID();
        return (
            <Card className="post-card" key={id}>
            <Card.Header>Result</Card.Header>
            <Card.Body>
              <Card.Title>  {item.word}
                    &nbsp;({item.meanings[0].partOfSpeech})</Card.Title>
              <Card.Text>
               {item.phonetic}
              </Card.Text>
                <Card.Text>
                {item.meanings[0].definitions[0].definition}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
