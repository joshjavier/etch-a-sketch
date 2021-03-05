function createGrid(size = 16) {
  const grid = document.createElement('div');
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
  }
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.border = '5px solid var(--dark)';

  return grid;
}

function addHoverEffect() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'var(--paint-color)';
    });
  });
}

function resetGrid() {
  const size = Number(window.prompt('Enter the grid size: (max 100)', 16));
  if (!!!size || size > 100) return;
  const container = document.querySelector('.container');
  container.removeChild(container.firstChild);
  container.appendChild(createGrid(size));
  addHoverEffect();
}

(function initialize() {
  const container = document.querySelector('.container');
  container.appendChild(createGrid());
  addHoverEffect();
})();
