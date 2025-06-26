# 🚀 Site Pesquisa Estratégica de Nomes - Guia Netlify

## 📋 Sobre o Projeto

Este é o código fonte completo do site **Pesquisa Estratégica de Nomes**, uma aplicação React que apresenta análise científica de naming para métodos de transformação física.

### ✨ Funcionalidades
- Dashboard executivo com gráficos interativos
- Apresentação visual completa da identidade
- Ferramentas de IA para geração de nomes e taglines
- Design responsivo e premium
- Download de relatório em PDF

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Styling e design system
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones
- **Shadcn/ui** - Componentes UI

## 🚀 Configuração no Netlify (Recomendado)

### **Passo 1: Preparar o GitHub**

1. **Crie uma conta no GitHub** (se não tiver): https://github.com
2. **Crie um novo repositório**:
   - Nome: `pesquisa-nomes-site`
   - Visibilidade: Público ou Privado
   - ✅ Marque "Add a README file"

3. **Faça upload dos arquivos**:
   - Clique em "uploading an existing file"
   - Arraste todos os arquivos desta pasta
   - Commit: "Initial commit - Site Pesquisa de Nomes"

### **Passo 2: Configurar Netlify**

1. **Crie conta no Netlify**: https://netlify.com
2. **Conecte com GitHub**:
   - Clique em "New site from Git"
   - Escolha "GitHub"
   - Autorize a conexão

3. **Configure o deploy**:
   - Selecione o repositório `pesquisa-nomes-site`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Clique em "Deploy site"

### **Passo 3: Configurações Avançadas**

1. **Domínio personalizado** (opcional):
   - Site settings → Domain management
   - Add custom domain

2. **Variáveis de ambiente** (se necessário):
   - Site settings → Environment variables

## ✏️ Como Fazer Edições

### **📝 Edições Simples (Textos, Cores)**

#### **Via GitHub (Mais Fácil)**
1. Acesse seu repositório no GitHub
2. Navegue até o arquivo que quer editar
3. Clique no ícone de lápis (Edit)
4. Faça as alterações
5. Commit changes
6. **Netlify fará deploy automático** em ~2 minutos

#### **Arquivos Principais para Editar**
- `src/App.jsx` - Todo o conteúdo e layout
- `src/data.js` - Dados dos nomes e scores
- `public/` - Imagens e PDF

### **🎨 Edições de Design**

#### **Cores Principais (no App.jsx)**
```jsx
// Gradientes principais
bg-gradient-to-br from-blue-600 to-purple-600  // Azul para roxo
bg-gradient-to-r from-blue-400 to-purple-400   // Texto gradiente

// Cores por seção
text-blue-400    // Azul claro
text-green-400   // Verde
text-pink-400    // Rosa
text-yellow-400  // Amarelo
```

#### **Textos Principais**
Procure por estas seções no `App.jsx`:
- `{/* Hero Section */}` - Título principal
- `{/* Dashboard Section */}` - Métricas
- `{/* Recomendações Section */}` - Conclusões

### **🖼️ Trocar Imagens**

1. **Substitua arquivos** na pasta `public/`
2. **Mantenha os mesmos nomes** dos arquivos
3. **Formatos aceitos**: PNG, JPG, WebP
4. **Commit no GitHub** - deploy automático

### **📊 Atualizar Dados**

Edite o arquivo `src/data.js`:
```javascript
// Scores dos nomes
export const nomesData = [
  { nome: "Vital Architect", score: 8.76, ... },
  // Adicione ou modifique aqui
]

// Dados dos gráficos
export const criteriosData = [
  { criterio: "Percepção de Valor", peso: 25 },
  // Modifique pesos aqui
]
```

## 🔧 Desenvolvimento Local (Opcional)

### **Pré-requisitos**
- Node.js 18+ (https://nodejs.org)
- Git (https://git-scm.com)

### **Comandos**
```bash
# Clonar repositório
git clone https://github.com/SEU-USUARIO/pesquisa-nomes-site.git
cd pesquisa-nomes-site

# Instalar dependências
npm install

# Executar localmente (http://localhost:5173)
npm run dev

# Build para produção
npm run build
```

## 🎯 Edições Mais Comuns

### **1. Alterar Título Principal**
**Arquivo**: `src/App.jsx`
**Linha**: ~320
```jsx
<h1 className="text-6xl font-bold mb-6">
  Pesquisa Estratégica de Nomes para
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
    Método de Transformação Física  {/* ← EDITE AQUI */}
  </span>
</h1>
```

### **2. Alterar Vencedor**
**Arquivo**: `src/data.js`
**Linha**: ~5
```javascript
export const vencedor = {
  nome: "Vital Architect",  // ← EDITE AQUI
  score: 8.76,             // ← EDITE AQUI
  tagline: "Construindo seu melhor corpo com precisão científica"  // ← EDITE AQUI
}
```

### **3. Adicionar Nova Seção**
**Arquivo**: `src/App.jsx`
**Procure por**: `{/* Nova Seção */}`
**Adicione antes do footer**

### **4. Trocar Cores do Tema**
**Arquivo**: `src/App.jsx`
**Procure por**: `bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900`
**Substitua por**: Suas cores preferidas

## 🆘 Solução de Problemas

### **❌ Build Falhou**
1. Verifique se não há erros de sintaxe no código
2. Confirme que todas as imagens existem na pasta `public/`
3. Verifique o log de build no Netlify

### **🖼️ Imagem Não Aparece**
1. Confirme que o arquivo está em `public/`
2. Verifique se o nome no código está correto
3. Use apenas letras, números e hífens no nome

### **🎨 Mudança Não Apareceu**
1. Aguarde 2-3 minutos após o commit
2. Force refresh (Ctrl+F5 ou Cmd+Shift+R)
3. Verifique se o deploy foi bem-sucedido no Netlify

## 📞 Suporte

### **Recursos Úteis**
- **Netlify Docs**: https://docs.netlify.com
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs

### **Comunidades**
- **Stack Overflow**: Para dúvidas técnicas
- **GitHub Discussions**: Para dúvidas do projeto
- **Discord Netlify**: Suporte da comunidade

## 🎉 Próximos Passos

1. ✅ **Configure no Netlify** seguindo o guia acima
2. 🎨 **Faça sua primeira edição** (mude um texto simples)
3. 🚀 **Veja o deploy automático** funcionando
4. 📚 **Explore as possibilidades** de customização

**Boa sorte com seu site! 🚀**

