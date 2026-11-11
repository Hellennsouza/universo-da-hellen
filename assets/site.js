
'use strict';

/* ==========================================
   UNIVERSO DA HELLEN — PROJETOS
   ==========================================

   featured: true  = projeto elegível para destaque
   featured: false = projeto apenas no catálogo
   hidden: true    = projeto oculto de toda a página

   IMPORTANTE:
   Para ocultar um projeto, utilize hidden: true.
   Não comente title, cat ou outras propriedades.
========================================== */

const PROJECTS = [

  // ========================================
  // 01 — ITAÚ UNIBANCO
  // ========================================
  {
    "title": "Painel Estratégico Itaú Unibanco — PI1",
    "cat": "Data Science",
    "icon": "🏦",
    "desc": "Dashboard interativo em Streamlit para análise institucional, indicadores, matrizes estratégicas e propostas de ação do Itaú Unibanco.",
    "context": "Projeto Integrador I — Conhecendo o Negócio, Fatec Votorantim, curso de Ciência de Dados para Negócios. Trabalho acadêmico em equipe.",
    "tools": "Python, Streamlit, pandas, SWOT, TOWS, BCG, SMART, BSC, 5W2H",
    "results": "Painel com 15 opções de navegação, incluindo indicadores do 2T26, análises estratégicas, auditoria comparativa e controle da apresentação. Metas 2027 são propostas do estudo, não resultados atingidos.",
    "verified": false,
    "page": "projetos/painel-estrategico-itau-pi1.html",
    "status": "Projeto acadêmico em equipe",
    "featured": true,
    "cover": "assets/capas/itau.png"
  },

  // ========================================
  // 02 — ICDF
  // ========================================
  {
    "title": "ICDF — Framework de Decisão em Crédito Integrado",
    "cat": "Data Science",
    "icon": "📈",
    "desc": "Framework de decisão de crédito que combina risco financeiro (ICD) e qualidade dos dados (IQD).",
    "context": "Arquitetura bidimensional de quatro quadrantes para decisões de crédito, incluindo análise manual de propostas com dados insuficientes. O README documenta a evolução até a versão 29.0.",
    "tools": "Python, TensorFlow Lattice, PyTorch, XGBoost, LightGBM, Isolation Forest, Streamlit, MLOps",
    "results": "O README apresenta benchmark de modelos e simulação com 25 mil proponentes, com resultados projetados. Os números são relatados pelo projeto, não uma validação independente em produção.",
    "source": "https://github.com/Hellennsouza/ICDF-FRAMEWORK",
    "verified": true,
    "page": "projetos/icdf-framework-de-decisao-em-credito-integrado.html",
    "featured": true,
    "cover": "assets/capas/icdf.png"
  },

  // ========================================
  // 03 — OPERAÇÃO ESPELHO FALSO
  // OCULTO, MAS PRESERVADO NO ARQUIVO
  // ========================================
  {
    "title": "Operação Espelho Falso — Detecção de Deepfakes",
    "cat": "Data Science",
    "icon": "🪞",
    "desc": "Prova de conceito para investigação de fraude com visão computacional, biometria e explicabilidade de IA.",
    "context": "Versão beta documentada com processamento em memória, módulos de vivacidade ocular, PRNU, grafos de identidade e explicabilidade. Aplicações propostas em investigações e prevenção de fraudes.",
    "tools": "Python, OpenCV, NumPy, SciPy, Pandas, NetworkX, scikit-learn, XAI",
    "results": "README registra testes locais simulados: score 549/1000 para transação legítima e 764/1000 para cenário de ataque. Não constitui prova de desempenho ou conformidade regulatória em ambiente real.",
    "source": "https://github.com/Hellennsouza/Operacao_Espelho_Falso",
    "verified": true,
    "page": "projetos/operacao-espelho-falso-deteccao-de-deepfakes.html",
    "featured": false,
    "hidden": true,
    "cover": "assets/capas/espelho.png"
  },

  // ========================================
  // 04 — ANÁLISE DE RISCO DE CRÉDITO
  // ========================================
  {
    "title": "Análise de Risco de Crédito e Inadimplência",
    "cat": "Finanças",
    "icon": "📉",
    "desc": "Modelo preditivo em Python para identificar risco de inadimplência em carteira simulada de 1.500 clientes.",
    "context": "Problema: antecipar default e apoiar decisões de crédito e recuperação de ativos. Dados sintéticos, treinamento/teste 75%/25% e Random Forest com 100 árvores.",
    "tools": "Python, Pandas, NumPy, scikit-learn, Jupyter Notebook, Random Forest",
    "results": "Resultados documentados no README: acurácia de 77%, ROC-AUC 0,8537 e recall de 43% para inadimplentes. O baixo recall desta classe aponta necessidade de aprimoramento antes de uso real.",
    "source": "https://github.com/Hellennsouza/Analise-de-Risco-de-Credito",
    "verified": true,
    "page": "projetos/analise-de-risco-de-credito-e-inadimplencia.html",
    "featured": false,
    "cover": "assets/capas/risco.png"
  },

  // ========================================
  // 05 — ARDUINO: MENINAS NA CIÊNCIA
  // ========================================
  {
    "title": "Arduino: Meninas na Ciência",
    "cat": "Robótica",
    "icon": "👩‍🔬",
    "desc": "Projeto de extensão com ensino de robótica e programação C/C++ para alunas de escolas públicas de Barreiras (BA).",
    "context": "Atuação como monitora bolsista CNPq, com oficinas de montagem e programação de Arduino para alunas de cinco colégios estaduais, conforme perfil GitHub.",
    "tools": "Arduino, C/C++, eletrônica educativa, oficinas práticas",
    "results": "O repositório reúne códigos e experimentos com LEDs, sensores, servomotores, LCD e Bluetooth. Não há indicadores quantitativos de aprendizagem verificados.",
    "source": "https://github.com/Hellennsouza/Arduino-Meninas-na-Ciencia",
    "verified": true,
    "page": "projetos/arduino-meninas-na-ciencia.html",
    "featured": false,
    "cover": "assets/capas/meninas.png"
  },

  // ========================================
  // 06 — CAMINHÃO DA CIÊNCIA
  // ========================================
  {
    "title": "Caminhão da Ciência — UFOB",
    "cat": "Robótica",
    "icon": "🚚",
    "desc": "Atividades itinerantes de divulgação científica e aproximação de estudantes com robótica e tecnologia.",
    "context": "Projeto de extensão da UFOB; o perfil GitHub menciona atividades em municípios baianos e apresentações de tecnologia e lógica de programação.",
    "tools": "Divulgação científica, robótica, programação e demonstrações educativas",
    "results": "Registros e documentação do projeto disponíveis no repositório. Resultados quantitativos ainda não documentados aqui.",
    "source": "https://github.com/Hellennsouza/Caminhao-da-Ciencia-UFOB",
    "verified": true,
    "page": "projetos/caminhao-da-ciencia-ufob.html",
    "featured": false,
    "cover": "assets/capas/caminhao.png"
  },

  // ========================================
  // 07 — AUTOMAÇÃO RESIDENCIAL
  // ========================================
  {
    "title": "Automação Residencial com Arduino",
    "cat": "Robótica",
    "icon": "🏠",
    "desc": "Protótipo de automação residencial implementado em maquete física de madeirite.",
    "context": "Experimento de Robótica de Garagem que aplica microcontroladores a uma representação física de residência.",
    "tools": "Arduino, C/C++, prototipagem física",
    "results": "Protótipo descrito no repositório; componentes e resultados de testes podem ser detalhados após revisão do código e das evidências.",
    "source": "https://github.com/Hellennsouza/Automacao-Residencial-Arduino",
    "verified": true,
    "page": "projetos/automacao-residencial-com-arduino.html",
    "featured": false,
    "cover": "assets/capas/arduinocasa.png"
  },

  // ========================================
  // 08 — GESTÃO FINANCEIRA DUKE
  // ========================================
  {
    "title": "Gestão Financeira e Operacional — Duke",
    "cat": "Gestão",
    "icon": "💼",
    "desc": "Experiência profissional em gestão financeira, controle de caixa, indicadores de desempenho, liderança de equipes e organização de processos operacionais.",
    "context": "Atuação como Gerente Financeiro na Duke Experiências Inteligentes, em Barreiras (BA), entre outubro de 2020 e janeiro de 2023. Responsável por controles financeiros, elaboração de relatórios de desempenho, supervisão operacional, suporte administrativo e atendimento consultivo. Registros de 2023 e 2024 documentam convites posteriores para retornar à gestão financeira.",
    "tools": "Gestão financeira, fluxo de caixa, indicadores de desempenho (KPIs), relatórios gerenciais, controle operacional, liderança de equipes e relacionamento com clientes",
    "results": "Experiência profissional documentada no LinkedIn, com registros de atuação e reconhecimento posterior. Em janeiro de 2024, recebeu convite para retornar à gerência financeira, acompanhado de manifestação explícita de confiança do gestor. O convite não representa contratação efetivada.",
    "source": "https://www.linkedin.com/in/hellen-souza-879051194/",
    "verified": true,
    "page": "projetos/gestao-financeira-duke.html",
    "status": "Experiência profissional",
    "featured": false,
    "cover": "assets/capas/gestao-financeira-duke.png"
  },

  // ========================================
  // 09 — GLOBANTIX
  // ========================================
  {
    "title": "GlobanTIX",
    "cat": "Empreendedorismo",
    "icon": "💡",
    "desc": "Proposta de consultoria 360° integrando tecnologia, finanças e gestão.",
    "context": "Registrar conceito, serviços, identidade e evolução do empreendimento.",
    "verified": false,
    "page": "projetos/globantix.html",
    "status": "Registro em construção",
    "featured": false,
    "cover": "assets/capas/globantix.png"
  },

  // ========================================
  // 10 — REBORNA
  // ========================================
  {
    "title": "Reborna",
    "cat": "Empreendedorismo",
    "icon": "🎨",
    "desc": "Hub estratégico voltado a branding, marketing e posicionamento de imagem.",
    "context": "Adicionar projetos de marca, peças visuais e resultados.",
    "verified": false,
    "page": "projetos/reborna.html",
    "status": "Registro em construção",
    "featured": false,
    "cover": "assets/capas/reborna.png"
  },

  // ========================================
  // 11 — CANDY LOVER
  // ========================================
  {
    "title": "Candy Lover",
    "cat": "Empreendedorismo",
    "icon": "🍬",
    "desc": "Gestão de e-commerce de doces personalizados sob encomenda.",
    "context": "Documentar operação, catálogo, processos e comunicação da marca.",
    "verified": false,
    "page": "projetos/candy-lover.html",
    "status": "Registro em construção",
    "featured": false,
    "cover": "assets/capas/pirulito.png"
  },

  // ========================================
  // 12 — CONSULTORIA EMPRESARIAL
  // ========================================
  {
    "title": "Consultoria Empresarial",
    "cat": "Empreendedorismo",
    "icon": "🤝",
    "desc": "Atuação em gestão financeira estratégica e estruturação de fluxo de caixa.",
    "context": "Detalhar escopo, entregas e aprendizados de cada experiência.",
    "verified": false,
    "page": "projetos/consultoria-empresarial.html",
    "status": "Registro em construção",
    "featured": false,
    "cover": "assets/capas/consultoria.png"
  },

  // ========================================
  // 13 — HHMP
  // ========================================
  {
    "title": "HHMP",
    "cat": "Empreendedorismo",
    "icon": "⚙️",
    "desc": "Engenharia e prototipagem de equipamentos para construção submarina.",
    "context": "Adicionar desenhos, protótipos, fases e participação no projeto.",
    "verified": false,
    "page": "projetos/hhmp.html",
    "status": "Registro em construção",
    "featured": false,
    "cover": "assets/capas/eng.png"
  },

  // ========================================
  // 14 — SS CONSULTORIA LTDA
  // ========================================
  {
    "title": "SS Consultoria LTDA",
    "cat": "Empreendedorismo",
    "icon": "🏪",
    "desc": "Experiência empreendedora envolvendo folheados, sex shop e cosméticos.",
    "context": "Documentar estrutura do negócio, operações, produtos e trajetória.",
    "verified": false,
    "page": "projetos/ss-consultoria-ltda.html",
    "status": "Registro em construção",
    "featured": false,
    "cover": "assets/capas/ss.png"
  }

];


