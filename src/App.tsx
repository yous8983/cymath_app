import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { triangle, ellipse } from "ionicons/icons";

/* Importation des pages (créées dans les prochaines étapes) */
import HomePage from "./pages/HomePage";
import ExercicesPage from "./pages/ExercicesPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Importez l'AuthProvider et le hook useAuth
import { AuthProvider, useAuth } from "./services/AuthContext";

/* Fichiers CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";

setupIonicReact();

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <IonRouterOutlet>
      {/* Routes d'authentification publiques */}
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />

      {/* Routes protégées avec les onglets */}
      <Route path="/tabs">
        {isAuthenticated ? (
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/home" component={HomePage} />
              <Route exact path="/tabs/exercices" component={ExercicesPage} />
              <Route path="/tabs/profile" component={ProfilePage} />
              {/* Redirection par défaut après l'authentification */}
              <Route exact path="/tabs">
                <Redirect to="/tabs/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/tabs/home">
                <IonIcon icon={triangle} />
                <IonLabel>Accueil</IonLabel>
              </IonTabButton>
              <IonTabButton tab="exercices" href="/tabs/exercices">
                <IonIcon icon={ellipse} />
                <IonLabel>Exercices</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/tabs/profile">
                <IonIcon icon={ellipse} />
                <IonLabel>Profil</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      {/* Redirection par défaut si l'utilisateur arrive sur la racine */}
      <Route exact path="/">
        {isAuthenticated ? (
          <Redirect to="/tabs/home" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      {/* Route pour la page de détail de l'exercice (hors des onglets) */}
      <Route path="/exercices/:id" component={ExerciseDetailPage} />
    </IonRouterOutlet>
  );
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
