

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


async function getData(){
    $("#loading").show()
    let data=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let result= await data.json()
   console.log(result.meals.length)
   

     let box=''
     for(let i=0;i<Math.min(20,result.meals.length);i++){
        box+=`
        <div class="col-4 text-center text-white my-2">
                        <i class="fa-solid fa-drumstick-bite" style="font-size: 60px;"></i>
                        <h5>${result.meals[i].strIngredient}</h5>
                        <div class='w-100 ' style="height: 100px; overflow: hidden;">
                            <p class="">${result.meals[i].strDescription}</p>
                        </div>
                    </div>
        `
    }

    document.getElementById("MealofMeals").innerHTML=box

    $(".col-4").on("click",function(){
        var mealIndex = $(this).index();
        var selectedMeal = result.meals[mealIndex].strIngredient;
        console.log(selectedMeal)
        displaySubMeals(selectedMeal)
        
        
    })

}
getData()

async function displaySubMeals(val){
    $("#loading").show()
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`)
    let result= await data.json()

    let box='';
    for(let i=0;i<result.meals.length;i++){
        box+=`
        <div class="col-4">
        <div class="imges-sub position-relative my-3">
            <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">

            <div class=" head position-absolute top-0 left-0 text-center  w-100 h-100 ">
               <h4>${result.meals[i].strMeal}</h4>
            </div>
        </div>
    </div>
        
        `

        
        
    }
    document.getElementById("MealofMeals").innerHTML=box
    $(".col-4").on("click",function(){
        var mealIndex = $(this).index();
        var selectedMeal = result.meals[mealIndex].strMeal;
        console.log(selectedMeal)
            $(".col-4").fadeOut(1000)
            displayproduct(selectedMeal)
        
            $("#loading").hide(2000)
    })
    $("#loading").hide(2000)
    
}


 async function displayproduct(value){
    $("#loading").show()
    
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let result=await data.json()
    let box='';
    for(let i=0;i<result.meals.length;i++){
        box+=`
        
        <div class="detail" class="text-white">
        <img src="${result.meals[i].strMealThumb}" class='w-50' alt="">
        <h2>${result.meals[i].strMeal}</h2>
        <h1>Instructions</h1>
        <p>${result.meals[i].strInstructions}</p>
        <h3>Area: <span> ${result.meals[i].strArea}</span></h3>
        <h3>Category: <span>${result.meals[i].strCategory}</span></h3>
        <h3>Recipes: </h3>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25   m-3 p-1">${result.meals[i].strMeasure1}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure2}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure3}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure4}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure5}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure6}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure7}</p>
        <p class="border rounded-1 bg-danger-subtle text-danger  span-1 w-25  m-3 p-1">${result.meals[i].strMeasure8}</p>
        <br>
        <p class='mt-5'>Tags : <span class="border rounded-1 bg-danger-subtle text-danger">${result.meals[i].strTags}</span></p>
        <a href ="${result.meals[i].strYoutube}" class="btn btn-success">Youtube</a>
        <a href="${result.meals[i].strSource}" class="btn btn-danger">Source</a>
        </div>
        
        `

        
        
    }
    document.getElementById("details").innerHTML=box

  

}
$("#loading").hide(2000)