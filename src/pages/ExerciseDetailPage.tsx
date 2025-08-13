import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonChip,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchExerciseById } from '../services/ExerciseService';

interface Exercise {
  id: number;
  title: string;
  description: string;
  subject: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  image: string;
}

const ExerciseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<Exercise | undefined>(undefined);

  useEffect(() => {
    const getExerciseDetails = async () => {
      if (id) {
        const fetchedExercise = await fetchExerciseById(parseInt(id, 10));
        setExercise(fetchedExercise);
      }
    };
    getExerciseDetails();
  }, [id]);

  if (!exercise) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/exercices"></IonBackButton>
            </IonButtons>
            <IonTitle>Exercice introuvable</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Désolé, l'exercice demandé n'a pas été trouvé.</p>
        </IonContent>
      </IonPage>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile':
        return 'success';
      case 'Moyen':
        return 'warning';
      case 'Difficile':
        return 'danger';
      default:
        return 'medium';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/exercices"></IonBackButton>
          </IonButtons>
          <IonTitle>{exercise.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img alt={exercise.title} src={exercise.image} />
          <IonCardHeader>
            <IonCardTitle>{exercise.title}</IonCardTitle>
            <IonCardSubtitle>
              <IonText color="dark">{exercise.subject}</IonText>
              <IonChip color={getDifficultyColor(exercise.difficulty)}>
                {exercise.difficulty}
              </IonChip>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{exercise.description}</IonCardContent>
        </IonCard>

        {/* Placeholder pour les questions de l'exercice */}
        <div className="ion-margin-top">
          <p>
            Ici, le contenu interactif de l'exercice sera affiché.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExerciseDetailPage;