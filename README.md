# ARKHOS — Coliseu dos Primordiais

Jogo original de estratégia por turnos em tabuleiro 3D, com criaturas chamadas **Ecos**, afinidades elementais, Pontos de Ordem e altares de domínio.

**Jogar:** https://jogoiarexx-blip.github.io/ARKHOS-coliseu-primordial/

## Ascensão Primordial v0.6 — 13/11/2026

A Forja agora possui um segundo ritual que **cria seis criaturas inéditas**, com silhuetas 3D procedurais, animações próprias de ociosidade e habilidades exclusivas. As duas criaturas-base permanecem disponíveis; a forma ascendida é uma terceira opção independente na seleção de esquadrão.

### Como despertar uma nova criatura

1. Eleve os dois Ecos de uma afinidade ao nível 3 (10 XP cada).
2. Na Forja, crie o **Vínculo Primordial** da afinidade por **42 Fragmentos** (se ainda não tiver).
3. Na seção **Ritual de Ascensão**, invista **56 Fragmentos** para despertar a nova forma.
4. Volte ao editor de esquadrão: a nova criatura aparecerá na lista e poderá ser usada na campanha, respeitando o custo total de **18 pontos** e as **4 vagas iniciais** (até 2 reservas).

O desbloqueio é permanente no salvamento local `arkhos.progress.v1`, com migração preservando as campanhas, runas, Vínculos, XP e Fragmentos existentes. Formas ascendidas começam pelo menos no **nível 3**, também ganham XP, podem usar uma runa própria e recebem os bônus do Vínculo de sua afinidade.

### Formas e técnicas

| Afinidade | Criatura | Custo de equipe | Modelo 3D | Habilidade especial |
|---|---|---:|---|---|
| Brasa | **Ignéox** | 4 | Quimera de magma, asas e crista ígnea | Nova Incandescente — área 3×3 e Queimadura |
| Maré | **Talássia** | 4 | Serpente marinha, barbatanas e coral | Onda Ancestral — +12 PV, limpa Queimadura e Barreira 4 |
| Selva | **Silvagor** | 4 | Guardião de madeira, chifres ramificados e folhas | Espinhos Ancestrais — dano e Enraizado |
| Pedra | **Titanita** | 5 | Colosso de rocha, armadura e núcleo de cristal | Abalo Primordial — área 3×3 e ARM −2 |
| Trovão | **Voltífera** | 5 | Grifo elétrico de asas segmentadas | Tempestade Viva — disparo e até 2 saltos elétricos |
| Astral | **Astrávia** | 4 | Sentinela flutuante com anéis orbitais | Eclipse Vital — cura aliados e ataca inimigos em raio de 2 |

As formas não substituem os Ecos originais nem consomem seus equipamentos. A invocação de um ascendido da reserva recebe uma curta animação de materialização em 3D; habilidades de área criam pulsos luminosos. O uso de materiais e geometrias compartilhadas é destinado a limitar o impacto de desempenho em celulares.

### QA da v0.6

- **35 verificações** passaram, incluindo seis habilidades, 3D procedural construído por cada modelo, animações de ociosidade, salvamento e interface da Forja.
- **9 partidas completas** de IA × IA em 3 arenas, com equipes válidas contendo formas ascendidas, encerraram sem erro de lógica; houve uso das habilidades especiais.
- Sintaxe do bundle validada com o analisador JavaScript.
- **Limitação:** não houve teste visual com WebGL real em navegador nesta execução; modelo 3D e materialização devem ser conferidos no aparelho do jogador.

## Forja Primordial v0.5 — 13/11/2026

Na tela principal ou no editor de esquadrão, abra a **Forja Primordial** para comprar e equipar runas. As compras usam Fragmentos de Alma, a moeda interna do jogo, sem compras com dinheiro real.

### Economia

- Primeira partida / salvamento antigo: **48 Fragmentos** iniciais.
- Vitória: **26 Fragmentos** na Ponte das Cinzas, **34** nos Jardins Afogados e **42** na Cúpula dos Trovões.
- Empate: **12 Fragmentos**; derrota: **8 Fragmentos**.
- Recompensa concedida uma vez ao concluir a batalha; saldo e inventário permanecem no navegador.

