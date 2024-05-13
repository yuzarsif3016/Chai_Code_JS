const form = document.querySelector('form')
//Following will give u empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height))
        {

            results.innerHTML = "Please give a valid height"
        }
       else if(weight === '' || weight < 0 || isNaN(weight))
            {
    
                results.innerHTML = "Please give a valid weight"
            }
            else{
              const bmi = (weight / ((height*height)/10000)).toFixed(2)
              //Show the result
              results.innerHTML = `<span>${bmi}</span>`
            }
})