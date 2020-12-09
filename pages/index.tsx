import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Nav from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aprendendo Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>

        <div className={styles.content}>
          <div className={styles.image}>
            <h2> Minha imagem</h2>
          </div>

          <div className={styles.tags}>
            <h3> tag1 </h3>
            <h3> tag2 </h3>
          </div>
          <h1> Cha Comigos Artigos Interessantes</h1>
          <h3> Autor do blog </h3>
          <div>
            <h4> tempo de leitura </h4>
          </div>
          <p>
            A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

            E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

            Acompanhe!
          </p>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
