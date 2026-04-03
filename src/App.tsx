import React, { useState } from 'react';
import { Brain, CheckCircle2, ShieldCheck, X, Check, BookOpen, Car, Map, Heart, Gift, ChevronDown, Mail, Smartphone, Tablet, Laptop, Plus } from 'lucide-react';

const courseModules = [
  {
    title: "Etapa 1: Preparando a Sua Mente",
    icon: Brain,
    items: [
      "Assumindo o Controle: O primeiro passo é entender que dominar o volante começa de dentro para fora. Você é 100% capaz.",
      "O Poder do Seu Processo: Abandone comparações e descubra como o seu cérebro conquista essa nova habilidade no seu próprio ritmo."
    ]
  },
  {
    title: "Etapa 2: O Seu Espaço Seguro",
    icon: ShieldCheck,
    items: [
      "Familiaridade Traz Confiança: Sentindo-se em casa dentro do seu carro. Exercícios guiados de respiração para ancorar a calma.",
      "Os Primeiros Sinais de Vida: Ciclos práticos de ligar e desligar o veículo, dominando o painel com total tranquilidade."
    ]
  },
  {
    title: "Etapa 3: A Magia do Movimento",
    icon: Car,
    items: [
      "Deslizando Pela Primeira Vez: O carro finalmente obedece a você. Técnicas de movimento curto, sentindo o poder de pilotar a máquina.",
      "A Semana da Transformação: Uma jornada de 7 dias consecutivos consolidando a sua destreza e segurança a cada novo trajeto."
    ]
  },
  {
    title: "Etapa 4: Conquistando Horizontes",
    icon: Map,
    items: [
      "Expandindo Fronteiras: Crescimento contínuo e sólido. Conquistando seus primeiros destinos reais (como a padaria ou farmácia) sem estresse.",
      "A Sua Autonomia Brilhante: O maior salto rumo à superação. O guia definitivo para te preparar emocionalmente para a sua primeira saída solo."
    ]
  },
  {
    title: "Etapa 5: Resiliência Emocional Inabalável",
    icon: Heart,
    items: [
      "Transformando Ansiedade em Foco: Errar faz parte e é sinal de progresso. Construindo uma sabedoria prática para reagir a qualquer imprevisto visual.",
      "Selo de Independência: Blindando a sua confiança contra pressões de terceiros e firmando um compromisso inquebrável com a sua liberdade."
    ]
  },
  {
    title: "Bônus Especiais: O Caminho Aberto",
    icon: Gift,
    items: [
      "Mestria nas Situações Comuns: Dicas de ouro para semáforos, primeiras balizas tranquilas, dirigir sob chuva e navegar em grandes avenidas.",
      "O Seu Mapa Rumo à Liberdade: Um roteiro prático e flexível de 30 dias que garante sua evolução desde a garagem até a tão sonhada independência."
    ]
  }
];

const faqItems = [
  {
    question: "Como vou receber acesso ao Guia?",
    answer: "Logo após a confirmação do pagamento, você receberá um e-mail com todas as instruções e o link exclusivo para acessar o material no seu celular, tablet ou computador."
  },
  {
    question: "E se eu não gostar ou achar que não é pra mim?",
    answer: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo achar que o método não te ajudou, nós devolvemos 100% do seu dinheiro sem letras miúdas."
  },
  {
    question: "Para quem é este material?",
    answer: "Para qualquer pessoa que sinta ansiedade, medo ou insegurança na hora de dirigir, tenha ou não CNH, e que queira finalmente conquistar sua independência no volante."
  },
  {
    question: "Dá pra ler no celular?",
    answer: "Sim! O material foi formatado para que você possa ler confortavelmente em qualquer dispositivo, incluindo o seu smartphone, na hora que quiser."
  }
];

