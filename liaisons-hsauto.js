/* HS AUTO — raccordement accueil, formulaire et pages Nantes */
(function(){
  var target='demande-rachat.html';
  var form=document.getElementById('estimateForm');
  if(form){
    form.addEventListener('submit',function(event){event.preventDefault();event.stopImmediatePropagation();window.location.href=target;},true);
    var buttons=form.querySelectorAll('button[type="submit"],input[type="submit"]');
    buttons.forEach(function(b){if(b.tagName==='BUTTON')b.textContent='Continuer vers le formulaire de rachat';else b.value='Continuer vers le formulaire de rachat';});
  }
  document.querySelectorAll('a[href="#estimation"]').forEach(function(a){a.setAttribute('href',target)});
  var main=document.querySelector('main')||document.body;
  var section=document.createElement('section');section.id='pages-nantes';
  section.style.cssText='padding:55px 22px;background:#09121b;color:#e7f7f9;text-align:center';
  section.innerHTML='<div style="max-width:1040px;margin:auto"><h2 style="font-size:clamp(25px,4vw,38px);margin-bottom:12px">Rachat de voitures à Nantes</h2><p style="margin:0 auto 25px;max-width:700px;color:#b9cbd0">HS AUTO étudie le rachat de véhicules en panne, accidentés ou avec des réparations coûteuses, à Nantes et en Loire-Atlantique.</p><div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px"><a href="rachat-voiture-en-panne-nantes.html">Voiture en panne</a><a href="rachat-voiture-accidentee-nantes.html">Voiture accidentée</a><a href="rachat-voiture-controle-technique-nantes.html">Contrôle technique refusé</a><a href="rachat-voiture-probleme-mecanique-nantes.html">Problème mécanique</a></div><p style="margin-top:28px"><a href="demande-rachat.html" style="display:inline-block;background:#62e6e9;color:#071117;padding:13px 22px;border-radius:8px;font-weight:800">Demander une estimation</a></p></div>';
  section.querySelectorAll('div>div>a').forEach(function(a){a.style.cssText='display:inline-block;padding:12px 16px;border:1px solid #2e737c;border-radius:9px;color:#7deaf0;text-decoration:none'});
  main.appendChild(section);
})();