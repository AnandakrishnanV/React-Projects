import React from "react";

function Main(props) {
  return (
    <main className={props.darkMode ? "main--container dark" : "main--container"}>
      <h1 className="main--title">Fun Facts about Me</h1>
      <ul className="main--fact_list">
        <li>
          Co-created ’Omizza,’ a fusion dish that included an Android app,
          online advertising campaign, and sale and delivery system
        </li>
        <li>
          Upgraded the inventory organization system at family textile-shop,
          converted from pen-and-paper system to a software solution
        </li>
        <li>
          Upgraded the inventory organization system at family textile-shop,
          converted from pen-and-paper system to a software solution
        </li>
        <li>
          Joined with Mannam Swabhiman Sabha Educational Trust during the August
          2018 floods to raise money and secure provisions for relief
        </li>
        <li>
          Origami Enthusiast, an outlet for creativity and honing patience and
          attention to detail
        </li>
      </ul>
    </main>
  );
}

export default Main;