/* ==========================================
   ELEMENTOS DA PÁGINA E ESTADO
   ========================================== */

const cards = document.getElementById('cards');

const featured = document.getElementById('featuredCards');

const search = document.getElementById('searchProjects');

let currentCategory = 'Todos';

let observer = null;


/* ==========================================
   FUNÇÕES AUXILIARES
   ========================================== */

const normalize = s =>
  String(s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();


function el(tag, cls, content) {
  const element = document.createElement(tag);

  if (cls) {
    element.className = cls;
  }

  if (content !== undefined && content !== null) {
    element.textContent = content;
  }

  return element;
}


/* ==========================================
   CARDS DO CATÁLOGO
   ========================================== */

function makeCard(p) {

  const article = el('article', 'project reveal');

  const visual = el('div', 'visual');

  visual.setAttribute('aria-hidden', 'true');

  if (p.cover) {

    const image = el('img');

    image.src = p.cover;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';

    image.addEventListener('error', () => {
      image.remove();
    });

    visual.append(image);
  }

  article.append(visual);

  const body = el('div', 'project-body');

  const tags = el('div');

  if (p.cat) {
    tags.append(
      el('span', 'tag', p.cat)
    );
  }

  // Só exibe o status quando ele existir.
  if (p.status) {

    const statusClass =
      'tag' +
      (p.status === 'Registro em construção'
        ? ' draft'
        : '');

    tags.append(
      el('span', statusClass, p.status)
    );
  }

  body.append(
    tags,
    el('h3', '', p.title),
    el('p', '', p.desc || '')
  );

  const link = el(
    'a',
    'more',
    'Conhecer registro →'
  );

  link.href = p.page || p.source || '#projetos';

  body.append(link);

  article.append(body);

  return article;
}


/* ==========================================
   CARDS DE PROJETOS EM DESTAQUE
   ========================================== */

function makeFeatureCard(p, primary = false) {

  const article = el(
    'article',
    'archive-feature-card ' +
      (primary ? 'primary' : 'secondary') +
      ' reveal'
  );

  const visual = el(
    'div',
    'archive-feature-visual'
  );

  if (p.cover) {

    const image = el('img');

    image.src = p.cover;

    image.alt = 'Capa do projeto ' + p.title;

    image.loading = primary ? 'eager' : 'lazy';

    image.decoding = 'async';

    image.addEventListener('error', () => {
      image.remove();
    });

    visual.append(image);
  }

  const content = el(
    'div',
    'archive-feature-content'
  );

  const kicker = el(
    'span',
    'archive-card-kicker',
    primary
      ? '[ PROJETO PRINCIPAL ]'
      : '[ PROJETO SELECIONADO ]'
  );

  const status = el(
    'span',
    'archive-card-status',
    p.status || p.cat || 'Projeto'
  );

  const title = el(
    'h3',
    '',
    p.title
  );

  const description = el(
    'p',
    '',
    p.desc || ''
  );

  content.append(
    kicker,
    status,
    title,
    description
  );

  // Tecnologias registradas no projeto principal.
  if (primary && p.tools) {

    const tags = el(
      'div',
      'archive-project-tags'
    );

    p.tools
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)
      .slice(0, 4)
      .forEach(tool => {
        tags.append(
          el('span', '', tool)
        );
      });

    content.append(tags);
  }

  const link = el(
    'a',
    'archive-feature-link',
    primary
      ? 'Explorar projeto ↗'
      : 'Acessar registro ↗'
  );

  link.href =
    p.page || p.source || '#projetos';

  link.setAttribute(
    'aria-label',
    'Acessar ' + p.title
  );

  content.append(link);

  article.append(
    visual,
    content
  );

  return article;
}


