#!/usr/bin/env python3
"""Adicionar a integração do Analytics em cópias geradas para GitHub Pages.

Não altera arquivos commitados: durante a publicação, o job do Pages injeta
os dois recursos em todas as páginas HTML válidas, inclusive /projetos/.
"""
from pathlib import Path
from html import escape
import re
import sys

MARK = 'data-uh-tracking="G-XKVSE9F9FZ"'
BASE = Path(sys.argv[1] if len(sys.argv) > 1 else '.').resolve()
COUNT = 0
SKIPPED = []

for path in sorted(BASE.rglob('*.html')):
    if any(x in {'.git', '.github', 'node_modules'} for x in path.relative_to(BASE).parts):
        continue
    raw = path.read_text(encoding='utf-8-sig')
    if MARK in raw:
        continue
    if not re.search(r'</head\s*>', raw, flags=re.IGNORECASE):
        SKIPPED.append((str(path.relative_to(BASE)), 'sem </head>'))
        continue
    if re.search(r'gtag/js\?id=|googletagmanager\.com/gtm\.js', raw, flags=re.I):
        SKIPPED.append((str(path.relative_to(BASE)), 'já contém Google tag/GTM; revisar manualmente'))
        continue
    relative = '../' * (len(path.relative_to(BASE).parts) - 1)
    snippet = (
        f'  <!-- Universo da Hellen: analytics e consentimento LGPD -->\n'
        f'  <link rel="stylesheet" href="{relative}assets/analytics-consent.css" {MARK}>\n'
        f'  <script defer src="{relative}assets/analytics-consent.js" {MARK}></script>\n'
    )
    updated = re.sub(r'</head\s*>', lambda match: snippet + match.group(0), raw, count=1, flags=re.IGNORECASE)
    path.write_text(updated, encoding='utf-8')
    COUNT += 1

print(f'Analytics (G-XKVSE9F9FZ): integração inserida em {COUNT} páginas.')
for name, why in SKIPPED:
    print(f'Aviso: {name}: {why}')
