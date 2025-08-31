import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import { LabelText } from "./Formulario.jsx";
export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <div>
        <LabelText />
        </div>
      <div>
        <TwitterFollowCard
          formatUserName={formatUserName}
          isFollowing={true}
          userName="elisauldev"
          name="Elisaul Velasquez"
        />

        <TwitterFollowCard
          formatUserName={formatUserName}
          isFollowing={false}
          userName="midudev"
          name="Miguel Angel Duran"
        />

        <TwitterFollowCard
          formatUserName={formatUserName}
          isFollowing={false}
          userName="mouredev"
          name="Brais Moure"
        />
      </div>
    </section>
  );
}
