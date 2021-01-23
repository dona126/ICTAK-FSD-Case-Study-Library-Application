

    let title=document.getElementById("title");
    let author=document.getElementById("author");
    let life=document.getElementById("life");
    let genre=document.getElementById("genre");
    
    let error1=document.getElementById("error1");
    let error2=document.getElementById("error2");
    let error3=document.getElementById("error3");
    let error4=document.getElementById("error4");
    let flag=0;
  
    let regexptitle= /^([A-Za-z0-9\._-]+)$/;
    let regexpauthor= /^([A-Za-z0-9\._-]+)$/;
    let regexplife= /^([0-9\-]+)$/;
    let regexpgenre= /^([A-Za-z]+)$/;
    // let regexppwd= /^([A-Za-z]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    // + one or more
  
    
    
    
    function titleValidation()
    {
      
      if(regexptitle.test(title.value) )
      {
        error1.innerHTML="Valid format.";
        error1.style.color="green";
        return authorValidation();
        
      }
     else{
    
        error1.innerHTML="Invalid, can include A-Z , a-z , 0-9 , _ , - and . only.";
        error1.style.color="red";
        return false;
    
         } 
      
    }
  
    function authorValidation()
    {
      
      if(regexpauthor.test(author.value) )
      {
        error2.innerHTML="Valid format.";
        error2.style.color="green";
        return lifeValidation();
        
      }
     else{
    
        error2.innerHTML="Invalid, can include A-Z , a-z , 0-9 , _ , - and . only.";
        error2.style.color="red";
        return false;
    
         }  
      
    }



    function lifeValidation()
    {
      
      if(regexplife.test(life.value) )
      {
        error3.innerHTML="Valid format.";
        error3.style.color="green";
        return genreValidation();
        
      }
     else{
    
        error3.innerHTML="Invalid, can include 0-9 and - only.";
        error3.style.color="red";
        return false;
    
         }  
      
    }
   

    function genreValidation()
    {
      
      if(regexpgenre.test(genre.value) )
      {
        error4.innerHTML="Valid format.";
        error4.style.color="green";
        return true;
        
      }
     else{
    
        error4.innerHTML="Invalid, can include A-Z and a-z only.";
        error4.style.color="red";
        return false;
    
         }  
      
    }
   