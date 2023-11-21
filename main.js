const roothome = document.querySelector('.roothome');
const rootheader = document.querySelector('.rootheader');
const rootsections = document.querySelector('.rootsections');
const rootfooter = document.querySelector('.rootfooter');

//creo el header
const header = document.createElement('header');
header.className = 'fixed-header';

const menu = document.createElement('div');
menu.className = 'menu';

// Creo el primer div con la clase "div1"
const div1 = document.createElement('div');
div1.className = 'div1';

// Creo la imagen dentro de div1
const imgDiv1 = document.createElement('img');
imgDiv1.src = 'img/pen-logo.png';
imgDiv1.alt = '';
div1.appendChild(imgDiv1);

// Creo el segundo div con la clase "div2"
const div2 = document.createElement('div');
div2.className = 'div2';

// Creo el párrafo dentro de div2
const pDiv2 = document.createElement('p');
pDiv2.textContent = 'Selected Projects';
div2.appendChild(pDiv2);

// Creo el tercer div con la clase "div32"
const div32 = document.createElement('div');
div32.className = 'div3';

// Creo el div "links" dentro de div32
const links2 = document.createElement('div');
links2.className = 'links';

// Creo los elementos de la lista dentro de "links"
const liInstagram = document.createElement('li');
const aInstagram = document.createElement('a');
aInstagram.href = 'Instagram';
aInstagram.textContent = 'Instagram';
liInstagram.appendChild(aInstagram);

const liBehance = document.createElement('li');
const aBehance = document.createElement('a');
aBehance.href = 'Behance';
aBehance.textContent = 'Behance';
liBehance.appendChild(aBehance);

links2.appendChild(liInstagram);
links2.appendChild(liBehance);

// Crear el div "ny-header2" dentro de div32
const nyHeader2 = document.createElement('div');
nyHeader2.className = 'ny-header2';
const liEmail = document.createElement('li');
const aEmail = document.createElement('a');
aEmail.href = 'hello@penthouse.studio';
aEmail.textContent = 'hello@penthouse.studio';
liEmail.appendChild(aEmail);
nyHeader2.appendChild(liEmail);

// Crear el div "onoff2" dentro de div32
const onoff = document.createElement('div');
onoff.className = 'onoff';


// Crear un nuevo toggleSwitch para onoff
const toggleSwitchOnOff = document.createElement('label');
toggleSwitchOnOff.className = 'switch';

const toggleInputOnOff = document.createElement('input');
toggleInputOnOff.type = 'checkbox';
toggleInputOnOff.id = 'toggle-onoff';
toggleInputOnOff.checked = false;

const sliderOnOff = document.createElement('span');
sliderOnOff.className = 'slider round';

toggleSwitchOnOff.appendChild(toggleInputOnOff);
toggleSwitchOnOff.appendChild(sliderOnOff);

// Agregar el nuevo toggleSwitch al div "onoff"
onoff.appendChild(toggleSwitchOnOff);

// Agregar los elementos creados al header
div32.appendChild(links2);
div32.appendChild(nyHeader2);
div32.appendChild(onoff);

menu.appendChild(div1);
menu.appendChild(div2);
menu.appendChild(div32);

header.appendChild(menu);

// Agregar el header al contenedor principal
rootheader.appendChild(header);

// Creo la sección
const sec1 = document.createElement('section');
sec1.className = 'sec1';
sec1.id = 'section1';

const containerdivsec = document.createElement("div");
containerdivsec.className = "containersec1";

// Creo el primer div dentro de la sección
const menusec1 = document.createElement('div');
menusec1.className = 'menusec1';

// Creo el primer div dentro de menusec1
const div1sec1 = document.createElement('div');
div1sec1.className = 'div1sec1';
const div1sec1Content = document.createElement('p');
div1sec1Content.textContent = 'Penthouse® is a boutique, full-service branding agency collaborating closely with founders through strategy, creative direction and design.';
div1sec1.appendChild(div1sec1Content);

// Creo el segundo div dentro de menusec1
const div2sec1 = document.createElement('div');
div2sec1.className = 'div2sec1';
const div2sec1Content = document.createElement('p');
div2sec1Content.textContent = 'Services include brand strategy, graphic design, art direction, creative direction, packaging, web development, 3D and animation.';
div2sec1.appendChild(div2sec1Content);

