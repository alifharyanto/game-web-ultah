/* =========================================
   CINEMATIC FRAME + CREDIT SCENE MODULE
   Tambahkan setelah script.js di-load
   ========================================= */

// ===== CINEMATIC FRAMES DATA =====
// Definisikan di sini tanpa mengubah const frames di atas
const cinematicSequence = {
    // Sisipkan setelah frame index terakhir (otomatis dipanggil setelah game selesai)
    enabled: true,

    // Foto-foto yang ditampilkan di slideshow cinematic (tanpa textbox)
    shots: [
        { image: "assets/img/gambar16.png", duration: 2, caption: null },
        { image: "assets/img/gambar15.png", duration: 5, caption: null },
    ],

    // SFX shutter kamera (opsional, jika file ada)
    shutterSfx: "assets/audio/sfxShutterCamera.mp3", // ganti jika ada shutter.mp3

    // Musik credit scene (loop)
    creditBgm: "assets/audio/Koi is Love BGM.wav",

    // Foto-foto momen epik di akhir credit
    epicMoments: [
        "assets/img/gambar6.jpg",
        "assets/img/gambar7.jpg",
        "assets/img/gambar2.png",
        "assets/img/gambar11.png",
        "assets/img/kue-ultah.jpg",
        "assets/img/kuromi-cake.jpg",
        "assets/img/gambar5.jpg"
    ],

    // Teks credit
    credits: [
        { type: "section", text: "--- THE END ---" },
        { type: "subtitle", text: "Happy Birthday" },
        { type: "title", text: "Syafira Tri Andini" },
        { type: "spacer" },
        { type: "section", text: "～ Special Thanks ～" },
        { type: "name", text: "Syafira Tri Andini (Peran Utama)" },
        { type: "name", text: "Muhammad Alif H. (Pembuat game)" },
        { type: "role", text: "Karakter Sanrio:" },
        { type: "name", text: "My Melody, Kuromi, Cinnamorol, Keroppi, HelloKitty" },

        { type: "spacer" },
        { type: "section", text: "～ Pesan Untuk Syafira ～" },
        { type: "message", text: "Semoga semua harapan dan impianmu\ndi umur yang baru ini bisa tercapai semua yaa" },
        { type: "spacer" },
        { type: "section", text: "～ Game by: ～" },
        { type: "name", text: "@44mhmdalif_" },
        { type: "role", text: "Secret Birthday Gift · 2 Juni 2026" },
        { type: "role", text: "Version 1.0.2" },
        { type: "spacer" },
        { type: "spacer" },
        { type: "epic", text: "__EPIC_MOMENTS__" },  // placeholder, diganti komponen foto
        { type: "spacer" },
        { type: "easter", text: "🌹" },  // easter egg bunga
        { type: "spacer" },
        { type: "spacer" },
    ]
};

