import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid velit mollitia dolores veritatis provident accusantium vel hic doloremque ducimus, culpa minima quaerat et dolore, a nemo fuga deleniti. Rerum, soluta!"
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Ania Kwiatkowska",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium porro aperiam, autem suscipit, nobis provident laudantium cum quos aspernatur accusantium voluptas soluta iusto error molestiae facilis in cupiditate excepturi!"
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum sunt possimus maiores optio quos deleniti facere earum sit. Dolore molestias odio dolor esse quos laudantium odit assumenda quisquam eaque."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return (
    <>
      <div className="home">{artList}</div>
    </>
  );
};

export default HomePage;
