/* Universo da Hellen — transições entre páginas e cartão→detalhe.
   A navegação é nativa, sem interceptação de links ou dependências.
   Navegadores sem suporte continuam funcionando normalmente. */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let clickedLink = null;
  let focusNode = null;
  let previousName = '';

  function sameOriginHtml(url) {
    try {
      const parsed = new URL(url, location.href);
      return parsed.origin === location.origin && /\.html$/i.test(parsed.pathname);
    } catch { return false; }
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || !sameOriginHtml(link.href)) return;
    clickedLink = link;
  }, { capture: true });

  // Nome único temporário para conexão visual entre um cartão e o detalhe.
  window.addEventListener('pageswap', (event) => {
    if (!event.viewTransition || reducedMotion.matches || !clickedLink) return;
    const destination = event.activation?.to?.url;
    if (!destination || new URL(clickedLink.href).pathname !== new URL(destination).pathname) return;
    if (!/\/projetos\/[^/]+\.html$/i.test(new URL(destination).pathname)) return;

    const card = clickedLink.closest('.ux-catalog-card, .ux-showcase');
    if (!card) return;
    // Um nome de transição deve ser exclusivo por documento.
    document.querySelectorAll('.ux-catalog-card').forEach(other => {
      if (other !== card) other.style.viewTransitionName = 'none';
    });
    focusNode = card;
    previousName = card.style.viewTransitionName;
    card.style.viewTransitionName = 'uh-projeto-foco';
  });

  window.addEventListener('pagereveal', (event) => {
    if (!event.viewTransition || reducedMotion.matches) return;
    const fromURL = event.activation?.from?.url;
    if (!fromURL || !/\/projetos\.html$/i.test(new URL(fromURL).pathname)) return;
    if (!/\/projetos\/[^/]+\.html$/i.test(location.pathname)) return;

    // O destino pode ter uma estrutura própria; selecionamos o primeiro título
    // do conteúdo principal e não alteramos dimensões, classes nem aparência.
    const target = document.querySelector('main h1');
    if (!target) return;
    const oldName = target.style.viewTransitionName;
    target.style.viewTransitionName = 'uh-projeto-foco';
    event.viewTransition.finished.finally(() => {
      target.style.viewTransitionName = oldName;
    }).catch(() => {});
  });

  // Ao retornar do histórico, não deixe nome temporário no cartão.
  window.addEventListener('pageshow', () => {
    if (focusNode) focusNode.style.viewTransitionName = previousName;
    focusNode = null;
  });
})();
