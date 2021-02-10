import Head from 'next/head'

import Menu from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

import { Container, MaxWidth } from '../../styles/pages/Article'
import { useRouter } from 'next/router'

export default function Info() {
  const router = useRouter()
  const { detail } = router.query
  const tagInfo = {
    "desconstrucao": " Ação de desconstruir, de desfazer a construção de alguma coisa: a desconstrução de um templo budista.\
    Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. \
    Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. \
    Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,\
    sendo impossível determinar o sentido real do discurso; desconstrucionismo. “Não existem fatos, apenas interpretações”. ",

    "feminismo": "É um conjunto de movimentos políticos, sociais, ideologias e filosofias que têm como objetivo comum: direitos equânimes\
    (iguais) e uma vivência humana por meio do empoderamento feminino e da libertação de padrões patriarcais, baseados em normas de gênero. \
    Envolve diversos movimentos, teorias e filosofias que advogam pela igualdade entre homens e mulheres, além de promover os direitos das\
    mulheres e seus interesses.De acordo com Maggie Humm e Rebecca Walker, a história do feminismo pode ser dividida em três \
    'ondas'. A primeira teria ocorrido no século XIX e início do século XX, a segunda nas décadas de 1960 e 1970 e a terceira na década \
    de 1990 até a atualidade.A teoria feminista surgiu destes movimentos femininos e se manifesta em diversas disciplinas como a \
    geografia feminista, a história feminista e a crítica literária feminista.",

    "machismo": "03",
    "violência": "04",
  }

  const data = {
    info: [
      "Desconstrução: Ação de desconstruir, de desfazer a construção de alguma coisa: a desconstrução de um templo budista.\
      Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. \
      Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. \
      Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,\
      sendo impossível determinar o sentido real do discurso; desconstrucionismo. “Não existem fatos, apenas interpretações”.",

      "Feminismo, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",

      "Machismo, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",

      "Violência, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",

      "Revolução, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",

      "Policas Publicas: Conforme definição corrente, políticas públicas são conjuntos de programas,\
      ações e decisões tomadas pelos governos (nacionais, estaduais ou municipais) com a participação, \
      direta ou indireta, de entes públicos ou privados que visam assegurar determinado direito de \
      cidadania para vários grupos da sociedade ou para determinado segmento social, cultural, étnico ou econômico.\
      Ou seja, correspondem a direitos assegurados na Constituição. Um programa da Prefeitura que esteja\
      beneficiando seu bairro, por exemplo, é uma política pública. A educação, a saúde, o meio ambiente\
      e a água são direitos universais, assim, para assegurá-los e promovê-los estão constituídas pela \
      Constituição Federal as políticas públicas de educação e saúde, por exemplo.",

      "Psicologia, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",

      "Mulher, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",

      "Auto-estima, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
    ]
  }
  return (
    <>
      <Head>
        <title>Artigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Glossário: {detail} </h2>
          <p>
            {/* {detail == "desconstrucao" && data.info[0]} */}
            {detail == "desconstrucao" && tagInfo["desconstrucao"]}
            {/* {detail == "feminismo" && data.info[2]} */}
            {detail == "feminismo" && tagInfo["feminismo"]}
            {detail == "machismo" && data.info[1]}
            {detail == "violencia" && data.info[3]}
            {detail == "revolucao" && data.info[8]}
            {detail == "politicas_publicas" && data.info[5]}
            {detail == "psicologia" && data.info[4]}
            {detail == "mulher" && data.info[6]}
            {detail == "auto_estima" && data.info[7]}
          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
