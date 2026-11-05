import streamlit as st
import pandas as pd
import streamlit.components.v1 as components
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

st.set_page_config(page_title="Painel TV 2 - Itaú Unibanco (PI1)", page_icon="📊", layout="wide")

img_name = "PROJETO_FORTALECENDO_A_CULTURA_CDN_Apresentação.pptx.png"
has_image = os.path.exists(img_name)

st.sidebar.title("🎛️ Controle da TV 2")

if has_image:
    st.sidebar.image(img_name, use_container_width=True)
else:
    st.sidebar.markdown("""
    <div style="background-color: #EC7000; padding: 10px; border-radius: 5px; text-align: center; color: white; font-weight: bold;">
        🏛️ FATEC VOTORANTIM | ITAÚ
    </div>
    """, unsafe_allow_html=True)

opcoes = [
    "🎯 Objetivo & Escopo do Projeto",
    "📊 Dashboard Geral de KPIs (2T26)",
    "🌿 Índices ESG & Sustentabilidade",
    "⚖️ Critérios de Compra (Hill, 2000)",
    "🧩 Matriz SWOT (Estática)",
    "🔄 Matriz TOWS (Estratégias Prescritivas)",
    "📌 Matriz BCG & Abacaxis",
    "🎯 Objetivos SMART & Metas 2027",
    "📊 Balanced Scorecard (BSC)",
    "📝 Plano de Ação 5W2H",
    "🚨 Radiografia de Reclamações (Apêndice A)",
    "🔍 Auditoria CVM/COSIF (Apêndice B)",
    "🎨 Template Visual & Central de Mídia",
    "👥 Equipe & Integrantes do Projeto",
    "⏱️ Cronômetro Vivo da Apresentação"
]
selecao = st.sidebar.radio("Selecione o painel para exibir na TV 2:", opcoes)

if selecao == "🎯 Objetivo & Escopo do Projeto":
    st.title("🎯 Projeto Integrador I (PI1) - Conhecendo o Negócio")
    st.subheader("Análise Institucional e Estratégica do Itaú Unibanco Holding S.A.")
    
    c1, c2, c3 = st.columns(3)
    c1.metric("Instituição de Ensino", "Fatec Votorantim", "Centro Paula Souza")
    c2.metric("Curso", "Ciência de Dados", "para Negócios (CDN)")
    c3.metric("Metodologia Ágil", "Scrum / GitHub", "Backlog Documentado")
    
    st.markdown("---")
    st.markdown("""
    ### 📌 Objetivos Gerais do Estudo:
    1. **Diagnóstico Estratégico Multidisciplinar:** Avaliação da fusão Itaú-Unibanco (2008), estrutura de controle acionário da IUPAR (51,71% ON) e governança corporativa.
    2. **Análise de Competitividade:** Aplicação dos Critérios de Compra de Hill (2000) confrontando a liderança do Itaú em solidez contra a isenção de tarifas do **Nubank** e a presença do **Bradesco**.
    3. **Modelagem Prescritiva:** Matriz SWOT TOWS, mapa estratégico do Balanced Scorecard (BSC) e plano operacional 5W2H focados na retenção de depósitos à vista e redução do churn por atendimento.
    4. **Auditoria de Dados Financeiros (Apêndice B):** Identificação de divergências causadas por ferramentas informais de *web scraping* sem adaptação ao plano de contas COSIF do Banco Central.
    """)

elif selecao == "📊 Dashboard Geral de KPIs (2T26)":
    st.title("🏛️ Itaú Unibanco S.A. — Panorama Estratégico 2T26")
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Ativos Totais", "R$ 3,07 Tri", "~15% do SFN")
    c2.metric("Valor de Mercado", "R$ 492 Bi", "Líder B3")
    c3.metric("Clientes Ativos", "+70 Milhões", "América Latina & Global")
    c4.metric("Meta Churn BSC", "-40%", "Atendimento Varejo")
    
    st.markdown("---")
    col_l, col_r = st.columns(2)
    with col_l:
        st.subheader("Distribuição do Resultado Recorrente por Região")
        df_rec = pd.DataFrame({"Região": ["Brasil", "América Latina", "EUA / Europa / Ásia"], "Participação (%)": [94.6, 3.8, 1.6]})
        st.bar_chart(df_rec.set_index("Região"))
    with col_r:
        st.subheader("Market Share em Segmentos Chave")
        df_sh = pd.DataFrame({
            "Segmento Operacional": ["Private Banking", "Meios de Pagamento (Rede)", "Asset Management (Fundos)"],
            "Market Share (%)": [31.1, 24.0, 18.5]
        })
        st.dataframe(df_sh, use_container_width=True)

