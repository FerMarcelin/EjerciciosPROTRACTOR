import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ReactivePage { // clase de la página formularios reactive

  title: ElementFinder;
  nameinput: ElementFinder;
  lastnameinput: ElementFinder;
  emailinput:ElementFinder;
  usuarioinput:ElementFinder;
  passwordinput:ElementFinder;
  passwordconfinput:ElementFinder;
  estadoinput:ElementFinder;
  municipioinput:ElementFinder;
  hobbieinput:ElementFinder;
  saveButton: ElementFinder;
  addButton: ElementFinder;
  deletehobbieButton: ElementFinder;
  errorsText: ElementArrayFinder;

  constructor() {
    this.title = element(by.css('h4')); // obtenemos el elemento h4
    this.nameinput = element(by.css('input[formControlName=nombre]')); // obtenemos en input por formControlName
    this.lastnameinput = element(by.css('input[formControlName=apellido]')); // obtenemos en input por formControlLastName
    this.emailinput = element(by.css('input[formControlName=correo]'));// obtenemos en input por formControlMail
    this.usuarioinput = element(by.css('input[formControlName=usuario]'));// obtenemos en input por formControlUsuario
    this.passwordinput = element(by.css('input[formControlName=pass1]'));
    this.passwordconfinput = element(by.css('input[formControlName=pass2]'));
    this.estadoinput = element(by.css('input[formControlName=estado]'));
    this.municipioinput = element(by.css('input[formControlName=municipio]'));
    this.hobbieinput = element(by.css('input[formControlName=0]'));//solo funcionara por ahora para el input 0 en el arreglo de hobbies
    this.saveButton = element(by.className('btn-outline-primary')); // obtenemos el elemento por el nombre de la clase
    this.addButton = element(by.className('btn-success'));
    this.deletehobbieButton = element(by.className('btn-danger'));
    //this.deletehobbieButton = element(by.className('btn-danger'));
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
  }

  navigateToReactivePage(): Promise<unknown> { // navega a la ruta /reactive
    return browser.get(browser.baseUrl + 'reactive') as Promise<unknown>;
  }

  getTitleText(): Promise<string> { // obtiene el titulo de la página
    return this.title.getText() as Promise<string>;
  }

  setName(name: string): Promise<void>{ // escribe el el input name
    this.nameinput.clear();
    return this.nameinput.sendKeys(name) as Promise<void>;
  }

  getName(): Promise<string>{ // regresa el texto del input name
    return this.nameinput.getAttribute('value') as Promise<string>;
  }

  setLastName(lastname: string): Promise<void>{ // escribe en el input lastname
    this.lastnameinput.clear();
    return this.lastnameinput.sendKeys(lastname) as Promise<void>;
  }

  getLastName(): Promise<string>{ // regresa el texto del input lastname
    return this.lastnameinput.getAttribute('value') as Promise<string>;
  }

  setMail(email: string): Promise<void>{ // escribe en el input lastname
    this.emailinput.clear();
    return this.emailinput.sendKeys(email) as Promise<void>;
  }

  getMail(): Promise<string>{ // regresa el texto del input lastname
    return this.emailinput.getAttribute('value') as Promise<string>;
  }
  setUsuario(usuario: string): Promise<void>{ // escribe en el input lastname
    this.usuarioinput.clear();
    return this.usuarioinput.sendKeys(usuario) as Promise<void>;
  }
  getUsuario(): Promise<string>{ // regresa el texto del input lastname
    return this.usuarioinput.getAttribute('value') as Promise<string>;
  }
  setPsswd(password: string): Promise<void>{ // escribe en el input lastname
    this.passwordinput.clear();
    return this.passwordinput.sendKeys(password) as Promise<void>;
  }
  getPsswd(): Promise<string>{ // regresa el texto del input lastname
    return this.passwordinput.getAttribute('value') as Promise<string>;
  }
  setPsswdConf(passwordconf: string): Promise<void>{ // escribe en el input lastname
    this.passwordconfinput.clear();
    return this.passwordconfinput.sendKeys(passwordconf) as Promise<void>;
  }
  getPsswdConf(): Promise<string>{ // regresa el texto del input lastname
    return this.passwordconfinput.getAttribute('value') as Promise<string>;
  }
  setEstado(estado: string): Promise<void>{ // escribe en el input lastname
    this.estadoinput.clear();
    return this.estadoinput.sendKeys(estado) as Promise<void>;
  }
  getEstado(): Promise<string>{ // regresa el texto del input lastname
    return this.estadoinput.getAttribute('value') as Promise<string>;
  }
  setMunicipio(municipio: string): Promise<void>{ // escribe en el input lastname
    this.municipioinput.clear();
    return this.municipioinput.sendKeys(municipio) as Promise<void>;
  }
  getMunicipio(): Promise<string>{ // regresa el texto del input lastname
    return this.municipioinput.getAttribute('value') as Promise<string>;
  }

  setHobbie(hobbie: string): Promise<void>{ // escribe en el input lastname
    this.hobbieinput.clear();
    return this.hobbieinput.sendKeys(hobbie) as Promise<void>;
  }
  getHobbie(): Promise<string>{ // regresa el texto del input lastname
    return this.hobbieinput.getAttribute('value') as Promise<string>;
  }
  
  clickSaveButton(): Promise<void>{ // presiona el botón guardar
    return this.saveButton.click() as Promise<void>;
  }

  clickAddButton(): Promise<void>{ // presiona el botón añadir
    return this.addButton.click() as Promise<void>;
  }

  clickDeleteHobbieButton(): Promise<void>{ // presiona el botón guardar
    return this.deletehobbieButton.click() as Promise<void>;
  }

  deleteHobbieButtonIsPresent(): Promise<boolean>{ // comprueba si el botón borrar existe
    this.addButton = element(by.className('btn-danger'));
    return this.addButton.isPresent() as Promise<boolean>;
  }

  getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
    return this.errorsText.get(indice).getText() as Promise<string>;
  }
}