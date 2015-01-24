  (function (yourcode) {

      yourcode(window.jQuery, window, document);

      }(function($, window, document) {

 //** make function none global**//
 
 document.createElement('header');
 document.createElement('nav');
 document.createElement('menu');
 document.createElement('section');
 document.createElement('article');
 document.createElement('aside');
 document.createElement('footer');
 
 //* so ie will work without me killing someone *//

	
/****************			end document			**************/ 
}));