import IngresarCodigoSecreto from "./Juego.js";
import Juego from "./convertirCodigoSecreto.js";

describe("Juego", () => {
  const jugar = new Juego();

  it("Ingresar el codigo secreto", () => {
    expect(IngresarCodigoSecreto("1234")).toEqual("1234");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(jugar.convertirCodigoSecreto("1234")).toEqual("****");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(jugar.convertirCodigoSecreto("12345")).toEqual("*****");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(jugar.convertirCodigoSecreto("123456")).toEqual("******");
  }); 
  it("Comparar el codigo secreto con el intento solamente en la posicion 0", () => {
    expect(jugar.CompararSiEsVaca("1023","0555")).toEqual('*');
  }); 
  it("Comparara la primera posicion de codigo Secreto con todos los caracteres del intento", () => {
    expect(jugar.CompararSiEsVaca("0123","5550")).toEqual('*');
  });
  it("Comparara todas los digitos del codigo Secreto con todos los digitos del intento", () => {
    expect(jugar.CompararSiEsVaca("0123","2551")).toEqual("**");
  }); 
  it("Comparar el codigo secreto con el intento solamente en la posicion 0 para saber si es toro", () => {
    expect(jugar.CompararSiEsToro("12345","14000")).toEqual('!');
  }); 
  it("Comparara todas las posiciones del codigo secreto con el codigo intento para saber cuantos toros existe", () => {
    expect(jugar.CompararSiEsToro("0123","0153")).toEqual("!!!");
  });
  it("Comparara el codigo secreto para saber cuantas vacas y toros existe en el codigo intento", () => {
    expect(jugar.juegoToroVaca("01234","01453")).toEqual("!!**");
  });
  it("Si el codigo intento y el codigo secreto no son iguales se debe restar los intentos ", () => {
    expect(jugar.EscribirIntentos("1234","5555")).toEqual(9);
  });
  it("Volver a jugar", () => {
    expect(jugar.juegoToroVaca("1234","5555")).toEqual("");
  });
  it("Verificar si es ternera: ", () => {
    expect(jugar.compararTernera("1234","5555")).toEqual("#");
  });
});