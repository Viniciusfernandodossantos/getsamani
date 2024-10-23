function addToCart(itemName) {
    alert(itemName + " foi adicionado ao carrinho!");
  }
  
  // Código de exemplo de interações de JavaScript
  document.getElementById('changeColorBtn')?.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let cart = [];
let cartCounter = 0;

// Função para adicionar itens ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product');
    cart.push(productName);
    cartCounter++;
    document.getElementById('cartCounter').textContent = cartCounter;
    alert(productName + ' foi adicionado ao carrinho!');
  });
});

// Função para mostrar/ocultar o carrinho
document.getElementById('showCartBtn').addEventListener('click', function() {
  const cartElement = document.getElementById('cart');
  const cartItemsList = document.getElementById('cartItems');
  
  // Limpa a lista atual do carrinho
  cartItemsList.innerHTML = '';

  // Adiciona os itens no carrinho à lista
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsList.appendChild(li);
  });

  // Alterna a visibilidade do carrinho
  if (cartElement.style.display === 'none') {
    cartElement.style.display = 'block';
  } else {
    cartElement.style.display = 'none';
  }
});

// Função para mudar a cor de fundo aleatoriamente
document.getElementById('changeColorBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});

// Gera uma cor aleatória
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}/* Estilos personalizados */
function mudarTexto() {
  document.getElementById('titulo').innerText = 'Texto alterado pelo JavaScript!';
}

// Função para mostrar/esconder o texto
const textToToggle = document.getElementById('textToToggle');
const toggleTextBtn = document.getElementById('toggleTextBtn');

toggleTextBtn.addEventListener('click', function () {
  if (textToToggle.style.display === 'none') {
    textToToggle.style.display = 'block';
    toggleTextBtn.textContent = 'Esconder Texto';
  } else {
    textToToggle.style.display = 'none';
    toggleTextBtn.textContent = 'Mostrar Texto';
  }
});

// Função para adicionar itens na lista
document.getElementById('addItemBtn').addEventListener('click', function () {
  const inputValue = document.getElementById('itemInput').value;
  if (inputValue.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = inputValue;
    li.classList.add('list-group-item');
    document.getElementById('itemList').appendChild(li);
    document.getElementById('itemInput').value = ''; // Limpa o input após adicionar
  }
});

// Função para mover o elemento pela tela
const movable = document.getElementById('movable');
let topPosition = 200;
let leftPosition = 100;

document.addEventListener('keydown', function (event) {
  const step = 10; // Quantos pixels o quadrado se moverá a cada tecla pressionada

  switch (event.key) {
    case 'ArrowUp':
      topPosition -= step;
      break;
    case 'ArrowDown':
      topPosition += step;
      break;
    case 'ArrowLeft':
      leftPosition -= step;
      break;
    case 'ArrowRight':
      leftPosition += step;
      break;
  }
  movable.style.top = topPosition + 'px';
  movable.style.left = leftPosition + 'px';
});
