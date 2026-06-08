import React, { useState } from 'react';
import { Brain, CheckCircle2, ShieldCheck, X, Check, BookOpen, Car, Map, Heart, Gift, ChevronDown, Mail, Lock, ArrowRight, Clock } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "E se eu tiver muito medo de dirigir?",
      answer: "O Protocolo foi criado exatamente para quem tem níveis altíssimos de ansiedade. Nós não vamos te colocar no trânsito no primeiro dia. Começamos com exercícios emocionais fora do carro, para que você ganhe segurança antes mesmo de ligar o motor."
    },
    {
      question: "E se eu já tentei voltar a dirigir antes e desisti?",
      answer: "A culpa não foi sua. Você provavelmente tentou forçar a prática sem antes tratar o bloqueio emocional. É como tentar correr com a perna engessada. Nosso método primeiro 'tira o gesso' (desbloqueia o medo) para só depois você ir para a prática."
    },
    {
      question: "E se eu estiver há anos sem pegar no carro?",
      answer: "A habilidade de dirigir é como andar de bicicleta, o seu corpo não esquece. O que te impede hoje é apenas o bloqueio mental. O nosso passo a passo progressivo vai reacender essa memória muscular de forma suave e natural."
    },
    {
      question: "E se eu não conseguir aplicar o método?",
      answer: "O método é extremamente simples, prático e progressivo. Mas, se por qualquer motivo você achar que não consegue aplicar ou que não é para você, você tem 7 dias de garantia incondicional para pedir seu dinheiro de volta."
    },
    {
      question: "Como vou receber o material?",
      answer: "Logo após a confirmação do pagamento, você receberá um e-mail com acesso imediato ao material, podendo ler e aplicar pelo seu celular, tablet ou computador na hora que quiser."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* HEADER BAR */}
      <div className="w-full bg-rose-600 text-white py-2 px-4 text-center text-sm font-medium tracking-wide">
        ATENÇÃO: Comece HOJE e junte-se a mais de 500 mulheres que já venceram o medo de dirigir!
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0F172A] py-16 px-5 lg:py-20 flex flex-col items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-rose-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="z-10 flex flex-col items-center justify-center w-full max-w-4xl text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold text-xs md:text-sm mb-8 backdrop-blur-sm uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>O Segredo Para Vencer a Ansiedade</span>
          </div>

          <h1 className="font-oswald font-bold text-[2.5rem] md:text-6xl leading-[1.1] mb-6 text-white tracking-tight uppercase">
            DESBLOQUEIE O SEU <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">MEDO DE DIRIGIR</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-2xl leading-relaxed">
            Recupere sua confiança ao volante e <strong className="text-white">volte a dirigir sozinha em até 15 dias</strong>, mesmo que você esteja há anos sem pegar no carro.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 mb-10 w-full justify-center text-slate-200 font-medium text-[0.95rem]">
            <div className="flex items-center gap-3 bg-slate-800/60 py-3 px-5 rounded-xl border border-slate-700/50 w-full md:w-auto backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
              <span>Pare de depender dos outros</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/60 py-3 px-5 rounded-xl border border-slate-700/50 w-full md:w-auto backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
              <span>Volte a sair sozinha quando quiser</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/60 py-3 px-5 rounded-xl border border-slate-700/50 w-full md:w-auto backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
              <span>Método simples e progressivo</span>
            </div>
          </div>

          {/* Product Mockup (Optional - keeping the original image if available) */}
          <div className="w-full flex justify-center mb-10">
            <img 
              src="/imagens/Método Dirigir Sem Medo com bônus.png" 
              alt="Método Dirigir Sem Medo" 
              className="w-[90%] max-w-[400px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(225,29,72,0.15)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          <a href="#oferta" className="group w-full max-w-lg bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white rounded-2xl py-5 px-6 shadow-[0_0_40px_rgba(225,29,72,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <span className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-wide">QUERO DESBLOQUEAR MEU MEDO</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="mt-5 flex items-center justify-center gap-5 text-slate-400 text-sm">
            <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Compra Segura</div>
            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> Acesso Imediato</div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO DE IDENTIFICAÇÃO */}
      <section className="w-full bg-slate-50 py-20 px-5 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center">
          
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4 leading-tight uppercase">
            Essa página <span className="text-rose-600">foi escrita para você?</span>
          </h2>
          
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl">
            Responda mentalmente: Quantas dessas situações dolorosas fazem parte da sua rotina hoje?
          </p>

          <div className="grid md:grid-cols-2 gap-5 w-full">
            {[
              "Ver seu carro parado na garagem e sentir um aperto no peito por não conseguir usá-lo.",
              "Ter que pedir carona ou depender do marido, filhos e familiares para ir a lugares simples.",
              "Sentir uma ansiedade paralisante e coração acelerado só de pensar em pegar o trânsito.",
              "Sentir vergonha por ter a CNH na bolsa, mas não ter a coragem de assumir o volante.",
              "Gastar rios de dinheiro com aplicativos de transporte para trajetos que você mesma poderia fazer.",
              "Já ter tentado voltar a dirigir, mas ter travado de nervoso e desistido logo em seguida."
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-start gap-4 hover:shadow-md hover:border-rose-200 transition-all">
                <div className="bg-rose-100 p-2 rounded-xl shrink-0 mt-0.5">
                  <X className="w-5 h-5 text-rose-600" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-900 to-[#1e1b4b] text-white p-8 md:p-12 rounded-[2rem] w-full text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
            
            <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-5 relative z-10 uppercase tracking-wide">
              Se você disse "SIM" para alguma dessas situações...
            </h3>
            <p className="text-lg text-slate-300 relative z-10 font-medium leading-relaxed max-w-3xl mx-auto">
              Saiba que você não está sozinha. Milhares de mulheres passam exatamente por isso todos os dias. Mas a boa notícia é que o problema não é você, e sim a forma como tentaram te ensinar a superar isso.
            </p>
          </div>

        </div>
      </section>

      {/* 3. QUEBRA DE CRENÇA */}
      <section className="w-full bg-white py-20 px-5 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          
          <div className="w-20 h-20 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-rose-100">
            <Brain className="w-10 h-10 text-rose-600" />
          </div>

          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            Você não precisa <span className="text-rose-600">aprender a dirigir</span> novamente.
          </h2>
          
          <h3 className="font-oswald text-2xl md:text-3xl font-bold text-slate-700 mb-12 uppercase tracking-wide">
            Você precisa desbloquear o medo que te paralisa.
          </h3>

          <div className="text-left text-slate-700 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p className="bg-slate-50 p-5 rounded-xl border-l-4 border-rose-500">
              Preste muita atenção: O seu problema não é falta de capacidade. Você passou na autoescola. Você tirou a sua CNH. <strong>Você sabe a mecânica de dirigir.</strong>
            </p>
            <p>
              A verdadeira dificuldade é um <strong>bloqueio emocional</strong>. 
            </p>
            <p>
              Ao longo do tempo, ou devido a alguma experiência estressante, o seu cérebro associou o ato de dirigir a um perigo iminente. É por isso que você sua frio, seu coração acelera e suas pernas tremem. É o seu corpo tentando te proteger de uma falsa "ameaça".
            </p>
            <p className="font-bold text-slate-900">
              Tentar forçar a prática no trânsito sentindo esse pânico só vai aumentar a sua ansiedade. É por isso que as "aulas para habilitados" tradicionais muitas vezes não funcionam. Elas forçam a prática antes de tratar a emoção.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MECANISMO ÚNICO */}
      <section className="w-full bg-[#0F172A] py-20 px-5 flex flex-col items-center text-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

        <div className="w-full max-w-5xl flex flex-col items-center z-10">
          <span className="text-rose-400 font-bold tracking-widest uppercase text-sm mb-4">A Ciência por Trás da Solução</span>
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-center mb-16 uppercase tracking-tight">
            Conheça o <span className="text-rose-500">Protocolo de Desbloqueio Emocional ao Volante</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 relative hover:-translate-y-2 transition-transform backdrop-blur-sm">
              <div className="w-14 h-14 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/30">
                <Heart className="w-7 h-7 text-rose-400" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 uppercase">1. Resgate Emocional</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Antes de ligar o carro, utilizamos exercícios emocionais práticos para "desligar" o sinal de alerta do seu cérebro e trazer calma e presença.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 relative hover:-translate-y-2 transition-transform backdrop-blur-sm">
              <div className="w-14 h-14 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/30">
                <ShieldCheck className="w-7 h-7 text-rose-400" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 uppercase">2. Exposição Progressiva</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Você não vai para o trânsito no primeiro dia. Seguimos um método de pequenos passos em ambiente seguro. O cérebro reaprende que o carro é o seu território.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 relative hover:-translate-y-2 transition-transform backdrop-blur-sm">
              <div className="w-14 h-14 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/30">
                <Map className="w-7 h-7 text-rose-400" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-4 uppercase">3. Autonomia Real</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Após criar a base emocional de ferro, você expande seus trajetos gradativamente, até recuperar 100% da sua independência no trânsito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BENEFÍCIOS EMOCIONAIS */}
      <section className="w-full bg-rose-50 py-24 px-5 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col items-center">
          
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-center text-slate-900 mb-14 uppercase tracking-tight">
            Feche os olhos por um segundo e...<br/>
            <span className="text-rose-600 mt-2 block">Imagine sua vida daqui a 15 dias:</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="flex gap-5 items-start bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md transition-all">
              <div className="bg-emerald-100 p-3 rounded-2xl shadow-sm shrink-0">
                <Check className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-oswald text-2xl font-bold text-slate-900 mb-2 uppercase">Saindo sozinha quando quiser</h4>
                <p className="text-slate-600 font-medium">Pegar a chave do carro, entrar, ligar o som e sair. Sem ter que dar satisfação, sem ter que pedir carona, sem depender do marido.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md transition-all">
              <div className="bg-emerald-100 p-3 rounded-2xl shadow-sm shrink-0">
                <Check className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-oswald text-2xl font-bold text-slate-900 mb-2 uppercase">Ir ao supermercado ou shopping</h4>
                <p className="text-slate-600 font-medium">Fazer suas compras na hora que for melhor para você, colocar as sacolas no porta-malas e voltar no conforto do ar condicionado.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md transition-all">
              <div className="bg-emerald-100 p-3 rounded-2xl shadow-sm shrink-0">
                <Check className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-oswald text-2xl font-bold text-slate-900 mb-2 uppercase">Levando seus filhos</h4>
                <p className="text-slate-600 font-medium">Poder levar as crianças para a escola, para o médico ou para um passeio divertido no final de semana com total segurança.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md transition-all">
              <div className="bg-emerald-100 p-3 rounded-2xl shadow-sm shrink-0">
                <Check className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-oswald text-2xl font-bold text-slate-900 mb-2 uppercase">Sentindo muito orgulho</h4>
                <p className="text-slate-600 font-medium">A sensação maravilhosa de superação. Olhar para trás e ver que o medo ficou no passado e você finalmente venceu essa barreira.</p>
              </div>
            </div>
          </div>

          <a href="#oferta" className="mt-16 group bg-rose-600 hover:bg-rose-700 text-white rounded-2xl py-5 px-10 shadow-[0_10px_30px_rgba(225,29,72,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full max-w-lg">
            <span className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-wide">QUERO RECUPERAR MINHA LIBERDADE</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>
      </section>

      {/* 7. O QUE VOCÊ RECEBE */}
      <section className="w-full bg-white py-24 px-5 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center">
          
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-center text-slate-900 mb-14 uppercase tracking-tight">
            O que você vai receber ao acessar o<br/>
            <span className="text-rose-600">Método hoje:</span>
          </h2>

          <div className="w-full flex flex-col gap-8">
            {/* Main Product */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 hover:border-rose-300 transition-colors shadow-lg">
              <div className="w-20 h-20 bg-rose-100 rounded-3xl flex items-center justify-center shrink-0 shadow-sm border border-rose-200">
                <BookOpen className="w-10 h-10 text-rose-600" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-oswald text-2xl md:text-3xl font-bold text-slate-900 mb-3 uppercase">O Método Principal: Dirigir Sem Medo</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  O guia passo a passo com o Plano Progressivo. Você saberá exatamente o que fazer em cada etapa até estar dirigindo no trânsito real de forma calma e segura. Inclui todos os exercícios práticos guiados para controle imediato de ansiedade.
                </p>
              </div>
            </div>

            {/* Bonuses */}
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div className="bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-100 rounded-[2rem] p-8 relative overflow-hidden shadow-md">
                <div className="absolute -right-6 -top-6 bg-rose-500 text-white text-sm font-bold px-12 py-2 rotate-45 shadow-sm uppercase tracking-widest">BÔNUS 1</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Car className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 mb-3 uppercase">Mecânica Básica para Mulheres</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Aprenda de forma super simples a cuidar do seu carro. Saiba checar óleo, água, entender as luzes do painel e não seja mais enganada ou dependa de ninguém para o básico.
                </p>
                <div className="mt-6 text-sm font-bold text-rose-600 line-through opacity-50">Vendido separadamente por R$ 47,00</div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100 rounded-[2rem] p-8 relative overflow-hidden shadow-md">
                <div className="absolute -right-6 -top-6 bg-indigo-500 text-white text-sm font-bold px-12 py-2 rotate-45 shadow-sm uppercase tracking-widest">BÔNUS 2</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 mb-3 uppercase">Checklist de Segurança</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Um guia rápido para você repassar mentalmente antes de dar a partida. Evite erros bobos que causam nervosismo e comece todo trajeto sentindo o controle absoluto da situação.
                </p>
                <div className="mt-6 text-sm font-bold text-indigo-600 line-through opacity-50">Vendido separadamente por R$ 27,00</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. OFERTA */}
      <section id="oferta" className="w-full bg-[#0F172A] py-24 px-5 flex flex-col items-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
          
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
            Quanto vale recuperar <span className="text-emerald-400">sua independência?</span>
          </h2>
          
          <div className="text-slate-300 text-lg md:text-xl mb-12 space-y-4 max-w-3xl font-medium">
            <p>Se você fosse contratar aulas para habilitados, gastaria facilmente <strong className="text-rose-400">R$ 80 a R$ 150 reais por UMA única aula</strong>.</p>
            <p>Você gastaria mais de R$ 800 para fazer um pacote básico que, muitas vezes, <strong className="text-white">não resolve o seu bloqueio emocional.</strong></p>
            <p>Isso sem contar o dinheiro que você gasta toda semana com Uber e táxi pela falta do seu carro.</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-[2.5rem] p-8 md:p-14 w-full max-w-2xl relative shadow-2xl backdrop-blur-md">
            
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold py-2 px-8 rounded-full text-sm md:text-base uppercase tracking-widest shadow-lg whitespace-nowrap">
              Oferta Especial Por Tempo Limitado
            </div>

            <p className="text-slate-400 line-through text-xl md:text-2xl mb-3 font-medium mt-4">Valor Normal: R$ 97,00</p>
            <p className="text-white text-lg md:text-xl mb-6 font-medium">Hoje, com todos os bônus inclusos, por apenas:</p>
            
            <div className="flex justify-center items-start text-emerald-400 mb-8 font-bold drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              <span className="text-3xl mt-4 mr-2">R$</span>
              <span className="font-oswald text-8xl md:text-[8rem] tracking-tighter leading-none">17</span>
              <span className="text-3xl mt-4 ml-1">,00</span>
            </div>

            <p className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-2 px-6 rounded-full font-bold mb-10 text-sm md:text-base uppercase tracking-widest inline-block">
              Pagamento Único • Acesso Imediato
            </p>

            <a 
              href="https://pay.hotmart.com/J104718348Y?checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full block"
            >
              <button className="w-full bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white rounded-2xl py-6 px-4 shadow-[0_15px_40px_rgba(16,185,129,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out"></div>
                <span className="font-oswald text-2xl md:text-3xl uppercase tracking-wider font-bold drop-shadow-md">
                  QUERO DESBLOQUEAR MEU MEDO
                </span>
                <span className="text-sm md:text-base font-medium opacity-90 mt-2">Clique para garantir sua vaga por apenas R$ 17</span>
              </button>
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-emerald-500" /> Compra 100% Segura</div>
              <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-emerald-500" /> Acesso Enviado no E-mail</div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. GARANTIA */}
      <section className="w-full bg-emerald-50 py-20 px-5 flex flex-col items-center border-y border-emerald-100">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-emerald-100">
          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-20 rounded-full"></div>
            <ShieldCheck className="w-32 h-32 md:w-40 md:h-40 text-emerald-500 relative z-10" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Garantia Incondicional de 7 Dias</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6 font-medium">
              Nós confiamos tanto no poder do <strong>Protocolo de Desbloqueio Emocional</strong> que vamos assumir todo o risco. 
              Acesse o material, leia, aplique os primeiros exercícios. Se em até 7 dias você achar que o método não te ajudou, basta nos enviar um único e-mail e <strong>devolveremos 100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>
            <p className="font-bold text-emerald-600 text-xl uppercase tracking-wide">O seu risco é absolutamente ZERO.</p>
          </div>
        </div>
      </section>

      {/* 8. OBJEÇÕES / FAQ */}
      <section className="w-full bg-slate-50 py-24 px-5 flex flex-col items-center">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-slate-900 text-center mb-14 uppercase tracking-tight">
            Ainda tem alguma dúvida?
          </h2>
          
          <div className="w-full flex flex-col gap-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all hover:border-rose-300 shadow-sm hover:shadow-md">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-oswald font-bold text-xl text-slate-800 pr-4 uppercase tracking-wide">{faq.question}</span>
                  <ChevronDown className={`text-rose-500 w-6 h-6 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden bg-slate-50 ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-slate-600 text-lg font-medium leading-relaxed pt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-slate-950 py-12 px-5 text-center text-slate-500 text-sm border-t border-slate-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 opacity-50">
            <Brain className="w-6 h-6 text-white" />
            <span className="font-oswald font-bold text-white text-lg tracking-wider uppercase">Dirigir Sem Medo</span>
          </div>
          <p className="mb-4">
            Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da Meta Platforms, Inc.
          </p>
          <p className="mb-8 text-xs max-w-2xl mx-auto">
            Os resultados podem variar de pessoa para pessoa. O método foca no desbloqueio emocional e preparação prática, mas a prática constante é essencial para a manutenção da habilidade de dirigir com segurança.
          </p>
          <p className="font-medium text-slate-400">Copyright © {new Date().getFullYear()} - Método Dirigir Sem Medo. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
