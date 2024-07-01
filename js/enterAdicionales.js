import PromptSync from "prompt-sync";

export function enterAdicionales (){
    let anadir_numero = "";
    let seg_NumbOK=0;
    let salir_validacion
    let arrayAdicionales = [" 1.- Extra Queso", " 2.- Extra Jamon", " 3.- Extra Carne", " 4.- Extra Hongos (zetas)", " 5.- Extra Cebolla", " 6.- Extra Pan Ajo", " 7.- Otros"]
    const prompt = PromptSync();

    console.warn ("Ingrese el Adicionales para su pizza ===> " + arrayAdicionales);
    
    //for (let index = 1; index < 3; index++) {
        salir_validacion = "NOK";        
        do{     
            anadir_numero = Number(prompt("Elegir los adicionales para su pizza a preparar ===> "));
            if (isNaN(anadir_numero)) 
                {
                console.error("NO TEXTO - Ingrese solo numeros");
                } else 
                     {
                      if (Number.isInteger(anadir_numero) == false)
                         {
                          console.info("Ingrese solo numeros Enteros");
                         } else 
                              {
                                if (anadir_numero < 1 || anadir_numero > 7)
                                    {
                                        console.info("Valor ingresado debe ser entre los disponibles (1..7) ");           
                                    } else 
                                          {
                                            salir_validacion = "OK";
                                            seg_NumbOK = anadir_numero;
                                          } 
                              } 
                     }
          }while(salir_validacion != "OK") 

    // }
    return arrayAdicionales[seg_NumbOK-1];
    }