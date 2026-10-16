// Inline script to remove borders from tables used for figures and center table cells
(function(){
  function styleTables(){
    if(typeof document === 'undefined') return;
    document.querySelectorAll('table').forEach(function(t){
      try{
        var hasImg = t.querySelector('img') !== null;
        if(hasImg || t.classList.contains('figure-table') || t.classList.contains('figure')){
          t.style.border='none';
          t.querySelectorAll('th,td').forEach(function(c){
            c.style.border='none';
            c.style.textAlign='center';
          });
        } else {
          t.style.borderCollapse='collapse';
          t.querySelectorAll('th,td').forEach(function(c){
            c.style.border='1px solid #e5e5e5';
            c.style.textAlign='center';
          });
        }
      }catch(e){/* ignore */}
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',styleTables);} else {styleTables();}
})();
