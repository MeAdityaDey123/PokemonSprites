const pokemonCont = document.querySelector(".pokemon-cont")

for (let idx = 1; idx <= 898; idx++) {
    let imgLink = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${idx}.png`
    const pokemon = document.createElement("div")
    const img = document.createElement("img")
    const index = document.createElement("h4")
    index.textContent = `#${idx}`
    img.src = imgLink;
    pokemon.append(img)
    pokemon.append(index)
    pokemon.classList.add("pokemon")
    pokemonCont.append(pokemon)
}