elif selecao == "🌿 Índices ESG & Sustentabilidade": 
    st.title("🌿 Governança ESG & Sustentabilidade Corporativa") 
    st.markdown( "O Itaú Unibanco integra a sustentabilidade como pilar estratégico de longo prazo, " "articulando a liderança em performance sustentável à geração de valor socioambiental e " "ao alinhamento com investidores globais." ) 
    # 1. Visão e Missão Institucional ESG 
    st.subheader("🎯 Identidade e Propósito ESG") 
    col_v1, col_v2 = st.columns(2) 
    with col_v1: st.info( 
        "### 👁️ Visão de Sustentabilidade\n" 
        "**'Ser o banco líder em performance sustentável e em satisfação dos clientes.'**\n\n" 
        "Construção de um framework ESG sustentável nos 18 países de atuação, integrando " 
        "a resiliência regional na América do Sul à atração de capital corporativo global." ) 
    with col_v2: st.success( 
        "### 📜 Missão Institucional\n" 
        "**'Gerar valor compartilhado por meio de serviços financeiros, orientação e inclusão, com responsabilidade socioambiental.'**\n\n" 
        "Ações focadas na promoção da inclusão financeira e transparência em relação aos serviços essenciais e impacto social." ) 
    st.markdown("---") 
    # 2. Principais Índices e Reconhecimentos ESG 
    st.subheader("🏆 Presença nos Principais Índices e Frameworks ESG") 
    c1, c2, c3 = st.columns(3) 
    with c1: st.success( 
        "### 🌍 DJSI World &amp; Emerging Markets\n" 
        "**Dow Jones Sustainability Index**\n\n" 
        "• Classificação *Best-in-Class* no índice mundial entre as companhias mais bem posicionadas em práticas ESG.\n" 
        "• Métrica central para captação de custódia e investimento institucional internacional." ) 
    with c2: st.info( 
        "### 🏛️ ISE B3 &amp; IGC B3\n" 
        "**Pioneirismo na B3**\n\n" 
        "• **ISE B3:** Participação voluntária e ininterrupta desde a criação do Índice de Sustentabilidade Empresarial em 2001.\n" 
        "• **IGC B3:** Pioneirismo na adesão ao segmento de Governança Corporativa Diferenciada da B3 desde 2001." ) 
    with c3: st.warning( 
        "### 📋 CDP &amp; Princípios ONU (PRB)\n" 
        "**Alianças e Transparência Global**\n\n" 
        "• Reporte transparente de riscos climáticos e emissões via **CDP**.\n" 
        "• Signatário dos **Princípios para Responsabilidade Bancária (PRB/UNEP FI)** e parceria com o **CEBDS**." ) 
    st.markdown("---") 
    # 3. Metas Estratégicas 2030 / 2050 
    st.subheader(
        "🚀 Compromissos Climáticos e Metas de Impacto (2030 e 2050)") 
    col_m1, col_m2 = st.columns(2) 
    with col_m1: 
            st.metric( 
                label="🎯 Meta de Financiamento Sustentável (até 2030)", 
                value="R$ 1,0 Trilhão", 
                delta="Mobilização de Crédito ESG & Transição" ) 
            st.write( 
                "Alocação de capital e estruturação de operações para setores de impacto positivo, energias renováveis, " 
                "infraestrutura sustentável, agricultura de baixo carbono e emissão de *Green Bonds*." ) 
    with col_m2: 
            st.metric( 
                label="🌍 Compromisso NetZero (até 2050)", 
                value="Zero Emissões Líquidas", 
                delta="Descarbonização Operacional e de Carteira" ) 
            st.write( 
                "Neutralização das emissões diretas (Escopos 1 e 2) e descarbonização progressiva das emissões " 
                "financiadas na carteira de crédito e investimentos (Escopo 3)." ) 
    st.markdown("---") 
    # 4. Governança, Valores e Regulação Climática 
    st.subheader("⚖️ Governança, Transparência e Política PRSAC") 
    st.markdown( 
        "- **Política de Responsabilidade Social, Ambiental e Climática (PRSAC):** Estrutura alinhada às resoluções do Conselho Monetário Nacional (CMN) e Banco Central do Brasil.\n" 
        "- **Valores Fundamentais:** Ética e Transparência, Gestão de Riscos e Integridade, Respeito aos Direitos Humanos e Responsabilidade Ambiental e Climática.\n" 
        "- **Supervisão e Riscos:** Avaliação rigorosa de riscos socioambientais na concessão de crédito a grandes corporações e monitoramento de PLD/FT." )

elif selecao == "⚖️ Critérios de Compra (Hill, 2000)":
    st.title("⚖️ Critérios de Compra dos Clientes (Hill, 2000)")
    st.markdown("Análise comparativa de alinhamento estratégico entre **Itaú**, **Bradesco** e **Nubank**:")
    
    df_h = pd.DataFrame({
        "Critério de Compra": [
            "Assessoria Especializada", 
            "Oferta Completa de Produtos", 
            "Solidez Institucional", 
            "Isenção de Tarifas / Gratuidades", 
            "Autonomia & UX no Aplicativo", 
            "Relacionamento Próximo & Rede Física"
        ],
        "Desempenho Itaú": [
            "🏆 Ganhador de Pedido (Private 31,1%)", 
            "🏆 Ganhador de Pedido (Rede 24%)", 
            "🏆 Ganhador de Pedido (R$ 3,07 Tri)", 
            "⚠️ Ponto Fraco (Varejo Massificado)", 
            "⚠️ Ponto Fraco (Queixas de Canais)", 
            "🔹 Qualificador Mantido"
        ],
        "Estratégia do Concorrente": [
            "Bradesco: Forte em PJ / Agro",
            "Bradesco: Carteira Ampla",
            "Bradesco: Alta Solidez",
            "🏆 Nubank: Ganhador (Sem Tarifa)",
            "🏆 Nubank: Ganhador (UX Simples)",
            "🏆 Bradesco: Ganhador (Presença)"
        ]
    })
    st.table(df_h)

elif selecao == "🧩 Matriz SWOT (Estática)":
    st.title("🧩 Matriz SWOT — Diagnóstico Ambiental Estático")
    st.markdown("Inventário dos fatores internos (Forças e Fraquezas) e externos (Oportunidades e Ameaças):")
    
    col1, col2 = st.columns(2)
    with col1:
        st.success("### 💪 FORÇAS (Strengths)\n- Solidez Financeira (R$ 3,07 Tri em ativos e R$ 492 Bi de valor de mercado).\n- Liderança em Private Banking (31,1% de share) e Meios de Pagamento (24%).\n- Governança sólida via holding IUPAR e gestão corporativa estruturada.")
        st.warning("### ⚠️ FRAQUEZAS (Weaknesses)\n- Cobrança de tarifas no varejo gerando churn para bancos digitais.\n- Atribulações e atritos no autoatendimento (36,5% das queixas em conta corrente).\n- Custo fixo elevado de manutenção da rede de agências físicas.")
    with col2:
        st.info("### 🚀 OPORTUNIDADES (Opportunities)\n- Expansão do Open Finance com IA preditiva no app.\n- Crescimento do Itaú Ion e tokenização de ativos digitais.\n- Consolidação de crédito ESG e financiamento sustentável.")
        st.error("### 🛡️ AMEAÇAS (Threats)\n- Concorrência agressiva do Nubank na captação de depósitos sem tarifa.\n- Escalada de fraudes digitais no setor (alta de 314% no golpe do Pix).\n- Pressão regulatória do BACEN para redução de tarifas de serviços.")

