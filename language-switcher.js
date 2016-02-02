/*!
 * Language-Switcher v1.0
 * https://github.com/supra411/language-switcher
 *
 * Copyright 2016 Ricky Cheung
 * Released under the MIT license
 */

var langcontroller="#languageswitch"; //div of button that switches languages.
var optionFirst=".engBox"; //div of language on left. 
var optionSecond=".chiBox"; //div of language on right.
var buttonFirst=".engButton"; //div of language on left. 
var buttonSecond=".chiButton"; //div of language on right.
var stopResize; //To stop switching language from resizes.
var pagecount; //DEBUG to test page count.
var startCheck;
var langOne="language one"; //For button to switch language.  The first language.
var langTwo="language two"; //For button to switch language.  The second language.


function main () {
  startCheck=1;
  stopResize=true;
  var xy=Cookies.get('langSave');
  if (!xy) { //See if the cookie exists.
    Cookies.set('langSave', 1, { expires: 7, path: '' });
  }
  $(langcontroller).css("display","none");
  $(langcontroller).append(langTwo);
  testsize($(window).width());
  $(window).resize(function () {
    testsize($(window).width());
  });
}

function testsize(w){ //Test the window size and switches between mobile and desktop version.
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if (w<1000){
      if(stopResize) {
        stopResize=false;
        $(langcontroller).css("display","inline-block");
        $(optionFirst+","+optionSecond).css("float", "none");
        $(optionFirst+","+optionSecond).css("margin", "0 auto");
        changebox();  
      }
    }
  }
  else {
    console.log("Desktop detected");
    $(langcontroller).css("display","none");
    $(optionFirst+","+optionSecond).css("display", "block");
    $(optionFirst+","+optionSecond).css("margin", "0");
    $(optionFirst).css("float", "left"); 
    $(optionSecond).css("float", "right");
    stopResize=true;
  }
}

function changebox() { //To see which language it is currently at and change it to the other.
  if (startCheck !=1) {
    if (Cookies.get('langSave')!=1) {
      Cookies.set('langSave', 1, { expires: 7, path: '' });
    }
    else {
      Cookies.set('langSave', 2, { expires: 7, path: '' });
    }    
  }
  else {
    startCheck=0;
  }
  if (Cookies.get('langSave')!=1){
    $(optionFirst+","+buttonFirst).css("display", "block"); //Change div.optionFirst from none to block
    $(optionSecond+","+buttonSecond).css("display", "none"); //Change div.optionSecond from none to block
    $(langcontroller).html("");
    $(langcontroller).append(langOne);
  }
  else {
    $(optionSecond+","+buttonSecond).css("display", "block"); //Change div.optionSecond from none to block
    $(optionFirst+","+buttonFirst).css("display", "none"); //Change div.optionFirst from none to block
    $(langcontroller).html("");
    $(langcontroller).append(langTwo);
  }
}

