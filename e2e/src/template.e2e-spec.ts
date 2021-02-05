//?PRUEBAS.E4 & E5 & E6. Fernanda Marcelin Leyva
import { browser, logging, element, ElementArrayFinder, by, ElementFinder } from 'protractor';
import { TemplatePage } from './template.po';
import { protractor } from 'protractor/built/ptor';

const origFn = browser.driver.controlFlow().execute;
// esta función pone un retrazo de tiempo entre cada paso del controlFlow de protractor
browser.driver.controlFlow().execute = function stop() {
  const args = arguments;

  origFn.call(browser.driver.controlFlow(), () => {
    return protractor.promise.delayed(10); // tiempo de retraso entre cada paso
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
// puede correr la prueba con el comando ng e2e en la carpeta del proyecto, si necesita cambiar el puerto escriba ademas --port=PORTNUMBER
describe('Casos de ejemplo', () => { // Engloba todas las pruebas (it) de un caso de uso a probar
  let page: TemplatePage;

  beforeEach(() => { // Este método se ejecuta antes de cada prueba
    page = new TemplatePage(); // crea un objeto de la página reactive forms
  });
  it('Debe crear el arreglo de Jorges hacer una prueba que escriba cada uno de los string del arreglo en el campo correo y verificar que el mensaje de error aparezca en la pantalla', async () => {
    const arr=['jorge', 'jorge@' , 'jorge@ho'];
    page.navigateToTemplatePage();
    await browser.waitForAngular();
    for(let i=0; i<arr.length;i++)
    {
      await page.setMail(arr[i]);
      expect(page.getTextOfEspecificError(0)).toBeTruthy();
    }
  });

  it('Debe probar la seleccion de un checkbox, para ello, seleccionar Cuba del checkbox Pais', async () => {
    const selec = element(by.cssContainingText('option','Cuba'));
    page.navigateToTemplatePage();
    await browser.waitForAngular();
    expect(selec.getText()).toEqual('Cuba');

  });

  afterEach(async () => { // Este método se ejecuta despues de cada prueba
    // Revisa si no hay errores severos emitidos por el navegador
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
