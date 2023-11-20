async function getDogs(){

   
    try{
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.thedogapi.com/v1/breeds?`
        let data = await fetch(api);
        let dogs = await data.json();
        console.log(dogs);
        let output = '';
        dogs.map(dog => {
            key=dog.id;
            name=dog.name;
            console.log(dog.id);
            output+=`
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
              <img src="gdogs.jpg" className="img-card-top" style="height:14rem"alt="dogs"/>
                <div className="card-body text-capitalize">
                
                  <h6 class="name-title">${name}</h6>
                  <h6 class="id">${key}</h6>
                  <h6 className="text-warning text-slanted">Provided by Dog API</h6>
                </div>
                <div className="card-footer">
                  <button type="button" className="btn btn-primary text-capitalize" ></button>
                  <a href="https://api.thedogapi.com" className="btn btn-success mx-2 text-capitalize" target="_blank" rel="noopener noreferrer">dog api</a>
                </div>
            </div>
          
          </div>
            
            `
           
        });
    
        document.getElementById('dog-info').insertAdjacentHTML('beforeend', output)
    }catch(error){
        console.log(error);
    }
    
  }

 getDogs();
    
  