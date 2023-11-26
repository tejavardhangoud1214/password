let slider=document.querySelector("[data-slider]");
let size=document.querySelector("[data-length]");
let copy=document.querySelector("[data-copyMsg]");
let createPassword=document.getElementsByClassName("generate-pass")[0];
let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let numbercase=document.getElementById("numbercheck");
let specialChar=document.getElementById("specialcharacter");
let indication=document.querySelector("[data-indicator]")
let datacop=document.querySelector("[data-copy]");
let allCheck=document.querySelectorAll("input[type=checkbox]")
let btncopy=document.getElementById("copybtn")
let dis=document.getElementById("outputDisplay")


let password=""
let checkcount=0;
let passLength=10;
let symb="!~#$%^&*,./\|{}[]:;"

handle()



function handle()
{
     slider.value=passLength;
     size.innerHTML=slider.value;




}
slider.addEventListener('input',y)


function y(event){


      passLength=event.target.value;
       handle()


}

function indicator(coll)
{

    indication.style.backgroundColor=coll
       
       


}
function getRandom(min,max)
{

        return  Math.floor( Math.random()*(max-min))+min


}

function getRandomNumber()
{
            
            return getRandom(0,9)
}

function getLowerCase()
{

   return  String.fromCharCode( getRandom(97,123))
       


}
function getUpperCase()
{

   return  String.fromCharCode( getRandom(65,91))
       

}

function getSymbol()
{


        let i=getRandom(0,symb.length-1)
        return symb.charAt(i)
       
         

}

function strength()
{
    let hasUppercase=false;
    let hasLowerCase=false;
    let hasNumber=false;
    let hasSymbol=false;
    if(lowerCase.checked)
    {
            hasLowerCase=true
    }
    if(upperCase.checked)
    {
           hasUppercase=true
    }
    if(numberChe.checked)
    {
           hasNumber=true
    }
    if(symbolCheck.checked)
     {
        hasSymbol=true;
     }
     if(hasLowerCase&&hasUppercase&&(hasNumber||hasSymbol)&&passLength>10)
     {
        indicator("#85cc18");
     }
    else if((hasLowerCase||hasUppercase)&&(hasNumber||hasSymbol)&&passLength<6)
    {
        indicator("#9530ce")
    }
    else if(hasLowerCase&&hasUppercase)
    {
        indicator("#2c777a")
    }
    else if(hasLowerCase)
    {
          indicator("#004252")
    }
    


      

}



async function copyText()
{
      
    let copyval=datacop.previousElementSibling.value;

  try{
   await navigator.clipboard.writeText(copyval)

      copy.innerHTML="copied"

  }
  catch(e)
  {

      

  }

  copy.classList.add('active')

   setTimeout(()=>{

        copy.classList.remove('active')
        copy.innerHTML=""

    },2000)

   



}

btncopy.addEventListener('click',()=>{

     let copyval=datacop.previousElementSibling.value;
          if(copyval)
          {
                copyText()
          }
   


})


function checkbox(event)
{
      checkcount=0;

     allCheck.forEach((values)=>{

            if(values.checked)
            {
                checkcount++;
                
            }
        })

        if(passLength<checkcount)
        {
            passLength=checkcount;
            handle()
        }

        

}


allCheck.forEach((values)=>{


      values.addEventListener('change',checkbox)


})















createPassword.addEventListener('click',()=>{



    if(checkcount==0)
    {
        alert('choose check box');
    }
    if(passLength<checkcount)
    {
        passLength=checkcount;
        handle()
    }

    password="";


         let a=[];
    
         if(upperCase.checked)
         {
              a.push(getUpperCase)
         }
              
              if(lowerCase.checked)
              {
                      a.push(getLowerCase)
                    
              }
              if(numberChe.checked)
              {
                     a.push(getRandomNumber)
                  
              }
              if(symbolCheck.checked)
              {
                     a.push(getSymbol)
                   
              }
              for(let i=0;i<a.length;i++)
              {

                   password=password+a[i]();

              }
             
              for(let i=0;i<passLength-checkcount;i++)
              {

                     let nop=getRandom(0,a.length)
                     password=password+a[nop]()
              }
          

            
           if(checkcount==0)
           {
                alert('choose check box')
                
           }



            dis.value=password;


            strength()

  
              
            






})
