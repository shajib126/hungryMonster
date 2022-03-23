fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res => res.json()).then(data => mealData(data))

fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b').then(res => res.json()).then(data => mealData(data))

fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c').then(res => res.json()).then(data => mealData(data))

const getSingleMeal = value => {
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`).then(res => res.json()).then(data => singleMeal(data))
  
}


const singleMeal = meals => {
    meals.meals.map(meal => filterMeal(meal))
}

const filterMeal = data => {
    const mainMeal = document.getElementById('single')
    const meals = `
        <img src="${data.strMealThumb}"/>
        <h3>${data.strMeal}</h3>
    `
    const meal = document.createElement('div')
    meal.innerHTML = meals
    mainMeal.appendChild(meal)
}




const mealData = meals => {
   meals.meals.map(meal => getMeal(meal) )
}

const getMeal = data => {
    const mainMeal = document.getElementById('meal')
    const meals = `
        <img src="${data.strMealThumb}"/>
        <h3>${data.strMeal}</h3>
    `
    const meal = document.createElement('div')
    meal.innerHTML = meals
    mainMeal.appendChild(meal)
    
    const id = parseInt(data.idMeal)
    meal.addEventListener('click',function(){
        console.log(typeof(id));
        fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json()).then(data =>mealDatails(data) )
    })
}
const mealDetails = data => {
    data.meals.map(meal => getMealDetails(meal))
}
const getMealDetails = meal => {
    const detailMeals = document.getElementById('detailMeal')
    const detail = `
        <img src= "${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p>${strIngredient1}</p>
        <p>${strIngredient2}</p>
        <p>${strIngredient3}</p>
        <p>${strIngredient4}</p>
        <p>${strIngredient5}</p>
        <p>${strIngredient6}</p>
        <p>${strIngredient7}</p>
        <p>${strIngredient8}</p>
        <p>${strIngredient9}</p>
        <p>${strIngredient10}</p>
        <p>${strIngredient11}</p>
    `
    const detailMeal = document.createElement('div')
    detailMeal.innerHTML = meals
    detailMeals.appendChild(detailMeal)
}
document.getElementById('searchBtn').addEventListener('click',function(e){
    e.preventDefault()
    const inputValue = document.getElementById('search').value
    getSingleMeal(inputValue)
})



