import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth } from '../styles/pages/Article'

export default function CodeConduct() {
  return (
    <>
      <Head>
        <title>Código de Conduta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Código de Conduta </h2>
          <p>
            A comunidade ChaComigo (CC) se dedica a fornecer uma experiência livre de assédio para todos,
            independentemente do gênero, identidade e expressão de gênero, orientação sexual, deficiência, aparência física,
            tamanho do corpo, raça ou religião. Não toleramos assédio de participantes de nenhuma forma.

            Este código de conduta se aplica a todos os espaços patrocinados pelo ChaComigo, incluindo nosso blog, listas de e-mail,
            e wiki, bem como quaisquer outros espaços que o ChaComigo hospeda, tanto online quanto offline.
            <br />
            <br />
            Qualquer um que viole
            este código de conduta pode ser sancionado ou expulso desses espaços a critério da Equipe Anti-Abuso da ChaComigo.

            Alguns espaços patrocinados pelo ChaComigo podem ter regras adicionais em vigor, que serão claramente disponibilizadas aos participantes.
            Os participantes são responsáveis ​​por conhecer e cumprir essas regras.

            <br />
            <br />
            <h4> Definições </h4>
            O assédio inclui:
            <br />
            - Comentários ofensivos relacionados a gênero, identidade e expressão de gênero, orientação sexual, deficiência, doença mental,
            neuro (a) tipicidade, aparência física, tamanho do corpo, raça ou religião
            <br />
            - Comentários indesejados sobre as escolhas e práticas de estilo de vida de uma pessoa, incluindo aquelas relacionadas a alimentação, saúde, paternidade, drogas e emprego.
            <br />
            - Adulteração deliberada de gênero ou uso de nomes "mortos" ou rejeitados
            <br />
            - Imagens ou comportamento sexual gratuito ou fora do assunto em espaços onde não são apropriados
            <br />
            - Contato físico e contato físico simulado (por exemplo, descrições textuais como “* abraço *” ou “* esfregar nas costas *”) sem consentimento ou após um pedido para parar.
            <br />
            - Ameaças de violência
            <br />
            - Incitação à violência contra qualquer indivíduo, incluindo encorajar uma pessoa a cometer suicídio ou se envolver em automutilação
            <br />
            - Intimidação deliberada
            <br />
            - Perseguindo ou seguindo
            <br />
            - Fotografia ou gravação de assédio, incluindo registro de atividades on-line para fins de assédio
            <br />
            - Interrupção sustentada da discussão
            <br />
            - Atenção sexual indesejada
            <br />
            - Padrão de contato social inadequado, como solicitar / assumir níveis inadequados de intimidade com outras pessoas
            <br />
            - Comunicação individual continuada após solicitações de cessação
            <br />
            <br />
            Deliberar "revelação" de qualquer aspecto da identidade de uma pessoa sem seu consentimento, exceto quando necessário para proteger
            outros membros do CC ou outras pessoas vulneráveis ​​de abuso intencional
            Publicação de comunicação privada sem assédio
            <br />
            <br />
            A comunidade do Chacomigo prioriza a segurança das pessoas marginalizadas em vez do conforto das pessoas privilegiadas.
            A Equipe Anti-Abuso do Chacomigo não atenderá a reclamações relacionadas a:
            Ismos de ‘reverso’, incluindo ‘racismo reverso’, ‘sexismo reverso’ e ‘cisfobia’ (porque essas coisas não existem)
            Comunicação razoável de limites, como "me deixe em paz", "vá embora" ou "Não estou discutindo isso com você".
            Recusa em explicar ou debater conceitos de justiça social
            Comunicar em um 'tom' que você não acha adequado
            Criticar comportamentos ou suposições racistas, sexistas, cissexistas ou de outra forma opressora
            Comunicando
            Se você está sendo assediado por um membro da comunidade do Chacomigo, observe que outra pessoa está sendo assediada,
            ou se tiver qualquer outra dúvida, entre em contato com a Equipe Anti-Abuso do Chacomigo. Se a pessoa que está assediando você estiver na equipe,
            eles se recusarão a lidar com o seu incidente. Responderemos o mais prontamente possível.
            <br />
            <br />

            Este código de conduta se aplica a espaços patrocinados pelo ChaComigo, mas se você estiver sendo assediado por um membro do
            comunidade CC fora dos nossos espaços, ainda queremos saber. Aceitaremos todas as denúncias de assédio feitas de boa-fé
            por membros da comunidade ChaComigo, especialmente blogueiras, a sério. Isso inclui assédio fora de nossos espaços e assédio
            que ocorreu a qualquer momento. A equipe de abuso reserva-se o direito de excluir pessoas da comunidade CC
            com base em seu comportamento anterior, incluindo comportamento fora dos espaços do CC e comportamento em relação a pessoas que não fazem parte da comunidade do CC.
            <br />
            <br />
            A fim de proteger os voluntários de abusos e esgotamento, nos reservamos o direito de rejeitar qualquer denúncia que acreditamos ter sido feita
            de má fé. A Equipe Anti-Abuso do Chacomigo não está aqui para explicar diferenciais de poder ou outros conceitos básicos de justiça social para você.
            Relatórios destinados a silenciar críticas legítimas podem ser excluídos sem resposta.
            <br />
            <br />
            Respeitaremos os pedidos de confidencialidade com o propósito de proteger as vítimas de abuso. A nosso critério,
            podemos nomear publicamente uma pessoa sobre a qual recebemos reclamações de assédio ou advertir terceiros sobre elas em particular,
            se acreditarmos que isso aumentará a segurança dos membros do CC ou do público em geral. Não nomearemos vítimas de assédio sem seu consentimento afirmativo.
            <br />
            <br />
            <h4>  Consequências </h4>
            Os participantes solicitados a interromper qualquer comportamento de assédio devem obedecer imediatamente.

            Se um participante se envolver em comportamento de assédio, a Equipe Anti-Abuso do Chacomigo pode tomar as medidas que julgar apropriadas,
            até e incluindo a expulsão de todos os espaços do Chacomigo e a identificação da participante como assediadora de outros membros do CC ou do público em geral.
            <br />
            <br />
            Adote um código de conduta em sua comunidade
            Se você gostaria de adotar uma política semelhante a esta em sua comunidade, consulte nossos recursos anti-assédio da comunidade,
            incluindo uma política livremente reutilizável e modificável.
          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
