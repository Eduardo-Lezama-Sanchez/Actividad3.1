function validaFechaMenor(campo){
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;
  if (campo.value == "")
    alert("Faltan datos");
  else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

  function validaFecha(valor){
      var dConvertida = null;
      var sAnio = "";
      var sMes = "";
      var sDia = "";
      var nAnio=0, nMes=0, nDia = 0;
      if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nDia = parseInt(valor.substring(8,10), 10);
        nMes = parseInt(valor.substring(5,7), 10);
        nAnio = parseInt(valor.substring(0,4), 10);

        if (nDia <1 || nDia>31)
          alert("El día no es válido")
        else{
          if (nMes <1 || nMes>12)
            alert("El mes no es válido");
          else{
            if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
               nMes==8 || nMes==10 || nMes==12) && nDia > 31)
               alert("El mes tiene máximo 31 días");
            else if ((nMes==4 || nMes==6 || nMes==9 ||
                  nMes==11) && nDia > 30)
               alert("El mes tiene máximo 30 días");
            else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
               alert("Febrero tiene 28 días o 29 en bisiesto");
            else{
              dConvertida = new Date();
              dConvertida.setFullYear(nAnio, nMes-1, nDia);
            }//fin validaci�n día-mes
          }//mes válido
        }//día válido
        creasigno(nDia,nMes);
      }//formato válido

      else{
        alert("No tiene formato de fecha");
      }
      return dConvertida;
  }
  function creasigno(nDia,nMes){

  var newDiv = document.createElement("div");

  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4))
  {
  newDiv.innerHTML=('SIGNO ARIES <br> Numero de la suerte 5');
  newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#FF0000; width: 500px ;height:50px ";
  }
  else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
   {
    newDiv.innerHTML=('SIGNO TAURO <br> Numero de la suerte 12');
    newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#008000; width: 500px ;height:50px ";
    }
    else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
    {
      newDiv.innerHTML=('SIGNO GEMINIS <br> Numero de la suerte 3');
      newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#FFFF00; width: 500px ;height:50px ";
    }
      else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
      {
        newDiv.innerHTML=('SIGNO CANCER <br> Numero de la suerte 2');
        newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#C0C0C0; width: 500px ;height:50px ";
      }
        else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
        {
          newDiv.innerHTML=('SIGNO LEO <br> Numero de la suerte 9');
          newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#FFD700; width: 500px ;height:50px ";
        }
          else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
            newDiv.innerHTML=('SIGNO VIRGO <br> Numero de la suerte 17');
            newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#800000; width: 500px ;height:50px ";
          }
            else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
            {
              newDiv.innerHTML=('SIGNO LIBRA <br> Numero de la suerte 6');
              newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#FFC0CB; width: 500px ;height:50px ";
            }
              else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
              {
                newDiv.innerHTML=('SIGNO ESCORPIO <br> Numero de la suerte 8');
                newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#8B0000; width: 500px ;height:50px ";
              }
                else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
                {
                  newDiv.innerHTML=('SIGNO SAGITARIO <br> Numero de la suerte 4');
                  newDiv.style="position: relative;left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#FF00FF; width: 500px ;height:50px ";
                }
                  else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
                  {
                    newDiv.innerHTML=('SIGNO CAPRICORNIO <br> Numero de la suerte 23');
                    newDiv.style="position: relative; left: 390px; color: #ffffff; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#000000; width: 500px ;height:50px ";
                  }
                    else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                    {
                      newDiv.innerHTML=('SIGNO ACUARIO <br> Numero de la suerte 0');
                      newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#40E0D0; width: 500px ;height:50px ";
                    }
                      else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3))
                      {
                        newDiv.innerHTML=('SIGNO PICIS <br> Numero de la suerte 7');
                        newDiv.style="position: relative; left: 390px; margin: 10px; text-align: center; border: 2px solid #999999; background-color:#4B0082; width: 500px ;height:50px ";
                      }


  //var newContent = document.createTextNode("SIGNO");
 //añade texto al div creado.

   // añade el elemento creado y su contenido al DOM
   var currentDiv = document.getElementById("div");
   document.body.insertBefore(newDiv, currentDiv);
}
