import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10" data-animate>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-5 bg-gold rounded-full shrink-0" />
        <h2 className="font-heading font-semibold text-white-soft" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
          {title}
        </h2>
      </div>
      <div className="pl-4 border-l border-white/5">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-heading font-medium text-gold/80 text-sm mb-2">{title}</h3>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-sm text-white-soft/65 leading-relaxed mb-3">{children}</p>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="font-body text-sm text-white-soft/65 leading-relaxed flex gap-2">
      <span className="text-gold/60 mt-0.5 shrink-0">›</span>
      <span>{children}</span>
    </li>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-1.5 mb-3">{children}</ul>;
}

export default function PoliticaPrivacidade() {
  useScrollAnimation();

  return (
    <>
      <SEO
        title="Política de Privacidade | Marco Investimentos"
        description="Política de Privacidade da Marco Investimentos. Saiba como tratamos seus dados pessoais."
        canonical="/lgpd/politica-de-privacidade"
      />
      <Header />

      {/* Hero */}
      <section className="relative bg-dark-grey pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black-deep/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />
        <div className="relative z-10 container mx-auto">
          <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
          <div className="max-w-[620px]">
            <p className="font-body text-xs text-gold uppercase tracking-widest mb-3 animate-fade-in-up">LGPD</p>
            <h1
              className="font-heading font-semibold text-white-soft leading-tight mb-6 animate-fade-in-up animate-delay-150"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Política de Privacidade e Proteção de Dados Pessoais
            </h1>
            <p className="font-body text-sm text-white-soft/50 animate-fade-in-up animate-delay-300">
              Publicada em: 19 de julho de 2023
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black-deep py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">

            {/* Intro card */}
            <div
              className="rounded-2xl p-7 mb-12"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}
              data-animate
            >
              <P>
                A Marco Investimentos é uma empresa de Agentes Autônomos de Investimentos devidamente registrada na
                Comissão de Valores Mobiliários, atuando no mercado financeiro credenciada à XP Inc. Nós auxiliamos as
                pessoas atingirem seus objetivos financeiros por meio da nossa assessoria exclusiva.
              </P>
              <P>
                Para que consigamos alcançar nossos objetivos, a Marco Investimentos necessita realizar o tratamento de
                alguns dados pessoais. Por prezarmos sempre pela transparência de todos os nossos processos, trazemos a
                presente Política de Privacidade e Proteção de Dados para você entender de maneira descomplicada como
                cuidamos e tratamos os seus dados pessoais.
              </P>
              <P>
                Caso reste alguma dúvida, não hesite em questionar nosso Encarregado pela Proteção de Dados:{" "}
                <a href="mailto:dpo@marcoinvestimentos.com.br" className="text-gold/80 hover:text-gold transition-colors">
                  dpo@marcoinvestimentos.com.br
                </a>
              </P>
            </div>

            <div className="h-[1px] bg-gold/10 mb-12" />

            <Section title="Objetivo da Política">
              <P>
                A presente Política de Privacidade e Proteção de Dados tem o propósito de demonstrar para você, Titular
                de dados, de que forma a Marco Investimentos se preocupa com a sua privacidade e realiza o tratamento
                dos seus dados. Objetivamos demonstrar nossos princípios e valores sobre o tema de forma transparente.
              </P>
              <P>
                A Marco Investimentos tem a missão de respeitar e resguardar sua privacidade, respeitando todas as
                legislações aplicáveis no Brasil que versam sobre este tema, em especial a Lei Geral de Proteção de
                Dados (Lei 13.709), o Marco Civil da Internet (Lei 12.965) e o Código do Consumidor (Lei 8.078).
              </P>
            </Section>

            <Section title="Dados Pessoais e Tratamento de Dados">
              <SubSection title="O que são dados pessoais?">
                <P>
                  Dado pessoal é toda e qualquer informação relacionada à pessoa física que a torne identificada ou
                  identificável.
                </P>
                <Ul>
                  <Li>
                    <strong className="text-white-soft/80">Dados pessoais identificados:</strong> informação ligada
                    diretamente à pessoa (ex.: nome completo, CPF, RG, CNH).
                  </Li>
                  <Li>
                    <strong className="text-white-soft/80">Dados pessoais identificáveis:</strong> dados que dentro de
                    um contexto permitem identificação (ex.: IP, profissão, estado civil, endereço residencial).
                  </Li>
                </Ul>
              </SubSection>
              <SubSection title="Tratamento de dados">
                <P>
                  Tratamento de Dados se refere a toda e qualquer operação realizada envolvendo dados pessoais, como:
                  coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição,
                  processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação,
                  modificação, comunicação, transferência, difusão ou extração.
                </P>
              </SubSection>
            </Section>

            <Section title="Agentes do Tratamento">
              <SubSection title="Controlador">
                <P>
                  O Controlador define o que será feito com os dados. Nesta Política o Controlador é a empresa{" "}
                  <strong className="text-white-soft/80">
                    Marco Agente Autônomo de Investimentos Ltda
                  </strong>
                  , inscrita no CNPJ sob o nº 32.383.761/0001-66, com sede na Av. Dom Joaquim, 1515 – Sala 02 – Tres
                  Vendas, Pelotas – RS, 96020-260.
                </P>
              </SubSection>
              <SubSection title="Operadores">
                <P>
                  Operador é o terceiro que realiza o tratamento dos dados pessoais em nome do Controlador. A Marco
                  Investimentos se relaciona com empresas que garantem a aplicação de medidas necessárias à proteção
                  dos dados pessoais tratados.
                </P>
                <P>
                  Para realizar serviços de Assessoria de Investimentos, atuamos como Operador conforme instruções da
                  XP Investimentos (Controlador), garantindo segurança e privacidade para os clientes.
                </P>
              </SubSection>
              <SubSection title="Titulares e Encarregado">
                <P>
                  <strong className="text-white-soft/80">Titular</strong> é a pessoa física a qual os dados pessoais se
                  referem — neste caso, você.
                </P>
                <P>
                  <strong className="text-white-soft/80">Encarregado (DPO)</strong> é o responsável por averiguar a
                  aplicação da legislação, garantir privacidade e segurança das informações, atender solicitações dos
                  Titulares e servir como canal com a Autoridade Nacional de Proteção de Dados (ANPD).
                </P>
              </SubSection>
            </Section>

            <Section title="Finalidade do Tratamento de Dados">
              <Ul>
                <Li>
                  <strong className="text-white-soft/80">Contato com cliente:</strong> comunicação constante e direta
                  no dia a dia do serviço prestado.
                </Li>
                <Li>
                  <strong className="text-white-soft/80">Envio de conteúdo:</strong> divulgação de conteúdo relevante
                  para investidores via Blog, Instagram, YouTube, E-mail e Telegram.
                </Li>
                <Li>
                  <strong className="text-white-soft/80">Contato com possíveis clientes:</strong> pessoas que
                  participaram de campanhas, eventos ou indicações.
                </Li>
                <Li>
                  <strong className="text-white-soft/80">Processo Seletivo:</strong> seleção de candidatos para
                  integrar a equipe Marco.
                </Li>
                <Li>
                  <strong className="text-white-soft/80">Realização de eventos:</strong> contato com participantes e
                  manutenção de relacionamento comercial.
                </Li>
              </Ul>
            </Section>

            <Section title="Dados Tratados pela Marco">
              <SubSection title="Para contato com clientes e atendimento no site">
                <Ul>
                  <Li>Nome</Li>
                  <Li>E-mail</Li>
                  <Li>Número de telefone</Li>
                </Ul>
              </SubSection>
              <SubSection title="Para divulgação de conteúdos e serviços">
                <Ul>
                  <Li>Nome</Li>
                  <Li>E-mail</Li>
                  <Li>Telefone</Li>
                  <Li>Dados inseridos em campanhas para personalização de conteúdo</Li>
                  <Li>Redes sociais (Instagram, Facebook ou LinkedIn)</Li>
                </Ul>
              </SubSection>
              <SubSection title="Para processos seletivos">
                <Ul>
                  <Li>Nome completo</Li>
                  <Li>Endereço de e-mail</Li>
                  <Li>Telefone e endereço</Li>
                  <Li>Experiência profissional e formação acadêmica</Li>
                  <Li>Data de nascimento</Li>
                  <Li>Aptidões, cursos realizados e certificações</Li>
                </Ul>
              </SubSection>
            </Section>

            <Section title="Forma de Coleta">
              <Ul>
                <Li>Através do próprio cliente</Li>
                <Li>Campanhas de marketing</Li>
                <Li>Dados manifestadamente públicos</Li>
                <Li>Formulário de Contato no site</Li>
                <Li>Inscrição nos downloads de conteúdos</Li>
                <Li>Inscrição no processo seletivo</Li>
              </Ul>
            </Section>

            <Section title="Bases Legais">
              <P>
                A Marco Investimentos só realiza o tratamento de dados pessoais amparados pelas Bases Legais, de acordo
                com o artigo 7º da Lei Geral de Proteção de Dados:
              </P>
              <Ul>
                <Li>Contrato – Artigo 7º, Inciso V</Li>
                <Li>Consentimento – Artigo 7º, Inciso I</Li>
                <Li>Legítimo Interesse do Controlador – Artigo 7º, Inciso IX</Li>
                <Li>Cumprimento de Obrigação Legal – Artigo 7º, Inciso II</Li>
              </Ul>
            </Section>

            <Section title="Princípios">
              <P>
                A Marco Investimentos se compromete em seguir os princípios da LGPD, obedecendo às diretrizes do
                "Privacy by Design" e "Privacy by Default". Os princípios observados em todo o tratamento são:
              </P>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                {[
                  "Finalidade", "Necessidade", "Adequação", "Segurança", "Prevenção",
                  "Responsabilização e Prestação de contas", "Transparência", "Livre acesso",
                  "Qualidade", "Não discriminação",
                ].map((p) => (
                  <div key={p} className="flex gap-2 items-center">
                    <span className="text-gold/60 shrink-0">›</span>
                    <span className="font-body text-sm text-white-soft/65">{p}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Cookies">
              <P>
                Cookies são pequenos arquivos baixados no seu computador ou dispositivo móvel para melhorar a sua
                experiência quando você acessa um site. Utilizamos Cookies para permitir navegação eficiente,
                lembrar preferências e melhorar a experiência do usuário.
              </P>
              <P>
                Elaboramos uma Política específica sobre o uso de Cookies.{" "}
                <a href="/lgpd/politica-de-cookies" className="text-gold/80 hover:text-gold transition-colors">
                  Acesse a Política de Cookies aqui.
                </a>
              </P>
            </Section>

            <Section title="Segurança da Informação">
              <P>
                A Marco Investimentos se responsabiliza pela manutenção de medidas de segurança, técnicas e
                administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações
                acidentais ou ilícitas.
              </P>
              <Ul>
                <Li>Manutenção regular de softwares legalizados e atualizados com patches de segurança</Li>
                <Li>Treinamento de todos os colaboradores frente à LGPD (13.709/18)</Li>
                <Li>Restrição de acesso às informações por setor</Li>
                <Li>Configuração de antivírus e firewall em todos os computadores e redes</Li>
              </Ul>
            </Section>

            <Section title="Compartilhamento de Dados">
              <P>
                Os dados podem ser compartilhados ou transferidos a terceiros, no Brasil ou no exterior, somente para
                cumprir adequadamente as finalidades enumeradas nesta política. Os dados serão compartilhados:
              </P>
              <Ul>
                <Li>Com sistemas de gestão de relacionamento com o cliente (CRM)</Li>
                <Li>Com provedores de armazenamento em nuvem contratados pela empresa</Li>
                <Li>Com ferramentas de análise para desempenho do Blog, Site e Canais de comunicação</Li>
                <Li>Com ferramentas de marketing utilizadas para envio de conteúdo</Li>
                <Li>Com as empresas do Grupo Marco</Li>
              </Ul>
              <P>
                A Marco Investimentos garante que, sob nenhuma hipótese, comercializa as informações dos Titulares.
                Para mais informações:{" "}
                <a href="mailto:dpo@marcoinvestimentos.com.br" className="text-gold/80 hover:text-gold transition-colors">
                  dpo@marcoinvestimentos.com.br
                </a>
              </P>
            </Section>

            <Section title="Direitos dos Titulares e Portal de Privacidade">
              <P>A LGPD garante ao titular os seguintes direitos frente à Marco Investimentos:</P>
              <Ul>
                <Li>Confirmação da existência de tratamento de dados pessoais</Li>
                <Li>Acesso aos dados pessoais</Li>
                <Li>Correção de dados incompletos, inexatos ou desatualizados</Li>
                <Li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</Li>
                <Li>Eliminação dos dados pessoais tratados com o consentimento</Li>
                <Li>Informação das organizações com as quais houve compartilhamento dos dados</Li>
                <Li>Informação sobre a possibilidade de não fornecer consentimento e suas consequências</Li>
                <Li>Revogação do consentimento</Li>
                <Li>Revisão de decisões tomadas unicamente com base em tratamento automatizado</Li>
                <Li>Portabilidade dos dados pessoais a outro prestador de serviços</Li>
                <Li>Suporte para reclamações à ANPD</Li>
                <Li>Oposição ao tratamento irregular</Li>
              </Ul>
              <P>
                Você pode exercer seus direitos pelo Portal de Privacidade no nosso site ou pelo e-mail:{" "}
                <a href="mailto:dpo@marcoinvestimentos.com.br" className="text-gold/80 hover:text-gold transition-colors">
                  dpo@marcoinvestimentos.com.br
                </a>
              </P>
            </Section>

            <Section title="Modificação da Política">
              <P>
                A empresa se reserva o direito de alterar total ou parcialmente a presente Política a qualquer tempo,
                inserindo a última data de atualização. Os clientes e contatos serão notificados por e-mail quando
                houver alterações importantes.
              </P>
            </Section>

            <Section title="Encarregado e Certificações">
              <P>
                Nosso Encarregado pela Proteção de Dados pode ser contatado a qualquer momento pelo e-mail{" "}
                <a href="mailto:dpo@marcoinvestimentos.com.br" className="text-gold/80 hover:text-gold transition-colors">
                  dpo@marcoinvestimentos.com.br
                </a>{" "}
                ou presencialmente na sede: Av. Dom Joaquim, 1515 – Sala 02 – Tres Vendas, Pelotas – RS, 96020-260.
              </P>
              <P>Certificações do DPO:</P>
              <Ul>
                <Li>EXIN Privacy and Data Protection Essentials</Li>
                <Li>EXIN Privacy and Data Protection Essentials based on LGPD</Li>
                <Li>EXIN Information Security Foundation based on ISO/IEC 27001</Li>
                <Li>EXIN Data and Privacy Protection Foundation</Li>
                <Li>EXIN Privacy and Data Protection Practitioner</Li>
                <Li>EXIN Data Protection Officer</Li>
              </Ul>
              <P>
                Perfil com as certificações disponível em:{" "}
                <a
                  href="https://app.exeed.pro/holder/profile/54851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/80 hover:text-gold transition-colors"
                >
                  app.exeed.pro/holder/profile/54851
                </a>
              </P>
            </Section>

            <Section title="Contato">
              <Ul>
                <Li>
                  Seção "Portal de Privacidade" do nosso{" "}
                  <a href="/" className="text-gold/80 hover:text-gold transition-colors">site oficial</a>
                </Li>
                <Li>
                  E-mail do Encarregado (DPO):{" "}
                  <a href="mailto:dpo@marcoinvestimentos.com.br" className="text-gold/80 hover:text-gold transition-colors">
                    dpo@marcoinvestimentos.com.br
                  </a>
                </Li>
              </Ul>
            </Section>

            <Section title="Revisão e Publicação">
              <P>
                Esta Política será revisada no prazo máximo de 1 ano, podendo ser revisada/alterada a qualquer momento
                se necessário, obedecendo o procedimento de aprovações da empresa.
              </P>
              <P>
                <strong className="text-white-soft/80">Data de publicação:</strong> 19 de julho de 2023.
              </P>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
