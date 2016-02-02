Language-Switcher

A small script I used for my church’s responsive website, that you can
find at www.cccc.net.  It allows the designer to switch between two
different languages when the site is being viewed in mobile sizes,
while display both when the screen size allows it.

Dependencies

js.cookie (https://github.com/js-cookie/js-cookie)
jQuery


Starting Out

Put in the following code in your html files:

<script src=“language-switcher.js"></script>

You can change the following variables to reflect the CSS in your site:

var optionFirst //div of language on left.
var optionSecond //div of language on right.
var buttonFirst //button div of language on left.
var buttonSecond //button div of language on right.
var langOne //For button to switch language.  The first language.
var langTwo //For button to switch language.  The second language.


I’m happy to accept any criticism or suggestions to make this
repository better!  Please let me know at
https://twitter.com/rleeisnotme.
