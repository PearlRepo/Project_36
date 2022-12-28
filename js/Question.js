class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "Enter correct option");
    this.button = createButton('SUBMIT');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/3+70, 10);

    this.question.html("What starts and ends with the letter ‘E’, but </br> has only one letter? " );

    this.question.position(270, 100);
    this.option1.html("A. Everyone " );
    this.option1.position(300, 200);
    this.option2.html("B. Envelope" );
    this.option2.position(850, 200);
    this.option3.html("C. Estimate " );
    this.option3.position(300, 280);
    this.option4.html("D. Example" );
    this.option4.position(850, 280);

    this.input1.position(400, 380);
    this.input2.position(700, 380);
    this.button.position(620, 450);

    this.title.class("bFont");
    this.question.class("mFont");
    this.option1.class("sFont");
    this.option2.class("sFont");
    this.option3.class("sFont");
    this.option4.class("sFont");
    this.input1.class("input");
    this.input2.class("input");
    this.button.class("btn");
    this.message.class("greeting")

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(400, 550);

    });
  }
}
