// ===== Apple-Style Scroll-Driven Animations =====
// Sets CSS custom properties per section based on scroll position.
// CSS uses these variables for transforms — scrolling up reverses naturally.

(function () {
    'use strict';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var SECTIONS = [
        { sel: '.hero',       id: 'hero'       },
        { sel: '#about',      id: 'about'      },
        { sel: '#experience', id: 'experience' },
        { sel: '#skills',     id: 'skills'     },
        { sel: '#projects',   id: 'projects'   },
        { sel: '#contact',    id: 'contact'    }
    ];

    var sections = [];
    var progressBar = null;

    function init() {
        progressBar = document.getElementById('scrollProgressBar');

        SECTIONS.forEach(function (cfg) {
            var el = document.querySelector(cfg.sel);
            if (!el) return;

            // Collect scroll-child elements inside this section
            var children = el.querySelectorAll('[data-scroll-child]');

            sections.push({ el: el, id: cfg.id, children: children });
        });

        requestAnimationFrame(tick);
    }

    function tick() {
        update();
        requestAnimationFrame(tick);
    }

    function clamp(v, min, max) {
        return v < min ? min : v > max ? max : v;
    }

    function update() {
        var vh = window.innerHeight;
        var scrollY = window.scrollY;
        var docH = document.documentElement.scrollHeight;

        // Global progress bar
        var global = docH <= vh ? 0 : scrollY / (docH - vh);
        if (progressBar) {
            progressBar.style.transform = 'scaleX(' + global.toFixed(4) + ')';
        }

        for (var i = 0; i < sections.length; i++) {
            var sec = sections[i];
            var el = sec.el;
            var rect = el.getBoundingClientRect();
            var top = rect.top;
            var height = rect.height;

            // entry: 0 when section top is at viewport bottom, 1 when 40% into viewport
            var entry = clamp((vh - top) / (vh * 0.6), 0, 1);

            // exit: 0 when section top is at viewport top, 1 when section scrolled half out
            var exit = clamp(-top / (height * 0.5), 0, 1);

            el.style.setProperty('--scroll-entry', entry.toFixed(4));
            el.style.setProperty('--scroll-exit', exit.toFixed(4));

            if (entry > 0.05) {
                el.classList.add('scroll-visible');
            } else {
                el.classList.remove('scroll-visible');
            }

            // Staggered children — each child gets its own delayed progress
            var children = sec.children;
            if (children.length > 0) {
                for (var j = 0; j < children.length; j++) {
                    var child = children[j];
                    var childRect = child.getBoundingClientRect();
                    var childEntry = clamp((vh - childRect.top) / (vh * 0.5), 0, 1);

                    child.style.setProperty('--child-entry', childEntry.toFixed(4));

                    if (childEntry > 0.05) {
                        child.classList.add('scroll-child-visible');
                    } else {
                        child.classList.remove('scroll-child-visible');
                    }
                }
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
