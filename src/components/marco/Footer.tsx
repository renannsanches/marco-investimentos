export default function Footer() {
  const columns = [
    {
      title: "A Marco",
      links: ["Quem somos", "Nossos escritórios", "Carreiras", "Assessores", "Fale conosco"],
    },
    {
      title: "Soluções",
      links: ["Investimentos", "Corporativas"],
    },
    {
      title: "LGPD",
      links: ["Portal da Privacidade", "Política de Privacidade e Proteção de Dados Pessoais", "Política de Cookies"],
    },
  ];

  return (
    <footer className="bg-black-deep pt-16 pb-8" id="contato">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Logo + Social */}
          <div>
            <img src="/images/logo-marco.svg" alt="Marco Investimentos" className="h-10 w-auto mb-6" />
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="font-body text-xs uppercase tracking-wider text-oatmeal hover:text-white-soft transition-colors duration-[250ms] ease"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-white-soft text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-oatmeal hover:text-white-soft transition-colors duration-[250ms] ease">
                      <span className="text-gold text-xs mr-1.5">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-6">
          <p className="font-body text-xs text-oatmeal/60 mb-4">
            © 2025, Marco Investimentos. Todos os direitos reservados. | 32.383.761/0001-86 – Marco Assessor de Investimentos LTDA
          </p>
          <p className="font-body text-[11px] text-oatmeal/40 leading-relaxed max-w-4xl">
            A MARCO ASSESSOR DE INVESTIMENTOS LTDA, inscrita sob o CNPJ: 32.383.761/0001-86 é uma empresa Assessora de
            Investimento devidamente registrada na Comissão de Valores Mobiliários ("CVM") na forma da Resolução CVM 178/23
            ("Resolução"), que mantém contrato de distribuição de produtos financeiros com a XP Investimentos Corretora de
            Títulos, Valores e Mobiliários S.A. ("XP") e pode, por conta e ordem dos seus clientes, operar no mercado
            financeiro segundo a legislação vigente. O Assessor de investimento não pode administrar ou gerir o patrimônio
            de investidores. O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de
            rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de perdas superiores aos
            valores investidos, podendo resultar em significativas perdas patrimoniais. Para reclamações, contate a
            Ouvidoria da XP pelo telefone 0800 722 3730.
          </p>
        </div>
      </div>
    </footer>
  );
}
