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

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useIonRouter();
  const auth = useAuth(); // Correction : utilisation du hook

  const doLogin = async () => {
    // La fonction login du contexte retourne un boolean
    const success = auth.login(email, password);
    if (success) {
      history.push("/tabs/home"); // Redirection vers la page d'accueil après succès
    } else {
      alert("Échec de la connexion. Veuillez vérifier vos identifiants.");
    }
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
