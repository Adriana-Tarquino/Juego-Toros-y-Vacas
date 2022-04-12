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
    expect(jugar.CompararSiEsVaca("0123","0555")).toEqual('*');
  }); 
  it("Comparara la primera posicion de codigo Secreto con todos los caracteres del intento", () => {
    expect(jugar.CompararSiEsVaca("0123","0555")).toEqual('*');
  }); 
});