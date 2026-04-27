import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  Users, 
  Layout, 
  Maximize, 
  Layers, 
  Sparkles,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Projetos', href: '#projetos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-dark flex items-center justify-center rounded-sm">
            <span className="text-brand-gold font-display font-bold text-xl">D</span>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            DRYWALL<span className="text-brand-gold">PRO</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-brand-gold transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-brand-gold text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-brand-gold/90 transition-all premium-shadow"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl">DRYWALL<span className="text-brand-gold">PRO</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-brand-dark border-b border-gray-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contato" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-dark text-white text-center py-4 rounded-sm font-bold mt-4"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2000" 
          alt="Drywall Construction" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="text-brand-gold w-4 h-4" />
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Execução de Alto Padrão</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Drywall com acabamento <span className="text-brand-gold">premium</span> para seu projeto
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
            Projetos residenciais, comerciais e corporativos com instalação técnica, acabamento impecável e compromisso total com prazo e qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-brand-gold text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all premium-shadow"
            >
              Solicitar Orçamento <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">15+</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">Anos de Experiência</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">500+</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">Obras Entregues</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">100%</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">Satisfação</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const items = [
    { icon: Users, text: "Equipe Especializada" },
    { icon: Clock, text: "Compromisso com Prazo" },
    { icon: Award, text: "Acabamento Impecável" },
    { icon: ShieldCheck, text: "Segurança na Execução" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                <item.icon className="text-brand-dark group-hover:text-white w-6 h-6" />
              </div>
              <span className="font-display font-semibold text-brand-dark text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden premium-shadow">
              <img 
               src="/projetos/execucao-drywall-premium.png" 
                alt="Professional Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 rounded-sm hidden md:block premium-shadow">
              <p className="text-white font-display font-bold text-4xl mb-1">15</p>
              <p className="text-white/80 text-xs uppercase font-bold tracking-widest">Anos de Excelência</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-8 leading-tight">
              Especialistas em transformar ambientes com precisão técnica
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos especialistas em instalação de sistema drywall, oferecendo soluções inteligentes, modernas e eficientes para ambientes residenciais, comerciais e corporativos.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Unimos técnica, planejamento e acabamento de alto padrão para entregar obras com mais agilidade, limpeza e precisão. Nosso foco é entregar soluções completas que superem as expectativas de arquitetos e proprietários.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                "Atendimento Consultivo",
                "Planejamento Detalhado",
                "Equipe Própria e Treinada",
                "Limpeza e Organização",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold w-5 h-5" />
                  <span className="font-semibold text-brand-dark">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contato" className="inline-flex items-center gap-2 text-brand-dark font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all">
              Saiba mais sobre nossa metodologia <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Paredes em Drywall",
      desc: "Instalação rápida e limpa para divisão de ambientes com precisão milimétrica.",
      icon: Layout
    },
    {
      title: "Forros e Rebaixamentos",
      desc: "Soluções modernas para iluminação embutida e design de teto sofisticado.",
      icon: Maximize
    },
    {
      title: "Divisórias Corporativas",
      desc: "Otimização de espaços de trabalho com isolamento e flexibilidade.",
      icon: Layers
    },
    {
      title: "Sancas e Decorativos",
      desc: "Acabamentos artísticos e detalhes que valorizam a arquitetura do imóvel.",
      icon: Sparkles
    },
    {
      title: "Isolamento Acústico",
      desc: "Tratamento técnico para garantir silêncio e privacidade em qualquer ambiente.",
      icon: ShieldCheck
    },
    {
      title: "Reformas Rápidas",
      desc: "Adequação de layouts sem a sujeira e demora da alvenaria tradicional.",
      icon: Clock
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Nossos Serviços</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Soluções completas em Drywall</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Oferecemos o que há de mais moderno em sistemas construtivos a seco para todos os tipos de obra.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-10 rounded-sm premium-shadow group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-brand-gray rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-dark transition-colors">
              <service.icon className="text-brand-gold w-7 h-7" />
            </div>
            <h3 className="text-xl font-display font-bold text-brand-dark mb-4">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
            <a href="#contato" className="text-brand-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver detalhes <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: "Obra Limpa", desc: "Redução drástica de entulho e poeira em comparação à alvenaria." },
    { title: "Rapidez", desc: "Execução até 3x mais rápida, acelerando a entrega do seu projeto." },
    { title: "Acabamento", desc: "Superfícies perfeitamente lisas prontas para pintura ou papel de parede." },
    { title: "Versatilidade", desc: "Permite curvas, nichos e detalhes arquitetônicos complexos." },
    { title: "Acústica", desc: "Excelente desempenho térmico e acústico com preenchimentos técnicos." },
    { title: "Economia", desc: "Menor carga estrutural e desperdício zero de materiais." },
  ];

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Vantagens</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Por que escolher o Sistema Drywall?</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              A tecnologia Drywall revolucionou a construção civil, trazendo eficiência, sustentabilidade e um nível de acabamento impossível de atingir com métodos tradicionais.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <h4 className="font-display font-bold text-lg">{b.title}</h4>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed pl-5">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden opacity-80">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-brand-gold/30 scale-110 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "Residência Alphaville", category: "Residencial", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
    { title: "Escritório Tech Hub", category: "Corporativo", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Loja Conceito Jardins", category: "Comercial", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Apartamento Loft", category: "Residencial", img: "/projetos/apartamento-loft.png" },
    { title: "Clínica Odontológica", category: "Comercial", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
    { title: "Auditório Corporativo", category: "Corporativo", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark">Projetos que inspiram confiança</h2>
        </div>
        <a href="#contato" className="bg-brand-dark text-white px-8 py-4 rounded-sm font-bold hover:bg-brand-dark/90 transition-all">
          Ver Todos Projetos
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
          >
            <img 
              src={p.img} 
              alt={p.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{p.category}</span>
              <h3 className="text-white font-display font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ricardo Mendes",
      role: "Arquiteto",
      text: "A equipe da Drywall Pro é minha parceira em todos os projetos de alto padrão. O acabamento é impecável e o compromisso com o cronograma é o diferencial."
    },
    {
      name: "Ana Paula Silva",
      role: "Proprietária Residencial",
      text: "Fiquei impressionada com a limpeza da obra. Transformaram minha sala em 3 dias com uma sanca maravilhosa e iluminação embutida. Recomendo muito!"
    },
    {
      name: "Marcos Oliveira",
      role: "Gerente de Facilities",
      text: "Contratamos para a reforma do nosso escritório corporativo. Execução técnica perfeita e postura extremamente profissional de todos os instaladores."
    }
  ];

  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Depoimentos</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark">O que nossos clientes dizem</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-sm premium-shadow relative"
          >
            <div className="text-brand-gold text-6xl font-serif absolute top-6 left-6 opacity-20">“</div>
            <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
              {r.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center font-bold text-brand-dark">
                {r.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">{r.name}</h4>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-dark rounded-sm overflow-hidden flex flex-col lg:flex-row premium-shadow">
          <div className="lg:w-1/2 p-12 md:p-20">
            <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Contato</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Vamos iniciar seu projeto?</h2>
            <p className="text-white/60 text-lg mb-12">
              Solicite um orçamento personalizado ou tire suas dúvidas com nossos especialistas técnicos.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Phone className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">Telefone / WhatsApp</p>
                  <p className="text-white font-bold text-lg">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Mail className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">E-mail</p>
                  <p className="text-white font-bold text-lg">contato@drywallpro.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <MapPin className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">Localização</p>
                  <p className="text-white font-bold text-lg">São Paulo - SP | Atendimento em todo Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 md:p-20">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nome Completo</label>
                  <input type="text" className="bg-brand-gray border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none" placeholder="Seu nome" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">E-mail</label>
                  <input type="email" className="bg-brand-gray border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">WhatsApp</label>
                  <input type="text" className="bg-brand-gray border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none" placeholder="(00) 00000-0000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Tipo de Obra</label>
                  <select className="bg-brand-gray border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none appearance-none">
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Corporativa</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensagem / Detalhes do Projeto</label>
                <textarea rows={4} className="bg-brand-gray border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none resize-none" placeholder="Conte-nos um pouco sobre sua necessidade..."></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white py-5 rounded-sm font-bold text-lg hover:bg-brand-gold transition-all premium-shadow">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-sm">
                <span className="text-brand-dark font-display font-bold text-xl">D</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">DRYWALL<span className="text-brand-gold">PRO</span></span>
            </div>
            <p className="text-white/40 leading-relaxed">
              Especialistas em soluções inteligentes de construção a seco. Qualidade, agilidade e acabamento premium para transformar seu ambiente.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-brand-gold transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-brand-gold transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Nossos Serviços</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Paredes Drywall</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Forros e Sancas</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Isolamento Acústico</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Divisórias Corporativas</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Reformas Rápidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Atendimento</h4>
            <ul className="space-y-4 text-white/40">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>contato@drywallpro.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <p>© 2026 Drywall Pro Premium. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5511999999999" 
      target="_blank"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-4 py-2 rounded-sm text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Especialista
      </span>
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Benefits />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
