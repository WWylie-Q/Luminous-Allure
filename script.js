$(document).ready(function() {
    var p = $('.content');
    p.text('');

    inc(p);
});

var text = `An infectious smile, bright as dawn, – <
Spreads warmth like summer's gentle breeze, {1} <
A Good vibes she casts, a mystic's song,  <
A charm that sets all hearts at ease. {1} <
< <
Gemini’s spark and Aries’ fire, <
In her they blend, a fusion rare,{1} <
Twin minds that dream, yet never tire, <
With courage bold and passions fair. {1} <
< <
She speaks with wit, her words alight, <
A dance of thoughts, both wild and wise, {1} <
A firefly in the darkest night, <
A beacon in life’s endless skies. {2} <
< <
With grace she moves through time and space, <
A symphony of heart and soul, {1} <
A testament to strength and grace, <
In her, the stars find their true goal. {2} <
< <
The End.`;

var i = 0;
var j = 0;

function inc(p) {
  var interval = .12;
  var array = text.split(/[\{\}]/); // Split on embraces
  
  if (i < array.length) {
		const character = array[i].charAt(j) === '<' ? '<br/>' : array[i].charAt(j)
    p.append(character);
		
		console.log(array[i].charAt(j))
    
    if (j == array[i].length -1 && typeof array[i + 1] !== "undefined") {
      interval = array[i + 1];
      i += 2;
      j = 0;
    }
    
    j++;
    setTimeout(function () { inc(p); }, interval*500);
  }
}