// Dados extraídos do documento de pesquisa de nomes

export const nomesData = [
  {
    nome: "Vital Architect",
    score_final: 8.76,
    percepcao_valor: 8.7,
    arquetipo: 8.5,
    escalabilidade: 9.0,
    viabilidade: 8.0,
    memorabilidade: 8.5,
    posicao: 1,
    justificativa: "Único no mercado fitness/wellness. Excelente aderência aos arquétipos Sábio e Criador. Alta sofisticação e autoridade. Ótimo potencial de SEO e disponibilidade digital. Metáfora poderosa: 'arquiteto da vitalidade'. Escalabilidade global comprovada.",
    tagline: "Construindo seu melhor corpo com precisão científica",
    posicionamento: "O arquiteto da sua transformação física"
  },
  {
    nome: "Precision Protocol",
    score_final: 8.52,
    percepcao_valor: 8.4,
    arquetipo: 9.0,
    escalabilidade: 8.0,
    viabilidade: 8.0,
    memorabilidade: 8.5,
    posicao: 2,
    justificativa: "Aliteração forte facilita memorabilidade. Posicionamento premium e científico. Diferenciação clara da concorrência. Aderência perfeita ao arquétipo Sábio. Sugere metodologia proprietária.",
    tagline: "Protocolos personalizados para resultados extraordinários",
    posicionamento: "A ciência exata da transformação corporal"
  },
  {
    nome: "Precision Health",
    score_final: 8.01,
    percepcao_valor: 8.1,
    arquetipo: 7.5,
    escalabilidade: 8.5,
    viabilidade: 3.0,
    memorabilidade: 8.0,
    posicao: 3,
    justificativa: "Máxima credibilidade e autoridade. Escalabilidade global excelente. Alinhamento com tendências de medicina personalizada. Limitação: saturação do termo no mercado.",
    tagline: "Saúde de precisão para resultados excepcionais",
    posicionamento: "Medicina personalizada aplicada ao fitness"
  },
  {
    nome: "Physio Evolution",
    score_final: 7.87,
    percepcao_valor: 7.7,
    arquetipo: 8.5,
    escalabilidade: 7.5,
    viabilidade: 6.0,
    memorabilidade: 8.0,
    posicao: 4,
    justificativa: "Boa combinação técnica + aspiracional. Conceito evolutivo atrativo. Menor competição que termos genéricos. Limitação: 'Physio' pode confundir com fisioterapia.",
    tagline: "Evolução contínua do seu potencial físico",
    posicionamento: "A evolução científica do seu corpo"
  },
  {
    nome: "Precision Body",
    score_final: 7.64,
    percepcao_valor: 7.8,
    arquetipo: 7.0,
    escalabilidade: 7.5,
    viabilidade: 7.0,
    memorabilidade: 8.0,
    posicao: 5,
    justificativa: "Simplicidade e clareza. Foco específico no público fitness. Limitação: menor sofisticação comparado aos líderes.",
    tagline: "Precisão científica para seu corpo ideal",
    posicionamento: "Transformação corporal com precisão"
  },
  {
    nome: "Evolution Body Performance",
    score_final: 7.12,
    percepcao_valor: 7.3,
    arquetipo: 7.5,
    escalabilidade: 7.0,
    viabilidade: 7.0,
    memorabilidade: 6.5,
    posicao: 6,
    justificativa: "Promessa clara de resultados. Limitação: extensão prejudica memorabilidade e impacto.",
    tagline: "Performance evolutiva para seu corpo",
    posicionamento: "Evolução completa da performance corporal"
  },
  {
    nome: "Avila Protocol",
    score_final: 7.2,
    percepcao_valor: 7.2,
    arquetipo: 9.0,
    escalabilidade: 6.0,
    viabilidade: 7.0,
    memorabilidade: 7.5,
    posicao: 7,
    justificativa: "Remete ao criador já consolidado no mercado. Exclusividade do criador. Sonoridade profissional. Conceito diferenciado no mercado e modernidade.",
    tagline: "O protocolo exclusivo Dr. Raphael Avila",
    posicionamento: "Metodologia proprietária de transformação"
  }
];

