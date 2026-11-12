document.addEventListener('DOMContentLoaded', () => {
 const buttons=document.querySelectorAll('[data-category]');
 buttons.forEach(link=>link.addEventListener('click',()=>{
 const cat=link.dataset.category;
 const target=[...document.querySelectorAll('#filters .filter')].find(b=>b.dataset.filter===cat);
 if(target) target.click();
 }));
});