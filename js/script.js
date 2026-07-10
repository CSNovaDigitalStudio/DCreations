// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
    }
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Gallery Image Preview
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `
            <div class="popup-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="">
            </div>
        `;
        document.body.appendChild(popup);

        popup.querySelector(".close").onclick = () => popup.remove();

        popup.onclick = e => {
            if (e.target === popup) popup.remove();
        };
    });
});

// Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section,.card,.service-grid div,.gallery img").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});