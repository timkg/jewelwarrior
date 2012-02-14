TestCase('dom.js', {

   'test there is a global jewel object': function() {

       assert(jewel && typeof jewel === 'object');
       
   },
   
   'test the global jewel object holds a dom module': function() {

          assert((jewel && jewel.dom && typeof jewel.dom === 'object') === true);

   },
   
   'test jewel.dom.hasClass() should return true if an element has a given class': function() {

          var p = document.createElement('p');
          p.className = 'test';

          assert(jewel.dom.hasClass(p, 'test') === true);

    }
});