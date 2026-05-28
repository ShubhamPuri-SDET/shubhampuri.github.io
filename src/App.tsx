import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiSelenium, SiJavascript, SiPostman, SiGit, SiJira, SiJenkins, SiCucumber, SiMysql, SiGithub, SiGmail
} from 'react-icons/si';
import {
  HiCode, HiCog, HiAcademicCap, HiBadgeCheck, HiMail,
  HiPhone, HiLocationMarker, HiChevronDown, HiMenu, HiX, HiExternalLink,
  HiDownload, HiSparkles, HiShieldCheck, HiDatabase, HiGlobe, HiDeviceMobile
} from 'react-icons/hi';
import {
  FaRocket, FaUsers, FaCheckCircle, FaCertificate, FaLaptopCode, FaServer, FaCloud, FaLinkedin, FaJava, FaBug
} from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Playground', id: 'playground' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubhampuri07/',
    icon: FaLinkedin,
    accent: 'from-sky-500 to-blue-600',
    hover: 'hover:bg-blue-500/10 hover:border-blue-400/40',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ShubhamPuri-SDET',
    icon: SiGithub,
    accent: 'from-slate-200 to-slate-500',
    hover: 'hover:bg-white/10 hover:border-white/20',
  },
  {
    name: 'Email',
    href: 'mailto:Spuri4867@gmail.com',
    icon: SiGmail,
    accent: 'from-rose-500 to-red-500',
    hover: 'hover:bg-red-500/10 hover:border-red-400/40',
  },
];

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// Floating Orbs Component (Enhanced with Parallax)
const FloatingOrbs = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -80]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -40]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -120]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div className="orb w-96 h-96 bg-indigo-600/15 top-1/4 -left-48 blob-1" style={{ y: y1 }} />
      <motion.div className="orb w-80 h-80 bg-purple-600/15 top-1/2 -right-40 blob-2" style={{ y: y2 }} />
      <motion.div className="orb w-64 h-64 bg-cyan-600/10 bottom-1/4 left-1/4 blob-3" style={{ y: y3 }} />
    </div>
  );
};

// Automation Workflow Background - Subtle animated CI/CD pipeline flow
const AutomationWorkflowBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 3; // Cover multiple sections

    // Define automation workflow nodes (API, CI/CD, Browser, Database)
    const nodes: Array<{
      x: number; y: number; radius: number; color: string; label: string;
      pulsePhase: number; connections: number[];
    }> = [
        { x: canvas.width * 0.15, y: canvas.height * 0.1, radius: 4, color: '#6366f1', label: 'API', pulsePhase: 0, connections: [1, 2] },
        { x: canvas.width * 0.35, y: canvas.height * 0.08, radius: 3, color: '#22d3ee', label: 'CI/CD', pulsePhase: 1, connections: [2, 3] },
        { x: canvas.width * 0.55, y: canvas.height * 0.12, radius: 4, color: '#a855f7', label: 'Browser', pulsePhase: 2, connections: [3, 4] },
        { x: canvas.width * 0.75, y: canvas.height * 0.09, radius: 3, color: '#10b981', label: 'DB', pulsePhase: 0.5, connections: [4, 0] },
        { x: canvas.width * 0.9, y: canvas.height * 0.11, radius: 4, color: '#f59e0b', label: 'Report', pulsePhase: 1.5, connections: [0] },
      ];

    // Flowing dots along connections
    const flowDots: Array<{
      fromNode: number; toNode: number; progress: number; speed: number;
    }> = [];

    nodes.forEach((node, nodeIdx) => {
      node.connections.forEach(toIdx => {
        flowDots.push({
          fromNode: nodeIdx,
          toNode: toIdx,
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.003
        });
      });
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Draw connection lines
      nodes.forEach((node) => {
        node.connections.forEach(toIdx => {
          const target = nodes[toIdx];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.06)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw flowing dots along connections
      flowDots.forEach(dot => {
        dot.progress += dot.speed;
        if (dot.progress > 1) dot.progress = 0;

        const from = nodes[dot.fromNode];
        const to = nodes[dot.toNode];
        const x = from.x + (to.x - from.x) * dot.progress;
        const y = from.y + (to.y - from.y) * dot.progress;

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.3 + Math.sin(time * 2) * 0.15})`;
        ctx.fill();
      });

      // Draw nodes with pulse effect
      nodes.forEach((node) => {
        const pulse = 1 + Math.sin(time * 2 + node.pulsePhase) * 0.3;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}10`;
        ctx.fill();

        // Inner node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}40`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}80`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
};

// Parallax Floating Gradient Blobs
const ParallaxBlobs = () => {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 2000], [0, -150]);
  const blob2Y = useTransform(scrollY, [0, 2000], [0, -80]);
  const blob3Y = useTransform(scrollY, [0, 2000], [0, -200]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        style={{ y: blob1Y }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/8 to-purple-600/8 blur-3xl -top-40 -right-40 blob-1"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-600/6 to-blue-600/6 blur-3xl top-1/3 -left-32 blob-2"
      />
      <motion.div
        style={{ y: blob3Y }}
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-fuchsia-600/5 to-pink-600/5 blur-3xl bottom-1/4 right-1/4 blob-3"
      />
    </div>
  );
};

// QA 3D Rotating Cube Component
const QA3DCube = () => (
  <div className="w-24 h-24 cube-3d mx-auto mb-6">
    <div className="cube-face absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-indigo-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'translateZ(48px)' }}>
      <SiSelenium className="text-3xl text-blue-400" />
    </div>
    <div className="cube-face absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateY(180deg) translateZ(48px)' }}>
      <SiPostman className="text-3xl text-orange-400" />
    </div>
    <div className="cube-face absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(48px)' }}>
      <FaCheckCircle className="text-3xl text-green-400" />
    </div>
    <div className="cube-face absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateY(-90deg) translateZ(48px)' }}>
      <HiShieldCheck className="text-3xl text-emerald-400" />
    </div>
    <div className="cube-face absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 border border-amber-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateX(90deg) translateZ(48px)' }}>
      <FaBug className="text-3xl text-red-400" />
    </div>
    <div className="cube-face absolute inset-0 bg-gradient-to-br from-rose-500/30 to-red-500/30 border border-rose-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(48px)' }}>
      <FaRocket className="text-3xl text-pink-400" />
    </div>
  </div>
);

// QA Terminal Animation Component
const QATerminal = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const lines = [
    { text: '$ npm run test:regression', color: 'text-cyan-400' },
    { text: '✓ 342 tests passed', color: 'text-green-400' },
    { text: '✓ 0 failures detected', color: 'text-green-400' },
    { text: '✓ Coverage: 94.7%', color: 'text-emerald-400' },
    { text: '🚀 Release ready!', color: 'text-purple-400' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % (lines.length + 2));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm glass rounded-xl overflow-hidden border border-indigo-500/30">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-slate-400">qa-terminal</span>
      </div>
      <div className="p-4 font-mono text-sm space-y-1 min-h-[140px] relative">
        <div className="scan-line" />
        {lines.slice(0, Math.min(lineIndex, lines.length)).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={line.color}
          >
            {line.text}
          </motion.p>
        ))}
        {lineIndex < lines.length && (
          <p className="text-cyan-400">
            {lineIndex < lines.length ? lines[Math.min(lineIndex, lines.length - 1)].text : '$ '}
            <span className="cursor-blink">▋</span>
          </p>
        )}
        {lineIndex >= lines.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400"
          >
            $ <span className="cursor-blink">▋</span>
          </motion.p>
        )}
      </div>
    </div>
  );
};

