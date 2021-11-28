/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let mainSections = document.querySelectorAll('section'), // TODO: select all section in document

    navbarList = document.getElementById('navbar__list'); // TODO: select navbar ul 

const myMain = document.querySelector('main'); // TODO: select the main tag in the document that contains sections
    

/**
 * End Global Variables
 * 
*/


/**
 * Start Main Functions
 
*/
// TODO: start creating newSection function building

function createNewSection(sectionsNum){ // take the number of sections wanted to create as a prameter
    

    for(let i=1; i<=sectionsNum; i++){

    // TODO: starting creating new section and its chlid element
        let newSection = document.createElement('section'), // TODO: create new section

            newDiv =  document.createElement('div'),    // TODO: create new div 

            newHead2 =  document.createElement('h2'),   // TODO: create new head2

            newPragraph1 =  document.createElement('p'), // TODO: create new pragraph 1

            newPragraph2 =  document.createElement('p'); // TODO: create new pragraph 2


        myMain.appendChild(newSection); // TODO: appending newSection to main tag

        newSection.appendChild(newDiv);  // TODO: appending <div> to the section

        newDiv.appendChild(newHead2);   // TODO: appending <h2> to the div

        newDiv.appendChild(newPragraph1); // TODO: appending <p> to the div

        newDiv.appendChild(newPragraph2); //  TODO: appending another <p> to the div

        
    // TODO: start setting newSection attributes
    
        newSection.id = "section"+(mainSections.length+i);

        newSection.setAttribute('data-nav','section ' + (mainSections.length+i));

    // end setting newSection attributes
    

    // TODO: set new div class name
        newDiv.className = 'landing__container';
 
    // TODO: set new head2 content
        newHead2.textContent = "Section " + (mainSections.length+i);
                             // OR 
        // newHead2.textContent = newSection.getAttribute('data-nav');

    //TODO:  set pragraph content

        newPragraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
         "Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. " +
          "Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. " +
          "Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. " +
           "Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. " +
           "Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. " +
           "Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. " +
            "Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod. " ;

        newPragraph2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, " +
            "vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. " + 
            "Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non." ;

    // end setting pragraph content

       

    } // end for
};
// end creating newSection function building


// TODO: start function of creating menu items
function createNavItems(){

    let mainSections = document.querySelectorAll('section'); // TODO: select all section in document

    mainSections.forEach(section => {

        let listItem = document.createElement('li'), // TODO: create <li> tag

            navbarLink = document.createElement('a'); // TODO: create <a> tag

        navbarLink.href = '#' + section.id; // TODO: set the href of each link 

        navbarLink.textContent = section.getAttribute('data-nav'); // TODO: set the name or text of link or for each <a> tag
        
        navbarLink.classList.add('menu__link'); // TODO: add class name to the <a> tag

        listItem.appendChild(navbarLink); // TODO: append the <a> tag to <li> tag

        navbarList.appendChild(listItem); // TODO: append list items to the navbar
    });

    document.querySelector('a').classList.add('item_active_class');  // TODO: add active class to to first link in navbar by default

};
// end function of creating menu items


//TODO: start function of Adding class 'active' to section when near top of viewport
function toggleActive(){
        
    let navbarLinks = document.getElementsByClassName('menu__link'); // TODO: select navbar all links
        
    mainSections = document.querySelectorAll('section'); // TODO: select all section in document

    let  sectionPosition ;  // TODO: variable store the position of the viewport section

    for(let i=0; i< mainSections.length; i++){

        sectionPosition = mainSections[i].getBoundingClientRect();   // TODO: return the the smallest rectangle dimensions containing the entire section and its position

        if (sectionPosition.top >=0 && sectionPosition.top <=500) { // TODO: if section position in viewport between 0 or 500px do the next

            if(!mainSections[i].classList.contains('your-active-class')){ // TODO: check if section doesn't contain "your-active-class"
                
                mainSections[i].classList.add('your-active-class'); // TODO: then add it

                navbarLinks[i].classList.add('item_active_class'); // TODO: add active link class

            }    
        }
        else {  // TODO: check if section isn't in viewPort, then remove it

            mainSections[i].classList.remove('your-active-class'); 

            navbarLinks[i].classList.remove('item_active_class');
        }
    }
        
};
 //end function of Adding class 'active' to section when near top of viewport


 /**
 * End Main Functions
 
*/



/**
 * calling the function
 * */

// TODO: creating 4 new section
 createNewSection(4);  


//  TODO: create the navbar items and links
 createNavItems();

// TODO: Set mainSections as active
window.addEventListener('scroll', toggleActive);  // TODO: implement toggleActive function when the page scrolling



/*
* you can use the next js code to make scroll smooth or type the next in css file 
html{
   scroll-behavior: smooth;
}
*/


// TODO: Scroll to anchor ID using scrollIntoView event 
let navbarLinks = document.getElementsByClassName('menu__link');
    
mainSections = document.querySelectorAll('section');

    for(let i = 0; i<navbarLinks.length; i++) {
        
        navbarLinks[i].addEventListener('click', function(e){
            e.preventDefault();
            mainSections[i].scrollIntoView({behavior:'smooth', block: 'center'});
        });
            
    }


// end scroll section







