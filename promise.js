const promiseOne= new Promise(function(resolve, reject){
    //do and asyns task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("asyns task is complete");
        resolve()
    },1000) 
})
promiseOne.then(function(){
    console.log("promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resoled");
    
})

let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 1000);
  }); 
myPromise
    .then((result) => {
      console.log(result); // Output: "Operation successful!" (if successful)
    })
    .catch((error) => {
      console.error(error); // Output: "Operation failed!" (if failed)
    });

    const promiseThree=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username:"arup", password:"1234"})
        },1000)
    })
    promiseThree.then(function(user){
        console.log(user);
        

    })


    const promiseFour=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true
            if(error){
                resolve({username:"asde",email:"xyz23@example.com"})
            }
            else{
                reject("ERROR: it is failed,Something went wrong!")
            }
        },1000)
    })
    const username=promiseFour.then((user)=>{
        console.log(user);
        return user.username;
     }).then((username)=>{
        console.log(username);
     })
    .catch(function(error){
        console.log(error)
    }).finally(()=>{
        console.log("promise is done")
    })


    const promiseFive=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true
            if(!error){
                resolve({username:"javascript",password:"52341"})
            }
            else{
                reject("ERROR: javascript went wrong!")
            }
        },1000)
    })
    async function consumePromise(){
        try{
            const response=await promiseFive
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    consumePromise()
    
