import PromptSync from "prompt-sync";

export function enterPizza (){
    let anadir_numero = "";
    let pri_NumbOK=0;
    let seg_NumbOK=0;
    let salir_validacion;
    let arrayPizzas = [" 1.- Hawaiiana", " 2.- Pepperoni", " 3.- Anchoas", " 4.- Jamon y Queso", " 5.- Bacon", " 6.- Carne", " 7.- Otros"]
    const prompt = PromptSync();

    console.warn ("Ingrese su eleccion [ " + arrayPizzas + "]");

    //for (let index = 1; index < 3; index++) {
        salir_validacion = "NOK";        
        do{     
            anadir_numero = Number(prompt("Elegir la pizza a preparar ===> "));
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
                                            pri_NumbOK = anadir_numero;
                                          } 
                              } 
                     }
          }while(salir_validacion != "OK") 

    // }

    return arrayPizzas[pri_NumbOK-1];
    }