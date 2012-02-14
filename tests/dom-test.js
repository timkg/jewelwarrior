TestCase('dom.js - setup', {

   'test there is a global jewel object': function() {

       assert(jewel && typeof jewel === 'object');
       
   },
   
   'test the global jewel object holds a dom module': function() {

          assert((jewel && jewel.dom && typeof jewel.dom === 'object') === true);

   }
   
});

TestCase('dom.js - hasClass()', {
   
   'test jewel.dom.hasClass() should return true if an element has a given class': function() {

          var p = document.createElement('p');
          p.className = 'test';

          assert(jewel.dom.hasClass(p, 'test') === true);

    },
    
    'test jewel.dom.hasClass() should find a className at the beginning': function() {

              var p = document.createElement('p');
              p.className = 'test testy';

              assert(jewel.dom.hasClass(p, 'test') === true);

    },
    
    'test jewel.dom.hasClass() should find a className at the end': function() {

              var p = document.createElement('p');
              p.className = 'testy test';

              assert(jewel.dom.hasClass(p, 'test') === true);

    },
    
    'test jewel.dom.hasClass() should find a className in the middle': function() {

              var p = document.createElement('p');
              p.className = 'testy test testoo';

              assert(jewel.dom.hasClass(p, 'test') === true);

        }
        
});

TestCase('dom.js - addClass()', {

   'test jewel.dom.addClass() should add a new class to an element': function() {

       var p = document.createElement('p');
       jewel.dom.addClass(p, 'test');

       assert(jewel.dom.hasClass(p, 'test') === true);
       
   },
   
   'test jewel.dom.addClass() should non-destructively add a new class to an element with existing classes': function() {

          var p = document.createElement('p');
          p.className = 'testy'
          jewel.dom.addClass(p, 'test');

          assert(jewel.dom.hasClass(p, 'test') === true);
          assert(jewel.dom.hasClass(p, 'testy') === true);
          assert(jewel.dom.hasClass(p, 'testytest') === false);

      }
   
});

TestCase('dom.js - removeClass()', {

   'test jewel.dom.removeClass() should remove a class from an element': function() {

       var p = document.createElement('p');
       jewel.dom.addClass(p, 'test');
       
       assert(jewel.dom.hasClass(p, 'test') === true);
       
       jewel.dom.removeClass(p, 'test');

       assert(jewel.dom.hasClass(p, 'test') === false);
       
   },
   
   'test jewel.dom.removeClass() should leave other classes untouched': function() {

          var p = document.createElement('p');
          jewel.dom.addClass(p, 'test');
          jewel.dom.addClass(p, 'testy');

          jewel.dom.removeClass(p, 'test');

          assert(jewel.dom.hasClass(p, 'testy') === true);

    }
   
});