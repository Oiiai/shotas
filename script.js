// 数据字典
const characters = [
    {
        url: "./test-zera.png",
        name: "【STZE】BAST",
        about: "A character in Scarlet Tide: ZeroEra.",
        goto: "./stze-bast.html"
    },
    {
        url: "./test-wuwa.png",
        name: "【WUWA】Lingyang",
        about: "A character in Wuthering Waves.",
        goto: "./wuwa-lingyang.html"
    }
];

// 获取卡片容器
const cardsContainer = document.getElementById('cardsContainer');

// 动态生成卡片
characters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-image">
            <img src="${character.url}" alt="${character.name}">
            <a href="${character.goto}" class="goto-btn" target="_blank">
                <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div class="card-content">
            <h3 class="card-name">${character.name}</h3>
            <p class="card-about">${character.about}</p>
        </div>
    `;

    cardsContainer.appendChild(card);
});

// 为卡片添加鼠标悬停效果增强
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        setTimeout(() => {
            card.style.transform = '';
        }, 100);
    });
});

// 为标题添加动画效果
window.addEventListener('scroll', () => {
    const title = document.querySelector('.top h1');
    const scrollPosition = window.scrollY;
    const opacity = 1 - Math.min(scrollPosition / 300, 0.7);

    title.style.opacity = opacity;
    title.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});