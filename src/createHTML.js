const createHTML = (workers) => {
    let workerhtml=""
    let occupationSpecificInfo
    workers.forEach((worker) => {
    
        switch (worker.role) {
            case "Engineer":            
            occupationSpecificInfo= "Github <a href=https://github.com/" + worker.gitHub + " >" + worker.gitHub + "</a>" ;         
              break;
            case "Intern":
                occupationSpecificInfo= "School " + worker.school ;
                break;
             default:
             occupationSpecificInfo= "Office Number " + worker.officeNumber ;
        }
          
        workerhtml+=`
        <div class="col">
        <div class="card shadow-sm">
            <div class="col card-body bg-dark">
                <h1 class="align-items-center text-left text-white" >` + worker.name +`</h1>
                <h2 class="align-items-center text-left text-white" >` + worker.role +`</h2>
            </div>
            <div class="card-body">
                <h4 class="card-text">ID ` + worker.id +`</h4>
                <h4 class="card-text">Email <a href="worker.email">` + worker.email +`</a></h4>
                <h4 class="card-text">` + occupationSpecificInfo +` </h4>
            </div>
        </div>
    </div>`
    });
return `
<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
   
    <title>Workers</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/album/">

    

    <!-- Bootstrap core CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Favicons -->

<meta name="theme-color" content="#7952b3">


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
  </head>
  <body>
    
<header>
 
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
         
       
                <h1 class="text-white">My Workforce</h1>
       
      
      
    </div>
      
    </div>
  </div>
</header>

<main>

 

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
      ` + workerhtml +`

     </div>
    </div>
     
  </div>

</main>


</body></html>
`



}


module.exports =   createHTML
  
