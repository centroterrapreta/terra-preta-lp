import ClientEffects from "@/components/ClientEffects";

const WA_LINK =
  "https://wa.me/5511916990056?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20meu%20veiculo";

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* NAV */}
      <nav id="nav">
        <div className="nav-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpeg" alt="Terra Preta Centro Automotivo" className="nav-logo" />
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-red">
            <WaIcon size={16} />
            Agendar Avaliação
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-photo" />
        <div className="hero-glow" />
        <div className="hero-topline" />
        <div className="hero-wrap">
          <div className="hero-body">
            <div className="eyebrow">Mairiporã — SP</div>
            <h1 className="hero-h1">
              Seu carro<br />nas <b>mãos certas</b>
            </h1>
            <p className="hero-sub">
              Mecânica e auto-elétrica especializada em alta performance, perto de você.
            </p>
            <div className="hero-actions">
              <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-red btn-lg">
                <WaIcon size={20} />
                Agendar minha avaliação
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <small>Saiba mais</small>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* AWARD BAND */}
      <div className="award-band r">
        <div className="wrap">
          <div className="award-in">
            <div className="award-icon">
              <TrophyIcon />
            </div>
            <div className="award-txt">
              <strong>Melhor do Ano 2026</strong>
              <span>Prêmio Municipal · The Best Pesquisas &amp; Publicidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="svc" className="sec">
        <div className="wrap">
          <div className="sh r">
            <div className="lbl">Serviços</div>
            <h2>Como podemos ajudar<br /><em>seu carro?</em></h2>
          </div>
          <div className="svc-grid">
            <div className="sc r" data-d="1">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
              <div className="sn">Mecânica Geral</div>
            </div>
            <div className="sc r" data-d="2">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
              <div className="sn">Troca de Óleo</div>
            </div>
            <div className="sc r" data-d="3">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="9" />
                <line x1="12" y1="15" x2="12" y2="22" />
                <line x1="2" y1="12" x2="9" y2="12" />
                <line x1="15" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="16.24" y2="7.76" />
                <line x1="7.76" y1="16.24" x2="4.93" y2="19.07" />
              </svg>
              <div className="sn">Pneus</div>
            </div>
            <div className="sc r" data-d="4">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <div className="sn">Embreagem</div>
            </div>
            <div className="sc r" data-d="5">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="10" width="12" height="6" rx="3" />
                <line x1="14" y1="13" x2="20" y2="13" />
                <path d="M17 10c0-1.5 1-2 1-3.5" />
                <path d="M20 9c0-1.5 1-2 1-3.5" />
              </svg>
              <div className="sn">Escapamento</div>
            </div>
            <div className="sc r" data-d="6">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.5" />
                <line x1="12" y1="3" x2="12" y2="8.5" />
                <line x1="12" y1="15.5" x2="12" y2="21" />
                <line x1="3" y1="12" x2="8.5" y2="12" />
                <line x1="15.5" y1="12" x2="21" y2="12" />
                <line x1="5.6" y1="5.6" x2="9.5" y2="9.5" />
                <line x1="14.5" y1="14.5" x2="18.4" y2="18.4" />
                <line x1="18.4" y1="5.6" x2="14.5" y2="9.5" />
                <line x1="9.5" y1="14.5" x2="5.6" y2="18.4" />
              </svg>
              <div className="sn">Freios</div>
            </div>
            <div className="sc r" data-d="7">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="9" y1="2" x2="15" y2="2" />
                <line x1="9" y1="22" x2="15" y2="22" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <polyline points="9,5 15,7.67 9,10.33 15,13 9,15.67 15,18.33 12,19" />
              </svg>
              <div className="sn">Amortecedores</div>
            </div>
            <div className="sc r" data-d="8">
              <svg className="sc-icon" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
              <div className="sn">Balanceamento</div>
            </div>
          </div>
          <div className="sec-cta r">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-red btn-lg">
              <WaIcon size={18} />
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="rev" className="sec">
        <div className="wrap">
          <div className="sh r">
            <div className="lbl">Depoimentos</div>
            <h2>Quem confia<br /><em>recomenda</em></h2>
          </div>
          <div className="rv-track">
            {[
              { name: "Fátima Palota", text: "Atendimento muito bom, problema resolvido rápido, pessoal de confiança e muito profissionais!" },
              { name: "Paulo Afonso Bernardez", text: "Minha primeira visita. Atendimento honesto e super simpático, serviço rápido e bem feito. Preço justo. Parabéns!" },
              { name: "Klaus Santos Zavagnison", text: "Excelente equipe, atendimento ótimo, educação de qualidade, serviço 100% perfeito." },
              { name: "Angélica Santos", text: "Seu Jorge é espetacular... Muito atencioso, sanou todas minhas dúvidas." },
              { name: "Valdir Barbosa", text: "Pessoal muito atencioso e muito profissional, preço muito bom e justo. Recomendo." },
            ].map((r, i) => (
              <div key={r.name} className="rc r" data-d={String(i + 1)}>
                <div className="stars">★★★★★</div>
                <p className="rt">&ldquo;{r.text}&rdquo;</p>
                <div className="ra">{r.name}</div>
              </div>
            ))}
          </div>
          <div className="rev-cta r">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-red">
              <WaIcon size={16} />
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats">
        <div className="wrap">
          <div className="sg">
            <div className="si2 r">
              <div><span className="snum" data-t="10">0</span><span className="ssuf">+ anos</span></div>
              <span className="slbl">de experiência</span>
            </div>
            <div className="si2 r" data-d="2">
              <div><span className="snum" data-t="5">0</span><span className="ssuf">★</span></div>
              <span className="slbl">avaliação no Google</span>
            </div>
            <div className="si2 r" data-d="4">
              <div><span className="snum" data-t="120">0</span><span className="ssuf"> dias</span></div>
              <span className="slbl">garantia nas peças</span>
            </div>
            <div className="si2 r" data-d="6">
              <div><span className="snum" data-t="30">0</span><span className="ssuf"> dias</span></div>
              <span className="slbl">garantia mão de obra</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="sec">
        <div className="wrap">
          <div className="ab-g">
            <div className="r">
              <div className="sh">
                <div className="lbl">Nossa história</div>
                <h2>Há 10 anos fazendo seu<br /><em>veículo voltar à vida</em></h2>
              </div>
              <p className="ab-txt">Cuidar do seu carro é cuidar da sua segurança, da sua rotina e da sua tranquilidade. E é exatamente com esse compromisso que o Centro Automotivo Terra Preta atua há mais de 9 anos em Mairiporã.</p>
              <p className="ab-txt">Aqui, cada veículo é tratado com cuidado e responsabilidade, como se fosse nosso. Trabalhamos com serviços completos de mecânica e auto elétrica, sempre prezando pela qualidade, transparência no diagnóstico e preços justos, sem surpresas no final.</p>
              <p className="ab-txt" style={{ marginBottom: 30 }}>Seja para uma revisão, manutenção preventiva ou um reparo específico, você pode sempre contar com a gente.</p>
              <a href="https://maps.google.com/maps?q=Av.+Pietro+Petri,+446,+Mairipor%C3%A3+-+SP" target="_blank" rel="noopener" className="btn btn-out">
                Conheça nosso espaço →
              </a>
            </div>
            <div className="ab-vis r" data-d="2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img-oficina.jpeg" alt="Interior da oficina Terra Preta com veículos no elevador" />
              <div className="ab-badge">
                <div className="ab-badge-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
                  </svg>
                </div>
                <div>
                  <strong>Melhor do Ano 2026</strong>
                  <span>Prêmio Municipal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta-final" className="sec">
        <div className="wrap">
          <div className="cta-in r">
            <div className="sh" style={{ marginBottom: 0 }}>
              <div className="lbl">Garantia</div>
              <h2>Confie em quem<br /><em>entende de carros</em></h2>
            </div>
            <div className="guar">
              <div className="gitem">
                <div className="gnum">120</div>
                <div className="gunit"> dias</div>
                <div className="gdesc">Garantia para<br />troca de peças</div>
              </div>
              <div className="gitem">
                <div className="gnum">30</div>
                <div className="gunit"> dias</div>
                <div className="gdesc">Garantia para<br />mão de obra</div>
              </div>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-red btn-lg">
              <WaIcon size={20} />
              Agendar minha avaliação
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="ft">
            <div>
              <div className="brand-mark">Terra <span>Preta</span></div>
              <p className="ftag">Centro Automotivo e Auto Elétrica<br />em Mairiporã — SP</p>
            </div>
            <div>
              <h4>Endereço</h4>
              <address>Av. Pietro Petri, 446<br />Mairiporã — SP<br />CEP: 07661-520</address>
            </div>
            <div>
              <h4>Horários</h4>
              <address>Segunda a Sexta<br />08:00 às 18:00<br /><br />Sábado e Domingo<br />Fechado</address>
            </div>
          </div>
          <div className="fmap">
            <iframe
              src="https://maps.google.com/maps?q=Centro+Automotivo+Terra+Preta,+Mairipor%C3%A3+SP&output=embed&hl=pt-BR"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Terra Preta Centro Automotivo"
            />
          </div>
          <div className="fbot">
            <p>© 2026 Terra Preta Centro Automotivo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WA_LINK} target="_blank" rel="noopener" className="waf" aria-label="Falar no WhatsApp">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
