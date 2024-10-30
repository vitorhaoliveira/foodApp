import classes from "@/app/meals/page.module.css";
import Link from "next/link";

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Pratos deliciosos, feitos <span className={classes.highlight}>por você</span></h1>
        <p>Escolha seu prato favorito e faça você mesmo. É fácil e divertido!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Compartilhe seu prato favorito
          </Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}

export default MealsPage;
