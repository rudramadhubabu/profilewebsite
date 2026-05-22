import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { ArrowLeft, Users, MessageCircle, Trophy, Target, TrendingUp, Smartphone, Heart, Zap, CheckCircle, Network, GitBranch, Monitor, Palette as PaletteIcon, TestTube2, Sparkles, UserCheck, Play, Share2, BarChart3, ArrowDown, UserPlus, Send, PartyPopper, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router';
import stadiumEntryWireframe from 'figma:asset/fa7981741c470f8f6ecc48e03c6a593f2e4e705b.png';
import screen2ImmersiveView from 'figma:asset/cf0f1c9aefdcda35e4f8c9d081849a2119054c30.png';
import screen3LiveChat from 'figma:asset/97e1d2733bdfcf4640fd8e30e4e19322d1e6edc4.png';
import screen4ChatPanel from 'figma:asset/ef53abf4a19aa70a423bfa79dce57e3b38bcc459.png';
import screen5Reactions from 'figma:asset/8db9d7d216e7fa08788964966c888cae1245eb90.png';
import screen6GoalCelebration from 'figma:asset/f307f7e0f2565ba93bfdaa2122e3f22dfea0d6f8.png';
import screen7VolumeControl from 'figma:asset/705ca0a918d75975f7885090e406e5e87f2c54c6.png';
import inviteFriendsStep1 from 'figma:asset/c4a0e75e0f465177d3a7c5f2148557ccb94cee55.png';
import inviteFriendsStep2 from 'figma:asset/05ed02a540d60ecc3b149e6e49daa18baa12b281.png';
import inviteFriendsStep3 from 'figma:asset/ac743c8f562f3dbd2a92419fb502e888a7ef1256.png';
import matchPredictionStep1 from 'figma:asset/32ca76cb44c92206957b4ee53c940e7733c50933.png';
import matchPredictionStep2 from 'figma:asset/81f2604be226a34a56631e3f322b2a20de782730.png';
import matchPredictionStep3 from 'figma:asset/53caf1a6824adccf79abdeb4627693c8b6b4337d.png';
import screen8FriendManagement from 'figma:asset/2f751a940530b32f8b3bb563cfd2a26cf9793ecc.png';

export default function SportsStadiumExperience() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => {
          navigate('/');
          setTimeout(() => {
            const workSection = document.getElementById('work');
            if (workSection) {
              workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/95 backdrop-blur-xl border-2 border-black/20 hover:border-black/40 rounded-full transition-all shadow-lg hover:shadow-xl"
      >
        <ArrowLeft className="w-4 h-4 text-black" />
        <span className="text-xs md:text-sm font-medium text-black hidden sm:inline">Back to Portfolio</span>
        <span className="text-xs md:text-sm font-medium text-black sm:hidden">Back</span>
      </motion.button>

      {/* SECTION 1 — HERO BANNER */}
      <HeroSection opacity={opacity} />

      {/* SECTION 2 — PRODUCT OVERVIEW */}
      <ProductOverview />

      {/* SECTION 3 — PROBLEM STATEMENT */}
      <ProblemStatement />

      {/* SECTION 4 — USER RESEARCH */}
      <UserResearch />

      {/* SECTION 5 — USER PERSONAS */}
      <UserPersonas />

      {/* SECTION 6 — USER JOURNEY */}
      <UserJourney />

      {/* SECTION 7 — PRODUCT OPPORTUNITY */}
      <ProductOpportunity />

      {/* SECTION 8 — INFORMATION ARCHITECTURE */}
      <InformationArchitecture />

      {/* SECTION 9 — USER FLOWS */}
      <UserFlows />

      {/* SECTION 12 — INTERACTION DESIGN */}
      <InteractionDesign />

      {/* SECTION 13 — FINAL PRODUCT EXPERIENCE */}
      <FinalProductExperience />
    </div>
  );
}

/* ==================== SECTION 1: HERO BANNER ==================== */
function HeroSection({ opacity }: { opacity: any }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763718627682-4dbc728064d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwY3Jvd2QlMjBmYW5zJTIwcGhvbmVzJTIwd2F0Y2hpbmclMjBtYXRjaHxlbnwxfHx8fDE3NzMyMDQ0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Stadium crowd with phones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 
            className="mb-6" 
            style={{ fontSize: '5rem', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Stadium Experience
          </h1>
          
          <p 
            className="text-2xl mb-12 text-white/90" 
            style={{ lineHeight: 1.5 }}
          >
            Bringing the excitement of stadium watching to fans everywhere.
          </p>

          {/* Feature Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, text: 'Watch live matches with friends' },
              { icon: Heart, text: 'Real-time fan reactions' },
              { icon: Zap, text: 'Interactive cheering' },
              { icon: Trophy, text: 'Match predictions' },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-8 h-8" />
                <p className="text-sm text-center">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== SECTION 2: PRODUCT OVERVIEW ==================== */
function ProductOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - 50% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-8" 
              style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Product Overview
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80" style={{ lineHeight: 1.8 }}>
              <p>
                Millions of fans watch sports games alone through streaming platforms.
              </p>
              
              <p>
                While convenient, it removes the social energy of watching a game in a 
                stadium with friends.
              </p>
              
              <p className="text-xl" style={{ fontWeight: 600 }}>
                The Stadium Experience feature recreates the social environment of live 
                sports watching inside a mobile app.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Platform', value: 'iOS Mobile App' },
                { label: 'Role', value: 'Lead Product Designer' },
                { label: 'Timeline', value: '12 Weeks' },
                { label: 'Team Size', value: '5 Members' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-surface"
                >
                  <div className="text-sm text-foreground/60 mb-1">{item.label}</div>
                  <div className="text-lg" style={{ fontWeight: 600 }}>{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content - 50% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={screen6GoalCelebration}
                alt="Goal celebration screen showing social reactions"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================== SECTION 3: PROBLEM STATEMENT ==================== */
function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: Users,
      title: 'Lack of social interaction',
      description: 'Fans watch games in isolation without the communal atmosphere',
    },
    {
      icon: Heart,
      title: 'No shared excitement with friends',
      description: 'Missing the collective energy and reactions of watching together',
    },
    {
      icon: MessageCircle,
      title: 'Limited engagement during matches',
      description: 'Passive viewing experience with minimal interactive elements',
    },
    {
      icon: Trophy,
      title: 'No easy way to celebrate key moments together',
      description: 'Difficult to share spontaneous celebrations and reactions in real-time',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Problem Statement
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Fans watching sports remotely often experience significant challenges that 
            diminish the enjoyment of live matches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-background"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>
                {problem.title}
              </h3>
              
              <p className="text-foreground/70" style={{ lineHeight: 1.7 }}>
                {problem.description}
              </p>
            </motion.div>
          ))}</div>
      </div>
    </section>
  );
}

/* ==================== SECTION 4: USER RESEARCH ==================== */
function UserResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const researchMethods = [
    { icon: Users, label: 'Fan interviews', count: '24 participants' },
    { icon: TrendingUp, label: 'Sports streaming behavior analysis', count: '1,200+ users' },
    { icon: MessageCircle, label: 'Social media interactions during games', count: '5,000+ posts' },
  ];

  const insights = [
    {
      quote: "I'm constantly texting my friends during the game. It would be amazing to have everything in one place.",
      author: 'Marcus, 28',
      role: 'Soccer fan',
      avatar: 'https://images.unsplash.com/photo-1761358531297-614e4de53b85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNvY2NlciUyMGZhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzIwODQ1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote: "The best part of watching live is feeling the energy. That's what I miss when streaming at home.",
      author: 'Sarah, 34',
      role: 'Basketball enthusiast',
      avatar: 'https://images.unsplash.com/photo-1604320239424-855007f7d759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJhc2tldGJhbGwlMjBmYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyMDg0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote: "I love making predictions with my buddies. We need a way to track who's the best at calling the game.",
      author: 'Jake, 25',
      role: 'Football fanatic',
      avatar: 'https://images.unsplash.com/photo-1761358531581-06e457ed7744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGZvb3RiYWxsJTIwZmFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMjA4NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            User Research
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            We conducted comprehensive research to understand fan behavior and pain points.
          </p>
        </motion.div>

        {/* Research Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {researchMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-surface"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <method.icon className="w-10 h-10" />
              </div>
              
              <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>
                {method.label}
              </h3>
              
              <p className="text-foreground/60">{method.count}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Insights Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl mb-12 text-center"
          style={{ fontWeight: 600 }}
        >
          Key Insights
        </motion.h3>

        {/* User Quotes */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10"
            >
              <div className="text-4xl mb-6 text-blue-500">"</div>
              
              <p className="text-lg mb-6 text-foreground/80" style={{ lineHeight: 1.7 }}>
                {insight.quote}
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={insight.avatar} 
                  alt={insight.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div style={{ fontWeight: 600 }}>{insight.author}</div>
                  <div className="text-sm text-foreground/60">{insight.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { value: '87%', label: 'Message friends during matches' },
            { value: '92%', label: 'React emotionally to key moments' },
            { value: '73%', label: 'Enjoy making game predictions' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-surface"
            >
              <div 
                className="text-6xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" 
                style={{ fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== SECTION 5: USER PERSONAS ==================== */
function UserPersonas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const personas = [
    {
      name: 'Alex Martinez',
      age: 26,
      role: 'Casual Fan',
      image: 'https://images.unsplash.com/photo-1718775911692-f040de6f8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNhc3VhbCUyMHNwb3J0cyUyMGZhbiUyMGZyaWVuZHN8ZW58MXx8fHwxNzczMjA0NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Enjoys watching games with friends online and values social connection over deep sports knowledge.',
      goals: [
        'Watch matches with friends remotely',
        'Share reactions and celebrations',
        'Easy-to-use interface',
      ],
      frustrations: [
        'Switching between streaming and messaging apps',
        'Missing spontaneous moments with friends',
        'Feeling isolated while watching alone',
      ],
      tech: 'High',
      engagement: 'Social',
    },
    {
      name: 'David Chen',
      age: 32,
      role: 'Hardcore Sports Fan',
      image: 'https://images.unsplash.com/photo-1669035653112-ba45cb566776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhbmFseXN0JTIwd2F0Y2hpbmclMjBzdGF0aXN0aWNzfGVufDF8fHx8MTc3MzIwNDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Loves statistics, analytics, and making predictions. Competitive with friends about sports knowledge.',
      goals: [
        'Make and track predictions',
        'Access real-time statistics',
        'Compete with friends on accuracy',
      ],
      frustrations: [
        'Limited prediction features in apps',
        'No way to track prediction history',
        'Missing competitive elements',
      ],
      tech: 'Expert',
      engagement: 'Analytical',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            User Personas
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Two distinct user types emerged from our research, each with unique needs and behaviors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-background overflow-hidden"
            >
              {/* Persona Header with Image */}
              <div className="relative h-64">
                <ImageWithFallback
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl text-white mb-1" style={{ fontWeight: 700 }}>
                    {persona.name}
                  </h3>
                  <p className="text-white/80">{persona.role}, {persona.age}</p>
                </div>
              </div>

              {/* Persona Details */}
              <div className="p-8">
                <p className="text-lg mb-8 text-foreground/80" style={{ lineHeight: 1.7 }}>
                  {persona.bio}
                </p>

                {/* Quick Stats */}
                <div className="flex gap-6 mb-8 pb-8 border-b border-white/10">
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Tech Savviness</div>
                    <div style={{ fontWeight: 600 }}>{persona.tech}</div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Engagement Style</div>
                    <div style={{ fontWeight: 600 }}>{persona.engagement}</div>
                  </div>
                </div>

                {/* Goals */}
                <div className="mb-8">
                  <h4 className="text-lg mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                    <Target className="w-5 h-5 text-green-500" />
                    Goals
                  </h4>
                  <ul className="space-y-2">
                    {persona.goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-2 text-foreground/70">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frustrations */}
                <div>
                  <h4 className="text-lg mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                    <Zap className="w-5 h-5 text-red-500" />
                    Frustrations
                  </h4>
                  <ul className="space-y-2">
                    {persona.frustrations.map((frustration) => (
                      <li key={frustration} className="flex items-start gap-2 text-foreground/70">
                        <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                        </div>
                        <span>{frustration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== SECTION 6: USER JOURNEY ==================== */
function UserJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const journeySteps = [
    {
      step: '01',
      title: 'User opens live match',
      description: 'Browses available live matches and selects game to watch',
      emotion: 'Excited',
      painPoint: 'Too many streaming platforms to choose from',
    },
    {
      step: '02',
      title: 'Invites friends',
      description: 'Sends invitations to friends to join the stadium experience',
      emotion: 'Anticipating',
      painPoint: 'Friends on different platforms or apps',
    },
    {
      step: '03',
      title: 'Joins stadium experience',
      description: 'Enters the virtual stadium room with invited friends',
      emotion: 'Engaged',
      painPoint: 'Setup complexity reduces spontaneity',
    },
    {
      step: '04',
      title: 'Chats during match',
      description: 'Real-time messaging with friends while watching the game',
      emotion: 'Connected',
      painPoint: 'Switching between apps breaks immersion',
    },
    {
      step: '05',
      title: 'Celebrates goals',
      description: 'Uses interactive reactions and cheering features for key moments',
      emotion: 'Thrilled',
      painPoint: 'Delayed reactions due to stream lag',
    },
    {
      step: '06',
      title: 'Shares predictions',
      description: 'Makes predictions and competes with friends on accuracy',
      emotion: 'Competitive',
      painPoint: 'No tracking of prediction history',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            User Journey
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Mapping the complete experience from discovery to celebration, identifying 
            key pain points along the way.
          </p>
        </motion.div>

        {/* Journey Visualization */}
        <div className="relative">
          {/* Journey Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Step Number Circle */}
                <div 
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white z-10 ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                  style={{ fontWeight: 700 }}
                >
                  {item.step}
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-24 md:ml-0 p-8 rounded-3xl bg-surface ${
                    index % 2 === 0 ? 'md:col-start-1 md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6" style={{ lineHeight: 1.7 }}>
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4" style={index % 2 === 0 ? { justifyContent: 'flex-end' } : {}}>
                    <Heart className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-500" style={{ fontWeight: 600 }}>
                      Emotion: {item.emotion}
                    </span>
                  </div>

                  <div 
                    className={`p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                    }`}
                  >
                    <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-red-500 mb-1" style={{ fontWeight: 600 }}>
                        Pain Point
                      </div>
                      <div className="text-sm text-foreground/70">{item.painPoint}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== SECTION 7: PRODUCT OPPORTUNITY ==================== */
function ProductOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Users,
      title: 'Shared Stadium Rooms',
      description: 'Create or join virtual stadium rooms where friends watch matches together in real-time synchronization.',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat & Reactions',
      description: 'Instant messaging with quick emoji reactions and animated cheers for key moments.',
    },
    {
      icon: Trophy,
      title: 'Prediction Games',
      description: 'Make predictions on match outcomes, scores, and player performances. Track accuracy and compete on leaderboards.',
    },
    {
      icon: Zap,
      title: 'Interactive Celebrations',
      description: 'Trigger synchronized celebrations and animations when your team scores or wins.',
    },
    {
      icon: Smartphone,
      title: 'Seamless Integration',
      description: 'All features integrated into the streaming experience without switching apps.',
    },
    {
      icon: TrendingUp,
      title: 'Social Engagement',
      description: 'Share highlights, invite new friends, and build your sports community.',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Product Opportunity
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8" style={{ lineHeight: 1.6 }}>
            The Stadium Experience feature transforms passive viewing into a social 
            sports environment.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
            <Smartphone className="w-5 h-5" />
            <span className="text-lg" style={{ fontWeight: 600 }}>
              Fans enter a shared stadium room where they watch the match together in real time
            </span>
          </div>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-3xl bg-background"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl mb-4" style={{ fontWeight: 600 }}>
                {feature.title}
              </h3>
              
              <p className="text-foreground/70" style={{ lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
        >
          <h3 className="text-3xl mb-6 text-center" style={{ fontWeight: 700 }}>
            Transforming Sports Viewing
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { 
                metric: '3x',
                label: 'Increased Engagement',
                description: 'Users spend more time in the app',
              },
              {
                metric: '85%',
                label: 'Social Satisfaction',
                description: 'Feel more connected to friends',
              },
              {
                metric: '92%',
                label: 'Feature Adoption',
                description: 'Regular use of stadium rooms',
              },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div 
                  className="text-5xl mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  style={{ fontWeight: 700 }}
                >
                  {stat.metric}
                </div>
                <div className="text-lg mb-2" style={{ fontWeight: 600 }}>
                  {stat.label}
                </div>
                <div className="text-sm text-foreground/60">
                  {stat.description}
                </div>
              </div>
            ))}</div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== SECTION 8: INFORMATION ARCHITECTURE ==================== */
function InformationArchitecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iaFeatures = [
    { icon: Play, label: 'Watch match' },
    { icon: MessageCircle, label: 'Chat with friends' },
    { icon: Heart, label: 'Send reactions' },
    { icon: UserPlus, label: 'Invite new friends' },
    { icon: Trophy, label: 'Make predictions' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Information Architecture
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Structuring the feature to ensure seamless navigation and intuitive user flow.
          </p>
        </motion.div>

        {/* Text Content - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* IA Flow */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>Live Match Screen</h3>
              <p className="text-foreground/70" style={{ lineHeight: 1.7 }}>
                User entry point with list of available live matches
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-blue-500" />
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>Enter Stadium Experience</h3>
              <p className="text-foreground/70" style={{ lineHeight: 1.7 }}>
                Transition to immersive social viewing mode
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-purple-500" />
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-blue-500/10 border border-pink-500/20">
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>Stadium Room</h3>
              <p className="text-foreground/70 mb-6" style={{ lineHeight: 1.7 }}>
                Main social viewing experience with integrated features
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {iaFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-background/50"
                  >
                    <feature.icon className="w-4 h-4" />
                    <span className="text-sm">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== SECTION 9: USER FLOWS ==================== */
function UserFlows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const flows = [
    {
      title: 'Flow 1: Enter Stadium Experience',
      steps: [
        { icon: Play, label: 'User enters live match', description: 'Selects from available matches' },
        { icon: Monitor, label: 'User taps "Enter Stadium"', description: 'Initiates social viewing mode' },
        { icon: Users, label: 'User joins shared viewing room', description: 'Connects with friends in real-time' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Flow 2: Invite Friends',
      steps: [
        { icon: Users, label: 'User opens friend list', description: 'Browses available contacts' },
        { icon: Send, label: 'User selects friends to invite', description: 'Sends stadium room invitations' },
        { icon: UserCheck, label: 'Friends join stadium', description: 'Real-time notification and entry' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Flow 3: Send Reactions',
      steps: [
        { icon: Heart, label: 'User watches key moment', description: 'Goal, foul, or exciting play' },
        { icon: Sparkles, label: 'User selects reaction/cheer', description: 'Chooses from emoji or animations' },
        { icon: PartyPopper, label: 'Reaction broadcasts to room', description: 'All friends see synchronized celebration' },
      ],
      color: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            User Flows
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Detailed flows showing how users interact with key features of the Stadium Experience.
          </p>
        </motion.div>

        <div className="space-y-16">
          {flows.map((flow, flowIndex) => (
            <motion.div
              key={flow.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: flowIndex * 0.2 }}
              className="p-8 rounded-3xl bg-background"
            >
              <h3 className="text-2xl mb-8" style={{ fontWeight: 600 }}>{flow.title}</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {flow.steps.map((step, index) => (
                  <div key={step.label} className="relative">
                    {index < flow.steps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-full w-6 -ml-3 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: flowIndex * 0.2 + index * 0.1 }}
                      className="relative p-6 rounded-2xl bg-surface"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${flow.color} flex items-center justify-center`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                        {step.label}
                      </h4>

                      <p className="text-sm text-foreground/70" style={{ lineHeight: 1.6 }}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== SECTION 12: INTERACTION DESIGN ==================== */
function InteractionDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const interactions = [
    {
      icon: Sparkles,
      title: 'Cheer animations',
      description: 'Animated reactions that fill the screen when fans cheer together, creating a shared celebration moment.',
      trigger: 'Tap cheer button during exciting plays',
    },
    {
      icon: PartyPopper,
      title: 'Goal celebration animations',
      description: 'Synchronized confetti and fireworks effects that all users in the stadium room see simultaneously when a goal is scored.',
      trigger: 'Automatic trigger on goal scored',
    },
    {
      icon: Heart,
      title: 'Emoji reactions',
      description: 'Quick emoji reactions that float up the screen, visible to all friends in real-time.',
      trigger: 'Tap reaction picker, select emoji',
    },
    {
      icon: BarChart,
      title: 'Prediction voting interactions',
      description: 'Interactive sliders and buttons for making predictions, with live updating percentages showing friend predictions.',
      trigger: 'Swipe up prediction panel',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Interaction Design
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Defining micro-interactions that bring the Stadium Experience to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {interactions.map((interaction, index) => (
            <motion.div
              key={interaction.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-3xl bg-surface"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <interaction.icon className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>
                {interaction.title}
              </h3>
              
              <p className="text-foreground/70 mb-6" style={{ lineHeight: 1.7 }}>
                {interaction.description}
              </p>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 text-sm">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-foreground/60">{interaction.trigger}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== SECTION 13: FINAL PRODUCT EXPERIENCE ==================== */
function FinalProductExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-gradient-to-b from-background via-surface/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6" 
            style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Final Product Experience
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            A cinematic sports viewing experience that brings fans together inside a digital stadium.
          </p>
        </motion.div>

        <DesignSystemOverview isInView={isInView} />
        <Screen1EntryExperience isInView={isInView} />
        <Screen2ImmersiveStadiumView isInView={isInView} />
        <Screen3LiveFanChat isInView={isInView} />
        <Screen4ChatPanel isInView={isInView} />
        <Screen5FanReactions isInView={isInView} />
        <Screen6GoalCelebration isInView={isInView} />
        <Screen7StadiumEnergy isInView={isInView} />
        <Screen8FriendManagement isInView={isInView} />
        <InviteFriendsFlow isInView={isInView} />
        <MatchPredictionFlow isInView={isInView} />
        <ProductImpact isInView={isInView} />
        <CaseStudyConclusion isInView={isInView} />
      </div>
    </section>
  );
}

function DesignSystemOverview({ isInView }: { isInView: boolean }) {
  const designElements = [
    {
      icon: Monitor,
      title: 'Dark Stadium Backgrounds',
      description: 'Cinematic video backgrounds that immerse fans in the stadium environment',
      color: 'from-slate-600 to-slate-800',
    },
    {
      icon: Sparkles,
      title: 'Glass Translucent Overlays',
      description: 'Frosted glass-style panels that float over the live match video',
      color: 'from-blue-400/30 to-purple-400/30',
    },
    {
      icon: Zap,
      title: 'Orange Gradient Actions',
      description: 'Bold orange gradients for primary CTAs and highlights',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Users,
      title: 'Minimal HUD Elements',
      description: 'Clean, unobtrusive interface elements that enhance the viewing experience',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          Design System Overview
        </h3>
        <p className="text-lg text-foreground/70 max-w-3xl" style={{ lineHeight: 1.7 }}>
          The Stadium Experience interface follows a cinematic sports viewing design language. 
          The UI is designed to immerse fans inside a digital stadium environment.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {designElements.map((element, index) => (
          <motion.div
            key={element.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="p-8 rounded-3xl bg-surface border border-foreground/10 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${element.color} opacity-10 rounded-full blur-3xl`} />
            
            <div className="relative">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${element.color} flex items-center justify-center mb-6`}>
                <element.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl mb-3" style={{ fontWeight: 600 }}>
                {element.title}
              </h4>
              
              <p className="text-foreground/70" style={{ lineHeight: 1.7 }}>
                {element.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Screen1EntryExperience({ isInView }: { isInView: boolean }) {
  const features = [
    { icon: MessageCircle, label: 'Live Fan Chat' },
    { icon: Heart, label: 'Reactions' },
    { icon: Trophy, label: 'Coin Predictions' },
    { icon: Users, label: 'Watch With Friends' },
  ];

  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-sm text-orange-500" style={{ fontWeight: 600 }}>SCREEN 1</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Stadium Entry Experience
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            The entry screen introduces the stadium experience. Users can see the teams playing, 
            live match score, match timer, and fan activity indicators showing friends currently 
            inside the stadium.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
              <p className="text-foreground/80">Teams playing with live match score</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
              <p className="text-foreground/80">Match timer and fan activity indicator</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
              <p className="text-foreground/80">Friends currently inside the stadium</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-surface/50"
              >
                <feature.icon className="w-5 h-5 text-orange-500" />
                <span className="text-sm" style={{ fontWeight: 500 }}>{feature.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white" style={{ fontWeight: 600 }}>
              Enter Stadium
            </div>
            <div className="px-6 py-3 rounded-full border border-foreground/20" style={{ fontWeight: 600 }}>
              Invite Friends
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl blur-3xl" />
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={stadiumEntryWireframe}
              alt="Stadium entry screen wireframe"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen2ImmersiveStadiumView({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-500" style={{ fontWeight: 600 }}>SCREEN 2</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Immersive Stadium View
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            Once inside the stadium, users experience a cinematic live match view with friends visible 
            in the sidebar. The interface maintains constant awareness of who's watching together, 
            creating a shared viewing atmosphere.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
              <p className="text-foreground/80">Live match feed with real-time score updates</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
              <p className="text-foreground/80">Friends sidebar showing active viewers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
              <p className="text-foreground/80">25.6K fans watching indicator</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen2ImmersiveView}
              alt="Immersive stadium view screen"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen3LiveFanChat({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:order-1"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen3LiveChat}
              alt="Live fan chat with reactions"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:order-0"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="text-sm text-green-500" style={{ fontWeight: 600 }}>SCREEN 3</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Live Fan Chat & Reactions
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            Fans can express themselves instantly through live chat messages and emoji reactions. 
            The chat overlay appears seamlessly over the match, with quick reaction buttons for 
            spontaneous celebrations during exciting moments.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              <p className="text-foreground/80">Real-time chat messages from fans</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              <p className="text-foreground/80">Quick emoji reaction buttons</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              <p className="text-foreground/80">Non-intrusive overlay design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen4ChatPanel({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-500" style={{ fontWeight: 600 }}>SCREEN 4</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Stadium Chat Panel
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            A dedicated chat interface with 25.6K fans actively watching. Quick message buttons 
            enable instant reactions, while the full chat panel provides a complete social experience 
            with easy message input and send functionality.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Quick message templates for fast responses</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Live fan count indicator (25.6K watching)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Message input with send button</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen4ChatPanel}
              alt="Stadium chat panel interface"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen5FanReactions({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:order-1"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen5Reactions}
              alt="Fan reaction animations on field"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:order-0"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-sm text-orange-500" style={{ fontWeight: 600 }}>SCREEN 5</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Fan Reaction Animations
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            Reactions come to life with animated emojis appearing directly on the stadium field. 
            When fans send fire emojis or celebrations, they appear as floating animations, 
            creating a collective energy visualization during exciting match moments.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              <p className="text-foreground/80">Animated emoji reactions on field</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              <p className="text-foreground/80">Collective fan energy visualization</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              <p className="text-foreground/80">Non-disruptive celebration effects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen6GoalCelebration({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <span className="text-sm text-yellow-500" style={{ fontWeight: 600 }}>SCREEN 6</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Goal Celebration Overlay
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            When goals are scored, a massive "GOOAL!" celebration overlay appears with dynamic 
            animations and soccer ball graphics. This cinematic moment amplifies the excitement 
            and creates a shared celebration experience for all fans watching together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
              <p className="text-foreground/80">Large-scale celebration typography</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
              <p className="text-foreground/80">Animated soccer ball graphics</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
              <p className="text-foreground/80">Simultaneous emoji reactions from fans</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen6GoalCelebration}
              alt="Goal celebration overlay"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen7StadiumEnergy({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:order-1"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen7VolumeControl}
              alt="Game volume control interface"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:order-0"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-sm text-cyan-500" style={{ fontWeight: 600 }}>SCREEN 7</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Game Volume Control
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            An intuitive volume control slider allows fans to adjust game audio levels in real-time. 
            Currently set to 76%, users can customize their audio experience while maintaining access 
            to all interactive features and social elements through the bottom action bar.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <p className="text-foreground/80">Real-time volume percentage indicator (76%)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <p className="text-foreground/80">Smooth volume slider with orange accent</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <p className="text-foreground/80">Persistent access to match interactions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen8FriendManagement({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-500" style={{ fontWeight: 600 }}>SCREEN 8</span>
          </div>
          
          <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Friend Management Controls
          </h3>
          
          <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
            As the host of the Watch Together session, you have full control over the experience. 
            Tap any friend's avatar to access management options including muting their audio or 
            removing them from the session. This ensures a quality viewing experience with 25.6K 
            concurrent viewers during the live match (BAR 2-1 RMA).
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Host privileges for session management</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Mute individual friend audio with one tap</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Kick option to remove disruptive viewers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <p className="text-foreground/80">Context menu with clear action labels</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={screen8FriendManagement}
              alt="Friend management context menu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function InviteFriendsFlow({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6">
          <span className="text-sm bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent" style={{ fontWeight: 600 }}>
            INVITE FRIENDS FLOW
          </span>
        </div>
        
        <h3 className="text-5xl mb-6" style={{ fontWeight: 700 }}>
          Watch Together Experience
        </h3>
        
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
          A seamless flow enabling users to invite friends and create private rooms for shared 
          match viewing. The experience prioritizes ease of sharing while maintaining social presence.
        </p>
      </motion.div>

      {/* Step 1: Select Friends */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="text-sm text-indigo-500" style={{ fontWeight: 600 }}>STEP 1</span>
            </div>
            
            <h4 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              Select Friends to Invite
            </h4>
            
            <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
              The "Watch With Friends" modal displays a private room code (FNB-4821) with 5 viewers 
              currently watching. Users can select friends from their list, with real-time online 
              status indicators. Selected friends show an "Invited" status confirmation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <p className="text-foreground/80">Private room code display (FNB-4821)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <p className="text-foreground/80">Real-time friend online/offline status</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <p className="text-foreground/80">Visual confirmation of invited friends</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <p className="text-foreground/80">Currently watching indicator (5 viewers)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={inviteFriendsStep1}
                alt="Select friends to invite modal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Step 2: Share Room Options */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:order-1"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={inviteFriendsStep2}
                alt="Share room options modal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:order-0"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm text-purple-500" style={{ fontWeight: 600 }}>STEP 2</span>
            </div>
            
            <h4 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              Multiple Share Options
            </h4>
            
            <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
              Users have flexible sharing options: invite directly from their friends list, share an 
              invite link, or copy the room code for manual sharing. This multi-channel approach 
              ensures maximum accessibility for inviting friends to watch together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <p className="text-foreground/80">"Invite From Friends List" quick action</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <p className="text-foreground/80">Share invite link for external sharing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <p className="text-foreground/80">Copy room code functionality</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <p className="text-foreground/80">Persistent room active status button</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Step 3: Friend Selection View */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-sm text-pink-500" style={{ fontWeight: 600 }}>STEP 3</span>
            </div>
            
            <h4 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              Active Friend Selection
            </h4>
            
            <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
              Friends can be selected with a single tap using star icons. The interface shows 
              real-time online status with green indicators, allowing users to prioritize inviting 
              friends who are currently active and available to join the match.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
                <p className="text-foreground/80">Star icon for quick friend selection</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
                <p className="text-foreground/80">Green online status for active friends</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
                <p className="text-foreground/80">Scrollable friends list interface</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
                <p className="text-foreground/80">Back navigation to sharing options</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={inviteFriendsStep3}
                alt="Friend selection interface"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MatchPredictionFlow({ isInView }: { isInView: boolean }) {
  return (
    <div className="mb-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-6">
          <span className="text-sm bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent" style={{ fontWeight: 600 }}>
            MATCH PREDICTION FLOW
          </span>
        </div>
        
        <h3 className="text-5xl mb-6" style={{ fontWeight: 700 }}>
          Interactive Match Predictions
        </h3>
        
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
          A gamified prediction system that keeps fans engaged throughout the match. Users earn 
          points by correctly predicting goals, events, and match outcomes in real-time.
        </p>
      </motion.div>

      {/* Step 1: Prediction Options */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-sm text-orange-500" style={{ fontWeight: 600 }}>STEP 1</span>
            </div>
            
            <h4 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              View Prediction Options
            </h4>
            
            <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
              The Match Predictions modal displays current score (BAR 2-1 RMA • 67') with the user's 
              total points (320). Fans can predict the next goal scorer (BAR or RMA, +50 points each) 
              or upcoming events like Corner, Free Kick, or Yellow card (+25 points each).
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <p className="text-foreground/80">Current match score and time display</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <p className="text-foreground/80">Total accumulated points (320 coins)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <p className="text-foreground/80">Next goal prediction (+50 points)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <p className="text-foreground/80">Event predictions: Corner, Free Kick, Yellow (+25)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={matchPredictionStep1}
                alt="Match predictions modal with options"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Step 2: Select Team and Bet Amount */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:order-1"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={matchPredictionStep2}
                alt="Team selection and bet amount interface"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:order-0"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-sm text-amber-500" style={{ fontWeight: 600 }}>STEP 2</span>
            </div>
            
            <h4 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              Choose Team & Bet Amount
            </h4>
            
            <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
              After selecting BAR for the next goal, the interface highlights the choice with an orange 
              accent. Users select their bet amount from preset options (10, 25, 50, 100 coins), with 
              25 coins actively selected, ready to place their prediction.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
                <p className="text-foreground/80">Selected team visual confirmation (Barcelona)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
                <p className="text-foreground/80">Preset bet amount options (10, 25, 50, 100)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
                <p className="text-foreground/80">Active selection highlight (25 coins)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
                <p className="text-foreground/80">Prominent "Place Prediction" CTA button</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Step 3: Prediction Confirmation */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-sm text-green-500" style={{ fontWeight: 600 }}>STEP 3</span>
            </div>
            
            <h4 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              Prediction Confirmed
            </h4>
            
            <p className="text-lg text-foreground/70 mb-8" style={{ lineHeight: 1.7 }}>
              Upon placing the prediction, a green success state appears with "Prediction Placed!" 
              confirmation. The screen shows an overlay message "You Predicted: Barcelona (25 coins)" 
              and updates the total points to 295, providing instant feedback and maintaining engagement.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                <p className="text-foreground/80">Green success confirmation button</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                <p className="text-foreground/80">Prediction summary overlay on screen</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                <p className="text-foreground/80">Updated points display (295 → 270 after bet)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                <p className="text-foreground/80">Clear bet details (Barcelona, 25 coins)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={matchPredictionStep3}
                alt="Prediction confirmation with success state"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProductImpact({ isInView }: { isInView: boolean }) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Viewer Engagement',
      description: 'Interactive features keep fans engaged throughout the entire match duration',
      metric: '+85%',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Stronger Social Interaction',
      description: 'Real-time chat and reactions create meaningful connections between fans',
      metric: '12K',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Immersive Experience',
      description: 'Cinema-quality viewing with minimal distractions enhances match enjoyment',
      metric: '94%',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Gamified Participation',
      description: 'Predictions and coins add competitive fun and increase session time',
      metric: '+67%',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <div className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
          Product Impact
        </h3>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ lineHeight: 1.7 }}>
          The Stadium Experience feature transforms traditional sports streaming into a 
          shared digital stadium with measurable benefits.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="p-8 rounded-3xl bg-surface border border-foreground/10 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${benefit.color} opacity-5 rounded-full blur-3xl`} />
            
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`} style={{ fontWeight: 800 }}>
                  {benefit.metric}
                </div>
              </div>
              
              <h4 className="text-2xl mb-3" style={{ fontWeight: 700 }}>
                {benefit.title}
              </h4>
              
              <p className="text-lg text-foreground/70" style={{ lineHeight: 1.7 }}>
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CaseStudyConclusion({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
      
      <div className="relative p-16 rounded-3xl bg-gradient-to-br from-surface/80 to-background/80 backdrop-blur-xl border border-foreground/10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring' }}
          className="inline-block w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-8 mx-auto"
        >
          <Sparkles className="w-12 h-12 text-white" />
        </motion.div>

        <h3 className="text-5xl mb-6" style={{ fontWeight: 800 }}>
          Transforming Sports Viewing
        </h3>
        
        <p className="text-2xl text-foreground/70 max-w-4xl mx-auto mb-8" style={{ lineHeight: 1.7 }}>
          The Stadium Experience creates a new category of interactive sports viewing.
        </p>

        <p className="text-xl text-foreground/60 max-w-3xl mx-auto mb-12" style={{ lineHeight: 1.8 }}>
          By combining live streaming, social interaction, fan reactions, and prediction gameplay, 
          the product recreates the emotional excitement of watching a match inside a stadium—anywhere 
          in the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white" style={{ fontWeight: 600 }}>
            Live Streaming
          </div>
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white" style={{ fontWeight: 600 }}>
            Social Interaction
          </div>
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white" style={{ fontWeight: 600 }}>
            Fan Reactions
          </div>
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white" style={{ fontWeight: 600 }}>
            Prediction Gameplay
          </div>
        </div>
      </div>
    </motion.div>
  );
}
