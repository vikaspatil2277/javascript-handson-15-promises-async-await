// Q1. 
 function sum(a, b){
            return a + b;
          }
          function detail(name, sum){
            console.log(`${name} ${sum}`);
          }
          
          detail("Result", sum(50,50))

// Q2. 
         setTimeout(() => {
        let count=1;
          console.log(count++);
          setTimeout(() => {
            console.log(count++);
            setTimeout(() => {
              console.log(count++);
                setTimeout(() => {
                  console.log(count++);
                    setTimeout(() =>{
                      console.log(count++);
                        setTimeout(() =>{
                          console.log(count++);
                            setTimeout(() =>{
                              console.log(count++);
                            },7000)
                        },6000)
                    },5000)
                },4000);
            },3000);
        },2000);
      },1000); 
      
 //   Q3. 

     const printNumberPromise = ms => new Promise(resolve => setTimeout(resolve, ms)); 
        let chain = Promise.resolve(); 
        for (let count = 1; count <= 7; count++) { 
          chain = chain.then(() => { 
            console.log(count); 
            return printNumberPromise(count*1000); 
          }); 
        }

 // Q4. 

       const promise = new Promise(function(res,rej){
            let result="";
            if(result == "yes"){
              res("promise resolved");
            }
            else{
              rej("promise rejected");
            }
          })
          
          promise.then(function(data){
            console.log(data);
          }).catch(function(err){
            console.log("Error",err);
          })
     

  //   Q5. 

         
        const mainFunction = (callback) => {
          setTimeout(() => {
            callback([2, 3, 4]);
          }, 2000)
        }

        const add = (array) => {
          let sum = 0;
          for(let i of array) {
            sum += i;
          }
          console.log(sum);
        }

         mainFunction(add);

        //  Q6. 

         setTimeout(() => {
            console.log("Hey,")
            setTimeout(() => {
              console.log("how");
              setTimeout(() =>{
                console.log("are");
                setTimeout(() => {
                  console.log("you");
                  setTimeout(() =>{
                    console.log("buddy");
                  },5000)
                },4000)
              },3000)
            },2000)
          },1000)

  //   Q7. 

  const promisee = new Promise(function(res,rej){
            let num=7;
            if(num%2 == 0){
              res("its even");
            }
            else{
              rej("its not even");
            }
          })
          
          promisee.then(function(data){
            console.log(data);
          }).catch(function(err){
            console.log("Error",err);
          })

// Q8. 
         function resolveAfter2Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 2000);
            });
          }
          
          async function asyncCall() {
            console.log('calling');
            const result = await resolveAfter2Seconds();
            console.log(result);
            
          }
          
          asyncCall();

//   Q9. 
const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });
    
    Promise.all([promise1, promise2, promise3]).then((values) => {
      console.log(values);
    });