export const QuizData = [
  {
    id: 1,
    question: 'Vad innebär git-kommandot "git add ."?',
    options: [
      "Man commitar alla sina filer",
      "Man lägger till en specifik fil och gör denna fil redo att commitas",
      "Man lägger till alla sina ändrade filer och gör dessa filer redo att commitas."
    ],
    answer: "Man commitar alla sina filer"
  },
  {
    id: 2,
    question: "Vem är skaparen bakom Git",
    options: ["Ryan Dahl", "Linus Torvald", "Jacob Thornton"],
    answer: "Linus Torvald"
  },
  {
    id: 3,
    question: "Vilket kommando används för att byta branch",
    options: ['git checkout -b "branch-namn"', 'git checkout "branch-namn"', 'git branch -m "branch-namn"'],
    answer: 'git checkout "branch-namn"'
  },
  {
      //Ger fel
    id: 4,
    question: "När skapades Git?",
    options: ["2001", "2005", "2007"],
    answer: "2005"
  },

];
