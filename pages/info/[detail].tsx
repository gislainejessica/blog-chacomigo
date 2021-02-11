import Head from 'next/head'

import Menu from '../../components/Header'
import Footer from '../../components/Footer'
// import Card from '../../components/Card'

import { Container, MaxWidth } from '../../styles/pages/Article'
import { useRouter } from 'next/router'

export default function Info() {
  const router = useRouter()
  const { detail } = router.query
  const tagInfo = {

    "feminismo": "É um conjunto de movimentos políticos, sociais, ideologias e filosofias que têm como objetivo comum: direitos equânimes\
    (iguais) e uma vivência humana por meio do empoderamento feminino e da libertação de padrões patriarcais, baseados em normas de gênero. \
    Envolve diversos movimentos, teorias e filosofias que advogam pela igualdade entre homens e mulheres, além de promover os direitos das\
    mulheres e seus interesses.De acordo com Maggie Humm e Rebecca Walker, a história do feminismo pode ser dividida em três \
    'ondas'. A primeira teria ocorrido no século XIX e início do século XX, a segunda nas décadas de 1960 e 1970 e a terceira na década \
    de 1990 até a atualidade.A teoria feminista surgiu destes movimentos femininos e se manifesta em diversas disciplinas como a \
    geografia feminista, a história feminista e a crítica literária feminista.",

    "desconstrucao": " Ação de desconstruir, de desfazer a construção de alguma coisa: a desconstrução de um templo budista.\
    Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. \
    Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. \
    Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,\
    sendo impossível determinar o sentido real do discurso; desconstrucionismo. “Não existem fatos, apenas interpretações”. ",

    "violencia": "Violência é definida pela Organização Mundial da Saúde como 'o uso intencional de força física ou poder, \
    ameaçados ou reais, contra si mesmo, contra outra pessoa ou contra um grupo ou comunidade, que resultem ou tenham grande \
    probabilidade de resultar em ferimento, morte, dano psicológico, mau desenvolvimento ou privação', embora o grupo reconheça\
    que a inclusão de 'uso do poder' em sua definição expande a compreensão convencional da palavra.",

    "machismo": "O machismo é um preconceito, expresso por opiniões e atitudes, que se opõe à igualdade de direitos entre os gêneros,\
    favorecendo o gênero masculino em detrimento ao feminino. Ou seja, é uma opressão, nas suas mais diversas formas, das mulheres \
    feita pelos homens. Na prática, uma pessoa machista é aquela que acredita que homens e mulheres têm papéis distintos na sociedade,\
    que a mulher não pode ou não deve se portar e ter os mesmo direitos de um homem ou que julga a mulher como inferior ao homem \
    em aspectos físicos, intelectuais e sociais.",

    "revolucao": "O conceito de revolução é entendido, comumente, como uma transformação radical de determinada estrutura política, social, \
    econômica, cultural ou tecnológica, isto é, tudo o que diz respeito à vida humana. Tal conceito é fundamental para se entender os períodos \
    históricos moderno e contemporâneo.",

    "politicas_publicas": " Conforme definição corrente, políticas públicas são conjuntos de programas,\
    ações e decisões tomadas pelos governos (nacionais, estaduais ou municipais) com a participação, \
    direta ou indireta, de entes públicos ou privados que visam assegurar determinado direito de \
    cidadania para vários grupos da sociedade ou para determinado segmento social, cultural, étnico ou econômico.\
    Ou seja, correspondem a direitos assegurados na Constituição. Um programa da Prefeitura que esteja\
    beneficiando seu bairro, por exemplo, é uma política pública. A educação, a saúde, o meio ambiente\
    e a água são direitos universais, assim, para assegurá-los e promovê-los estão constituídas pela \
    Constituição Federal as políticas públicas de educação e saúde, por exemplo.",

    "psicologia": "Psicologia é uma profissão, disciplina acadêmica e ciência que trata da mente, do estudo e análise \
    de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações.\
    A psicologia tem como objetivo imediato a compreensão de grupos e indivíduos tanto pelo estabelecimento\
    de princípios universais como pelo estudo de casos específicos, e tem, segundo alguns, como objetivo final o benefício geral da sociedade.\
    Um pesquisador ou profissional desse campo é conhecido como psicólogo, podendo ser classificado como cientista social, comportamental ou cognitivo. \
    A função dos psicólogos é tentar compreender o papel das funções mentais no comportamento individual e social, estudando \
    também os processos fisiológicos e biológicos que acompanham os comportamentos e funções cognitivas.",

    "mulher": "Uma mulher (do latim muliere) é um ser humano adulto do sexo feminino. Na infância, normalmente\
     é denominada em português como menina; na adolescência e juventude, como moça ou rapariga (sendo pejorativo o uso deste último no Brasil); \
     na fase adulta, simplesmente como mulher ou senhora; na velhice, além dos dois termos anteriores, pode ser chamada anciã. ",

    "auto_estima": "A própria palavra tem muito a ensinar-nos: auto (relacionado à si mesmo, qualquer palavra seguida dela faz referência a quem a diz) \
    e estima (verbo que significa o ato de gostar/cuidar/desejar). Ou seja, o ato de desejar ou gostar de si mesmo.",

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
            {detail == "desconstrucao" && tagInfo["desconstrucao"]}
            {detail == "feminismo" && tagInfo["feminismo"]}
            {detail == "violencia" && tagInfo["violencia"]}
            {detail == "machismo" && tagInfo["machismo"]}
            {detail == "revolucao" && tagInfo["revolucao"]}
            {detail == "politicas_publicas" && tagInfo["politicas_publicas"]}
            {detail == "psicologia" && tagInfo["psicologia"]}
            {detail == "mulher" && tagInfo["mulher"]}
            {detail == "auto_estima" && tagInfo["auto_estima"]}
          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
