import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["slide-show"]}>
          
        </div>
        <div>
          <div className={classes.hero}>
            <h1>App Food</h1>
            <p>Experimente e compartilhe comida para o mundo inteiro.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Entre na comunidade</Link>
            <Link href="/community">Explore as receitas</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Como funciona?</h2>
          <p>
            App Food é uma plataforma para os gourmets compartilharem seus
            favoritos receitas com o mundo. É um lugar para descobrir novos
            pratos, e para se conectar com outros amantes da comida.
          </p>
          <p>
            App Food é um lugar para descobrir novos pratos e se conectar com
            outros amantes da comida.
          </p>
        </section>

        {/* <section className={classes.section}>
          <h2>Por que App Food?</h2>
          <p>
            App Food é uma plataforma para os gourmets compartilharem seus
            favoritos receitas com o mundo. É um lugar para descobrir novos
            pratos, e para se conectar com outros amantes da comida.
          </p>
          <p>
            App Food é um lugar para descobrir novos pratos e se conectar
            com outros amantes da comida.
          </p>
        </section> */}
      </main>
    </>
  );
}