export const criterios = [
  {
    nome: "Percepção de Valor",
    peso: 25,
    descricao: "Confiança, sofisticação, autoridade, inovação",
    detalhes: "Avalia como o nome transmite credibilidade, sofisticação premium, autoridade científica e percepção de inovação no mercado."
  },
  {
    nome: "Alinhamento com Arquétipos",
    peso: 20,
    descricao: "Aderência aos arquétipos Sábio e Criador",
    detalhes: "Mede o alinhamento com o arquétipo do Sábio (conhecimento, expertise) e Criador (inovação, transformação)."
  },
  {
    nome: "Escalabilidade Global",
    peso: 20,
    descricao: "Potencial de expansão internacional",
    detalhes: "Avalia facilidade de pronúncia, compreensão cultural e adaptabilidade para mercados internacionais."
  },
  {
    nome: "Viabilidade Digital e Jurídica",
    peso: 15,
    descricao: "Disponibilidade de domínio e registro",
    detalhes: "Verifica disponibilidade de domínios, potencial SEO, registrabilidade de marca e presença em redes sociais."
  },
  {
    nome: "Memorabilidade/Diferenciação",
    peso: 15,
    descricao: "Facilidade de lembrança e unicidade",
    detalhes: "Mede a capacidade de ser lembrado facilmente e se destacar da concorrência no mercado fitness/wellness."
  }
];

export const arquetipo_sabio = {
  nome: "Arquétipo do Sábio",
  descricao: "Conhecimento, autoridade e busca pela verdade",
  caracteristicas: [
    "Conhecimento especializado que gera confiança",
    "Foco educacional que constrói relacionamentos duradouros", 
    "Curiosidade que mantém o público engajado",
    "Postura segura que estabelece confiança",
    "Respeito pela sabedoria que atrai públicos que valorizam o aprendizado"
  ],
  limitacoes: [
    "Possível falta de praticidade",
    "Tendência à contemplação excessiva",
    "Pode ser percebido como distanciamento do público"
  ]
};

export const arquetipo_criador = {
  nome: "Arquétipo do Criador", 
  descricao: "Inovação, expressão criativa e criação de algo significativo",
  caracteristicas: [
    "Foco em inovação e soluções únicas",
    "Valoriza estética e funcionalidade",
    "Motivado pelo impacto duradouro",
    "Encontra soluções únicas para problemas complexos",
    "Ressoa com indivíduos que buscam reinvenção pessoal"
  ],
  vantagens: [
    "Diferenciação no mercado",
    "Apelo emocional forte",
    "Posicionamento premium natural"
  ]
};

export const metodologia = {
  titulo: "Framework Científico para Análise Comparativa",
  descricao: "A escolha do nome ideal para um método de transformação física baseado em evidência científica representa uma decisão estratégica crítica que influenciará diretamente o posicionamento da marca, a percepção de autoridade científica e o potencial de escalabilidade internacional.",
  abordagem: "Análise multifacetada incluindo benchmarking de mercado, desconstrução semântica, avaliação de viabilidade e síntese quantitativa baseada em matriz de critérios ponderados.",
  publico_alvo: "Classes A, B e C, incluindo fisiculturistas profissionais, com foco em nutrição, treino e otimização farmacológica para alta performance.",
  ferramenta_validacao: {
    nome: "PickFu",
    descricao: "Plataforma com 15 milhões de consumidores reais para testes de nomes de marcas",
    funcionalidade: "Comparar 2-4 opções simultaneamente, coletando feedback qualitativo e quantitativo de 50 respondentes direcionados",
    custo: "US$1,00 por resposta",
    url: "https://www.pickfu.com/pricing"
  }
};

export const contexto_mercado = {
  tamanho_mercado: "$5.8 trilhões em 2024",
  projecao: "$14 trilhões até 2032",
  tendencias: [
    "Práticas de wellness personalizadas",
    "Abordagens holísticas de saúde",
    "Sustentabilidade em wellness",
    "Medicina de precisão aplicada ao fitness",
    "Tecnologia integrada ao bem-estar"
  ]
};

export const recomendacao_final = {
  vencedor: "Vital Architect",
  razoes: [
    "Diferenciação absoluta no mercado fitness/wellness",
    "Alta memorabilidade através da metáfora arquitetônica", 
    "Escalabilidade global sem barreiras linguísticas",
    "Posicionamento premium que justifica preços diferenciados",
    "Versatilidade para expansão de produtos/serviços",
    "Forte apelo emocional e aspiracional"
  ],
  estrategias: {
    tagline: "Construindo seu melhor corpo com precisão científica",
    posicionamento: "O arquiteto da sua transformação física",
    foco_digital: "Conteúdo sobre 'arquitetura corporal' e 'blueprints de transformação'",
    publicos: [
      "Executivos de alta performance",
      "Atletas e fisiculturistas profissionais", 
      "Profissionais da saúde",
      "Indivíduos buscando transformação premium"
    ]
  }
};

