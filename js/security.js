/**
 * Security Deterrents
 * NOTE: You cannot fully prevent screenshots or DevTools on the web.
 * These are only deterrents for casual users.
 */

// Disable right click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Detect DevTools (soft detection)
setInterval(() => {
    const devtoolsOpen =
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160;

    if (devtoolsOpen) {
        // Optional: hide content instead of alert
        // document.body.innerHTML = '';
    }
}, 1000);

// Block common DevTools shortcuts
document.addEventListener('keydown', (event) => {

    // F12
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        return false;
    }

    // Ctrl+Shift+I / C / J
    if (event.ctrlKey && event.shiftKey &&
        ['I', 'C', 'J'].includes(event.key)) {
        event.preventDefault();
        return false;
    }

    // Ctrl+U
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        return false;
    }
});

// PrintScreen (deterrent only)
document.addEventListener('keyup', (event) => {
    if (event.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
    }
});
