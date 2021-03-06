import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import abbeal from '../../../abbeal.png';

const Webpack = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Webpack : l'outil indispensable</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="">
        <p>
          Webpack est une librairie de configuration pour les applications JavaScript qui permet d'organiser notre application
          en <span className="span-bold">modules. </span>
          Nous écrivons plusieurs fichiers JS vivant dans leurs propres modules
          et qui importent dans la majorité des cas des dépendances
          internes ou externes. Ces dépendances sont d'autres fichiers JS.
        </p>
        <p>
          Qualifié de <span className="span-bold">« bundler »</span>, Webpack va parcourir notre application afin
          de construire un <span className="span-bold">graphe de dépendances</span> des différents
          fichiers JS qu'il va compiler et ensuite générer sous un ou plusieurs fichiers qu'on appelle « bundle ». Ceci est
          indispensable pour les performances d'une application, car au lieu de charger chacun des fichiers JS,
          il n'y aura plus qu'un ou un petit nombre de bundle à prendre en compte.
        </p>
      </Row>
      <Row type="flex">
        <h2>Un écosystème immense</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          En plus de sa fonction de base du « bundle », Webpack offre des possibilités extrêmement intéressantes
          comme l'automatisation de tâches, la conversion l'ES6 en ES5 car mieux supportée par les navigateurs ou encore
          de compiler du Sass vers du CSS.
        </p>
        <p>
          Lors du projet <span className="span-bold">Syllabo</span>, j'ai configuré le fichier webpack et cela peut vite devenir complexe selon les besoins.
          Par exemple, Syllabo permet le
          <a target="_blank" rel="noopener noreferrer"
          href="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8"> Server Side Rendering (SSR) </a>
          mis en place de façon artisanale. Cela nous permet d'avoir un meilleur contrôle et plus de flexibilité.
          Mettre en place le SSR n'est pas chose aisée et webpack facilite grandement cette tâche.
        </p>
      </Row>
      <Row type="flex">
        <h2>La configuration en production</h2>
      </Row>
      <Row type="flex">
        <p>
          Je n'ai pour le moment pas eu l'occasion de configurer webpack pour bundler mon application de façon
          optimale pour une mise en production. C'est sur ce point que je vais devoir me former, la mettre en place
          et ainsi gagner en expérience sur cette compétence. Je risque d'essuyer pas mal d'échecs mais je ferai
          face à cette adversité pour avoir une application digne de ce nom en production.
        </p>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <h2>Réalisations</h2>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
        <Link to="/realizations/syllabo" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="Syllabo">
            <img src={abbeal} alt="Syllabo" className="realizations-button"/>
          </Tooltip>
        </Link>
      </Row>
    </Row>
  </Row>
);

export default Webpack;
