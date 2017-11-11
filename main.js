const resizeRefreshRate = 300; //ms

const windowToHeader = 9;

var windowHeight;
var windowWidth;
var headerHeight;
var headerLine;
var headerLineHeight = 2;
var menuPanelWidth = 300;
var gapSize = 16;

var body;

var header;
var timelineTitle;
var menuPanel;

var verLine;

var myCanvas;

$(document).ready(function() {
    body = $("body");

    windowHeight = $(window).height();
    windowWidth = $(window).width();

   header = $("#header");
   headerLine = $("#header-line");
   timelineTitle = $("#timeline-title");

   menuPanel = $("#menu-panel");

   verLine = $("#ver-line");

   myCanvas = $("#my-canvas")[0];


   updateLayout();

   //check if window is resized
   var resizeTimer;
   $(window).resize(function() {
       if (resizeTimer) clearTimeout(resizeTimer);
       resizeTimer = setTimeout(windowIsResized, resizeRefreshRate);
   });
});



function updateTimeline() {

}

function windowIsResized() {
   updateLayout();

}

function updateLayout(){
   body.css("padding", gapSize);

   windowHeight = $(window).height();

   headerHeight = windowHeight / windowToHeader;
   headerLine.css({
       "margin-top": gapSize,
       "margin-bottom": gapSize
   });
   console.log(headerHeight);
   header.height(headerHeight);
   timelineTitle.height(headerHeight - 2 * gapSize - headerLineHeight);
   fitTextToDiv(timelineTitle.find("a"), timelineTitle);

   verLine.css({
       "left": menuPanelWidth + gapSize + 2 * headerLineHeight,
       "top": headerHeight + gapSize + 2 * headerLineHeight,
       "bottom": gapSize,
       "margin-left": gapSize,
       "margin-right": gapSize
   });

   /* myCanvas.css({
       "left": menuPanelWidth + headerLineHeight + 3 * gapSize,
       "top": headerHeight + gapSize,
       "height": windowHeight - headerHeight - 3 * gapSize,
       "width": $(window).width() - menuPanelWidth - 4 * gapSize - headerLineHeight
   });*/

   myCanvas.height = windowHeight - headerHeight - 2 * gapSize;
   myCanvas.width = $(window).width() - menuPanelWidth - 4 * gapSize - headerLineHeight;
}

function fitTextToDiv(text, div){
   while(text.width() < div.width()){
       text.css({fontSize: "+=1"});
   }
   while(text.height() > div.height()){
       text.css({fontSize: "-=1"});
   }
   text.css({fontSize: "+=1"});
}

function eventFunction(){
    var x = document.getElementById("event-panel");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
