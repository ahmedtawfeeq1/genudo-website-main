/* Concept-scene helpers: pause button + auto-pause when off-screen.
   Scenes are pure-CSS loops; toggling `.paused` on .cstage freezes them. */
(function(){
  var RM = matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
  function wire(stage){
    var btn = stage.querySelector('.cs-pause');
    if(btn){
      var setLbl=function(){ btn.querySelector('span').textContent = stage.classList.contains('paused')?'Play':'Pause';
        btn.querySelector('.ico-play').style.display = stage.classList.contains('paused')?'':'none';
        btn.querySelector('.ico-pause').style.display = stage.classList.contains('paused')?'none':''; };
      btn.addEventListener('click', function(){ stage.classList.toggle('paused'); stage._userPaused = stage.classList.contains('paused'); setLbl(); });
      setLbl();
    }
  }
  function init(){
    var stages = document.querySelectorAll('.cstage');
    stages.forEach(wire);
    if(RM || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function(ents){
      ents.forEach(function(e){
        var s=e.target; if(s._userPaused) return;
        if(e.isIntersecting) s.classList.remove('paused'); else s.classList.add('paused');
      });
    },{threshold:.15});
    stages.forEach(function(s){ io.observe(s); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