elif selecao == "🔄 Matriz TOWS (Estratégias Prescritivas)": 
    st.title("🔄 Matriz TOWS — Matriz Cruzada de Ação Executiva (Weihrich, 1982)") 
    st.markdown( 
        "O modelo TOWS cruza de forma sistemática os fatores internos (Forças e Fraquezas) " 
        "com o ambiente externo (Oportunidades e Ameaças) para gerar **diretrizes prescritivas** " 
        "**de tomada de decisão**. Escolha a aba abaixo para navegar entre as sub-tabelas da apresentação:" 
        ) 
    t1, t2, t3, t4 = st.tabs([ 
        "1. DA (Proteger a Base / Defesa)", 
        "2. DO (Corrigir Gargalos / Melhorias)", 
        "3. FA (Blindar Posição / Enfrentamento)", 
        "4. SO (Acelerar Crescimento / Crescimento)" 
     ]) 
            
    with t1: 
        st.error("### 🛡️ Tabela 12: Estratégias de Defesa (DA — Fraquezas x Ameaças)") 
        st.caption("Cruzamento de vulnerabilidades internas com ameaças externas. Foco em conter a evasão de clientes (churn) e mitigação de danos (Maximiano, 2004).") 
        df_da = pd.DataFrame({ 
            "Ponto Fraco (Interno)": [ 
                "Tarifas Menos Competitivas", 
                "Complexidade de Experiência Digital", 
                "Falta de Diferenciação no Relacionamento" 
                 ], 
            "Ameaça (Externa & Evidência)": [ 
                "Consulta pública de tarifas do BACEN com comparação transparente por preço (BCB, 2026).", 
                "98% das funcionalidades disponíveis em canais digitais na concorrência (Febraban, 2026).", 
                "92% dos bancos usam IA para velocidade rotineira, aumentando a disputa por agilidade (Febraban, 2026)." 
                ], 
            "Estratégia de Defesa Prescritiva": [ 
                "Disponibilizar ativamente o Pacote Essencial Gratuito do BACEN via pop-up no app antes que o cliente busque a portabilidade por insatisfação.", 
                "Corrigir gargalos de lentidão sistêmica e aplicar testes A/B contínuos nos funis de contratação de maior atrito.", 
                "Implementar sistema de triagem com análise de sentimento da IA, desviando clientes irritados direto para a fila prioritária humana." ] 
        }) 
        st.table(df_da) 
        with t2: 
            st.warning("### 🔧 Tabela 10: Estratégias de Melhorias (DO — Fraquezas x Oportunidades)") 
            st.caption("Superação de pontos fracos através da captura de oportunidades do ambiente externo (Chiavenato, 1999).") 
            
            df_do = pd.DataFrame({ 
                "Ponto Fraco (Interno)": [ 
                    "Tarifas Menos Competitivas", 
                    "Complexidade de Experiência Digital", 
                    "Falta de Diferenciação no Relacionamento" ], 
                "Oportunidade (Externa & Evidência)": [ 
                    "Gratuidade de serviços essenciais determinada pelo Banco Central (BCB, 2026).", 
                    "78% das transações feitas por celular; crescimento de 169% no Mobile Banking em 5 anos (Febraban, 2026).", 
                    "Queda de 33,33% no volume de contatos tradicionais; busca por resolução eficaz no 1º contato (Febraban, 2026)." ], 
                "Estratégia de Melhoria Prescritiva": [ 
                    "Implementar gamificação no app com isenção progressiva de tarifas atrelada ao engajamento (Pix, Portabilidade de Salário, Cartão).", 
                    "Otimizar a arquitetura de informação (UI/UX) do SuperApp, minimizando cliques e validando identidades com biometria facial contínua em background.", 
                    "Consolidar um CRM unificado (omnicanal) garantindo que o operador possua todo o histórico de tentativas do cliente via bot/app antes de atender." ] 
                }) 
            st.table(df_do) 
        
        with t3: 
            st.info("### ⚔️ Tabela 11: Estratégias de Enfrentamento (FA — Forças x Ameaças)") 
            st.caption("Uso de fortalezas consolidadas da organização para neutralizar ou mitigar ameaças do mercado.") 
            
            df_fa = pd.DataFrame({ 
                "Ponto Forte (Interno)": [ 
                    "Assessoria Especializada", 
                    "Portfólio Diversificado", 
                    "Solidez Institucional" ], 
                "Ameaça (Externa & Evidência)": [ 
                    "Investimentos de R$ 3 Bi em IA/Analytics pelos bancos, automatizando orientação financeira (Febraban, 2026).", 
                    "Pix responsável por 54,7% das transações (42,9 bi de operações), pressionando serviços tradicionais (BCB, 2025).", 
                    "174 mil relatos de golpes da falsa venda (+314% de alta), aumentando riscos operacionais e reputacionais (Febraban, 2025)." ], 
                "Estratégia de Enfrentamento Prescritiva": [ 
                    "Direcionar o atendimento humano hiper-especializado para operações estruturadas (M&A, sucessão), onde bots carecem de confiabilidade jurídica/emocional.", 
                    "Intensificar a oferta de produtos de limite de crédito vinculados a Pix integrados na jornada de pagamento do cliente.", 
                    "Expandir o bloqueio cautelar automatizado de transações anômalas cruzando geolocalização e biometria comportamental em tempo real." ] 
            }) 
            st.table(df_fa) 
        
        with t4: 
            st.success("### 🚀 Tabela 9: Estratégias de Crescimento (SO — Forças x Oportunidades)") 
            st.caption("Maximização de vantagens competitivas unindo diferenciais internos a oportunidades em expansão (Oliveira, 2013).") 
            df_so = pd.DataFrame({ 
                "Ponto Forte (Interno)": [ 
                    "Assessoria Especializada", 
                    "Portfólio Diversificado", 
                    "Solidez Institucional" ], 
                 "Oportunidade (Externa & Evidência)": [ 
                    "52% dos bancos indicam redução no tempo de resposta como principal benefício da IA generativa (Febraban, 2026).", 
                    "Open Finance atingiu 135 milhões de consentimentos ativos para consumo de dados integrados (BCB, 2025).", 
                    "100% dos bancos apontam cibersegurança como prioridade estratégica para continuidade (Febraban, 2026)." ], 
                "Estratégia de Crescimento Prescritiva": [ 
                    "Integrar IA generativa como 'copiloto' para consultores e gerentes, automatizando o pré-processamento de análises de perfil de risco e portfólio.", 
                    "Implementar motores de recomendação preditiva acionados em tempo real pelo histórico do Open Finance nos canais digitais.", 
                    "Posicionar a instituição em campanhas B2B e B2C como a plataforma mais segura do mercado para blindar grandes volumes de capital." ] 
            }) 
            st.table(df_so)

