
import { enterPizza } from "./js/enterPizza.js";
import { enterAdicionales } from "./js/enterAdicionales.js";
import { enterIngredients, enterSteps} from "./js/enterBasePizza.js"
import { printTerminal } from "./js/printData.js";

function app(){
    let pizzaSelected = 0;
    let aditionalSelected = 0;
    let ingredientes="";
    let pizza="";

    pizzaSelected = enterPizza();
    aditionalSelected = enterAdicionales();
    ingredientes= enterIngredients(pizzaSelected,aditionalSelected);
    pizza=enterSteps(pizzaSelected,aditionalSelected);

    //salida
    console.log("============= ORDEN DE PIZZA PEDIDA ========================");
    printTerminal("Marchando la preparacion Pizza Opcion " + pizzaSelected);
    printTerminal("Con Adicional Opcion " + aditionalSelected);
    console.log("============ INGREDIENTES =========================");
    printTerminal(ingredientes);
    console.log("============ PREPARACION PIZZA =========================");
    printTerminal(pizza);
}
app()