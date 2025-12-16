// Функция поиска
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function() {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const description = card.querySelector('p').innerText.toLowerCase();
        
        // Если текст поиска есть в заголовке или описании - показываем
        if(title.includes(value) || description.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Функция фильтрации по категориям (Кнопки)
function filterCategory(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // Убираем класс 'active' у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Добавляем класс 'active' нажатой кнопке (через event)
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
