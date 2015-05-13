{
  function cadenaMultiplicativa(arreglo){
    var res="";
    for(i=0; i < arreglo.length; i++){
      if(i == arreglo.length -1){
        res += arreglo[i];
      }else{
         res += arreglo[i];
        }
      }
    return res;
  }
  function suma_(p1, p2){
    return p1 + "+" + p2;
  }
  function resta_(p1, p2){
    return p1 + "-" + p2;
  }
  function multiplicacion_(p1, p2){
    if(isNaN(p1)){
      return p1 + "*" + p2;
    }
    if(isNaN(p2)){
      return p1 + p2;
    }
    return p1 + "*" + p2;
  }
  function division_(p1, p2){

    return "\\frac{" + p1 + "}{" + p2 + "}";
  }
  function mathJaxRender(e){
    return "$"+e+"$";
  }
}
start
  = additive

additive
  = left:multiplicative "+" right:additive { return suma_(left,right); }
  / resta

resta
  = left:multiplicative "-" right:resta { return resta_(left,right); }
  / multiplicative

multiplicative
  = left:primary "*" right:multiplicative { return multiplicacion_(left, right); }
  / division

division
  = left:primary "/" right:division { return division_(left,right); }
  / primary

primary
  = exponentes
  / "d/dx(" additive:additive ")" { return "\\frac{d}{dx}(" + additive + ")"; }
  / "d\u00B2/dx\u00B2(" additive:additive ")" { return "\\frac{d}{dx}(" + additive + ")"; }
  / "(" additive:additive ")" { return additive; }

exponentes
  = left:combinado right:"\u00B2" {return left + "^" + 2;}
  / left:combinado right:"\u00B3" {return left + "^" + 3;}
  / left:combinado right:"\u207F" {return left + "^" + n;}
  / combinado

combinado
  = left:variables right:combinado {return multiplicacion_(left,right);}
  / variables

variables "variables"
  = vars:[ewxyz]i+ { return cadenaMultiplicativa(vars); }
  / integer

integer "integer"
  = digits:[0-9]+ { return cadenaMultiplicativa(digits); }

  //d/dx((3+4))+d²/dx²((3x))
  //d/dx((x²))
  //d/dx((x²+3x))
  //d²/dx²((4+x))
