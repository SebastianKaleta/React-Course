const header = <h1 className="title">Witaj na stronie!</h1>;

const classBig = "big";

const handleClick = () => alert("działa!");

const main = (
  <div>
    <h1
      person="osoby"
      onClick={
        handleClick
        //       function() {
        //     //()=> tak tez mozna
        //     alert("kliknął");
        //   }
      }
      className="red"
    >
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam
      placeat perspiciatis sint. Eveniet eum minus, perferendis voluptate
      cupiditate doloribus sint vero explicabo voluptates ipsam iure
      perspiciatis alias cumque sit?
    </p>
  </div>
);

const text = "stopka";

const largeText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur inventore natus nihil asperiores qui amet sit vitae saepe. Eveniet voluptate porro debitis. Quod voluptas alias debitis ipsum exercitationem sed nisi?";
const footer = (
  <footer>
    <p className={classBig}>{text}</p>
    {largeText}
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
