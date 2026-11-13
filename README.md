# ARKHOS — Coliseu dos Primordiais

Jogo original de estratégia por turnos em tabuleiro 3D, com criaturas chamadas **Ecos**, afinidades elementais, Pontos de Ordem e altares de domínio.

**Jogar:** https://jogoiarexx-blip.github.io/ARKHOS-coliseu-primordial/

## Coliseu Tático v0.3 (13/11/2026)

A atualização aproxima as *mecânicas de estratégia* de jogos de tabuleiro de criaturas como **Yu-Gi-Oh! Capsule Monster Coliseum**, mantendo identidade, personagens e regras próprios do ARKHOS.

- **Símbolo Primordial:** cada time começa com um obelisco 3D fixo de 48 PV e 4 de armadura. Destruir o Símbolo adversário encerra imediatamente a partida. Ele não é selecionável para ativação, invocação ou Ordens.
- **Três formas de vencer:** destruir o símbolo inimigo, eliminar os Ecos e reservas do rival, ou vencer pelo sistema de Domínio dos altares (com os critérios de desempate originais).
- **Movimentação diagonal:** batedores e unidades voadoras podem percorrer casas ortogonais e diagonais. Unidades terrestres não atravessam cantos fechados ou unidades adjacentes; caminhos continuam respeitando terreno, altura e custo de movimento.
- **Ataques de classe:** batedores atacam em até oito direções adjacentes; atiradores disparam em linhas retas ou diagonais respeitando alcance e paredes; as demais classes mantêm o alcance ortogonal.
- **IA adaptada:** considera a aproximação e o dano aos símbolos.
- **Informação no HUD:** a ficha informa o perfil de movimento e ataque; a página de regras documenta as condições de vitória.

## Controles

- Mouse/toque: selecionar criatura, escolher casa, atacar ou confirmar uma ação.
- **Q / E:** girar câmera; roda do mouse ou pinça: zoom.
- **Tab:** selecionar próximo Eco disponível.
- **Enter:** confirmar prévia; **Esc:** cancelar/pausar; **Espaço:** passar a rodada.
- **D:** defender; **H:** usar habilidade.

## Desenvolvimento e manutenção

O GitHub Pages utiliza **index.html** e o bundle em **assets/**. O repositório recebido contém os arquivos de distribuição do jogo, não os módulos originais de desenvolvimento. A versão 0.3 aplica correções cuidadosas ao bundle já publicado. Antes de novas expansões maiores, é recomendável recuperar ou recriar a estrutura-fonte em módulos para facilitar testes e manutenção.

### Verificações executadas

Sintaxe JavaScript validada, geração da arena e dos dois símbolos, padrões de alcance, restrições de colisão diagonal, deslocamento real de batedor, ação da IA e vitória imediata ao destruir um símbolo.

### Próximas expansões ainda não implementadas

Campanha com várias arenas, progressão individual dos Ecos, loja, evolução/fusão e modo versus local completo. Essas mecânicas exigem estado persistente, interface e balanceamento próprios.

**Projeto independente.** Inspiração na estrutura tática de jogos de tabuleiro 3D, sem usar marcas, cartas, personagens ou recursos protegidos de outros jogos.
