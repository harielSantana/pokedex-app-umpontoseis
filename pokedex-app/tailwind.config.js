/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pokemon Type Colors
        bug: "#8CB230",
        dark: "#58575F",
        dragon: "#0F6AC0",
        electric: "#EED535",
        fairy: "#ED6EC7",
        fighting: "#D04164",
        fire: "#FD7D24",
        flying: "#748FC9",
        ghost: "#556AAE",
        grass: "#62B957",
        ground: "#DD7748",
        ice: "#61CEC0",
        normal: "#9DA0AA",
        poison: "#A552CC",
        psychic: "#EA5D60",
        rock: "#BAAB82",
        steel: "#417D9A",
        water: "#4A90DA",
        
        // Background Type Colors
        'bg-bug': '#8BD674',
        'bg-dark': '#6F6E78',
        'bg-dragon': '#7383B9',
        'bg-electric': '#F2CB55',
        'bg-fairy': '#EBA8C3',
        'bg-fighting': '#EB4971',
        'bg-fire': '#FFA756',
        'bg-flying': '#83A2E3',
        'bg-ghost': '#8571BE',
        'bg-grass': '#8BBE8A',
        'bg-ground': '#F78551',
        'bg-ice': '#91D8DF',
        'bg-normal': '#B5B9C4',
        'bg-poison': '#9F6E97',
        'bg-psychic': '#FF6568',
        'bg-rock': '#D4C294',
        'bg-steel': '#4C91B2',
        'bg-water': '#58ABF6',
        
        // Custom Colors
        'pokemon-black': '#17171B',
        'pokemon-gray': '#747476',
        'pokemon-light-gray': '#f2f2f2',
        'pokemon-pressed': '#e2e2e2',
        'pokemon-modal': 'rgba(23, 23, 27, 0.5)',
        'pokemon-button': 'rgba(23, 23, 27, 0.1)',
      },
      fontFamily: {
        'sf-regular': ['sf-pro-display-regular'],
        'sf-medium': ['sf-pro-display-medium'],
        'sf-bold': ['sf-pro-display-bold'],
      },
      fontSize: {
        'pokemon-title': '100px',
        'app-title': '30px',
        'pokemon-name': '23px',
        'type-text': '16px',
        'filter-text': '13px',
        'pokemon-number': '12px',
      }
    },
  },
  plugins: [],
}
