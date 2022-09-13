//selection of button1
document.getElementById("button1").addEventListener("click",getText)


//function to get the text from local text file
function getText(){
  fetch("test.txt")
  .then(res=>res.text())
  .then(data=>{
    console.log(data)

    //display to the UI
    document.getElementById("output").innerHTML=data;
  }).catch(err=>{
    console.log(err)
  })
}

//Mechanism to get Post.json data in the DOM 
document.getElementById("button2").addEventListener("click",getjsondata)

//function to get the json data from a local Json file 
function getjsondata(){
  //logic to fetch the json data
  fetch("posts.json")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)

    // /display the data using forEach loop 
    let output="";
    data.forEach(function(post){
      output+=`
      
      <li>${post.title}</li>
      <li>${post.body}</li>
      
      `
    });
    document.getElementById("output").innerHTML=output;
  }).catch(err=>{
    console.log(err);

    //Display the error message in DOM 
    document.getElementById("output").innerHTML=err;
  });
}


//We will use external APi to fetch the data from the server using url


//Add an event listerner to button3
document.getElementById("button3").addEventListener("click",getApiData);

//function to get the data from an external api 
function getApiData(){
  fetch("https://api.github.com/users")
  .then(res=>res.json())
  .then(data=>{
    console.log(data);

    //display the data to the UI 
    let output="";
    data.forEach((user)=>{
      output+=`
      <li>${user.login}</li>
      <img src="${user.avatar_url} alt="${user.login}" width="300px" height="300px">
      
      `;
    })
    //Merging the data to div with id output 
    document.getElementById("output").innerHTML=output;
  }).catch(error=>{
    console.log(error);
    //Display error message
    document.getElementById("output").innerHTML=err;
  })
}