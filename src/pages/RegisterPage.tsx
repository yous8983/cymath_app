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
import { useAuth } from "../services/AuthContext"; // Correction : importation du hook

const RegisterPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useIonRouter();
  const auth = useAuth(); // Correction : utilisation du hook

  const doRegister = async () => {
    // La fonction register du contexte retourne un boolean
    const success = auth.register(name, email, password);
    if (success) {
      history.push("/tabs/home"); // Redirection vers la page d'accueil après succès
    } else {
      alert("Échec de l'inscription. Veuillez réessayer.");
    }
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
