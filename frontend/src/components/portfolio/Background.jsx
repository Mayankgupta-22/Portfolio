"use client";

import { useEffect, useRef } from "react";

// Syntax-highlighted code fragments that float across the page. The spans use
// the `--foreground` token at low alpha so they read correctly in both themes.
const SNIPPETS = [
  // Personalized — real projects, stack, and achievements. Listed first so they
  // land in the always-visible static positions below.
  '<span class="text-foreground/45 font-medium">const</span> session = <span class="text-foreground/35">getServerSession</span>(authOptions)',
  '<span class="text-foreground/45 font-medium">await</span> User.<span class="text-foreground/35">aggregate</span>(pipeline)',
  'Next.js 16 App Router · Server Components',
  '<span class="text-foreground/35">useMemo</span>(() =&gt; computeDashboardMetrics(data))',
  'Page load time reduced by 40%',
  'API response time ↓ 62%',
  'HRMS Portal · 500+ employees · 99.5% uptime',
  '<span class="text-foreground/45 font-medium">async</span> <span class="text-foreground/35">connectDB</span>(MONGO_URI)',
  'MongoDB aggregation pipeline optimized',
  'Tailwind CSS v4 · shadcn/ui · Radix UI',
  '<span class="text-foreground/35">React.memo</span>(CampaignCard)',
  'Unnecessary re-renders ↓ 45%',
  '<span class="text-foreground/45 font-medium">const</span> { data } = <span class="text-foreground/35">useSession</span>()',
  'Zod schema validation passed ✓',
  'JWT auth + role-based access control',
  'React Suspense boundary mounted ✓',
  '<span class="text-foreground/35">useCallback</span>(handleSubmit, [deps])',
  '20+ reusable components shipped',
  'Atomic design system v1.0',
  'Brand &amp; Creator dual-role auth',
  'Skeleton loader · layout shift eliminated',
  '<span class="text-foreground/45 font-medium">await</span> cloudinary.<span class="text-foreground/35">uploader</span>.upload(file)',
  'Code splitting · 40% faster loads',
  '<span class="text-foreground/35">useForm</span>({ resolver: zodResolver(schema) })',
  'Protected route middleware active',
  '4-step onboarding · session storage persisted',
  'CollabXSphere deployed on Vercel ✓',
  'RESTful API · CRUD operations ready',
  '<span class="text-foreground/45 font-medium">await</span> bcrypt.<span class="text-foreground/35">compare</span>(password, hash)',
  'LeetCode: 100+ problems solved (C++)',
  'Smart India Hackathon 2024 · Finalist',
  'SSR hydration completed ✓',
  'MongoDB indexes · query time optimized',
  'shadcn/ui design tokens applied',
  'CI/CD pipeline passed ✓',

  // Generic code fragments, for extra drift variety.
  '<span class="text-foreground/45 font-medium">const</span> [count, setCount] = <span class="text-foreground/35">useState</span>(<span class="text-foreground/30">0</span>)',
  '<span class="text-foreground/45 font-medium">const</span> memo = <span class="text-foreground/35">useMemo</span>(() =&gt; expensive(), [deps])',
  '<span class="text-foreground/45 font-medium">const</span> ref = <span class="text-foreground/35">useRef</span>(<span class="text-foreground/45 font-medium">null</span>)',
  '<span class="text-foreground/35">useEffect</span>(() =&gt; { <span class="text-foreground/30">/* mount */</span> }, [])',
  '<span class="text-foreground/45 font-medium">const</span> add = (a, b) =&gt; a + b',
  '<span class="text-foreground/45 font-medium">function</span> <span class="text-foreground/35">hoisted</span>() { <span class="text-foreground/45 font-medium">return</span> <span class="text-foreground/30">"lifted up"</span> }',
  '<span class="text-foreground/45 font-medium">const</span> cb = <span class="text-foreground/35">useCallback</span>(fn, [deps])',
  '<span class="text-foreground/45 font-medium">async</span> <span class="text-foreground/45 font-medium">function</span>* gen() { <span class="text-foreground/45 font-medium">yield</span> 42 }',
  '[...arr].<span class="text-foreground/35">map</span>(x =&gt; x * <span class="text-foreground/30">2</span>)',
  '<span class="text-foreground/45 font-medium">const</span> { a, b, ...rest } = obj',
  '<span class="text-foreground/45 font-medium">await</span> <span class="text-foreground/35">Promise</span>.all(tasks)',
  '<span class="text-foreground/45 font-medium">try</span> { ... } <span class="text-foreground/45 font-medium">catch</span> (e) { ... }',
  '<span class="text-foreground/45 font-medium">export default</span> <span class="text-foreground/45 font-medium">function</span> App() {}',
  '<span class="text-foreground/45 font-medium">import</span> { useState } <span class="text-foreground/45 font-medium">from</span> <span class="text-foreground/30">"react"</span>',
  '<span class="text-foreground/45 font-medium">if</span> (cond) <span class="text-foreground/45 font-medium">return</span> &lt;div /&gt;',
  '<span class="text-foreground/35">setTimeout</span>(() =&gt; resolve(), <span class="text-foreground/30">1000</span>)',
  '<span class="text-foreground/45 font-medium">class</span> Node <span class="text-foreground/45 font-medium">extends</span> Tree {}',
  '<span class="text-foreground/45 font-medium">const</span> sum = arr.<span class="text-foreground/35">reduce</span>((a, b) =&gt; a + b, <span class="text-foreground/30">0</span>)',
  '<span class="text-foreground/45 font-medium">type</span> Props = { id: <span class="text-foreground/45 font-medium">string</span> }',
  '<span class="text-foreground/45 font-medium">interface</span> User { name: <span class="text-foreground/45 font-medium">string</span> }',
  '<span class="text-foreground/45 font-medium">return</span> () =&gt; cleanup()',
  '<span class="text-foreground/35">fetch</span>(<span class="text-foreground/30">"/api/users"</span>).then(<span class="text-foreground/35">json</span>)',
  'arr?.<span class="text-foreground/35">filter</span>(Boolean) ?? []',
  '<span class="text-foreground/45 font-medium">const</span> ctx = <span class="text-foreground/35">useContext</span>(AuthCtx)',
  '<span class="text-foreground/45 font-medium">while</span> (queue.length) { ... }',
  '<span class="text-foreground/35">console</span>.log(<span class="text-foreground/30">`val: ${x}`</span>)',
  'git commit -m <span class="text-foreground/30">"ship it"</span>',
];

