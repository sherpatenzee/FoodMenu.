"use strict"

let menu = {
  drinks : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
   ],
  entrees : [
     "Hamburger w/ Fries",
     "Grilled Cheese w/ Tater Tots",
     "Grilled Chicken w/ Veggies",
     "Chicken Fried Steak w/ Mashed Potatoes",
     "Fried Shrimp w/ Coleslaw",
     "Veggie Plate"
  ],
  desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
  ]
};


  window.onload = function () {
    document.getElementById("list").style.display = "none";
    let menuItems = document.getElementById("menu");
    menuItems.onchange = list

  }


    function list(){
      
      let menuItems = document.getElementById("menu");
      let lists = document.getElementById("list");
      lists.length = 0;

     
      let index = menuItems.selectedIndex;
      
      console.log(index)

    
      if( index == 1){
        lists.style.display = "block"
        for (let i = 0; i < (menu.drinks).length ; i ++){
        
          let options = document.createElement ("option");
          options.textContent = menu.drinks[i];
    
          lists.appendChild(options);
        }

      } else if ( index == 2){
        lists.style.display = "block"
        for (let i = 0; i < (menu.entrees).length ; i ++){
        
          let options = document.createElement ("option");
          options.textContent = menu.entrees[i];
    
          lists.appendChild(options);

        }
   
      }else if ( index == 3){
        lists.style.display = "block"
        for (let i = 0; i < (menu.desserts).length ; i ++){
        
          let options = document.createElement ("option");
          options.textContent = menu.desserts[i];
    
          lists.appendChild(options);

        }
        
      }else{
        lists.style.display = "none";
      }
   

    }