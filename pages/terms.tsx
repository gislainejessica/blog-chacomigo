import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth } from '../styles/pages/Article'
import { useRouter } from 'next/router'

export default function Terms() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Termos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Termos de Uso </h2>
          <p>
            <h4>1. Termos </h4>
            Ao acessar ao site ChaComigo, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.

            <br />
            <br />
            <h4> 2. Uso de Licença </h4>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site ChaComigo , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:

            modificar ou copiar os materiais;
            usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
            tentar descompilar ou fazer engenharia reversa de qualquer software contido no site ChaComigo;
            remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou
            transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por ChaComigo a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
            <br />
            <br />
            <h4>  3. Isenção de responsabilidade </h4>
            Os materiais no site da ChaComigo são fornecidos 'como estão'. ChaComigo não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            Além disso, o ChaComigo não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
            <br />
            <br />
            <h4> 4. Limitações </h4>
            Em nenhum caso o ChaComigo ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em ChaComigo, mesmo que ChaComigo ou um representante autorizado da ChaComigo tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            <br />
            <br />
            <h4> 5. Precisão dos materiais </h4>
            Os materiais exibidos no site da ChaComigo podem incluir erros técnicos, tipográficos ou fotográficos. ChaComigo não garante que qualquer material em seu site seja preciso, completo ou atual. ChaComigo pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, ChaComigo não se compromete a atualizar os materiais.
            <br />
            <br />
            <h4> 6. Links </h4>
            O ChaComigo não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por ChaComigo do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            <br />
            <br />
            Modificações
            O ChaComigo pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.

            Lei aplicável
            Estes termos e condições são regidos e interpretados de acordo com as leis do ChaComigo e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
