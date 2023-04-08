const palabras = [
  { completo: 'bailar', mascara: '-ailar' },
  { completo: 'bala', mascara: '-ala' },
  { completo: 'boulevard', mascara: '-oulevard' },
  { completo: 'bufanda', mascara: '-ufanda' },
  { completo: 'buceo', mascara: '-uceo' },
  { completo: 'bruja', mascara: '-ruja' },
  { completo: 'bronce', mascara: '-ronce' },
  { completo: 'broche', mascara: '-roche' },
  { completo: 'brisa', mascara: '-risa' },
  { completo: 'boya', mascara: '-oya' },
  { completo: 'boxeador', mascara: '-oxeador' },
  { completo: 'botella', mascara: '-otella' },
  { completo: 'bosque', mascara: '-osque' },
  { completo: 'borracho', mascara: '-orracho' },
  { completo: 'bonito', mascara: '-onito' },
  { completo: 'bombilla', mascara: '-ombilla' },
  { completo: 'bombero', mascara: '-ombero' },
  { completo: 'bolsa', mascara: '-olsa' },
  { completo: 'boda', mascara: '-oda' },
  { completo: 'boca', mascara: '-oca' },
  { completo: 'blog', mascara: '-log' },
  { completo: 'blanco', mascara: '-lanco' },
  { completo: 'billete', mascara: '-illete' },
  { completo: 'bifurcación', mascara: '-ifurcación' },
  { completo: 'bien', mascara: '-ien' },
  { completo: 'biblioteca', mascara: '-iblioteca' },
  { completo: 'beso', mascara: '-eso' },
  { completo: 'belleza', mascara: '-elleza' },
  { completo: 'belén', mascara: '-elén' },
  { completo: 'bebé', mascara: '-ebé' },
  { completo: 'batería', mascara: '-atería' },
  { completo: 'batalla', mascara: '-atalla' },
  { completo: 'basura', mascara: '-asura' },
  { completo: 'barco', mascara: '-arco' },
  { completo: 'barba', mascara: '-arba' },
  { completo: 'barato', mascara: '-arato' },
  { completo: 'banco', mascara: '-anco' },
  { completo: 'balón', mascara: '-alón' },
  { completo: 'volcán', mascara: '-olcán' },
  { completo: 'vivienda', mascara: '-ivienda' },
  { completo: 'vitrina', mascara: '-itrina' },
  { completo: 'visual', mascara: '-isual' },
  { completo: 'vista', mascara: '-ista' },
  { completo: 'visita', mascara: '-isita' },
  { completo: 'virtual', mascara: '-irtual' },
  { completo: 'violeta', mascara: '-ioleta' },
  { completo: 'violín', mascara: '-iolín' },
  { completo: 'vinilo', mascara: '-inilo' },
  { completo: 'villa', mascara: '-illa' },
  { completo: 'vigilante', mascara: '-igilante' },
  { completo: 'viernes', mascara: '-iernes' },
  { completo: 'viento', mascara: '-iento' },
  { completo: 'viejo', mascara: '-iejo' },
  { completo: 'video', mascara: '-ideo' },
  { completo: 'vibra', mascara: '-ibra' },
  { completo: 'viajero', mascara: '-iajero' },
  { completo: 'viaje', mascara: '-iaje' },
  { completo: 'veterinario', mascara: '-eterinario' },
  { completo: 'vestido', mascara: '-estido' },
  { completo: 'versión', mascara: '-ersión' },
  { completo: 'verificar', mascara: '-erificar' },
  { completo: 'verdad', mascara: '-erdad' },
  { completo: 'verde', mascara: '-erde' },
  { completo: 'verdadero', mascara: '-erdadero' },
  { completo: 'ventana', mascara: '-entana' },
  { completo: 'ventaja', mascara: '-entaja' },
  { completo: 'vendedor', mascara: '-endedor' },
  { completo: 'velero', mascara: '-elero' },
  { completo: 'vela', mascara: '-ela' },
  { completo: 'vaso', mascara: '-aso' },
  { completo: 'valor', mascara: '-alor' },
  { completo: 'valle', mascara: '-alle' },
  { completo: 'valiente', mascara: '-aliente' },
  { completo: 'vago', mascara: '-ago' },
  { completo: 'vaca', mascara: '-aca' },
];

let palabraActual;
let palabraEnmascarada;
let letraACompletar;
let aciertos = 0;
const aciertosMaximos = 20;
const pikachu = document.querySelector('.pikachuImg');

function seleccionarPalabra() {
  const index = Math.floor(Math.random() * palabras.length);
  palabraActual = palabras[index].completo;
  palabraEnmascarada = palabras[index].mascara;
}

function mostrarPalabra() {
  const palabraContainer = document.getElementById('palabra');
  let contenido = '';
  for (let i = 0; i < palabraEnmascarada.length; i++) {
    const letra = palabraEnmascarada[i];
    if (letra === '-') {
      contenido += '<span class="letra-vacia"></span>';
      letraACompletar = palabraActual[i].toUpperCase();
    } else {
      contenido += letra;
    }
  }
  palabraContainer.innerHTML = contenido;
}


document.querySelectorAll('.letra').forEach((letra) => {
  letra.addEventListener('click', () => {
    if (letra.textContent === letraACompletar) {
      aciertos++;
      document.getElementById('aciertos').textContent = `Aciertos: ${aciertos}`;
      document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
        letraVacia.classList.add('correcta');
        document.querySelectorAll('.letra').forEach((letra) => {
          if (letra.innerHTML == letraACompletar) {
            pikachu.src = "https://i.pinimg.com/originals/17/28/b8/1728b808f09c23a4b7501f4e5da22c97.gif"
            setTimeout(() => {
              pikachu.src = ""
              letra.style.backgroundColor = 'white';
              reiniciarJuego();
            }, 1500);
          }
        })
      });
    } else {
      aciertos > 0 ? aciertos-- : aciertos = 0;
      document.getElementById('aciertos').textContent = `Aciertos: ${aciertos}`;
      document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
        letraVacia.classList.add('incorrecta');
        document.querySelectorAll('.letra').forEach((letra) => {
          if (letra.innerHTML == letraACompletar) {
            pikachu.src = "https://i.pinimg.com/originals/04/5c/dd/045cdda420dc87a78730bbf5ec306d06.gif"
            letra.style.backgroundColor = '#37c022';
            setTimeout(() => {
              pikachu.src = ""
              letra.style.backgroundColor = 'white';
            }, 2000);
          }
        })
      });
      setTimeout(() => {
        document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
          letraVacia.classList.remove('incorrecta');
        });
        reiniciarJuego();
      }, 2000);
    }
  });
});

function reiniciarJuego() {
  if (aciertos >= aciertosMaximos) {
    mostrarFelicitacion();
  } else {
    seleccionarPalabra();
    mostrarPalabra();
  }
}

function mostrarFelicitacion() {
  const contenedorJuego = document.getElementById('juego');
  contenedorJuego.innerHTML = `
    <div class="mensaje-felicitacion">
      <h2>¡Felicidades, ganaste!</h2>
      <button class="boton-reiniciar" onclick="location.reload()">Jugar de nuevo</button>
    </div>
  `;
}

seleccionarPalabra();
mostrarPalabra();
