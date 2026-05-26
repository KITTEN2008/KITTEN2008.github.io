// Данные о микронациях (можно расширять через pull request)
const micronations = [
    {
        name: "Республика Жакид",
        flag: "🇯🇰",
        founded: "11 ноября 2024",
        population: "5 780",
        president: "Кошелев Денис Андреевич",
        type: "Республика",
        file: "jakid"
    },
    {
        name: "Княжество Силенд",
        flag: "🏴‍☠️",
        founded: "1967",
        population: "27",
        president: "Майкл Бейтс",
        type: "Монархия",
        file: "sealand"
    },
    {
        name: "Республика Молоссия",
        flag: "🏛️",
        founded: "1977",
        population: "38",
        president: "Кевин Бо",
        type: "Республика",
        file: "molossia"
    }
];

// Загрузка списка
function loadMicronations() {
    const container = document.getElementById('microlist');
    container.innerHTML = '';
    
    micronations.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${m.flag} ${m.name}</h2>
            <div class="info">
                📅 Основана: ${m.founded}<br>
                👥 Население: ${m.population}<br>
                👑 Глава: ${m.president}<br>
                📋 Тип: ${m.type}
            </div>
            <a href="pages/${m.file}.html" class="edit-link">📖 Читать статью →</a>
            <br>
            <a href="https://github.com/kitten2008/kitten2008.github.io/edit/main/pages/${m.file}.html" 
               target="_blank" 
               class="edit-link" 
               style="color:#0366d6;">
                ✏️ Редактировать на GitHub
            </a>
        `;
        container.appendChild(card);
    });
}

// Поиск
document.getElementById('searchInput')?.addEventListener('keyup', function() {
    const searchText = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});

loadMicronations();
