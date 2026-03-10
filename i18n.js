// ===== Website-wide Internationalization =====
// Manages EN/TR/ES translations for the entire site.
// Uses data-i18n attributes on HTML elements.

(function () {
    'use strict';

    var TRANSLATIONS = {
        en: {
            // Hero
            heroSubtitle: 'Software Developer',
            heroStat: '// years building scalable systems & solutions',
            heroDesc1: '* Full-stack engineer specializing in Java, Python & Cloud.',
            heroDesc2: '* Systems, solutions, blockchain, IoT & reverse engineering.',
            heroDesc3: '* Born in Turkey, based in London, UK.',
            heroDesc4: '* Still a curious kid trying to learn everything.',
            heroDesc5: "* Don't talk about possibility \u2014 talk about time.",

            // About
            aboutTitle: '# About Me',
            aboutText1: 'Passionate and experienced software engineer with 15+ years building innovative solutions that drive business growth. I specialize in <span class="highlight">Java</span> and <span class="highlight">Python</span> development and <span class="highlight">cloud-based technologies</span>, optimizing systems for high performance and scalability.',
            aboutText2: 'Currently at <span class="highlight">Financial House</span> in London, managing projects with $300M+ in transaction volume. Committed to leveraging technical expertise in secure digital transactions within dynamic FinTech environments.',
            detailLocation: '"London, UK"',
            detailEducation: '"BSc Computer Science - METU"',
            detailLanguages: '["Turkish (Native)", "English (Proficient)"]',

            // Achievements
            ach1Title: '$6M Profit Boost',
            ach1Desc: 'System redevelopment and upgrades at ALTINBULL Investment',
            ach2Title: '$4M Token Sales',
            ach2Desc: 'Contributed to token sales in one year at AceD Community',
            ach3Title: '97% Faster',
            ach3Desc: 'Reduced backend response time from 120s to 4s at Softtech',
            ach4Title: '99.99% Uptime',
            ach4Desc: 'EC2 to EKS migration for critical services at Financial House',

            // Experience
            expRole: 'Software Developer',
            expPresent: 'Present',
            expFhCat1: 'Infrastructure & Cloud',
            expFhCat2: 'Payments & Integrations',
            expFhCat3: 'Compliance & Security',
            expFh1: 'Managed 4 software projects with $300M+ accumulated volume',
            expFh2: 'Orchestrated cloud migration \u2014 25% cost savings, 99.99% uptime',
            expFh3: 'Upgraded Java 8\u219211, Spring Boot 2.2.2\u21922.5.2 across projects',
            expFh4: 'Management of MySQL upgrade across services',
            expFh5: 'Management of MySQL collation upgrade for data consistency',
            expFh6: 'Developed Confirmation of Payee in Python/FastAPI for banking compliance',
            expFh7: 'Integrated SWIFT network \u2014 additional $10M transaction volume',
            expFh8: 'Management of credit card API upgrade',
            expFh9: 'MPI (Merchant Plug-In) integration for 3D Secure payment processing',
            expFh10: 'Integrated KYT/KYC services \u2014 60% improvement in transaction processing',
            expFh11: 'Spearheaded PCI audit compliance preparation',
            expFh12: 'Enhanced security \u2014 40% vulnerability reduction via KMS & Cloud HSM',
            expSt1: 'Refactored credit systems \u2014 97% faster response (120s \u2192 4s)',
            expSt2: 'Developed Foreign Exchange module using Java/Spring Boot microservices',
            expSt3: 'Increased app reliability by 25% with improved error-handling',
            expSt4: 'Refactored transaction history \u2014 20% backend response reduction',
            expAc1: 'Led development of wallet systems, crypto exchanges & NFT games',
            expAc2: 'Contributed to $4M in token sales over 1 year',
            expAc3: 'Migrated masternode standards to BEP20 & ERC20',
            expAc4: 'Managed team of 5 developers, 5+ projects, $1M+ budget',
            expAl1: 'Directed redevelopment of core systems using .NET Core & Python Flask',
            expAl2: 'Delivered $6M in additional profits post-revamp',
            expAl3: 'Reduced application load times by 60%',

            // Skills category names
            skillLang: 'Programming Languages',
            skillFw: 'Frameworks & Tools',
            skillCloud: 'Cloud & DevOps',
            skillDb: 'Databases',
            skillMsg: 'Messaging & Security',
            skillDs: 'Data Science',

            // Projects
            projLedgerDesc: 'Financial application for deposits & withdrawals integrating four global providers. Supports SWIFT and CHAPS networks for efficient transaction processing with domain-driven design.',
            projCompDesc: 'Compliance gateway for KYC, KYB, and KYT processing. Integrated ML techniques for enhanced verification and streamlined data collection from third-party providers.',
            projPtjName: 'Recruitment Platform - PTJ',
            projPtjOrg: 'Personal Project',
            projPtjDesc: 'Specialized recruitment platform connecting part-time job seekers with employers. Built with FastAPI & PostgreSQL, deployed on AWS EKS with auto-scaling.',
            projDovizDesc: 'High-performance async exchange matching engine using C++ and Boost.Asio, handling up to 5,000 TPS with optimized I/O for low latency and high concurrency.',
            projDiceDesc: 'Provably fair blockchain game using Web3 and smart contracts. Node.js for probability verification, ReactJS & PixiJS for an engaging interactive UI.',
            projIotName: 'Raspberry Pi QR Terminal',
            projIotOrg: 'IoT Project',
            projIotDesc: 'Python-based solution for Raspberry Pi 3 to read QR codes & barcodes via camera and send data to remote servers. Optimized image processing for varying lighting.',

            // Contact
            contactIntro: "Interested in working together? Let's connect.",

            // Footer
            footerTagline: 'Software Developer building<br>scalable systems &amp; solutions.',
            footerCopy: '\u00a9 2026 Built with passion.',

            // Chat
            chatWelcome: "Hey! I'm Osman's AI \u2014 think of me as his digital twin. Ask me anything about his experience, projects, vision, or just have a chat. I talk just like him.",
            chatPlaceholder: 'Ask me anything...',
            chatPowered: 'Powered by Claude AI',
            chatRealLink: 'Talk to the real Osman \u2192',
            chatSug1: 'tech stack?',
            chatSug2: 'your vision?',
            chatSug3: 'current work?',
            chatSug4: 'why hire you?',

            // Nav
            navAbout: 'about',
            navExperience: 'experience',
            navSkills: 'skills',
            navProjects: 'projects',
            navContact: 'contact',

            // Footer nav
            fnavAbout: 'About',
            fnavExperience: 'Experience',
            fnavSkills: 'Skills',
            fnavProjects: 'Projects',
            fnavContact: 'Contact'
        },

        tr: {
            heroSubtitle: 'Yazılım Geliştirici',
            heroStat: '// yıldır ölçeklenebilir sistemler ve çözümler geliştiriyorum',
            heroDesc1: '* Java, Python ve Cloud alanında full-stack mühendis.',
            heroDesc2: '* Sistemler, çözümler, blockchain, IoT ve tersine mühendislik.',
            heroDesc3: '* Türkiye doğumlu, Londra, İngiltere merkezli.',
            heroDesc4: '* Hala her şeyi öğrenmeye çalışan meraklı bir çocuk.',
            heroDesc5: '* Olasılıktan değil \u2014 zamandan bahset.',

            aboutTitle: '# Hakkımda',
            aboutText1: 'İş büyümesini artıran yenilikçi çözümler geliştiren 15+ yıllık deneyime sahip tutkulu yazılım mühendisi. <span class="highlight">Java</span> ve <span class="highlight">Python</span> geliştirme ile <span class="highlight">bulut tabanlı teknolojiler</span> konusunda uzmanım; yüksek performans ve ölçeklenebilirlik için sistemleri optimize ediyorum.',
            aboutText2: 'Şu anda Londra\'da <span class="highlight">Financial House</span>\'da, 300M$+ işlem hacmine sahip projeleri yönetiyorum. Dinamik FinTech ortamlarında güvenli dijital işlemler için teknik uzmanlığımı kullanmaya kararlıyım.',
            detailLocation: '"Londra, İngiltere"',
            detailEducation: '"Bilgisayar Müh. Lisans - ODTÜ"',
            detailLanguages: '["Türkçe (Ana Dil)", "İngilizce (İleri Düzey)"]',

            ach1Title: '6M$ Kâr Artışı',
            ach1Desc: 'ALTINBULL Yatırım\'da sistem yenileme ve geliştirme',
            ach2Title: '4M$ Token Satışı',
            ach2Desc: 'AceD Community\'de bir yılda token satışlarına katkı',
            ach3Title: '%97 Daha Hızlı',
            ach3Desc: 'Softtech\'te backend yanıt süresini 120s\'den 4s\'ye düşürdüm',
            ach4Title: '%99.99 Çalışma Süresi',
            ach4Desc: 'Financial House\'da kritik servislerin EC2\'den EKS\'ye göçü',

            expRole: 'Yazılım Geliştirici',
            expPresent: 'Devam Ediyor',
            expFhCat1: 'Altyapı ve Bulut',
            expFhCat2: 'Ödemeler ve Entegrasyonlar',
            expFhCat3: 'Uyumluluk ve Güvenlik',
            expFh1: '300M$+ birikimli hacme sahip 4 yazılım projesini yönettim',
            expFh2: 'Bulut göçünü yönlendirdim \u2014 %25 maliyet tasarrufu, %99.99 çalışma süresi',
            expFh3: 'Java 8\u219211, Spring Boot 2.2.2\u21922.5.2 yükseltmesini tamamladım',
            expFh4: 'Servisler arası MySQL yükseltmesi yönetimi',
            expFh5: 'Veri tutarlılığı için MySQL collation yükseltmesi yönetimi',
            expFh6: 'Bankacılık uyumu için Python/FastAPI ile Ödeme Onayı geliştirdim',
            expFh7: 'SWIFT ağını entegre ettim \u2014 ek 10M$ işlem hacmi',
            expFh8: 'Kredi kartı API yükseltmesi yönetimi',
            expFh9: '3D Secure ödeme işleme için MPI entegrasyonu',
            expFh10: 'KYT/KYC servislerini entegre ettim \u2014 işlem süresinde %60 iyileştirme',
            expFh11: 'PCI denetim uyumluluk hazırlığını yönettim',
            expFh12: 'Güvenliği artırdım \u2014 KMS ve Cloud HSM ile %40 zafiyet azaltması',
            expSt1: 'Kredi sistemlerini yeniden yapılandırdım \u2014 %97 daha hızlı yanıt (120s \u2192 4s)',
            expSt2: 'Java/Spring Boot mikroservislerle Döviz modülü geliştirdim',
            expSt3: 'Geliştirilmiş hata yönetimi ile uygulama güvenilirliğini %25 artırdım',
            expSt4: 'İşlem geçmişini yeniden yapılandırdım \u2014 %20 backend yanıt iyileştirmesi',
            expAc1: 'Cüzdan sistemleri, kripto borsaları ve NFT oyunları geliştirdim',
            expAc2: '1 yılda 4M$ token satışına katkıda bulundum',
            expAc3: 'Masternode standartlarını BEP20 ve ERC20\'ye taşıdım',
            expAc4: '5 kişilik ekip, 5+ proje, 1M$+ bütçe yönettim',
            expAl1: '.NET Core ve Python Flask ile çekirdek sistemlerin yeniden geliştirmesini yönettim',
            expAl2: 'Yenilenme sonrası 6M$ ek kâr sağladım',
            expAl3: 'Uygulama yükleme sürelerini %60 azalttım',

            skillLang: 'Programlama Dilleri',
            skillFw: 'Çatılar ve Araçlar',
            skillCloud: 'Bulut ve DevOps',
            skillDb: 'Veritabanları',
            skillMsg: 'Mesajlaşma ve Güvenlik',
            skillDs: 'Veri Bilimi',

            projLedgerDesc: 'Dört küresel sağlayıcıyı entegre eden mevduat ve para çekme finansal uygulaması. Domain-driven tasarımla verimli işlem için SWIFT ve CHAPS ağlarını destekler.',
            projCompDesc: 'KYC, KYB ve KYT işleme için uyumluluk geçidi. Gelişmiş doğrulama ve üçüncü taraf sağlayıcılardan veri toplama için ML teknikleri entegre edildi.',
            projPtjName: 'İşe Alım Platformu - PTJ',
            projPtjOrg: 'Kişisel Proje',
            projPtjDesc: 'Yarı zamanlı iş arayanları işverenlerle buluşturan özel işe alım platformu. FastAPI ve PostgreSQL ile geliştirildi, AWS EKS\'te otomatik ölçekleme ile dağıtıldı.',
            projDovizDesc: 'C++ ve Boost.Asio kullanan yüksek performanslı asenkron borsa eşleştirme motoru. Düşük gecikme ve yüksek eşzamanlılık için optimize edilmiş I/O ile 5.000 TPS\'ye kadar işlem.',
            projDiceDesc: 'Web3 ve akıllı sözleşmeler kullanan kanıtlanabilir adil blockchain oyunu. Olasılık doğrulaması için Node.js, etkileşimli arayüz için ReactJS ve PixiJS.',
            projIotName: 'Raspberry Pi QR Terminali',
            projIotOrg: 'IoT Projesi',
            projIotDesc: 'Raspberry Pi 3 için kamera ile QR kodları ve barkodları okuyan ve uzak sunuculara veri gönderen Python tabanlı çözüm. Değişen aydınlatma koşulları için optimize edilmiş görüntü işleme.',

            contactIntro: 'Birlikte çalışmak ister misiniz? Bağlantı kuralım.',

            footerTagline: 'Ölçeklenebilir sistemler ve çözümler<br>geliştiren Yazılım Geliştirici.',
            footerCopy: '\u00a9 2026 Tutkuyla yapıldı.',

            chatWelcome: 'Merhaba! Ben Osman\'ın yapay zekası \u2014 dijital ikizi olarak düşün. Deneyimi, projeleri, vizyonu hakkında her şeyi sorabilirsin. Tıpkı onun gibi konuşurum.',
            chatPlaceholder: 'Bana bir şey sor...',
            chatPowered: 'Claude AI ile güçlendirildi',
            chatRealLink: 'Gerçek Osman ile konuş \u2192',
            chatSug1: 'teknolojilerin?',
            chatSug2: 'vizyonun?',
            chatSug3: 'ne üzerinde çalışıyorsun?',
            chatSug4: 'neden seni işe alalım?',

            navAbout: 'hakkımda',
            navExperience: 'deneyim',
            navSkills: 'yetenekler',
            navProjects: 'projeler',
            navContact: 'iletişim',

            fnavAbout: 'Hakkımda',
            fnavExperience: 'Deneyim',
            fnavSkills: 'Yetenekler',
            fnavProjects: 'Projeler',
            fnavContact: 'İletişim'
        },

        es: {
            heroSubtitle: 'Desarrollador de Software',
            heroStat: '// años construyendo sistemas y soluciones escalables',
            heroDesc1: '* Ingeniero full-stack especializado en Java, Python y Cloud.',
            heroDesc2: '* Sistemas, soluciones, blockchain, IoT e ingeniería inversa.',
            heroDesc3: '* Nacido en Turquía, basado en Londres, Reino Unido.',
            heroDesc4: '* Todavía un niño curioso tratando de aprender todo.',
            heroDesc5: '* No hables de posibilidad \u2014 habla de tiempo.',

            aboutTitle: '# Sobre Mí',
            aboutText1: 'Ingeniero de software apasionado y experimentado con más de 15 años creando soluciones innovadoras que impulsan el crecimiento empresarial. Me especializo en desarrollo con <span class="highlight">Java</span> y <span class="highlight">Python</span> y <span class="highlight">tecnologías basadas en la nube</span>, optimizando sistemas para alto rendimiento y escalabilidad.',
            aboutText2: 'Actualmente en <span class="highlight">Financial House</span> en Londres, gestionando proyectos con más de $300M en volumen de transacciones. Comprometido con el uso de experiencia técnica en transacciones digitales seguras dentro de entornos FinTech dinámicos.',
            detailLocation: '"Londres, Reino Unido"',
            detailEducation: '"Lic. Ciencias de la Computación - METU"',
            detailLanguages: '["Turco (Nativo)", "Inglés (Competente)"]',

            ach1Title: '$6M Aumento de Ganancias',
            ach1Desc: 'Rediseño y mejoras del sistema en ALTINBULL Investment',
            ach2Title: '$4M Venta de Tokens',
            ach2Desc: 'Contribución a ventas de tokens en un año en AceD Community',
            ach3Title: '97% Más Rápido',
            ach3Desc: 'Tiempo de respuesta reducido de 120s a 4s en Softtech',
            ach4Title: '99.99% Disponibilidad',
            ach4Desc: 'Migración EC2 a EKS para servicios críticos en Financial House',

            expRole: 'Desarrollador de Software',
            expPresent: 'Presente',
            expFhCat1: 'Infraestructura y Nube',
            expFhCat2: 'Pagos e Integraciones',
            expFhCat3: 'Cumplimiento y Seguridad',
            expFh1: 'Gestioné 4 proyectos de software con más de $300M en volumen acumulado',
            expFh2: 'Orquesté migración a la nube \u2014 25% ahorro en costos, 99.99% disponibilidad',
            expFh3: 'Actualización de Java 8\u219211, Spring Boot 2.2.2\u21922.5.2 en todos los proyectos',
            expFh4: 'Gestión de actualización de MySQL en servicios',
            expFh5: 'Gestión de actualización de collation de MySQL para consistencia de datos',
            expFh6: 'Desarrollé Confirmación de Pago en Python/FastAPI para cumplimiento bancario',
            expFh7: 'Integré red SWIFT \u2014 volumen adicional de $10M en transacciones',
            expFh8: 'Gestión de actualización de API de tarjetas de crédito',
            expFh9: 'Integración MPI para procesamiento de pagos 3D Secure',
            expFh10: 'Integré servicios KYT/KYC \u2014 60% mejora en procesamiento de transacciones',
            expFh11: 'Lideré preparación de cumplimiento de auditoría PCI',
            expFh12: 'Mejoré seguridad \u2014 40% reducción de vulnerabilidades vía KMS y Cloud HSM',
            expSt1: 'Refactoricé sistemas de crédito \u2014 97% más rápido (120s \u2192 4s)',
            expSt2: 'Desarrollé módulo de Forex usando microservicios Java/Spring Boot',
            expSt3: 'Aumenté confiabilidad de la app un 25% con manejo de errores mejorado',
            expSt4: 'Refactoricé historial de transacciones \u2014 20% reducción de respuesta backend',
            expAc1: 'Lideré desarrollo de billeteras, exchanges cripto y juegos NFT',
            expAc2: 'Contribuí a $4M en ventas de tokens en 1 año',
            expAc3: 'Migré estándares de masternode a BEP20 y ERC20',
            expAc4: 'Gestioné equipo de 5 desarrolladores, 5+ proyectos, presupuesto de $1M+',
            expAl1: 'Dirigí rediseño de sistemas core usando .NET Core y Python Flask',
            expAl2: 'Generé $6M en ganancias adicionales post-renovación',
            expAl3: 'Reduje tiempos de carga de la aplicación un 60%',

            skillLang: 'Lenguajes de Programación',
            skillFw: 'Frameworks y Herramientas',
            skillCloud: 'Nube y DevOps',
            skillDb: 'Bases de Datos',
            skillMsg: 'Mensajería y Seguridad',
            skillDs: 'Ciencia de Datos',

            projLedgerDesc: 'Aplicación financiera para depósitos y retiros integrando cuatro proveedores globales. Soporta redes SWIFT y CHAPS para procesamiento eficiente con diseño domain-driven.',
            projCompDesc: 'Gateway de cumplimiento para procesamiento KYC, KYB y KYT. Técnicas de ML integradas para verificación mejorada y recolección de datos de proveedores externos.',
            projPtjName: 'Plataforma de Reclutamiento - PTJ',
            projPtjOrg: 'Proyecto Personal',
            projPtjDesc: 'Plataforma de reclutamiento especializada que conecta buscadores de empleo a tiempo parcial con empleadores. Construida con FastAPI y PostgreSQL, desplegada en AWS EKS con auto-escalado.',
            projDovizDesc: 'Motor de matching asíncrono de alto rendimiento usando C++ y Boost.Asio, manejando hasta 5,000 TPS con I/O optimizado para baja latencia y alta concurrencia.',
            projDiceDesc: 'Juego blockchain demostrablemente justo usando Web3 y contratos inteligentes. Node.js para verificación de probabilidad, ReactJS y PixiJS para una interfaz interactiva.',
            projIotName: 'Terminal QR Raspberry Pi',
            projIotOrg: 'Proyecto IoT',
            projIotDesc: 'Solución Python para Raspberry Pi 3 que lee códigos QR y de barras por cámara y envía datos a servidores remotos. Procesamiento de imagen optimizado para iluminación variable.',

            contactIntro: '¿Interesado en trabajar juntos? Conectemos.',

            footerTagline: 'Desarrollador de Software creando<br>sistemas y soluciones escalables.',
            footerCopy: '\u00a9 2026 Hecho con pasión.',

            chatWelcome: '¡Hola! Soy la IA de Osman \u2014 piensa en mí como su gemelo digital. Pregúntame sobre su experiencia, proyectos, visión o simplemente charla. Hablo como él.',
            chatPlaceholder: 'Pregúntame lo que quieras...',
            chatPowered: 'Potenciado por Claude AI',
            chatRealLink: 'Habla con el Osman real \u2192',
            chatSug1: '¿tu stack?',
            chatSug2: '¿tu visión?',
            chatSug3: '¿trabajo actual?',
            chatSug4: '¿por qué contratarte?',

            navAbout: 'sobre mí',
            navExperience: 'experiencia',
            navSkills: 'habilidades',
            navProjects: 'proyectos',
            navContact: 'contacto',

            fnavAbout: 'Sobre Mí',
            fnavExperience: 'Experiencia',
            fnavSkills: 'Habilidades',
            fnavProjects: 'Proyectos',
            fnavContact: 'Contacto'
        }
    };

    var currentLang = 'en';

    function detectLang() {
        var saved = localStorage.getItem('site-lang');
        if (saved && TRANSLATIONS[saved]) return saved;
        var nav = (navigator.language || '').toLowerCase();
        if (nav.startsWith('tr')) return 'tr';
        if (nav.startsWith('es')) return 'es';
        return 'en';
    }

    function applyLang(lang) {
        if (!TRANSLATIONS[lang]) return;
        currentLang = lang;
        localStorage.setItem('site-lang', lang);
        var t = TRANSLATIONS[lang];

        // Apply all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                // Check if value contains HTML
                if (t[key].indexOf('<') !== -1) {
                    el.innerHTML = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Apply data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Apply data-i18n-msg (for data-msg attributes on suggestion buttons)
        document.querySelectorAll('[data-i18n-msg]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-msg');
            if (t[key] !== undefined) {
                // Map suggestion button text to full question for the lang
                el.textContent = t[key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'tr' ? 'tr' : lang === 'es' ? 'es' : 'en';

        // Update flag active states
        document.querySelectorAll('.persona-flag').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Notify persona.js of language change
        if (window.switchPersonaLang) {
            window.switchPersonaLang(lang);
        }
    }

    function init() {
        // Wire up flag buttons
        document.querySelectorAll('.persona-flag').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyLang(btn.getAttribute('data-lang'));
            });
        });

        // Initial language
        applyLang(detectLang());
    }

    // Expose for external use
    window.siteI18n = { apply: applyLang, current: function () { return currentLang; } };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