// ===== INJECT HTML UNTUK CINEMATIC & CREDIT SCENE =====
(function injectCinematicUI() {
    // --- Cinematic Overlay ---
    const cinematicHTML = `
    <div id="cinematicOverlay" class="cinematic-hidden">
        <div id="cinematicShots"></div>
        <div id="cinematicFlash"></div>
        <div id="cinematicVignette"></div>
    </div>`;

    // --- Credit Scene Overlay ---
    const creditHTML = `
    <div id="creditScene" class="cinematic-hidden">
        <div id="creditBgCollage"></div>
        <div id="creditBgDim"></div>
        <div id="creditScrollWrap">
            <div id="creditContent"></div>
        </div>
        <div id="creditReturnBtn" class="cinematic-hidden">
            <button id="btnBackToHome">
                <span class="btn-pixel-icon">♥</span>
                Kembali ke Menu
                <span class="btn-pixel-icon">♥</span>
            </button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", cinematicHTML + creditHTML);
    injectCinematicCSS();
})();

// ===== INJECT CSS =====
function injectCinematicCSS() {
    const style = document.createElement("style");
    style.textContent = `
    /* ====== CINEMATIC OVERLAY ====== */
    #cinematicOverlay {
        position: fixed;
        inset: 0;
        z-index: 200;
        background: #000;
        overflow: hidden;
    }
    .cinematic-hidden { display: none !important; }

    #cinematicShots {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }
    #cinematicShots img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    #cinematicShots img.cine-active { opacity: 1; }
    #cinematicShots img.cine-zoom {
        animation: cineZoom 1.5s ease forwards;
    }
    @keyframes cineZoom {
        from { transform: scale(1); }
        to   { transform: scale(1.07); }
    }

    #cinematicFlash {
        position: absolute;
        inset: 0;
        background: #fff;
        opacity: 0;
        pointer-events: none;
        z-index: 5;
        transition: opacity 0.08s ease;
    }
    #cinematicFlash.flash-active { opacity: 0.85; }

    #cinematicVignette {
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%);
        pointer-events: none;
        z-index: 3;
    }

    /* ====== CREDIT SCENE ====== */
    #creditScene {
        position: fixed;
        inset: 0;
        z-index: 210;
        overflow: hidden;
        background: #0a0005;
    }

    /* Kolase BG foto-foto game */
    #creditBgCollage {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        opacity: 0;
        transition: opacity 1.2s ease;
    }
    #creditBgCollage.collage-visible { opacity: 1; }
    #creditBgCollage .collage-cell {
        overflow: hidden;
        position: relative;
    }
    #creditBgCollage .collage-cell img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.28) saturate(0.7);
        animation: collageFloat 8s ease-in-out infinite alternate;
    }
    #creditBgCollage .collage-cell:nth-child(even) img {
        animation-delay: -4s;
    }
    @keyframes collageFloat {
        from { transform: scale(1.0); }
        to   { transform: scale(1.06); }
    }

    #creditBgDim {
        position: absolute;
        inset: 0;
        background: 
            radial-gradient(ellipse at center, rgba(233,30,140,0.08) 0%, rgba(10,0,5,0.6) 70%),
            repeating-linear-gradient(
                to bottom,
                transparent 0px, transparent 3px,
                rgba(194,24,91,0.04) 3px, rgba(194,24,91,0.04) 4px
            );
        z-index: 1;
        pointer-events: none;
    }

    /* Scroll wrap */
    #creditScrollWrap {
        position: absolute;
        inset: 0;
        z-index: 2;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    #creditContent {
        width: 100%;
        max-width: 640px;
        padding: 0 24px;
        text-align: center;
        will-change: transform;
    }

    /* Credit teks styles */
    .credit-section {
        font-family: 'Press Start 2P', monospace;
        font-size: clamp(0.5rem, 1.8vmin, 0.75rem);
        color: #ff80ab;
        letter-spacing: 4px;
        margin: 32px 0 16px;
        text-shadow: 0 0 12px #e91e8c, 2px 2px 0 #7b0037;
        animation: creditGlow 2s ease-in-out infinite;
    }
    @keyframes creditGlow {
        0%,100% { text-shadow: 0 0 12px #e91e8c, 2px 2px 0 #7b0037; }
        50%      { text-shadow: 0 0 24px #ff80ab, 2px 2px 0 #7b0037; }
    }

    .credit-title {
        font-family: 'Press Start 2P', monospace;
        font-size: clamp(0.9rem, 4vmin, 2rem);
        color: #fff;
        letter-spacing: 3px;
        margin: 8px 0;
        text-shadow: 3px 3px 0 #a0004e, 0 0 30px #ff80ab;
    }

    .credit-subtitle {
        font-family: 'VT323', monospace;
        font-size: clamp(1.2rem, 3.5vmin, 1.8rem);
        color: #f48fb1;
        letter-spacing: 2px;
        margin: 4px 0;
    }

    .credit-name {
        font-family: 'Press Start 2P', monospace;
        font-size: clamp(0.45rem, 1.5vmin, 0.65rem);
        color: #fce4ec;
        margin: 20px 0 4px;
        letter-spacing: 2px;
    }

    .credit-role {
        font-family: 'VT323', monospace;
        font-size: clamp(1rem, 2.8vmin, 1.3rem);
        color: #f48fb1;
        margin: 0 0 6px;
        opacity: 0.85;
    }

    .credit-message {
        font-family: 'VT323', monospace;
        font-size: clamp(1.1rem, 3vmin, 1.5rem);
        color: #fff0f6;
        line-height: 1.8;
        margin: 12px auto;
        max-width: 500px;
        padding: 14px 18px;
        border: 2px solid rgba(233,30,140,0.4);
        background: rgba(233,30,140,0.08);
        white-space: pre-line;
    }

    .credit-spacer { height: 32px; }

    /* Epic Moments Grid */
    .credit-epic-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
        margin: 20px 0;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
    }
    .credit-epic-grid img {
        width: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
        border: 3px solid #e91e8c;
        box-shadow: 3px 3px 0 #7b0037;
        filter: brightness(0.9) saturate(1.1);
        transition: transform 0.3s ease;
    }
    .credit-epic-grid img:hover { transform: scale(1.05); }

    .credit-epic-label {
        font-family: 'Press Start 2P', monospace;
        font-size: clamp(0.4rem, 1.3vmin, 0.55rem);
        color: #ff80ab;
        letter-spacing: 3px;
        margin-bottom: 10px;
    }

    /* Easter egg bunga */
    .credit-easter {
        font-size: clamp(3.5rem, 10vmin, 6rem);
        margin: 20px 0 8px;
        display: block;
        animation: easterSpin 6s linear infinite, easterPulse 2s ease-in-out infinite;
        filter: drop-shadow(0 0 18px #e91e8c);
    }
    @keyframes easterSpin {
        from { transform: rotate(0deg) scale(1); }
        to   { transform: rotate(360deg) scale(1); }
    }
    @keyframes easterPulse {
        0%,100% { filter: drop-shadow(0 0 18px #e91e8c); }
        50%      { filter: drop-shadow(0 0 36px #ff80ab) drop-shadow(0 0 60px #c2185b); }
    }

    .credit-easter-text {
        font-family: 'Press Start 2P', monospace;
        font-size: clamp(0.3rem, 1vmin, 0.42rem);
        color: rgba(255,128,171,0.6);
        letter-spacing: 2px;
        margin-top: 4px;
    }

    /* Return button */
    #creditReturnBtn {
        position: absolute;
        bottom: 0;
        left: 0; right: 0;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px;
        background: linear-gradient(to top, rgba(10,0,5,1) 60%, transparent);
        animation: btnFadeIn 0.8s ease forwards;
    }
    @keyframes btnFadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    #btnBackToHome {
        font-family: 'Press Start 2P', monospace;
        font-size: clamp(0.4rem, 1.5vmin, 0.6rem);
        padding: clamp(10px, 2vh, 16px) clamp(18px, 4vw, 32px);
        background: #e91e8c;
        color: #fff;
        border: 3px solid #fff;
        box-shadow: 5px 5px 0 #7b0037, inset 0 1px 0 rgba(255,255,255,0.25);
        cursor: pointer;
        letter-spacing: 2px;
        position: relative;
        transition: transform 0.08s, box-shadow 0.08s, background 0.1s;
    }
    #btnBackToHome::before {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 2px,
            transparent 2px, transparent 4px
        );
        pointer-events: none;
    }
    #btnBackToHome:hover  { background: #c2185b; transform: translate(-2px,-2px); box-shadow: 7px 7px 0 #7b0037; }
    #btnBackToHome:active { transform: translate(5px,5px); box-shadow: none; }
    .btn-pixel-icon { margin: 0 8px; animation: heartBeat2 1s steps(2) infinite; display: inline-block; }
    @keyframes heartBeat2 { 0%,100% { transform:scale(1); } 50% { transform:scale(1.4); } }

    /* Particles pink */
    .credit-particle {
        position: absolute;
        pointer-events: none;
        z-index: 4;
        color: #ff80ab;
        font-size: 0.7rem;
        animation: particleFly var(--dur, 4s) linear infinite;
        opacity: 0;
        top: 100%;
        left: var(--x, 50%);
    }
    @keyframes particleFly {
        0%   { opacity: 0;   transform: translateY(0) rotate(0deg); }
        10%  { opacity: 0.7; }
        90%  { opacity: 0.5; }
        100% { opacity: 0;   transform: translateY(-110vh) rotate(720deg); }
    }
    `;
    document.head.appendChild(style);
}

// ===== AUDIO untuk credit scene =====
let creditBgmAudio = null;

function startCreditBgm() {
    if (!creditBgmAudio) {
        creditBgmAudio = document.createElement("audio");
        creditBgmAudio.src = cinematicSequence.creditBgm;
        creditBgmAudio.loop = true;
        creditBgmAudio.volume = 0.18;
        document.body.appendChild(creditBgmAudio);
    }
    creditBgmAudio.currentTime = 0;
    creditBgmAudio.play().catch(() => { });
}

function stopCreditBgm() {
    if (creditBgmAudio) {
        creditBgmAudio.pause();
        creditBgmAudio.currentTime = 0;
    }
}

// Shutter SFX menggunakan dubbingAudio yang sudah ada
function playShutterSfx() {
    const el = document.getElementById("dubbingAudio");
    if (!el) return;
    // Coba shutter khusus, fallback ke klik SFX
    const shutterEl = document.getElementById("clickSfx");
    if (shutterEl) {
        const clone = shutterEl.cloneNode();
        clone.volume = 0.6;
        clone.play().catch(() => { });
    }
}

// ===== CINEMATIC SLIDESHOW =====
function startCinematicSequence(onDone) {
    const overlay = document.getElementById("cinematicOverlay");
    const shotsDiv = document.getElementById("cinematicShots");
    const flash = document.getElementById("cinematicFlash");

    overlay.classList.remove("cinematic-hidden");
    shotsDiv.innerHTML = "";

    // Preload & buat img elements
    const shots = cinematicSequence.shots;
    const imgs = shots.map((shot, i) => {
        const img = document.createElement("img");
        img.src = shot.image;
        img.alt = "";
        img.dataset.index = i;
        shotsDiv.appendChild(img);
        return img;
    });

    let idx = 0;

    function showShot(i) {
        if (i >= shots.length) {
            // Semua shot selesai → jeda 2 detik lalu credit
            setTimeout(() => {
                overlay.classList.add("cinematic-hidden");
                onDone();
            }, 2000);
            return;
        }

        // Fade out semua, fade in yang ini
        imgs.forEach((img, j) => {
            img.classList.remove("cine-active", "cine-zoom");
            if (j === i) {
                img.classList.add("cine-active", "cine-zoom");
            }
        });

        // Flash efek kamera
        flash.classList.add("flash-active");
        playShutterSfx();
        setTimeout(() => flash.classList.remove("flash-active"), 120);

        setTimeout(() => {
            idx++;
            showShot(idx);
        }, shots[i].duration);
    }

    showShot(0);
}

// ===== BUILD CREDIT CONTENT =====
function buildCreditContent() {
    const container = document.getElementById("creditContent");
    container.innerHTML = "";

    cinematicSequence.credits.forEach(item => {
        if (item.type === "spacer") {
            const d = document.createElement("div");
            d.className = "credit-spacer";
            container.appendChild(d);
            return;
        }
        if (item.type === "epic") {
            // Epic moments grid
            const label = document.createElement("p");
            label.className = "credit-epic-label";
            label.textContent = "✦ Momen Spesial ✦";
            container.appendChild(label);

            const grid = document.createElement("div");
            grid.className = "credit-epic-grid";
            cinematicSequence.epicMoments.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = "";
                grid.appendChild(img);
            });
            container.appendChild(grid);
            return;
        }
        if (item.type === "easter") {
            const span = document.createElement("span");
            span.className = "credit-easter";
            span.textContent = item.text;
            container.appendChild(span);
            const sub = document.createElement("p");
            sub.className = "credit-easter-text";
            sub.textContent = "~ terima kasih sudah bermain ~";
            container.appendChild(sub);
            return;
        }

        const el = document.createElement(item.type === "title" ? "h1" : "p");
        el.className = {
            section: "credit-section",
            title: "credit-title",
            subtitle: "credit-subtitle",
            name: "credit-name",
            role: "credit-role",
            message: "credit-message",
        }[item.type] || "credit-role";
        el.textContent = item.text;
        container.appendChild(el);
    });
}

// ===== BUILD BG COLLAGE =====
function buildCreditBgCollage() {
    const collage = document.getElementById("creditBgCollage");
    collage.innerHTML = "";
    const allImgs = cinematicSequence.shots.map(s => s.image);
    // Ambil 12 (4x3 grid), repeat jika kurang
    for (let i = 0; i < 12; i++) {
        const cell = document.createElement("div");
        cell.className = "collage-cell";
        const img = document.createElement("img");
        img.src = allImgs[i % allImgs.length];
        img.alt = "";
        cell.appendChild(img);
        collage.appendChild(cell);
    }
}

// ===== CREDIT SCENE SCROLL ANIMATION =====
function startCreditScene() {
    const creditEl = document.getElementById("creditScene");
    const scrollWrap = document.getElementById("creditScrollWrap");
    const content = document.getElementById("creditContent");
    const collage = document.getElementById("creditBgCollage");
    const returnBtn = document.getElementById("creditReturnBtn");

    buildCreditBgCollage();
    buildCreditContent();

    creditEl.classList.remove("cinematic-hidden");
    returnBtn.classList.add("cinematic-hidden");

    // Spawn partikel pink
    spawnCreditParticles(creditEl);

    // Mulai BGM credit
    startCreditBgm();

    // Tampilkan kolase BG
    requestAnimationFrame(() => {
        setTimeout(() => collage.classList.add("collage-visible"), 100);
    });

    // Hitung total scroll: konten mulai dari bawah viewport ke atas
    // Beri waktu render dulu
    setTimeout(() => {
        const totalHeight = content.scrollHeight + window.innerHeight + 80;
        // Durasi: ~12s/1000px, min 18s, max 60s
        const duration = Math.min(Math.max(totalHeight * 12, 18000), 60000);

        // Mulai dari bawah layar
        content.style.transform = `translateY(${window.innerHeight + 40}px)`;

        let startTime = null;
        let animFrame = null;
        let scrollDone = false;

        function scrollStep(ts) {
            if (!startTime) startTime = ts;
            const elapsed = ts - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const startY = window.innerHeight + 40;
            const endY = -(content.scrollHeight + 80);
            const currentY = startY + (endY - startY) * easeLinear(progress);
            content.style.transform = `translateY(${currentY}px)`;

            if (progress < 1) {
                animFrame = requestAnimationFrame(scrollStep);
            } else {
                // Scroll selesai
                scrollDone = true;
                onCreditScrollDone();
            }
        }

        animFrame = requestAnimationFrame(scrollStep);

        // Skip with click (opsional)
        creditEl.addEventListener("click", function skipCredit() {
            if (scrollDone) return;
            if (animFrame) cancelAnimationFrame(animFrame);
            content.style.transform = `translateY(-${content.scrollHeight + 80}px)`;
            scrollDone = true;
            onCreditScrollDone();
            creditEl.removeEventListener("click", skipCredit);
        }, { once: false });

    }, 800);

    function onCreditScrollDone() {
        // Hilangkan semua tulisan credit dengan fade
        content.style.transition = "opacity 1s ease";
        content.style.opacity = "0";

        setTimeout(() => {
            // Jeda 2 detik lalu muncul tombol kembali
            setTimeout(() => {
                returnBtn.classList.remove("cinematic-hidden");
            }, 2000);
        }, 1000);
    }
}

function easeLinear(t) { return t; }

// ===== PARTIKEL PINK =====
function spawnCreditParticles(container) {
    const symbols = ["♥", "✿", "✦", "🌸", "★", "·"];
    for (let i = 0; i < 18; i++) {
        const p = document.createElement("div");
        p.className = "credit-particle";
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.setProperty("--x", (Math.random() * 100) + "%");
        p.style.setProperty("--dur", (3 + Math.random() * 5) + "s");
        p.style.animationDelay = (Math.random() * 6) + "s";
        container.appendChild(p);
    }
}

// ===== TOMBOL KEMBALI =====
document.addEventListener("DOMContentLoaded", () => {
    // Tombol kembali ke menu / halaman sebelumnya
    const btn = document.getElementById("btnBackToHome");
    if (btn) {
        btn.addEventListener("click", () => {
            stopCreditBgm();
            // Kembali ke halaman sebelumnya atau reload ke index
            if (history.length > 1) {
                window.location.href = window.location.href; // reload ke halaman ini (menu)
            } else {
                window.location.reload();
            }
        });
    }
});

// ===== HOOK KE SISTEM GAME YANG SUDAH ADA =====
// Fungsi ini menggantikan "tidak ada aksi di frame & teks terakhir"
// dengan memulai cinematic sequence → credit scene
(function hookGameEnd() {
    // Tunggu sampai script.js selesai definisikan handleDialogueAdvance
    // Kita override dengan patch di atas
    const origInterval = setInterval(() => {
        if (typeof handleDialogueAdvance !== "undefined") {
            clearInterval(origInterval);
            patchGameEnd();
        }
    }, 100);

    function patchGameEnd() {
        // Simpan referensi original (sudah di-define di script.js via function declaration)
        const origFn = handleDialogueAdvance;

        // Override global handleDialogueAdvance
        window.handleDialogueAdvance = function () {
            if (typeof dialogueClickEnabled !== "undefined" && !dialogueClickEnabled) return;

            // Cek apakah ini frame & teks terakhir
            const isLastFrame = (typeof currentFrame !== "undefined" && typeof frames !== "undefined")
                && currentFrame >= frames.length - 1;
            const frame = (typeof frames !== "undefined") ? frames[currentFrame] : null;
            const isLastText = frame && (typeof currentText !== "undefined")
                && currentText >= frame.texts.length - 1;

            if (isLastFrame && isLastText && typeof typing !== "undefined" && !typing) {
                // GAME SELESAI → mulai cinematic
                triggerEndSequence();
                return;
            }

            // Lainnya: panggil logika asli
            origFn();
        };

        // Patch event listeners (dialogueBox dan game sudah pakai handleDialogueAdvance via reference)
        // Karena di script.js keduanya call handleDialogueAdvance() langsung (bukan lewat variabel),
        // kita perlu re-patch dengan cara berbeda:
        // Hapus listener lama tidak bisa, tapi kita bisa cek di dalam fungsi global.
        // Solusi: tambahkan flag agar tidak double-fire
        console.log("[CinematicModule] Game end hook aktif.");
    }
})();

function triggerEndSequence() {
    if (window._cinematicTriggered) return;
    window._cinematicTriggered = true;

    // Pause BGM game
    const bgm = document.getElementById("bgm");
    if (bgm) {
        bgm.style.transition = "volume 1s";
        bgm.pause();
    }

    // Sembunyikan game UI
    const gameEl = document.getElementById("game");
    if (gameEl) gameEl.classList.add("hidden");

    // Mulai cinematic
    startCinematicSequence(() => {
        // Cinematic selesai → credit scene
        startCreditScene();
    });
}