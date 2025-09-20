'use strict';

const CONFIG = { autoplayDelay: 4000, debounceDelay: 16 };

const utils = {
    throttle(func, limit) {
        let inThrottle; return function (...args) { if (!inThrottle) { func.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } };
    }
};

class SplitSlider {
    constructor() {
        this.container = document.getElementById('split-slider');
        this.items = document.querySelectorAll('#split-slider .ss-item');
        this.textBlocks = document.querySelectorAll('#split-slider .ss-text');
        this.textsContainer = this.container ? this.container.querySelector('.ss-texts') : null;
        this.currentIndex = 0;
        this.timer = null;
        if (this.container && this.items.length) this.init();
    }

    init() {
        this.bindEvents();
        this.startAutoplay();
        this.syncText();
        window.addEventListener('resize', utils.throttle(() => this.syncText(), CONFIG.debounceDelay));
    }

    bindEvents() {
        this.items.forEach((item, index) => {
            item.addEventListener('click', () => { this.goTo(index); this.restartAutoplay(); });
        });

        const textSide = this.container.querySelector('.split-slider__right');
        if (textSide) {
            textSide.addEventListener('mouseenter', () => this.pauseAutoplay());
            textSide.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    goTo(index) {
        if (index === this.currentIndex) return;
        this.items[this.currentIndex]?.classList.remove('active');
        this.currentIndex = index % this.items.length;
        if (this.currentIndex < 0) this.currentIndex = this.items.length - 1;
        this.items[this.currentIndex]?.classList.add('active');
        this.syncText();
    }

    next() { this.goTo((this.currentIndex + 1) % this.items.length); }

    startAutoplay() { if (!this.timer) this.timer = setInterval(() => this.next(), CONFIG.autoplayDelay); }
    pauseAutoplay() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
    restartAutoplay() { this.pauseAutoplay(); this.startAutoplay(); }

    syncText() {
        if (!this.textBlocks || !this.textBlocks.length) return;
        this.textBlocks.forEach(tb => tb.classList.remove('active'));
        const activeText = this.container.querySelector(`.ss-text[data-index="${this.currentIndex}"]`);
        if (!activeText) return;
        activeText.classList.add('active');

        const isOverlayMode = window.innerWidth <= 1024;
        if (isOverlayMode) {
            const hostItem = this.items[this.currentIndex];
            if (hostItem && activeText.parentElement !== hostItem) hostItem.appendChild(activeText);
        } else if (this.textsContainer) {
            this.textBlocks.forEach(tb => { if (tb.parentElement !== this.textsContainer) this.textsContainer.appendChild(tb); });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { new SplitSlider(); });


