// convém estar no onload da janela
window.onload = function()
{
  var largura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var img = document.querySelector("#image");
  if(largura>=1024)
  {
    img.setAttribute('src', 'images/image-header-desktop.jpg');
  
  } else {
    img.setAttribute('src', 'images/image-header-mobile.jpg');
   
  }
} // fim do window.onload