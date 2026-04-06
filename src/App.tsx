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
              <div className="flex flex-col items-start justify-center leading-[0.95] mt-1 relative">
                <span className="text-[#D92570] font-bold text-[1.05rem] tracking-wide uppercase drop-shadow-sm">Guia Prático:</span>
                <span className="text-white font-bold text-[1.6rem] tracking-tighter uppercase mt-0.5">Dirigir Sem Medo</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-oswald text-[1.9rem] leading-[1.1] font-bold text-center mb-4 drop-shadow-lg tracking-wide text-white uppercase px-2">
            Você tem CNH, mas <span className="text-[#D92570]">evita dirigir?</span>
          </h1>
          
          {/* Subhead */}
          <p className="text-center text-white text-[1.1rem] leading-snug font-medium mb-6 px-2 drop-shadow-sm">
            Destrave o medo e volte a dirigir com segurança em até <strong className="text-[#D92570]">15 dias</strong> — mesmo que hoje você dependa de alguém pra tudo.
          </p>

          {/* 3 Bullets */}
          <div className="w-full flex flex-col items-center gap-2 mb-6 text-gray-100 font-medium text-[0.95rem]">
            <div className="flex items-center gap-3 w-full max-w-[280px] bg-[#130722]/50 py-2 px-3 rounded-lg border border-[#D92570]/20">
              <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
              <span>Volte a dirigir com segurança</span>
            </div>
            <div className="flex items-center gap-3 w-full max-w-[280px] bg-[#130722]/50 py-2 px-3 rounded-lg border border-[#D92570]/20">
              <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
              <span>Pare de depender dos outros</span>
            </div>
            <div className="flex items-center gap-3 w-full max-w-[280px] bg-[#130722]/50 py-2 px-3 rounded-lg border border-[#D92570]/20">
              <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
              <span>Mesmo que já tenha tentado antes</span>
            </div>
          </div>

          {/* Mockup Image */}
          <div className="w-full flex justify-center mb-5">
            <img 
              src="/imagens/Método Dirigir Sem Medo com bônus.png" 
              alt="Mockup Método Dirigir Sem Medo" 
              className="w-[90%] max-w-[340px] h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(217,37,112,0.15)] filter brightness-110 contrast-105"
            />
          </div>

          {/* Frase de Quebra de Crença Highlight */}
          <div className="bg-[#D92570] text-white py-3 px-5 mb-auto mt-4 rounded-xl shadow-[0_10px_20px_rgba(217,37,112,0.3)] transform -rotate-1 w-full max-w-[320px]">
            <p className="font-oswald text-[1.15rem] font-bold text-center uppercase tracking-wide leading-tight drop-shadow-sm">
              O problema não é você.<br />É a forma que te ensinaram.
            </p>
          </div>

        </div>
      </div>

      {/* FOLD 1.5 - IDENTIFICAÇÃO */}
      <section className="w-full bg-[#200C36] py-14 px-5 flex flex-col items-center relative">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 0%, #49156E 0%, #130722 70%)',
          }}
        />
        
        <div className="z-10 w-full max-w-md flex flex-col items-center">
          
          <div className="w-full mb-10 flex flex-col gap-4">
            <div className="bg-[#130722] border border-[#FF4B4B]/30 rounded-xl p-5 shadow-lg border-l-4 border-l-[#FF4B4B] transform hover:scale-[1.01] transition-transform">
              <p className="text-gray-300 text-[1rem] font-medium leading-relaxed">
                Você tirou a CNH…<br/>
                <strong className="text-[#FF4B4B]">Mas evita dirigir sempre que pode.</strong>
              </p>
            </div>
            
            <div className="bg-[#130722] border border-[#FF4B4B]/30 rounded-xl p-5 shadow-lg border-l-4 border-l-[#FF4B4B] transform hover:scale-[1.01] transition-transform">
              <p className="text-gray-300 text-[1rem] font-medium leading-relaxed">
                Seu carro fica parado…<br/>
                <strong className="text-[#FF4B4B]">E você depende de alguém pra sair.</strong>
              </p>
            </div>

            <div className="bg-[#130722] border border-[#FF4B4B]/30 rounded-xl p-5 shadow-lg border-l-4 border-l-[#FF4B4B] transform hover:scale-[1.01] transition-transform">
              <p className="text-gray-300 text-[1rem] font-medium leading-relaxed">
                Você sabe o que fazer…<br/>
                <strong className="text-[#FF4B4B]">Mas na hora trava.</strong>
              </p>
            </div>
          </div>

          {/* Frase de Impacto */}
          <div className="w-full bg-[#130722] border border-[#D92570]/30 rounded-2xl p-6 text-center shadow-[0_15px_30px_rgba(217,37,112,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_#D92570_0%,_transparent_70%)]"></div>
            <p className="font-oswald text-[#25D366] font-bold text-[1.4rem] uppercase tracking-wide leading-tight relative z-10">
              Você não precisa aprender a dirigir.
            </p>
            <p className="font-oswald text-white font-bold text-[1.4rem] uppercase tracking-wide leading-tight mt-2 relative z-10">
              Você precisa destravar.
            </p>
          </div>
          
        </div>
      </section>

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
            <p className="text-white text-[0.9rem] leading-relaxed drop-shadow-sm font-medium mb-3">
              O medo de dirigir é psicológico. Quando tentamos forçar a prática sem preparo, o cérebro apenas reforça o pânico. Sem um método, é normal travar.
            </p>
            <p className="text-white text-[0.9rem] leading-relaxed drop-shadow-sm font-medium">
              Mas, <strong className="text-white font-bold">quando você aplica os exercícios na sequência correta</strong>, seu cérebro começa a reinterpretar o ato de dirigir como algo seguro e natural, destravando o medo.
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
          <h2 className="font-oswald text-[1.5rem] leading-[1.2] font-bold text-center mb-8 uppercase tracking-wide text-white">
            📦 O QUE VOCÊ VAI <span className="text-[#D92570]">RECEBER:</span>
          </h2>

          <div className="w-full flex flex-col gap-4">
            
            <div className="bg-[#200C36] p-5 rounded-2xl border border-[#D92570]/30 shadow-lg flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-oswald text-[1.15rem] uppercase tracking-wide leading-tight mb-1">
                  Método “Dirigir Sem Medo em 15 Dias”
                </h3>
                <p className="text-gray-400 text-[0.9rem] leading-relaxed">
                  Passos simples para destravar mesmo com medo.
                </p>
              </div>
            </div>

            <div className="bg-[#200C36] p-5 rounded-2xl border border-[#D92570]/30 shadow-lg flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-oswald text-[1.15rem] uppercase tracking-wide leading-tight mb-1">
                  Exercícios guiados de controle emocional
                </h3>
                <p className="text-gray-400 text-[0.9rem] leading-relaxed">
                  Para reduzir ansiedade antes de entrar no carro.
                </p>
              </div>
            </div>

            <div className="bg-[#200C36] p-5 rounded-2xl border border-[#D92570]/30 shadow-lg flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-oswald text-[1.15rem] uppercase tracking-wide leading-tight mb-1">
                  Plano progressivo do zero ao trânsito real
                </h3>
                <p className="text-gray-400 text-[0.9rem] leading-relaxed">
                  Você evolui no seu ritmo, sem pressão.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="bg-[#130722] p-5 rounded-2xl border border-[#D92570]/50 shadow-lg flex flex-col gap-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D92570]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <Gift className="w-7 h-7 text-[#D92570] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[#D92570] font-oswald text-[1.05rem] uppercase tracking-wide leading-tight mb-1">
                      <span className="font-bold text-white">Bônus 1:</span> Mecânica básica para mulheres
                    </h3>
                    <p className="text-gray-300 text-[0.85rem] leading-relaxed">
                      Se sinta segura sem depender de ninguém.
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent relative z-10"></div>

                <div className="flex items-start gap-4 relative z-10">
                  <Gift className="w-7 h-7 text-[#D92570] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[#D92570] font-oswald text-[1.05rem] uppercase tracking-wide leading-tight mb-1">
                      <span className="font-bold text-white">Bônus 2:</span> Checklist de segurança antes de sair
                    </h3>
                    <p className="text-gray-300 text-[0.85rem] leading-relaxed">
                      Evite erros e ganhe confiança desde o início.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                  <div className="flex flex-col justify-center text-left">
                    <span className="font-oswald text-[#D92570] text-[0.95rem] font-bold leading-tight tracking-wider uppercase mb-0.5">Guia Prático:</span>
                    <span className="font-oswald text-white text-[1.45rem] font-bold leading-none tracking-wide uppercase">Dirigir Sem Medo</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h3 className="font-oswald text-white text-[1.5rem] font-bold text-center uppercase tracking-wide mb-8 relative z-10 leading-tight">
                Supere o medo de dirigir de uma vez por todas!
              </h3>

              {/* Deliverables List */}
              <div className="w-full flex flex-col gap-4 relative z-10">
                <p className="text-gray-300 text-sm mb-2 uppercase tracking-wider text-center">O que você vai receber hoje:</p>
                
                <div className="bg-[#200C36] p-4 rounded-xl border border-[#D92570]/30 shadow-inner flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-oswald text-[1.1rem] uppercase tracking-wide leading-tight font-bold">
                        E-book “Dirigir Sem Medo em 15 Dias”
                      </p>
                      <p className="text-sm font-sans text-gray-400 mt-1">Plano progressivo do zero ao trânsito real.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-oswald text-[1.1rem] uppercase tracking-wide leading-tight font-bold">
                        Exercícios práticos guiados
                      </p>
                      <p className="text-sm font-sans text-gray-400 mt-1">Técnicas focadas para você não travar de nervosismo.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-left">
                  <p className="text-[#D92570] text-center uppercase tracking-wider mb-3 font-bold text-sm">🎁 Seus Bônus Exclusivos</p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 bg-[#130722] p-3 rounded-lg border border-[#D92570]/20">
                      <Gift className="w-5 h-5 text-[#D92570] shrink-0 mt-0.5" />
                      <p className="text-gray-200 text-[0.95rem] leading-tight flex-1">
                        <span className="font-bold text-white block mb-1">Mecânica Básica para Mulheres</span>
                        Saiba como cuidar do seu carro de forma simples.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-[#130722] p-3 rounded-lg border border-[#D92570]/20">
                      <Gift className="w-5 h-5 text-[#D92570] shrink-0 mt-0.5" />
                      <p className="text-gray-200 text-[0.95rem] leading-tight flex-1">
                        <span className="font-bold text-white block mb-1">Checklist de Segurança</span>
                        O que conferir antes de sair para se sentir segura.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="w-full mt-8 relative z-10 flex flex-col items-center">
                
                {/* Reforço de Decisão + Ancoragem */}
                <div className="w-full mb-6 text-center">
                  <div className="bg-[#D92570]/10 p-5 rounded-xl border border-[#D92570]/20 mb-6 text-left">
                    <p className="text-white text-[1.05rem] font-bold mb-3 text-center uppercase tracking-wide">Você tem duas escolhas agora:</p>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-[#FF4B4B] shrink-0" />
                        <span className="text-gray-200 text-[0.9rem]">Continuar como está, dependendo dos outros e sentindo ansiedade.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span className="text-white text-[0.9rem] font-bold">Resolver isso de uma vez, começando no seu próprio ritmo.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-gray-300 text-[0.95rem] leading-relaxed mb-6 px-2 flex flex-col gap-3">
                    <p>Se você fosse resolver isso com aulas presenciais…</p>
                    <p>Você gastaria facilmente <strong className="text-[#FF4B4B] font-bold">R$200 a R$500</strong> por sessão.</p>
                    <p>E ainda dependeria de horário, instrutor e disponibilidade.</p>
                    <p className="text-white font-medium mt-2 bg-[#D92570]/20 border border-[#D92570]/30 py-3 px-4 rounded-xl">Mas aqui você resolve no seu tempo…<br />sem pressão…<br />e sem depender de ninguém.</p>
                  </div>
                  
                  <div className="text-center text-white mb-2 flex flex-col gap-4">
                    <p className="text-gray-400 text-[1.1rem]">Hoje você não vai pagar <span className="line-through px-1">R$97</span>... nem <span className="line-through px-1">R$47</span>...</p>
                    
                    <div className="text-gray-300 text-[1.05rem] italic leading-relaxed my-2">
                      <p>Imagine você daqui a 15 dias…</p>
                      <p className="mt-3">Entrando no carro com calma…</p>
                      <p>Saindo sozinha…</p>
                      <p>Sem depender de ninguém…</p>
                      <p className="not-italic font-bold text-white text-[1.1rem] mt-4">Agora me diz:</p>
                      <p className="not-italic font-bold text-[#D92570] text-[1.2rem] mt-1 mb-2">Vale R$17 pra começar isso hoje?</p>
                    </div>

                    <p className="text-[#25D366] font-bold text-lg mt-1 uppercase tracking-wider">👉 Apenas</p>
                  </div>
                </div>

                <div className="flex flex-col items-center mb-2">
                  <div className="flex items-start text-[#25D366] drop-shadow-md -mt-2">
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
                      Quero dirigir sem medo agora
                    </span>
                  </button>
                </a>
                
                <div className="w-full flex flex-col items-center gap-1.5 mt-4 mb-2">
                  <span className="text-gray-400 text-[0.85rem] font-medium">✓ Mesmo que você tenha muito medo hoje</span>
                  <span className="text-gray-400 text-[0.85rem] font-medium">✓ Funciona mesmo se você já tentou antes</span>
                </div>

                <div className="w-full flex items-center justify-center gap-5 mt-2 mb-5">
                  <div className="flex items-center gap-1.5 text-gray-300 text-[0.85rem]">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300 text-[0.85rem]">
                    <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                    <span>Garantia 7 dias</span>
                  </div>
                </div>

                <p className="text-[0.8rem] font-bold text-[#FF4B4B] uppercase tracking-wide text-center bg-[#FF4B4B]/10 py-2 px-4 rounded-full w-full border border-[#FF4B4B]/20">
                  Esse valor promocional pode sair do ar a qualquer momento
                </p>
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
