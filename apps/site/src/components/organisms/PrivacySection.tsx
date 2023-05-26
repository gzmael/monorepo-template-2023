import Link from 'next/link'

import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'

const PrivacySection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto min-h-screen break-words px-5 pb-10 pt-24  text-dark-400 md:max-w-screen-md md:px-0 ">
        <Heading size="xl" type="privacy">
          Política de Privacidade e Proteção de Dados Pessoais
        </Heading>

        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase size="md" type="header">
            Seção 1 - Informações Gerais
          </Heading>

          <Text type="textBody" className="my-4">
            A presente Política de Privacidade contém informações sobre coleta,
            uso, armazenamento, tratamento e proteção dos dados pessoais dos
            usuários e visitantes do site{' '}
            <b className="text-dark-500">BAITA SOLUÇÕES DIGITAIS</b>{' '}
            (baitasolucoes.com.br), com a finalidade de demonstrar absoluta
            transparência quanto ao assunto e esclarecer a todos interessados
            sobre os tipos de dados que são coletados, os motivos da coleta e a
            forma como os usuários podem gerenciar ou excluir as suas
            informações pessoais.
          </Text>
          <Text type="textBody" className="my-4">
            Esta Política de Privacidade aplica-se a todos os usuários e
            visitantes do site{' '}
            <b className="text-dark-500">https://www.baita.dev.br</b> e integra
            os Termos e Condições Gerais, devidamente inscrita no CNPJ sob o nº
            17.184.465/0001-42, situado em Rua Iraildes Ferreira Lima, nº 16,
            Alto do Tenente na cidade de Várzea Alegre - Ceará, nominada{' '}
            <b className="text-dark-500">BAITA SOLUÇÕES DIGITAIS</b>.
          </Text>
          <Text type="textBody" className="my-4">
            O presente documento foi elaborado em conformidade com a Lei Geral
            de Proteção de Dados Pessoais (Lei{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="https://www.jusbrasil.com.br/legislacao/612902269/lei-13709-18"
              title="LEI Nº 13.709, DE 14 DE AGOSTO DE 2018."
            >
              13.709/18
            </Link>
            ), o{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="https://www.jusbrasil.com.br/legislacao/117197216/lei-12965-14"
              title="LEI Nº 12.965, DE 23 ABRIL DE 2014."
            >
              Marco Civil da Internet
            </Link>{' '}
            (Lei{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="https://www.jusbrasil.com.br/legislacao/117197216/lei-12965-14"
              title="LEI Nº 12.965, DE 23 ABRIL DE 2014."
            >
              12.965/14
            </Link>
            ) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá
            ser atualizado em decorrência de eventual atualização normativa,
            razão pela qual se convida o usuário a consultar periodicamente esta
            seção.
          </Text>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 2 - Como Recolhemos os dados pessoais do Usuário e do
            Visitante?
          </Heading>

          <Text type="textBody" className="my-4">
            Os dados pessoais do usuário e visitante são recolhidos pela
            plataforma da seguinte forma:
          </Text>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Quando o usuário cria uma conta/perfil na plataforma CLIENTES:
              esses dados são os dados de identificação básicos, como e-mail,
              nome completo e telefone. A partir deles, podemos identificar o
              usuário e o visitante, além de garantir uma maior segurança e
              bem-estar às suas necessidade. Ficam cientes os usuários e
              visitantes de que seu perfil na plataforma não estará acessível a
              todos demais usuários e visitantes da plataforma CLIENTES.
            </li>
            <li>
              Quando um usuário e visitante acessa páginas do site
              https://baita.dev.br OU a plataforma CLIENTES: as informações
              sobre interação e acesso são coletadas pela empresa para garantir
              uma melhor experiência ao usuário e visitante. Estes dados podem
              tratar sobre as palavras-chaves utilizadas em uma busca,
              visualizações de páginas, o navegador que utilizam e seus IPs de
              acesso, dentre outras que poderão ser armazenadas e retidas.
            </li>
          </ul>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 3 - Quais dados Pessoais Recolhemos sobre o Usuário e
            Visitante
          </Heading>

          <Text type="textBody" className="my-4">
            Os dados pessoais do usuário e visitante recolhidos são os
            seguintes:
          </Text>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Dados para a criação da conta/perfil na plataforma CLIENTES:
              e-mail, nome completo e telefone.
            </li>
            <li>
              Dados para otimização da navegação: endereço de IP e acesso a
              páginas.
            </li>
            <li>
              Dados para concretizar transações: dados referentes ao pagamento e
              transações, tais como, número do cartão de crédito e outras
              informações sobre o cartão, além dos pagamentos efetuados.
            </li>
            <li>
              Newsletter: o e-mail cadastrado pelo visitante que optar por se
              inscrever na Newsletter será coletado e armazenado até que o
              usuário solicite o descadastro.
            </li>
          </ul>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 4 - Para que Finalidades Utilizamos os Dados Pessoais do
            Usuário e Visitante
          </Heading>

          <Text type="textBody" className="my-4">
            Os dados pessoais do usuário e do visitante coletados e armazenados
            pela plataforma CLIENTES tem por finalidade:
          </Text>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Bem-estar do usuário e visitante: aprimorar o produto e/ou serviço
              oferecido, facilitar, agilizar e cumprir os compromissos
              estabelecidos entre o usuário e a empresa, melhorar a experiência
              dos usuários e fornecer funcionalidades específicas a depender das
              características básicas do usuário.
            </li>
            <li>
              Melhorias da plataforma: compreender como o usuário utiliza os
              serviços da plataforma, para ajudar no desenvolvimento de negócios
              e técnicas.
            </li>
            <li>
              Comercial: os dados são usados para personalizar o conteúdo
              oferecido e gerar subsídio à plataforma para a melhora da
              qualidade no funcionamento dos serviços.
            </li>
            <li>
              Dados de cadastro: para permitir o acesso do usuário a
              determinados conteúdos da plataforma, exclusivo para usuários
              cadastrados
            </li>
            <li>
              Dados de contrato: conferir às partes segurança jurídica e
              facilitar a conclusão do negócio.
            </li>
          </ul>
          <Text type="textBody" className="my-4">
            O tratamento de dados pessoais para finalidades não previstas nesta
            Política de Privacidade somente ocorrerá mediante comunicação prévia
            ao usuário, de modo que os direitos e obrigações aqui previstos
            permanecem aplicáveis.
          </Text>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 5 - Por quanto tempo os dados pessoais ficam armazenados
          </Heading>

          <Text type="textBody" className="my-4">
            Os dados pessoais do usuário e visitante são armazenados pela
            plataforma durante o período necessário para a prestação do serviço
            ou o cumprimento das finalidades previstas no presente documento,
            conforme o disposto no inciso{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="https://www.jusbrasil.com.br/topicos/200399061/inciso-i-do-artigo-15-da-lei-n-13709-de-14-de-agosto-de-2018"
              title="Inciso I do Artigo 15 da Lei nº 13.709 de 14 de Agosto de 2018"
            >
              I
            </Link>{' '}
            do artigo{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="https://www.jusbrasil.com.br/topicos/200399064/artigo-15-da-lei-n-13709-de-14-de-agosto-de-2018"
              title="Artigo 15 da Lei nº 13.709 de 14 de Agosto de 2018"
            >
              15
            </Link>{' '}
            da Lei{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="https://www.jusbrasil.com.br/legislacao/612902269/lei-13709-18"
              title="LEI Nº 13.709, DE 14 DE AGOSTO DE 2018."
            >
              13.709/18
            </Link>
            .
          </Text>
          <Text type="textBody" className="my-4">
            Os dados podem ser removidos ou anonimizados a pedido do usuário,
            excetuando os casos em que a lei oferecer outro tratamento.
          </Text>
          <Text type="textBody" className="my-4">
            Ainda, os dados pessoais dos usuários apenas podem ser conservados
            após o término de seu tratamento nas seguintes hipóteses previstas
            no artigo 16 da referida lei:
          </Text>
          <Text type="textBody" className="my-4">
            I - cumprimento de obrigação legal ou regulatória pelo controlador;
          </Text>
          <Text type="textBody" className="my-4">
            II - estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
          </Text>
          <Text type="textBody" className="my-4">
            III - transferência a terceiro, desde que respeitados os requisitos
            de tratamento de dados dispostos nesta Lei;
          </Text>
          <Text type="textBody" className="my-4">
            IV - uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </Text>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 6 - Segurança dos Dados Pessoais Armazenados
          </Heading>

          <Text type="textBody" className="my-4">
            A plataforma se compromete a aplicar as medidas técnicas e
            organizativas aptas a proteger os dados pessoais de acessos não
            autorizados e de situações de destruição, perda, alteração,
            comunicação ou difusão de tais dados.{' '}
          </Text>
          <Text type="textBody" className="my-4">
            Os dados relativas a cartões de crédito são criptografados usando a
            tecnologia secure socket layer (SSL) que garante a transmissão de
            dados de forma segura e confidencial, de modo que a transmissão dos
            dados entre o servidor e o usuário ocorre de maneira cifrada e
            encriptada.
          </Text>
          <Text type="textBody" className="my-4">
            A plataforma não se exime de responsabilidade por culpa exclusiva de
            terceiro, como em caso de ataque de hackers ou crackers, ou culpa
            exclusiva do usuário, como no caso em que ele mesmo transfere seus
            dados a terceiros. O site se compromete a comunicar o usuário em
            caso de alguma violação de segurança dos seus dados pessoais.
          </Text>
          <Text type="textBody" className="my-4">
            Os dados pessoais armazenados são tratados com confidencialidade,
            dentro dos limites legais. No entanto, podemos divulgar suas
            informações pessoais caso sejamos obrigados pela lei para fazê-lo ou
            se você violar nossos Termos de Serviço.
          </Text>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 7 - Cookies ou Dados de Navegação
          </Heading>

          <Text type="textBody" className="my-4">
            Os cookies referem-se a arquivos de texto enviados pela plataforma
            ao computador do usuário e visitante e que nele ficam armazenados,
            com informações relacionadas à navegação no site. Tais informações
            são relacionadas aos dados de acesso como local e horário de acesso
            e são armazenadas pelo navegador do usuário e visitante para que o
            servidor da plataforma possa lê-las posteriormente a fim de
            personalizar os serviços da plataforma.
          </Text>
          <Text type="textBody" className="my-4">
            O usuário e o visitante da plataforma CLIENTES manifesta conhecer e
            aceitar que pode ser utilizado um sistema de coleta de dados de
            navegação mediante à utilização de cookies.
          </Text>
          <Text type="textBody" className="my-4">
            O cookie persistente permanece no disco rígido do usuário e
            visitante depois que o navegador é fechado e será usado pelo
            navegador em visitas subsequentes ao site. Os cookies persistentes
            podem ser removidos seguindo as instruções do seu navegador. Já o
            cookie de sessão é temporário e desaparece depois que o navegador é
            fechado. É possível redefinir seu navegador da web para recusar
            todos os cookies, porém alguns recursos da plataforma podem não
            funcionar corretamente se a capacidade de aceitar cookies estiver
            desabilitada.
          </Text>
          <Text type="textBody" className="my-4">
            A qualquer momento, o usuário poderá revogar seu consentimento
            quanto aos cookies, pelo que deverá apagar os cookies das páginas da
            BAITA SOLUÇÕES DIGITAIS utilizando as configurações de seu navegador
            de preferência. Para mais informações sobre como proceder em relação
            à gestão dos cookies nos navegadores:
          </Text>
          <ul>
            <li>
              Internet Explorer:{' '}
              <Link
                className="text-lg text-indigo-400 hover:text-indigo-300"
                href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies
              </Link>
            </li>
            <li>
              Mozilla Firefox:{' '}
              <Link
                className="text-lg text-indigo-400 hover:text-indigo-300"
                href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam
              </Link>
            </li>
            <li>
              Google Chrome:{' '}
              <Link
                className="text-lg text-indigo-400 hover:text-indigo-300"
                href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=pt-BR
              </Link>
            </li>
            <li>
              Safari:{' '}
              <Link
                className="text-lg text-indigo-400 hover:text-indigo-300"
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.apple.com/pt-br/guide/safari/sfri11471/mac
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 8 - Consentimento
          </Heading>

          <Text type="textBody" className="my-4">
            Ao utilizar os serviços e fornecer as informações pessoais na
            plataforma, o usuário está consentindo com a presente Política de
            Privacidade.
          </Text>
          <Text type="textBody" className="my-4">
            O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus
            direitos de cancelar seu cadastro, acessar e atualizar seus dados
            pessoais e garante a veracidade das informações por ele
            disponibilizadas.
          </Text>
          <Text type="textBody" className="my-4">
            O usuário tem direito de retirar o seu consentimento a qualquer
            tempo, para tanto deve entrar em contato através do e-mail{' '}
            <Link
              className="text-lg text-indigo-400 hover:text-indigo-300"
              href="mailto:contato@baitasolucoes.com.br"
            >
              contato@baitasolucoes.com.br
            </Link>
            .
          </Text>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 9 - Alterações para essa Política de Privacidade
          </Heading>

          <Text type="textBody" className="my-4">
            Reservamos o direito de modificar essa Política de Privacidade a
            qualquer momento, então, é recomendável que o usuário e visitante
            revise-a com frequência.
          </Text>
          <Text type="textBody" className="my-4">
            As alterações e esclarecimentos vão surtir efeito imediatamente após
            sua publicação na plataforma. Quando realizadas alterações os
            usuários serão notificados. Ao utilizar o serviço ou fornecer
            informações pessoais após eventuais modificações, o usuário e
            visitante demonstra sua concordância com as novas normas.{' '}
          </Text>
          <Text type="textBody" className="my-4">
            Diante da fusão ou venda da plataforma à outra empresa os dados dos
            usuários podem ser transferidas para os novos proprietários para que
            a permanência dos serviços oferecidos.
          </Text>
        </div>
        <div className="my-4 text-lg md:text-base">
          <Heading hasUpperCase type="header" size="md">
            Seção 10 - Jurisdição para Resolução de Conflitos
          </Heading>

          <Text type="textBody" className="my-4">
            Para a solução de controvérsias decorrentes do presente instrumento
            será aplicado integralmente o Direito brasileiro.
          </Text>
          <Text type="textBody" className="my-4">
            Os eventuais litígios deverão ser apresentados no foro da comarca em
            que se encontra a sede da empresa.
          </Text>
        </div>
        <footer>
          <Text type="textBody" className="my-4">
            <em>
              Atualizado em 2 de Maio de 2023
              <br />
              Equipe Baita Soluções
            </em>
          </Text>
        </footer>
      </div>
    </section>
  )
}

export { PrivacySection }
