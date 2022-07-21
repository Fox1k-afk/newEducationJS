const tabsEl = document.querySelector('#tabs');

class Tabs {
	#rootEl;
	#navElements;
	#contentElements;
	#activeTabIndex = 0;

	static CLASS_ITEM = 'tabs-item';
	static CLASS_ITEM_ACTIVE = 'tabs-item-active';
	static CLASS_CONTENT = 'tabs-item-content';
	static CLASS_OPEN = 'open';

	constructor(rootEl, defaultTabIndex) {
		this.#rootEl = rootEl;

		const [navEl, contentEl] = this.#rootEl.children;

		//Html collection
		// this.#navElements = navEl.children;
		// this.#contentElements = contentEl.children;

		// Transform into Array
		this.#navElements = Array.from(navEl.children);
		this.#contentElements = Array.from(contentEl.children);

		if (defaultTabIndex) {
			this.#activeTabIndex = defaultTabIndex;
		}

		this.bindStyles();
		this.bindEvents();
		this.showActiveTabByIndex(this.#activeTabIndex);
	}

	bindStyles() {
		this.#navElements.forEach((navElement) => {
			navElement.classList.add(Tabs.CLASS_ITEM);
		});
		this.#contentElements.forEach((contentElement) => {
			contentElement.classList.add(Tabs.CLASS_CONTENT);
		});
	}
	bindEvents() {
		const [navEl] = this.#rootEl.children;

		this.#rootEl.addEventListener('click', (e) => this.onNavElClick(e));
	}

	onNavElClick(e) {
		const navEl = e.target;

		if (navEl.classList.contains(Tabs.CLASS_ITEM)) {
			const newActiveTabIndex = this.getNavItemElIndex(navEl);

			this.hideActiveTab(this.#activeTabIndex);
			this.showActiveTabByIndex(newActiveTabIndex);
		}
	}

	getNavItemElIndex(currentButtonEl) {
		// this.#navElements.indexOf(navEl);

		for (let i = 0; i < this.#navElements.length; i++) {
			const buttonEl = this.#navElements[i];

			if (buttonEl === currentButtonEl) {
				return i;
			}
		}
	}
	showActiveTabByIndex(index) {
		const navElement = this.#navElements[index]; //  в отдельную функцию повторяется
		const contentElement = this.#contentElements[index]; //  в отдельную функцию

		navElement.classList.add(Tabs.CLASS_ITEM_ACTIVE);
		contentElement.classList.add(Tabs.CLASS_OPEN);
		this.#activeTabIndex = index;
	}
	hideActiveTab(index) {
		// const navElement = this.#rootEl.querySelector('.' + Tabs.CLASS_ITEM_ACTIVE);
		// const contentElement = this.#rootEl.querySelector('.' + Tabs.CLASS_OPEN);

		const navElement = this.#navElements[index]; //  в отдельную функцию
		const contentElement = this.#contentElements[index]; //  в отдельную функцию

		if (navElement && contentElement) {
			navElement.classList.remove(Tabs.CLASS_ITEM_ACTIVE);
			contentElement.classList.remove(Tabs.CLASS_OPEN);
		}
	}
}

new Tabs(tabsEl, 0);
