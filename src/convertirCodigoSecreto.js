class Juego{
    constructor()
    {
        this.intentos = 10;
    }
    convertirCodigoSecreto(codigo)
    {
        var codigosecreto = codigo;
        if(this.contarCantidadDeDigitos(codigo) == 4)
        {
            codigosecreto = "****";
        }
        if(this.contarCantidadDeDigitos(codigo) == 5)
        {
            codigosecreto = "*****";
        }         
        if(this.contarCantidadDeDigitos(codigo) == 6)
        {
            codigosecreto = "******";
        }
        return codigosecreto;  
    }
    contarCantidadDeDigitos(codigo)
    {
        var cantidadDigitos = codigo.length;
        return cantidadDigitos;
    }
    compararCadenas(cadena1,cadena2,pos1,pos2)
    {
        var resp = false;
        if(cadena1.charAt(pos1) === cadena2.charAt(pos2))
        {
            resp =true;
        }
        return resp;
    }
    
    CompararSiEsVaca(codigosecreto,codigoIntento)
    {
        let vaca = '*';
        let cadenaVacas = '';
        for(var j = 0; j <codigosecreto.length; j++)
        {
            for(var i = 0; i < codigoIntento.length; i++)
            {
                if(this.compararCadenas(codigosecreto,codigoIntento,i,j) == true)
                {
                    if (i != j)
                    {
                        cadenaVacas += vaca;
                    }
                }
            }
        }       
        return cadenaVacas;
    }  
    CompararSiEsToro(codigosecreto,codigoIntento)
    {
        let toro = '!';
        let cadenaToros = "";
       for(var i = 0; i< codigosecreto.length; i++)
       {
            if (this.compararCadenas(codigosecreto,codigoIntento,i,i) == true)
            {
                cadenaToros += toro;
            }
       }        
       return cadenaToros;
    }  
    juegoToroVaca(codigosecreto,codigoIntento)
    {
      let cadToros =this.CompararSiEsToro(codigosecreto,codigoIntento);
      let cadVacas = this.CompararSiEsVaca(codigosecreto,codigoIntento);   
      let cadTernera = this.compararTernera(codigosecreto,codigoIntento);
      let CadToroVaca=cadToros.concat(cadVacas);
      cadenaVacas = cadenaVacas.concat(cadTernera);
      return CadToroVaca;
    }
    RestarIntentosJuego()
    {
        this.intentos = this.intentos -1;
    }
    Ganar()
    {
        alert("GANASTE!!!!");
    }
    
    EscribirIntentos(codigoIntento, codigosecreto)
    {
        if(codigoIntento != codigosecreto)
        {
            this.RestarIntentosJuego();
        }
        return this.intentos;
    }
    JugarOtravez(codigosecreto,codigoIntento)
    {   
        let cadena = "";
        var intento1;
        cadena = juegoToroVaca(codigosecreto,codigoIntento);
        intento1 = EscribirIntentos(codigosecreto,codigoIntento);
        if( cadena == "")
        {
            alert("Ninguna coincidencia   :(");
        }
       return cadena;
    }
   
    compararTernera(codigosecreto,codigoIntento)
    {
        let cadena = "";
        let ternera = '#';
        for(var i=0; i< i< codigosecreto.length; i++)
        {
            for(var j=0; j< codigoIntento.length; j++)
            {
                if((codigosecreto.charAt(i) === codigoIntento.charAt(j) +1 ) || (codigosecreto.charAt(i) === codigoIntento.charAt(j)-1))
                {
                    cadena += ternera;    
                }
            }
        }
        return cadena;
    }
    Bisonte(codigosecreto,codigoIntento)
    {
        let bisonte = '%';
        let cadena = "";
        for(var i =0; i<codigosecreto; i++)
        {
            if(codigosecreto.at(i) %2 == 0)
            {
                cadena += bisonte;
            }
        }
       
        return cadena;
    }
}

export default Juego;