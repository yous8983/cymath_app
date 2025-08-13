// src/pages/ExercicesPage.tsx

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { fetchExercises } from "../services/ExerciseService";

// Définition de l'interface pour la structure des exercices
interface Exercise {
  id: number;
  title: string;
  description: string;
  subject: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  image: string;
}

const ExercicesPage: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const fetchedExercises = await fetchExercises();
        setExercises(fetchedExercises);
      } catch (error) {
        console.error("Erreur lors de la récupération des exercices:", error);
      } finally {
        setLoading(false);
      }
    };

    getExercises();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercices</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <div className="ion-text-center ion-padding-top">
            <IonSpinner name="crescent" />
          </div>
        ) : (
          <IonGrid>
            <IonRow>
              {exercises.map((exercise) => (
                <IonCol size="12" size-md="6" key={exercise.id}>
                  <ExerciseCard exercise={exercise} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ExercicesPage;
