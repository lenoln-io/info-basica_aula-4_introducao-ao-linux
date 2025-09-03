# 🐧 Apresentação Interativa: Introdução ao Linux

Uma apresentação web interativa e moderna sobre Linux, desenvolvida para o curso de **Informática Básica - 1° Ano Técnico**. Este projeto oferece uma experiência educativa envolvente com navegação fluida, animações suaves e design responsivo.

## 📋 Descrição

Esta apresentação aborda os conceitos fundamentais do Linux de forma didática e visual, cobrindo desde a história do sistema operacional até comandos básicos e estrutura de diretórios. O projeto foi desenvolvido com foco na experiência do usuário, utilizando tecnologias web modernas.

## ✨ Características

- **🎨 Design Moderno**: Interface limpa com gradientes pastéis e elementos visuais atraentes
- **📱 Responsivo**: Adaptável a diferentes tamanhos de tela
- **⌨️ Navegação Intuitiva**: Controle via botões ou teclado (setas)
- **🎭 Animações Suaves**: Transições fluidas entre slides com CSS animations
- **🎯 Interativo**: Efeitos hover e feedback visual em elementos clicáveis
- **🔢 Contador de Slides**: Indicador visual do progresso da apresentação

## 📚 Conteúdo da Apresentação

A apresentação é dividida em **10 slides** que cobrem:

1. **Introdução** - Visão geral e características principais do Linux
2. **História** - Origem do Linux e linha do tempo
3. **Software Livre** - Filosofia e princípios do software livre
4. **Características Técnicas** - Aspectos técnicos do sistema
5. **Distribuições** - Diferentes versões do Linux
6. **Ubuntu** - Foco na distribuição Ubuntu
7. **Interface Gráfica** - Ambientes desktop
8. **Terminal** - Introdução ao terminal Linux
9. **Comandos Básicos** - Comandos essenciais
10. **Estrutura de Diretórios** - Organização do sistema de arquivos

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da apresentação
- **CSS3** - Animações customizadas e estilos
- **JavaScript (ES6+)** - Lógica de navegação e interatividade
- **Tailwind CSS** - Framework CSS para estilização rápida
- **Emojis** - Elementos visuais para melhor experiência

## 🚀 Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar o Tailwind CSS via CDN)

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/lenoln-io/info-basica_aula-4_introducao-ao-linux.git
   cd info-basica_aula-4_introducao-ao-linux
   ```

2. **Abra o arquivo HTML**:
   - Duplo clique no arquivo `index.html`, ou
   - Abra com seu navegador preferido, ou
   - Use um servidor local:
     ```bash
     # Com Python
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     ```

3. **Navegue pela apresentação**:
   - Use os botões "Anterior" e "Próximo"
   - Use as setas do teclado (←/→ ou ↑/↓)
   - Acompanhe o progresso pelo contador de slides

## 🎮 Controles de Navegação

| Ação | Método |
|------|--------|
| Próximo slide | Botão "Próximo →" ou setas direita/baixo |
| Slide anterior | Botão "← Anterior" ou setas esquerda/cima |
| Visualizar progresso | Contador no cabeçalho (ex: 1/10) |

## 📁 Estrutura do Projeto

```
apresentacao-linux/
├── index.html          # Estrutura principal da apresentação
├── main.js            # Lógica de navegação e interatividade
├── style.css          # Animações e estilos customizados
└── README.md          # Documentação do projeto
```

## 🎨 Personalização

### Cores
As cores pastéis podem ser modificadas no arquivo `index.html` na configuração do Tailwind:

```javascript
colors: {
  pastel: {
    blue: "#E6F3FF",
    purple: "#F0E6FF",
    pink: "#FFE6F3",
    // ... outras cores
  }
}
```

### Animações
Novas animações podem ser adicionadas no arquivo `style.css`:

```css
@keyframes minhaAnimacao {
  from { /* estado inicial */ }
  to { /* estado final */ }
}
```

### Conteúdo
Para modificar o conteúdo dos slides, edite as seções correspondentes no arquivo `index.html`.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido para fins educacionais como material de apoio para o curso de Informática Básica.

## 🙏 Agradecimentos

- **Linus Torvalds** - Criador do Linux
- **Comunidade Linux** - Por manter o sistema livre e aberto
- **Tailwind CSS** - Framework CSS utilizado
- **Comunidade Open Source** - Por inspirar projetos educacionais livres

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!