// map, filter, arrow function's


// MAP

// problem is :- 
    // given an array, give me back a new array in which every value is multiplied by 2
    // and the input is [1,2,3,4,5]
    // and the output is [2,4,6,8,10]


    // const input = [1,2,3,4,5]
// this is also a right method but in terms of looks the above code is much better than it 
    // const newarray = [];

    // for(let i = 0; i<input.length; i++){
    //     newarray.push(input[i] *2);
    // }
    // console.log(newarray);


    // other solution is 
     
     
    //   const ans = input.map( function (i){
    //     return i*2;
    //   });
    //   console.log(ans)



    //   Filtering

    // problem is :-
        // what if I tell u, given an input array, give me back all the even values from it


        const arr = ["vikas","sherrr","khushi","robin"]

        // const newarr = [];
// this is also a right method but in terms of looks the above code is much better than it 

        // for(let i =0; i<arr.length; i++){
        //     if(arr[i]%2 == 0){
        //           newarr[i].push[arr]
        //     }
        // }
        // console.log(newarr)
 const ans = arr.filter(function (n){
      
              if(n.startsWith("v")){
                return true;
              }else{
                return false;
              }
        })
       console.log(ans);



    //    arrow function 

                                                                                                    
  const arr = ["vikas","sherrr","khushi","robin"]
     const ans = arr.filter(function (n){
      
              if(n.startsWith("v")){                            
                return true;
              }else{
                return false;
              }
        })
       console.log(ans);


            //   or

       
                                                                                                    
  const arr = ["vikas","sherrr","khushi","robin"]
     const ans = arr.filter((n)=>{           // using arrow instead of using write function
      
              if(n.startsWith("v")){                            
                return true;
              }else{
                return false;
              }
        })
       console.log(ans);