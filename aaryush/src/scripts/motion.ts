const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function sectionVisibility() {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section.section'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    sections.forEach((s) => observer.observe(s));
}

function revealOnScroll() {
    if (prefersReduced) return;
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                const delay = Number(el.getAttribute('data-delay') || '0');
                el.style.transition = `transform 520ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 520ms ${delay}ms`;
                el.style.transform = 'translateY(0) scale(1)';
                el.style.opacity = '1';
                observer.unobserve(el);
            }
        }
    }, { threshold: 0.15 });

    revealEls.forEach((el, i) => {
        el.setAttribute('data-delay', String((i % 6) * 60));
        observer.observe(el);
    });
}

function heroParallax() {
    if (prefersReduced) return;
    const layer = document.querySelector<HTMLElement>('[data-parallax]');
    if (!layer) return;
    const onScroll = () => {
        const y = window.scrollY * 0.15;
        layer.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

window.addEventListener('DOMContentLoaded', () => {
    heroParallax();
    revealOnScroll();
    sectionVisibility();
});
