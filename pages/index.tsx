import Head from 'next/head'
import Image from 'next/image'

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

        <div className={styles.tags}>
          <div className={styles.tag}>
            <p> Feminismo </p>
          </div>
          <div className={styles.tag}>
            <p> Movimento Feminista </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              className={styles.image}
              alt="Picture of the blog"
              unsized
              src='/feminismo.jpg'
            />
          </div>
        </div>

        <h1>Feminismo - O que significa? </h1>

        <h4> por Gislaine Jéssica há 3 dias </h4>
        <div>
          <h4> 2min de leitura </h4>
        </div>
        <p>
          A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

          E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

          Acompanhe!
          </p>
        <p>
          A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

          E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

          Acompanhe!
          </p>
        <p>
          A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

          E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

          Acompanhe!
          </p>

      </main>

      <footer className={styles.footer}>
        <p>
          ChaComigo Blog
        </p>
        <p>
          © 2020 Blog da ChaComigo. Feito com  Published with Next.
        </p>
      </footer>
    </div>
  )
}
