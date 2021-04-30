class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput();
    this.input2 = createInput();
    this.text = createElement('h4');
    this.text2 = createElement('h4');

    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.greeting3 = createElement('h1');

    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.text.hide();
    this.text2.hide();

    this.greeting.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 10);
    this.title.style("color:red");

    this.text.html("Enter your name here..");
    this.text.position(155,230);

    this.text2.html("Enter your answer here..");
    this.text2.position(350,230);

    this.question.html("Question:- What six digit number is hidden in these lines 'Shut the door, O big fat hen' ? " );
    this.question.position(100, 80);
    this.option1.html("1: 290139 " );
    this.option1.position(100, 100);
    this.option2.html("2: 340910" );
    this.option2.position(100, 120);
    this.option3.html("3: 234531 " );
    this.option3.position(100, 140);
    this.option4.html("4: 091345" );
    this.option4.position(100, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(310, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.text.hide();
      this.text2.hide();

      this.greeting.html("Wating For Other Players To Complete The Quiz ! ");
      this.greeting.position(180,130);
      this.greeting.style("color:purple");

      this.greeting2.html("Please Wait... ");
      this.greeting2.position(370,70);
      this.greeting2.style("color:red");

      this.greeting3.html("😃");
      this.greeting3.position(410,200);
      this.greeting3.style("color:blue");

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
