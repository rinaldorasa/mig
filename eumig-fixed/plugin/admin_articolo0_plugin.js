document.getElementById("admin").innerHTML=
'    '+
' <style>   '+
' .bottone_remove{ border:solid 0rem fuchsia; }   '+
' .pos_settaggi_articolo0{ border:dashed .05rem red; }  '+
' .pos_settaggi_articolo0>span{    '+
'  border:solid .05rem rgba(0,0,0,0.75); }   '+
' .pos_settaggi_articolo0>span>span{   '+
'  border:solid 0rem lime; }   '+
'    '+
'   .bottone_remove,  '+
'   .bottone_remove_toggle_completo_jQuery '+
'   { '+
'   position:fixed; top:0; right:0;  '+
'   margin:0; padding:0; '+
'   width:auto; height:0px; '+
'   cursor:pointer; '+
'   background-color: coral; '+
'    }'+
'    '+
'   .bottone_remove>span{ '+
'   margin:0 !important;  '+
'   padding:0 !important; '+
'   background-color:green;  '+
'   color:white;  '+
'   border:none; border-radius:0.2rem; '+
'   font-size:42px; '+
'   z-index:2100; '+
'   } '+
'    '+
'   aside.pos_settaggi_articolo0{ '+
'   margin:0 auto; padding:0; '+
'   text-align:center; '+
'   background-color:oldlace; '+
'   overflow: auto; '+
'   } '+
'    '+
'   .pos_settaggi_articolo0>span{ '+
'   border-radius:0.2rem; '+
'   } '+
'    '+
'   .pos_settaggi_articolo0>span>span{ '+
'   font-size:16px; '+
'   } '+
'    '+
'   aside>span>input { '+
'   width:80px; height:22px; '+
'   background-color: #f8f9fa;  '+
'   color:black;  '+
'   font-size:20px;  '+
'   padding:0rem; '+
'   text-align:center; } '+
'    '+
'   aside>span>span{ font-size:18.5px !important; '+
'   vertical-align:middle; '+
'   color:black; color:indigo; } '+
'    '+
'   .altern_tipo_uno, .altern_tipo_due{ '+
'   margin-left: 0.1rem; margin-right: 0.1rem; '+
'   padding-left: 0.2rem; padding-bottom: 0.1rem; } '+
'    '+
'   .altern_tipo_uno{ '+
'    background-color:burlywood; } '+
'    '+
'   .altern_tipo_due{ '+
'   background-color:var(--bs-secondary); '+
'   background-color:rgb(243, 220, 189); } '+
'    '+
'   aside>button{ '+
'   width:25px; font-size:16px;  '+
'   margin:0; padding:0; '+
'   background-color:oldlace; color:black; '+
'   border:none; '+
'   font: size 16px; } '+
'    '+
'   .bottone_input, .bottone_input_invia_blocco_dati{ '+
'   cursor:pointer; '+
'   margin-right: 0.4rem; '+
'   background-color:transparent; color:black;  '+
'   vertical-align:top; '+
'   border-radius:0.2rem; } '+
'    '+
'   .bottone_input>span{ '+
'   background-color:orange;  '+
'   font-size:34px; '+
'    vertical-align:middle; border-radius:0.2rem; } '+
'    '+
'   aside>a.material-icons{ '+
'   vertical-align:top;  '+
'   background-color:green; color:white;  '+
'   font-size:34px;  '+
'   border-radius:0.2rem; }  '+
'    '+
'   .posizione_spinner{ '+
'   position:fixed; top:0; left:0; border:none; } '+
'    '+
'   .NASCONDI_EUVX, .nascondiuser{ display:none; } '+
'    '+
'   html * { border-color:transparent !important; } '+
'    '+
'   html{ border-color:transparent !important; } '+
'    '+
' </style>   '+
'    '+
'    '+
'  <a id="rimuovi_apiedipagina" class="bottone_remove NASCONDI_EUVX">  '+
'  <span class="material-icons">expand_less</span> </a>  '+
'    '+
'    '+
'  <aside id="pos_settaggi_articolo0"   '+
'  class="pos_settaggi_articolo0 NASCONDI_EUVX" >  '+
'    '+
'  <button id="no_ico_acapopagina" type="button"   '+
'   class="btn btn-secondary btn-sm"> </button>  '+
'    '+
'    '+
'  <span id="dim_win"></span>  '+
'    '+
'  <span class="altern_tipo_uno">  '+
'  <input type="number" id="articolo0_TOP"  '+
'  value="16" >T<span></span>  '+
'  </span>   '+
'    '+
'  <span class="altern_tipo_due">  '+
'  <input type="number" id="articolo0_LEFT"  '+
'  value="16" >L<span></span>  '+
'   </span>   '+
'    '+
'  <span class="altern_tipo_uno">  '+
'  <input type="number" id="articolo0_WIDTH"   '+
'  value="256" >W<span></span>  '+
'  </span>   '+
'    '+
'  <span class="altern_tipo_due">  '+
'  <input type="number" id="articolo0_HEIGHT"  '+
'  value="256" >H<span></span>  '+
'  </span>   '+
'    '+
'  <span class="altern_tipo_uno">  '+
'  <input type="number" id="articolo0_FONT_SIZE"   '+
'  value="16" >F<span></span>  '+
'  </span>  '+
'    '+
'    '+
'  <button onclick="TLWH()" class="bottone_input"   '+
'  style="display:inline-block;">  '+
'  <span class="material-icons">  '+
'  input </span>  '+
'  </button>  '+
'    '+
'  <a href="#main_start" class="material-icons">arrow_circle_up</a>  '+
'  <a href="#main_end" class="material-icons">arrow_circle_down</a>  '+
'    '+
'  </aside>  '+
'    '+
'    '+
'  <span id="rimuovi_WH_apiedipagina"  '+
'  class="wiwihe_remove_svg NASCONDI_EUVX"  '+
'  data-toggle="tooltip"  '+
'  title="Visualizza Dim Window Nasconde Cassella Immagine"  '+
'  style="position:fixed; top:0; left:0;   '+
'  border:solid 0rem red; z-index:2100; " > '+
'    '+
'  <svg width="1em" height="1em"  '+
'  viewBox="0 0 16 16"   '+
'  class="bi bi-window"   '+
'  fill="currentColor"   '+
'  xmlns="http://www.w3.org/2000/svg">  '+
'  <path fill-rule="evenodd"  '+
'  d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1   '+
'  1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2  '+
'  2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2   '+
'  2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>  '+
'  <path fill-rule="evenodd" d="M15 6H1V5h14v1z"/>  '+
'  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1   '+
'  0zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1   '+
'   0zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/> '+
'  </svg> </span>  '+
'    '+
'    '+
'  <span id="attivadmin" class="badge bg-secondary"   '+
'  style="position:fixed; cursor:pointer;   '+
'  bottom:0; left:0; font-size:0.5rem;">  '+
'  &nbsp; </span> '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
'    '+
''
;

