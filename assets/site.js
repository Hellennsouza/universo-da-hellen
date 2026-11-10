'use strict';

const PROJECTS = [
  {"title": "Operação Espelho Falso — Detecção de Deepfakes", "cat": "Data Science", "desc": "Prova de conceito para investigação de fraude com visão computacional, biometria e explicabilidade de IA.", "tools": "Python, OpenCV, NumPy, NetworkX, XAI", "status": "Pesquisa documentada", "page": "projetos/operacao-espelho-falso-deteccao-de-deepfakes.html", "cover": "assets/capas/espelho.png", "featured": true},
  {"title": "ICDF — Framework de Decisão em Crédito Integrado", "cat": "Data Science", "desc": "Framework que combina risco financeiro (ICD) e qualidade dos dados (IQD) para decisões complexas.", "tools": "Python, MLOps, PyTorch, XGBoost", "status": "Documentado", "page": "projetos/icdf-framework-de-decisao-em-credito-integrado.html", "cover": "assets/capas/icdf.png", "featured": true},
  {"title": "Painel Estratégico Itaú Unibanco — PI1", "cat": "Data Science", "desc": "Dashboard interativo para análise institucional, matrizes estratégicas e auditoria.", "tools": "Python, Streamlit, Pandas", "status": "Projeto Acadêmico", "page": "projetos/painel-estrategico-itau-pi1.html", "cover": "assets/capas/itau.png"},
  {"title": "Análise de Risco de Crédito e Inadimplência", "cat": "Finanças", "desc": "Modelo preditivo (Random Forest) para identificar risco de default em carteira simulada.", "tools": "Python, Scikit-learn", "status": "Documentado", "page": "projetos/analise-de-risco-de-credito-e-inadimplencia.html", "cover": "assets/capas/risco.png"},
  {"title": "Gestão Financeira e Operacional — Duke", "cat": "Gestão", "desc": "Recuperação de caixa, indicadores de desempenho (KPIs) e controle operacional.", "tools": "Gestão financeira, Liderança", "status": "Experiência Profissional", "page": "projetos/gestao-financeira-duke.html", "cover": "assets/capas/gestao-financeira-duke.png"},
  {"title": "Arduino: Meninas na Ciência", "cat": "Robótica", "desc": "Ensino de robótica e programação C/C++ para alunas de escolas públicas da Bahia.", "tools": "Arduino, C/C++", "status": "Extensão", "page": "projetos/arduino-meninas-na-ciencia.html", "cover": "assets/capas/meninas.png"},
  {"title": "Caminhão da Ciência — UFOB", "cat": "Robótica", "desc": "Divulgação científica e aproximação de estudantes com tecnologia e lógica de programação.", "tools": "Educação tecnológica", "status": "Extensão", "page": "projetos/caminhao-da-ciencia-ufob.html", "cover": "assets/capas/caminhao.png"},
  {"title": "GlobanTIX", "cat": "Empreendedorismo", "desc": "Consultoria 360° integrando tecnologia, finanças e gestão.", "tools": "Business Design", "status": "Em construção", "page": "projetos/globantix.html", "cover": "assets/capas/globantix.png"},
  {"title": "Reborna", "cat": "Empreendedorismo", "desc": "Hub estratégico voltado a branding e posicionamento de imagem.", "tools": "Marketing", "status": "Em construção", "page": "projetos/reborna.html", "cover": "assets/capas/reborna.png"}
];

const cards = document.getElementById('cards'), search = document.getElementById('searchProjects');
let currentCategory = 'Todos';
let observer;

const normalize = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function el(tag, cls, text) { 
  const n = document.createElement(tag); 
  if (cls) n.className = cls; 
  if (text !== undefined) n.textContent = text; 
  return n; 
}

function makeCard(p, index) {
  // O primeiro card sempre recebe o destaque maior na grade (se for de busca geral/categoria específica)
  const isMainFeatured = (index === 0 && (currentCategory === 'Todos' || search.value.trim() !== ''));
  const articleCls = isMainFeatured ? 'project featured-main reveal visible' : 'project reveal';
  
  const a = el('article', articleCls);
  
  const v = el('div', 'visual');
  const img = el('img');
  img.src = p.cover;
  img.alt = p.title;
  img.loading = isMainFeatured ? 'eager' : 'lazy';
  v.append(img);
  a.append(v);

  const body = el('div', 'project-body');
  
  const meta = el('div', 'project-meta');
  meta.append(el('span', 'tag', p.cat));
  if(p.tools) meta.append(el('span', 'tag tech', p.tools.split(',')[0])); // Mostra a 1ª tecnologia
  if(p.status) meta.append(el('span', 'tag', p.status));
  
  body.append(meta, el('h3', '', p.title), el('p', '', p.desc));
  
  const link = el('a', 'more', 'Ver documentação completa →');
  link.href = p.page || '#projetos';
  body.append(link);
  
  a.append(body);
  return a;
}

function render() {
  const q = normalize(search.value.trim());
  const filtered = PROJECTS.filter(p => 
    (currentCategory === 'Todos' || p.cat === currentCategory) &&
    normalize([p.title, p.desc, p.cat, p.tools].join(' ')).includes(q)
  );
  
  cards.replaceChildren(...filtered.map((p, index) => makeCard(p, index)));
  
  if (!filtered.length) {
    cards.append(el('p', 'empty', 'Nenhum projeto encontrado para esta busca.'));
  }
  
  document.getElementById('resultsCount').textContent = filtered.length + ' registro(s) encontrado(s)';
  observeReveals();
}

// Filtros do Portfólio
for (const b of document.querySelectorAll('.filter')) {
  b.addEventListener('click', () => {
    currentCategory = b.dataset.filter;
    for (const other of document.querySelectorAll('.filter')) {
      other.classList.toggle('active', other === b);
    }
    render();
  });
}

search.addEventListener('input', render);
render(); // Inicialização

// Interações do Menu Mobile
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

// Links Contextuais da Seção "Áreas" para o Catálogo
document.querySelectorAll('[data-area]').forEach(link => {
  link.addEventListener('click', () => {
    const category = link.dataset.area;
    const button = [...document.querySelectorAll('#filters .filter')].find(b => b.dataset.filter === category);
    if (button) button.click();
  });
});

// Scroll Spy (Navegação Contextual)
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.navlinks a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Observador de Aparição (Fade in nas seções)
function observeReveals() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(x => x.classList.add('visible'));
    return;
  }
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(x => x.classList.add('visible'));
    return;
  }
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1 });
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach(x => observer.observe(x));
}

observeReveals();
