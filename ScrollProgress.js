class ScrollProgress {

    htmlRootEl = document.documentElement;

    bodyEl = document.body;

    progressEl = document.querySelector('#progress');

    scroll;

    /**
     * @param color
     * @default color shade of cyan #2596be
     */
    constructor(color = '2596be') {

        this.setProgressBarStyles()

        this.color = color

        this.progressEl.style.background = `linear-gradient(to right, #${this.color} var(--scroll), transparent 0)`;

        this.scrollEvent('scroll')
    }

    scrollEvent(event) {
        document.addEventListener(event, () => {
            this.scroll = (this.htmlRootEl['scrollTop'] || this.bodyEl["scrollTop"]) / ((this.htmlRootEl['scrollHeight'] || this.bodyEl["scrollHeight"]) - this.htmlRootEl.clientHeight) * 100;
            this.progressEl.style.setProperty('--scroll', this.scroll + '%');
        });
    }

    setProgressBarStyles() {
        this.progressEl.style.position = 'fixed';
        this.progressEl.style.width = '100%';
        this.progressEl.style.zIndex = '20';
        this.progressEl.style.top = '0';
        this.progressEl.style.left = '0';
        this.progressEl.style.height = '5px';
    }

}
