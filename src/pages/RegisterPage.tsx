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
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  // Ici nous allons gérer l'état du formulaire (nom, email, mot de passe)
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const doRegister = async () => {
    console.log("Tentative d'inscription avec :", name, email, password);
    // Logique d'inscription à l'API à implémenter dans les prochaines étapes
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login"></IonBackButton>
          </IonButtons>
          <IonTitle>Inscription</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="ion-text-center ion-padding">
          <h2>Créez votre compte</h2>
          <p>Rejoignez la communauté Cymath en quelques clics.</p>
        </div>

        <IonList>
          <IonItem>
            <IonLabel position="floating">Nom</IonLabel>
            <IonInput
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            />
          </IonItem>
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

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={doRegister}
        >
          S'inscrire
        </IonButton>

        <div className="ion-text-center ion-padding">
          <p>
            Déjà un compte ? <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