if selecao in ["📌 Matriz BCG & Abacaxis", "📌 Matriz BCG — Portfólio & Abacaxis", "⭐ Matriz BCG de Portfólio"]:
        st.title("📌 Matriz BCG — Portfólio de Produtos & Análise de Abacaxis")
        st.markdown(
            "A Matriz BCG (Henderson, 1970; Kotler & Keller, 2012) avalia a taxa de crescimento do mercado "
            "versus a participação relativa de mercado dos produtos do Itaú Unibanco. "
            "Navegue pelas visões para explorar o diagnóstico detalhado e o comparativo dos **Abacaxis com os Concorrentes (Apêndice C)**:"
        )

        # Seletor interativo para garantir o isolamento estrito por condicional
        cat_bcg = st.radio(
            "Selecione a Visão da Matriz BCG para exibir na TV 2:",
            [
                "📊 Matriz 2x2 Geral",
                "⭐ Estrelas (Investir)",
                "🐄 Vacas Leiteiras (Gerar Caixa)",
                "❓ Pontos de Interrogação (Testar)",
                "🍍 Diagnóstico de Abacaxis (Apêndice C)"
            ],
            horizontal=True
        )

        # 1. Visão Geral 2x2 (Colunas Lado a Lado Alinhadas)
        if cat_bcg == "📊 Matriz 2x2 Geral":
            st.subheader("📊 Visão Holística da Matriz BCG — Itaú Unibanco (2026)")
           
            
            
            st.info(
                """
                ### ⭐ ESTRELAS (Alto Crescimento / Alta Participação)
        - **Itaú BBA NextGen:** Assessoria em M&A (US$ 11,3 Bi) e Renda Fixa Corporativa (DCM).
        - **Crédito Imobiliário Digital:** Expansão na esteira de financiamento residencial.
        - **Segmentos Personnalité & Uniclass:** Captura e retenção do público Alta Renda.
        - **Consórcios:** Crescimento acelerado no planejamento financeiro de bens.
        - **Laranjinha+ (Rede):** Inovação tecnológica nos meios de pagamento e credenciamento.
        """
            )
            
            st.warning(
                """
                ### ❓ PONTOS DE INTERROGAÇÃO (Alto Crescimento / Baixa Participação)
        - **Kinea FI-Infra (KDIF11) & Agro (KNCA11):** Ativos de infraestrutura e agronegócio em teste.
        - **Ativos Digitais & Tokenização (Itaú Íon):** Tokenizadora de ativos reais e cripto custódia.
        - **Crédito Consignado Varejo:** Disputa por escala e margem no consignado.
        - **ItaúShop:** Marketplace e e-commerce integrados ao SuperApp.
        - **Solução Scope / TEF:** Automação comercial corporativa para grandes varejistas.
        """
            )
            
            
            st.success(
                """
                ### 🐄 VACAS LEITEIRAS (Baixo Crescimento / Alta Participação)
        - **Private Bank:** Liderança isolada nacional com **31,1% de market share**.
        - **Itaú Asset Management:** Gestão de mais de **R$ 1,2 Trilhão** em ativos (linha de ETFs *It Now*).
        - **Cartões de Crédito & Débito:** Responsável por **24% das compras** transacionadas no Brasil.
        - **Serviços do Itaú BBA & Itaú Empresas:** Receitas de tarifas do atacado e PMEs.
        - **Divisão de Seguros & Previdência Privada:** Geração recorrente de float e margem.
            """
            )
             
            st.error(
                """
                ### 🍍 ABACAXIS / CÃES (Baixo Crescimento / Baixa Participação)
        - **Caderneta de Poupança Tradicional:** Outflow contínuo de recursos para CDBs/Caixinhas.
        - **Fundos DI Varejo com Alta Taxa de Adm:** Perda de custódia para ETFs e Tesouro Direto.
        - **Agências Físicas Transacionais Apenas:** Elevado custo fixo desintermediado por apps.
        - **Títulos de Capitalização Itaú PIC:** Rentabilidade real baixa e rejeição de novos clientes.
        """
            )

        # 2. Quadrante Estrelas
        elif cat_bcg == "⭐ Estrelas (Investir)":
            st.info("### ⭐ ESTRELAS — Oportunidades de Expansão & Liderança em Crescimento")
            df_est = pd.DataFrame({
                "Produto / Unidade": [
                    "Itaú BBA NextGen (M&A e DCM)",
                    "Crédito Imobiliário Digital",
                    "Segmentos Personnalité e Uniclass",
                    "Consórcios Itaú",
                    "Laranjinha+ (Rede)"
                ],
                "Segmento Alvo": [
                    "Grandes Corporações & Mercado de Capitais",
                    "Varejo Massificado & Alta Renda",
                    "Pessoas Físicas Alta Renda",
                    "Pessoas Físicas e PMEs",
                    "Estabelecimentos Comerciais & Varejo"
                ],
                "Justificativa Estratégica (Relatório 2026)": [
                    "Liderança em M&A na América Latina (US$ 11,3 Bi) e estruturação de renda fixa corporativa.",
                    "Migração da esteira de contratação imobiliária para jornada 100% digital com análise ágil.",
                    "Elevação do LTV (Life Time Value) através de assessoria financeira dedicada e benefícios exclusivos.",
                    "Instrumento de planejamento patrimonial sem taxa de juros com forte demanda em períodos de Selic alta.",
                    "Evolução tecnológica da maquininha Rede integrada a sistemas de gestão e software de vendas."
                ]
            })
            st.table(df_est)

        # 3. Quadrante Vacas Leiteiras
        elif cat_bcg == "🐄 Vacas Leiteiras (Gerar Caixa)":
            st.success("### 🐄 VACAS LEITEIRAS — Motores de Rentabilidade & Geração de Caixa")
            df_vl = pd.DataFrame({
                "Produto / Unidade": [
                    "Private Bank",
                    "Itaú Asset Management",
                    "Cartões de Crédito e Débito",
                    "Serviços Itaú BBA & Empresas",
                    "Seguros e Previdência"
                ],
                "Métrica de Liderança Oficial": [
                    "31,1% de Market Share nacional",
                    "> R$ 1,2 Trilhão sob gestão (AuM)",
                    "24% do volume de compras no Brasil",
                    "Liderança em receitas de tarifas B2B",
                    "Destaque no mercado corporativo e individual"
                ],
                "Papel na Estratégia Corporativa": [
                    "Gestão de grandes fortunas com retenção via 5 unidades offshore e programa NextGen.",
                    "Maior gestora privada do país, forte emissora da linha de ETFs (It Now) e fundos imobiliários Kinea.",
                    "Diversificação de receitas por prestação de serviços com escala transacional trilionária.",
                    "Cross-selling de tesouraria, câmbio, derivativos e gestão de caixa corporativo.",
                    "Geração de receitas não decorrentes de juros e proteção patrimonial de clientes."
                ]
            })
            st.table(df_vl)

        # 4. Quadrante Pontos de Interrogação
        elif cat_bcg == "❓ Pontos de Interrogação (Testar)":
            st.warning("### ❓ PONTOS DE INTERROGAÇÃO — Teste de Mercado & Decisão de Alocação")
            df_pi = pd.DataFrame({
                "Produto / Unidade": [
                    "Kinea FI-Infra (KDIF11) & Agro (KNCA11)",
                    "Ativos Digitais & Tokenização (Íon)",
                    "Crédito Consignado Varejo",
                    "ItaúShop",
                    "Solução Scope / TEF"
                ],
                "Desafio / Oportunidade Identificada": [
                    "Capturar a demanda por investimentos isentos de IR em infraestrutura e agronegócio.",
                    "Pioneirismo na tokenização de ativos reais (RWA) e custódia de criptoativos no app Íon.",
                    "Disputa de margem e escala com bancos públicos e correspondentes bancários.",
                    "E-commerce proprietário no app para gerar engajamento e retenção de compras no ecossistema.",
                    "Automação comercial para grande varejo competindo com software houses especializadas."
                ]
            })
            st.table(df_pi)

        # 5. Quadrante Abacaxis (Apêndice C)
        elif cat_bcg == "🍍 Diagnóstico de Abacaxis (Apêndice C)":
            st.error("### 🍍 DIAGNÓSTICO DE ABACAXIS — Apêndice C (Itaú vs. Bradesco & Nubank)")
            st.markdown(
                "**Definição do Apêndice C:** Produtos classificados como *Abacaxis* no Itaú devido a limitações de crescimento "
                "ou rentabilidade, mas que figuram como **Estrelas ou Vacas Leiteiras nos concorrentes** (Bradesco e Nubank):"
            )
            df_abacaxi = pd.DataFrame({
                "Produto / Categoria": [
                    "Caderneta de Poupança Tradicional",
                    "Agências Físicas de Varejo (Básicas)",
                    "Fundos DI Varejo (Alta Taxa)",
                    "Títulos de Capitalização (Itaú PIC)"
                ],
                "Itaú (🍍 Abacaxi)": [
                    "Erosão contínua de saldo (outflow) para CDBs, Tesouro e Caixinhas.",
                    "Elevado custo fixo operacional desintermediado por apps e atendimento digital.",
                    "Perda acelerada de patrimônio para ETFs, LCI/LCA e corretoras independentes.",
                    "Rentabilidade real baixa/negativa e forte rejeição pelas novas gerações."
                ],
                "Bradesco (Concorrente Tradicional)": [
                    "🐄 Vaca Leiteira — Base histórica massiva usada como funding para Crédito Imobiliário desde 1943.",
                    "🐄 Vaca Leiteira — Presença nacional física usada como canal central de relacionamento e negócios Agro.",
                    "⭐ Estrela — Arquitetura Aberta BRAM integrando fundos de terceiros (Verde, Ibiuna, Truxt).",
                    "🐄 Vaca Leiteira — Bradesco Capitalização consolidado como gerador de float e tarifas no varejo."
                ],
                "Nubank (Concorrente Digital)": [
                    "🐄 Vaca Leiteira — Caixinhas c/ 100% CDI e Nu Reserva Imediata (reinvenção da reserva de caixa).",
                    "⚡ Fintech — Modelo 100% Digital sem agências, revertendo eficiência em isenção de tarifas.",
                    "🐄 Vaca Leiteira — NuInvest unificada no app principal com corretagem zero e captura de liquidez.",
                    "❓ Ponto de Interrogação — Nu Cripto & Token Nucoin (engajamento e fidelidade tokenizada +15M clientes)."
                ]
            })
            st.table(df_abacaxi)
            st.info(
                "**💡 Diretriz Estratégica do Relatório para os Abacaxis:**\n"
                "1. **Poupança & Fundos DI:** Acelerar a migração guiada dos clientes para produtos de maior valor agregado (LCI/LCA, CDBs e ETFs Íon).\n"
                "2. **Agências Físicas:** Reconfigurar agências operacionais básicas em **Smart Hubs Consultivos** focados em Personnalité, Uniclass e Itaú Empresas.\n"
                "3. **Capitalização:** Reformular o Itaú PIC para modelos de recompensas e cashback gamificado alinhados às expectativas dos clientes digitais."
            )
