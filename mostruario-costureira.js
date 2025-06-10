window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const msg = document.createElement('div');
    msg.textContent = 'Ateliê Mary Modas!';
    msg.style.position = 'fixed';
    msg.style.top = '20px';
    msg.style.left = '50%';
    msg.style.transform = 'translateX(-50%)';
    msg.style.background = '#b48a78';
    msg.style.color = '#fff';
    msg.style.padding = '12px 32px';
    msg.style.borderRadius = '24px';
    msg.style.fontSize = '1.1rem';
    msg.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
    msg.style.opacity = '0';
    msg.style.transition = 'opacity 0.7s';
    msg.style.zIndex = '9999';
    document.body.appendChild(msg);
    setTimeout(() => { msg.style.opacity = '1'; }, 400);
    setTimeout(() => { msg.style.opacity = '0'; }, 3200);
    setTimeout(() => { msg.remove(); }, 4000);

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const btnTopo = document.createElement('button');
    btnTopo.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btnTopo.style.position = 'fixed';
    btnTopo.style.bottom = '32px';
    btnTopo.style.right = '32px';
    btnTopo.style.background = '#a06c5a';
    btnTopo.style.color = '#fff';
    btnTopo.style.border = 'none';
    btnTopo.style.borderRadius = '50%';
    btnTopo.style.width = '48px';
    btnTopo.style.height = '48px';
    btnTopo.style.fontSize = '1.4rem';
    btnTopo.style.cursor = 'pointer';
    btnTopo.style.boxShadow = '0 2px 12px rgba(0,0,0,0.13)';
    btnTopo.style.display = 'none';
    btnTopo.style.zIndex = '9999';
    document.body.appendChild(btnTopo);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });
    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const galeriaImgs = document.querySelectorAll('.galeria img');
    galeriaImgs.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '10000';
            overlay.style.cursor = 'zoom-out';
            const imgZoom = document.createElement('img');
            imgZoom.src = this.src;
            imgZoom.alt = this.alt;
            imgZoom.style.maxWidth = '90vw';
            imgZoom.style.maxHeight = '85vh';
            imgZoom.style.borderRadius = '16px';
            imgZoom.style.boxShadow = '0 4px 32px rgba(0,0,0,0.25)';
            overlay.appendChild(imgZoom);
            overlay.addEventListener('click', () => overlay.remove());
            document.body.appendChild(overlay);
        });
    });
});