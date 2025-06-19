import './style.css'
import { LogoIcon, SearchIcon, LocationIcon, MonumentIcon, ScribbleIcon } from './components/icons.js'
import CountryItem from './components/CountryItem.js'

// Country data array
const countries = [
  { name: 'Allemagne', image: './public/images/allemagne.jpg', url: '#' },
  { name: 'Andorre', image: './public/images/andorre.jpg', url: '#' },
  { name: 'Autriche', image: './public/images/autriche.jpg', url: '#' },
  { name: 'Belgique', image: './public/images/belgique.jpg', url: '#' },
  { name: 'Blélorussie', image: './public/images/bielorussie.jpg', url: '#' },
  { name: 'Bosnie', image: './public/images/bosnie.jpg', url: '#' },
  { name: 'Bulgarie', image: './public/images/bulgarie.jpg', url: '#' },
  { name: 'Chypre', image: './public/images/chypre.jpg', url: '#' },
  { name: 'Croatie', image: './public/images/croatie.jpg', url: '#' },
  { name: 'Danemark', image: './public/images/danemark.jpg', url: '#' },
  { name: 'Espagne', image: './public/images/espagne.jpg', url: '#' },
  { name: 'Estonie', image: './public/images/estonie.jpg', url: '#' },
  { name: 'Finlande', image: './public/images/finlande.jpg', url: '#' },
  { name: 'France', image: './public/images/france.jpg', url: '#' },
  { name: 'Grèce', image: './public/images/grece.jpg', url: '#' },
  { name: 'Hongrie', image: './public/images/hongrie.jpg', url: '#' },
  { name: 'Irlande', image: './public/images/irlande.jpg', url: '#' },
  { name: 'Islande', image: './public/images/islande.jpg', url: '#' },
  { name: 'Italie', image: './public/images/italie.jpg', url: '#' },
  { name: 'Lettonie', image: './public/images/lettonie.jpg', url: '#' },
  { name: 'Luxembourg', image: './public/images/luxembourg.jpg', url: '#' },
  { name: 'Maroc', image: './public/images/maroc.jpg', url: '#' },
  { name: 'Norvège', image: './public/images/norvege.jpg', url: '#' },
  { name: 'Pays-Bas', image: './public/images/pays-bas.jpg', url: '#' },
  { name: 'Pologne', image: './public/images/pologne.jpg', url: '#' },
  { name: 'Portugal', image: './public/images/portugal.jpg', url: '#' },
  { name: 'République tchèque', image: './public/images/republique-tcheque.jpg', url: '#' },
  { name: 'Roumanie', image: './public/images/roumanie.jpg', url: '#' },
  { name: 'Royaume-Uni', image: './public/images/royaume-uni.jpg', url: '#' },
  { name: 'Russie', image: './public/images/russie.jpg', url: '#' },
  { name: 'Serbie', image: './public/images/serbie.jpg', url: '#' },
  { name: 'Slovaquie', image: './public/images/slovaquie.jpg', url: '#' },
  { name: 'Slovénie', image: './public/images/slovenie.jpg', url: '#' },
  { name: 'Suisse', image: './public/images/suisse.jpg', url: '#' },
  { name: 'Suède', image: './public/images/suede.jpg', url: '#' },
  { name: 'Turquie', image: './public/images/turquie.jpg', url: '#' },
  { name: 'Ukraine', image: './public/images/ukraine.jpg', url: '#' },
]

function renderHero() {
  return `
    <header class="hero-header">
      <div class="logo">
        ${LogoIcon()}
      </div>
      <nav class="hero-nav">
        <a href="#">Destinations</a>
        <a href="#">Activités</a>
        <a href="#">Outils</a>
      </nav>
    </header>
    <section class="hero-main">
      <h1>Comparez +600 000 activités<br>dans le <span class="highlight">monde${ScribbleIcon()}</span></h1>
      <form class="hero-search-bar" autocomplete="off" onsubmit="return false">
        <div class="search-field">
          <span class="search-icon"> 
            ${LocationIcon()}
          </span>
          <input type="text" placeholder="Allemagne, Andorre, Autriche..." />
        </div>
        <div class="search-field">
          <span class="search-icon">
            ${MonumentIcon()}
          </span>
          <input type="text" placeholder="Musée, Tour Eiffel..." />
        </div>
        <button type="submit">
          ${SearchIcon()}
          <span>Rechercher</span>
        </button>
      </form>
      <div class="hero-features">
        <div><strong>Simplicité</strong><span>Comparez et réservez vos activités en une seule recherche</span></div>
        <div><strong>Meilleurs prix</strong><span>Pour chaque activité, trouvez le meilleur prix</span></div>
        <div><strong>Disponibilité</strong><span>GenerationVoyage vous propose les activités disponibles à vos dates</span></div>
        <div><strong>Inspiration</strong><span>GenerationVoyage vous suggère des choses à faire autour de vous</span></div>
      </div>
    </section>
  `
}

function renderCountryList() {
  return `
    <section class="keywords-cloud">
      <h2>Nos destinations</h2>
      <h3>Europe</h3>
      <ul class="country-list">
        ${countries.map(country => `
          <li class="country-item">
            <a href="${country.url}">
              ${country.name}
            </a>
          </li>
        `).join('')}
      </ul>
    </section>
  `
}

document.querySelector('#app').innerHTML = `
  <div>
    <div class="container">
      ${renderHero()}
    </div>
    <div class="container">
      ${renderCountryList()}
    </div>
  </div>
`

// Initialize CountryItem instances
function initializeCountryItems() {
  const countryElements = document.querySelectorAll('.country-item');
  countryElements.forEach((el, index) => {
    new CountryItem(el, countries[index].image, index);
  });
}

// Initialize after DOM is ready
initializeCountryItems();

