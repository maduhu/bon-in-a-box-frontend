$element = $('.backg'),
classNameOne = 'bg1';
classNameTwo = 'bg2';
classNameThree = 'bg3';
classNameFour = 'bg4';

$document.scroll(function () {
    if ($document.scrollTop() >= 300) {
        $element.addClass(classNameOne);
    } else if ($document.scrollTop() >= 600 && $document.scrollTop() < 600) ) {
        $element.addClass(classNameTwo);
    } else if ($document.scrollTop() >= 900 && $document.scrollTop() < 900)) {
        $element.addClass(classNameThree);
    } else if ($document.scrollTop() >= 1200 && $document.scrollTop() < 1200)) {
        $element.addClass(classNameFour);
    } else if ($document.scrollTop() >= 1500 && $document.scrollTop() < 1500)) {
        $element.addClass(classNameFive);
    } else if ($document.scrollTop() >= 1800 && $document.scrollTop() < 1800)) {
});