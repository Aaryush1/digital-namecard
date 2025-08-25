type FilterState = {
    active: Set<string>;
};

function setupFilters() {
    const container = document.querySelector<HTMLElement>('[data-filters]');
    if (!container) return;
    const chips = Array.from(container.querySelectorAll<HTMLButtonElement>('[data-chip]'));
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-techs]'));

    const state: FilterState = { active: new Set() };

    function apply() {
        if (state.active.size === 0) {
            cards.forEach((c) => c.classList.remove('is-hidden'));
            return;
        }
        cards.forEach((c) => {
            const techs = (c.getAttribute('data-techs') || '').split(',');
            const match = Array.from(state.active).every((t) => techs.includes(t));
            c.classList.toggle('is-hidden', !match);
        });
    }

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const tech = chip.getAttribute('data-chip');
            if (!tech) return;
            const pressed = chip.getAttribute('aria-pressed') === 'true';
            chip.setAttribute('aria-pressed', (!pressed).toString());
            if (pressed) state.active.delete(tech); else state.active.add(tech);
            apply();
        });
    });
}

window.addEventListener('DOMContentLoaded', setupFilters);