/* ==========================================
   RENDERIZAÇÃO DOS PROJETOS
   ========================================== */

function render() {

  if (!cards || !featured || !search) {
    return;
  }

  const q = normalize(
    search.value.trim()
  );

  // Projetos ocultos ou sem título são ignorados.
  const filtered = PROJECTS.filter(p => {

    if (p.hidden === true || !p.title) {
      return false;
    }

    const categoryMatch =
      currentCategory === 'Todos' ||
      p.cat === currentCategory;

    const textMatch = normalize([
      p.title,
      p.desc,
      p.cat,
      p.tools,
      p.context
    ].join(' ')).includes(q);

    return categoryMatch && textMatch;
  });


  /* ========================================
     ORDEM DOS PROJETOS EM DESTAQUE
     ======================================== */

  const priority = [
    'Painel Estratégico Itaú',
    'ICDF —'
  ];

  let promoted = [];

  // Na visão inicial, aparecem os destaques
  // na ordem definida acima.
  if (
    !q &&
    (
      currentCategory === 'Todos' ||
      currentCategory === 'Data Science'
    )
  ) {

    promoted = priority
      .map(name =>
        filtered.find(p =>
          p.featured === true &&
          p.title.includes(name)
        )
      )
      .filter(Boolean);

  } else {

    // Ao pesquisar ou trocar de categoria,
    // respeita os resultados encontrados.
    promoted = filtered.slice(0, 3);
  }


  /* ========================================
     EVITA REPETIR DESTAQUES NO CATÁLOGO
     ======================================== */

  const promotedSet = new Set(promoted);

  const remaining = filtered.filter(
    p => !promotedSet.has(p)
  );


  /* ========================================
     ATUALIZA OS CARDS DE DESTAQUE
     ======================================== */

  featured.replaceChildren(
    ...promoted.map(
      (p, index) =>
        makeFeatureCard(p, index === 0)
    )
  );

  featured.hidden =
    promoted.length === 0;


  /* ========================================
     ATUALIZA O CATÁLOGO
     ======================================== */

  cards.replaceChildren(
    ...remaining.map(makeCard)
  );


  /* ========================================
     ESTADOS DE EXIBIÇÃO
     ======================================== */

  const archiveMore =
    document.getElementById('archiveMore');

  if (archiveMore) {
    archiveMore.hidden =
      remaining.length === 0;
  }

  const archiveEmpty =
    document.getElementById('archiveEmpty');

  if (archiveEmpty) {
    archiveEmpty.hidden =
      filtered.length !== 0;
  }

  const resultsCount =
    document.getElementById('resultsCount');

  if (resultsCount) {

    resultsCount.textContent =
      filtered.length === 1
        ? '1 registro encontrado'
        : filtered.length +
          ' registros encontrados';
  }


  /* ========================================
     ATUALIZA ANIMAÇÕES
     ======================================== */

  observeReveals();
}


