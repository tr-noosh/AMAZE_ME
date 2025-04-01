 const gallery = document.querySelector('.gallery-container');
const items = document.querySelectorAll('.gallery-item');
const previewBox = document.getElementById('previewBox');
const previewImage = document.getElementById('previewImage');
const dropZone = document.getElementById('drop-zone');

var mx = 0;
var my = 0;

window.addEventListener('dragover', (e) => {
    e.preventDefault();
    mx = e.clientX;
    my = e.clientY;
    const rect = dropZone.getBoundingClientRect();
    
    if (e.clientY >= rect.top && e.clientY <= rect.bottom &&
        e.clientX >= rect.left && e.clientX <= rect.right) {
        dropZone.classList.add('drag-over');
    } else {
        dropZone.classList.remove('drag-over');
    }
});

items.forEach(item => {
    const rect = gallery.getBoundingClientRect();
    const itemWidth = rect.width * 0.4;
    const x = Math.random() * (rect.width - itemWidth);
    const y = Math.random() * (rect.height - itemWidth);
    
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    item.addEventListener('dragstart', (e) => {
        item.classList.add('dragging');
        e.dataTransfer.setData('text/plain', '');
        const rect = item.getBoundingClientRect();
        e.dataTransfer.setDragImage(item, rect.width / 2, rect.height / 2);
    });

    item.addEventListener('dragend', (e) => {
        const rect = dropZone.getBoundingClientRect();
        dropZone.classList.remove('drag-over');
        
        if (my >= rect.top && my <= rect.bottom &&
            mx >= rect.left && mx <= rect.right) {
            const imgSrc = item.querySelector('.gallery-img').src;
            previewImage.src = imgSrc;
            previewBox.style.display = 'flex';
        }
        
        item.classList.remove('dragging');
        const x = mx - gallery.getBoundingClientRect().left - (item.offsetWidth / 2);
        const y = my - gallery.getBoundingClientRect().top - (item.offsetHeight / 2);
        
        const maxX = gallery.clientWidth - item.offsetWidth;
        const maxY = gallery.clientHeight - item.offsetHeight;
        
        item.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
        item.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    previewBox.style.display = 'none';
});

previewBox.addEventListener('click', (e) => {
    if (e.target === previewBox) {
        previewBox.style.display = 'none';
    }
});

gallery.addEventListener('dragover', (e) => {
    e.preventDefault();
});