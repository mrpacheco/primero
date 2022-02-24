// not exactly vanilla as there is one lodash function

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allPlayers = Array.from(document.querySelectorAll('.icon'));
var allPlayers2 = Array.from(document.querySelectorAll('.mininumb'));
var checked = {};

getChecked('tema');
getChecked('pilares');



Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});



function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
  
}



function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}



function setVisibility() {
  allPlayers.map(function (el) {
    var tema = checked.tema.length ? _.intersection(Array.from(el.classList), checked.tema).length : true;
    var pilares = checked.pilares.length ? _.intersection(Array.from(el.classList), checked.pilares).length : true;
    
    
    if (tema && pilares ) {
      el.style.opacity = '1';
      
    } else {
      el.style.opacity = '0';
      
    }
  });

  allPlayers2.map(function (el) {
    var tema = checked.tema.length ? _.intersection(Array.from(el.classList), checked.tema).length : true;
    var pilares = checked.pilares.length ? _.intersection(Array.from(el.classList), checked.pilares).length : true;
    
    
    if (tema && pilares ) {
      
      el.style.opacity = '1';
    } else {
      
      el.style.opacity = '.3';
    }
  });



}


