"use client";

import React, { useState, useEffect } from 'react';
import {
    User,
    Target,
    LineChart,
    FileText,
    CheckCircle2,
    Search,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    Clock
} from 'lucide-react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell
} from 'recharts';

export default function PlacementDashboard() {
    const [view, setView] = useState<'student' | 'recruiter'>('student');
    const [students, setStudents] = useState<any[]>([]);
    const [filterScore, setFilterScore] = useState(0);

    useEffect(() => {
        if (view === 'recruiter') {
            fetchStudents();
        }
    }, [view, filterScore]);

    const fetchStudents = async () => {
        const res = await fetch(`/api/students?minScore=${filterScore}`);
        const data = await res.json();
        setStudents(data);
    };

    const radarData = [
        { subject: 'DSA', A: 80, fullMark: 100 },
        { subject: 'System Design', A: 65, fullMark: 100 },
        { subject: 'Communication', A: 90, fullMark: 100 },
        { subject: 'Aptitude', A: 75, fullMark: 100 },
        { subject: 'Core CS', A: 70, fullMark: 100 },
    ];

    return (
        <div className="min-h-screen">
            {/* Top Nav */}
            <nav className="bg-background border-b border-muted py-6 px-10">
                <div className="container-custom flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="text-accent w-8 h-8" />
                        <h1 className="text-2xl font-serif">Readiness OS</h1>
                    </div>
                    <div className="flex bg-muted p-1 gap-1">
                        <button
                            onClick={() => setView('student')}
                            className={`px-6 py-2 text-sm uppercase tracking-widest transition-colors ${view === 'student' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Student Portal
                        </button>
                        <button
                            onClick={() => setView('recruiter')}
                            className={`px-6 py-2 text-sm uppercase tracking-widest transition-colors ${view === 'recruiter' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Recruiter Access
                        </button>
                    </div>
                </div>
            </nav>

            {view === 'student' ? (
                <StudentView radarData={radarData} />
            ) : (
                <RecruiterView students={students} filterScore={filterScore} setFilterScore={setFilterScore} />
            )}
        </div>
    );
}

function StudentView({ radarData }: { radarData: any[] }) {
    return (
        <main className="container-custom py-10">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2 font-bold">In-Progress</p>
                    <h2 className="text-5xl font-serif">Welcome back, Alex.</h2>
                </div>
                <div className="bg-white/50 border border-muted p-6 text-right">
                    <div className="text-sm text-muted-foreground mb-1 uppercase tracking-widest">Hiring Readiness</div>
                    <div className="text-4xl text-accent font-serif">84%</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-10">
                    {/* Progress Section */}
                    <div className="card">
                        <h3 className="text-2xl mb-10">Competency Heatmap</h3>
                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                    <PolarGrid stroke="#D6D3CE" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#111111', fontSize: 12, fontFamily: 'Inter' }} />
                                    <Radar
                                        name="Student"
                                        dataKey="A"
                                        stroke="#8B0000"
                                        fill="#8B0000"
                                        fillOpacity={0.4}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 mt-10 gap-6">
                            <ProgressItem label="DSA Proficiency" percent={80} />
                            <ProgressItem label="Aptitude Mastery" percent={75} />
                        </div>
                    </div>

                    {/* Mock Interview */}
                    <div className="card">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-2xl">Mock Interview Simulation</h3>
                            <Clock className="text-muted-foreground" />
                        </div>
                        <div className="bg-background border border-muted p-10 text-center">
                            <div className="text-accent mb-4">
                                <Target size={40} className="mx-auto" />
                            </div>
                            <h4 className="text-xl mb-4">Technical Assessment #04</h4>
                            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                                Next session focuses on Backend Architecture and Prisma ORM.
                                Prepare for 45 minutes of live coding.
                            </p>
                            <button className="btn-primary uppercase tracking-[0.3em] py-4 px-10 font-bold">Initialize Session</button>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    {/* ATS section */}
                    <div className="card">
                        <h3 className="text-2xl mb-6">ATS Simulator</h3>
                        <div className="border-2 border-dashed border-muted p-10 text-center mb-6">
                            <FileText className="mx-auto mb-4 text-muted-foreground" size={40} />
                            <p className="text-sm uppercase tracking-widest">Drop Resume PDF</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm py-2 border-b border-muted">
                                <span>Last Score:</span>
                                <span className="font-bold">72/100</span>
                            </div>
                            <div className="flex justify-between text-sm py-2 border-b border-muted">
                                <span>Keywords Match:</span>
                                <span className="font-bold text-accent">Low</span>
                            </div>
                        </div>
                        <button className="w-full mt-10 border border-muted py-4 hover:border-accent transition-colors flex justify-center items-center gap-2">
                            Review Analysis <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="bg-accent p-10 text-white">
                        <TrendingUp className="mb-6" />
                        <h3 className="text-2xl mb-4 font-serif">Top 5%</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            You are currently in the top bracket for "Backend Development" roles in your region.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

function RecruiterView({ students, filterScore, setFilterScore }: { students: any[], filterScore: number, setFilterScore: (s: number) => void }) {
    return (
        <main className="container-custom py-10">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-4xl font-serif">Talent Pipeline</h2>
                    <p className="text-muted-foreground mt-2">Filter and select ready candidates for interview.</p>
                </div>
                <div className="flex items-center gap-6">
                    <label className="text-sm uppercase tracking-widest">Min ATS Score</label>
                    <input
                        type="range"
                        min="0" max="100"
                        value={filterScore}
                        onChange={(e) => setFilterScore(parseInt(e.target.value))}
                        className="w-32 accent-accent"
                    />
                    <span className="font-serif text-2xl w-10">{filterScore}</span>
                </div>
            </div>

            <div className="card p-0 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#EBE9E4] text-sm uppercase tracking-[0.2em]">
                        <tr>
                            <th className="p-6">Candidate</th>
                            <th className="p-6">ATS Score</th>
                            <th className="p-6">Index</th>
                            <th className="p-6">Status</th>
                            <th className="p-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-muted">
                        {students.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-20 text-center text-muted-foreground font-sans">
                                    No candidates matching current criteria.
                                </td>
                            </tr>
                        ) : (
                            students.map(s => (
                                <tr key={s.id} className="hover:bg-white/50 transition-colors">
                                    <td className="p-6">
                                        <div className="text-lg font-bold">{s.name}</div>
                                        <div className="text-xs text-muted-foreground font-sans">{s.email}</div>
                                    </td>
                                    <td className="p-6">
                                        <div className="w-32 bg-muted h-1 rounded-full overflow-hidden">
                                            <div className="bg-accent h-full" style={{ width: `${s.atsScore}%` }}></div>
                                        </div>
                                        <div className="text-xs mt-1">{s.atsScore}%</div>
                                    </td>
                                    <td className="p-6 font-serif text-xl">{s.readinessIndex.toFixed(1)}</td>
                                    <td className="p-6">
                                        <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-accent/10 text-accent font-bold">Ready</span>
                                    </td>
                                    <td className="p-6 text-right">
                                        <button className="text-accent underline uppercase tracking-widest text-xs font-bold">View Profile</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

function ProgressItem({ label, percent }: { label: string, percent: number }) {
    return (
        <div>
            <div className="flex justify-between text-xs uppercase tracking-widest mb-2 font-semibold">
                <span>{label}</span>
                <span>{percent}%</span>
            </div>
            <div className="h-1 bg-muted w-full">
                <div className="h-full bg-accent" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
}