/* ==========================================
   FILTROS DE CATEGORIAS
   ========================================== */

document
  .querySelectorAll('.filter')
  .forEach(button => {

    button.addEventListener('click', () => {

      currentCategory =
        button.dataset.filter || 'Todos';

      document
        .querySelectorAll('.filter')
        .forEach(other => {

          const active =
            other === button;

          other.classList.toggle(
            'active',
            active
          );

          other.setAttribute(
            'aria-pressed',
            String(active)
          );
        });

      render();
    });
  });


/* ==========================================
   PESQUISA DE PROJETOS
   ========================================== */

if (search) {
  search.addEventListener('input', render);
}


/* ==========================================
   PRIMEIRA RENDERIZAÇÃO
   ========================================== */

render();


/* ==========================================
   MENU RESPONSIVO
   ========================================== */

const toggle =
  document.getElementById('menuToggle');

const nav =
  document.getElementById('navLinks');

if (toggle && nav) {

  toggle.addEventListener('click', () => {

    const expanded =
      toggle.getAttribute('aria-expanded') ===
      'true';

    toggle.setAttribute(
      'aria-expanded',
      String(!expanded)
    );

    nav.classList.toggle(
      'open',
      !expanded
    );
  });

  nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      nav.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });
}


/* ==========================================
   ANO AUTOMÁTICO NO RODAPÉ
   ========================================== */

