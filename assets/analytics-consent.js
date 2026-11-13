/*
  Universo da Hellen | Estatísticas de navegação
  GA4: G-XKVSE9F9FZ
  Medição básica: a biblioteca de analytics SÓ é solicitada após consentimento.
  Nenhum identificador pessoal é enviado pelos eventos personalizados.
*/
(function () {
  'use strict';
  if (window.__uhPrivacyInitialized) return;
  window.__uhPrivacyInitialized = true;

  var GA_ID = 'G-XKVSE9F9FZ';
  var GTM_ID = 'GTM-NTWGMMJ4';
  var STORAGE_KEY = 'universo_hellen_consent_v1';
  var CONSENT_VERSION = 1;
  var scriptUrl = document.currentScript && document.currentScript.src;
  var privacyUrl = scriptUrl ? new URL('../privacidade.html', scriptUrl).href : '/privacidade.html';
  var allowed = false;
  var analyticsLoaded = false;
  var currentChoice = readChoice();
  var dialogLastFocus = null;

  // Apenas consentimento em armazenamento local. Não inserir tags antes da escolha.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  function readChoice() {
    try {
      var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (data && data.version === CONSENT_VERSION && typeof data.analytics === 'boolean') {
        return data;
      }
    } catch (error) { /* O site continua sem rastreamento. */ }
    return null;
  }

  function saveChoice(value) {
    currentChoice = { version: CONSENT_VERSION, analytics: Boolean(value), saved_at: new Date().toISOString() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(currentChoice)); } catch (error) { /* Sem persistência. */ }
  }

  function dropAnalyticsCookies() {
    // Remove somente cookies GA conhecidos que possam permanecer após revogação.
    var cookies = document.cookie.split(';');
    var domain = location.hostname;
    var domains = ['', domain, '.' + domain];
    if (domain.endsWith('.universodahellen.com.br')) domains.push('.universodahellen.com.br');
    cookies.forEach(function (part) {
      var name = part.split('=')[0].trim();
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '') + '; SameSite=Lax';
      });
    });
  }

  // Carrega o contêiner GTM somente depois do aceite de estatísticas.
  // ATENÇÃO: revisar no GTM se já existe tag GA4 para evitar page_view duplicada.
  function activateTagManager() {
    if (document.querySelector('script[data-uh-gtm]')) return;
    window.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
    var gtm = document.createElement('script');
    gtm.async = true;
    gtm.dataset.uhGtm = 'true';
    gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
    document.head.appendChild(gtm);
  }

  function activateAnalytics() {
    if (allowed) return;
    allowed = true;
    window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('set', 'allow_google_signals', false);
    window.gtag('set', 'allow_ad_personalization_signals', false);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      // Evitar dados potencialmente pessoais na query string da página.
      page_location: location.origin + location.pathname,
      page_path: location.pathname,
      send_page_view: true
    });
    activateTagManager();
    if (!analyticsLoaded) {
      analyticsLoaded = true;
      var tag = document.createElement('script');
      tag.async = true;
      tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
      tag.dataset.universoHellenAnalytics = 'true';
      document.head.appendChild(tag);
    }
  }

  function deactivateAnalytics() {
    var wasActive = allowed || analyticsLoaded;
    allowed = false;
    window.gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    dropAnalyticsCookies();
    // Após aceitar e depois revogar, recarregar elimina a tag já ativa do documento.
    if (wasActive) window.location.reload();
  }

  function track(eventName, parameters) {
    if (!allowed || !/^[a-z][a-z0-9_]{0,39}$/.test(eventName)) return;
    window.gtag('event', eventName, parameters || {});
  }

  function attachEvents() {
    document.addEventListener('click', function (event) {
      if (!allowed) return;
      var node = event.target;
      var a = node && node.closest ? node.closest('a[href]') : null;
      if (!a) return;
      var url;
      try { url = new URL(a.href, location.href); } catch (e) { return; }
      if ((url.hostname === 'form.jotform.com' || url.hostname === 'www.jotform.com') && url.pathname.indexOf('263156092560052') >= 0) {
        track('iniciar_solicitacao', { origem_pagina: location.pathname, destino: 'jotform' });
      } else if (url.origin === location.origin && /\/projetos\/[^/]+\.html$/.test(url.pathname)) {
        track('abrir_projeto', { projeto: url.pathname.split('/').pop().replace(/\.html$/, '').slice(0, 90) });
      } else if (url.origin === location.origin && /\/solucoes\.html$/.test(url.pathname)) {
        track('acessar_solucoes', { origem_pagina: location.pathname });
      }
    }, true);
  }

  function element(tag, attributes, textContent) {
    var node = document.createElement(tag);
    if (attributes) Object.keys(attributes).forEach(function (name) {
      if (name === 'className') node.className = attributes[name];
      else node.setAttribute(name, attributes[name]);
    });
    if (textContent !== undefined) node.textContent = textContent;
    return node;
  }

  function button(text, className, handler) {
    var el = element('button', { type: 'button', className: className }, text);
    el.addEventListener('click', handler);
    return el;
  }

  function buildInterface() {
    if (!document.body) return;
    var root = element('div', { id: 'uh-privacy-root', className: 'uh-privacy-root' });
    var opener = button('Privacidade', 'uh-privacy-opener', openPreferences);
    opener.setAttribute('aria-label', 'Gerenciar preferências de privacidade');
    root.appendChild(opener);

    var banner = element('section', {
      className: 'uh-consent-banner', role: 'dialog',
      'aria-label': 'Escolhas de privacidade', 'aria-describedby': 'uh-privacy-intro'
    });
    var heading = element('div', { className: 'uh-consent-heading' });
    heading.appendChild(element('span', { className: 'uh-consent-symbol', 'aria-hidden': 'true' }, '✦'));
    heading.appendChild(element('h2', {}, 'Sua privacidade importa'));
    banner.appendChild(heading);
    banner.appendChild(element('p', { id: 'uh-privacy-intro' },
      'Usamos estatísticas do Google Analytics para entender quais páginas e projetos interessam aos visitantes. Só ativamos essa medição com sua autorização. O site funciona mesmo que você recuse.'));
    var bannerLink = element('a', { href: privacyUrl }, 'Política de privacidade');
    banner.appendChild(bannerLink);
    var actions = element('div', { className: 'uh-consent-actions' });
    actions.appendChild(button('Rejeitar não essenciais', 'uh-btn uh-btn-secondary', function () { choose(false); }));
    actions.appendChild(button('Personalizar', 'uh-btn uh-btn-text', openPreferences));
    actions.appendChild(button('Aceitar estatísticas', 'uh-btn uh-btn-primary', function () { choose(true); }));
    banner.appendChild(actions);
    root.appendChild(banner);

    var overlay = element('div', { className: 'uh-privacy-overlay', hidden: '' });
    var panel = element('section', {
      className: 'uh-privacy-panel', role: 'dialog', 'aria-modal': 'true',
      'aria-labelledby': 'uh-privacy-title'
    });
    var header = element('div', { className: 'uh-privacy-panel-head' });
    header.appendChild(element('h2', { id: 'uh-privacy-title' }, 'Preferências de privacidade'));
    var closeButton = button('×', 'uh-privacy-close', closePreferences);
    closeButton.setAttribute('aria-label', 'Fechar preferências');
    header.appendChild(closeButton);
    panel.appendChild(header);
    panel.appendChild(element('p', {}, 'Você decide se deseja permitir as estatísticas de navegação. Pode alterar sua escolha a qualquer momento.'));

    var essential = element('div', { className: 'uh-preference-item' });
    var essentialText = element('div', {});
    essentialText.appendChild(element('strong', {}, 'Funcionais essenciais'));
    essentialText.appendChild(element('p', {}, 'Preferências locais para o funcionamento do aviso de privacidade.'));
    essential.appendChild(essentialText);
    essential.appendChild(element('span', { className: 'uh-preference-required' }, 'Sempre ativos'));
    panel.appendChild(essential);

    var stats = element('div', { className: 'uh-preference-item' });
    var statsText = element('div', {});
    statsText.appendChild(element('strong', { id: 'uh-stats-title' }, 'Estatísticas de navegação'));
    statsText.appendChild(element('p', {}, 'Google Analytics 4: visitas, páginas, origem aproximada e cliques em serviços. Sem captura de nome, e-mail ou WhatsApp.'));
    stats.appendChild(statsText);
    var checkbox = element('input', { type: 'checkbox', id: 'uh-stats-allow', 'aria-labelledby': 'uh-stats-title' });
    stats.appendChild(checkbox);
    panel.appendChild(stats);
    panel.appendChild(element('p', { className: 'uh-privacy-help' }, 'Não usamos cookies publicitários nesta etapa. Campanhas futuras exigirão uma escolha específica adicional.'));
    var policy = element('a', { href: privacyUrl }, 'Ler política de privacidade completa');
    panel.appendChild(policy);
    var save = button('Salvar preferências', 'uh-btn uh-btn-primary uh-btn-full', function () { choose(checkbox.checked); });
    panel.appendChild(save);
    overlay.appendChild(panel);
    root.appendChild(overlay);
    document.body.appendChild(root);

    if (currentChoice) banner.hidden = true;
    else { banner.hidden = false; opener.classList.add('uh-opener-hidden'); }

    function choose(value) {
      saveChoice(value);
      banner.hidden = true;
      opener.classList.remove('uh-opener-hidden');
      closePreferences();
      if (value) activateAnalytics();
      else deactivateAnalytics();
    }

    function openPreferences() {
      dialogLastFocus = document.activeElement;
      checkbox.checked = Boolean(currentChoice && currentChoice.analytics);
      overlay.hidden = false;
      document.body.classList.add('uh-privacy-dialog-open');
      closeButton.focus();
    }

    function closePreferences() {
      overlay.hidden = true;
      document.body.classList.remove('uh-privacy-dialog-open');
      if (dialogLastFocus && typeof dialogLastFocus.focus === 'function') dialogLastFocus.focus();
    }

    overlay.addEventListener('click', function (event) { if (event.target === overlay) closePreferences(); });
    overlay.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closePreferences();
      if (event.key !== 'Tab') return;
      var focusables = Array.prototype.slice.call(panel.querySelectorAll('a[href],button,input:not([disabled])'));
      if (!focusables.length) return;
      if (event.shiftKey && document.activeElement === focusables[0]) { event.preventDefault(); focusables[focusables.length - 1].focus(); }
      else if (!event.shiftKey && document.activeElement === focusables[focusables.length - 1]) { event.preventDefault(); focusables[0].focus(); }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !overlay.hidden) closePreferences();
    });
  }

  // Guardar consentimento anterior, mas não solicitar scripts do Google antes de aceitar.
  // Mesmo em navegação com páginas novas, o modo consentimento começa negado.
  if (currentChoice && currentChoice.analytics) activateAnalytics();
  attachEvents();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildInterface, { once: true });
  else buildInterface();
})();
