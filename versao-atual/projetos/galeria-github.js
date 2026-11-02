/* Galeria de evidências públicas: usa README e arquivos de imagem dos repositórios. */
(async function(){
 const owner='Hellennsouza';
 const repoLink=document.querySelector('a[href^="https://github.com/Hellennsouza/"]');
 const param=new URLSearchParams(location.search).get('repo');
 const repo=param || (repoLink && new URL(repoLink.href).pathname.split('/')[2]);
 if(!repo || !/^[\w.-]+$/.test(repo))return;
 const panels=[...document.querySelectorAll('.panel')];
 let panel=panels.find(p=>/Galeria e evidências/i.test(p.querySelector('h2')?.textContent||''));
 if(!panel){panel=document.createElement('section');panel.className='panel';panel.innerHTML='<h2>Galeria e evidências do GitHub</h2>';(document.querySelector('.layout > div')||document.querySelector('main')||document.body).appendChild(panel)}
 panel.innerHTML='<h2>Galeria e evidências do GitHub</h2><p class="gallery-status">Buscando imagens originais do projeto…</p><div class="gh-gallery"></div><p class="gallery-credit"></p>';
 const style=document.createElement('style');style.textContent='.gh-gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}.gh-gallery figure{margin:0;border:1px solid #dce5f2;border-radius:13px;overflow:hidden;background:#f8faff}.gh-gallery img{display:block;width:100%;height:200px;object-fit:contain;background:white}.gh-gallery figcaption{padding:10px 12px;font-size:13px;overflow-wrap:anywhere;color:#4b5870}.gh-gallery a{display:block}.gallery-credit{font-size:13px;color:#65738b}';document.head.appendChild(style);
 const api=async path=>{let r=await fetch('https://api.github.com/'+path,{headers:{Accept:'application/vnd.github+json'}});if(!r.ok)throw Error('GitHub API '+r.status);return r.json()};
 const safeUrl=s=>{try{const u=new URL(s);return ['https:','http:'].includes(u.protocol)?u.href:null}catch{return null}};
 const entries=[];const seen=new Set();
 function add(url,label,rank=1){url=safeUrl(url);if(!url||seen.has(url))return;if(/(?:shields\.io|badgen\.net|github-readme-stats|visitor-badge|badge)/i.test(url))return;seen.add(url);entries.push({url,label:label||'Imagem do projeto',rank})}
 try{
  const meta=await api('repos/'+owner+'/'+encodeURIComponent(repo));
  try{
   const readme=await api('repos/'+owner+'/'+encodeURIComponent(repo)+'/readme');
   const raw=await fetch(readme.download_url);if(raw.ok){const md=await raw.text();
    const base='https://raw.githubusercontent.com/'+owner+'/'+encodeURIComponent(repo)+'/'+encodeURIComponent(meta.default_branch)+'/';
    const resolve=path=>{path=path.trim().replace(/^['"]|['"]$/g,'');if(/^https?:\/\//i.test(path))return path;if(path.startsWith('//'))return 'https:'+path;if(path.startsWith('data:')||path.startsWith('#'))return null;return new URL(path,base).href};
    for(const m of md.matchAll(/!\[([^\]]*)\]\((<?[^\s)>]+>?)(?:\s+[^)]*)?\)/g))add(resolve(m[2].replace(/^<|>$/g,'')),m[1],0);
    for(const m of md.matchAll(/<img\b[^>]*?src\s*=\s*["']([^"']+)["'][^>]*>/gi))add(resolve(m[1]),'Imagem do README',0);
   }
  }catch(e){}
  try{
   const tree=await api('repos/'+owner+'/'+encodeURIComponent(repo)+'/git/trees/'+encodeURIComponent(meta.default_branch)+'?recursive=1');
   for(const f of tree.tree||[]){if(f.type!=='blob'||!(/\.(png|jpe?g|gif|webp|svg)$/i.test(f.path)))continue;if(/(^|\/)(node_modules|\.git|vendor|venv|\.venv)\//i.test(f.path))continue;
    add('https://raw.githubusercontent.com/'+owner+'/'+encodeURIComponent(repo)+'/'+encodeURIComponent(meta.default_branch)+'/'+f.path.split('/').map(encodeURIComponent).join('/'),f.path,1);
   }
  }catch(e){}
  entries.sort((a,b)=>a.rank-b.rank);
  const grid=panel.querySelector('.gh-gallery'),status=panel.querySelector('.gallery-status');
  let count=0;
  for(const e of entries.slice(0,36)){
   const figure=document.createElement('figure'),link=document.createElement('a'),img=document.createElement('img'),cap=document.createElement('figcaption');
   link.href=e.url;link.target='_blank';link.rel='noopener noreferrer';img.src=e.url;img.loading='lazy';img.alt=e.label;cap.textContent=e.label;link.append(img);figure.append(link,cap);grid.append(figure);
   img.addEventListener('load',()=>{count++;status.textContent=count+' imagem(ns) original(is) carregada(s) do GitHub.'});
   img.addEventListener('error',()=>{figure.remove();if(!count&&!grid.children.length)status.textContent='Não foi possível carregar imagens deste repositório.'});
  }
  if(!entries.length)status.textContent='Nenhuma imagem pública foi encontrada no README ou nos arquivos deste repositório.';
  panel.querySelector('.gallery-credit').textContent='Fonte: github.com/'+owner+'/'+repo+' · Imagens carregadas do repositório original; dependem de conexão à internet.';
 }catch(e){panel.querySelector('.gallery-status').textContent='Não foi possível consultar as imagens do GitHub agora. Abra esta página com internet e tente novamente.'}
})();
