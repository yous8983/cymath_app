// src/services/ExerciseService.ts

interface Exercise {
  id: number;
  title: string;
  description: string;
  subject: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  image: string; // URL d'une image pour l'illustration
}

const dummyExercises: Exercise[] = [
  {
    id: 1,
    title: "Les équations du second degré",
    description:
      "Apprenez à résoudre les équations du second degré avec le discriminant et la factorisation.",
    subject: "Mathématiques",
    difficulty: "Moyen",
    image:
      "https://cdn.pixabay.com/photo/2016/09/24/09/35/board-1691924_1280.jpg",
  },
  {
    id: 2,
    title: "Théorème de Pythagore",
    description:
      "Entraînez-vous à utiliser le théorème de Pythagore dans des triangles rectangles.",
    subject: "Mathématiques",
    difficulty: "Facile",
    image:
      "https://cdn.pixabay.com/photo/2015/05/20/19/21/math-775797_1280.jpg",
  },
  {
    id: 3,
    title: "Les fonctions linéaires et affines",
    description:
      "Comprenez les bases des fonctions et leur représentation graphique.",
    subject: "Mathématiques",
    difficulty: "Moyen",
    image:
      "https://cdn.pixabay.com/photo/2014/09/03/23/18/board-435552_1280.jpg",
  },
  {
    id: 4,
    title: "Les probabilités",
    description:
      "Introduction au calcul des probabilités, événements et univers.",
    subject: "Mathématiques",
    difficulty: "Difficile",
    image:
      "https://cdn.pixabay.com/photo/2016/11/04/18/48/dice-1798544_1280.jpg",
  },
];

export const fetchExercises = (): Promise<Exercise[]> => {
  return new Promise((resolve) => {
    // Simulation d'un délai de chargement
    setTimeout(() => {
      resolve(dummyExercises);
    }, 500);
  });
};

export const fetchExerciseById = (id: number): Promise<Exercise | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const exercise = dummyExercises.find((ex) => ex.id === id);
      resolve(exercise);
    }, 500);
  });
};