jQuery('.bottone_remove').on('click',function(){
if (jQuery(this).find('span').text() == 'expand_more'){
 jQuery(this).find('span').text('expand_less');
 } else {
 jQuery(this).find('span').text('expand_more');
 }
jQuery("#pos_settaggi_articolo0").toggle(); 
 
});


 jQuery("#no_ico_acapopagina").on('click', function()
 {
 jQuery("#rimuovi_apiedipagina").toggle(); 
 jQuery("#rimuovi_WH_apiedipagina").toggle();
 }
 )
 
 
function TLWH(){
articolo0_TOP=document.getElementById("articolo0_TOP").value;
articolo0_LEFT=document.getElementById("articolo0_LEFT").value;
articolo0_WIDTH=document.getElementById("articolo0_WIDTH").value;
articolo0_HEIGHT=document.getElementById("articolo0_HEIGHT").value;
articolo0_FONT_SIZE=document.getElementById("articolo0_FONT_SIZE").value;

document.getElementById("articolo0").innerHTML=
' <style>'+
' .articolo0{'+
' position:absolute;'+ 

' top:'+articolo0_TOP+'px; '+
' left:'+articolo0_LEFT+'px; '+
' width:'+articolo0_WIDTH+'px; '+
' height:'+articolo0_HEIGHT+'px; '+
' font-size:'+articolo0_FONT_SIZE+'px; '+

' background-color:rgba(128,128,128,0.5); '+
' overflow:auto; '+
' '+
' border:solid .2rem orange;'+
' '+
' }'+
' </style>'+
' <div class="articolo0">'+
' '+
' '+
' '+
' </div>'+
'';
}


$(document).ready(function(){
 $('[data-toggle="tooltip"]').tooltip(); 
 });
 
 
jQuery('.wiwihe_remove_svg').on('click',function(){

jQuery("#dim_win").toggle(); 

jQuery("#articolo0").toggle(); 

});


setInterval(
function dimensione_finestra(){

xwin=window.innerWidth; ywin=window.innerHeight;
document.getElementById("dim_win").innerHTML=
' '+
' '+xwin+
' '+
' '+ywin+
' '+
' '+
'';

}

)


 jQuery("#attivadmin").on('click', function()
 {
 jQuery("#dim_win").toggle();
jQuery("#rimuovi_apiedipagina").toggle();
jQuery("#rimuovi_WH_apiedipagina").toggle();
jQuery("#pos_settaggi_articolo0").toggle(); 
 }
 ) 
