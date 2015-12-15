var domElements = {

   domElementsCreate: function(params) {
      var element = document.createElement(params.tagName);

      // element.classList.add(params);
      if (params.inputType){
      element.setAttribute('type', params.inputType);
      }

      if(params.className){
        element.className = params.className;
      }

      if(params.content){
        element.innerHTML = params.content;
      }

      if(params.parentElement){
        params.parentElement.appendChild(element);
      }

      return element;
   },

    generateQuestions: function(questionsAmount, answersAmount){    
    
      console.log (this);
      for (var i = 0; i < questionsAmount; i++) {

        this.domElementsCreate({
        tagName: 'h2',
        className: 'main__questions',
        content: (i + 1)+ '. ' + 'Вопрос №' + (i + 1),
        parentElement: mainDivHTML
      });

      for (var j = 0; j < answersAmount; j++) {
        var checkbox = this.domElementsCreate({
          tagName: 'input',
          className: 'main__checkbox',
          inputType: 'checkbox',
          parentElement: mainDivHTML
        });

        var labelHTML = this.domElementsCreate({
          tagName: 'label',
          className: 'main__answers',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: mainDivHTML
        });


      }
      }
  }
}

var bodyHTML = document.querySelector('body');
domElements.domElementsCreate({
  tagName: 'form',
  className: 'main',
  parentElement: bodyHTML
});

var mainDivHTML = document.querySelector('.main');
domElements.domElementsCreate({
  tagName: 'H1',
  className: 'title',
  content: 'Тест по программированию',
  parentElement: mainDivHTML
});

domElements.generateQuestions(3, 3);

domElements.domElementsCreate({
  tagName: 'input',
  inputType: 'submit',
  className: 'main__submit',
  content: 'Проверить мои результаты',
  parentElement: mainDivHTML
});