export default function App() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* FOLD 1 */}
      <div className="min-h-[100dvh] bg-[#130722] flex flex-col items-center justify-center relative">
        {/* Background Texture/Gradient */}
        <div 
          className="absolute inset-0 z-0 opacity-50"
          style={{
            background: 'radial-gradient(circle at 50% 20%, #49156E 0%, #130722 80%)',
          }}
        />
        <div 
          className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />

        <div className="z-10 flex flex-col items-center justify-center w-full max-w-md px-5 py-4 h-full min-h-[100dvh]">
          
          {/* Header / Logo */}
          <div className="flex flex-col items-center mb-6 mt-auto">
            <div className="flex items-center gap-2.5">
              {/* Logo Icon */}
              <div className="relative w-[3.5rem] h-[3.5rem] rounded-full border-[3px] border-[#D92570] flex items-center justify-center shadow-[0_0_15px_rgba(217,37,112,0.25)]">
                <div className="absolute w-[3px] h-full bg-[#D92570] rotate-90"></div>
                <div className="absolute w-[3px] h-full bg-[#D92570] rotate-[30deg]"></div>
                <div className="absolute w-[3px] h-full bg-[#D92570] rotate-[150deg]"></div>
                <div className="absolute w-10 h-10 bg-[#1a0f0a] rounded-full z-0"></div>
                <Brain className="text-[#D92570] w-7 h-7 z-10 relative top-[1px]" strokeWidth={2.5} />
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col items-start justify-center leading-[0.85]">
                <span className="text-white font-bold text-[2rem] tracking-tighter">MENTE NO</span>
                <span className="text-white font-bold text-[2rem] tracking-tighter">CONTROLE</span>
              </div>
            </div>
            <span className="text-[#D92570] font-cursive text-[1.8rem] mt-1 -rotate-2 drop-shadow-md">
              Dirija Sem Medo
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-oswald text-[1.5rem] leading-[1.2] font-bold text-center mb-4 uppercase drop-shadow-lg tracking-wide">
            <span className="text-[#D92570]">Supere o medo de dirigir</span>
            <br />
            <span className="text-white">e conquiste sua independência dirigindo</span>
          </h1>

          {/* Mockup Image */}
          <div className="w-full flex justify-center mb-5">
            <img 
              src="/imagens/Método Dirigir Sem Medo com bônus.png" 
              alt="Mockup Método Dirigir Sem Medo" 
              className="w-[90%] max-w-[340px] h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(217,37,112,0.15)] filter brightness-110 contrast-105"
            />
          </div>

          {/* Body Text */}
          <div className="text-center text-[0.9rem] leading-snug px-2 mb-auto">
            <p className="text-[#D92570] font-bold text-[1.05rem] mb-2 drop-shadow-sm leading-tight">
              Através de um passo a passo prático e psicológico
            </p>
            <p className="text-gray-100 mb-2 font-medium">
              você aprenderá a controlar a ansiedade antes mesmo de entrar no carro, treinar no seu ritmo com exercícios específicos e desenvolver a confiança para dirigir sozinha.
            </p>
          </div>

        </div>
      </div>

      {/* FOLD 2 */}
      <section className="w-full bg-white text-gray-900 py-16 px-5 flex flex-col items-center">
        {/* Icon */}
        <div className="mb-6">
          <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Heart Half */}
            <path d="M32 56C32 56 10 38 10 21C10 12.7157 16.7157 6 25 6C28.5 6 32 9 32 9" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Right Brain Half Outline */}
            <path d="M32 56C32 56 54 38 54 21C54 12.7157 47.2843 6 39 6C35.5 6 32 9 32 9" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Center Line */}
            <path d="M32 9V56" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Brain Folds (Right Side) */}
            <path d="M32 16C38 13 46 15 48 20" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 26C40 22 50 25 52 32" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 38C38 34 46 36 48 42" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 48C36 45 42 47 43 51" stroke="#D92570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Headline */}
        <h2 className="font-oswald text-[1.5rem] leading-[1.1] font-bold text-center mb-5 uppercase tracking-wide">
          <span className="text-[#1a1a1a]">O segredo está na</span>
          <br />
          <span className="text-[#D92570]">reprogramação da sua mente!</span>
        </h2>

        {/* Paragraph */}
        <p className="text-center text-[#4a4a4a] text-[0.95rem] leading-relaxed mb-12 max-w-md px-2">
          Sua mente está treinada a toda vez que você pensar em dirigir, você sentir <strong className="text-[#1a1a1a] font-bold">medo, ansiedade e muito nervosismo</strong>. E tudo isso continua mesmo com você tentando...
        </p>

        {/* Card 1 (Negative) */}
        <div className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#200C36] mb-10">
          {/* Image Container */}
          <div className="relative h-[240px] w-full">
            <img 
              src="https://thumbs.dreamstime.com/b/motorista-da-mulher-triste-no-carro-33105220.jpg" 
              alt="Mulher estressada no carro" 
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#200C36] via-[#200C36]/50 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative px-7 pb-10 pt-2 -mt-16">
            {/* Red X Icon */}
            <div className="absolute -top-6 left-7 w-[3.5rem] h-[3.5rem] bg-[#FF4B4B] rounded-full flex items-center justify-center shadow-lg">
              <X className="text-white w-8 h-8" strokeWidth={3} />
            </div>

            {/* Card Headline */}
            <h3 className="font-oswald text-white text-[1.3rem] font-bold leading-[1.1] mt-8 mb-4 uppercase tracking-wide">
              Entrar no carro com<br/>medo para praticar
            </h3>

            {/* Card Text */}
            <p className="text-gray-300 text-[0.9rem] leading-relaxed">
              Quando entramos no carro sentindo muito medo para praticar, nossa atenção fica comprometida, temos problemas com a concentração, e dificuldades em raciocinar rápido para reagir no transito, perdendo muito tempo e dinheiro tentando desse jeito. <strong className="text-white font-bold">O medo é psicológico e ele pode ser facilmente eliminado...</strong>
            </p>
          </div>
        </div>

        {/* Card 2 (Positive) */}
        <div className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(217,37,112,0.25)] bg-gradient-to-b from-[#B82894] to-[#D92570]">
          {/* Image Container */}
          <div className="relative h-[260px] w-full">
            <img 
              src="https://img.freepik.com/fotos-gratis/vista-do-interior-do-carro-de-uma-mulher-motorista-ajustando-os-espelhos-antes-de-dirigir-um-carro_342744-699.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Mulher sorrindo dirigindo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay to blend image into the orange background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#D92570] via-[#D92570]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D92570]/40 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative px-7 pb-10 pt-2 -mt-24">
            {/* Green Check Icon */}
            <div className="absolute -top-6 left-7 w-[3.5rem] h-[3.5rem] bg-[#34D399] rounded-full flex items-center justify-center shadow-lg">
              <Check className="text-white w-8 h-8" strokeWidth={4} />
            </div>

            {/* Card Headline */}
            <h3 className="font-oswald text-white text-[1.3rem] font-bold leading-[1.1] mt-8 mb-4 uppercase tracking-wide drop-shadow-md">
              Reprogramando sua mente para não ter medo de dirigir
            </h3>

            {/* Card Text */}
            <p className="text-white text-[0.9rem] leading-relaxed drop-shadow-sm font-medium">
              Quando seguimos os exercícios de reprogramação mental com estímulos intensos e progressivos, realizados na sequência certa causamos uma mudança no padrão dos seus pensamentos <strong className="text-white font-bold">desbloqueando de forma acelerada o medo que você sente em pensar em dirigir já nos primeiros exercícios.</strong>
            </p>
          </div>
        </div>

      </section>

      {/* FOLD 3 - Modules */}
      <section className="w-full bg-[#130722] py-16 px-5 flex flex-col items-center relative">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 0%, #49156E 0%, #130722 70%)',
          }}
        />
        
        <div className="z-10 w-full max-w-md flex flex-col items-center">
          <h2 className="font-oswald text-[1.5rem] leading-[1.1] font-bold text-center mb-3 uppercase tracking-wide text-white">
            O que você vai <span className="text-[#D92570]">aprender</span>
          </h2>
          <p className="text-gray-400 text-center text-[0.9rem] mb-10">
            Um passo a passo completo, do absoluto zero até a sua independência no volante.
          </p>

          <div className="w-full flex flex-col gap-3">
            {courseModules.map((mod, idx) => (
              <div key={idx} className="w-full bg-[#200C36] rounded-2xl overflow-hidden border border-[#D92570]/20 shadow-lg">
                <button 
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-[#200C36] to-[#2C1147] hover:from-[#2C1147] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D92570]/10 flex items-center justify-center shrink-0">
                      <mod.icon className="text-[#D92570] w-5 h-5" />
                    </div>
                    <h3 className="font-oswald text-white text-[1.05rem] font-bold text-left tracking-wide">{mod.title}</h3>
                  </div>
                  <ChevronDown className={`text-gray-400 w-5 h-5 transition-transform duration-300 shrink-0 ${openModule === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openModule === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5 pt-1">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>
                    <ul className="space-y-3.5">
                      {mod.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-[0.9rem] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>



        </div>
      </section>

      {/* FOLD 4 - How to Access */}
      <section className="w-full bg-white py-16 px-5 flex flex-col items-center relative overflow-hidden">
        {/* Background Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, #D92570 0%, transparent 70%)',
          }}
        />

        <div className="z-10 w-full max-w-md flex flex-col items-center">
          <h2 className="font-oswald text-[1.5rem] leading-[1.1] font-bold text-center mb-6 uppercase tracking-wide text-[#130722]">
            COMO VOCÊ IRÁ <span className="text-[#D92570]">ACESSAR</span> O GUIA?
          </h2>

          <div className="w-full bg-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100 relative">
            {/* Email Step */}
            <div className="flex flex-col items-center text-center mb-8 relative">
              <div className="w-16 h-16 bg-[#D92570]/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                <Mail className="w-8 h-8 text-[#D92570]" />
                <div className="absolute -bottom-1 -right-1 bg-[#25D366] rounded-full p-1 border-2 border-white">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
              <h3 className="font-oswald text-[1.15rem] font-bold text-[#130722] mb-2">Acesso Imediato por E-mail</h3>
              <p className="text-gray-600 text-[0.9rem] leading-relaxed">
                Assim que realizar a sua inscrição, você receberá <strong>imediatamente por e-mail</strong> os dados para acessar o seu e-book.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

            {/* Devices Step */}
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-3 mb-5">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <Smartphone className="w-6 h-6 text-gray-700" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <Tablet className="w-6 h-6 text-gray-700" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <Laptop className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="font-oswald text-[1.15rem] font-bold text-[#130722] mb-2">Leia Onde Quiser</h3>
              <p className="text-gray-600 text-[0.9rem] leading-relaxed">
                Você poderá ler e consultar o seu guia na hora que quiser, usando seu <strong>celular, tablet ou computador</strong>. O material estará sempre na palma da sua mão!
              </p>
            </div>
          </div>
          
          {/* Guarantee Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
            <ShieldCheck className="w-5 h-5 text-[#25D366]" />
            <span>Compra 100% Segura e Garantida</span>
          </div>
        </div>
      </section>

      {/* FOLD 5 - Final Offer */}
      <section className="w-full bg-[#D92570] py-16 px-5 flex flex-col items-center relative">
        <div className="z-10 w-full max-w-md flex flex-col items-center">
          
          {/* Offer Card */}
          <div className="w-full bg-[#130722] rounded-[2rem] overflow-hidden shadow-2xl relative border border-[#D92570]/30">
            {/* Top Banner */}
            <div className="bg-[#D92570] w-full py-3 text-center">
              <span className="font-oswald text-white font-bold text-lg tracking-wider uppercase">
                Oferta por tempo limitado!
              </span>
            </div>

            {/* Card Content */}
            <div className="p-8 flex flex-col items-center relative">
              {/* Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Background Glow inside card */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, #D92570 0%, transparent 80%)',
                }}
              />

              {/* Logo */}
              <div className="flex flex-col items-center mb-8 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-14 h-14 rounded-full border-2 border-[#D92570] flex items-center justify-center bg-[#130722]">
                    <Brain className="text-[#D92570] w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-oswald text-white text-2xl font-bold leading-none tracking-wide">MENTE NO</span>
                    <span className="font-oswald text-white text-2xl font-bold leading-none tracking-wide">CONTROLE</span>
                  </div>
                </div>
                <span className="font-dancing text-[#D92570] text-[1.8rem] mt-1">Dirija Sem Medo</span>
              </div>

              {/* Headline */}
              <h3 className="font-oswald text-white text-[1.5rem] font-bold text-center uppercase tracking-wide mb-8 relative z-10 leading-tight">
                Supere o medo de dirigir de uma vez por todas!
              </h3>

              {/* Deliverables List */}
              <div className="w-full flex flex-col gap-4 relative z-10">
                <p className="text-gray-300 text-sm mb-2 uppercase tracking-wider">Você vai ganhar tudo isso:</p>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <p className="text-white font-oswald text-[1.05rem] uppercase tracking-wide leading-tight">
                    <span className="font-bold">E-book Dirigir Sem Medo em 15 Dias</span>
                    <span className="block text-sm font-sans text-gray-400 mt-1 normal-case">Passo a passo prático</span>
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Plus className="w-5 h-5 text-[#D92570] shrink-0 mt-0.5" />
                  <p className="text-gray-200 font-oswald text-[1.05rem] uppercase tracking-wide leading-tight">
                    <span className="font-bold text-white">Bônus 01</span> Mecânica Básica para Mulheres
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Plus className="w-5 h-5 text-[#D92570] shrink-0 mt-0.5" />
                  <p className="text-gray-200 font-oswald text-[1.05rem] uppercase tracking-wide leading-tight">
                    <span className="font-bold text-white">Bônus 02</span> Checklist de Segurança Antes de Sair de Casa
                  </p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="w-full mt-10 relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center mb-4 mt-2">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[1.1rem] mb-2">
                    <span>De</span>
                    <div className="relative inline-flex items-center justify-center -mt-0.5">
                      <span className="font-bold">R$ 67,00</span>
                      <X className="absolute text-[#FF4B4B] w-9 h-9 opacity-85" strokeWidth={3} />
                    </div>
                    <span>por apenas</span>
                  </div>
                  <div className="flex items-start text-[#25D366] -mt-1 drop-shadow-md">
                    <span className="text-3xl font-bold mt-3 mr-1">R$</span>
                    <span className="font-oswald text-[6rem] font-bold leading-none tracking-tighter">17</span>
                    <span className="text-4xl font-bold mt-4 ml-1">,00</span>
                  </div>
                </div>

                <a 
                  href="https://pay.hotmart.com/J104718348Y?checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <button className="w-full bg-gradient-to-b from-[#25D366] to-[#1da851] hover:from-[#20bd5a] hover:to-[#199446] text-white rounded-2xl py-4 px-4 shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center border border-[#4ade80]/40 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out"></div>
                    <span className="font-oswald text-[1.4rem] uppercase tracking-wider font-bold drop-shadow-md">
                      Quero Garantir Minha Vaga
                    </span>
                  </button>
                </a>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                  <ShieldCheck className="w-4 h-4 text-gray-500" />
                  <span>Pagamento seguro via Hotmart</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOLD 6 - FAQ */}
      <section className="w-full bg-[#200C36] py-16 px-5 flex flex-col items-center">
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="font-oswald text-[1.5rem] leading-[1.1] font-bold text-center mb-8 uppercase tracking-wide text-white">
            DÚVIDAS <span className="text-[#D92570]">FREQUENTES</span>
          </h2>
          
          <div className="w-full flex flex-col gap-3">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="w-full bg-[#130722] rounded-2xl overflow-hidden border border-[#D92570]/10 transition-all hover:border-[#D92570]/30">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-oswald text-white text-[1.05rem] font-bold pr-4">{faq.question}</span>
                  <ChevronDown className={`text-[#D92570] w-5 h-5 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5 pt-1 text-gray-400 text-[0.9rem] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
