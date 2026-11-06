import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Award, Zap, Trophy, Flame } from 'lucide-react';
import { sounds } from './SoundManager';

export default function ArcadeGame() {
  const [activeGame, setActiveGame] = useState('math'); // 'math' | 'snake'

  return (
    <div className="flex flex-col h-full select-none">
      {/* Game Switcher Tabs */}
      <div className="flex items-center gap-2 p-2 border-b border-inherit">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveGame('math');
          }}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeGame === 'math'
              ? 'bg-amber-400 text-stone-900 shadow-sm'
              : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-70'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Sempoa Math Challenge</span>
        </button>
        <button
          onClick={() => {
            sounds.playClick();
            setActiveGame('snake');
          }}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeGame === 'snake'
              ? 'bg-emerald-400 text-stone-900 shadow-sm'
              : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-70'
          }`}
        >
          <span>🐍 Retro Snake</span>
        </button>
      </div>

      {/* Game Display */}
      <div className="p-4 flex-1 flex flex-col items-center justify-center min-h-[320px]">
        {activeGame === 'math' ? <MentalMathGame /> : <SnakeGame />}
      </div>
    </div>
  );
}

// 🧮 1. SEMPOA & KUMON MENTAL MATH SPEED GAME
function MentalMathGame() {
  const [level, setLevel] = useState('medium'); // 'easy' | 'medium' | 'sempoa10'
  const [problem, setProblem] = useState({ text: '24 + 19', answer: 43 });
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef(null);

  const generateProblem = (lvl) => {
    let a, b, op, text, ans;
    if (lvl === 'easy') {
      op = Math.random() > 0.5 ? '+' : '-';
      a = Math.floor(Math.random() * 40) + 10;
      b = Math.floor(Math.random() * 30) + 5;
      if (op === '-' && b > a) [a, b] = [b, a];
      text = `${a} ${op} ${b}`;
      ans = op === '+' ? a + b : a - b;
    } else if (lvl === 'medium') {
      const ops = ['+', '-', 'x'];
      op = ops[Math.floor(Math.random() * ops.length)];
      if (op === 'x') {
        a = Math.floor(Math.random() * 12) + 4;
        b = Math.floor(Math.random() * 12) + 3;
        text = `${a} × ${b}`;
        ans = a * b;
      } else {
        a = Math.floor(Math.random() * 80) + 20;
        b = Math.floor(Math.random() * 60) + 15;
        if (op === '-' && b > a) [a, b] = [b, a];
        text = `${a} ${op} ${b}`;
        ans = op === '+' ? a + b : a - b;
      }
    } else {
      // Level 10 Sempoa Master (3-digit arithmetic)
      op = Math.random() > 0.5 ? '+' : '-';
      a = Math.floor(Math.random() * 400) + 100;
      b = Math.floor(Math.random() * 300) + 50;
      if (op === '-' && b > a) [a, b] = [b, a];
      text = `${a} ${op} ${b}`;
      ans = op === '+' ? a + b : a - b;
    }
    return { text, answer: ans };
  };

  const startGame = () => {
    sounds.playClick();
    setScore(0);
    setStreak(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setGameOver(false);
    setUserInput('');
    setProblem(generateProblem(level));
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft <= 0) {
      setIsPlaying(false);
      setGameOver(true);
      sounds.playSuccess();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const handleInput = (val) => {
    setUserInput(val);
    if (parseInt(val, 10) === problem.answer) {
      sounds.playPop();
      setScore((s) => s + 10 + streak * 2);
      setStreak((st) => st + 1);
      setUserInput('');
      setProblem(generateProblem(level));
    }
  };

  return (
    <div className="w-full max-w-xs text-center flex flex-col items-center">
      {/* Top Level Selector */}
      <div className="flex gap-1.5 p-1 rounded-lg bg-black/5 dark:bg-white/5 mb-3 text-[11px] font-semibold">
        <button
          onClick={() => { setLevel('easy'); sounds.playClick(); }}
          className={`px-2 py-0.5 rounded ${level === 'easy' ? 'bg-amber-400 text-stone-900 font-bold' : 'opacity-70'}`}
        >
          Mudah
        </button>
        <button
          onClick={() => { setLevel('medium'); sounds.playClick(); }}
          className={`px-2 py-0.5 rounded ${level === 'medium' ? 'bg-amber-400 text-stone-900 font-bold' : 'opacity-70'}`}
        >
          Kumon Sedang
        </button>
        <button
          onClick={() => { setLevel('sempoa10'); sounds.playClick(); }}
          className={`px-2 py-0.5 rounded ${level === 'sempoa10' ? 'bg-amber-400 text-stone-900 font-bold' : 'opacity-70'}`}
        >
          👑 Level 10 Sempoa
        </button>
      </div>

      {!isPlaying && !gameOver && (
        <div className="space-y-4 py-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-500 mx-auto flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-sm mb-1">Tes Kecepatan Berhitung Mental</div>
            <p className="text-xs opacity-75 max-w-[240px] mx-auto leading-relaxed">
              Tantang kemampuan berhitungmu melawan standar kalkulasi Sempoa Level 10 & Kumon Completer!
            </p>
          </div>
          <button
            onClick={startGame}
            className="px-6 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs tracking-wide transition-all shadow-md"
          >
            Mulai Tantangan (30 Detik)
          </button>
        </div>
      )}

      {isPlaying && (
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-bold px-2">
            <span className="text-rose-500">⏱️ {timeLeft}s</span>
            <span className="flex items-center gap-1 text-amber-500">
              <Flame className="w-3.5 h-3.5" /> Streak {streak}
            </span>
            <span className="text-cyan-500">Skor: {score}</span>
          </div>

          <div className="py-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-inherit">
            <div className="text-3xl font-mono font-extrabold tracking-tight mb-2">
              {problem.text} = ?
            </div>
            <input
              ref={inputRef}
              type="number"
              value={userInput}
              onChange={(e) => handleInput(e.target.value)}
              placeholder="Ketik jawaban..."
              className="w-32 py-1.5 px-3 text-center text-lg font-mono font-bold rounded-lg border border-amber-400/50 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              autoFocus
            />
          </div>
        </div>
      )}

      {gameOver && (
        <div className="space-y-3 py-2">
          <Trophy className="w-10 h-10 text-amber-400 mx-auto animate-bounce" />
          <div>
            <div className="text-sm font-bold">Waktu Habis!</div>
            <div className="text-2xl font-mono font-extrabold text-amber-500 my-1">
              Skor: {score}
            </div>
            <p className="text-xs opacity-75">
              {score >= 100
                ? '🔥 Luar biasa! Kecepatan mental kalkulasimu setara lulusan Sempoa Level 10!'
                : score >= 50
                ? '⚡ Keren! Refleks berhitungmu sangat tajam.'
                : 'Bagus! Latih terus kecepatan fokus berhitungmu.'}
            </p>
          </div>
          <button
            onClick={startGame}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Main Lagi
          </button>
        </div>
      )}
    </div>
  );
}

// 🐍 2. RETRO SNAKE GAME
function SnakeGame() {
  const GRID_SIZE = 14;
  const [snake, setSnake] = useState([[5, 5], [5, 4], [5, 3]]);
  const [food, setFood] = useState([8, 8]);
  const [dir, setDir] = useState([0, 1]); // down, up, right, left
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    sounds.playClick();
    setSnake([[5, 5], [5, 4], [5, 3]]);
    setFood([Math.floor(Math.random() * GRID_SIZE), Math.floor(Math.random() * GRID_SIZE)]);
    setDir([0, 1]);
    setScore(0);
    setGameOver(false);
    setIsRunning(true);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!isRunning) return;
      if (e.key === 'ArrowUp' && dir[0] !== 1) setDir([-1, 0]);
      if (e.key === 'ArrowDown' && dir[0] !== -1) setDir([1, 0]);
      if (e.key === 'ArrowLeft' && dir[1] !== 1) setDir([0, -1]);
      if (e.key === 'ArrowRight' && dir[1] !== -1) setDir([0, 1]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dir, isRunning]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = [prevSnake[0][0] + dir[0], prevSnake[0][1] + dir[1]];

        // Wall collision wrap-around
        if (head[0] < 0) head[0] = GRID_SIZE - 1;
        if (head[0] >= GRID_SIZE) head[0] = 0;
        if (head[1] < 0) head[1] = GRID_SIZE - 1;
        if (head[1] >= GRID_SIZE) head[1] = 0;

        // Self collision
        for (let segment of prevSnake) {
          if (segment[0] === head[0] && segment[1] === head[1]) {
            setGameOver(true);
            setIsRunning(false);
            return prevSnake;
          }
        }

        const newSnake = [head, ...prevSnake];
        if (head[0] === food[0] && head[1] === food[1]) {
          sounds.playPop();
          setScore((s) => s + 10);
          setFood([Math.floor(Math.random() * GRID_SIZE), Math.floor(Math.random() * GRID_SIZE)]);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 140);
    return () => clearInterval(interval);
  }, [dir, food, isRunning]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-[210px] text-xs font-mono font-bold mb-2">
        <span className="text-emerald-500">Skor: {score}</span>
        <span className="opacity-60 text-[10px]">Arrow Keys / Tap</span>
      </div>

      {/* Grid Canvas */}
      <div 
        className="w-[210px] h-[210px] rounded-xl bg-black/10 dark:bg-black/40 border border-inherit p-1 grid gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${GRID_SIZE}, minmax(0, 1fr))`
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
          const r = Math.floor(idx / GRID_SIZE);
          const c = idx % GRID_SIZE;
          const isHead = snake[0][0] === r && snake[0][1] === c;
          const isBody = snake.some((seg) => seg[0] === r && seg[1] === c);
          const isFood = food[0] === r && food[1] === c;

          return (
            <div
              key={idx}
              className={`rounded-[2px] transition-colors ${
                isHead
                  ? 'bg-emerald-400 shadow-sm'
                  : isBody
                  ? 'bg-emerald-600/80'
                  : isFood
                  ? 'bg-rose-500 animate-pulse'
                  : 'bg-transparent'
              }`}
            />
          );
        })}
      </div>

      {/* Action / Controls */}
      <div className="mt-3 flex items-center gap-2">
        {!isRunning ? (
          <button
            onClick={resetGame}
            className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{gameOver ? 'Mulai Ulang' : 'Mulai Main'}</span>
          </button>
        ) : (
          <div className="flex gap-1">
            <button onClick={() => dir[0] !== 1 && setDir([-1, 0])} className="w-8 h-8 rounded bg-black/10 dark:bg-white/10 font-bold text-xs">↑</button>
            <button onClick={() => dir[1] !== 1 && setDir([0, -1])} className="w-8 h-8 rounded bg-black/10 dark:bg-white/10 font-bold text-xs">←</button>
            <button onClick={() => dir[0] !== -1 && setDir([1, 0])} className="w-8 h-8 rounded bg-black/10 dark:bg-white/10 font-bold text-xs">↓</button>
            <button onClick={() => dir[1] !== -1 && setDir([0, 1])} className="w-8 h-8 rounded bg-black/10 dark:bg-white/10 font-bold text-xs">→</button>
          </div>
        )}
      </div>
    </div>
  );
}

