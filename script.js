const itemsData = {
    "Bagr": {
        cena: "650 Kč/h",
        doba: "Dohodou",
        doprava: "Lanškroun 500 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "S obsluhou"
    },
    "Dumper": {
        cena: "2 000 Kč",
        doba: "Dohodou",
        doprava: "Lanškroun 400 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "Půjčení/ Obsluha dle domluvy"
    },
    "Vibrační pěch": {
        cena: "550 Kč",
        doba: "Dohodou",
        doprava: "Lanškroun 200 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "Obsluha dle domluvy"
    },
    "Vibrační deska": {
        cena: "450 Kč",
        doba: "Dohodou",
        doprava: "Lanškroun 200 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "Půjčení / Obsluha dle domluvy",
        příslušenství: "gumová podložka 50kč/den"
    },
    "Bourací kladivo": {
        cena: "450 Kč/h",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Vrtací kladivo Makita SDS": {
        cena: "350 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Vrtací kladivo Makita SDS Plus": {
        cena: "300 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Rozbrušovačka velká DEWALT": {
        cena: "250 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Rozbrušovačka malá DEWALT": {
        cena: "150 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Míchačka velká": {
        cena: "350 Kč",
        doba: "Dohodou",
        doprava: "Lanškroun 200 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "Půjčení"
    },
    "Míchačka malá": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "Lanškroun 200 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "Půjčení"
    },
    "Lešení HAKI": {
        cena: "150 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Stavební kozy": {
        cena: "50 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Hliníkový žebřík": {
        cena: "250 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Dřevěné štafle": {
        cena: "50 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Rudl 350kg": {
        cena: "100 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Teleskopický křovinořez": {
        cena: "500 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Kompresor": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Topení kostka 12KW": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Křovinořez": {
        cena: "400 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Detektor kovu": {
        cena: "300 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Střešní box Škoda Octavia": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Elektrické míchadlo": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "LED světlo": {
        cena: "150 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Prodlužovací buben": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Velký vlek": {
        cena: "400 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Malý vlek": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Velké nájezdy": {
        cena: "300 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Malé nájezdy": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Sekačka na trávu": {
        cena: "500 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení",
        obsluha: "Dle domluvy"
    },
    "Motorová pila": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Velký hořák": {
        cena: "150 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Malý hořák": {
        cena: "100 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Gril na kýtu": {
        cena: "400 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Gumová podložka": {
        cena: "100 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Řezačka na dlažbu": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Svářečka na vodu": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Ruční vrták na sloupky": {
        cena: "100 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    }
};

const productSpecs = {
    "velký-vlek": {
        title: "Velký vlek",
        specs: [
            { label: "Délka vnitřní ložné plochy", value: "300 cm" },
            { label: "Šířka vnitřní ložné plochy", value: "150 cm" },
            { label: "Výška bočnic", value: "35 cm" },
            { label: "Maximální rychlost", value: "130 km/h (homologovaná)" },
            { label: "Maximální užitná hmotnost", value: "1200 kg" },
            { label: "Německá náprava KNOTT", value: "1200 kg" },
            { label: "Vnější délka přívěsu", value: "419 cm" },
            { label: "Vnější šířka přívěsu", value: "192 cm" }
        ]
    },
    "vibrací-pěch": {
        title: "Vibrační pěch",
        specs: [
            { label: "Výška zdvihu", value: "40 - 65 mm" },
            { label: "Objem nádrže", value: "2,7 l" },
            { label: "Počet úderů", value: "600 - 700 / min" },
            { label: "Hmotnost", value: "80 kg" },
            { label: "Rozměry balení", value: "460 x 760 x 1160 mm" },
            { label: "Palivo", value: "Benzín" },
            { label: "Výkon motoru", value: "4100 W" },
            { label: "Přepravní hmotnost", value: "89 kg" },
            { label: "Hladina akustického výkonu", value: "108 dB (A)" },
            { label: "Max. rychlost posuvu", value: "10 - 13 m/min" },
            { label: "Typ motoru", value: "1-válec, čtyřtaktní OHV motor" },
            { label: "Délka desky", value: "360 mm" },
            { label: "Šířka desky", value: "285 mm" },
            { label: "Vibrační údery", value: "600 - 700 vpm" },
            { label: "Hutnící síla", value: "10 kN" }
        ]
    },
    "vibrací-deska": {
        title: "Vibrační deska",
        specs: [
            { label: "Hmotnost", value: "102 kg" },
            { label: "Rozměr desky", value: "550 x 440 mm" },
            { label: "Výkon", value: "4,8 kW" },
            { label: "Odstředivá síla", value: "25 kN" },
            { label: "Hloubka stlačení", value: "35 cm" },
            { label: "Rychlost pojezdu", value: "25 m/min" },
            { label: "Typ motoru", value: "benzinový, 4-takt Loncin, OHV" }
        ]
    },
    "vrtací-kladivo": {
        title: "Vrtací kladivo Makita",
        specs: [
            { label: "Upínání nástrojů", value: "SDS-max" },
            { label: "Příkon", value: "1.050 W" },
            { label: "Počet příklepu", value: "2.500 min-1" },
            { label: "Hmotnost", value: "6,6 kg" },
            { label: "Energie příklepu", value: "6,1 J" },
            { label: "Vrtací výkon (vrták průměr)", value: "40 mm" },
            { label: "Vrtací výkon (korunka průměr)", value: "105 mm" },
            { label: "Otáčky naprázdno", value: "680 min-1" }
        ]
    },
    "hliníkový-žebřík": {
        title: "Hliníkový žebřík",
        specs: [
            { label: "Délka při zasunutí", value: "3,15 m" },
            { label: "Délka při vysunutí", value: "7,11 m" },
            { label: "Výška stání", value: "6 m" },
            { label: "Povolené zatížení", value: "150 kg" },
            { label: "Typ", value: "Univerzální třídílný žebřík" },
            { label: "Norma", value: "EN131" }
        ]
    },
    "rudl": {
        title: "Rudl 350kg",
        specs: [
            { label: "Rozměr", value: "111,7*65 cm" },
            { label: "Nosnost", value: "350 kg" },
            { label: "Hmotnost", value: "17 kg" },
            { label: "Průměr kola", value: "300 mm" },
            { label: "Rozměr lopaty", value: "50*29 cm" },
            { label: "Síla lopaty", value: "4 mm" },
            { label: "Rozměr trubky", value: "27*2,5 mm" },
            { label: "Kovové disky", value: "ano" },
            { label: "Jehlové ložisko", value: "ano" }
        ]
    },
    "gril-na-kytu": {
        title: "Gril na kýtu",
        specs: [
            { label: "Maximální hmotnost masa", value: "30 kg" },
            { label: "Vhodné pro", value: "kýty, malá selata" },
            { label: "Typ grilu", value: "Rožň na otáčení" },
            { label: "Pohon", value: "Elektrický motor" },
            { label: "Regulace teploty", value: "Ano" },
            { label: "Materiál", value: "Nerezová ocel" }
        ]
    },
    "míchačka-velká": {
        title: "Míchačka velká",
        specs: [
            { label: "Objem", value: "4-5 koleček" },
            { label: "Připojení", value: "Třífázové" }
        ]
    },
    "míchačka-malá": {
        title: "Míchačka malá",
        specs: [
            { label: "Objem", value: "1-2 kolečka" },
            { label: "Připojení", value: "220V" }
        ]
    },
    "lešení-haki": {
        title: "Lešení HAKI",
        specs: [
            { label: "Množství", value: "4ks + podlážky" }
        ]
    },
    "stavební-kozy": {
        title: "Stavební kozy",
        specs: [
            { label: "Množství", value: "2ks" }
        ]
    },
    "malé-nájezdy": {
        title: "Malé nájezdy",
        specs: [
            { label: "Nosnost", value: "450 kg / pár" },
            { label: "Rozměry", value: "183 x 22,5 x 5 cm" }
        ]
    },
    "ruční-vrták": {
        title: "Ruční vrták na sloupky",
        specs: [
            { label: "Průměr", value: "20cm" }
        ]
    }
};

// Optimalizace - přednačtení proměnných
let modal, modalTitle, modalBody, productModal, productModalTitle, productModalBody;
let closeButtons, infoButtons, productInfoButtons;
let lastScrollTop = 0;
let isClosing = false;

// Uložení pozice scrollu před otevřením modálu
let scrollPosition = 0;

// Funkce pro zabránění scrollování pozadí
function preventBackgroundScroll() {
    // Uložíme aktuální pozici scrollu
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Přidáme třídu která zakáže scrollování
    document.body.classList.add('no-scroll');
    document.body.style.top = `-${scrollPosition}px`;
}

// Funkce pro obnovení scrollování
function enableBackgroundScroll() {
    // Odstraníme třídu která zakazovala scrollování
    document.body.classList.remove('no-scroll');
    document.body.style.top = '';
    
    // Obnovíme pozici scrollu
    window.scrollTo(0, scrollPosition);
}

// Inicializace po načtení DOM
document.addEventListener('DOMContentLoaded', function() {
    // Přednačtení DOM elementů
    modal = document.getElementById('infoModal');
    modalTitle = document.getElementById('modalTitle');
    modalBody = document.getElementById('modalBody');
    
    productModal = document.getElementById('productInfoModal');
    productModalTitle = document.getElementById('productModalTitle');
    productModalBody = document.getElementById('productModalBody');
    
    closeButtons = document.querySelectorAll('.close-modal');
    infoButtons = document.querySelectorAll('.info-btn');
    productInfoButtons = document.querySelectorAll('.product-info-btn');
    
    // Nastavení event listenerů
    setupEventListeners();
    
    // Inicializace scroll efektu
    handleScroll();
});

// Nastavení všech event listenerů
function setupEventListeners() {
    // Zavření modálu při kliknutí na backdrop
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-backdrop')) {
                closeModal(modal);
            }
        });
    }
    
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-backdrop')) {
                closeModal(productModal);
            }
        });
    }
    
    // Zavření modálu pomocí tlačítka
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalToClose = this.closest('.modal');
            closeModal(modalToClose);
        });
    });
    
    // Tlačítka pro informace o produktech
    infoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            showProductInfo(productName);
        });
    });
    
    // Tlačítka pro technické specifikace
    productInfoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            showProductSpecs(productId);
        });
    });
    
    // Resize event s debouncingem
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Scroll event
    window.addEventListener('scroll', throttle(handleScroll, 100));
}

