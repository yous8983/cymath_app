import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
} from "@ionic/react";
import React from "react";
import { useAuth } from "../services/AuthContext"; // Importation du hook

const ProfilePage: React.FC = () => {
  const { logout } = useAuth(); // Utilisation du hook pour accéder à la fonction de déconnexion

  const doLogout = () => {
    logout(); // Appel de la fonction de déconnexion du contexte
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={doLogout}>Déconnexion</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Bienvenue sur votre profil !</h1>
        <p>
          Cette page est en cours de développement. Vous pouvez vous déconnecter
          en cliquant sur le bouton ci-dessus.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