// Creo el div3 dentro de la sección
const div3 = document.createElement('div');
div3.className = 'div3';

//Creo div4 para onoff
const div4 = document.createElement ("div");
div4.className = "div4";

// Creo div ny-header dentro de div3
const nyHeader = document.createElement('div');
nyHeader.className = 'ny-header';
const nyHeaderContent = document.createElement('p');
nyHeaderContent.textContent = '167 Canal St. New York, NY';
nyHeader.appendChild(nyHeaderContent);

// Crear div links dentro de div3
const links = document.createElement('div');
links.className = 'links';
const link1 = document.createElement('li');
const link1a = document.createElement('a');
link1a.href = 'mailto:hello@penthouse.studio';
link1a.textContent = 'hello@penthouse.studio';
link1.appendChild(link1a);
const link2 = document.createElement('li');
const link2a = document.createElement('a');
link2a.href = 'https://www.instagram.com';
link2a.textContent = 'Instagram';
link2.appendChild(link2a);
const link3 = document.createElement('li');
const link3a = document.createElement('a');
link3a.href = 'https://vimeo.com/home';
link3a.textContent = 'Vimeo';
link3.appendChild(link3a);
links.appendChild(link1);
links.appendChild(link2);
links.appendChild(link3);


//Creo switchbutton q este dentro del div4
const toggleSwitch = document.createElement('label');
toggleSwitch.className = 'switch';

const toggleInput = document.createElement('input');
toggleInput.type = 'checkbox';
toggleInput.id = 'toggle';
toggleInput.checked = false;

const slider = document.createElement('span');
slider.className = 'slider round';

toggleSwitch.appendChild(toggleInput);
toggleSwitch.appendChild(slider);

nyHeader.appendChild(nyHeaderContent);
div3.appendChild(nyHeader);
div3.appendChild(links);
div4.appendChild(toggleSwitch);

containerdivsec.appendChild(div1sec1);
containerdivsec.appendChild(div2sec1);
menusec1.appendChild(containerdivsec);
menusec1.appendChild(div3);
menusec1.appendChild(div4);

sec1.appendChild(menusec1);

// Crear el segundo div de la sección
const logoSec1 = document.createElement('div');
logoSec1.className = 'logo-sec1';
const logoSec1Img = document.createElement('img');
logoSec1Img.src = 'img/pen-logo.png';
logoSec1Img.alt = '';
logoSec1.appendChild(logoSec1Img);

// Agregar la sección y el segundo div al doc
//sec1.appendChild(logoSec1);
roothome.appendChild(sec1);
roothome.appendChild(logoSec1);

//CREO MIS LINKS DE CADA SECTION

const LinksProject = [{name:'Visit full project', link: "https://www.behance.net/othila"},
{name:'Visit full project', link: "https://www.instagram.com/"},
{name:'Visit full project', link: "https://www.behance.net/"},
{name:'Visit full project', link: "https://www.behance.net/othila"},
{name:'Visit full project', link: "https://www.behance.net/"},
{name:'Visit full project', link: "https://www.behance.net/othila"},
{name:'Visit full project', link: "https://www.behance.net/"}]

const LinksWebsite = [{name:'Visit Website', link: "https://www.behance.net/othila"},
{name:'Visit Website', link: "https://www.instagram.com/"},
{name:'Visit Website', link: "https://www.behance.net/"},
{name:'Visit Website', link: "https://www.behance.net/othila"},
{name:'Visit Website', link: "https://www.behance.net/"},
{name:'Visit Website', link: "https://www.behance.net/othila"},
{name:'Visit Website', link: "https://www.instagram.com/"}]

// CREO LAS SECTIONS EN ROOTSECTIONS

