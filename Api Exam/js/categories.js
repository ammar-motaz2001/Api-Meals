
       
        $(".some-icons .close .fa-x").on("click",function(){
            $("#Home .some-icons .close .fa-list").removeClass("d-none")
            $("#Home .some-icons .close .fa-x").addClass("d-none")
            $("#Home .linkoflink").hide(200)
        })
        $("#Home .some-icons .close .fa-list").on("click",function(){
            $("#Home .some-icons .close .fa-list").addClass("d-none")
            $("#Home .some-icons .close .fa-x").removeClass("d-none")
            $("#Home .linkoflink").show(200)
        })
    async function getCategories(){
        $("#loading").show()
        let data=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let result= await data.json()
        console.log(result.categories)
    
        let box=''
        for(let i=0;i<result.categories.length;i++){
            box+=`
            <div class="col-4 mt-2" id="Meal-1">
            <div class="images mt-3 position-relative">
                <img src="${result.categories[i].strCategoryThumb}" class="w-100" alt="">
                <div class="cont position-absolute top-0 start-0 pb-1">
                    <h4 class="text-center">${result.categories[i].strCategory}</h4>
                    <p class="text-dark pb-1 text-center ">${result.categories[i].strCategoryDescription}</p>
                    <p> </p>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("Meal-of-Meal").innerHTML=box
        $(".col-4").on("click",function(){
                    var mealIndex = $(this).index();
                    var selectedMeal = result.categories[mealIndex].strCategory;
                    console.log(selectedMeal)
                    displayData(selectedMeal)
                    
                    
                })
       
    }
    getCategories()
    $("#loading").hide(2000)

    async function displayData(value){
    $("#loading").show()

        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
        let result= await data.json()
        let box='';
        for(let i=0;i<result.meals.length;i++){
            box+=`
            <div class="col-4" id="Meal-1">
            <div class="images mt-3 position-relative">
                <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
                <div class="cont position-absolute top-0 start-0 pb-1">
                    <h4 class="text-center">${result.meals[i].strMeal}</h4>
                    <p> </p>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("Meal-of-Meal").innerHTML=box
        $(".col-4").on("click",function(){
            var mealIndex = $(this).index();
            var selectedMeal = result.meals[mealIndex].strMeal;
            console.log(selectedMeal)
            $(".col-4").fadeOut()
            displayproduct(selectedMeal)
           
            $("#loading").hide(2000)
            
        })
        $("#loading").hide(2000)
    }
   

    
    async function displayproduct(valueOne){
            let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueOne}`)
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