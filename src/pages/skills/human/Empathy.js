import React from 'react';
import { Link } from "react-router-dom";
import { Row, Tooltip } from 'antd';
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';
import abbeal from '../../../abbeal.png';
import improvit from '../../../improvit.png';
import alpha from '../../../alpha.png';
import maintenance from '../../../maintenance.png';

const Empathy = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Empathie pour un monde en couleur</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="skill-definition">
        <p>
          <span className="span-bold">Ma définition</span> : Connexion psychique et émotionnelle entre des êtres vivants.
        </p>
      </Row>
      <Row type="flex" className="skill-introduction">
        <p>
          Le monde se numérise et se digitalise. L'ordinateur et le smartphone sont devenus des outils intégrants de notre quotidien.
          La surexposition à ces outils dans notre vie sociale et professionnelle peut créer des êtres dénués d'émotions ne sachant
          plus communiquer qu'à travers ces machines.
        </p>
        <p>
          Mais derrière chaque écran se trouve un être humain et non un robot. L'empathie est pour moi, une qualité indispensable
          dans un monde évoluant trop vite dont nous essayons sans cesse de reprendre le contrôle. L'empathie est encore
          plus importante pour nous, ingénieur et développeur d'outils numériques afin de ne pas perdre notre humanité.
        </p>
        <p>
          Selon moi, les millions de lignes de codes produites représentent un monde gris et froid. En tant que développeur
          nous vivons dans ce monde une grande partie de la journée. Une fois sortie de ce monde, pour ne pas percevoir son
          entourage tout en gris, l'empathie nous aide à <span className="span-bold">recolorer son espace et à remettre les pieds sur notre belle planète. </span>
          En s'identifiant à autrui et ces émotions tout en faisant la distinction des nôtres, nous redevenons humains,
          un être créatif au potentiel illimité.
        </p>
      </Row>
      <Row type="flex">
        <h2>L'empathie pour me retrouver</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Poursuivant ma quête pour devenir un bon développeur, je passais un temps considérable dans mes lignes de codes
          ne comptant plus les heures. Une routine s'était donc installée avec le fameux <span className="span-bold">métro-boulot-dodo. </span>
          De nature introverti, je ne prenais plus de temps pour mon entourage et mes moments d'introspection.
          J'étais pris au piège dans ce monde tout en gris et cela m'affectait de plus en plus.
        </p>
        <p>
          Puis un jour, j'ai pris le temps de voir un bon vieil ami, aventureux et aimant la liberté par-dessus tout.
          Il me raconta avec passion ces aventures et ses déboires dans plusieurs pays. L'empathie a joué un rôle primordial.
          Je me suis fortement <span className="span-bold">identifié</span> aux aventures en m'imaginant les vivres aussi. Cela a créé en moi de vives émotions et
          je me suis pris comme une gifle en pleine figure qui me réveilla de mon cauchemar. Il était temps d'agir et changer ma situation.
        </p>
        <p>
          Je me suis rendu compte de l'importance de <span className="span-bold">l'équilibre de vie</span> dont j'avais besoin pour rester moi-même et
          atteindre mes objectifs. Il est parfois nécessaire de créer ce déséquilibre mais en le gérant correctement
          pour que tout ne s'effondre pas.
        </p>
        <p>
          L'empathie peut énormément apporter lors de nos relations avec autrui mais il ne faut pas oublier que
          c'est un <span className="span-bold">allié de taille pour soi-même. </span>Je pense que mon empathie m'aide à devenir un bon développeur
          car cette expérience est une leçon qu'aucun bouquin technique ne pouvait me donner.
        </p>
      </Row>
      <Row type="flex">
        <h2>Un environnement de travail plus sein</h2>
      </Row>
      <Row type="flex">
        <p>
          L'empathie participe à la construction d'un environnement professionnel sein.
          L'impact dans les performances individuelles et en équipe n'est pas négligeable.
        </p>
        <p>
          Lors de mes réunions techniques ou client, je n'oublie pas d'utiliser mon empathie lorsqu'une personne prend la parole.
          Je pense qu'il est important de <span className="span-bold">prendre du recul</span> sur tout ce qui est dit ainsi que la situation pour par exemple décider
          de façon plus équitable sur des sujets importants.
        </p>
      </Row>
      <Row type="flex">
        <h2>Et aujourd'hui ?</h2>
      </Row>
      <Row type="flex">
        <p>
          Je fais attention de ne pas être envahi par les sentiments d'autrui et de distinguer les miens afin de garder le cap.
          Cela reste difficile, mais il faut que je m'améliore de ce côté sans paraître d'être une personne froide et sans considération.
        </p>
        <p>
          J'ai tendance à beaucoup intérioriser, il faut que je sache quand il est nécessaire de faire part de mes remarques.
        </p>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <h2>Réalisations</h2>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
        <Link to="/realizations/itschool" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="It'School">
            <img src={itschool} alt="It'School" className="realizations-button"/>
          </Tooltip>
        </Link>
        <Link to="/realizations/beneylu" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="Beneylu">
            <img src={beneylu} alt="Beneylu" className="realizations-button"/>
          </Tooltip>
        </Link>
        <Link to="/realizations/syllabo" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="Syllabo">
            <img src={abbeal} alt="Syllabo" className="realizations-button"/>
          </Tooltip>
        </Link>
        <Link to="/realizations/improvit" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="Improvit">
            <img src={improvit} alt="Improvit" className="realizations-button"/>
          </Tooltip>
        </Link>
        <Link to="/realizations/alpha" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="Alpha">
            <img src={alpha} alt="Alpha" className="realizations-button"/>
          </Tooltip>
        </Link>
        <Link to="/realizations/maintenance" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="TMA">
            <img src={maintenance} alt="Tierce Maintenance Applicative" className="realizations-button"/>
          </Tooltip>
        </Link>
      </Row>
    </Row>
  </Row>
);

export default Empathy;
