//This is for the mobile hamburger nav bar
//We add a general event listener to the <nav> tag
const toggleNav = document.getElementsByTagName("nav")[0];

//Listen for any clicks on the nav
toggleNav.addEventListener("click", function(event)
{
    //Defining the click target from the click event
    //view more with:
    //console.log(event);
    var target=event.target;

    //If the click is closest the js-navbar-toggle (or they clicked on the toggle) then set the mobile nav CSS to active
    if (target.closest("#js-navbar-toggle"))
    {
        const mainNav = document.querySelector(".main-nav")
        mainNav.classList.toggle("active")
    }
}); //End listening for clicks

    /**************************************/
    /******READ ME ************************/
    /* 
    
    1. This section is a very vanilla JS way to create a template 
        of the nav and footer for all the pages on the Free Code Camp site
    
    2. There are more modern JS templating engines like "handlebars" that would be 
        "best practice" but which require a server and installation of packages
    
    3. Be bold, suggest changes, changes these docs, or bring up a suggestion in the Free Code Camp slack!
        fccsf.slack.com

    */


    //THIS JAVASCRIPT WILL CREATE ("INJECT") THE HTML FOR THE NAV BAR

    //Getting the DOM element by tag name, in this case, the tag is "<nav>"
    //This element is found in the index.html and in the header of every page we want to have the nav bar in
    const nav=document.getElementsByTagName("nav")[0];
    //We add a [0] since getting elements by tag name will return an array, this is useful if we want to change
    //the html of every li element say, but here we just want the nav element.

    //We need to decide to include the .html in the path or not, so we get the pathname
    //if the pathname is blank or index, we do not need the .html in the nav link
    //otherwise we use the template code ${route} to insert our defined route

    console.log(window.location.pathname);
    if (window.location.pathname=='/' || window.location.pathname=='/index.html') 
    {
        var logopath='.'; //one dot if on index page
        var route='/html'; //html if on index page
    } 
    else 
    {
        var logopath='..'; //two dots in html route
        var route=''; //no route if already in html
    }


    //This will set the html for anything between the nav tag: <nav></nav>
    //Note: If you add more items, change the width of the main-nav in the desktop CSS
    nav.innerHTML=`
    <a style="color: #ffffff" href="${logopath}/index.html">
        <img class="logo-image" src="${logopath}/img/logo-abbvr.png" />
      </a>

      <span class="nav-toggle" id="js-navbar-toggle">
        <i class="fas fa-bars"></i>
      </span>

      <ul class="main-nav">
       <li>
         <a style="color: #ffffff" href=".${route}/bios.html">/Contributors</a> 
       </li>
       <li>
         <a style="color: #ffffff" href=".${route}/faq.html">/FAQ</a> 
       </li>
       <li>
         <a style="color: #ffffff" href=".${route}/about.html">/About</a> 
       </li>
      </ul>`;
    
    //Add in contact section later when it is ready?
    //     <li>
    //      <a style="color: #ffffff" href=".${route}/contact.html">/Contact</a> 
    //    </li>

    
        //THIS JAVASCRIPT WILL CREATE ("INJECT") THE HTML FOR THE FOOTER

    //Getting the DOM element by tag name, in this case, the tag is "<footer>"
    //This element is found in the index.html and in the footer of every page
    const footer=document.getElementsByTagName("footer")[0];
    //We add a [0] since getting elements by tag name will return an array, this is useful if we want to change
    //the html of every li element say but here we just want the footer element

    //This will set the html for anything between the footer tag: <footer></footer>
    footer.innerHTML=`
    <div class='conduct'>
    <button>
      <a href="https://join.slack.com/t/fccsf/shared_invite/zt-f1bfxuvp-LfXZR_T6cmL3YqypPWXWaA" target="_blank"
        rel="noopener noreferrer">
        <i class="fab fa-slack fa-2x"></i>
      </a>
    </button>
    <button>
      <a href="https://www.facebook.com/groups/free.code.camp.san.francisco/" target="_blank"
        rel="noopener noreferrer">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
    </button>

    <button>
      <a href="https://www.instagram.com/freecodecampsf/" target="_blank" rel="noopener noreferrer"><i
          class="fab fa-instagram fa-2x"></i>
      </a>
    </button>

    <button>
      <a href="https://www.meetup.com/Free-Code-Camp-SF/" target="_blank" rel="noopener noreferrer"><i
          class="fab fa-meetup fa-2x"></i>
      </a>
    </button>

    
    <button>
      <a href="https://github.com/freeCodeCampSF/FCCSF" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </button>
  </div>
  <p class="conduct">
    By joining us you are agreeing to follow the
    <a href="https://www.freecodecamp.org/news/code-of-conduct/">freeCodeCamp Code of Conduct</a>
  </p>`;