// Anchored snippets that sit still and breathe via the fade-pulse animation.
const STATIC_POSITIONS = [
  { top: "8%", left: "4%" },
  { top: "14%", right: "6%" },
  { top: "32%", left: "2%" },
  { top: "38%", right: "4%" },
  { top: "55%", left: "5%" },
  { top: "62%", right: "8%" },
  { top: "78%", left: "3%" },
  { top: "85%", right: "5%" },
  { top: "22%", left: "48%" },
  { top: "70%", left: "52%" },
];

const SNIPPET_BASE =
  "absolute font-mono whitespace-nowrap select-none text-foreground/15 will-change-[transform,opacity] [text-shadow:0_0_14px_color-mix(in_oklch,var(--foreground)_8%,transparent)]";

export default function Background() {
  const codeLayerRef = useRef(null);

  useEffect(() => {
    const layer = codeLayerRef.current;
    if (!layer) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const spawned = [];
    const timers = [];

    // Static, slowly pulsing snippets scattered around the edges.
    STATIC_POSITIONS.forEach((pos, i) => {
      const el = document.createElement("div");
      el.className = SNIPPET_BASE;
      el.innerHTML = SNIPPETS[i % SNIPPETS.length];
      Object.assign(el.style, pos);
      el.style.fontSize = `${(11 + Math.random() * 4).toFixed(0)}px`;
      if (!reduceMotion) {
        el.style.animation = `code-fade-pulse ${(6 + Math.random() * 6).toFixed(
          2
        )}s ease-in-out ${(Math.random() * 4).toFixed(2)}s infinite`;
      }
      layer.appendChild(el);
      spawned.push(el);
    });

    // Drifting snippets that float upward and across the viewport.
    function spawnDriftSnippet() {
      const el = document.createElement("div");
      el.className = SNIPPET_BASE;
      el.innerHTML = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];

      const driftX = (Math.random() - 0.5) * 200;
      const driftR = (Math.random() - 0.5) * 8;
      const duration = 22 + Math.random() * 18;

      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = "0";
      el.style.setProperty("--drift-x", `${driftX}px`);
      el.style.setProperty("--drift-r", `${driftR}deg`);
      el.style.animation = `code-drift-up ${duration}s linear forwards`;
      el.style.fontSize = `${(11 + Math.random() * 4).toFixed(0)}px`;
      el.style.opacity = (0.04 + Math.random() * 0.05).toFixed(2);

      layer.appendChild(el);
      spawned.push(el);
      timers.push(
        setTimeout(() => {
          el.remove();
          const idx = spawned.indexOf(el);
          if (idx !== -1) spawned.splice(idx, 1);
        }, duration * 1000)
      );
    }

    let interval;
    if (!reduceMotion) {
      for (let i = 0; i < 6; i++) {
        timers.push(setTimeout(spawnDriftSnippet, i * 2000));
      }
      interval = setInterval(spawnDriftSnippet, 3500);
    }

    return () => {
      if (interval) clearInterval(interval);
      timers.forEach(clearTimeout);
      spawned.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft drifting blobs */}
      <div className="absolute -top-24 -left-24 size-[500px] rounded-full bg-foreground/5 blur-[100px] motion-safe:animate-[blob-float_20s_ease-in-out_infinite]" />
      <div className="absolute top-[30%] -right-24 size-[400px] rounded-full bg-foreground/4 blur-[100px] motion-safe:animate-[blob-float_20s_ease-in-out_-5s_infinite]" />
      <div className="absolute -bottom-12 left-[30%] size-[350px] rounded-full bg-foreground/5 blur-[100px] motion-safe:animate-[blob-float_20s_ease-in-out_-10s_infinite]" />

      {/* Faint grid for a touch of structure */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Imperatively-spawned code snippets land here */}
      <div ref={codeLayerRef} className="absolute inset-0" />
    </div>
  );
}
