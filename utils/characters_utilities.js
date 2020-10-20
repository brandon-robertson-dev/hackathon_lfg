const Character = require("../models/characters")
const fetch = require("node-fetch")


const fetchDNDRace = (url) => {
    fetch("www.dnd5eapi.co/api/races/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDClass = (url) => {
    fetch("www.dnd5eapi.co/api/classes/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDSubClass = (url) => {
    fetch("www.dnd5eapi.co/api/subclasses/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDAbilityScore = (url) => {
    fetch("www.dnd5eapi.co/api/ability-scores/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDSkills = (url) => {
    fetch("www.dnd5eapi.co/api/skills/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDLanguages = (url) => {
    fetch("www.dnd5eapi.co/api/languages/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDSpells = (url) => {
    fetch("www.dnd5eapi.co/api/spells/")
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchDNDFeatures = (url) => {
    fetch("www.dnd5eapi.co/api/features")
    .then(response => response.json())
    .then(data => console.log(data))
}
