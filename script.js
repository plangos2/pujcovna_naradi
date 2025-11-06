const itemsData = {
    "Minibagr": {
        cena: "650 Kč/h",
        doba: "Dohodou",
        doprava: "Lanškroun 500 Kč - mimo Lanškroun 15 Kč/1km do 30 km",
        typ: "S obsluhou",
        příslušenství: "Radlice 20 / 40 / 60<br>Radlice 80 / svahová<br>Radlice 80 / hydraulická svahová"
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
    "Odolné nájezdy": {
        cena: "300 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Vrtací kladivo Makita HR4003C SDS-max 1100W": {
        cena: "450 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Vrtací kladivo Makita HR4002 SDS-max 1050W": {
        cena: "400 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Kombinované kladivo Makita HR2470 SDS-Plus 780W": {
        cena: "300 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Bruska úhlová DeWALT 2600 W": {
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
    "Teleskopické nůžky na živý plot": {
    cena: "200 Kč",
    doba: "Dohodou",
    doprava: "15 Kč/1km",
    typ: "Půjčení"
    },
    "Detektor kovu": {
        cena: "350 Kč",
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
        typ: "Půjčení",
        příslušenství: "Plachta na vlek"
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
    },
    "Odvlhčovač": {
        cena: "400 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Naftové topidlo": {
        cena: "300 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Svářečka Weldy 130": {
    cena: "Cena nepřidána",
    doba: "Dohodou",
    doprava: "15 Kč/1km",
    typ: "Půjčení"
    },
    "Elektrický plotostřih": {
        cena: "150 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Motorový křovinořez": {
        cena: "400 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Teplovzdušný ventilátor": {
        cena: "200 Kč",
        doba: "Dohodou",
        doprava: "15 Kč/1km",
        typ: "Půjčení"
    },
    "Elektrický vysavač/foukač": {
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
    "minibagr": {
        title: "Minibagr",
        specs: [
            { label: "Provozní hmotnost", value: "1000 kg" },
            { label: "Maximální hloubka kopání", value: "2 m" }
        ]
    },
        "bruska-uhlova-dewalt": {
        title: "Bruska úhlová DeWALT 2600 W",
        specs: [
            { label: "Příkon", value: "2600 W" },
            { label: "Napětí", value: "230 V" },
            { label: "Otáčky", value: "6500 otáček/min" },
            { label: "Průměr kotouče", value: "230 mm" },
            { label: "Upínací systém", value: "M14" },
            { label: "Akustický tlak", value: "96 dB(A)" },
            { label: "Akustický výkon", value: "107 dB(A)" },
            { label: "Vibrace", value: "7/2,5 m/s²" },
            { label: "Nepřesnost K", value: "3 dB(A)" },
            { label: "Hmotnost", value: "5,9 kg" }
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
    "svarecka-weldy-130": {
        title: "Svářečka Weldy 130",
        specs: [
            { label: "Typ", value: "transformátorová svářečka" },
            { label: "Norma", value: "EN 50 060" },
            { label: "Průměr elektrod", value: "1,6 – 2,5 mm" },
            { label: "Rozsah svářecího proudu", value: "35 – 100 A" },
            { label: "Jmenovitý proud", value: "46 A" },
            { label: "Napětí naprázdno", value: "48 V" },
            { label: "Délka cyklu", value: "10 min (při 100 %)" },
            { label: "Max. zatížení pojistky", value: "22 A" }
        ]
    },
    "dumper": {
         title: "Dumper",
         specs: [
            { label: "Rozměry celkové", value: "1600 × 715 × 1030 mm" },
            { label: "Rozměry korby", value: "950 × 680 × 460 mm" },
            { label: "Hmotnost", value: "350 kg" },
            { label: "Objem korby", value: "270 l" },
            { label: "Nakládací lžíce", value: "44 l" },
            { label: "Max. výška vykládky", value: "1400 mm" },
            { label: "Rychlost jízdy", value: "až 3,6 km/h" },
            { label: "Svahová dostupnost", value: "12°" },
            { label: "Převodové ústrojí", value: "6+2 rychlostní (3+1 želva a 3+1 zajíc)" },
            { label: "Sklápění / Zvedání korby", value: "hydraulické" },
            { label: "Šířka pásů", value: "180 mm" },
            { label: "Objem palivové nádrže", value: "3 l" },
            { label: "Objem olejové nádrže", value: "5,3 l" }
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
    "kombinovane-kladivo-makita": {
        title: "Kombinované kladivo Makita HR2470 SDS-Plus 780W",
        specs: [
            { label: "Upínání nástrojů", value: "SDS-Plus" },
            { label: "Energie úderu", value: "2,4 J" },
            { label: "Šířka", value: "84 mm" },
            { label: "Délka", value: "370 mm" },
            { label: "Otáčky na prázdno", value: "0-1100 /min" },
            { label: "Počet příklepů", value: "0 - 4500 /min" },
            { label: "Hmotnost", value: "2,9 kg" },
            { label: "Max. průměr vrtání do oceli", value: "13 mm" },
            { label: "Max. průměr vrtání do zdiva", value: "24 mm" },
            { label: "Max. průměr vrtání do dřeva", value: "32 mm" },
            { label: "Výška", value: "214 mm" },
            { label: "Příkon", value: "780 W" }
        ]
    },
    "vrtací-kladivo-makita-hr4003c": {
        title: "Vrtací kladivo Makita HR4003C SDS-max 1100W",
        specs: [
            { label: "Upínání nástrojů", value: "SDS-max" },
            { label: "Příkon", value: "1.100 W" },
            { label: "Počet příklepu", value: "1.450 - 2.900 min-1" },
            { label: "Hmotnost", value: "6,2 kg" },
            { label: "Energie příklepu", value: "8,3 J" },
            { label: "Vrtací výkon (vrták průměr)", value: "40 mm" },
            { label: "Vrtací výkon (korunka průměr)", value: "105 mm" },
            { label: "Otáčky naprázdno", value: "250 - 500 min-1" }
        ]
    },
    "vrtací-kladivo-makita-hr4002": {
        title: "Vrtací kladivo Makita HR4002 SDS-max 1050W",
        specs: [
            { label: "Upínání nástrojů", value: "SDS-max" },
            { label: "Příkon", value: "1.050 W" },
            { label: "Počet příklepu", value: "2.500 min-1" },
            { label: "Počet úderů naprázdno", value: "2.500 min-1" },
            { label: "Hmotnost", value: "6,6 kg" },
            { label: "Energie příklepu", value: "6,1 J" },
            { label: "Vrtací výkon (vrták průměr)", value: "40 mm" },
            { label: "Vrtací výkon (vrták O)", value: "40 mm" },
            { label: "Vrtací výkon (korunka průměr)", value: "105 mm" },
            { label: "Vrtací výkon (korunka O)", value: "105 mm" },
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
    },
    "odvlhcovac": {
        title: "Odvlhčovač",
        specs: [
            { label: "Rozměry", value: "55.5 × 42 × 85 cm" },
            { label: "Akustický výkon", value: "55 dB" },
            { label: "Automatické vypnutí při plné nádrži", value: "Ano" },
            { label: "Hmotnost", value: "28.59 kg" },
            { label: "Jmenovitý výkon", value: "1000 W" },
            { label: "Maximální velikost místnosti", value: "187.5 cm³" },
            { label: "Odvádění vody", value: "6 L nádrž" },
            { label: "Odvlhčovací výkon", value: "60 l/den" }
        ]
    },
    "naftove-topidlo": {
        title: "Naftové topidlo",
        specs: [
            { label: "Výkon", value: "45 kW" },
            { label: "Palivo", value: "nafta" },
            { label: "LCD termostat", value: "Ano" },
            { label: "Automatické řízení", value: "drží teplotu, šetří palivo" },
            { label: "Bezpečnost", value: "ochrana proti přehřátí, CO detekce" },
            { label: "Palivová nádrž", value: "38 l" },
            { label: "Spotřeba paliva", value: "2,1 kg/h" },
            { label: "Průtok vzduchu", value: "720 m³/h" }
        ]
    },
    "bourací-kladivo": {
        title: "Bourací kladivo Scheppach",
        specs: [
            { label: "Výkon", value: "1500 W" },
            { label: "Energie úderu", value: "25 J" },
            { label: "Frekvence úderů", value: "1100 úderů/min" },
            { label: "Hmotnost", value: "11 kg" },
            { label: "Typ", value: "Elektrické bourací kladivo" }
        ]
    },
    "teplovzdusny-ventilator": {
        title: "Teplovzdušný ventilátor",
        specs: [
            { label: "Rozměr", value: "30 x 35 x 49" },
            { label: "Napětí", value: "400 V" },
            { label: "Výkon", value: "9 kW" },
            { label: "Max. proud vzduchu", value: "1198 m³/h" },
            { label: "Prostor výtápění", value: "180 m³" },
            { label: "Hmotnost", value: "10 kg" }
        ]
    },
    "malý-vlek": {
        title: "Malý vlek",
        specs: [
            { label: "Rozměr", value: "200 cm x 110 cm" },
            { label: "Maximální užitná hmotnost", value: "500 kg" }
        ]
    },
    "elektricky-plotostrih": {
        title: "Elektrický plotostřih",
        specs: [
            { label: "Maximální průměr střihu", value: "24 mm" },
            { label: "Motor", value: "Elektrický 230 V/50 Hz" },
            { label: "Typ pohonu", value: "Elektrický motor" },
            { label: "Příkon", value: "750 W" },
            { label: "Hmotnost", value: "5 kg" },
            { label: "Délka lišty", value: "51 cm" },
            { label: "Teleskopická rukojeť", value: "Ano" },
            { label: "Délka teleskopické tyče", value: "2,35 - 2,80 m" }
        ]
    },
    "odolne-najezy": {
        title: "Odolné nájezdy",
        specs: [
            { label: "Hmotnost jedné rampy", value: "20 kg" },
            { label: "Minimální šířka kola/pásu", value: "200 mm" },
            { label: "Nosnost (rozvor 1000 mm)", value: "2 330 kg / pár" },
            { label: "Nosnost (rozvor 1250 mm)", value: "2 800 kg / pár" },
            { label: "Nosnost (rozvor 1500 mm)", value: "3 500 kg / pár" },
            { label: "Nosnost jedné rampy (1250 mm)", value: "1 400 kg" },
            { label: "Materiál", value: "Vysoce odolná ocel" },
            { label: "Povrchová úprava", value: "Protiskluzová" }
        ]
    },
    "detektor-kovu": {
        title: "Detektor kovu Vanquish",
        specs: [
            { label: "Režimy", value: "Mince, Relikvie, Šperky, Uživatelský" },
            { label: "Frekvence", value: "Multi-IQ (vícepásmová technologie)" },
            { label: "Citlivost / Hlasitost", value: "10 úrovní" },
            { label: "Diskriminace", value: "25 segmentů + Notch funkce" },
            { label: "Tóny cílu", value: "5 tónů" },
            { label: "Cílové ID", value: "−9 až 40" },
            { label: "Režim Pinpoint", value: "Ano" },
            { label: "Bluetooth", value: "Ano (aptX™ Low Latency – bez zpoždění zvuku)" },
            { label: "Displej", value: "LCD s červeným podsvícením" },
            { label: "Cívka", value: 'V12 12"×9" Double-D, vodotěsná do 1 m' },
            { label: "Napájení", value: "4× AA NiMH dobíjecí baterie" },
            { label: "Hmotnost", value: "1.3 kg" },
            { label: "Klíčová technologie", value: "Multi-IQ, Bluetooth" }
        ],
        manual: "../FOTKY/DETEKTOR_KOVU/manual_vanquish_440_540_cs.pdf"
    },
    "teleskopicke-nuzky": {
        title: "Teleskopické nůžky na živý plot",
        specs: [
            { label: "Délka", value: "65 - 83 cm" }
        ]
    },
    "motorovy-krovinorez": {
        title: "Motorový křovinořez",
        specs: [
            { label: "Motor", value: "2-taktní, 1,6 kW (2,2 HP)" },
            { label: "Hmotnost", value: "7,9 kg" },
            { label: "Pracovní záběr", value: "struna 43 cm / nůž 25,5 cm" },
            { label: "Objem nádrže", value: "0,8 l" },
            { label: "Otáčky strunové hlavy", value: "8500 ot./min" },
            { label: "Otáčky nožového kotouče", value: "10045 ot./min" },
            { label: "Otáčky motoru", value: "6500 ot./min" }
        ]
    },
    "elektricky-vysavac-foukac": {
        title: "Elektrický vysavač/foukač Vega VE50302",
        specs: [
            { label: "Motor", value: "elektrický 230V/50Hz" },
            { label: "Výkon", value: "3 000W" },
            { label: "Sběrný vak", value: "45 litrů" },
            { label: "Rychlost vzduchu", value: "165 - 275 km/h" },
            { label: "Teleskopická tuba", value: "ANO" },
            { label: "Sací výkon", value: "13,2 m³/min" },
            { label: "Hmotnost", value: "3,3 kg" }
        ]
    }
};

// LIGHTBOX FUNKCE
class Lightbox {
    constructor() {
        this.lightbox = null;
        this.lightboxImg = null;
        this.lightboxCounter = null;
        this.closeBtn = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.currentIndex = 0;
        this.images = [];
        this.galleries = new Map();
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.createLightbox();
        this.setupEventListeners();
        this.autoDiscoverGalleries();
    }

    createLightbox() {
        const lightboxHTML = `
            <div class="lightbox" id="lightbox">
                <button class="lightbox-close">&times;</button>
                <button class="lightbox-nav lightbox-prev">&larr;</button>
                <button class="lightbox-nav lightbox-next">&rarr;</button>
                <div class="lightbox-content">
                    <img class="lightbox-img" src="" alt="">
                    <div class="lightbox-counter">
                        <span id="lightbox-counter">1 / 1</span>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = this.lightbox.querySelector('.lightbox-img');
        this.lightboxCounter = document.getElementById('lightbox-counter');
        this.closeBtn = this.lightbox.querySelector('.lightbox-close');
        this.prevBtn = this.lightbox.querySelector('.lightbox-prev');
        this.nextBtn = this.lightbox.querySelector('.lightbox-next');
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable') && e.target.hasAttribute('data-lightbox')) {
                const galleryName = e.target.getAttribute('data-lightbox');
                const startIndex = parseInt(e.target.getAttribute('data-index') || 0);
                this.openGallery(galleryName, startIndex);
            }
        });

        this.closeBtn.addEventListener('click', () => this.close());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
            }
        });

        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });
    }

    autoDiscoverGalleries() {
        const lightboxImages = document.querySelectorAll('[data-lightbox]');
        
        lightboxImages.forEach(img => {
            const galleryName = img.getAttribute('data-lightbox');
            const imageSrc = img.getAttribute('src');
            const imageIndex = parseInt(img.getAttribute('data-index') || 0);
            
            if (!this.galleries.has(galleryName)) {
                this.galleries.set(galleryName, []);
            }
            
            const gallery = this.galleries.get(galleryName);
            gallery[imageIndex] = imageSrc;
        });

        this.galleries.forEach((images, galleryName) => {
            this.galleries.set(galleryName, images.filter(img => img !== undefined));
        });
    }

    openGallery(galleryName, startIndex = 0) {
        if (this.isAnimating) return;
        
        this.images = this.galleries.get(galleryName) || [];
        this.currentIndex = startIndex;
        
        if (this.images.length > 0) {
            this.open();
        }
    }

    open() {
        this.isAnimating = true;
        this.lightbox.style.display = 'flex';
        
        // Force reflow
        this.lightbox.offsetHeight;
        
        setTimeout(() => {
            this.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.updateImage();
            
            // Reset animation lock after opening animation completes
            setTimeout(() => {
                this.isAnimating = false;
            }, 400);
        }, 10);
    }

    close() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.lightbox.classList.add('closing');
        this.lightbox.classList.remove('active');
        
        setTimeout(() => {
            this.lightbox.style.display = 'none';
            this.lightbox.classList.remove('closing');
            document.body.style.overflow = '';
            this.isAnimating = false;
        }, 300);
    }

    updateImage() {
        if (this.images.length === 0) return;
        
        // Add changing animation class
        this.lightboxImg.classList.add('changing');
        
        setTimeout(() => {
            this.lightboxImg.src = this.images[this.currentIndex];
            this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
            
            // Remove changing class and add changing-in for smooth transition
            this.lightboxImg.classList.remove('changing');
            this.lightboxImg.classList.add('changing-in');
            
            // Remove changing-in class after animation completes
            setTimeout(() => {
                this.lightboxImg.classList.remove('changing-in');
            }, 300);
            
            // Navigační tlačítka
            this.prevBtn.style.display = this.images.length <= 1 || this.currentIndex === 0 ? 'none' : 'flex';
            this.nextBtn.style.display = this.images.length <= 1 || this.currentIndex === this.images.length - 1 ? 'none' : 'flex';
            
            // KŘÍŽEK JE VŽDY VIDITELNÝ - OPRAVA PRO MOBILY
            this.closeBtn.style.display = 'flex';
            this.closeBtn.style.opacity = '1';
            this.closeBtn.style.visibility = 'visible';
        }, 150);
    }


    next() {
        if (this.isAnimating || this.currentIndex >= this.images.length - 1) return;
        
        this.currentIndex++;
        this.updateImage();
    }

    prev() {
        if (this.isAnimating || this.currentIndex <= 0) return;
        
        this.currentIndex--;
        this.updateImage();
    }
}

// MODAL FUNKCE - KOMPLETNĚ PŘEDĚLANÁ
let modal, modalTitle, modalBody, productModal, productModalTitle, productModalBody;
let closeButtons, infoButtons, productInfoButtons;
let lastScrollTop = 0;
let lightbox;

// Uložení scroll pozice
let savedScrollPosition = 0;

// Jednoduchý modal systém
function openModal(modalElement) {
    if (!modalElement) return;
    
    // Uložíme aktuální scroll pozici
    savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Zobrazíme modal
    modalElement.style.display = 'flex';
    
    // Přidáme třídu pro animaci
    setTimeout(() => {
        modalElement.classList.add('modal-open');
    }, 10);
    
    // Zaměříme zavírací tlačítko
    const closeBtn = modalElement.querySelector('.close-modal');
    if (closeBtn) closeBtn.focus();
}

function closeModal(modalElement) {
    if (!modalElement) return;
    
    // Odstraníme třídu pro animaci
    modalElement.classList.remove('modal-open');
    modalElement.classList.add('closing');
    
    // Počkáme na konec animace a skryjeme modal
    setTimeout(() => {
        modalElement.style.display = 'none';
        modalElement.classList.remove('closing');
        modalElement.classList.remove('tech-specs');
        
        // VRÁTÍME SCROLL POZICI - tohle je klíčové!
        window.scrollTo(0, savedScrollPosition);
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    modal = document.getElementById('infoModal');
    modalTitle = document.getElementById('modalTitle');
    modalBody = document.getElementById('modalBody');
    
    productModal = document.getElementById('productInfoModal');
    productModalTitle = document.getElementById('productModalTitle');
    productModalBody = document.getElementById('productModalBody');
    
    closeButtons = document.querySelectorAll('.close-modal');
    infoButtons = document.querySelectorAll('.info-btn');
    productInfoButtons = document.querySelectorAll('.product-info-btn');
    
    lightbox = new Lightbox();
    
    setupEventListeners();
    handleScroll();
});

function setupEventListeners() {
    // Kliknutí na pozadí modalu
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
    
    // Zavírací tlačítka
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalToClose = this.closest('.modal');
            closeModal(modalToClose);
        });
    });
    
    // Info tlačítka
    infoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            showProductInfo(productName);
        });
    });
    
    // Product info tlačítka
    productInfoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            showProductSpecs(productId);
        });
    });
    
    // ESC klávesa
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
    
    window.addEventListener('resize', debounce(handleResize, 250));
    window.addEventListener('scroll', throttle(handleScroll, 100));
}

function showProductInfo(productName) {
    if (!modal || !modalTitle || !modalBody || !itemsData[productName]) return;
    
    const product = itemsData[productName];
    
    modalTitle.textContent = productName;
    modalBody.innerHTML = '';
    
    const infoContainer = document.createElement('div');
    infoContainer.className = 'modal-inner-content';
    
    const priceItem = document.createElement('div');
    priceItem.className = 'info-item';
    priceItem.innerHTML = `<span class="info-label">Cena:</span> <span class="info-value">${product.cena}</span>`;
    infoContainer.appendChild(priceItem);
    
    const timeItem = document.createElement('div');
    timeItem.className = 'info-item';
    timeItem.innerHTML = `<span class="info-label">Doba:</span> <span class="info-value">${product.doba}</span>`;
    infoContainer.appendChild(timeItem);
    
    const deliveryItem = document.createElement('div');
    deliveryItem.className = 'info-item';
    deliveryItem.innerHTML = `<span class="info-label">Doprava:</span> <span class="info-value">${product.doprava}</span>`;
    infoContainer.appendChild(deliveryItem);
    
    const typeItem = document.createElement('div');
    typeItem.className = 'info-item';
    typeItem.innerHTML = `<span class="info-label">Typ:</span> <span class="info-value">${product.typ}</span>`;
    infoContainer.appendChild(typeItem);
    
    if (product.příslušenství) {
        const accessoryItem = document.createElement('div');
        accessoryItem.className = 'info-item';
        accessoryItem.innerHTML = `<span class="info-label">Příslušenství:</span> <span class="info-value">${product.příslušenství}</span>`;
        infoContainer.appendChild(accessoryItem);
    }
    
    if (product.obsluha) {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'info-item';
        serviceItem.innerHTML = `<span class="info-label">Obsluha:</span> <span class="info-value">${product.obsluha}</span>`;
        infoContainer.appendChild(serviceItem);
    }
    
    modalBody.appendChild(infoContainer);
    openModal(modal);
}

function showProductSpecs(productId) {
    if (!productModal || !productModalTitle || !productModalBody || !productSpecs[productId]) return;
    
    const product = productSpecs[productId];
    
    productModalTitle.textContent = product.title;
    productModalBody.innerHTML = '';
    
    productModal.classList.add('tech-specs');
    
    const infoContainer = document.createElement('div');
    infoContainer.className = 'modal-inner-content';
    
    product.specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'info-item';
        specItem.innerHTML = `
            <div class="info-label">${spec.label}:</div>
            <div class="info-value">${spec.value}</div>
        `;
        infoContainer.appendChild(specItem);
    });
    
    // PŘIDÁNÍ MANUÁLU - pokud existuje
    if (product.manual) {
        const manualItem = document.createElement('div');
        manualItem.className = 'info-item';
        manualItem.style.textAlign = 'center';
        manualItem.style.marginTop = '20px';
        manualItem.style.padding = '20px';
        manualItem.style.background = 'rgba(255,215,0,0.1)';
        manualItem.style.borderRadius = '10px';
        manualItem.style.border = '2px solid var(--secondary)';
        manualItem.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 10px;">📖</div>
            <div class="info-label" style="margin-bottom: 10px;">Uživatelský manuál</div>
            <a href="${product.manual}" download class="btn btn-primary" style="text-decoration: none; display: inline-block;">
                Stáhnout manuál (PDF)
            </a>
        `;
        infoContainer.appendChild(manualItem);
    }
    
    productModalBody.appendChild(infoContainer);
    openModal(productModal);
}

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
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

function handleResize() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.category-nav ul');
    
    if (window.innerWidth > 768) {
        if (navMenu) {
            navMenu.classList.remove('show');
            navMenu.style.display = '';
        }
        
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
}

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

function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.category-nav ul');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isOpening = !hamburger.classList.contains('active');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
            
            if (isOpening) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
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

