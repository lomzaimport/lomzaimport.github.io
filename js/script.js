document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.addEventListener('mouseover', () => {
            const altText = img.alt;
            img.nextElementSibling.textContent = altText;
        });

        img.addEventListener('mouseout', () => {
            img.nextElementSibling.textContent = '';
        });
    });
});
