# ⚡ Guia Rápido de Edições

## 🎯 Edições Mais Comuns

### 1. 📝 Alterar Textos Principais

#### **Título Principal**
**Arquivo**: `src/App.jsx` (linha ~320)
```jsx
Método de Transformação Física  // ← MUDE AQUI
```

#### **Subtítulo**
**Arquivo**: `src/App.jsx` (linha ~325)
```jsx
Uma análise objetiva e comparativa...  // ← MUDE AQUI
```

#### **Tagline do Vencedor**
**Arquivo**: `src/data.js` (linha ~8)
```javascript
tagline: "Construindo seu melhor corpo com precisão científica"  // ← MUDE AQUI
```

### 2. 🏆 Alterar Vencedor

**Arquivo**: `src/data.js` (linha ~5)
```javascript
export const vencedor = {
  nome: "Vital Architect",  // ← NOME DO VENCEDOR
  score: 8.76,             // ← SCORE DO VENCEDOR
  tagline: "Construindo seu melhor corpo com precisão científica"
}
```

### 3. 📊 Alterar Scores dos Nomes

**Arquivo**: `src/data.js` (linha ~15)
```javascript
export const nomesData = [
  { 
    nome: "Vital Architect", 
    score: 8.76,  // ← MUDE O SCORE AQUI
    tagline: "Construindo seu melhor corpo com precisão científica",
    posicionamento: "O arquiteto da sua transformação física"
  },
  // ... outros nomes
]
```

### 4. 🎨 Alterar Cores Principais

#### **Gradiente Principal (Fundo)**
**Arquivo**: `src/App.jsx`
**Procure por**: `bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900`
**Substitua por**: `bg-gradient-to-br from-purple-900 via-pink-900 to-red-900`

#### **Gradiente do Título**
**Arquivo**: `src/App.jsx`
**Procure por**: `bg-gradient-to-r from-blue-400 to-purple-400`
**Substitua por**: `bg-gradient-to-r from-green-400 to-blue-400`

### 5. 🖼️ Trocar Imagens

1. **Substitua o arquivo** na pasta `public/`
2. **Mantenha o mesmo nome** do arquivo original
3. **Formatos aceitos**: PNG, JPG, WebP

**Exemplos de arquivos para trocar**:
- `LogoVITALARCHITECT-Versão1.png`
- `PapelariaVITALARCHITECT-Logo3.png`
- `RELATORIOPESQUISANOMES.pdf`

### 6. 📈 Alterar Dados dos Gráficos

#### **Pesos dos Critérios**
**Arquivo**: `src/data.js` (linha ~50)
```javascript
export const criteriosData = [
  { criterio: "Percepção de Valor", peso: 25 },  // ← MUDE O PESO
  { criterio: "Aderência aos Arquétipos", peso: 20 },
  // ... outros critérios
]
```

#### **Métricas do Dashboard**
**Arquivo**: `src/data.js` (linha ~70)
```javascript
export const metricas = {
  mercadoGlobal: "$5.8 trilhões",  // ← MUDE AQUI
  nomesAnalisados: 7,              // ← MUDE AQUI
  // ... outras métricas
}
```

## 🚀 Como Aplicar as Mudanças

### **Via GitHub (Recomendado)**
1. Acesse seu repositório no GitHub
2. Clique no arquivo que quer editar
3. Clique no ícone de lápis (✏️)
4. Faça as alterações
5. Scroll para baixo → "Commit changes"
6. **Aguarde 2-3 minutos** - Netlify fará deploy automático

### **Verificar se Funcionou**
1. Acesse seu site no Netlify
2. Force refresh (Ctrl+F5 ou Cmd+Shift+R)
3. Veja suas mudanças aplicadas

## ⚠️ Dicas Importantes

### **✅ Faça Sempre**
- Teste uma mudança pequena primeiro
- Mantenha backup dos arquivos originais
- Use nomes de arquivo sem espaços ou acentos

### **❌ Evite**
- Deletar arquivos sem saber sua função
- Mudar muitas coisas de uma vez
- Usar caracteres especiais em nomes de arquivo

## 🆘 Se Algo Der Errado

### **Site Não Carrega**
1. Verifique o log de build no Netlify
2. Desfaça a última mudança no GitHub
3. Aguarde novo deploy automático

### **Imagem Não Aparece**
1. Confirme que o arquivo está em `public/`
2. Verifique se o nome está correto no código
3. Use apenas PNG, JPG ou WebP

### **Mudança Não Apareceu**
1. Aguarde 2-3 minutos
2. Force refresh (Ctrl+F5)
3. Verifique se o commit foi feito no GitHub

## 📞 Precisa de Ajuda?

Se precisar de mudanças mais complexas ou tiver dúvidas, pode sempre me chamar! 😊

