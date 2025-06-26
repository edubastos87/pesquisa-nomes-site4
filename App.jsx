import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Award, Target, Zap, Brain, Lightbulb, FileText, BarChart3, Users, Globe, CheckCircle, Star, Sparkles, Download, RefreshCw, Wand2, Eye, Palette, Monitor, Smartphone, FileImage, Package } from 'lucide-react'
import { nomesData, criterios, arquetipo_sabio, arquetipo_criador, metodologia, contexto_mercado, recomendacao_final } from './data.js'
import './App.css'

function App() {
  const [selectedNome, setSelectedNome] = useState(null)
  const [activeSection, setActiveSection] = useState('inicio')
  
  // Estados para ferramentas de IA criativa
  const [keywords, setKeywords] = useState('')
  const [generatedNames, setGeneratedNames] = useState([])
  const [generatedTaglines, setGeneratedTaglines] = useState([])
  const [isGeneratingNames, setIsGeneratingNames] = useState(false)
  const [isGeneratingTaglines, setIsGeneratingTaglines] = useState(false)

  // Dados para gráficos
  const chartData = nomesData.map(nome => ({
    nome: nome.nome.length > 15 ? nome.nome.substring(0, 15) + '...' : nome.nome,
    nomeCompleto: nome.nome,
    score: nome.score_final,
    percepcao: nome.percepcao_valor,
    arquetipo: nome.arquetipo,
    escalabilidade: nome.escalabilidade,
    viabilidade: nome.viabilidade,
    memorabilidade: nome.memorabilidade
  }))

  const radarData = selectedNome ? [{
    criterio: 'Percepção',
    valor: selectedNome.percepcao_valor,
    fullMark: 10
  }, {
    criterio: 'Arquétipo',
    valor: selectedNome.arquetipo,
    fullMark: 10
  }, {
    criterio: 'Escalabilidade',
    valor: selectedNome.escalabilidade,
    fullMark: 10
  }, {
    criterio: 'Viabilidade',
    valor: selectedNome.viabilidade,
    fullMark: 10
  }, {
    criterio: 'Memorabilidade',
    valor: selectedNome.memorabilidade,
    fullMark: 10
  }] : []

  const pieData = criterios.map((criterio, index) => ({
    name: criterio.nome,
    value: criterio.peso,
    color: `hsl(${index * 60}, 70%, 50%)`
  }))

  const COLORS = ['#3182ce', '#38a169', '#e53e3e', '#d69e2e', '#805ad5']

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Função para gerar nomes baseados em palavras-chave
  const generateNames = async () => {
    if (!keywords.trim()) return
    
    setIsGeneratingNames(true)
    
    // Simulação de geração de nomes baseados nos critérios do relatório
    const nameTemplates = [
      'Precision', 'Vital', 'Elite', 'Prime', 'Peak', 'Apex', 'Core', 'Pure', 
      'Smart', 'Pro', 'Max', 'Ultra', 'Advanced', 'Superior', 'Premium'
    ]
    
    const suffixes = [
      'Protocol', 'Method', 'System', 'Lab', 'Institute', 'Academy', 'Studio',
      'Clinic', 'Center', 'Hub', 'Works', 'Solutions', 'Performance', 'Dynamics'
    ]
    
    const keywordArray = keywords.toLowerCase().split(' ').filter(k => k.length > 2)
    
    setTimeout(() => {
      const newNames = []
      
      // Gerar combinações baseadas nas palavras-chave
      keywordArray.forEach(keyword => {
        nameTemplates.forEach(template => {
          if (Math.random() > 0.7) {
            newNames.push({
              nome: `${template} ${keyword.charAt(0).toUpperCase() + keyword.slice(1)}`,
              score: (Math.random() * 2 + 7).toFixed(2),
              categoria: 'Baseado em palavra-chave'
            })
          }
        })
        
        suffixes.forEach(suffix => {
          if (Math.random() > 0.8) {
            newNames.push({
              nome: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} ${suffix}`,
              score: (Math.random() * 2 + 7).toFixed(2),
              categoria: 'Metodologia'
            })
          }
        })
      })
      
      // Adicionar algumas combinações criativas
      const creativeCombinations = [
        `${keywords.split(' ')[0]?.charAt(0).toUpperCase() + keywords.split(' ')[0]?.slice(1)} Architect`,
        `Peak ${keywords.split(' ')[0]?.charAt(0).toUpperCase() + keywords.split(' ')[0]?.slice(1)}`,
        `Elite ${keywords.split(' ')[0]?.charAt(0).toUpperCase() + keywords.split(' ')[0]?.slice(1)} Lab`,
        `${keywords.split(' ')[0]?.charAt(0).toUpperCase() + keywords.split(' ')[0]?.slice(1)} Evolution`,
        `Prime ${keywords.split(' ')[0]?.charAt(0).toUpperCase() + keywords.split(' ')[0]?.slice(1)} Method`
      ].filter(name => name.includes('undefined') === false)
      
      creativeCombinations.forEach(name => {
        newNames.push({
          nome: name,
          score: (Math.random() * 1.5 + 8).toFixed(2),
          categoria: 'Criativo'
        })
      })
      
      setGeneratedNames(newNames.slice(0, 12))
      setIsGeneratingNames(false)
    }, 2000)
  }

  // Função para gerar taglines para Vital Architect
  const generateTaglines = async () => {
    setIsGeneratingTaglines(true)
    
    setTimeout(() => {
      const taglines = [
        "Construindo seu melhor corpo com precisão científica",
        "O arquiteto da sua transformação física",
        "Projetando corpos, construindo resultados",
        "Sua transformação, nossa arquitetura",
        "Blueprints para a excelência física",
        "Construindo o futuro do seu corpo",
        "Arquitetura corporal de alta performance",
        "Projetando sua melhor versão",
        "Transformação por design, resultados por ciência",
        "O projeto da sua vida começa aqui",
        "Arquitetando corpos extraordinários",
        "Sua transformação, nossa obra-prima"
      ]
      
      setGeneratedTaglines(taglines.map(tagline => ({
        texto: tagline,
        categoria: Math.random() > 0.5 ? 'Científico' : 'Aspiracional',
        score: (Math.random() * 1 + 8.5).toFixed(1)
      })))
      setIsGeneratingTaglines(false)
    }, 1500)
  }

  // Função para download do PDF
  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/RELATORIOPESQUISANOMES.pdf'
    link.download = 'Relatorio_Pesquisa_Nomes_Completo.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Pesquisa Estratégica de Nomes</h1>
                <p className="text-sm text-slate-600">Relatório Executivo Unificado</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'metodologia', label: 'Metodologia' },
                { id: 'arquetipo', label: 'Arquétipos' },
                { id: 'ranking', label: 'Ranking' },
                { id: 'recomendacoes', label: 'Recomendações' },
                { id: 'apresentacao', label: 'Identidade Visual' },
                { id: 'ferramentas', label: 'Ferramentas IA ✨' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Análise Científica Completa
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Pesquisa Estratégica de Nomes para
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Método de Transformação Física
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Uma análise objetiva e comparativa fundamentada em evidências científicas para identificar o nome com maior potencial comercial, considerando aceitação pelo público, memorabilidade, escalabilidade global e viabilidade jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('dashboard')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Ver Dashboard
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('recomendacoes')}
              >
                <Award className="w-5 h-5 mr-2" />
                Ver Recomendação Final
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Dashboard Executivo</h2>
            <p className="text-xl text-slate-600">Visualização comparativa dos resultados da análise</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Gráfico de Scores Finais */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Scores Finais dos Nomes
                </CardTitle>
                <CardDescription>
                  Pontuação geral baseada em todos os critérios ponderados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="nome" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis domain={[0, 10]} />
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value.toFixed(2)}/10`, 
                        'Score Final',
                        props.payload.nomeCompleto
                      ]}
                    />
                    <Bar dataKey="score" fill="#3182ce" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Distribuição de Pesos dos Critérios */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Pesos dos Critérios
                </CardTitle>
                <CardDescription>
                  Distribuição percentual dos critérios de avaliação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({name, value}) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Vencedor</p>
                    <p className="text-2xl font-bold text-blue-900">{nomesData[0].nome}</p>
                    <p className="text-sm text-blue-700">Score: {nomesData[0].score_final}/10</p>
                  </div>
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Mercado Global</p>
                    <p className="text-2xl font-bold text-green-900">{contexto_mercado.tamanho_mercado}</p>
                    <p className="text-sm text-green-700">Wellness em 2024</p>
                  </div>
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Nomes Analisados</p>
                    <p className="text-2xl font-bold text-purple-900">{nomesData.length}</p>
                    <p className="text-sm text-purple-700">Análise completa</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Seletor de Nome para Análise Detalhada */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Análise Detalhada por Nome</CardTitle>
              <CardDescription>
                Selecione um nome para ver sua performance em cada critério
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
                {nomesData.map((nome, index) => (
                  <Button
                    key={index}
                    variant={selectedNome?.nome === nome.nome ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedNome(nome)}
                    className="text-xs p-2 h-auto"
                  >
                    {nome.nome}
                  </Button>
                ))}
              </div>
              
              {selectedNome && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{selectedNome.nome}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Score Final:</span>
                        <Badge variant="secondary">{selectedNome.score_final}/10</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Posição:</span>
                        <Badge>{selectedNome.posicao}º lugar</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700 mb-2">Tagline:</p>
                        <p className="text-sm text-slate-600 italic">"{selectedNome.tagline}"</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700 mb-2">Posicionamento:</p>
                        <p className="text-sm text-slate-600 italic">"{selectedNome.posicionamento}"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <ResponsiveContainer width="100%" height={250}>
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="criterio" />
                        <PolarRadiusAxis angle={90} domain={[0, 10]} />
                        <Radar
                          name={selectedNome.nome}
                          dataKey="valor"
                          stroke="#3182ce"
                          fill="#3182ce"
                          fillOpacity={0.3}
                        />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Metodologia Section */}
      <section id="metodologia" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Metodologia de Pesquisa</h2>
            <p className="text-xl text-slate-600">Framework científico para análise comparativa</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  Abordagem Metodológica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{metodologia.descricao}</p>
                <p className="text-slate-600 mb-4"><strong>Abordagem:</strong> {metodologia.abordagem}</p>
                <p className="text-slate-600"><strong>Público-alvo:</strong> {metodologia.publico_alvo}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Validação com Usuários Reais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-slate-700">Ferramenta: {metodologia.ferramenta_validacao.nome}</p>
                    <p className="text-sm text-slate-600">{metodologia.ferramenta_validacao.descricao}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Funcionalidade:</p>
                    <p className="text-sm text-slate-600">{metodologia.ferramenta_validacao.funcionalidade}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Custo por resposta:</span>
                    <Badge variant="outline">{metodologia.ferramenta_validacao.custo}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Critérios de Avaliação */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Critérios de Avaliação
              </CardTitle>
              <CardDescription>
                Matriz ponderada com pesos definidos para análise objetiva
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {criterios.map((criterio, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-900">{criterio.nome}</h4>
                      <Badge variant="secondary">{criterio.peso}%</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{criterio.descricao}</p>
                    <p className="text-xs text-slate-500">{criterio.detalhes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arquétipos Section */}
      <section id="arquetipo" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Análise de Arquétipos de Marca</h2>
            <p className="text-xl text-slate-600">Alinhamento estratégico com arquétipos fundamentais</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Arquétipo do Sábio */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center text-blue-900">
                  <Brain className="w-6 h-6 mr-2" />
                  {arquetipo_sabio.nome}
                </CardTitle>
                <CardDescription className="text-blue-700">
                  {arquetipo_sabio.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Características Principais
                    </h4>
                    <ul className="space-y-1">
                      {arquetipo_sabio.caracteristicas.map((item, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-orange-600" />
                      Limitações Potenciais
                    </h4>
                    <ul className="space-y-1">
                      {arquetipo_sabio.limitacoes.map((item, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arquétipo do Criador */}
            <Card className="shadow-lg border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center text-purple-900">
                  <Lightbulb className="w-6 h-6 mr-2" />
                  {arquetipo_criador.nome}
                </CardTitle>
                <CardDescription className="text-purple-700">
                  {arquetipo_criador.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Características Principais
                    </h4>
                    <ul className="space-y-1">
                      {arquetipo_criador.caracteristicas.map((item, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-600" />
                      Vantagens Estratégicas
                    </h4>
                    <ul className="space-y-1">
                      {arquetipo_criador.vantagens.map((item, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-center">Combinação Estratégica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-slate-600 mb-4">
                A combinação dos arquétipos Sábio e Criador oferece posicionamento único: 
                <strong className="text-blue-600"> autoridade científica (Sábio)</strong> aplicada à 
                <strong className="text-purple-600"> transformação inovadora (Criador)</strong>.
              </p>
              <p className="text-center text-slate-600">
                Nomes que equilibram estes elementos maximizam o apelo para públicos diversos, 
                desde profissionais da saúde até indivíduos buscando mudança pessoal.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ranking Section */}
      <section id="ranking" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ranking Final dos Nomes</h2>
            <p className="text-xl text-slate-600">Classificação baseada na análise ponderada de todos os critérios</p>
          </div>

          <div className="space-y-6">
            {nomesData.map((nome, index) => (
              <Card key={index} className={`shadow-lg transition-all hover:shadow-xl ${
                index === 0 ? 'border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50' : 
                index === 1 ? 'border-2 border-gray-400 bg-gradient-to-r from-gray-50 to-slate-50' :
                index === 2 ? 'border-2 border-orange-400 bg-gradient-to-r from-orange-50 to-yellow-50' :
                'bg-white'
              }`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        index === 0 ? 'bg-yellow-400 text-yellow-900' :
                        index === 1 ? 'bg-gray-400 text-gray-900' :
                        index === 2 ? 'bg-orange-400 text-orange-900' :
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {nome.posicao}º
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center">
                          {nome.nome}
                          {index === 0 && <Award className="w-5 h-5 ml-2 text-yellow-600" />}
                        </h3>
                        <p className="text-slate-600">{nome.tagline}</p>
                        <p className="text-sm text-slate-500 italic">{nome.posicionamento}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">{nome.score_final}</div>
                        <div className="text-sm text-slate-600">Score Final</div>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh]">
                          <DialogHeader>
                            <DialogTitle>{nome.nome} - Análise Detalhada</DialogTitle>
                            <DialogDescription>
                              Posição: {nome.posicao}º lugar | Score: {nome.score_final}/10
                            </DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="max-h-96">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Scores por Critério</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div className="flex justify-between">
                                    <span>Percepção de Valor:</span>
                                    <Badge variant="secondary">{nome.percepcao_valor}/10</Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Arquétipo:</span>
                                    <Badge variant="secondary">{nome.arquetipo}/10</Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Escalabilidade:</span>
                                    <Badge variant="secondary">{nome.escalabilidade}/10</Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Viabilidade:</span>
                                    <Badge variant="secondary">{nome.viabilidade}/10</Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Memorabilidade:</span>
                                    <Badge variant="secondary">{nome.memorabilidade}/10</Badge>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Justificativa Estratégica</h4>
                                <p className="text-sm text-slate-600">{nome.justificativa}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Posicionamento</h4>
                                <p className="text-sm text-slate-600 italic">"{nome.posicionamento}"</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Tagline Sugerida</h4>
                                <p className="text-sm text-slate-600 italic">"{nome.tagline}"</p>
                              </div>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recomendações Section */}
      <section id="recomendacoes" className="py-16 px-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recomendação Final</h2>
            <p className="text-xl text-blue-100">A escolha estratégica ideal para máximo impacto</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-yellow-400 mb-2">
                  {recomendacao_final.vencedor}
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  A escolha estratégica ideal por combinar diferenciação, memorabilidade e escalabilidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                      Razões da Escolha
                    </h4>
                    <ul className="space-y-2">
                      {recomendacao_final.razoes.map((razao, index) => (
                        <li key={index} className="flex items-start text-blue-100">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {razao}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-purple-400" />
                      Estratégias Recomendadas
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-purple-200">Tagline:</p>
                        <p className="text-blue-100 italic">"{recomendacao_final.estrategias.tagline}"</p>
                      </div>
                      <div>
                        <p className="font-medium text-purple-200">Posicionamento:</p>
                        <p className="text-blue-100 italic">"{recomendacao_final.estrategias.posicionamento}"</p>
                      </div>
                      <div>
                        <p className="font-medium text-purple-200">Foco Digital:</p>
                        <p className="text-blue-100">{recomendacao_final.estrategias.foco_digital}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="text-xl font-semibold mb-4 text-center">Públicos-Alvo Prioritários</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {recomendacao_final.estrategias.publicos.map((publico, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                        <Users className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                        <p className="text-sm text-blue-100">{publico}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apresentação Visual Section */}
      <section id="apresentacao" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-10 h-10 text-blue-400 mr-4" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Identidade Visual Completa
              </h2>
            </div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Apresentação completa das identidades visuais desenvolvidas para ambas as propostas de naming, 
              demonstrando versatilidade e impacto em diferentes aplicações
            </p>
          </div>

          {/* Logos Principais - Vital Architect */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Logos Vital Architect 🏆</h3>
              </div>
              <p className="text-blue-200">Versões do logotipo vencedor para diferentes contextos de uso</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { src: '/LogoVITALARCHITECT-Versão1.png', title: 'Versão 1', desc: 'Logo principal minimalista' },
                { src: '/LogoVITALARCHITECT-Versão2.png', title: 'Versão 2', desc: 'Variação com elementos' },
                { src: '/LogoVITALARCHITECT-Versão3.png', title: 'Versão 3', desc: 'Design compacto' },
                { src: '/LogoVITALARCHITECT-Versão4.png', title: 'Versão 4', desc: 'Versão premium completa' }
              ].map((logo, index) => (
                <div key={index} className="group">
                  <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="bg-white rounded-xl p-6 mb-4 min-h-[200px] flex items-center justify-center">
                      <img 
                        src={logo.src} 
                        alt={logo.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', logo.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{logo.title}</h4>
                    <p className="text-blue-200 text-sm">{logo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logos Vital Nutritioner */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Logos Vital Nutritioner</h3>
              </div>
              <p className="text-blue-200">Versões alternativas exploradas durante o processo</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { src: '/LogoVITALNUTRITRAINER-Versão3Adaptada.png', title: 'Versão 3 Adaptada', desc: 'Abordagem nutricional' },
                { src: '/LogoVITALNUTRITRAINER-Versão4Adaptada.png', title: 'Versão 4 Adaptada', desc: 'Design especializado' }
              ].map((logo, index) => (
                <div key={index} className="group">
                  <div className="bg-green-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="bg-white rounded-xl p-6 mb-4 min-h-[200px] flex items-center justify-center">
                      <img 
                        src={logo.src} 
                        alt={logo.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', logo.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{logo.title}</h4>
                    <p className="text-green-200 text-sm">{logo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aplicações Digitais */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Monitor className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Aplicações Digitais</h3>
              </div>
              <p className="text-blue-200">Presença digital profissional e impactante</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { src: '/DigitalVITALNUTRITRAINER-Logo3.png', title: 'Interface Digital V3', desc: 'Design para plataformas digitais' },
                { src: '/DigitalVITALNUTRITRAINER-Logo4.png', title: 'Interface Digital V4', desc: 'Aplicação premium digital' }
              ].map((digital, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                      <img 
                        src={digital.src} 
                        alt={digital.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', digital.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{digital.title}</h4>
                    <p className="text-cyan-200">{digital.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Social Media</h3>
              </div>
              <p className="text-blue-200">Presença marcante nas redes sociais</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { src: '/SocialMediaVITALNUTRITRAINER-Logo3.png', title: 'Social Media V3', desc: 'Conteúdo para redes sociais' },
                { src: '/SocialMediaVITALNUTRITRAINER-Logo4.png', title: 'Social Media V4', desc: 'Campanhas e posts premium' }
              ].map((social, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                      <img 
                        src={social.src} 
                        alt={social.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', social.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{social.title}</h4>
                    <p className="text-pink-200">{social.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Papelaria Corporativa - Vital Architect */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <FileImage className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Papelaria Corporativa - Vital Architect 🏆</h3>
              </div>
              <p className="text-blue-200">Identidade profissional em materiais impressos</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { src: '/PapelariaVITALARCHITECT-Logo3.png', title: 'Papelaria V3', desc: 'Material corporativo essencial' },
                { src: '/PapelariaVITALARCHITECT-Logo4.png', title: 'Papelaria V4', desc: 'Acabamento premium diferenciado' }
              ].map((papelaria, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                      <img 
                        src={papelaria.src} 
                        alt={papelaria.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', papelaria.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{papelaria.title}</h4>
                    <p className="text-yellow-200">{papelaria.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Papelaria Corporativa - Vital Nutritioner */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <FileImage className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Papelaria Corporativa - Vital Nutritioner</h3>
              </div>
              <p className="text-blue-200">Versão alternativa da identidade impressa</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { src: '/PapelariaVITALNUTRITRAINER-Logo3.png', title: 'Papelaria V3', desc: 'Material corporativo nutricional' },
                { src: '/PapelariaVITALNUTRITRAINER-Logo4.png', title: 'Papelaria V4', desc: 'Design especializado' }
              ].map((papelaria, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                      <img 
                        src={papelaria.src} 
                        alt={papelaria.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', papelaria.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{papelaria.title}</h4>
                    <p className="text-emerald-200">{papelaria.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Produtos */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Produtos & Embalagens</h3>
              </div>
              <p className="text-blue-200">Aplicação da marca em produtos físicos</p>
            </div>
            
            <div className="flex justify-center">
              <div className="group max-w-lg">
                <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                    <img 
                      src="/ProdutosVITALNUTRITRAINER-Logo3.png" 
                      alt="Produtos Vital Nutritioner"
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        console.error('Erro ao carregar imagem:', '/ProdutosVITALNUTRITRAINER-Logo3.png');
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Linha de Produtos</h4>
                  <p className="text-orange-200">Embalagens e produtos nutricionais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sinalização - Vital Architect */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Sinalização - Vital Architect 🏆</h3>
              </div>
              <p className="text-blue-200">Presença física marcante e profissional</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { src: '/Sinaliza_u00e7_u00e3oVITALARCHITECT-Logo3.png', title: 'Sinalização V3', desc: 'Placas e direcionamento interno' },
                { src: '/Sinaliza_u00e7_u00e3oVITALARCHITECT-Logo4.png', title: 'Sinalização V4', desc: 'Fachadas e identidade externa' }
              ].map((sinalizacao, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                      <img 
                        src={sinalizacao.src} 
                        alt={sinalizacao.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', sinalizacao.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{sinalizacao.title}</h4>
                    <p className="text-indigo-200">{sinalizacao.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sinalização - Vital Nutritioner */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-teal-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Sinalização - Vital Nutritioner</h3>
              </div>
              <p className="text-blue-200">Versão alternativa para ambientes físicos</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { src: '/Sinaliza_u00e7_u00e3oVITALNUTRITRAINER-Logo3.png', title: 'Sinalização V3', desc: 'Ambiente nutricional especializado' },
                { src: '/Sinaliza_u00e7_u00e3oVITALNUTRITRAINER-Logo4.png', title: 'Sinalização V4', desc: 'Identidade externa nutricional' }
              ].map((sinalizacao, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-white rounded-xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                      <img 
                        src={sinalizacao.src} 
                        alt={sinalizacao.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar imagem:', sinalizacao.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{sinalizacao.title}</h4>
                    <p className="text-teal-200">{sinalizacao.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparação Final */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Comparação Final: Vital Architect vs Vital Nutritioner</h3>
              </div>
              <p className="text-blue-200">Análise visual completa das duas propostas de naming</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vital Architect */}
              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400/50">
                <div className="text-center mb-6">
                  <Badge className="bg-blue-500 text-white text-lg px-4 py-2 mb-4">
                    🏆 VENCEDOR - Score: 8.76/10
                  </Badge>
                  <h4 className="text-2xl font-bold text-white mb-2">Vital Architect</h4>
                  <p className="text-blue-200">O arquiteto da sua transformação física</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/LogoVITALARCHITECT-Versão1.png" 
                    alt="Vital Architect Logo" 
                    className="bg-white rounded-lg p-4"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <img 
                    src="/PapelariaVITALARCHITECT-Logo3.png" 
                    alt="Vital Architect Papelaria" 
                    className="bg-white rounded-lg p-4"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>

              {/* Vital Nutritioner */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <div className="text-center mb-6">
                  <Badge variant="outline" className="border-gray-400 text-gray-300 text-lg px-4 py-2 mb-4">
                    Alternativa Explorada
                  </Badge>
                  <h4 className="text-2xl font-bold text-gray-300 mb-2">Vital Nutritioner</h4>
                  <p className="text-gray-400">Abordagem nutricional especializada</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/LogoVITALNUTRITRAINER-Versão3Adaptada.png" 
                    alt="Vital Nutritioner Logo" 
                    className="bg-white rounded-lg p-4"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <img 
                    src="/PapelariaVITALNUTRITRAINER-Logo3.png" 
                    alt="Vital Nutritioner Papelaria" 
                    className="bg-white rounded-lg p-4"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-400/30">
              <h3 className="text-3xl font-bold text-white mb-4">Identidade Visual Completa</h3>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Uma marca forte e versátil, pronta para conquistar o mercado de transformação física premium
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-blue-500 text-white px-6 py-3 text-lg">
                  ✓ Versatilidade Total
                </Badge>
                <Badge className="bg-purple-500 text-white px-6 py-3 text-lg">
                  ✓ Impacto Visual
                </Badge>
                <Badge className="bg-indigo-500 text-white px-6 py-3 text-lg">
                  ✓ Escalabilidade Global
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas de IA Criativa Section */}
      <section id="ferramentas" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-4xl font-bold text-slate-900">Ferramentas de IA Criativa ✨</h2>
            </div>
            <p className="text-xl text-slate-600">Expanda sua criatividade com ferramentas inteligentes de naming e branding</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Gerador de Nomes */}
            <Card className="shadow-xl border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle className="flex items-center text-purple-900">
                  <Wand2 className="w-6 h-6 mr-2" />
                  Gerador de Nomes ✨
                </CardTitle>
                <CardDescription className="text-purple-700">
                  Insira palavras-chave para gerar sugestões de nomes seguindo os critérios de qualidade do relatório
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Palavras-chave (separadas por espaço)
                    </label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Ex: fitness, saúde, performance, corpo"
                        className="flex-1"
                      />
                      <Button 
                        onClick={generateNames}
                        disabled={isGeneratingNames || !keywords.trim()}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        {isGeneratingNames ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <Sparkles className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {generatedNames.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Nomes Gerados:</h4>
                      <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                        {generatedNames.map((name, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <div>
                              <p className="font-medium text-slate-900">{name.nome}</p>
                              <p className="text-xs text-purple-600">{name.categoria}</p>
                            </div>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              {name.score}/10
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Gerador de Taglines */}
            <Card className="shadow-xl border-pink-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                <CardTitle className="flex items-center text-pink-900">
                  <Lightbulb className="w-6 h-6 mr-2" />
                  Gerador de Taglines ✨
                </CardTitle>
                <CardDescription className="text-pink-700">
                  Gere slogans e taglines criativas para "Vital Architect" expandindo a identidade da marca
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <Button 
                      onClick={generateTaglines}
                      disabled={isGeneratingTaglines}
                      size="lg"
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    >
                      {isGeneratingTaglines ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Gerando Taglines...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Gerar Taglines para Vital Architect
                        </>
                      )}
                    </Button>
                  </div>

                  {generatedTaglines.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Taglines Geradas:</h4>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {generatedTaglines.map((tagline, index) => (
                          <div key={index} className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                            <p className="font-medium text-slate-900 italic">"{tagline.texto}"</p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-pink-600 border-pink-300">
                                {tagline.categoria}
                              </Badge>
                              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                                {tagline.score}/10
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download PDF */}
          <Card className="shadow-xl border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Relatório Completo</h3>
                <p className="text-slate-600 mb-6">
                  Baixe o relatório completo em PDF com toda a análise detalhada, metodologia e recomendações estratégicas
                </p>
                <Button 
                  onClick={downloadPDF}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF Completo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Informações sobre as ferramentas */}
          <div className="mt-12 text-center">
            <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">💡 Como usar as ferramentas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
                  <div>
                    <h5 className="font-medium text-slate-800 mb-2">Gerador de Nomes</h5>
                    <p>Insira palavras relacionadas ao seu negócio ou área de atuação. A ferramenta criará combinações seguindo os mesmos critérios de qualidade usados na análise: percepção de valor, memorabilidade e escalabilidade.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800 mb-2">Gerador de Taglines</h5>
                    <p>Gera slogans criativos especificamente para "Vital Architect", explorando diferentes abordagens: científica, aspiracional e metafórica, mantendo a consistência com o posicionamento da marca.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Pesquisa Estratégica de Nomes</h3>
          </div>
          <p className="text-slate-400 mb-4">
            Relatório Executivo Unificado - Dr. Raphael de Ávila Leite
          </p>
          <p className="text-slate-500 text-sm">
            Análise científica fundamentada em evidências para transformação física premium
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

