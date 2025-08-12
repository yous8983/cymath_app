import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  // Ici nous allons gérer l'état du formulaire (email, mot de passe)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const doLogin = async () => {
    console.log("Tentative de connexion avec :", email, password);
    // Logique de connexion à l'API à implémenter dans les prochaines étapes
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Connexion</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="ion-text-center ion-padding">
          <h2>Bienvenue !</h2>
          <p>Connectez-vous pour accéder à vos cours et exercices.</p>
        </div>

        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mot de passe</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
        </IonList>

        <IonButton expand="block" className="ion-margin-top" onClick={doLogin}>
          Se connecter
        </IonButton>

        <div className="ion-text-center ion-padding">
          <p>
            Pas encore de compte ? <Link to="/register">S'inscrire</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
