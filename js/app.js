
const apidog_call = `https://api.thedogapi.com/v1/breeds?&order=ASC`

fetch(apidog_call)
.then(response =>{
    return response.json();
    
}).then(data => {
   dogsid = data;
   console.log(dogsid, 'all dog info')
   dogsid.map(dogid => {
     console.log(dogid.id, 'dog id')
     id=dogid.id
     const api_call = `https://api.thedogapi.com/v1/images/search?&breed_id=${id}&order=ASC`
     fetch(api_call)
     .then(response =>{
       return response.json();
         
}).then(data => {
        dogs = data;
        console.log(dogs, 'image url')
        let output = '';
        dogs.map(dog => {
          
            output+=`
            
            <div class="mycard">
              <h1 class="dogName">${dogid.name}</h1>
              <div class="img-container">
                <img src=${dog.url} />
              </div>
               <div class="card-info">
                  <p>Bred for: ${dogid.bred_for ? dogid.bred_for : "N/A"}</p>
                  <p>Breed Group: ${dogid.breed_group ? dogid.breed_group : "N/A"}</p>
                  <p>Height: ${dogid.height.imperial ? dogid.height.imperial : "N/A"} inches</p>
                  <p>Life Span: ${dogid.life_span ? dogid.life_span : "N/A"}</p>
                  <p>Origin: ${dogid.origin ? dogid.origin : "N/A"}</p>
                  <p>Temperament: ${dogid.temperament ? dogid.temperament : "N/A"} </p>
                  <p>Weight: ${dogid.weight.imperial ? dogid.weight.imperial : "N/A"} pounds</p>
                </div>
              </div>
          
          
            
            `
            
        });
        document.getElementById('dog-list-container').insertAdjacentHTML('beforeend', output) 
      });
  
    
      
      
    });
   });

  

 



          
   
        
     