'use client';

import React from 'react';
import { Github, Mail, Folder, Gamepad2, Award, Terminal } from 'lucide-react';

export default function Portfolio() {
  const profile = {
    name: "송다훈",
    title: "Game Developer & QA Specialist",
    bio: "게임 메커니즘 설계부터 시뮬레이션 시스템 구현, 데이터 기반 품질 보증(QA)까지 아우르는 신입 개발자입니다.",
    email: "your-email@example.com",
    github: "https://github.com/your-username"
  };

  const projects = [
    {
      title: "약국 경영 시뮬레이션 게임",
      category: "Game Development",
      role: "기획 & 시스템 프로그래밍",
      tech: ["Unity", "C#", "Data Structure"],
      description: "재고 관리, 손님 AI 반응, 경영 루프를 포함한 상점 경영 시뮬레이션 게임의 코어 로직 및 시스템 구조를 설계 및 구현했습니다.",
      highlights: [
        "상점 재고 및 구매 알고리즘 구현",
        "상황별 손님 캐릭터 AI 메커니즘 설계",
        "단계별 개발 마일스톤 수립 및 아키텍처 설계"
      ]
    },
    {
      title: "버섯커 키우기 vs 세븐나이츠 QA 교차 분석",
      category: "Quality Assurance & Analysis",
      role: "QA 분석가",
      tech: ["Game QA", "Combat System Analysis", "Competitive Analysis"],
      description: "방치형 RPG 및 수집형 RPG의 전투 시스템, 원자성(Atomicity), 밸런스 요소를 정밀 비교 분석하여 품질 개선 방안을 제시한 프로젝트입니다.",
      highlights: [
        "모바일 게임 전투 시스템 메커니즘 비교 분석",
        "트랜잭션 및 원자성 개념 기반 품질 메커니즘 검증",
        "경쟁작 UX/UI 및 게임 루프 분석 보고서 작성"
      ]
    }
  ];

  const skills = [
    { category: "Game Development", items: ["C#", "Unity", "Game Architecture", "Simulation Mechanics"] },
    { category: "QA & Analysis", items: ["QA Test Planning", "System Analysis", "Combat Mechanics QA", "Bug Tracking"] },
    { category: "CS & Tools", items: ["Data Structures", "Git / GitHub", "Vercel"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 rounded-full border border-indigo-800/50">
          Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
          안녕하세요, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{profile.name}</span>입니다.
        </h1>
        <p className="text-xl font-medium text-slate-300 mb-6">{profile.title}</p>
        <p className="text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
          {profile.bio}
        </p>

        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-medium rounded-lg transition-colors border border-slate-700"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
          >
            <Mail size={18} /> 이메일 문의
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        
        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Folder className="text-indigo-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Project Experience</h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                    {proj.category}
                  </span>
                  <span className="text-xs text-slate-400">{proj.role}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{proj.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Accomplishments</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    {proj.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-indigo-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Skills & Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-sm font-semibold text-indigo-400 mb-4 tracking-wide">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved. Powered by Next.js & Vercel.
      </footer>
    </div>
  );
}
