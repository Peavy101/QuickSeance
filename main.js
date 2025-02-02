const HighDeck = ["Artifact", "Beast", "Broken One", "Darklord", "Donjon", "Ghost", "Executioner", "Horseman", "Innocent", "Marionette", "Mists", "Raven", "Seer", "Tempter"];
const CommenDeck = ["Warrior", "Avenger", "Paladin", "Soldier", "Mercenary", "Myrmidon", "Berserker", "Hooded One", "Dictator", "Torturer", "Wizard", "Transmuter", "Diviner", "Enchanter", "Abjurer", "Elementalist", "Evoker", "Illusionist", "Necromancer", "Conjurer", "Rogue", "Swashbuckler", "Philanthropist", "Trader", "Merchant", "Guild Member", "Beggar", "Thief", "Tax Collector", "Miser", "Priest", "Monk", "Missionary", "Healer", "Sheperd", "Druid", "Anarchist", "Charlatan", "Bishop", "Traitor"];
const suggestions = [...HighDeck, ...CommenDeck]; // Combine both arrays

const UserInput = document.getElementById("UserInput");
const suggestionBox = document.getElementById("suggestions");













function firstCard() {
    
}


////////////////////////////////
///// Autocomplete below  /////
//////////////////////////////

// Function to filter suggestions based on user input
function filterSuggestions(input) {
    return suggestions.filter(item => item.toLowerCase().includes(input.toLowerCase()));
}

// Event listener for input
UserInput.addEventListener("input", () => {
const input = UserInput.value;
suggestionBox.innerHTML = ""; // Clear previous suggestions

if (input.length === 0) {
    return; // Don't show suggestions if input is empty
}

const filteredSuggestions = filterSuggestions(input);

// Show filtered suggestions
filteredSuggestions.forEach(suggestion => {
const suggestionItem = document.createElement("div");
suggestionItem.textContent = suggestion;
suggestionItem.classList.add("suggestion-item");

// On click, fill input with suggestion and clear box
suggestionItem.addEventListener("click", () => {
    UserInput.value = suggestion;
    suggestionBox.innerHTML = ""; // Clear suggestions
});

suggestionBox.appendChild(suggestionItem);
});
});

  // Close suggestion box when clicking outside
document.addEventListener("click", (e) => {
if (e.target !== UserInput) {
    suggestionBox.innerHTML = "";
}
});