const infoTexto = document.getElementById('infoTexto')

arrayInfo = [`<div class="w-[60%] ml-[20%] text-gray-700 ">Actualmente trabajando en Ambiente, más precisamente en Bosques Nativos.</div>`,
            `<div class="w-[60%] ml-[20%] text-gray-700 ">A fines del 2021 empecé a investigar sobre DESARROLLO WEB por curiosidad, y terminé inscribiendome en el curso de Full Stack Java. Ahí descubrí a lo que realmente quería dedicarme, y desde entonces estoy capacitándome continuamente.</div>`,
            `<div class="w-[60%] ml-[20%] text-gray-700 ">Si bien hice el curso de Full Stack, por el momento, estoy profundizando en Desarrollo Front End.</div>`
        ]

let currentText = 0;

const rotateTexto = () => {
    infoTexto.innerHTML = arrayInfo[currentText];

    currentText++;
    if (currentText >= arrayInfo.length) {
        currentText = 0;
    }
};
rotateTexto()
setInterval(() => {
    rotateTexto()
}, 6000);

infoTexto.addEventListener('load', rotateTexto)