elif selecao == "🎯 Objetivos SMART & Metas 2027": 
    st.title("🎯 Objetivos Estratégicos SMART — Alinhamento &amp; Metas 2027") 
    st.markdown( 
        "A consolidação do planejamento estratégico do Itaú Unibanco fundamenta-se na metodologia **SMART** " 
        "(Drucker, 1954): *Específicos, Mensuráveis, Atingíveis, Relevantes e Temporais*. \n\n" 
        "Segundo **Chiavenato (1999)**, esses objetivos legitimam a atuação perante investidores, motivam equipes, " 
        "orientam decisões gerenciais e estabelecem padrões de controle de desempenho." ) 
    # Seletor horizontal com condicionais (if/elif) 
    cat_smart = st.radio( "Selecione a Categoria de Objetivos SMART para exibir:", [ 
        "🚀 Crescimento (SO)", 
        "🔧 Melhorias (DO)", 
        "⚔️ Enfrentamento (FA)", 
        "🛡️ Defesa (DA)", 
        "📋 Visão Consolidada (Tabela 13)" ], horizontal=True ) 
    # 1. SE para Crescimento 
    if cat_smart == "🚀 Crescimento (SO)": 
        st.success("### 🚀 Objetivos SMART — Estratégias de Crescimento (SO)") 
        df_smart_so = pd.DataFrame({ 
            "Estratégia TOWS Origem": [ 
                "IA Generativa Copiloto para Consultores/Gerentes", 
                "Motores Preditivos via Open Finance", 
                "Posicionamento como Plataforma Mais Segura" 
            ], 
            "Objetivo SMART Detalhado (Relatório Seção 8.1)": [ 
                "Elevar em 25% a taxa de conversão de clientes Uniclass para Personnalité/Private até 2027, e reduzir o SLA de resposta consultiva de 24h para 2h.", 
                "Atingir uma média de 4,5 produtos contratados por cliente ativo até o fim de 2027, gerando receita adicional a partir de 30% dos consentimentos via Open Finance.", 
                "Captar R$ 50 bilhões em novos ativos sob custódia institucionais até o fim de 2027, elevando o NPS do pilar 'Segurança' para 85 pontos." 
            ], 
            "Prazo Alvo": ["Dez/2027", "Dez/2027", "Dez/2027"] 
        }) 
        st.table(df_smart_so) 
    # 2. SE para Melhorias 
    elif cat_smart == "🔧 Melhorias (DO)": 
        st.warning("### 🔧 Objetivos SMART — Estratégias de Melhorias (DO)") 
        df_smart_do = pd.DataFrame({ 
            "Estratégia TOWS Origem": [ 
                "Gamificação no App & Isenção Progressiva", 
                "Otimização UI/UX da Arquitetura do SuperApp", 
                "Consolidação de CRM Omnicanal Unificado" 
            ], 
            "Objetivo SMART Detalhado (Relatório Seção 8.1)": [ 
                "Reduzir a taxa de evasão no varejo massificado para menos de 3% ao ano até dez/2027, convertendo 2 milhões de contas estáticas em ativas.", 
                "Aumentar a originação de crédito 100% digital em 40% em 12 meses, reduzindo o tempo médio da jornada de contratação de 5 minutos para menos de 90 segundos.", 
                "Atingir 85% de FCR (First Contact Resolution) até 2027 e reduzir em 30% o volume de novas reclamações no BACEN/Reclame Aqui." 
            ], 
            "Prazo Alvo": ["Dez/2027", "12 Meses", "Dez/2027"] 
        }) 
        st.table(df_smart_do) 
    # 3. SE para Enfrentamento 
    elif cat_smart == "⚔️ Enfrentamento (FA)": 
        st.info("### ⚔️ Objetivos SMART — Estratégias de Enfrentamento (FA)") 
        df_smart_fa = pd.DataFrame({ "Estratégia TOWS Origem": [ 
            "Atendimento Humano Hiper-Especializado", 
            "Oferta de Crédito Vinculada ao Pix", 
            "Bloqueio Cautelar Automatizado D+0" 
        ], 
        "Objetivo SMART Detalhado (Relatório Seção 8.1)": [ 
            "Reter 98% da base Wealth Management em 2027, mantendo a margem de comissões de assessoria superior a 1,5% a.a. sobre os ativos sob gestão (AuM).", 
            "Capturar 20% do volume nacional de crédito via Pix até 2027, gerando R$ 2 bilhões em novas receitas (SVA) monitorando a canibalização de cartão.", 
            "Reduzir em 50% as perdas financeiras líquidas (R$) com fraudes transacionais em 2027, bloqueando 99% das suspeitas em D+0 controlando falsos positivos." 
        ], 
        "Prazo Alvo": ["Dez/2027", "Dez/2027", "Dez/2027"] }) 
        st.table(df_smart_fa) 
    # 4. SE para Defesa 
    elif cat_smart == "🛡️ Defesa (DA)": 
        st.error("### 🛡️ Objetivos SMART — Estratégias de Defesa (DA)") 
        df_smart_da = pd.DataFrame({ 
            "Estratégia TOWS Origem": [ 
                "Ativação do Pacote Essencial Gratuito BACEN", 
                "Correção de Lentidão &amp; Testes A/B no App", 
                "Triagem com Análise de Sentimento por IA" 
            ], 
            "Objetivo SMART Detalhado (Relatório Seção 8.1)": [ 
                "Proteger R$ 30 bilhões em depósitos à vista de clientes com alto risco de evasão, ativando 5 milhões de contas no pacote gratuito até o fim de 2027.", 
                "Reduzir o abandono (drop-off) no carrinho de produtos em 25% até o 2º semestre de 2027, recuperando R$5 bilhões em originação de crédito perdida.", 
                "Reduzir em 40% a taxa de encerramento de contas motivada por 'mau atendimento', garantindo transbordo para fila VIP humana menor que 60 segundos." 
            ], 
            "Prazo Alvo": ["Dez/2027", "2S/2027", "Dez/2027"] 
        }) 
        st.table(df_smart_da) 
    # 5. SE para Visão Consolidada 
    elif cat_smart == "📋 Visão Consolidada (Tabela 13)": 
        st.subheader("📋 Tabela 13 Consolidada: Matriz de Objetivos SMART (Itaú Unibanco)") 
        df_smart_all = pd.DataFrame({ 
            "Grupo TOWS": [ 
                "SO (Crescimento)", 
                "SO (Crescimento)", 
                "SO (Crescimento)", 
                "DO (Melhorias)", 
                "DO (Melhorias)", 
                "DO (Melhorias)", 
                "FA (Enfrentamento)", 
                "FA (Enfrentamento)", 
                "FA (Enfrentamento)", 
                "DA (Defesa)", 
                "DA (Defesa)", 
                "DA (Defesa)" 
            ], 
            "Iniciativa Estratégica": [ 
                "IA Copiloto Personnalité", 
                "Open Finance Preditivo", 
                "Cibersegurança &amp; Marca", 
                "Gamificação de Tarifas", 
                "UI/UX Crédito Digital", 
                "CRM Omnicanal &amp; FCR", 
                "Wealth Management Humano", 
                "Crédito Pix (SVA)", 
                "Bloqueio Antifraude D+0", 
                "Pacote Essencial BACEN", 
                "Otimização de Funil App", 
                "IA Sentimento Fila VIP" 
            ], 
            "Meta Quantitativa Principal": [ 
                "+25% conversão Uniclass/Personnalité; SLA de 24h -&gt; 2h", 
                "4,5 produtos/cliente ativo; receita de 30% dos consentimentos", 
                "R$ 50 Bi em novos ativos de custódia; NPS Segurança = 85", 
                "Evasão Varejo &lt; 3%/ano; +2M contas estáticas em ativas", 
                "Originação crédito digital +40%; contratação &lt; 90 segundos", 
                "85% de FCR; -30% reclamações BACEN e Reclame Aqui", 
                "Reter 98% Wealth Management; margem comissão &gt; 1,5% a.a.", 
                "20% market share Crédito Pix; R$ 2 Bi em novas receitas", 
                "-50% perdas por fraudes; 99% bloqueios anômalos D+0", 
                "Proteger R$ 30 Bi depósitos à vista; 5M contas no pacote free", 
                "-25% drop-off no carrinho; R$ 5 Bi em originação salva", 
                "-40% churn por mau atendimento; transbordo VIP &lt; 60s" 
            ], 
            "Horizonte": ["2027", "2027", "2027", "2027", "12m", "2027", "2027", "2027", "2027", "2027", "2S27", "2027"] 
        }) 
        st.table(df_smart_all)