### Cinco runas equipáveis

| Runa | Custo (Fragmentos) | Efeito |
| --- | ---: | --- |
| Garra da Forja | 18 | +2 ATK |
| Escudo de Basalto | 18 | +2 ARM |
| Essência Vital | 20 | +10 PV |
| Passos do Vendaval | 24 | +1 MOV |
| Orbe da Visão | 24 | +1 ALC |

Cada Eco pode usar **uma runa por vez**. As runas não são consumidas ao equipar ou remover, mas cada cópia comprada só pode ser equipada em uma criatura de cada vez. A loja limita a seis cópias de cada modelo.

### Vínculos Primordiais

Existem seis Vínculos elementais: Brasa (Carvúnio + Cinzalon), Maré (Goteju + Nacarino), Selva (Musgote + Larveira), Pedra (Pedruxo + Mineruva), Trovão (Zirpim + Falcorrente) e Astral (Lampejo + Nebuliz).

- Exige as **duas criaturas da afinidade no nível 3** (XP acumulado de ao menos 10 cada).
- Custa **42 Fragmentos**.
- Desbloqueado permanentemente, concede **+1 ATK e +3 PV** a ambos os Ecos, inclusive quando forem invocados da reserva.
- Não consome nem remove criaturas e pode acumular com uma runa.
- Criaturas com runas ou vínculo recebem anel luminoso em 3D; as vinculadas também têm porte ligeiramente maior. Esses efeitos usam geometria procedural leve e não adicionam arquivos externos.

### QA v0.5

Testados sintaxe JavaScript, migração de salvamentos anteriores, compra e estoque de runas, equipar/remover, bloqueio de duplicação, fusão permanente, atributos efetivos e criação da tela da Forja. Também foram concluídas **3 simulações de duelo até o final**, uma por arena, com efeitos de vínculo e runas ativos. Teste visual manual com navegador real ainda é recomendado.

## Campanha e evolução v0.4 — 13/11/2026

Agora o jogo contém três arenas de campanha, com adversários, terrenos e perigos diferentes:

1. **Ponte das Cinzas** — Arven, pontes que desabam e rajadas de calor.
2. **Jardins Afogados** — Néréa, terrenos aquáticos, mata e marés danosas (Maré imune).
3. **Cúpula dos Trovões** — Voltaris, cristais condutores e descargas elétricas (Trovão imune).

Arenas são desbloqueadas progressivamente ao vencer a anterior. No menu, selecione uma das arenas disponíveis; após vencer, há um atalho para a próxima.

### Progressão

- A cada vitória, todos os Ecos do esquadrão recebem **3 XP**; sobreviventes recebem **+1 XP**.
- Empates e derrotas concedem **1 XP de participação**.
- **Níveis 1 a 5**, com limiares de XP cumulativos: 0, 4, 10, 19 e 31.
- Cada nível acima do primeiro concede **+2 PV**; a cada dois níveis, **+1 ATK**; no nível 4, **+1 ARM**; no nível 5, **+1 MOV**.
- Oponentes são fortalecidos conforme a missão: nível 1, 2 e 3.
- Progressão é salva em `localStorage` usando **arkhos.progress.v1**, preservando as vitórias/medalhas anteriores; não é sincronizada entre dispositivos.
- Fichas de criatura, seleção de equipe e tela de vitória mostram os níveis.

### QA da v0.4

Foram executados testes do núcleo em V8 para as três arenas: tamanho do tabuleiro, células únicas, spawns e símbolos livres, configuração de perigos, criação de unidades com bônus, geração de ação da IA e comando de passar. O bundle completo passou na verificação de sintaxe JavaScript. **O teste gráfico completo no navegador ainda está pendente.**

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

Novas arenas com geometrias e cenários exclusivos, animações esqueléticas mais complexas para as formas ascendidas, modo versus local completo, mais chefes de campanha e sincronização de progresso entre dispositivos. Essas mecânicas exigem estado persistente, interface e balanceamento adicionais.

**Projeto independente.** Inspiração na estrutura tática de jogos de tabuleiro 3D, sem usar marcas, cartas, personagens ou recursos protegidos de outros jogos.
