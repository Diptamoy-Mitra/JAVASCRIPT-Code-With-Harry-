let r = setInterval(() => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  let date = a.getDate();
  let monthh = a.getMonth()+1;
  let year = a.getFullYear();


  let hr = document.getElementById('hour')
  let min = document.getElementById('minute')
  let sec = document.getElementById('second')
  let day = document.getElementById('day');
  let mon = document.getElementById('month');
  let ye = document.getElementById('year');

  if(h>12)
  {
    hr.innerHTML=h-12+" : ";
    min.innerHTML=m+" : ";
    sec.innerHTML=s+" PM ";
  }
  else{
    hr.innerHTML=h+" : ";
    min.innerHTML=m+" : ";
    sec.innerHTML=s+" AM ";
  }

  day.innerHTML=date+" / ";
  mon.innerHTML=monthh+" / ";
  ye.innerHTML=year;

}, 1000)