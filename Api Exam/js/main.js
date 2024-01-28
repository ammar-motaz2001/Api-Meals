
    $(".some-icons .close .fa-x").on("click",function(){
        $("#Home .some-icons .close .fa-list").removeClass("d-none")
        $("#Home .some-icons .close .fa-x").addClass("d-none")
        $("#Home .linkoflink").hide(1000)
    })
    $("#Home .some-icons .close .fa-list").on("click",function(){
        $("#Home .some-icons .close .fa-list").addClass("d-none")
        $("#Home .some-icons .close .fa-x").removeClass("d-none")
        $("#Home .linkoflink").show(1000)
    })
async function displayData(){
    $("#loading").show()
    let data=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let result=await data.json()
    
    console.log(result.meals)
    

    let box=''
    for(let i=0;i<result.meals.length;i++){
        box+=`
        <div class="col-4 rounded-4" id="Meals">
        <div class="img m-2 position-relative ">
          <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
           <p class="position-absolute top-0 start-0 w-100 h-100 fw-1 text-dark fw-bold">${result.meals[i].strMeal}</p>
        </div>
       </div>
        `

        

    }

    
    document.getElementById("Meals").innerHTML=box
    $(".col-4").on("click",function(){
        var mealIndex = $(this).index();
        var selectedMeal = result.meals[mealIndex].strMeal;
        console.log(selectedMeal)
        
            displayproduct(selectedMeal)
            $("#loading").hide(2000)
        
    })
    
}


async function displayproduct(value){
    $("#loading").show()
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)

    
    let result=await data.json()
   
    console.log(result.meals)
    let box=''
    for(let i=0;i<result.meals.length;i++){
        box+=`
        <div class="col-8 rounded-4" id="Meals">
        <div class="img m-2 ">
          <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
          <h2 class="text-white"> ${result.meals[i].strMeal} </h2 class="text-white">
        </div>
           <div>
           <h1 class=" text-white">Instructions</h1>
        <p class="paragraph">${result.meals[i].strInstructions}  </p>
        <h3 class='text-white'>Area: <span>${result.meals[i].strArea}</span></h3>
        <h3 class='text-white'>Category: <span>${result.meals[i].strCategory}</span></h3>
        <h3 class='text-white'>Rescipes:</h3>
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 '  > ${result.meals[i].strMeasure1}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strMeasure2}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strMeasure3}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strMeasure4}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strMeasure5}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strMeasure6}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strMeasure7}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strIngredient8}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strIngredient9}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strIngredient10}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strIngredient11}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strIngredient12}   </p >
        <p class='border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3'  > ${result.meals[i].strIngredient13}   </p >





        <br>
        <p class='my-5'>Tags : <span class="border rounded-1 bg-danger-subtle text-danger">${result.meals[i].strTags}</span></p>
        <a href ="${result.meals[i].strYoutube}" class="btn btn-success">Youtube</a>
        <a href="${result.meals[i].strSource}" class="btn btn-danger">Source</a>
           </div>
      </div>
        `

        
        
    }
    document.getElementById("Meals").innerHTML=box


    

}

displayData()
$("#loading").hide(2000)