const sectionTexts = [
    [
        ['Client', 'SleepFuel'],
        ['Year', '2023'],
        ['Scope', 'Brand identity, web design, packaging'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '],
    ],
    [
        ['Client', 'Molly Smiles'],
        ['Year', '2022'],
        ['Scope', 'Brand identity, web design'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    ],
    [
        ['Client', 'DILA Technologies'],
        ['Year', '2023'],
        ['Scope', 'Brand identity, web design'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    ],
    [
        ['Client', 'NOT YOUR / MONA'],
        ['Year', '2021'],
        ['Scope', 'Brand identity, packaging'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    ],
    [
        ['Client', 'Cozyla'],
        ['Year', '2023'],
        ['Scope', 'Brand identity, packaging'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    ],
    [
        ['Client', 'SwapWear'],
        ['Year', '2022'],
        ['Scope', 'Brand identity'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    ],
    [
        ['Client', 'Materia'],
        ['Year', '2021'],
        ['Scope', 'Brand identity'],
        ['Vegan handbags brand designed to stand out in the luxury space.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    ],
];

// Función para crear la sección
function createSection(sectionNumber, images, texts, sectionData, LinksProject, LinksWebsite) {
    const section = document.createElement('section');
    section.className = `sec${sectionNumber}`;

    // Crear el div de menú
    const menu = document.createElement('div');
    menu.className = 'menu';

    // Crear div1
    const div1 = document.createElement('div');
    div1.className = 'div1';
    const infoToggle = document.createElement('p');
    infoToggle.id = 'info-toggle';
    infoToggle.textContent = 'info';
    div1.appendChild(infoToggle);

    // Crear div2sec2
    const div2sec2 = document.createElement('div');
    div2sec2.className = 'div2sec2';
    const div2sec2Content = document.createElement('p');
    div2sec2Content.textContent = texts[0];
    div2sec2.appendChild(div2sec2Content);

    // Crear div3
    const div3 = document.createElement('div');
    div3.className = 'div3';

    // Crear brandsec2
    const brandsec2 = document.createElement('div');
    brandsec2.className = 'brandsec2';
    const brandsec2Content = document.createElement('p');
    brandsec2Content.textContent = texts[1];
    brandsec2.appendChild(brandsec2Content);

    // Crear divsec2
    const divsec2 = document.createElement('div');
    divsec2.className = 'divsec2';
    const divsec2Content = document.createElement('p');
    divsec2Content.textContent = texts[2];
    divsec2.appendChild(divsec2Content);

    // Agregar los elementos al menú
    div3.appendChild(brandsec2);
    div3.appendChild(divsec2);
    menu.appendChild(div1);
    menu.appendChild(div2sec2);
    menu.appendChild(div3);

    section.appendChild(menu);

    // Crear el div de despliegue
    const despliegue = document.createElement('div');
    despliegue.id = 'despliegue';
    despliegue.className = 'despliegue';

    // Crear el div del carrusel
    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    // Crear el contenedor del carrusel
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    // Crear las imágenes del carrusel
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = `Image ${i + 1}`;
        img.className = `img${i + 1}`;
        carouselContainer.appendChild(img);

        if (i === 0) {
            img.classList.add('img1');
        }
    }
    
    carousel.appendChild(carouselContainer);
    despliegue.appendChild(carousel);
    section.appendChild(carousel);

    const infoitems = document.createElement('div');
    infoitems.className = 'infoitems';
    infoitems.style.transform = 'translateX(-100%)'; // Inicialmente lo desplazo hacia la izq

    //links de infoitems 

    const linksDiv = document.createElement('div');
    linksDiv.className = 'div-links';

    const visitLink = document.createElement('li');
    const visitLinkA = document.createElement('a');
    visitLinkA.href = LinksProject[sectionNumber - 2].link;
    visitLinkA.textContent = LinksProject[sectionNumber - 2].name;
    visitLink.appendChild(visitLinkA);

    const websiteLink = document.createElement('li');
    const websiteLinkA = document.createElement('a');
    websiteLinkA.href = LinksWebsite[sectionNumber - 2].link;
    websiteLinkA.textContent = LinksWebsite[sectionNumber - 2].name;
    websiteLink.appendChild(websiteLinkA);

    const currentSectionTexts = sectionTexts[sectionNumber - 2];

    currentSectionTexts.forEach((sectionData, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = `info${index + 1}`;

        const clientDiv = document.createElement('div');
        clientDiv.className = 'client-container';
        const clientP = document.createElement('p');
        clientP.textContent = sectionData[0];
        clientDiv.appendChild(clientP);

        const yearDiv = document.createElement('div');
        yearDiv.className = 'year-container';
        const yearP = document.createElement('p');
        yearP.textContent = sectionData[1];
        yearDiv.appendChild(yearP);

        const scopeDiv = document.createElement('div');
        scopeDiv.className = 'scope-container';
        const scopeP = document.createElement('p');
        scopeP.textContent = sectionData[2];
        scopeDiv.appendChild(scopeP);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description-container';
        const descriptionP = document.createElement('p');
        descriptionP.textContent = sectionData[3];
        descriptionDiv.appendChild(descriptionP);

        const visitDiv = document.createElement('div');
        visitDiv.className = 'visit-container';
        const visitP = document.createElement('p');
        visitP.textContent = sectionData[4];
        visitDiv.appendChild(visitP);

        sectionDiv.appendChild(clientDiv);
        sectionDiv.appendChild(yearDiv);
        sectionDiv.appendChild(scopeDiv);
        sectionDiv.appendChild(descriptionDiv);
        sectionDiv.appendChild(visitDiv);

        infoitems.appendChild(sectionDiv);
        linksDiv.appendChild(visitLink);
        linksDiv.appendChild(websiteLink);
    
        // Agregar el div de enlaces al infoitems
        infoitems.appendChild(linksDiv);
    });

    despliegue.appendChild(infoitems);
    despliegue.appendChild(carousel);

    section.appendChild(despliegue);

    const isMobile2 = window.matchMedia("(max-width: 834px)").matches;
    const isMobile = window.matchMedia("(max-width: 430px)").matches;

    const leftRangeWidth = 200;

    
    section.addEventListener('mousemove', function (event) {
        // si el despliegue fue activado con el click puedo ver a infoitems
        if (despliegue.classList.contains('despliegue-activo')) {

            infoToggle.style.cursor = "pointer";
            const mouseX = event.clientX; // Posición X del mouse
        
            if (mouseX <= leftRangeWidth) {
                // Si el mouse está dentro del rango, muestro a "infoitems" y cambio el texto a "-close"
                infoitems.style.transform = 'translateX(0)';
                carousel.style.transform = 'translateX(350px)';
                carousel.style.transform = isMobile2 ? 'flex' : 'translateX(300px)';
                carousel.style.transform = isMobile ? 'none' : 'translateX(350px)';
                infoToggle.textContent = 'Close';
            } else {
                // Si el mouse está fuera del rango, oculto "infoitems" y cambio el texto a "+info"
                infoitems.style.transform = 'translateX(-100%)';
                carousel.style.transform = 'translateX(0)';
                carousel.style.transform = isMobile2 ? 'flex' : 'translateX(0)';
                carousel.style.transform = isMobile ? 'none' : 'translateX(0)';
                infoToggle.textContent = 'Info';
            }
        }
    });
    

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const scrollThreshold = 100; 
    
        if (scrollY > scrollThreshold) {
            rootheader.classList.add('fixed-header');
        } else {
            rootheader.classList.remove('fixed-header');
        }
    });

    div2sec2.style.cursor = "pointer";

    div2sec2Content.addEventListener('click', function() {
        despliegue.classList.toggle('despliegue-activo');
        div2sec2.style.cursor = "pointer";
    });

    return section;
}

const sectionData = [
    {
        images: ['img/sleep-pic.png', 'img/sleep-pic2.png', 'img/sleep-pic3.png'],
        div2sec2Text: 'SleepFuel',
        brandsec2Text: 'Brand identity, web design, packaging',
        divsec2Text: '2023',
    },
    {
        images: ['img/molly-pic.png', 'img/molly-pic2.png', 'img/molly-pic3.png'],
        div2sec2Text: 'Molly Smiles',
        brandsec2Text: 'Brand identity, web design',
        divsec2Text: '2023',
    },
    {
        images: ['img/dil-pic.png', 'img/dil-pic2.png', 'img/dil-pic3.png'],
        div2sec2Text: 'DILA Technologies',
        brandsec2Text: 'Brand identity, web design',
        divsec2Text: '2023',
    },
    {
        images: ['img/mona-img1.jpg', 'img/mona-img2.jpg', 'img/mona-img3.jpg'],
        div2sec2Text: 'NOT YOUR / MONA',
        brandsec2Text: 'Brand identity,  packaging',
        divsec2Text: '2021',
    },
    {
        images: ['img/coz-pic.png', 'img/coz-pic1.png', 'img/coz-pic2.png'],
        div2sec2Text: 'Cozyla',
        brandsec2Text: 'Brand identity,  packaging',
        divsec2Text: '2023',
    },
    {
        images: ['img/street-pic.png', 'img/street-pic2.png', 'img/street-pic3.png'],
        div2sec2Text: 'SwapWear',
        brandsec2Text: 'Brand identity',
        divsec2Text: '2022',
    },
    {
        images: ['img/mat-pic.png', 'img/mat-pic2.png', 'img/mat-pic3.png'],
        div2sec2Text: 'Materia',
        brandsec2Text: 'Brand identity',
        divsec2Text: '2021',
    },
];

for (let i = 2; i <= 8; i++) {
    const section = createSection(
        i,
        sectionData[i - 2].images,
        [sectionData[i - 2].div2sec2Text, sectionData[i - 2].brandsec2Text, sectionData[i - 2].divsec2Text],
        sectionData[i - 2],
        LinksProject,
        LinksWebsite
    );
    rootsections.appendChild(section);
}

// ANIMAR CARRUSELES

function animateCarouselOnClick(carousel) {
    const container = carousel;
    const images = container.querySelectorAll('img');
    let currentIndex = 0;

    //cambiar al siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const imageWidth = images[0].clientWidth;
        const offset = -currentIndex * imageWidth;
        container.style.transform = `translateX(${offset}px)`;
    }

    // cambiar los slides al hacer clic
    images.forEach((image) => {
        image.addEventListener('click', nextSlide);
    });

    // Inicia el carrusel
    updateCarousel();
}

const carousels = document.querySelectorAll('.carousel-container');
carousels.forEach(animateCarouselOnClick);

//FOOTER NUEVO

const footer = document.createElement('footer');

// f1
const f1 = document.createElement('div');
f1.className = 'f1';

const f1Div1 = document.createElement('div');
const f1Div1P = document.createElement('p');
f1Div1P.textContent = 'Penthouse® is a creative company of nine working remotely from New York, dedicated to designing holistic brand identities founded on storytelling, for ambitious start-ups and category-defining products.';
f1Div1.className = 'textfooter1';
f1Div1.appendChild(f1Div1P);

const f1Div2 = document.createElement('div');
const f1Div2P = document.createElement('p');
f1Div2P.textContent = 'Services include brand strategy, graphic design, art direction, creative direction, packaging, web development, 3D and animation.';
f1Div2.className = 'textfooter2';
f1Div2.appendChild(f1Div2P);

f1.appendChild(f1Div1);
f1.appendChild(f1Div2);

// f2
const f2 = document.createElement('div');
f2.className = 'f2';

const f2Div1 = document.createElement('div');
const f2Div1Li = document.createElement('li');
const f2Div1LiA = document.createElement('a');
f2Div1LiA.href = '167 Canal St. New York, NY';
f2Div1LiA.textContent ='167 Canal St. New York, NY';
f2Div1Li.appendChild(f2Div1LiA);
f2Div1.appendChild(f2Div1Li);

const f2Div2 = document.createElement('div');
const f2Div2Li = document.createElement('li');
const f2Div2LiA = document.createElement('a');
f2Div2LiA.href = 'hello@penthouse.studio';
f2Div2Li.textContent = 'hello@penthouse.studio';
f2Div2Li.appendChild(f2Div2LiA);
f2Div2.appendChild(f2Div2Li);

const f2Div3 = document.createElement('div');
const f2Div3Li1 = document.createElement('li');
const f2Div3Li1A = document.createElement('a');
f2Div3Li1A.textContent = "Instagram";
f2Div3Li1A.href = 'https://www.instagram.com/othila/';
f2Div3Li1.appendChild(f2Div3Li1A);

const f2Div3Li2 = document.createElement('li');
const f2Div3Li2A = document.createElement('a');
f2Div3Li2A.href = 'https://www.behance.net/othila';
f2Div3Li2A.textContent = 'Behance';
f2Div3Li2.appendChild(f2Div3Li2A);

f2Div3.appendChild(f2Div3Li1);
f2Div3.appendChild(f2Div3Li2);

f2.appendChild(f2Div1);
f2.appendChild(f2Div2);
f2.appendChild(f2Div3);

// f3
const f3 = document.createElement('div');
f3.className = 'f3';

const f3Div1 = document.createElement('div');
const f3Div1P = document.createElement('p');
f3Div1P.textContent = '© All rights Reserved by Penthouse Studio';
f3Div1.appendChild(f3Div1P);

const f3Div2 = document.createElement('div');
const f3Div2A = document.createElement('a');
f3Div2A.href = '#';
f3Div2A.textContent = 'Go back to top';
f3Div2.appendChild(f3Div2A);

f3.appendChild(f3Div1);
f3.appendChild(f3Div2);

// imgfooterlogo
const imgfooterlogo = document.createElement('div');
imgfooterlogo.className = 'imgfooter';

const img = document.createElement('img');
img.src = 'img/pen-logo.png';
img.alt = '';

imgfooterlogo.appendChild(img);

// Agregar elementos al footer
footer.appendChild(f1);
rootfooter.appendChild(footer);
footer.appendChild(f2);
rootfooter.appendChild(f3);
rootfooter.appendChild(imgfooterlogo);

//SCROLL Q DESATAPA

document.body.onscroll = function () {
    handleScroll();
};

function handleScroll() {
    const scrollY = window.scrollY;
    let initialHeight, reducedHeight, scrollThreshold;

    
    const smallScreen = window.matchMedia("(max-width: 430px)").matches;
    const mediumScreen = window.matchMedia("(max-width: 834px)").matches;

    
    if (smallScreen) {
        initialHeight = 60;
        reducedHeight = 5;
        scrollThreshold = 10;
    } else if (mediumScreen) {
        initialHeight = 90;
        reducedHeight = 5;
        scrollThreshold = 10;
    } else {
        initialHeight = 69;
        reducedHeight = 10;
        scrollThreshold = 9;
    }

    if (scrollY > scrollThreshold) {
        const newHeight = initialHeight - (scrollY - scrollThreshold);
        setElementHeight(roothome, newHeight < reducedHeight ? reducedHeight : newHeight);

        // Hago aparecer rootheader y rootsections
        setElementOpacity(rootheader, 1);
        setElementOpacity(rootsections, 1);
    } else {
        // Restauro la altura inicial de roothome
        setElementHeight(roothome, initialHeight);

        // Ocultar rootheader y rootsections
        setElementOpacity(rootheader, 0);
        setElementOpacity(rootsections, 0);
    }
}

function setElementHeight(element, height) {
    element.style.height = `${height}vh`;
}

function setElementOpacity(element, opacity) {
    element.style.opacity = opacity;
}


//SWITCH BUTTON 

const body = document.body;


function toggleDarkMode() {
    // Check if the toggle switch is in the ON position
    const isDarkMode = toggleInput.checked || toggleInputOnOff.checked;

    function applyDarkModeStyles() {
        body.classList.add('dark-mode');
        logoSec1Img.src = 'img/penimgnegro.png';
        sec1.style.backgroundColor = 'white';
        rootsections.style.backgroundColor = 'white';
        header.style.backgroundColor = 'white';
        img.src = 'img/penimgnegro.png';
        imgDiv1.src = 'img/penimgnegro.png';
        menu.style.backgroundColor = 'white';
        infoitems.style.backgroundColor = 'white';
    }
    
    // Function to remove dark mode styles
    function removeDarkModeStyles() {
        body.classList.remove('dark-mode');
        logoSec1Img.src = 'img/pen-logo.png';
        sec1.style.backgroundColor = 'black';
        rootsections.style.backgroundColor = 'black';
        header.style.backgroundColor = 'black';
        img.src = 'img/pen-logo.png';
        imgDiv1.src = 'img/pen-logo.png';
        menu.style.backgroundColor = 'black';
        infoitems.style.backgroundColor = 'black';
    }

    // Apply or remove dark mode styles based on the current state
    if (isDarkMode) {
        applyDarkModeStyles();
    } else {
        removeDarkModeStyles();
    }
}

// Add event listeners to toggle switches
toggleInput.addEventListener('change', toggleDarkMode);
toggleInputOnOff.addEventListener('change', toggleDarkMode);

// Initialize dark mode based on the initial state of the switches
toggleDarkMode();
