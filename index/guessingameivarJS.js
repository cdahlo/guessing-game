
    var name = prompt('What is your name?');
    alert('Hello, ' + name + '.');
    var feeling = prompt('How you feeling today?');
    alert('Thanks for letting me know that you are ' + feeling + ', ' + name + '.');
    var score = 0;
    var gameQ1 = prompt('Was Ivar born in Alaska?');

      if (gameQ1.toLowerCase() === 'yes' || 'yeah' || 'y' || 'yep' || 'of course') {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, he was!');
      console.log('The user answered incorrectly, Ivar was born in Alaska.' + gameQ1);}

    var gameQ2 = prompt('Is his last name Lee?');

      if (gameQ2.toLowerCase() == 'yes' || 'yeah' || 'y' || 'yep' || 'of course') {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, it is!');
      console.log('The user answered incorrectly, his last name is Lee.' + gameQ2);}

    var gameQ3 = prompt('Is he 28 years old?');

      if (gameQ3.toLowerCase() == 'yes' || 'yeah' || 'y' || 'yep' || 'of course')z {
      score += 1;
      alert('Nice guess!');
      } else {
      alert('Actually, he is!');
      console.log('The user answered incorrectly, he is 28.' + gameQ3);}

    alert('You got ' + score + ' out of 3 correct.');
