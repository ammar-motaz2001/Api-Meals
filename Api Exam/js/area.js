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

    async function getArea(){
    $("#loading").show()
        
        let data=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
       let result= await data.json()
        let box=''
        for(let i=0;i<result.meals.length;i++){
            box+=`
    
            <div class="col-3 mt-3 text-white fw-bold">
    <i class="fa-solid fa-house-laptop" style="font-size: 80px; cursor:pointer"></i>
    <div>
        <p style="font-size: 30px;" >${result.meals[i].strArea}</p>
    </div>
    </div>
            `
        }
        document.getElementById("Area").innerHTML=box
        $(".col-3").on("click",function(){
            var mealIndex = $(this).index();
            var selectedMeal = result.meals[mealIndex].strArea;
            console.log(selectedMeal)
                $("#loading").show()
            
            displayMeals(selectedMeal)
            $("#loading").hide(2000)

            
            
        })
    }
    getArea()
    $("#loading").hide(2000)
    
    async function displayMeals(value){
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
       let result= await data.json()
       let box=''
       for(let i=0;i<result.meals.length;i++){
        box+=`
        <div class="col-4">
                            <div class="imges-meal position-relative mb-4 mt-2">
                                <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
                                <div class="address position-absolute top-0 start-0">
                                    <h3>${result.meals[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>
        `
       }
       document.getElementById("Area").innerHTML=box

       $(".col-4").on("click",function(){
        var mealIndex = $(this).index();
        var selectedMeal = result.meals[mealIndex].strMeal;
        console.log(selectedMeal)
            $(".col-4").fadeOut(100)
            displayDetails(selectedMeal)
        
        
    })

    }

async function displayDetails(valueTwo){
    $("#loading").show()

    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueTwo}`)
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

    $("#loading").hide(2000)

    }


    $("#loading").hide(2000)