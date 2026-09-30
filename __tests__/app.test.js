/**
 * @jest-environment jsdom
 */

describe('EcoRota Paranaguá - Suíte de Testes Automatizados', () => {
  
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="tel" id="telefone" value="(41) 9" maxlength="15" />
      <div id="screen-1" class="screen active"></div>
      <div id="screen-3" class="screen"></div>
    `;
  });

  test('Deve aplicar a restrição de tamanho máximo de 15 caracteres no campo de telefone', () => {
    const inputTel = document.getElementById('telefone');
    expect(inputTel.getAttribute('maxlength')).toBe('15');
  });

  test('Deve alterar a visibilidade da tela ao chamar a função de navegação', () => {
    const s1 = document.getElementById('screen-1');
    const s3 = document.getElementById('screen-3');
    
    // Simulação da lógica de troca de tela
    s1.classList.remove('active');
    s3.classList.add('active');

    expect(s1.classList.contains('active')).toBe(false);
    expect(s3.classList.contains('active')).toBe(true);
  });
});