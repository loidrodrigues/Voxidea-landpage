import { LandingContent } from "./types";

export const CONTENT_BOLD: LandingContent = {
  hero: {
    headline: "Sua ideia é boa mesmo — ou só parece na sua cabeça?",
    subheadline:
      "Coloque sua ideia à prova, receba feedback real e descubra se ela merece entrar no Top 5 da semana.",
    cta: "Quero testar minha ideia",
  },
  problem: {
    title: "O PROBLEMA",
    points: [
      "Todo mundo acha que tem uma boa ideia.",
      "Pouca gente tem coragem de testá-la.",
      "Sem feedback real: ideias morrem cedo, erros passam despercebidos e validação vira ilusão.",
    ],
    footer: "Aqui, elogio vazio não passa.",
  },
  solution: {
    title: "A SOLUÇÃO",
    points: [
      "Criamos um app onde ideias não são protegidas — são desafiadas.",
      "A comunidade questiona, opina e vota.",
      "Decidimos juntos o que realmente se destaca.",
    ],
    footer: "Se sua ideia for boa, ela sobe. Se não for… você aprende rápido.",
  },
  steps: [
    {
      number: "1",
      title: "Poste sua ideia",
      description: "Sem filtros. Sem floreios. Só a ideia, do jeito que ela é.",
    },
    {
      number: "2",
      title: "Aguente o feedback",
      description: "Opiniões reais, comentários diretos e votos da comunidade.",
    },
    {
      number: "3",
      title: "Veja se ela sobrevive",
      description: "Toda semana, só as melhores entram no Top 5.",
    },
  ],
  mockupText:
    "Interface simples. Feedback em primeiro lugar. Ideias no centro de tudo.",
  testerCTA: {
    title: "QUEM NÃO TEM MEDO DE OPINIÃO?",
    requirements: [
      "Acredita na sua ideia",
      "Quer feedback de verdade",
      "Gosta de desafios",
    ],
    cta: "Quero ser tester",
  },
  finalPhrase: "Boas ideias resistem. As outras ensinam.",
};

export const CONTENT_PROFESSIONAL: LandingContent = {
  hero: {
    headline: "Um espaço para validar ideias com feedback da comunidade.",
    subheadline:
      "Publique sua ideia, receba opiniões construtivas e acompanhe as mais bem avaliadas da semana.",
    cta: "Participe como tester",
  },
  problem: {
    title: "O CONTEXTO",
    points: [
      "Ideias precisam de mais do que inspiração — precisam de validação.",
      "Muitas iniciativas falham por falta de feedback estruturado e troca entre interessados.",
      "Falta um ambiente focado em melhoria contínua.",
    ],
    footer: "Este app nasce para preencher essa lacuna.",
  },
  solution: {
    title: "A PROPOSTA",
    points: [
      "Plataforma colaborativa onde a comunidade compartilha e avalia.",
      "Votos nas propostas mais relevantes e feedback construtivo.",
      "Destaque semanal para as melhores iniciativas.",
    ],
    footer: "Tudo de forma simples, aberta e transparente.",
  },
  steps: [
    {
      number: "1",
      title: "Publicação da ideia",
      description: "Descreva sua proposta de forma clara e objetiva.",
    },
    {
      number: "2",
      title: "Feedback da comunidade",
      description:
        "Receba comentários, sugestões e avaliações de outros participantes.",
    },
    {
      number: "3",
      title: "Destaque semanal",
      description:
        "As ideias mais bem avaliadas ganham visibilidade no Top 5 da semana.",
    },
  ],
  mockupText:
    "Interface intuitiva, foco em colaboração e melhoria contínua de ideias.",
  testerCTA: {
    title: "PROGRAMA DE TESTERS",
    requirements: [
      "Validar a experiência do usuário",
      "Sugerir melhorias e novos recursos",
      "Ajudar a moldar o futuro do produto",
    ],
    cta: "Quero ser tester",
  },
  finalPhrase: "Ideias crescem quando são compartilhadas.",
};