elif selecao == "📊 Balanced Scorecard (BSC)":
    st.title("📊 Balanced Scorecard (BSC) — Alinhamento de Causa e Efeito")
    st.markdown( 
        "**Objetivo Central:** Reduzir em 40% a taxa de encerramento de contas motivada por 'mau atendimento', " 
        "garantindo transbordo para fila VIP humana menor que 60 segundos." )
    df_bsc = pd.DataFrame({
        "Perspectiva": ["1. Financeira", "2. Clientes", "3. Processos Internos", "4. Aprendizado e Crescimento"],
        "Objetivo Estratégico": [
            "Proteger a receita de serviços e conter perda de capital",
            "Elevar NPS/CSAT e zerar reclamações de tarifas indevidas",
            "Automatizar o estorno cautelar e simplificar a UX do App",
            "Capacitar equipes em IA Preditiva e Gestão de Churn"
        ],
        "Indicador de Desempenho (KPI)": [
            "Saldo de Depósitos à Vista e Margem Financeira",
            "Índice de Resolução Consumidor.gov.br / Reclame Aqui",
            "Tempo de Atendimento Digital e Taxa de Erros de Tarifação",
            "Horas de Treinamento em Ciência de Dados / IA"
        ],
        "Meta SMART 2027": [
            "Manter R$ 30 Bi em depósitos no Varejo",
            "Reduzir em 40% o churn motivado por tarifas",
            "Resolução em < 48 horas nas plataformas",
            "100% da equipe treinada no novo modelo"
        ]
    })
    st.table(df_bsc)

