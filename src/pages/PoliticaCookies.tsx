import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

export default function PoliticaCookies() {
  useScrollAnimation();

  return (
    <>
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
              Política de Cookies
            </h1>
            <p className="font-body text-sm text-white-soft/50 animate-fade-in-up animate-delay-300">
              marcoinvestimentos.com.br
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
                A Privacidade e a Proteção de Dados são temas de extrema importância para nossa organização. Por conta
                disso, nós, da Marco Investimentos, criamos esta Política de Cookies para demonstrar a você, usuário do
                site, de forma clara e acessível como utilizamos cookies e o papel que eles desempenham.
              </P>
            </div>

            <div className="h-[1px] bg-gold/10 mb-12" />

            <Section title="O que são Cookies?">
              <P>
                Cookies são pequenos arquivos baixados no seu computador ou dispositivo móvel para melhorar a sua
                experiência durante a navegação em um site. A imensa maioria dos sites da web os possuem.
              </P>
              <P>
                Esta Política utiliza o termo cookie para qualquer arquivo que recolha informações desta forma, além
                disso, descrevemos quais informações eles coletam, como as usamos e por que às vezes precisamos
                armazenar esses cookies.
              </P>
            </Section>

            <Section title="Como usamos os cookies">
              <P>Os cookies utilizados no site marcoinvestimentos.com.br têm as seguintes finalidades:</P>
              <Ul>
                <Li>Permitir uma navegação eficiente entre páginas</Li>
                <Li>Lembrar preferências e melhorar a experiência do usuário</Li>
                <Li>Garantir que nossas campanhas e entregas de conteúdo sejam mais relevantes para você e seus interesses</Li>
              </Ul>
              <P>
                Nosso site utiliza as ferramentas analytics mais confiáveis do mercado — métodos de análise confiáveis
                e seguros para nos ajudar a entender como você usa o website e como podemos melhorar sua experiência de
                navegação.
              </P>
              <P>
                Também usamos botões e plugins de redes sociais para permitir que você se conecte com Facebook e
                LinkedIn. Para o correto funcionamento, as plataformas implementam cookies em nosso site.
              </P>
            </Section>

            <Section title="Os cookies que definimos">
              <SubSection title="Cookies de sessão">
                <P>
                  Não apresentam data de validade e não ficam gravados no disco. Quando o site é fechado os cookies
                  são excluídos permanentemente.
                </P>
              </SubSection>

              <SubSection title="Cookies de preferências do site">
                <P>
                  Enquadram-se como "Cookies permanentes" — ao invés de serem excluídos ao fechar o navegador, são
                  excluídos por data de validade. Por exemplo, utilizamos o cookie <em className="text-white-soft/80">_GA</em>{" "}
                  para que as próximas visitas ao site possam ser relacionadas a você.
                </P>
              </SubSection>

              <SubSection title="Cookies de terceiros">
                <P>
                  Em alguns casos, também utilizamos cookies fornecidos por terceiros confiáveis. A Marco Investimentos
                  só mantém relações com empresas que garantem a integridade e segurança dos dados pessoais coletados.
                </P>
                <Ul>
                  <Li>
                    <strong className="text-white-soft/80">Google Analytics:</strong> uma das soluções analíticas mais
                    difundidas e confiáveis da web, utilizada para compreender como você usa o site e melhorar sua
                    experiência.
                  </Li>
                  <Li>
                    <strong className="text-white-soft/80">Pixel do Facebook:</strong> utilizado para mensuração de
                    interações, elaboração de relatórios, otimização de campanhas de marketing e definição de públicos.
                  </Li>
                  <Li>
                    <strong className="text-white-soft/80">Mautic tracking:</strong> utilizado para entender de quais
                    locais nossos usuários acessam nossa página, com dados de geolocalização (cidade e país) e
                    endereços IP armazenados de forma anonimizada.
                  </Li>
                </Ul>
              </SubSection>
            </Section>

            <Section title="Desativando Cookies">
              <P>
                Você pode impedir a configuração de cookies ajustando as configurações do seu navegador. Esteja ciente
                de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita.
              </P>
            </Section>

            <Section title="Mais Informações">
              <P>
                A proteção de seus dados pessoais e a sua privacidade são respeitadas em todas as operações da nossa
                empresa. Estamos comprometidos em proteger seus dados pessoais, sua privacidade e principalmente em
                garantir a sua segurança.
              </P>
              <P>Se ainda estiver procurando por mais informações, entre em contato:</P>
              <Ul>
                <Li>
                  E-mail:{" "}
                  <a href="mailto:dpo@marcoinvestimentos.com.br" className="text-gold/80 hover:text-gold transition-colors">
                    dpo@marcoinvestimentos.com.br
                  </a>
                </Li>
                <Li>
                  <strong className="text-white-soft/80">Controlador:</strong> MARCO ASSESSOR DE INVESTIMENTOS LTDA,
                  CNPJ nº 32.383.761/0001-66, Avenida Ministro Calógeras, 343, sala 11-02, Bairro Centro,
                  Joinville/SC.
                </Li>
              </Ul>

              <div
                className="rounded-xl p-5 mt-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="font-body text-xs text-white-soft/40 leading-relaxed">
                  Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{" "}
                  <a href="/lgpd/politica-de-privacidade" className="text-gold/70 hover:text-gold transition-colors">
                    Política de Privacidade e Proteção de Dados Pessoais
                  </a>
                  .
                </p>
              </div>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
