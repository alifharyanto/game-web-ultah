/* =========================================
   SYRAA BIRTHDAY GAME — script.js
   ========================================= */

// ===== FRAME DATA =====
// Setiap frame: image (background scene), name (nama karakter), texts (array dialog)
const frames = [
    {
        image: "assets/img/gambar1.jpg",
        name: "Melody",
        texts: [
            "Hmmm hari yang cerahh.... sekarang tanggal berapa ya?",
            "Oh iyaa sekarang kan tanggal 2 Juni, ulang tahun Syafiraa"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: [
            "Aku harus menghubungi teman-teman!",
            "Calling...",
            "Haii Teman-teman, hari ini kan ulang tahun Syafiraa, kita harus rayakan bareng-bareng!"
        ]
    },
    {
        image: "assets/img/gambar4.jpg",
        name: "Hello Kitty",
        texts: ["Hah memang nya hari ini?"]
    },
    {
        image: "assets/img/gambar4.jpg",
        name: "Cinnamoroll",
        texts: ["Iyaaa, Kitty kamu lupa yaa?"]
    },
    {
        image: "assets/img/gambar4.jpg",
        name: "Hello Kitty",
        texts: ["Hehehe iyaa aku lupa, maaf yaa :("]
    },
    {
        image: "assets/img/gambar4.jpg",
        name: "Keroppi",
        texts: [
            "Hahaha gapapa Kitty, yang penting kita rayakan bareng-bareng yaa!",
            "Yuk kita buat surprise party untuk Syafiraa!"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: [
            "AYOOOO, AKU PESAN KUE ULANG TAHUN SAMA KUROMI YAA!",
            "Nanti kita ketemu di rumah Syafira nanti sore ya!"
        ]
    },
    {
        image: "assets/img/gambar4.jpg",
        name: "Semua",
        texts: ["OKEEEEE"]
    },
    {
        image: "assets/img/gambar1.jpg",
        name: "Melody",
        texts: [
            "Okeee, sekarang aku harus telepon Kuromi duluu!",
        ]
    },

    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: [
            "Calling...",
            "Calling...",
            "Mana nih Kuromi, kok gak angkat-angkat yaa?",
            "Calling...",
            "Halo Kuromi, kamu lagi apa? Kok panggilanku gak di angkat-angkat yaa?"
        ]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: [
            "Ohh Hai juga Melody, maaf ya gak jawab telepon nya soal nya aku lagi buat kue",
            "Ada apa ya? kamu pengen beli kue di toko ku hari ini?"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Ohhh iyaa, kirain kamu lagi pergi jalan-jalan."]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Engga kok aku lagi buat kue di toko ku."]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Aku telepon kamu karena aku pengen beli kue ulang tahun kamu ada ga untuk hari ini?"]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: [
            "Hmm untuk hari ini....",
            "Ada nih kue ulang tahun kamu pengen kayak gimana?"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Kue ulang tahun yang rasa krim strawberry dengan hiasan lucu ada gak kamu?"]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Adaaa, nihh kamu mau ambil ke tempat ku kapan?"]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Aku ambilnya sekarang yaa, nanti kamu siapin aja nanti aku ke toko kue kamu yaa!"]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Hmm okeee, aku siapkan sekarang pesanan kamu"]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Hmm okeee, terimakasih yaa Kuromi!"]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Okeee, sama-sama Melody!",
            "EH BENTARR-BENTAR",
            "Kamu beli kue ulang tahun untuk siapa Melody?",
            "Ada yang ulang tahun ya hari ini?"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Kamu juga lupa seperti Kitty yaa?",
            "Coba tebak aku beli buat siapa hayoo?"
        ]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Hmmm bentar-bentar...",
            "...",
            "...",
            "...",
            "OHH IYAA INGATT AKU LUPAA KALO SEKARANG KAN TANGGAL 2 JUNI...",
            "BERARTI SEKARANG ULANG TAHUN NYA SYAFIRAAA!!",
            "BENER KANNN MELODY??"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Itu kamu tauuu, kamu pengen ikut kerumah Syafira ga Kuromi?",
            "Untuk merayakan ulang tahun Syafira bareng-bareng"
        ]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["MAUUU, aku juga pengen ikut",
            "Jam berapa kita ketemu di rumah Syafira nanti sore?"
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Kita ketemu jam 5 sore yaa.",
        ]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Okee, Melody SIAPP",
        ]
    },
    {
        image: "assets/img/gambar2.png",
        name: "Melody",
        texts: ["Baiklah, kalo gitu aku tutup telepon dulu yaa,",
            "Sampai jumpa di toko kue kamu yaa, Kuromi!"
        ]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Okee, sampai ketemu nanti sore yaa Melody!",
            "Byee!"
        ]
    },
    {
        image: "assets/img/kuromi-cake.jpg",
        name: "Kuromi",
        texts: ["Hmm, baiklah kalo gitu aku akan siap-siap untuk merayakan juga.",
            "...",
            "Kasih hadiah ulang tahun Syafira apa yaa??",
            "Hmmm.....",
            "Apa aku kasih hadiah Idol dari Korea yaa?",
            "Tapii dia suka idol dari grup apa yaa??",
            "HMM.....",
            "OHHH IYAA AKU TAU...",
            "AKU KASIH HADIAH BONEKA AJA KALI YAAA!!",
            "Idee baguss"
        ]
    },
    {
        image: "assets/img/gambar1.jpg",
        name: "Melody",
        texts: ["Okeee, sekarang aku harus ke toko kue kuromi duluu!",
        ]
    },
    {
        image: "assets/img/kota.jpg",
        name: "System",
        texts: ["Dann akhirnya Melody pergi ke toko kue Kuromi untuk mengambil kue ulang tahun yang sudah di pesan untuk Syafira...",
            "................................................."
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Kuromi",
        texts: ["Haloo Melody, ini kue ulang tahun yang kamu pesan untuk Syafira",
            "Ohh iyaa kamu kasih kado juga kah?"
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Melody",
        texts: ["Ohh iyaa, terimakasihh yaa Kuromi, kue nya bagus banget!",
            "Iyaa aku kasih kado juga untuk Syafira,",
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Kuromi",
        texts: ["Wahhh baguss... tapi jadi sama kayak aku dong, aku juga kasih kado boneka juga untuk Syafira,",
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Melody",
        texts: ["Owalahh jadi kita sama-sama kasih kado boneka yaa Kuromi,",
            "Kamu memang mau kasih boneka apa untuk Syafira?",
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Kuromi",
        texts: ["Hmmm apa yaaa....",
            "....",
            "Aku sih pengen nya boneka lucu gitu. buat diaa buat nemenin diaa hehehe.",
            "Kalo kamuu apa Melody??",
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Melody",
        texts: ["Kalo aku sih pengen nya kasih boneka tapi boneka nya diri aku sendiri hehehe....",
            "Agar Syafiraa bisa ingatt akuu SELAMAANYAA!! hehehee...."
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Kuromi",
        texts: ["WAHHHHH IDE BAGUSSSS MELODYYY!!!",
            "IYAA JUGA YAA, KALO KITAA KASIH BONEKA DIRI KITA SENDIRI. NANTI SYAFIRAA BISA INGAT KITA SELAMAANYA JUGA HEHEHEHE...."
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Melody",
        texts: ["Nahhh iyaa kann...",
            "...",
            "Okeee, kalo gituu aku mau jalan kerumah Syafira dulu ya Kuromi...",
            "Sampai jumpa disana ya Kuromi!"
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Kuromi",
        texts: ["Hmmm, Okeee baiklah Hati-Hati di jalan Melody",
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Melody",
        texts: ["Okeee, Makasih jugaa yaa Kue nyaa",
        ]
    },
    {
        image: "assets/img/kue-ultah.jpg",
        name: "Kuromi",
        texts: ["OKEEE",
        ]
    },
];

// ===== ELEMENTS =====
const loadingScreen = document.getElementById("loadingScreen");
const loadingProgressWrap = document.getElementById("loadingProgressWrap");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const mainMenu = document.getElementById("mainMenu");

const settingsOverlay = document.getElementById("settingsOverlay");
const creditsOverlay = document.getElementById("creditsOverlay");

const game = document.getElementById("game");
const sceneImage = document.getElementById("sceneImage");
const textEl = document.getElementById("text");
const nameEl = document.getElementById("name");
const clickHint = document.getElementById("clickHint");
const inGameSettings = document.getElementById("inGameSettings");
const btnExitGame = document.getElementById("btnExitGame");

const rotateWarning = document.getElementById("rotateWarning");
const fullscreenPrompt = document.getElementById("fullscreenPrompt");
const btnFullscreen = document.getElementById("btnFullscreen");

const bgmAudio = document.getElementById("bgm");
const sfxAudio = document.getElementById("sfx");
const clickSfxAudio = document.getElementById("clickSfx");

// ===== SETTINGS CONTROLS =====
const toggleBgm = document.getElementById("toggleBgm");
const toggleSfx = document.getElementById("toggleSfx");
const toggleClick = document.getElementById("toggleClick");
const bgmVolSlider = document.getElementById("bgmVolume");
const sfxVolSlider = document.getElementById("sfxVolume");
const clkVolSlider = document.getElementById("clickVolume");
const bgmVolVal = document.getElementById("bgmVolVal");
const sfxVolVal = document.getElementById("sfxVolVal");
const clickVolVal = document.getElementById("clickVolVal");

// ===== STATE =====
let currentFrame = 0;
let currentText = 0;
let typing = false;
let typingTimeout = null;
let sfxMuted = false;
let bgmMuted = false;
let clickMuted = false;
let dialogueClickEnabled = false;
let gameRunning = false;

// ===== BLOKIR ZOOM GESTURE =====
document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

document.addEventListener("touchend", (e) => {
    const now = Date.now();
    if (now - (window._lastTouch || 0) < 300 && e.touches.length === 0) {
        e.preventDefault();
    }
    window._lastTouch = now;
}, { passive: false });

document.addEventListener("gesturestart", (e) => e.preventDefault(), { passive: false });
document.addEventListener("gesturechange", (e) => e.preventDefault(), { passive: false });
document.addEventListener("gestureend", (e) => e.preventDefault(), { passive: false });

// ===== DETECT PERANGKAT =====
function detectMobileHardware() {
    const smallScreen = Math.min(screen.width, screen.height) <= 900;
    const hasTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
    const mobileUA = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return (hasTouch && smallScreen) || mobileUA;
}

const isMobile = detectMobileHardware();

function isDesktopSiteMode() {
    if (!isMobile) return false;
    const mobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return !mobileUA;
}

const desktopSiteMode = isDesktopSiteMode();

// ===== ORIENTATION CHECK =====
function checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;

    if (!isMobile) {
        // Desktop biasa
        rotateWarning.classList.remove("show");
        fullscreenPrompt.classList.add("hidden");
        loadingScreen.classList.remove("hidden");
        return;
    }

    if (desktopSiteMode) {
        // Desktop site mode di HP
        if (isPortrait) {
            rotateWarning.classList.add("show");
            fullscreenPrompt.classList.add("hidden");
            loadingScreen.classList.add("hidden");
        } else {
            rotateWarning.classList.remove("show");
            fullscreenPrompt.classList.add("hidden");
            loadingScreen.classList.remove("hidden");
        }
        return;
    }

    // Mobile biasa
    if (isPortrait) {
        rotateWarning.classList.add("show");
        fullscreenPrompt.classList.add("hidden");
        loadingScreen.classList.add("hidden");
    } else {
        rotateWarning.classList.remove("show");
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            fullscreenPrompt.classList.remove("hidden");
            loadingScreen.classList.add("hidden");
        } else {
            fullscreenPrompt.classList.add("hidden");
            loadingScreen.classList.remove("hidden");
        }
    }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", () => setTimeout(checkOrientation, 200));

document.addEventListener("fullscreenchange", onFullscreenChange);
document.addEventListener("webkitfullscreenchange", onFullscreenChange);
function onFullscreenChange() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        fullscreenPrompt.classList.add("hidden");
        loadingScreen.classList.remove("hidden");
    }
}

checkOrientation();

// ===== FULLSCREEN =====
function enterFullscreen() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

btnFullscreen.addEventListener("click", () => {
    playClickSfx();
    enterFullscreen();
});

// ===== PRELOAD ASSETS =====
function preloadAssets(onComplete) {
    const allImages = [...new Set(frames.map(f => f.image).filter(Boolean))];
    const total = allImages.length;
    if (total === 0) { onComplete(); return; }

    let loaded = 0;
    function tick() {
        loaded++;
        const pct = Math.round((loaded / total) * 100);
        progressBar.style.width = pct + "%";
        progressPercent.textContent = pct + "%";
        if (loaded >= total) setTimeout(onComplete, 400);
    }
    allImages.forEach(src => {
        const img = new Image();
        img.onload = tick;
        img.onerror = tick;
        img.src = src;
    });
}

// ===== MENU BUTTONS =====
document.getElementById("btnPlay").addEventListener("click", () => {
    playClickSfx();
    mainMenu.classList.add("hidden");
    loadingProgressWrap.classList.remove("hidden");

    preloadAssets(() => {
        loadingScreen.style.transition = "opacity 0.8s ease";
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
            game.classList.remove("hidden");
            startGame();
        }, 800);
    });
});

document.getElementById("btnSettings").addEventListener("click", () => {
    playClickSfx();
    settingsOverlay.classList.remove("hidden");
});

document.getElementById("btnCredits").addEventListener("click", () => {
    playClickSfx();
    creditsOverlay.classList.remove("hidden");
});

document.getElementById("closeSettings").addEventListener("click", () => {
    playClickSfx();
    settingsOverlay.classList.add("hidden");
});

document.getElementById("closeCredits").addEventListener("click", () => {
    playClickSfx();
    creditsOverlay.classList.add("hidden");
});

inGameSettings.addEventListener("click", (e) => {
    e.stopPropagation();
    playClickSfx();
    settingsOverlay.classList.remove("hidden");
});

// ===== EXIT GAME =====
btnExitGame.addEventListener("click", () => {
    playClickSfx();
    settingsOverlay.classList.add("hidden");

    // Reset state
    gameRunning = false;
    dialogueClickEnabled = false;
    typing = false;
    if (typingTimeout) clearTimeout(typingTimeout);
    stopTypingBlip();

    // Stop audio
    bgmAudio.pause();
    bgmAudio.currentTime = 0;

    // Sembunyikan game, tampilkan menu
    game.classList.add("hidden");
    btnExitGame.classList.add("hidden");

    loadingScreen.style.display = "";
    loadingScreen.style.opacity = "1";
    loadingScreen.style.transition = "";
    loadingScreen.classList.remove("hidden");
    loadingProgressWrap.classList.add("hidden");
    mainMenu.classList.remove("hidden");
    progressBar.style.width = "0%";
    progressPercent.textContent = "0%";
});

// ===== BGM =====
function startBgm() {
    if (bgmMuted) return;
    bgmAudio.volume = parseFloat(bgmVolSlider.value) / 100;
    bgmAudio.loop = true;
    if (bgmAudio.paused) bgmAudio.play().catch(() => { });
}

// ===== CLICK SFX =====
function playClickSfx() {
    if (clickMuted) return;
    const clone = clickSfxAudio.cloneNode();
    clone.volume = parseFloat(clkVolSlider.value) / 100;
    clone.play().catch(() => { });
}

// ===== TYPING SFX =====
let sfxPlaying = false;

function startTypingBlip() {
    if (sfxMuted || sfxPlaying) return;
    sfxPlaying = true;
    sfxAudio.volume = parseFloat(sfxVolSlider.value) / 100;
    sfxAudio.currentTime = 0;
    sfxAudio.play().catch(() => { });
}

function stopTypingBlip() {
    sfxAudio.pause();
    sfxAudio.currentTime = 0;
    sfxPlaying = false;
}

// ===== GAME CORE =====
function startGame() {
    gameRunning = true;
    currentFrame = 0;
    currentText = 0;
    btnExitGame.classList.remove("hidden");
    startBgm();
    loadFrame();
}

function loadFrame() {
    dialogueClickEnabled = false;
    sceneImage.classList.add("fade");
    stopTypingBlip();
    if (typingTimeout) clearTimeout(typingTimeout);

    setTimeout(() => {
        const frame = frames[currentFrame];

        sceneImage.src = frame.image;
        sceneImage.onload = () => sceneImage.classList.remove("fade");
        if (sceneImage.complete) sceneImage.classList.remove("fade");

        nameEl.innerText = frame.name;
        currentText = 0;
        showText();

        // Enable klik tepat setelah teks mulai tampil
        dialogueClickEnabled = true;
    }, 350);
}

function typeText(text) {
    typing = true;
    textEl.innerHTML = "";
    clickHint.style.opacity = "0";
    let i = 0;

    if (typingTimeout) clearTimeout(typingTimeout);
    startTypingBlip();

    function typeNext() {
        if (!typing) {
            // Skip → tampilkan teks penuh sekaligus
            textEl.innerHTML = text;
            stopTypingBlip();
            clickHint.style.opacity = "1";
            return;
        }
        textEl.innerHTML += text[i];
        i++;
        if (i >= text.length) {
            typing = false;
            stopTypingBlip();
            clickHint.style.opacity = "1";
        } else {
            typingTimeout = setTimeout(typeNext, 28);
        }
    }
    typeNext();
}

function showText() {
    typeText(frames[currentFrame].texts[currentText]);
}

// ===== DIALOGUE CLICK =====
document.getElementById("dialogueBox").addEventListener("click", (e) => {
    e.stopPropagation();
    handleDialogueAdvance();
});

game.addEventListener("click", (e) => {
    if (e.target === game || e.target === sceneImage) {
        handleDialogueAdvance();
    }
});

function handleDialogueAdvance() {
    if (!dialogueClickEnabled) return;
    const frame = frames[currentFrame];

    if (typing) {
        typing = false; // skip animasi → typeNext() akan tampilkan teks penuh
        return;
    }

    playClickSfx();

    if (currentText < frame.texts.length - 1) {
        currentText++;
        showText();
    } else if (currentFrame < frames.length - 1) {
        currentFrame++;
        loadFrame();
    }
    // Jika sudah di frame & teks terakhir: tidak ada aksi (bisa tambah ending di sini)
}

// ===== SETTINGS =====
bgmVolSlider.addEventListener("input", () => {
    bgmVolVal.textContent = bgmVolSlider.value;
    if (!bgmMuted) bgmAudio.volume = bgmVolSlider.value / 100;
});
sfxVolSlider.addEventListener("input", () => {
    sfxVolVal.textContent = sfxVolSlider.value;
    if (!sfxMuted) sfxAudio.volume = sfxVolSlider.value / 100;
});
clkVolSlider.addEventListener("input", () => {
    clickVolVal.textContent = clkVolSlider.value;
});

toggleBgm.addEventListener("click", () => {
    bgmMuted = !bgmMuted;
    toggleBgm.dataset.muted = bgmMuted;
    bgmAudio.muted = bgmMuted;
    toggleBgm.innerHTML = bgmMuted
        ? '<i class="fa-solid fa-volume-xmark"></i> OFF'
        : '<i class="fa-solid fa-volume-high"></i> ON';
    playClickSfx();
});

toggleSfx.addEventListener("click", () => {
    sfxMuted = !sfxMuted;
    toggleSfx.dataset.muted = sfxMuted;
    sfxAudio.muted = sfxMuted;
    toggleSfx.innerHTML = sfxMuted
        ? '<i class="fa-solid fa-volume-xmark"></i> OFF'
        : '<i class="fa-solid fa-volume-high"></i> ON';
    playClickSfx();
});

toggleClick.addEventListener("click", () => {
    clickMuted = !clickMuted;
    toggleClick.dataset.muted = clickMuted;
    toggleClick.innerHTML = clickMuted
        ? '<i class="fa-solid fa-volume-xmark"></i> OFF'
        : '<i class="fa-solid fa-volume-high"></i> ON';
    if (!clickMuted) playClickSfx();
});

[settingsOverlay, creditsOverlay].forEach(overlay => {
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            playClickSfx();
            overlay.classList.add("hidden");
        }
    });
});

// ===== UNLOCK AUDIO saat interaksi pertama =====
document.addEventListener("click", () => {
    [bgmAudio, sfxAudio, clickSfxAudio].forEach(a => {
        if (a.paused && a !== bgmAudio) {
            a.play().then(() => a.pause()).catch(() => { });
        }
    });
}, { once: true });