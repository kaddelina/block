document.addEventListener('DOMContentLoaded', () => {
    ShowRandomElement()
    
})



function ShowRandomElement() {
    const tips = [
        'По вечерам над ресторанами', 'Заламывая котелки,', 'И раздается женский визг,', 'Бессмысленно кривится диск.', 'Живи еще хоть четверть века —',  'Ты, ты одна, о, страсть моя,' , 'Узнаю тебя, жизнь! Принимаю!',  'Мильоны — вас. Нас — тьмы, и тьмы, и тьмы.', 'Всё сущее — увековечить,',  'Сокрытый двигатель его?', 'И глухо заперты ворота,',  'Величавой Вечной Жены!', 'Лежат на поле сжатой ржи.',  'За городом вырос пустынный квартал', 'Спала зеленая вода,',  'Мир стал заманчивей и шире,', 'Всё это было, было, было,',  'Вернет ли мне моя земля?', 'В каких-то четырех стенах,',  'Все, что тебя пленяло, спит;', 'И небо — книгу между книг;',  'А мир — прекрасен, как всегда.', 'Тебе прекрасной, молодой'
    ];
    
    const randomText = document.querySelector('.randomText');
    const randomButton = document.querySelector('.randomButton');

    randomButton.addEventListener('click', ()=> {
        let index = Math.floor(Math.random() * tips.length);
        let newLine = document.createElement('p');

        newLine.textContent = tips[index]; 
        randomText.appendChild(newLine);
    });
}
