import './style.css'
import { LogoIcon, SearchIcon, LocationIcon, MonumentIcon, ScribbleIcon } from './components/icons.js'
import CountryItem from './components/CountryItem.js'

// Country data array
const countries = [
  { name: 'Allemagne', image: './images/allemagne.jpg', url: '#' },
  { name: 'Andorre', image: './images/andorre.jpg', url: '#' },
  { name: 'Autriche', image: './images/autriche.jpg', url: '#' },
  { name: 'Belgique', image: './images/belgique.jpg', url: '#' },
  { name: 'Blélorussie', image: './images/bielorussie.jpg', url: '#' },
  { name: 'Bosnie', image: './images/bosnie.jpg', url: '#' },
  { name: 'Bulgarie', image: './images/bulgarie.jpg', url: '#' },
  { name: 'Chypre', image: './images/chypre.jpg', url: '#' },
  { name: 'Croatie', image: './images/croatie.jpg', url: '#' },
  { name: 'Danemark', image: './images/danemark.jpg', url: '#' },
  { name: 'Espagne', image: './images/espagne.jpg', url: '#' },
  { name: 'Estonie', image: './images/estonie.jpg', url: '#' },
  { name: 'Finlande', image: './images/finlande.jpg', url: '#' },
  { name: 'France', image: './images/france.jpg', url: '#' },
  { name: 'Grèce', image: './images/grece.jpg', url: '#' },
  { name: 'Hongrie', image: './images/hongrie.jpg', url: '#' },
  { name: 'Irlande', image: './images/irlande.jpg', url: '#' },
  { name: 'Islande', image: './images/islande.jpg', url: '#' },
  { name: 'Italie', image: './images/italie.jpg', url: '#' },
  { name: 'Lettonie', image: './images/lettonie.jpg', url: '#' },
  { name: 'Luxembourg', image: './images/luxembourg.jpg', url: '#' },
  { name: 'Maroc', image: './images/maroc.jpg', url: '#' },
  { name: 'Norvège', image: './images/norvege.jpg', url: '#' },
  { name: 'Pays-Bas', image: './images/pays-bas.jpg', url: '#' },
  { name: 'Pologne', image: './images/pologne.jpg', url: '#' },
  { name: 'Portugal', image: './images/portugal.jpg', url: '#' },
  { name: 'République tchèque', image: './images/republique-tcheque.jpg', url: '#' },
  { name: 'Roumanie', image: './images/roumanie.jpg', url: '#' },
  { name: 'Royaume-Uni', image: './images/royaume-uni.jpg', url: '#' },
  { name: 'Russie', image: './images/russie.jpg', url: '#' },
  { name: 'Serbie', image: './images/serbie.jpg', url: '#' },
  { name: 'Slovaquie', image: './images/slovaquie.jpg', url: '#' },
  { name: 'Slovénie', image: './images/slovenie.jpg', url: '#' },
  { name: 'Suisse', image: './images/suisse.jpg', url: '#' },
  { name: 'Suède', image: './images/suede.jpg', url: '#' },
  { name: 'Turquie', image: './images/turquie.jpg', url: '#' },
  { name: 'Ukraine', image: './images/ukraine.jpg', url: '#' },
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