// QA Shield Badge Component
const QAShieldBadge = () => (
  <div className="relative inline-flex items-center justify-center">
    <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40 pulse-ring" />
    <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 pulse-ring" style={{ animationDelay: '0.5s' }} />
    <div className="relative w-16 h-16 rounded-full glass border-2 border-indigo-500/50 flex items-center justify-center animate-glow">
      <HiShieldCheck className="text-2xl text-indigo-400" />
    </div>
  </div>
);

// QA Progress Ring Component
const QAProgressRing = ({ percentage = 94 }: { percentage?: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="6" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <span className="text-xl font-bold gradient-text-animated">{percentage}%</span>
        <p className="text-[10px] text-slate-400">Quality</p>
      </div>
    </div>
  );
};

// Bug Counter Animation Component
const BugCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      className="glass rounded-xl p-4 text-center"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
    >
      <FaBug className="text-2xl text-red-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-red-400">
        <motion.span
          key={count}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {count}
        </motion.span>
        <span className="text-sm text-slate-400 block">Bugs Found</span>
      </div>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        + New Bug
      </button>
    </motion.div>
  );
};

// 3D Coding Robot Component
const QACodingRobot = ({ isTyping = false, emotion = 'debugging' }: { isTyping?: boolean; emotion?: 'happy' | 'angry' | 'debugging' | 'sleeping' }) => {
  // Determine glowing color properties based on state
  const eyeColors = {
    happy: 'bg-green-400 shadow-[0_0_15px_#4ade80]',
    angry: 'bg-red-500 shadow-[0_0_15px_#f87171]',
    debugging: 'bg-cyan-400 shadow-[0_0_12px_#22d3ee]',
    sleeping: 'bg-slate-600 opacity-40 shadow-none'
  };

  const bodyLED = {
    happy: 'text-green-400',
    angry: 'text-red-400',
    debugging: 'text-cyan-400',
    sleeping: 'text-slate-500'
  };

  return (
    <div className="relative w-56 h-64 mx-auto animate-robot-levitate" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
      {/* Sleeping "Zzz" bubble */}
      {emotion === 'sleeping' && (
        <div className="absolute -top-12 right-0 bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-1 text-[10px] text-slate-400 font-bold font-mono animate-bounce shadow-lg z-20">
          Zzz...
        </div>
      )}

      {/* 3D Head */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-24 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl flex flex-col items-center justify-center shadow-2xl" style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}>
        {/* Antenna */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-6 bg-slate-600 rounded-full" style={{ transform: 'translateZ(-10px)' }}>
          <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${emotion === 'angry' ? 'bg-red-500 shadow-[0_0_15px_#ef4444]' : 'animate-antenna'}`} />
        </div>

        {/* Glowing Visor/Eyes */}
        <div className="w-20 h-8 bg-slate-950 rounded-xl flex items-center justify-around px-3 border border-indigo-500/30 overflow-hidden relative">
          {/* Eyes pattern */}
          {emotion === 'happy' ? (
            <>
              <div className="text-green-400 text-xs font-bold select-none">✔</div>
              <div className="text-green-400 text-xs font-bold select-none">✔</div>
            </>
          ) : emotion === 'angry' ? (
            <>
              <div className="text-red-500 font-bold select-none text-sm -rotate-12">✖</div>
              <div className="text-red-500 font-bold select-none text-sm rotate-12">✖</div>
            </>
          ) : (
            <>
              <div className={`w-3.5 h-3.5 rounded-full ${eyeColors[emotion]} animate-eye`} />
              <div className={`w-3.5 h-3.5 rounded-full ${eyeColors[emotion]} animate-eye`} />
            </>
          )}
        </div>

        {/* Status indicator mouth */}
        {emotion === 'happy' ? (
          <div className="mt-2 w-8 h-2.5 border-b-2 border-green-400 rounded-full shadow-[0_2px_8px_rgba(74,222,128,0.4)]" />
        ) : emotion === 'angry' ? (
          <div className="mt-2.5 w-6 h-1.5 border-t-2 border-red-500 rounded-full shadow-[0_-2px_8px_rgba(239,68,68,0.4)]" />
        ) : (
          <div className="mt-2 w-10 h-1 rounded-full bg-cyan-500/60 shadow-[0_0_5px_rgba(34,211,238,0.5)] animate-pulse" />
        )}
      </div>

      {/* 3D Body */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-36 h-28 bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center" style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d' }}>
        {/* Status LED Screen */}
        <div className="w-24 h-12 bg-slate-900 rounded-lg p-2 border border-slate-700 overflow-hidden text-center flex flex-col justify-center">
          <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">STATUS</span>
          <span className={`text-xs font-bold font-mono ${bodyLED[emotion]} ${emotion === 'debugging' && 'animate-pulse'}`}>
            {emotion === 'happy' ? 'ALL PASS' : emotion === 'angry' ? 'BUG DETECTED' : emotion === 'sleeping' ? 'SLEEP' : 'TEST RUN'}
          </span>
        </div>
      </div>

      {/* Left Robotic Arm typing */}
      <div className={`absolute top-36 left-4 w-6 h-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full origin-top border border-slate-600 ${isTyping ? 'animate-arm-left' : ''}`} style={{ transform: 'rotateY(10deg) translateZ(10px)' }}>
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full ${emotion === 'happy' ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : emotion === 'angry' ? 'bg-red-500 shadow-[0_0_10px_#f87171]' : 'shadow-[0_0_8px_#22d3ee]'}`} />
      </div>

      {/* Right Robotic Arm typing */}
      <div className={`absolute top-36 right-4 w-6 h-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full origin-top border border-slate-600 ${isTyping ? 'animate-arm-right' : ''}`} style={{ transform: 'rotateY(-10deg) translateZ(10px)' }}>
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full ${emotion === 'happy' ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : emotion === 'angry' ? 'bg-red-500 shadow-[0_0_10px_#f87171]' : 'shadow-[0_0_8px_#22d3ee]'}`} />
      </div>

      {/* Virtual Holographic Keyboard */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex flex-col justify-around p-1 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-sm" style={{ transform: 'rotateX(70deg) translateZ(25px)' }}>
        <div className="flex justify-around">
          {[1, 2, 3, 4, 5, 6].map((i) => <span key={i} className={`w-5 h-1.5 rounded-sm ${emotion === 'happy' ? 'bg-green-400/30' : emotion === 'angry' ? 'bg-red-500/30' : 'bg-cyan-400/30'}`} />)}
        </div>
        <div className="flex justify-around">
          {[1, 2, 3, 4, 5].map((i) => <span key={i} className={`w-6 h-1.5 rounded-sm ${emotion === 'happy' ? 'bg-green-400/30' : emotion === 'angry' ? 'bg-red-500/30' : 'bg-cyan-400/30'}`} />)}
        </div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeSection }: { activeSection: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'py-6 bg-transparent'
        }`}
    >
      <motion.div
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left side: Logo & Subtitle Group */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 15 }}
              className="text-2xl font-bold gradient-text-animated cursor-pointer"
              style={{ perspective: '500px' }}
            >
              SP
            </motion.div>
            <div className="nav-logo-divider hidden sm:block h-6 w-[1px] bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
            <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-slate-400 font-medium font-mono">
              Automation SDET
            </span>
          </div>

          {/* Right side: Desktop Navigation & CTA Group */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-white drop-shadow-[0_0_10px_rgba(129,140,248,0.9)]' : 'text-slate-300 hover:text-white'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />}
                    {item.label}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_12px_rgba(168,85,247,0.9)]' : 'w-0 group-hover:w-full'}`} />
                </motion.button>
              );
            })}
            <motion.a
              href="https://drive.google.com/file/d/1WlNGvQDUyY1bX_0yn5COFzGCPTnTZWqu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 inline-block"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass rounded-2xl p-6"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 transition-colors ${activeSection === item.id ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const titles = [
    'Automation QA Engineer',
    'SDET Professional',
    'ISTQB Certified',
    'Framework Architect',
    'Quality Champion'
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Hero Gradient Background */}
      <div className="absolute inset-0 hero-gradient" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text-animated">Shubham Puri</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-12 mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl lg:text-3xl text-slate-300 font-light"
                >
                  {titles[currentTitle]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Crafting reliable, accessible, and scalable quality solutions with 3+ years of
              automation-first testing expertise across web, mobile, and API platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                <HiMail className="text-xl" />
                Get In Touch
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1WlNGvQDUyY1bX_0yn5COFzGCPTnTZWqu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 glass rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                <HiDownload className="text-xl" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
            >
              <a href="https://www.linkedin.com/in/shubhampuri07" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/ShubhamPuri-SDET" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <SiGithub className="text-xl" />
              </a>
              <a href="mailto:Spuri4867@gmail.com"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300">
                <SiGmail className="text-xl" />
              </a>
            </motion.div>
          </div>

          {/* Hero 3D QA Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* 3D Rotating Cube */}
              <div className="qa-float-1">
                <QA3DCube />
              </div>

              {/* Terminal & Badge Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="qa-float-2">
                  <QATerminal />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <QAShieldBadge />
                  <QAProgressRing percentage={94} />
                  <BugCounter />
                </div>
              </div>

              {/* Floating Tech Icons - Enhanced */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotateZ: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-16 h-16 glass rounded-2xl flex items-center justify-center tilt-3d"
              >
                <SiSelenium className="text-2xl text-blue-400" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotateX: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 glass rounded-2xl flex items-center justify-center tilt-3d"
              >
                <SiPostman className="text-2xl text-orange-400" />
              </motion.div>

              <motion.div
                animate={{ x: [-10, 10, -10], rotateY: [0, 15, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 -right-12 w-14 h-14 glass rounded-2xl flex items-center justify-center tilt-3d"
              >
                <HiCog className="text-2xl text-green-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '300+', label: 'Test Cases Managed' },
            { number: '40%', label: 'Effort Reduced' },
            { number: '90%', label: 'Defect Resolution' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.08, rotateY: 10, rotateX: -5 }}
              className="glass rounded-2xl p-6 text-center tilt-3d cursor-pointer relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/15 group-hover:to-purple-500/15 transition-all duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-3xl lg:text-4xl font-bold gradient-text-animated mb-2">{stat.number}</div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <HiChevronDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const highlights = [
    { icon: FaRocket, title: 'Automation First', desc: 'Building scalable test frameworks' },
    { icon: HiShieldCheck, title: 'Quality Focused', desc: 'Reliability & accessibility champion' },
    { icon: FaUsers, title: 'Team Leadership', desc: 'Mentored 5+ QA engineers' },
    { icon: FaLaptopCode, title: 'CI/CD Expert', desc: 'Streamlined release pipelines' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">About Me</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Passionate About <span className="gradient-text-animated">Quality Engineering</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Delivering automation-first quality solutions with a focus on reliability, accessibility, and release stability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                ISTQB-certified Automation QA Engineer with <span className="text-indigo-400 font-semibold">4.1+ years of experience</span>
                 delivering automation-first quality solutions for web, mobile, and API-driven applications.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Strong in building <span className="text-purple-400 font-semibold">scalable test frameworks</span>, enabling CI/CD pipelines,
                and leveraging AI-driven testing with a focus on reliability, accessibility, and release stability.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Java', 'JavaScript', 'Selenium', 'Playwright', 'TestNG', 'Postman', 'Jenkins'].map((tech) => (
                  <span key={tech} className="px-4 py-2 glass rounded-lg text-sm text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
            style={{ perspective: '1000px' }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                whileHover={{ scale: 1.08, rotateY: 8, rotateX: -5, z: 20 }}
                className="glass-deep glass-hover rounded-2xl p-6 tilt-3d cursor-pointer relative overflow-hidden group neon-border"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-indigo-500/40 transition-all duration-300 depth-shadow">
                    <item.icon className="text-xl" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      company: 'Jaytech (Client: Johnson Controls)',
      role: 'QA Engineer',
      period: 'Sept 2025 - Present',
      current: true,
      highlights: [
        'Performing end-to-end functional, regression, API, and cross-browser testing',
        'Designed and executed 200+ test cases across UI, API, and integration workflows',
        'Validated REST APIs using Postman, improving backend data accuracy',
        'Spearheaded migration from Selenium to Playwright',
        'Improved defect traceability through Azure DevOps'
      ],
      technologies: ['Playwright', 'JavaScript', 'Python', 'CI/CD', 'GIT', 'Postman', 'Azure DevOps', 'REST API']
    },
    {
      company: 'Perficient India',
      role: 'Automation Test Engineer',
      period: 'May 2022 - Sept 2025',
      current: false,
      highlights: [
        'Built scalable automation framework using Java, Selenium, TestNG, Maven, and Jenkins',
        'Reduced manual regression effort by 40%',
        'Managed and mentored a team of 5+ offshore QA engineers',
        'Reduced onboarding time by ~50% through structured knowledge sharing',
        'Improved defect resolution rate by 90% across 300+ JIRA tickets',
        'Validated Adobe Analytics webVAS tags'
      ],
      technologies: ['Java', 'Selenium', 'TestNG', 'Maven','BDD', 'Jenkins', 'SVN', 'Jira', 'Adobe Analytics'. 'Postman', 'REST API', 'Excel']
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Experience</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text-animated">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building quality solutions across enterprise domains including Healthcare, E-commerce, and Building Automation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="glass-deep glass-hover rounded-3xl p-8 relative overflow-hidden group tilt-3d neon-border"
              style={{ perspective: '1200px' }}
            >
              {/* Gradient Accent with glow */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-500" />
              <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-indigo-500/20 to-purple-500/20 blur-sm group-hover:opacity-100 opacity-0 transition-opacity duration-500" />

              {/* Current Badge */}
              {exp.current && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Current
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-6">{exp.period}</p>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <FaCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-48">
                  <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Programming & Automation',
      icon: HiCode,
      skills: [
        { name: 'Java', level: 90, icon: FaJava },
        { name: 'JavaScript', level: 85, icon: SiJavascript },
        { name: 'Selenium', level: 95, icon: SiSelenium },
        { name: 'Playwright', level: 88, icon: HiCode },
        { name: 'TestNG', level: 92, icon: HiCog },
        { name: 'Cucumber', level: 80, icon: SiCucumber }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: HiCog,
      skills: [
        { name: 'Jenkins', level: 85, icon: SiJenkins },
        { name: 'Git', level: 90, icon: SiGit },
        { name: 'Jira', level: 88, icon: SiJira },
        { name: 'Azure DevOps', level: 82, icon: FaCloud },
        { name: 'Postman', level: 90, icon: SiPostman },
        { name: 'MySQL', level: 75, icon: SiMysql }
      ]
    },
    {
      title: 'Quality Engineering',
      icon: HiShieldCheck,
      skills: [
        { name: 'API Testing', level: 88, icon: FaServer },
        { name: 'Cross-Browser Testing', level: 92, icon: HiGlobe },
        { name: 'Accessibility Testing', level: 80, icon: FaUsers },
        { name: 'Mobile Testing', level: 75, icon: HiDeviceMobile },
        { name: 'CI/CD Pipelines', level: 85, icon: FaCloud },
        { name: 'Database Testing', level: 78, icon: HiDatabase }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Skills</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Technical <span className="gradient-text-animated">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Proficient in modern testing tools and methodologies, continuously learning and adapting to new technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="glass-deep glass-hover rounded-3xl p-8 tilt-3d relative overflow-hidden neon-border"
            >
              {/* Subtle scan line effect */}
              <div className="scan-line" style={{ animationDelay: `${catIndex * 1}s`, opacity: 0.3 }} />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center depth-shadow">
                  <category.icon className="text-xl" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-lg text-indigo-400" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + skillIndex * 0.1 }}
                        className="skill-bar-fill"
                        style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Domain Expertise & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Agile', 'Scrum', 'SDLC', 'STLC', 'BDD', 'POM', 'Data-Driven', 'Healthcare', 'E-commerce', 'HVAC', 'AEM', 'Industrial Systems'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-5 py-2.5 glass rounded-xl text-sm font-medium text-slate-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Building Management Systems',
      company: 'Johnson Controls',
      description: 'Quality validation of enterprise-scale building automation platforms spanning 4+ interconnected products with complex system workflows.',
      highlights: [
        'Automated regression test cases using Playwright (JavaScript)',
        'Spearheaded Selenium-to-Playwright migration',
        'Contributed to CI/CD releases within Agile/Scrum environments',
        'Cross-functional collaboration for enterprise-scale deployments'
      ],
      icon: FaServer,
      color: 'from-blue-500 to-cyan-500',
      tags: ['Playwright', 'JavaScript', 'REST API', 'Azure DevOps', 'Agile']
    },
    {
      title: 'Genentech Healthcare',
      company: 'Perficient India',
      description: 'Quality engineering for a large-scale healthcare website operating under compliance-driven environment with focus on reliability and user experience.',
      highlights: [
        'Ensured 99% cross-browser compatibility',
        'Validated 250+ marketing emails and digital assets',
        'Leveraged Prompt Engineering for test data generation',
        'Reduced manual test preparation time by 25%'
      ],
      icon: FaHospital,
      color: 'from-green-500 to-emerald-500',
      tags: ['Selenium', 'Java', 'Accessibility', 'Compliance', 'Analytics']
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Projects</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Key <span className="gradient-text-animated">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Delivering quality solutions across Healthcare, Building Automation, and Enterprise platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-deep glass-hover rounded-3xl p-8 relative overflow-hidden group neon-border"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 depth-shadow group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="text-2xl" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-indigo-400 font-medium mb-4">{project.company}</p>
              <p className="text-slate-400 mb-6">{project.description}</p>

              <ul className="space-y-3 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <FaCheckCircle className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hospital Icon Component (missing from react-icons)
const FaHospital = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
  </svg>
);

// Certifications Section
const CertificationsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const certifications = [
    { name: 'ISTQB Certified Tester', issuer: 'Foundation Level', icon: HiBadgeCheck, color: 'from-amber-500 to-orange-500' },
    { name: 'Scrum Foundation Professional', issuer: 'SFPC', icon: FaCertificate, color: 'from-blue-500 to-indigo-500' },
    { name: 'Postman API Testing', issuer: 'Certification', icon: SiPostman, color: 'from-orange-500 to-red-500' },
    { name: 'LambdaTest Automation', issuer: 'Testing Certification', icon: FaRocket, color: 'from-purple-500 to-pink-500' },
    { name: 'Prompt Engineering', issuer: 'OpenAI', icon: HiSparkles, color: 'from-green-500 to-teal-500' }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Certifications</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text-animated">Credentials</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuously investing in professional development and industry certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ scale: 1.08, rotateY: 8, rotateX: -5, z: 30 }}
              className="glass-deep glass-hover rounded-2xl p-6 text-center group cursor-pointer tilt-3d relative overflow-hidden neon-border"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 depth-shadow`}>
                  <cert.icon className="text-2xl" />
                </div>
                <h3 className="font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Education</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <HiAcademicCap className="text-4xl text-indigo-400 mx-auto mb-3" />
              <h4 className="font-bold">Bachelor of Engineering</h4>
              <p className="text-slate-400">Sant Gadge Baba Amravati University</p>
              <p className="text-sm text-slate-500 mt-1">2019 - 2022</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-slate-700" />
            <div className="text-center">
              <HiAcademicCap className="text-4xl text-purple-400 mx-auto mb-3" />
              <h4 className="font-bold">Diploma in Engineering</h4>
              <p className="text-slate-400">MSBTE Mumbai</p>
              <p className="text-sm text-slate-500 mt-1">2016 - 2019</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Interactive QA Sandbox / Playground Section
const QAPlaygroundSection = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'passed' | 'failed'>('idle');
  const [activeTab, setActiveTab] = useState<'selenium' | 'playwright' | 'api'>('playwright');
  const [emotion, setEmotion] = useState<'happy' | 'angry' | 'debugging' | 'sleeping'>('debugging');

  // Whack-A-Bug game states
  const [bugsSquashed, setBugsSquashed] = useState(0);
  const [activeBugIndex, setActiveBugIndex] = useState<number | null>(null);
  const [qualityQuotient, setQualityQuotient] = useState(85);

  // Selector locator tool states
  const [hoveredElement, setHoveredElement] = useState<{
    label: string;
    xpath: string;
    css: string;
    assertion: string;
  } | null>(null);

  // Gherkin builder states
  const [gherkinGiven, setGherkinGiven] = useState("Recruiter lands on Shubham's premium portfolio");
  const [gherkinWhen, setGherkinWhen] = useState("they interact with the 3D QA Coding Robot Sandbox");
  const [gherkinThen, setGherkinThen] = useState("they schedule a technical SDET screening call");
  const [customGherkinOutput, setCustomGherkinOutput] = useState<string | null>(null);

  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '⚙️ Automation Playground Stack: ONLINE',
    '🤖 Try modifying the Robot Emotion, building Gherkin steps, or catching bugs!',
    '💡 Tip: Hover elements on the mock browser window below to discover Locators & XPaths.',
  ]);

  // Bug spawning loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        setActiveBugIndex(Math.floor(Math.random() * 4));
      } else {
        setActiveBugIndex(null);
      }
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleSquashBug = (index: number) => {
    setActiveBugIndex(null);
    setBugsSquashed(prev => prev + 1);
    setQualityQuotient(prev => Math.min(prev + 3, 100));
    setEmotion('happy');
    setConsoleLogs(prev => [
      `✓ [DEFECT SQUASHED] Patched bug index ${index + 1}! Defect resolved in code runtime.`,
      `🔧 Jenkins CI: Pipeline health updated. Quality quotient boosted to ${Math.min(qualityQuotient + 3, 100)}%`,
      ...prev.slice(0, 8),
    ]);
    setTimeout(() => setEmotion('debugging'), 1500);
  };

  const handleGherkinBuild = () => {
    const featureText = `Feature: SDET Profile Assessment
  Scenario: Assess Shubham's Automation Engineering Prowess
    Given ${gherkinGiven}
    When ${gherkinWhen}
    Then ${gherkinThen}`;

    const assertionCode = `test('Assess Shubham\'s Automation Profile', async ({ page }) => {
  // Given: ${gherkinGiven}
  await page.goto('https://shubham-puri.dev');
  
  // When: ${gherkinWhen}
  const robot = page.locator('#qa-3d-robot');
  await expect(robot).toBeVisible();
  await robot.hover();
  
  // Then: ${gherkinThen}
  const callBtn = page.locator('#contact-btn');
  await expect(callBtn).toBeEnabled();
  await callBtn.click();
});`;

    setCustomGherkinOutput(featureText + "\n\n" + assertionCode);
    setConsoleLogs(prev => [
      '🚀 Gherkin Feature definition mapped and compiled successfully.',
      '📦 Autogenerated Playwright/Cucumber test harness scaffold updated in the logboard below!',
      ...prev.slice(0, 8),
    ]);
  };

  const runTests = () => {
    if (testStatus === 'running') return;
    setTestStatus('running');
    setEmotion('debugging');
    setConsoleLogs([
      '🚀 Launching automated regression suites...',
      `🔧 Platform: Node.js Run-Time | Core: ${activeTab.toUpperCase()} Engine`,
      '📦 Instantiating Page Object Models (POM) & Locators...',
    ]);

    setTimeout(() => {
      setConsoleLogs(prev => [
        ...prev,
        '🌐 Headless browser initialized. Navigating to checkout portal...',
        '🔍 Verifying DOM element stability & tag validations...',
        '📊 Validating Adobe Analytics tags (webVAS tag checker)...',
      ]);
    }, 1000);

    setTimeout(() => {
      setConsoleLogs(prev => [
        ...prev,
        '⚡ Testing database API integrity (Postman / REST-Assured mock endpoints)...',
        '🔒 Compliance check: WCAG Accessibility and ADA tags passing.',
      ]);
    }, 2000);

    setTimeout(() => {
      const isPass = qualityQuotient >= 90 || Math.random() > 0.2;
      if (isPass) {
        setTestStatus('passed');
        setEmotion('happy');
        setConsoleLogs(prev => [
          ...prev,
          '✓ API Validation Passed (HTTP 200 OK)',
          '✓ Tag tracking metrics matches baseline tag template',
          '🎉 BUILD DEPLOYED: Regression suite fully passed! 0 failures.',
        ]);
      } else {
        setTestStatus('failed');
        setEmotion('angry');
        setConsoleLogs(prev => [
          ...prev,
          '✗ ElementNotFoundException: XPath element not reachable within timeout.',
          '🚨 CRITICAL BUG DETECTED: Layout integrity broken on viewports < 768px.',
          '⚠️ Defect automated & pushed to Jira board.',
          '⛔ DEPLOYMENT BLOCKED: Build stability check failed.',
        ]);
      }
    }, 3200);
  };

  // Mock DOM options
  const mockDOM = [
    {
      label: 'Main Call-to-Action button',
      xpath: '//button[@id="primary-cta-btn"]',
      css: 'button#primary-cta-btn',
      assertion: "await expect(page.locator('button#primary-cta-btn')).toBeVisible();"
    },
    {
      label: 'Portfolio Search input',
      xpath: '//input[@name="search-query"]',
      css: 'input[name="search-query"]',
      assertion: "await expect(page.locator('input[name=\"search-query\"]')).toBeFocused();"
    },
    {
      label: 'Jira Integration status chip',
      xpath: '//div[contains(@class, "jira-status")]',
      css: 'div.jira-status',
      assertion: "await expect(page.locator('div.jira-status')).toHaveText('Sync Completed');"
    },
    {
      label: 'Adobe Analytics tag tracker',
      xpath: '//meta[@property="webvas-tags"]',
      css: 'meta[property="webvas-tags"]',
      assertion: "await expect(page.locator('meta[property=\"webvas-tags\"]')).toHaveAttribute('content', 'active');"
    }
  ];

  return (
    <section id="playground" className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-cyan-950/15 to-transparent">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">Interactive SDET Playground</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Interactive <span className="gradient-text-animated">QA & Automation Sandbox</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interact with the 3D QA Coding Robot to trigger framework suites, discover element locators, squash production bugs, and build test assertions in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Block: 3D QACodingRobot & Emotion Controls (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden"
              style={{ perspective: '1200px' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b205_1px,transparent_1px),linear-gradient(to_bottom,#0891b205_1px,transparent_1px)] bg-[size:14px_24px]" />

              {/* QA 3D Coding Robot */}
              <QACodingRobot isTyping={testStatus === 'running'} emotion={emotion} />

              {/* Robot Emotion Controller */}
              <div className="mt-8 relative z-10 w-full text-center">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono block mb-3">Set Robot Expression</span>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { id: 'debugging', label: '🤖 Debug', color: 'border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10' },
                    { id: 'happy', label: '😊 Smile', color: 'border-green-500/40 text-green-400 hover:bg-green-500/10' },
                    { id: 'angry', label: '😡 Angry', color: 'border-red-500/40 text-red-400 hover:bg-red-500/10' },
                    { id: 'sleeping', label: '😴 Sleep', color: 'border-slate-600/40 text-slate-400 hover:bg-slate-600/10' }
                  ].map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setEmotion(e.id as any)}
                      className={`px-3 py-1.5 border rounded-xl text-xs font-semibold transition-all duration-300 ${e.color} ${emotion === e.id ? 'bg-slate-800 border-white/20' : ''}`}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interactive Whack-A-Bug Game */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FaBug className="text-red-400 animate-pulse" />
                  <span className="text-sm font-bold">Mock QA Bug Catching Game</span>
                </div>
                <div className="text-xs bg-red-500/20 text-red-400 font-mono px-2.5 py-1 rounded-full font-bold">
                  Bugs Caught: {bugsSquashed}
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Production servers are experiencing erratic system failures! Click on the crawling bugs below to squash them and stabilize system integration.
              </p>

              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((idx) => {
                  const hasBug = activeBugIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => hasBug && handleSquashBug(idx)}
                      disabled={!hasBug}
                      className={`h-16 rounded-2xl flex flex-col items-center justify-center border transition-all duration-300 ${hasBug
                        ? 'bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:scale-105'
                        : 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed'
                        }`}
                    >
                      {hasBug ? (
                        <>
                          <FaBug className="text-xl animate-bounce" />
                          <span className="text-[9px] font-mono mt-1 text-red-400 font-bold">PATCH ME</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 rounded-full bg-green-500/40" />
                          <span className="text-[9px] font-mono mt-1 text-slate-500">OK</span>
                        </>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Progress to health */}
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-400">Environment Stability Index:</span>
                <span className={`font-mono font-bold ${qualityQuotient >= 95 ? 'text-green-400' : 'text-cyan-400'}`}>{qualityQuotient}%</span>
              </div>
              <div className="mt-2 h-2 bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                  animate={{ width: `${qualityQuotient}%` }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Block: Live Code Inspector, Selector Finder & Gherkin Builder (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Mock Web Browser with DOM Finder Selector Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-3xl overflow-hidden border border-slate-800/80"
            >
              {/* Browser bar */}
              <div className="flex items-center justify-between px-6 py-3 bg-slate-900/80 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] font-mono text-slate-400">https://qa-sandbox-enterprise.app</span>
                </div>
              </div>

              {/* Mock Browser viewport */}
              <div className="p-6 bg-slate-950/60 min-h-[160px] relative flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {mockDOM.map((element, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredElement(element)}
                      onMouseLeave={() => setHoveredElement(null)}
                      className="cursor-crosshair border border-slate-800 hover:border-cyan-400/80 hover:bg-cyan-500/5 p-4 rounded-2xl transition-all duration-300 relative group"
                    >
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-500/20 text-[9px] text-cyan-400 font-mono px-2 py-0.5 rounded-md uppercase font-bold">
                        inspect
                      </div>
                      <span className="text-xs text-slate-400 block mb-1">DOM Node {i + 1}</span>
                      <h4 className="text-sm font-bold text-slate-200">{element.label}</h4>
                    </div>
                  ))}
                </div>

                {/* Locator Finder HUD overlay */}
                <div className="glass rounded-2xl p-4 mt-2 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-xs text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono font-bold uppercase tracking-wider">DOM Locator Finder HUD</span>
                  </div>
                  {hoveredElement ? (
                    <div className="font-mono text-[11px] space-y-1">
                      <p><span className="text-purple-400">Selected:</span> <span className="text-slate-200 font-bold">{hoveredElement.label}</span></p>
                      <p><span className="text-cyan-400">XPath Element:</span> <span className="text-slate-300">{hoveredElement.xpath}</span></p>
                      <p><span className="text-indigo-400">CSS Selector:</span> <span className="text-slate-300">{hoveredElement.css}</span></p>
                      <div className="mt-2 bg-slate-950 p-2.5 rounded-lg border border-white/5">
                        <span className="text-[9px] text-slate-500 block">PLAYWRIGHT ASSERTION CODE:</span>
                        <code className="text-green-400">{hoveredElement.assertion}</code>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs font-mono text-slate-500 italic">Hover any browser DOM node above to instantly extract target element XPaths, Selectors, and automated Playwright test blocks.</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Cucumber BDD Gherkin Feature Builder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <HiCode className="text-indigo-400" />
                Cucumber BDD Gherkin Builder
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Compose custom BDD Feature definitions and instantly auto-compile them into modern working Playwright automation code block templates.
              </p>

              <div className="space-y-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-purple-400">GIVEN (Initial Context)</span>
                  <select
                    value={gherkinGiven}
                    onChange={(e) => setGherkinGiven(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Recruiter lands on Shubham's premium portfolio">Recruiter lands on Shubham's premium portfolio</option>
                    <option value="Offshore team onboarded with structured best practices">Offshore team onboarded with structured best practices</option>
                    <option value="Adobe Analytics tracking Tag template is configured on staging portal">Adobe Analytics tracking Tag template is configured on staging portal</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400">WHEN (Event Trigger)</span>
                  <select
                    value={gherkinWhen}
                    onChange={(e) => setGherkinWhen(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="they interact with the 3D QA Coding Robot Sandbox">they interact with the 3D QA Coding Robot Sandbox</option>
                    <option value="they run automated Playwright regression test suite">they run automated Playwright regression test suite</option>
                    <option value="validation risks are minimized using Prompt Engineering data">validation risks are minimized using Prompt Engineering data</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-green-400">THEN (Expected Outcome)</span>
                  <select
                    value={gherkinThen}
                    onChange={(e) => setGherkinThen(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-green-500 transition-colors"
                  >
                    <option value="they schedule a technical SDET screening call">they schedule a technical SDET screening call</option>
                    <option value="manual regression effort is reduced by 40%">manual regression effort is reduced by 40%</option>
                    <option value="deployment confidence & release cycle is accelerated by 2x">deployment confidence & release cycle is accelerated by 2x</option>
                  </select>
                </div>

                <button
                  onClick={handleGherkinBuild}
                  className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition-all duration-300"
                >
                  Generate Cucumber BDD Feature & Code
                </button>
              </div>

              {customGherkinOutput && (
                <div className="mt-4 bg-slate-950 rounded-2xl border border-indigo-500/20 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-white/5">
                    <span className="text-[10px] font-mono text-indigo-400">Cucumber Gherkin Scenario</span>
                  </div>
                  <pre className="p-4 font-mono text-[11px] text-indigo-300 leading-relaxed whitespace-pre-wrap">{customGherkinOutput}</pre>
                </div>
              )}
            </motion.div>

            {/* Test Console Logboard and Controller */}
            <div className="glass rounded-3xl overflow-hidden border border-slate-800/80 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900/60 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">Playwright / Selenium Console Output</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Log Board */}
              <div className="p-6 font-mono text-xs text-slate-300 space-y-2 min-h-[160px] bg-slate-950/70 overflow-y-auto max-h-[220px]">
                <AnimatePresence>
                  {consoleLogs.map((log, index) => {
                    let logColor = 'text-slate-300';
                    if (log.startsWith('✓')) logColor = 'text-green-400 font-semibold';
                    else if (log.startsWith('✗') || log.includes('CRITICAL BUG') || log.startsWith('🚨')) logColor = 'text-red-400 font-semibold';
                    else if (log.startsWith('🚀') || log.startsWith('⚡')) logColor = 'text-cyan-400 font-bold';
                    else if (log.startsWith('🔧')) logColor = 'text-indigo-300';
                    else if (log.startsWith('⚠️') || log.startsWith('⛔')) logColor = 'text-amber-400';

                    return (
                      <motion.p
                        key={log + index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={logColor}
                      >
                        {log}
                      </motion.p>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Control Action Buttons */}
              <div className="p-6 bg-slate-900/40 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  {(['selenium', 'playwright', 'api'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setConsoleLogs([
                          `Switched context to: ${tab.toUpperCase()} STACK`,
                          'Config loaded. Ready to run framework simulation.',
                        ]);
                        setTestStatus('idle');
                      }}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 border ${activeTab === tab
                        ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 border-indigo-400 text-white shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                        : 'border-slate-800 text-slate-500 hover:text-white hover:border-slate-700'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <button
                  onClick={runTests}
                  disabled={testStatus === 'running'}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:shadow-cyan-500/30 rounded-2xl text-xs font-bold text-white transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                >
                  {testStatus === 'running' ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Executing Test Suites...
                    </>
                  ) : (
                    <>
                      <FaRocket />
                      Run Regression Tests
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 2000);
  };

  const contactInfo = [
    { icon: HiMail, label: 'Email', value: 'Spuri4867@gmail.com', href: 'mailto:Spuri4867@gmail.com' },
    { icon: HiPhone, label: 'Phone', value: '+91-7620231894', href: 'tel:+917620231894' },
    { icon: HiLocationMarker, label: 'Location', value: 'Pune, Maharashtra', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/in/shubhampuri07' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-indigo-950/20 to-slate-950">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Let's <span className="gradient-text-animated">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Open to new opportunities and exciting challenges. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === 'LinkedIn' ? '_blank' : undefined}
                rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
                  <info.icon className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
                <HiExternalLink className="ml-auto text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </motion.a>
            ))}

            {/* Profiles */}
            <div className="pt-4">
              <p className="text-sm text-slate-500 mb-4 uppercase tracking-[0.25em]">Profiles</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`glass rounded-2xl p-4 flex items-center gap-4 border border-white/10 transition-all duration-300 ${link.hover}`}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.accent} flex items-center justify-center shadow-lg shadow-indigo-500/20`}>
                      <link.icon className="text-lg text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{link.name}</p>
                      <p className="text-xs text-slate-400">Open profile</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-70"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : formStatus === 'sent' ? (
                  <>
                    <FaCheckCircle className="text-xl" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <HiMail className="text-xl" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="py-8 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold gradient-text-animated">SP</div>
        <p className="text-slate-500 text-sm">
          © 2024 Shubham Puri. Crafted with passion for quality.
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group"
            >
              <span className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_18px_rgba(99,102,241,0.45)] group-hover:border-indigo-400/40">
                <link.icon className="text-lg" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.08, rotate: -4 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-[0_0_24px_rgba(129,140,248,0.55)] border border-white/10 backdrop-blur-xl"
        >
          <HiChevronDown className="mx-auto text-2xl -rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 noise-overlay">
      {/* Background Layers */}
      <ParticleBackground />
      <AutomationWorkflowBG />
      <FloatingOrbs />
      <ParallaxBlobs />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <QAPlaygroundSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <CertificationsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
