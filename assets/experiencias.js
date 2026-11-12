'use strict';
/* Universo da Hellen: navegação e catálogo de projetos multidisciplinar.
   Reutiliza PROJECTS do site.js sem editar ou duplicar o cadastro original. */
(() => {
  const menu = document.getElementById('uxMenu');
  const links = document.getElementById('uxLinks');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }

  const catalog = document.getElementById('uxCatalog');
  if (!catalog) return;
  const search = document.getElementById('uxSearch');
  const count = document.getElementById('uxResultCount');
  const empty = document.getElementById('uxCatalogEmpty');
  const buttons = [...document.querySelectorAll('.ux-area[data-category]')];
  let category = 'all';
  const normalize = text => String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // Documentação e projetos complementares existentes no repositório.
  const extras = [
    {title:'Financial Intelligence Lab',cat:'Finanças',desc:'Ferramenta interativa de indicadores e simulações financeiras.',page:'projetos/analise-simulacao-financeira.html',cover:'assets/capas/financial-intelligence-lab.png',groups:['business','data']},
    {title:'SYMBIO-SUIT — Pesquisa Teórica',cat:'Pesquisa',desc:'Investigação teórica sobre materiais poliméricos magnetoativos.',page:'documentos/symbio-suit.docx',cover:'assets/capas/symbio-suit.png',groups:['research','experiments']},
    {title:'Inteligência Artificial Explicável (XAI) — SHAP e Teoria dos Jogos Cooperativos',cat:'Pesquisa',desc:'Resenha crítica acadêmica sobre XAI, SHAP, valores de Shapley e explicabilidade de modelos preditivos.',page:'documentos/resenha-xai-shap.pdf',cover:'assets/capas/xai-shap.svg',keywords:'XAI SHAP LIME IA explicável explicabilidade teoria dos jogos cooperativos resenha pesquisa',groups:['research','data']},
    {title:'Hackathon Grupo Petrópolis — Código Malte | Coroa Imperial — Black Princess',cat:'Empreendedorismo',desc:'Projeto conceitual de inovação em equipe: embalagem conectada, pesquisa de mercado, experiência do consumidor e estratégia premium.',page:'projetos/coroa-imperial.html',cover:'assets/projetos/coroa-imperial/capa.png',keywords:'hackathon hackaton hackatoon grupo petropolis codigo malte coroa imperial black princess embalagem tecnologia',groups:['business','experiments']},
    {title:'Universo da Hellen — Portfólio Web',cat:'Tecnologia',desc:'Site pessoal criado em HTML, CSS e JavaScript, com domínio próprio.',page:'index.html',cover:'assets/universo-hellen-preview.png',groups:['tech','personal']}
  ];
  const registered = typeof PROJECTS !== 'undefined' ? PROJECTS.filter(p => p && p.title && p.hidden !== true) : [];
  const groupsFor = p => {
    if (p.groups) return p.groups;
    const base = ({'Data Science':['data','research'],'Robótica':['tech','research'],'Finanças':['business'],'Gestão':['business'],'Empreendedorismo':['business','personal']})[p.cat] || ['personal'];
    if (/espelho falso|risco de cr[eé]dito|sql|streamlit/i.test(p.title)) base.push('experiments');
    return base;
  };
  const existingPages = new Set(registered.map(p => p.page));
  // Hackathon e XAI têm prioridade no catálogo para facilitar sua descoberta.
  const extrasVisible = extras.filter(p => !existingPages.has(p.page));
  const priorityPages = new Set(['projetos/coroa-imperial.html', 'documentos/resenha-xai-shap.pdf']);
  const projects = [
    ...extrasVisible.filter(p => priorityPages.has(p.page)),
    ...registered,
    ...extrasVisible.filter(p => !priorityPages.has(p.page))
  ].map((p,i) => ({...p,groups:groupsFor(p),vtName:'uh-card-'+i}));

  function node(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
  function makeProject(p, animate){
    const item=node('article','ux-catalog-card');
    // Identificador estável: o mesmo projeto anima sua posição durante filtros.
    if (animate) item.style.viewTransitionName = p.vtName;
    const visual=node('a','ux-catalog-img');visual.href=p.page||'#catalogo';visual.setAttribute('aria-label','Abrir '+p.title);
    if(p.cover){const img=node('img');img.src=p.cover;img.alt='';img.loading='lazy';img.addEventListener('error',()=>{img.style.display='none'});visual.append(img);}
    const body=node('div','ux-catalog-card-content');
    body.append(node('span','ux-catalog-cat',p.cat||'Projeto'),node('h3','',p.title),node('p','',p.desc||'Acesse a página para conhecer este projeto.'));
    if(p.status && (/constru[cç][aã]o/i.test(p.status))){body.append(node('span','ux-catalog-cat','Registro em construção'));}
    const action=node('a','ux-pill ux-pill-outline','Conhecer projeto ↗');action.href=p.page||'#catalogo';body.append(action);
    item.append(visual,body);return item;
  }
  function render(){
    const q=normalize(search?.value.trim()||'');
    const matching=projects.filter(p => (category==='all'||p.groups.includes(category)) && normalize([p.title,p.desc,p.cat,p.tools,p.context,p.status,p.keywords].join(' ')).includes(q));
    catalog.replaceChildren(...matching.map((p,i)=>makeProject(p,i<18)));
    count.textContent=matching.length===1?'1 projeto encontrado':`${matching.length} projetos encontrados`;
    empty.hidden=matching.length>0;
  }
// O navegador só anima quando a API existe e a pessoa permite movimento.
const motionAllowed = () => typeof document.startViewTransition === 'function' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function changeWithTransition(update) {
  if (!motionAllowed()) { update(); return null; }
  return document.startViewTransition(update);
}
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  const transition=changeWithTransition(()=>{
    category=btn.dataset.category;
    buttons.forEach(other=>other.setAttribute('aria-pressed',String(other===btn)));
    render();
  });
  const scroll=()=>document.getElementById('catalogo')?.scrollIntoView({
    behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'
  });
  if(transition) transition.finished.then(scroll,scroll);
  else scroll();
}));
// Busca instantânea, com um atraso mínimo para evitar dezenas de snapshots
// enquanto o visitante digita rapidamente.
let searchTimer;
search?.addEventListener('input',()=>{
  clearTimeout(searchTimer);
  searchTimer=setTimeout(()=>changeWithTransition(render),110);
});
  render();
})();
