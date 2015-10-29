var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');



// var prompt =[];
// var acknowledgement = ['You answered '];
// var right = ['That is correct '];
// var wrong = ['That is wrong!'];
// var error = ['Not an option'];
// var arrayAffirmativeAnswers = ['yes', 'yeah', 'yep', 'y','1'];



// question1(ans1);
// question1(ans2);

// function question1() {
//   var gameQ1 = prompt ('Was Ivar born in alaska?').toLowerCase();

//   for (i = 0; i < arrayAffirmativeAnswers.length; i++) {
//     if ( = 'yes') {
//       alert(right);
//     } else if ( ans) {
//       alert(wrong);
//     } else {
//       alert(error);
//     }
//   }

// }
 var name = prompt('What is your name?');
    alert('Hello, ' + name + '.');
    var feeling = prompt('How you feeling today?');
    alert('Thanks for letting me know that you are ' + feeling + ', ' + name + '.');
    var score = 0;
    var arrayAffirmativeAnswers = ['yes', 'yeah', 'yep', 'y', '1'];

question1(ans1);
question2(ans2);
question3(ans3);
question4(ans4);
question5(ans5);






  function question1() {
    var gameQ1 = prompt('Was Ivar born in Alaska?').toLowerCase();

      if (arrayAffirmativeAnswers.indexOf(gameQ1) > -1) {
        score += 1;
        alert('Nice guess!');
      } else {
        alert('Actually, he was!');
        console.log('The user answered incorrectly, Ivar was born in Alaska.' + gameQ1);
      }
  }

  function question2() {
    var gameQ2 = prompt('Is his last name Lee?').toLowerCase();

      if (arrayAffirmativeAnswers.indexOf(gameQ2) > -1) {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, it is!');
      console.log('The user answered incorrectly, his last name is Lee.' + gameQ2);}
  }


  function question3() {
    var gameQ3 = prompt('Is he 28 years old?').toLowerCase();

      if (arrayAffirmativeAnswers.indexOf(gameQ3) > -1) {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, he is!');
      console.log('The user answered incorrectly, he is 28.' + gameQ3);}
  }

  function question4() {
    var gameQ4 = prompt('Is coffee good?').toLowerCase();

      if (arrayAffirmativeAnswers.indexOf(gameQ4) > -1) {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, it is!');
      console.log('The user answered incorrectly, he is 28.' + gameQ4);}
  }

  function question5() {
    var gameQ5 = prompt('Guess the secret number between 1 and 3');

      if (arrayAffirmativeAnswers.indexOf(gameQ5) > -1) {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, it was 1!');
      console.log('The user answered incorrectly, the secret number was 1' + gameQ5);}
  }


    alert('You got ' + score + ' out of 5 correct.');
