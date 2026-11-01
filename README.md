# Daksh // 3D Spatial Web Portfolio

> A futuristic, production-ready 3D spatial portfolio web experience built with **Next.js (App Router)**, **React Three Fiber (R3F)**, **Three.js**, **@react-three/drei**, **Tailwind CSS**, and **GSAP**.

---

## ⚡ Architecture & Spatial UX

- **3D Spatial Tunnel Navigation**: As the user scrolls, the camera traverses in 3D coordinates along the X, Y, and Z axes using Drei `ScrollControls` and `useScroll()`, smoothly passing through 6 distinct spatial zones.
- **Theme & Aesthetics**: Obsidian Black (`#050505`), Electric Yellow (`#FFE600`), and Sky Blue/Cyan (`#00E5FF`) with glassmorphism, dynamic point lights, and floating cyber wireframes.
- **Interactive Cyber Ambience**: Web Audio API ambient drone synthesizer (no external asset dependencies) toggleable directly in the HUD navbar.
- **Custom Dual-Ring Cursor**: Fine-pointer magnetic crosshair with reactive scale transitions on interactive targets.
- **Interactive Contact Endpoint**: Next.js App Router API (`/api/contact`) with full payload validation, structured audit tokens, and celebratory confetti effects.

---

## 🧭 Spatial Sections & Content

1. **Hero / Central Cyber Core**: Stylized 3D spinning core with dual concentric neon rings, quick stats, and "Explore Spatial Journey" CTA.
2. **About Me**: Verbatim professional dossier from Newton School of Technology (Rishihood University), technical arsenal pills, and system telemetry.
3. **Hackathons & CTF Arena**: Interactive cards showcasing national achievements including **Codemahotsav 26 CTF (Top 15 Nationally, ₹1,00,000 prize pool)**, **SilverHill Attack/Defense CTF (IIIT Delhi)**, **VOYAGEHACK 4.0**, **Codesprint 2026 (UPES Dehradun)**, **Vibe2Ship (Google AI Studio)**, and more.
4. **Projects Gallery**: Floating 3D spatial cards with live deployment launch links:
   - **Odyssey 20 (Agro Use)**: Agricultural AI & IoT telemetry platform.
   - **Community Hero**: Interactive civic-tech issue resolution tool.
5. **Competitions & Certifications**: Business simulation challenges (Venture Vanguard, Pitch Perfect), Google Gemini AI Challenge, CampusOrbit Chess Championship, and verified NSUT / Unstop credentials.
6. **Encrypted Communications**: Direct email copy utility (`dakshofficial0823@gmail.com`), social channels (LinkedIn, GitHub), and validated contact transmission form.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **3D & Canvas**: React Three Fiber (`@react-three/fiber`), Three.js, `@react-three/drei` (`ScrollControls`, `useScroll`)
- **Animation & Motion**: GSAP, Framer Motion
- **Styling**: Tailwind CSS with custom neon utility classes
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deployment Ready (Vercel)

This project is configured out of the box for immediate deployment on **Vercel**:
1. Push to GitHub.
2. Import repository in [Vercel](https://vercel.com).
3. The build command `npm run build` will compile the optimized production bundles.