// Funkce pro zobrazení informací o produktu
function showProductInfo(productName) {
    if (!modal || !modalTitle || !modalBody || !itemsData[productName]) return;
    
    const product = itemsData[productName];
    
    modalTitle.textContent = productName;
    modalBody.innerHTML = '';
    
    // Vytvoření informací o produktu
    const infoContainer = document.createElement('div');
    infoContainer.className = 'modal-inner-content'; // ZMĚNA: modal-inner-content místo modal-body-container
    
    // Cena
    const priceItem = document.createElement('div');
    priceItem.className = 'info-item';
    priceItem.innerHTML = `<span class="info-label">Cena:</span> <span class="info-value">${product.cena}</span>`;
    infoContainer.appendChild(priceItem);
    
    // Doba
    const timeItem = document.createElement('div');
    timeItem.className = 'info-item';
    timeItem.innerHTML = `<span class="info-label">Doba:</span> <span class="info-value">${product.doba}</span>`;
    infoContainer.appendChild(timeItem);
    
    // Doprava
    const deliveryItem = document.createElement('div');
    deliveryItem.className = 'info-item';
    deliveryItem.innerHTML = `<span class="info-label">Doprava:</span> <span class="info-value">${product.doprava}</span>`;
    infoContainer.appendChild(deliveryItem);
    
    // Typ
    const typeItem = document.createElement('div');
    typeItem.className = 'info-item';
    typeItem.innerHTML = `<span class="info-label">Typ:</span> <span class="info-value">${product.typ}</span>`;
    infoContainer.appendChild(typeItem);
    
    // Příslušenství (pokud existuje)
    if (product.příslušenství) {
        const accessoryItem = document.createElement('div');
        accessoryItem.className = 'info-item';
        accessoryItem.innerHTML = `<span class="info-label">Příslušenství:</span> <span class="info-value">${product.příslušenství}</span>`;
        infoContainer.appendChild(accessoryItem);
    }
    
    // Obsluha (pokud existuje)
    if (product.obsluha) {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'info-item';
        serviceItem.innerHTML = `<span class="info-label">Obsluha:</span> <span class="info-value">${product.obsluha}</span>`;
        infoContainer.appendChild(serviceItem);
    }
    
    modalBody.appendChild(infoContainer);
    openModal(modal);
}

