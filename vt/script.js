function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    // Trigger firecracker animation
    const firecrackers = document.querySelector('.firecrackers');
    for (let i = 0; i < 20; i++) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        firecracker.style.left = `${Math.random() * 100}%`;
        firecracker.style.top = `${Math.random() * 100}%`;
        firecracker.style.animationDelay = `${Math.random() * 0.5}s`;
        firecrackers.appendChild(firecracker);
    }

    // Remove firecrackers after animation
    setTimeout(() => {
        firecrackers.innerHTML = '';
    }, 1000);
}

function closeEnvelope(event) {
    event.stopPropagation(); // Prevent envelope from reopening
    const envelope = document.querySelector('.envelope');
    envelope.classList.remove('open');
}