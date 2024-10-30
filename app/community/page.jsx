import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Uma paixão compartilhada:{" "}
          <span className={classes.highlight}>Comida</span>
        </h1>
        <p>
          Junte-se à nossa comunidade e compartilhe suas receitas favoritas!
        </p>
      </header>
      <main className={classes.main}>
        <h2>Vantagens da comunidade</h2>

        <ul className={classes.perks}>
          <li>
            <p>Compartilhe e descubra receitas</p>
            <Image src={mealIcon} alt="A delicious meal" />
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Encontre novos amigos e pessoas que pensam como você</p>
          </li>
          <li>
            <p>Participe de eventos exclusivos</p>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
          </li>
        </ul>
      </main>
    </>
  );
}
