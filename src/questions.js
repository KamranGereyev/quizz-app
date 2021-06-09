const questions = [
    {
      questionText: 'О чем говорит тэг <p align="right"> … </p>?',
      answerOptions : [
        {answerText: 'Текст, заключенный в тэг, будет расположен по центру страницы', isCorrect: false},
        {answerText: 'Текст, заключенный в тэг, будет расположен по левому краю страницы', isCorrect: false},
        {answerText: 'Текст, заключенный в тэг, будет расположен по центру страницы', isCorrect: true},
      ]
    },
    {
      questionText: 'Напишите код HTML, который бы создавал кнопку отправки заполненной формы. Имя кнопки – ОК.',
      answerOptions : [
        {answerText: '<input type="ОК" value="Submit"/>', isCorrect: false},
        {answerText: '<p> input type="submit" value="OK"< /p>', isCorrect: false},
        {answerText: '<input type="submit" value="ОК"/>', isCorrect: true},
      ]
    },
    {
      questionText: 'О чем говорит следующая запись: <form action="url" method="POST">?',
      answerOptions : [
        {answerText: 'Создается форма, при заполнении которой вводимые данные будут отображаться', isCorrect: false},
        {answerText: 'Создается форма, при заполнении которой вводимые данные не будут отображаться', isCorrect: true},
        {answerText: 'Создается форма, которая будет служить для внесения информации, представленной в виде ссылки (URL)', isCorrect: false},
      ]
    },
    {
      questionText: 'Какое свойство CSS позволяет указать толщину рамки/бордюра?',
      answerOptions : [
        {answerText: 'border-size', isCorrect: false},
        {answerText: 'border-width', isCorrect: true},
        {answerText: 'border-radius', isCorrect: false},
        {answerText: 'border-weight', isCorrect: false}
      ]
    },
    {
      questionText: 'Сколько числовых значений может быть указано у свойства margin?',
      answerOptions : [
        {answerText: 'только одно', isCorrect: false},
        {answerText: 'только два', isCorrect: false},
        {answerText: 'до 8 включительно', isCorrect: false},
        {answerText: 'до 4 включительно', isCorrect: true}
      ]
    },
    {
      questionText: 'Что делает селектор ::before?',
      answerOptions : [
        {answerText: 'генерирует содержимое в начале HTML-элемента', isCorrect: true},
        {answerText: 'генерирует содержимое в конце HTML-элемента', isCorrect: false},
        {answerText: 'выбирает HTML-элемент, которые стоит перед другим', isCorrect: false},
        {answerText: 'нет правильного ответа', isCorrect: false}
      ]
    },
    {
      questionText: 'У какого из этих элементов меньше всего специфичность?',
      answerOptions : [
        {answerText: 'div[data-test]', isCorrect: false},
        {answerText: 'div', isCorrect: true},
        {answerText: 'div.some', isCorrect: false},
        {answerText: 'div#some', isCorrect: false}
      ]
    },
  ];

  export default questions;