elif selecao == "📝 Plano de Ação 5W2H":
    st.title("📝 Plano de Ação Operacional 5W2H")
    st.markdown( 
        "**Objetivo Central:**  Reduzir a evasão no varejo massificado para menos de 3% ao ano até dez/2027, "
        "convertendo 2 milhões de contas estáticas em ativas." )
    
    df_5w2h = pd.DataFrame({
        "Elemento": ["What (O que)", "Why (Por que)", "Where (Onde)", "When (Quando)", "Who (Quem)", "How (Como)", "How Much (Quanto)"],
        "Detalhamento do Plano": [
            "Implantar o Pacote Essencial BACEN com isenção de tarifa via App",
            "Conter a evasão de depósitos à vista para bancos digitais (Nubank)",
            "Aplicativo Itaú Mobile e Canais Digitais de Autoatendimento",
            "Início em Jan/2027 com conclusão no 4T27",
            "Equipe de Produto Varejo + Engenharia de Software + Atendimento",
            "Desenvolvimento de algoritmo preditivo no app que detecta risco de saída",
            "Orçamento alocado de R$ 4,5 Milhões em TI e Treinamento"
        ]
    })
    st.table(df_5w2h)

elif selecao == "🚨 Radiografia de Reclamações (Apêndice A)":
    st.title("🚨 Radiografia das Reclamações (Apêndice A)")
    
    col1, col2 = st.columns(2)
    with col1:
        st.subheader("Principais Motivos de Queixa dos Clientes")
        df_rec_mot = pd.DataFrame({
            "Categoria de Reclamação": ["Serviços de Conta & Encerramento", "Cobranças & Tarifas Indevidas", "Cartões / Meios de Pagamento", "Outros Canais"],
            "Percentual (%)": [36.5, 28.7, 21.0, 13.8]
        })
        st.bar_chart(df_rec_mot.set_index("Categoria de Reclamação"))
    with col2:
        st.subheader("Desempenho nos Portais Externos")
        st.error("### 📉 Consumidor.gov.br\n- **Nota Média:** 2,1 / 5,0\n- **Reclamações Não Resolvidas:** 21,8%\n- **Foco de Insatisfação:** Burocracia no encerramento e tarifas.")
        st.warning("### ⏱️ Reclame Aqui\n- **Tempo Médio de Resposta:** > 6 Dias\n- **Oportunidade:** Automação de resposta via IA em < 48 horas.")

elif selecao == "🔍 Auditoria CVM/COSIF (Apêndice B)":
    st.title("🔍 Auditoria de Inconsistências Contábeis (Apêndice B)")
    st.markdown("Análise comparativa entre as Demonstrações Financeiras Oficiais (CVM/BACEN) e Agregadores Comerciais de Dados (InfoMoney / StatusInvest):")
    
    df_aud = pd.DataFrame({
        "Indicador Contábil": ["Ativos Totais Consolidados", "Patrimônio Líquido Consolidador", "Origem da Divergência"],
        "Demonstrações CVM / BACEN (Oficial)": ["R$ 3,07 Trilhões (2T26)", "R$ 195 Bilhões", "Relatório de Resultados e DFP/ITR"],
        "Agregadores Comerciais Informais": ["R$ 228 Bilhões (Errôneo)", "R$ 3,20 Trilhões (Errôneo)", "Web scraping sem filtro de COSIF"],
        "Causa Técnica Identificada": [
            "O robô do site leu apenas o ativo individual da holding IUPAR",
            "Inversão do cálculo de patrimônio líquido consolidador",
            "Falta de padronização ao ler o plano de contas bancárias (COSIF)"
        ]
    })
    st.table(df_aud)

elif selecao == "🎨 Template Visual & Central de Mídia":
    st.title("🎨 Moldura Visual Oficial & Central de Mídia")
    
    if has_image:
        st.image(img_name, use_container_width=True)
    else:
        st.info("Para exibir a imagem oficial do template nesta tela, você pode salvar o arquivo  na mesma pasta onde o comando do Streamlit está sendo executado, ou fazer o upload abaixo.")
    
    st.markdown("---")
    file_up = st.file_uploader("Upload de Imagem para Exibição Instantânea na TV 2", type=["png", "jpg", "jpeg"])
    if file_up:
        st.image(file_up, use_container_width=True)