// Funkce pro zobrazení technických specifikací
function showProductSpecs(productId) {
    if (!productModal || !productModalTitle || !productModalBody || !productSpecs[productId]) return;
    
    const product = productSpecs[productId];
    
    productModalTitle.textContent = product.title;
    productModalBody.innerHTML = '';
    
    // Přidáme speciální třídu pro technické specifikace
    productModal.classList.add('tech-specs');
    
    const infoContainer = document.createElement('div');
    infoContainer.className = 'modal-inner-content'; // ZMĚNA: modal-inner-content místo modal-body-container
    
    // Vytvoření specifikací - vždy rozdělíme label a value na samostatné řádky
    product.specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'info-item';
        specItem.innerHTML = `
            <div class="info-label">${spec.label}:</div>
            <div class="info-value">${spec.value}</div>
        `;
        infoContainer.appendChild(specItem);
    });
    
    productModalBody.appendChild(infoContainer);
    openModal(productModal);
}

// Funkce pro otevření modálu - SYNCHRONIZOVANÁ S BLUR EFEKTEM
function openModal(modalElement) {
    if (!modalElement || isClosing) return;

    preventBackgroundScroll();
    modalElement.style.display = 'flex';
    
    // Krátké zpoždění pro spuštění animace
    setTimeout(() => {
        modalElement.classList.add('modal-open');
    }, 10);

    const firstBtn = modalElement.querySelector('.close-modal');
    if (firstBtn) firstBtn.focus();
}

