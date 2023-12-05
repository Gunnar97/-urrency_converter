const symbolContainer = document.querySelector(".symbol-container");
const symbols = ["$", "%", "#", "*", "@", "&", "!", "?"];
const symbolCount = 100;

function getRandomDelay() {
  return (Math.random() * 4000 + 1000).toFixed();
}

function createSymbol() {
  const symbol = document.createElement("div");
  symbol.className = "symbol";
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * 100 + "%";
  symbol.style.animationDelay = getRandomDelay() + "ms";
  symbolContainer.appendChild(symbol);
}

for (let i = 0; i < symbolCount; i++) {
  createSymbol();
}

setInterval(() => {
  const symbolsToRemove = document.querySelectorAll(".symbol");
  symbolsToRemove.forEach((symbol) => {
    symbolContainer.removeChild(symbol);
  });

  for (let i = 0; i < symbolCount; i++) {
    createSymbol();
  }
}, 5000);
