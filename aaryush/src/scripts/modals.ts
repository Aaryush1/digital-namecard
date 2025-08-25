function getDialog(targetId: string): HTMLDialogElement | null {
    return document.getElementById(targetId) as HTMLDialogElement | null;
}

document.addEventListener('click', (event) => {
    const openTrigger = (event.target as HTMLElement).closest('[data-open-modal]') as HTMLElement | null;
    if (openTrigger) {
        const targetId = openTrigger.getAttribute('data-open-modal');
        if (targetId) {
            const dialog = getDialog(targetId);
            if (dialog && typeof dialog.showModal === 'function') {
                // Compute origin from the card position
                const card = openTrigger.closest('.project-card') as HTMLElement | null;
                if (card) {
                    const rect = card.getBoundingClientRect();
                    const ox = rect.left + rect.width / 2;
                    const oy = rect.top + rect.height / 3;
                    dialog.style.setProperty('--ox', `${(ox / window.innerWidth) * 100}%`);
                    dialog.style.setProperty('--oy', `${(oy / window.innerHeight) * 100}%`);
                }
                dialog.showModal();
            }
        }
        return;
    }

    const closer = (event.target as HTMLElement).closest('[data-close-modal]');
    if (closer) {
        const dialog = (event.target as HTMLElement).closest('dialog') as HTMLDialogElement | null;
        if (dialog) {
            dialog.setAttribute('closing', 'true');
            dialog.addEventListener('animationend', () => {
                dialog.removeAttribute('closing');
                dialog.close();
            }, { once: true });
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const dialogs = Array.from(document.querySelectorAll('dialog')) as HTMLDialogElement[];
    dialogs.forEach((dialog) => {
        dialog.addEventListener('click', (e) => {
            const rect = dialog.getBoundingClientRect();
            const clickInDialog =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;
            if (!clickInDialog) {
                dialog.setAttribute('closing', 'true');
                dialog.addEventListener('animationend', () => {
                    dialog.removeAttribute('closing');
                    dialog.close();
                }, { once: true });
            }
        });
    });
});