// Funkce pro zavření modálu - SYNCHRONIZOVANÁ S BLUR EFEKTEM
function closeModal(modalElement) {
    if (!modalElement || isClosing) return;

    isClosing = true;
    modalElement.classList.remove('modal-open');
    modalElement.classList.add('closing');

    // Odstraníme speciální třídy
    modalElement.classList.remove('tech-specs');

    setTimeout(() => {
        modalElement.style.display = 'none';
        modalElement.classList.remove('closing');
        enableBackgroundScroll();
        isClosing = false;
    }, 300);
}

// Funkce pro ovládání scroll efektu navigace
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Skrytí/zobrazení navigace při scrollování
    const categoryNav = document.querySelector('.category-nav');
    if (categoryNav) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            categoryNav.classList.add('hidden');
        } else {
            categoryNav.classList.remove('hidden');
        }
    }
    
    lastScrollTop = scrollTop;
}

// Funkce pro zpracování změny velikosti okna
function handleResize() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.category-nav ul');
    
    if (window.innerWidth > 768) {
        // Obnovení normálního zobrazení na větších obrazovkách
        if (navMenu) {
            navMenu.classList.remove('show');
            navMenu.style.display = '';
        }
        
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        
        document.body.style.overflow = '';
    }
}

// Utility funkce - throttling pro lepší výkon
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Utility funkce - debouncing pro lepší výkon
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}

// Zavření modálu pomocí klávesy Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modal && modal.style.display === 'flex') {
            closeModal(modal);
        }
        if (productModal && productModal.style.display === 'flex') {
            closeModal(productModal);
        }
    }
});

// Hamburger menu pro mobilní zařízení
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.category-nav ul');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isOpening = !hamburger.classList.contains('active');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
            
            if (isOpening) {
                // Otevírání - zakaž scrollování
                document.body.style.overflow = 'hidden';
            } else {
                // Zavírání - povol scrollování po dokončení animace
                setTimeout(() => {
                    document.body.style.overflow = '';
                }, 300);
            }
        });
        
        // Zavření menu při kliknutí na odkaz
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('show');
                document.body.style.overflow = '';
            });
        });
    }
});