const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 640) mainnav.classList.remove('responsive')};


const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute('data-src')
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions ={};

const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
    enteries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.terget);
            imgObserver.unobserve(entry.target);
        }
    })

}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});

