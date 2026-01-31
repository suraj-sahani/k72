import {
  Agence1Thumb,
  Agence2Thumb,
  Agence3Thumb,
  Agence4Thumb,
  Agence5Thumb,
  Agence6Thumb,
  Agence7Thumb,
  Agence8Thumb,
} from '../assets'
import AgenceHero from '../components/agence/agence-hero'
import AgenceList from '../components/agence/agence-list'
import AgenceStrategies from '../components/agence/agence-strategies'

const agenceImageThumbs = [
  Agence1Thumb,
  Agence2Thumb,
  Agence3Thumb,
  Agence4Thumb,
  Agence5Thumb,
  Agence6Thumb,
  Agence7Thumb,
  Agence8Thumb,
]

export default function Agence() {
  return (
    <>
      <AgenceHero agenceImageThumbs={agenceImageThumbs} />
      <div className="font-lausanne-regular container mx-auto mt-20 space-y-20 p-2 text-[3vw] md:mt-40 md:space-y-40 md:text-[1.5vw]">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div>Expertise</div>
          <div>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Contenu</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>

          <div>
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
          </div>

          <div>
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>

      <AgenceStrategies />
      <AgenceList />
    </>
  )
}
