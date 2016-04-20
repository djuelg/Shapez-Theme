// Wait for the page to load first
window.onload = function() {

  //Get a reference to the link on the page
  var aLeft = document.getElementById("alignLeft");
  var aJustify = document.getElementById("alignJustify");

  //Set code to run when the link is clicked
  aJustify.onclick = function() {
  	if (document.getElementById("article-body").className.match(/(?:^|\s)article-body-left(?!\S)/) ) {
        document.getElementById("article-body").className = document.getElementById("article-body").className.replace( /(?:^|\s)article-body-left(?!\S)/g , '' )
    }
  }
  aLeft.onclick = function() {
  	if (!document.getElementById("article-body").className.match(/(?:^|\s)article-body-left(?!\S)/) ) {
        document.getElementById("article-body").className += "article-body-left";
    }
  }
}
