import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { triangle, ellipse } from 'ionicons/icons';

/* Importation des pages (créées dans les prochaines étapes) */
import HomePage from './pages/HomePage';
import ExercicesPage from './pages/ExercicesPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

/* Fichiers CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Routes d'authentification sans la barre d'onglets */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        {/* Routes de l'application avec la barre d'onglets */}
        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/home">
                <HomePage />
              </Route>
              <Route exact path="/tabs/exercices">
                <ExercicesPage />
              </Route>
              <Route path="/tabs/profile">
                <ProfilePage />
              </Route>
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
        </Route>

        {/* Redirection si l'utilisateur arrive sur la racine de l'app */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;