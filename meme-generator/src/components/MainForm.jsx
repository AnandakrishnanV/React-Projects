import { useState, useEffect } from "react";

export default function MainForm() {
  const [allMemeImages, setAllMemeImages] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data));
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getRandomImage() {
    var url =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleInput(event) {
    const { name, value } = event.target;

    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleInput}
          value={meme.topText}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleInput}
          value={meme.bottomText}
          name="bottomText"
        />
        <button onClick={getRandomImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
