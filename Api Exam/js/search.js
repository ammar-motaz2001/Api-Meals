

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
    let inputOne=document.getElementById("inputOne")
    let inputTwo=document.getElementById("inputTwo")
    
    inputOne.addEventListener("input",function(e){
        console.log(e.target.value)
        getData(e.target.value)
    })
    inputTwo.addEventListener("input",function(e){
        console.log(e.target.value)
        
        getDataWithFirstLetter(e.target.value)
       
    })
    
    
    async function getData(val){
    $("#loading").show()

        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${val}`)
        let result= await data.json()
        let box=''
        for(let i=0;i<result.meals.length;i++){
            box+=`
            <div class="col-4">
            <div class="imges m-2 position-relative ">
                <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
                 <p class="position-absolute top-0 start-0 w-100 h-100 fw-1 text-dark fw-bold">${result.meals[i].strMeal}</p>
              </div>
        </div>
            `
        }
        document.getElementById("Meal").innerHTML=box
        $(".col-4").on("click",function(){
            $("#Home .div-2 .div input ").hide()
            $(".col-4").hide()
            var mealIndex = $(this).index();
            var selectedMeal = result.meals[mealIndex].strMeal;
            
            displayproduct(selectedMeal)
        }
            )
    }
    async function getDataWithFirstLetter(letter){
        $("#loading").show()
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let result= await data.json()
    
        console.log(result.meals)
    
        let box=''
        for(let i=0;i<result.meals.length;i++){
            box+=`
            
            <div class="col-4">
            <div class="imges m-2 position-relative ">
                <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
                 <p class="position-absolute top-0 start-0 w-100 h-100 fw-1 text-dark fw-bold">${result.meals[i].strMeal}</p>
              </div>
        </div>
            `
        }
        document.getElementById("Meal").innerHTML=box
        $(".col-4").on("click",function(){
            
            $(".col-4").hide(function(){
                $("#Home .div-2 .div input ").fadeOut()
            })
            var mealIndex = $(this).index();
            var selectedMeal = result.meals[mealIndex].strMeal;
            
    
            displayproduct(selectedMeal)
            
            $("#loading").hide(2000)
            
        })
    

       
        
    }
        export default   async function displayproduct(value){
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
        $("#loading").hide(2000)
    
    
    }
    


   
    