elif selecao == "👥 Equipe & Integrantes do Projeto":
    st.markdown( 
        '<div><h1>🎓 PROJETO INTEGRADOR I — EQUIPE DE' 
        ' PESQUISA</h1><p>Fatec Votorantim — CST em Ciência de Dados para' 
        ' Negócios (2º Semestre de 2026)</p></div>', 
        unsafe_allow_html=True, ) 
    st.subheader(
        "👥 Integrantes da Equipe & Conexão Profissional") 
    st.write( 
        "Abaixo estão apresentados a foto do discente, a foto/QR Code do perfil" 
        " no LinkedIn e o botão de acesso direto." ) 
    membros = [ 
            { 
                "nome": "Camilo Oliveira de Freitas", 
                "ra": "3011542623017", 
                "foco": "Análise PESTEL, Pesquisa de Concorrência &amp; Backlog Scrum", 
                "foto": "foto_camilo.png", 
                "qr": "qr_camilo.png", 
                "user": "camilo-freitas", 
            }, 
            { 
                "nome": "Hellen Nunes dos Santos Souza", 
                "ra": "3011542623005", 
                "foco": ( "Pesquisa e desenvolvimento em Antifraude e Inteligência Financeira (FinCrime), aplicando Python e SQL para modelagem de risco, detecção de anomalias e auditoria analítica" ), 
                "foto": "foto_hellen.png", 
                "qr": "qr_hellen.png", 
                "user": "hellen-nunes", 
            }, 
    
            { 
                "nome": "Sandy Oliveira Messias", 
                "ra": "3011542623004", 
                "foco": ( "Histórico Institucional, Governança IUPAR, Reclamações &amp; 5W2H" ), 
                "foto": "foto_sandy.png", 
                "qr": "qr_sandy.png", 
                "user": "sandy-messias", 
            }, 
    ] 
    col1, col2 = st.columns(2) 
    for idx, m in enumerate(membros): 
        target_col = col1 if idx % 2 == 0 else col2 
        url_lk = f"[suspicious link removed]{m['user']}" 
        # 🟢 Caminhos absolutos garantidos para as fotos 
        caminho_foto = os.path.join(BASE_DIR, m["foto"]) 
        caminho_qr = os.path.join(BASE_DIR, m["qr"])
        
        with target_col: 
            st.markdown( 
                f""" 
                 <div> 
                    <h4>🎓 {m['nome']}</h4> 
                    <p><b>RA:</b> {m['ra']} | <b>Curso:</b> Ciência de Dados para Negócios</p> 
                    <p><i>Foco:</i> {m['foco']}</p> 
                </div> 
                """, 
                unsafe_allow_html=True, ) 
        # Duas sub-colunas para exibir a foto do discente e a foto/QR Code do LinkedIn 
            c_foto, c_qr = st.columns(2) 
            with c_foto: 
                st.markdown("**👤 Foto do Discente**") 
                if os.path.exists(m["foto"]): 
                    st.image( 
                        m["foto"], 
                        caption=f"Foto: {m['nome'].split()[0]}", 
                        use_container_width=True, 
                    ) 
                else: 
                    st.info(f"📸 *(Salve `{m['foto']}` na pasta)*") 
            with c_qr: 
                st.markdown("**📱 LinkedIn / QR Code**") 
                if os.path.exists(m["qr"]): 
                    st.image( 
                        m["qr"], 
                        caption="QR Code LinkedIn", 
                        use_container_width=True 
                    ) 
                else: 
                    st.info(f"📱 *(Salve `{m['qr']}` na pasta)*") 
            st.link_button( 
                f"🔗 Perfil LinkedIn — {m['nome'].split()[0]}", 
                url_lk, 
                use_container_width=True, 
            ) 
            st.caption(f"Link: `{url_lk}`") 
            st.markdown("---")

elif selecao == "⏱️ Cronômetro Vivo da Apresentação":
    st.title("⏱️ Cronômetro Vivo de Controle da Banca")
    st.markdown("Cronômetro regressivo em tempo real para gestão rigorosa dos 30 minutos de fala:")
    
    tempo_bloco = st.selectbox("Selecione a Duração do Bloco:", [10, 20, 30], index=0)
    
    timer_html = f"""
    <div style="text-align: center; font-family: sans-serif; background: #1E1E1E; padding: 25px; border-radius: 12px; color: white;">
        <h2 style="color: #EC7000; margin-bottom: 10px;">TEMPO RESTANTE</h2>
        <div id="timer" style="font-size: 64px; font-weight: bold; color: #00FFCC; font-family: monospace;">{tempo_bloco:02d}:00</div>
        <br/>
        <button onclick="startTimer()" style="font-size: 18px; padding: 10px 20px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">▶️ Iniciar</button>
        <button onclick="pauseTimer()" style="font-size: 18px; padding: 10px 20px; background-color: #ffc107; color: black; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">⏸️ Pausar</button>
        <button onclick="resetTimer()" style="font-size: 18px; padding: 10px 20px; background-color: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🔄 Reiniciar</button>
    </div>

    <script>
        var totalSeconds = {tempo_bloco} * 60;
        var initialSeconds = totalSeconds;
        var timerInterval = null;

        function updateDisplay() {{
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds % 60;
            var displayStr = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
            var timerEl = document.getElementById("timer");
            if (timerEl) {{
                timerEl.innerHTML = displayStr;
                if (totalSeconds <= 60) {{
                    timerEl.style.color = "#FF3333";
                }} else {{
                    timerEl.style.color = "#00FFCC";
                }}
            }}
        }}

        function startTimer() {{
            if (timerInterval !== null) return;
            timerInterval = setInterval(function() {{
                if (totalSeconds > 0) {{
                    totalSeconds--;
                    updateDisplay();
                }} else {{
                    clearInterval(timerInterval);
                    timerInterval = null;
                    alert("Tempo do Bloco Esgotado!");
                }}
            }}, 1000);
        }}

        function pauseTimer() {{
            clearInterval(timerInterval);
            timerInterval = null;
        }}

        function resetTimer() {{
            pauseTimer();
            totalSeconds = initialSeconds;
            updateDisplay();
        }}
    </script>
    """
    components.html(timer_html, height=280)
