window.addEventListener('DOMContentLoaded', ()=>{
    const tabs=document.querySelectorAll('.tabheader__item'),
    tabsContent=document.querySelectorAll('.tabcontent'),
    tabParent=document.querySelector('.tabheader__items');
   
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(item=>{
           item.classList.remove('tabheader__item_active');
        });
    }
   
   function showTabContent(i=0){
       tabsContent[i].classList.add('show','fade');
       tabsContent[i].classList.remove('hide');
       tabs[i].classList.add('tabheader__item_active');
   }
   
   hideTabContent();
   showTabContent();
   
   tabParent.addEventListener('click',(event)=>{
       const target=event.target;
       if(target && target.classList.contains('tabheader__item')){
           tabs.forEach((item,i)=>{
                if(target==item){
                   hideTabContent();
                   showTabContent(i);
                }
           });
       }
   });
   });

   let heroes=document.querySelectorAll('.hero'),
   backgrounds=["none","img/soldier__one/soldier10.png","img/soldier__one/soldier11.png","img/soldier__one/soldier12.png","img/soldier__one/soldier13.png","img/soldier__one/soldier14.webp"];

   heroes.forEach((item,i)=>{
        item.style.cssText=`background:url("${backgrounds[i]}") no-repeat 50% 50%;
        background-size:cover;`;
   });