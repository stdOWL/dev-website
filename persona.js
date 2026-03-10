// ===== Floating Persona Character =====
// Osman's snarky AI persona that reacts to scroll behavior
// Supports: English, Turkish, Spanish (auto-detected from browser)

(function () {
    'use strict';

    const CONFIG = {
        BUBBLE_DISPLAY_MS: 5000,
        INACTIVITY_TIMEOUT_MS: 12000,
        ENTRANCE_DELAY_MS: 400,
        COOLDOWN_MS: 3000,
    };

    // ===== Multilingual Messages =====
    const MESSAGES = {
        en: {
            down: [
                [
                    { at: 0.10, text: "hey i am osman's persona you can ask anything" },
                    { at: 0.30, text: "pff i started to get boring hey" },
                    { at: 0.50, text: "still want to read everything?" },
                    { at: 0.70, text: "oh you really love reading ha?" },
                    { at: 0.92, text: "okey now you can talk there is not much to read" },
                ],
                [
                    { at: 0.10, text: "oh you're back for more? nice" },
                    { at: 0.30, text: "i see you scrolling... i see everything" },
                    { at: 0.50, text: "you know you can just click me and ask right?" },
                    { at: 0.70, text: "at this point you deserve a coffee break" },
                    { at: 0.92, text: "end of the road again... wanna chat this time?" },
                ],
                [
                    { at: 0.10, text: "third time's the charm they say" },
                    { at: 0.30, text: "seriously though, i built some cool stuff" },
                    { at: 0.50, text: "fun fact: this portfolio has more code than some of my projects" },
                    { at: 0.70, text: "you're more persistent than my CI/CD pipeline" },
                    { at: 0.92, text: "ok at this point just hire me already" },
                ],
            ],
            up: [
                [
                    { at: 0.80, text: "really are we starting again?" },
                    { at: 0.65, text: "okey you have some issues about reading.." },
                    { at: 0.50, text: "are you focused on details like me? i like that" },
                    { at: 0.35, text: "hey doing is much more fun then reading???" },
                    { at: 0.20, text: "okey i have a girlfriend you know that right?" },
                    { at: 0.08, text: "okey you probably a crawler bot or something" },
                ],
                [
                    { at: 0.80, text: "going up again? respect the dedication" },
                    { at: 0.65, text: "missed something? or just enjoying the scroll?" },
                    { at: 0.50, text: "i promise the top section didn't change since you left" },
                    { at: 0.35, text: "you scroll like you're debugging... very thorough" },
                    { at: 0.20, text: "at this point we should exchange numbers" },
                    { at: 0.08, text: "ok recruiter confirmed. my email is in the contact section btw" },
                ],
                [
                    { at: 0.80, text: "the return of the scroll king" },
                    { at: 0.65, text: "you know what, i respect the hustle" },
                    { at: 0.50, text: "plot twist: the real portfolio was the scrolling we did along the way" },
                    { at: 0.35, text: "my scroll wheel is getting worried about yours" },
                    { at: 0.20, text: "i'm running out of things to say... that's a first" },
                    { at: 0.08, text: "fine you win. click me. let's actually talk." },
                ],
            ],
        },
        tr: {
            down: [
                [
                    { at: 0.10, text: "selam ben osman'in dijital ikizi, ne istersen sorabilirsin" },
                    { at: 0.30, text: "pff sıkılmaya mı başladın yoksa" },
                    { at: 0.50, text: "hala her şeyi okumak mı istiyorsun?" },
                    { at: 0.70, text: "vay be okumayı gerçekten seviyorsun ha?" },
                    { at: 0.92, text: "tamam artık konuşabiliriz okunacak pek bir şey kalmadı" },
                ],
                [
                    { at: 0.10, text: "aa tekrar mı geldin? güzel" },
                    { at: 0.30, text: "scroll yaptığını görüyorum... her şeyi görüyorum" },
                    { at: 0.50, text: "bana tıklayıp direkt sorabilirsin biliyor musun?" },
                    { at: 0.70, text: "bu noktada bir kahve molası hak ettin" },
                    { at: 0.92, text: "yine sona geldik... bu sefer sohbet edelim mi?" },
                ],
                [
                    { at: 0.10, text: "üçüncüsü keramet derler" },
                    { at: 0.30, text: "şaka bir yana gerçekten güzel şeyler yaptım" },
                    { at: 0.50, text: "bu portfolyoda bazı projelerimden daha fazla kod var" },
                    { at: 0.70, text: "CI/CD pipeline'ımdan daha inatçısın" },
                    { at: 0.92, text: "tamam bu noktada direkt beni işe al" },
                ],
            ],
            up: [
                [
                    { at: 0.80, text: "cidden tekrar mı başlıyoruz?" },
                    { at: 0.65, text: "okuma konusunda bazı sorunların var galiba.." },
                    { at: 0.50, text: "sen de benim gibi detaylara takılan birisin ha? beğendim" },
                    { at: 0.35, text: "yapmak okumaktan çok daha eğlenceli değil mi???" },
                    { at: 0.20, text: "kız arkadaşım var haberin olsun" },
                    { at: 0.08, text: "sen büyük ihtimalle bir crawler botsun" },
                ],
                [
                    { at: 0.80, text: "yine yukarı mı? azmine saygı duyuyorum" },
                    { at: 0.65, text: "bir şey mi kaçırdın yoksa scroll keyfin mi var?" },
                    { at: 0.50, text: "söz veriyorum üst kısım gittiğinden beri değişmedi" },
                    { at: 0.35, text: "debug yapar gibi scroll yapıyorsun... çok titiz" },
                    { at: 0.20, text: "bu noktada numara değişmeliyiz" },
                    { at: 0.08, text: "tamam recruiter olduğun kesinleşti. email'im contact kısmında" },
                ],
                [
                    { at: 0.80, text: "scroll kralının dönüşü" },
                    { at: 0.65, text: "biliyor musun sana saygı duyuyorum" },
                    { at: 0.50, text: "plot twist: asıl portfolyo yol boyunca yaptığımız scroll'muş" },
                    { at: 0.35, text: "benim scroll tekerleğim seninkinden endişe ediyor" },
                    { at: 0.20, text: "söyleyecek şeyim kalmıyor... bu ilk defa oluyor" },
                    { at: 0.08, text: "tamam sen kazandın. bana tıkla. gerçekten konuşalım." },
                ],
            ],
        },
        es: {
            down: [
                [
                    { at: 0.10, text: "hey soy la persona digital de osman, pregúntame lo que quieras" },
                    { at: 0.30, text: "pff ya me estoy aburriendo eh" },
                    { at: 0.50, text: "¿todavía quieres leer todo?" },
                    { at: 0.70, text: "vaya realmente te encanta leer eh?" },
                    { at: 0.92, text: "bueno ya puedes hablar no queda mucho por leer" },
                ],
                [
                    { at: 0.10, text: "¿volviste por más? genial" },
                    { at: 0.30, text: "te veo haciendo scroll... lo veo todo" },
                    { at: 0.50, text: "sabes que puedes hacer clic en mí y preguntar ¿verdad?" },
                    { at: 0.70, text: "a estas alturas te mereces un café" },
                    { at: 0.92, text: "otra vez al final... ¿quieres chatear esta vez?" },
                ],
                [
                    { at: 0.10, text: "a la tercera va la vencida dicen" },
                    { at: 0.30, text: "en serio construí cosas bastante geniales" },
                    { at: 0.50, text: "dato curioso: este portfolio tiene más código que algunos de mis proyectos" },
                    { at: 0.70, text: "eres más persistente que mi pipeline de CI/CD" },
                    { at: 0.92, text: "ok a estas alturas simplemente contrátame" },
                ],
            ],
            up: [
                [
                    { at: 0.80, text: "¿en serio vamos a empezar de nuevo?" },
                    { at: 0.65, text: "tienes algunos problemas con la lectura.." },
                    { at: 0.50, text: "¿te fijas en los detalles como yo? me gusta eso" },
                    { at: 0.35, text: "hacer es mucho más divertido que leer ¿no???" },
                    { at: 0.20, text: "oye tengo novia ¿lo sabías?" },
                    { at: 0.08, text: "seguramente eres un bot crawler o algo así" },
                ],
                [
                    { at: 0.80, text: "¿subiendo otra vez? respeto la dedicación" },
                    { at: 0.65, text: "¿te perdiste algo o solo disfrutas el scroll?" },
                    { at: 0.50, text: "te prometo que la parte de arriba no cambió desde que te fuiste" },
                    { at: 0.35, text: "haces scroll como si estuvieras debuggeando... muy minucioso" },
                    { at: 0.20, text: "a estas alturas deberíamos intercambiar números" },
                    { at: 0.08, text: "ok confirmado que eres recruiter. mi email está en la sección de contacto" },
                ],
                [
                    { at: 0.80, text: "el regreso del rey del scroll" },
                    { at: 0.65, text: "¿sabes qué? respeto tu esfuerzo" },
                    { at: 0.50, text: "plot twist: el verdadero portfolio era el scroll que hicimos en el camino" },
                    { at: 0.35, text: "mi rueda de scroll está preocupada por la tuya" },
                    { at: 0.20, text: "me estoy quedando sin cosas que decir... eso es nuevo" },
                    { at: 0.08, text: "ok tú ganas. haz clic en mí. hablemos de verdad." },
                ],
            ],
        },
    };

    // Detect language from browser
    function detectLang() {
        const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        if (lang.startsWith('tr')) return 'tr';
        if (lang.startsWith('es')) return 'es';
        return 'en';
    }

    let currentLang = detectLang();
    let DOWN_SETS = MESSAGES[currentLang].down;
    let UP_SETS = MESSAGES[currentLang].up;

    function switchLang(newLang) {
        if (!MESSAGES[newLang] || newLang === currentLang) return;
        currentLang = newLang;
        DOWN_SETS = MESSAGES[currentLang].down;
        UP_SETS = MESSAGES[currentLang].up;
        // Reset message indices so new language plays from current position
        downIdx = -1;
        upIdx = -1;
        downSet = 0;
        upSet = 0;
        // Update active flag
        document.querySelectorAll('.persona-flag').forEach(f => {
            f.classList.toggle('active', f.dataset.lang === currentLang);
        });
    }

    // State
    let state = 'HIDDEN';
    let lastScrollY = window.scrollY;
    let scrollDir = null;
    let downIdx = -1;
    let upIdx = -1;
    let downSet = 0;
    let upSet = 0;
    let maxPct = 0;
    let lastMsgTime = 0;
    let inactivityTimer = null;
    let bubbleTimer = null;
    let chatIsOpen = false;
    let accumDelta = 0;

    // DOM
    const container = document.getElementById('personaContainer');
    const bubble = document.getElementById('personaBubble');
    const bubbleText = document.getElementById('personaBubbleText');
    const avatar = document.getElementById('personaAvatar');

    if (!container || !bubble || !bubbleText || !avatar) return;

    function scrollPercent() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        return max <= 0 ? 0 : window.scrollY / max;
    }

    function show() {
        if (state === 'HIDDEN' || state === 'DISAPPEARING') {
            state = 'APPEARING';
            container.classList.add('active');
            setTimeout(() => {
                if (state === 'APPEARING') state = 'IDLE';
            }, CONFIG.ENTRANCE_DELAY_MS);
        }
        resetInactivity();
    }

    function hide() {
        if (chatIsOpen) return;
        if (state === 'HIDDEN' || state === 'DISAPPEARING') return;
        state = 'DISAPPEARING';
        closeBubble();
        container.classList.remove('active');
        setTimeout(() => {
            if (state === 'DISAPPEARING') state = 'HIDDEN';
        }, CONFIG.ENTRANCE_DELAY_MS);
    }

    function sayBubble(text) {
        if (chatIsOpen) return;
        const now = Date.now();
        if (now - lastMsgTime < CONFIG.COOLDOWN_MS) return;
        lastMsgTime = now;

        if (bubbleTimer) clearTimeout(bubbleTimer);

        bubbleText.textContent = text;
        bubble.classList.add('visible');
        state = 'SPEAKING';

        bubbleTimer = setTimeout(closeBubble, CONFIG.BUBBLE_DISPLAY_MS);
        resetInactivity();
    }

    function closeBubble() {
        bubble.classList.remove('visible');
        if (state === 'SPEAKING') state = 'IDLE';
        if (bubbleTimer) { clearTimeout(bubbleTimer); bubbleTimer = null; }
    }

    function resetInactivity() {
        if (inactivityTimer) clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(hide, CONFIG.INACTIVITY_TIMEOUT_MS);
    }

    function checkDown(pct) {
        const msgs = DOWN_SETS[downSet % DOWN_SETS.length];
        for (let i = downIdx + 1; i < msgs.length; i++) {
            if (pct >= msgs[i].at) {
                downIdx = i;
                if (upIdx > -1) { upSet++; upIdx = -1; }
                sayBubble(msgs[i].text);
                break;
            }
        }
    }

    function checkUp(pct) {
        const msgs = UP_SETS[upSet % UP_SETS.length];
        for (let i = upIdx + 1; i < msgs.length; i++) {
            if (pct <= msgs[i].at) {
                upIdx = i;
                if (downIdx > -1) { downSet++; downIdx = -1; }
                sayBubble(msgs[i].text);
                break;
            }
        }
    }

    function onScroll() {
        const y = window.scrollY;
        const delta = y - lastScrollY;
        lastScrollY = y;
        const pct = scrollPercent();

        if (pct > maxPct) maxPct = pct;

        accumDelta += delta;
        if (accumDelta > 250) {
            scrollDir = 'down';
            accumDelta = 0;
        } else if (accumDelta < -250) {
            scrollDir = 'up';
            accumDelta = 0;
        }

        if (pct < 0.08 && state === 'HIDDEN') return;

        if (state === 'HIDDEN') show();
        resetInactivity();

        if (scrollDir === 'down') checkDown(pct);
        else if (scrollDir === 'up' && maxPct > 0.5) checkUp(pct);
    }

    // Debounced scroll via rAF
    let raf = null;
    window.addEventListener('scroll', () => {
        if (raf) return;
        raf = requestAnimationFrame(() => { onScroll(); raf = null; });
    }, { passive: true });

    // Click avatar → toggle chat window
    avatar.addEventListener('click', () => {
        if (typeof toggleChat === 'function') {
            chatIsOpen = !chatIsOpen;
            toggleChat(chatIsOpen);
            closeBubble();
            if (chatIsOpen && state === 'HIDDEN') show();
        }
    });

    // Listen for chat close from the "Talk to real Osman" link
    const realLink = document.getElementById('chatRealLink');
    if (realLink) {
        realLink.addEventListener('click', () => { chatIsOpen = false; });
    }

    // Expose language switcher for i18n.js integration
    window.switchPersonaLang = switchLang;
})();