const year =
  document.getElementById('year');

if (year) {
  year.textContent =
    new Date().getFullYear();
}


/* ==========================================
   ANIMAÇÕES DE ENTRADA
   ========================================== */

function observeReveals() {

  const elements =
    document.querySelectorAll(
      '.reveal:not(.visible)'
    );

  const reducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  if (
    reducedMotion ||
    !('IntersectionObserver' in window)
  ) {

    elements.forEach(element => {
      element.classList.add('visible');
    });

    return;
  }

  if (!observer) {

    observer = new IntersectionObserver(
      entries => {

        for (const entry of entries) {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              'visible'
            );

            observer.unobserve(
              entry.target
            );
          }
        }
      },
      {
        threshold: 0.07
      }
    );
  }

  elements.forEach(element => {
    observer.observe(element);
  });
}

observeReveals();


/* ==========================================
   LINKS DAS ÁREAS DE ATUAÇÃO
   ========================================== */

document
  .querySelectorAll('[data-area]')
  .forEach(link => {

    link.addEventListener('click', () => {

      const category = link.dataset.area;

      const button = [
        ...document.querySelectorAll(
          '#filters .filter'
        )
      ].find(item =>
        item.dataset.filter === category
      );

      if (button) {
        button.click();
      }
    });
  });
