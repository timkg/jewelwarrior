TestCase('game.js - showScreen', {

   'test there is a global jewel object': function() {

       assert(jewel && typeof jewel === 'object');
       
   },
   
   'test the global jewel object holds a game object': function() {

       assert( typeof jewel.game === 'object' );

   },
    
   'test there is a showScreen() function': function() {

       assert( jewel.game.showScreen && typeof jewel.game.showScreen === 'function');

   }
   
});