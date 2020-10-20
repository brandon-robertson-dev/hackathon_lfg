const Character = require("../models/characters")
const fetch = require("node-fetch")


const fetchDNDRace = (url) => {
    fetch("https://www.dnd5eapi.co/api/races/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))
}

const fetchDNDClass = (url) => {
    fetch("https://www.dnd5eapi.co/api/classes/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDSubClass = (url) => {
    fetch("https://www.dnd5eapi.co/api/subclasses/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDAbilityScore = (url) => {
    fetch("https://www.dnd5eapi.co/api/ability-scores/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDSkills = (url) => {
    fetch("https://www.dnd5eapi.co/api/skills/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDLanguages = (url) => {
    fetch("https://www.dnd5eapi.co/api/languages/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDSpells = (url) => {
    fetch("https://www.dnd5eapi.co/api/spells/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDFeatures = (url) => {
    fetch("https://www.dnd5eapi.co/api/features")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}


