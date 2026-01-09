
export type AppTone = 'bold' | 'professional';

export interface LandingContent {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  problem: {
    title: string;
    points: string[];
    footer: string;
  };
  solution: {
    title: string;
    points: string[];
    footer: string;
  };
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  mockupText: string;
  testerCTA: {
    title: string;
    requirements: string[];
    cta: string;
  };
  finalPhrase: string;
}
