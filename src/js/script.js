console.log("hi js up and running!");

new WOW().init();

//function that returns object depending on window width
const navbarOption = ()=>{
    if(window.innerWidth <= 425){
        return {
            "navbar": {
                "add" : false
            }
        }
    } else {
        return {}
    }
}

//assigning result of function to var
const navbar = navbarOption()

window.onload = function(){
    if(window.innerWidth < 748) {
        new Mmenu("#my-menu",
        //options
        {
            "extensions": { 
                "all" : [
                    "position-right",
                    "pagedim-black",
                    "listview-justify",
                    "border-none"
                ],
                "(max-width: 425px)": [ 
                    "fullscreen"
                ]
            },
            //spread operation
            ...navbar
        },
        //configs
        {
            "transitionDuration": "100px" 
        });
    }
}

