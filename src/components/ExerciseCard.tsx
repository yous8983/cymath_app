// src/components/ExerciseCard.tsx

import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import React from "react";

interface ExerciseCardProps {
  exercise: {
    id: number;
    title: string;
    description: string;
    subject: string;
    difficulty: "Facile" | "Moyen" | "Difficile";
    image: string;
  };
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  // Logic pour la couleur de la difficulté
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "success";
      case "Moyen":
        return "warning";
      case "Difficile":
        return "danger";
      default:
        return "medium";
    }
  };

  return (
    <IonCard routerLink={`/exercices/${exercise.id}`}>
      <IonImg src={exercise.image} />
      <IonCardHeader>
        <IonCardSubtitle color={getDifficultyColor(exercise.difficulty)}>
          {exercise.subject} - {exercise.difficulty}
        </IonCardSubtitle>
        <IonCardTitle>{exercise.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{exercise.description}</IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
