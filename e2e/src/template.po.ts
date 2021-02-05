//?PRUEBAS.E4 & E5 & E6. Fernanda Marcelin Leyva
//?Observamos que para las prubas #5 no se observa el cambio de pais sin embargo el valor en codigo si lo hace.
//?Por otra parte en la pruba #6 dependiendo el tiempo algunas acciones pueden llegar a marcar "errores" debido a
//?exceso de tiempo porque la accion se retrasa mucho
import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class TemplatePage { // clase de la página formularios reactive

  emailinput:ElementFinder;
  errorsText: ElementArrayFinder;
  //paischeckbox: ElementFinder;

  constructor() {
    this.emailinput = element(by.name('correo'));// obtenemos en input por formControlMail
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
    //this.paischeckbox = element(by.cssContainingText('option','Cuba'));
  }
  navigateToTemplatePage(): Promise<unknown> { // navega a la ruta /reactive
    return browser.get(browser.baseUrl + 'template') as Promise<unknown>;
  }

  setMail(email: string): Promise<void>{ // escribe en el input lastname
    this.emailinput.clear();
    return this.emailinput.sendKeys(email) as Promise<void>;
  }

  getMail(): Promise<string>{ // regresa el texto del input lastname
    return this.emailinput.getAttribute('value') as Promise<string>;
  }

  getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
    return this.errorsText.get(indice).getText() as Promise<string>;
  }
}
