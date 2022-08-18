function getHora(hora) {
  let buen= ""
  if (hora >0 && hora <12)
  {
    buen+= "Buenos dias "
  }
  else if (hour>=12 && hour<=18)
  {
    buen+="Buenas tardes "
  }
  else
  {
    buen+="Buenas Noches "
  }
  return buen
}

function saludar(nombre, hora)
{
  const nombre_Usuario = nombre.value;
  
  return  getHora(hora)+ nombre_Usuario; 
}
export default saludar;
