  ep = ({ onNavigate: y, onOpenJoin: D, onOpenInnovate: M }) => {
    const [o, j] = se.useState(0),
      E = (S) => {
        j(o === S ? null : S);
      },
      v = [
        {
          title: "Lab & Equipment Access",
          desc: "Access maker labs across all 4 institutions including 3D printing filaments, drone bays, CNC machines, and IoT sensor kits.",
          icon: Dr,
          color: "text-cyan-400",
        },
        {
          title: "Prototype Micro-Grants",
          desc: "Qualify for zero-equity seed funding ranging from ₹10,000 to ₹1,00,000 to buy microcontrollers, raw materials, and components.",
          icon: If,
          color: "text-emerald-400",
        },
        {
          title: "1-on-1 Mentorship Hours",
          desc: "Bi-weekly clinics with faculty advisors, startup founders, patent attorneys, and technical domain specialists.",
          icon: Mn,
          color: "text-violet-400",
        },
        {
          title: "Sponsored Cloud & AI APIs",
          desc: "Free credits for cloud computing instances (AWS, GCP), OpenAI/Gemini developer endpoints, and GitHub Enterprise tools.",
          icon: wr,
          color: "text-amber-400",
        },
        {
          title: "Patent & Research Support",
          desc: "Institutional prior art searches, provisional patent drafting subsidies, and IEEE/Scopus journal publishing guidance.",
          icon: zr,
          color: "text-pink-400",
        },
        {
          title: "Fast-Track InQubit Incubation",
          desc: "Top prototypes receive direct entry into InQubit for seed investment, private limited incorporation, and client pilots.",
          icon: An,
          color: "text-sky-400",
        },
      ],
      H = [
        {
          role: "Technology Lead",
          desc: "Oversees software architecture, hardware prototyping kits, and technical workshops on campus.",
          icon: wr,
          skills: ["Full Stack Dev", "Embedded IoT", "AI Engineering"],
        },
        {
          role: "Marketing & Social Media Lead",
          desc: "Drives brand storytelling, event promotion, video creation, and community buzz across social channels.",
          icon: Eh,
          skills: ["Content Tech", "Video Editing", "Brand Growth"],
        },
        {
          role: "Operations Lead",
          desc: "Manages event schedules, hackathon logistics, lab booking workflows, and volunteer teams.",
          icon: Pf,
          skills: ["Sprint Planning", "Logistics", "Team Management"],
        },
        {
          role: "Networking & Partnerships Lead",
          desc: "Connects with corporate alumni, invites industry guest speakers, and scouts inter-college talent.",
          icon: Mn,
          skills: ["Public Speaking", "Corporate Outreach", "Pitching"],
        },
        {
          role: "Finance & Grants Lead",
          desc: "Monitors prototype micro-grant disbursement, hardware BOM auditing, and budget compliance.",
          icon: If,
          skills: ["Financial Modeling", "Cost Auditing", "Budgeting"],
        },
      ];
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Student Innovator Hub",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Start With ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "An Idea",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed mb-6 font-mono",
              children:
                "“You don't need a startup. You just need a problem worth solving.”",
            }),
            n.jsxs("div", {
              className: "flex flex-wrap justify-center gap-3",
              children: [
                n.jsx("button", {
                  onClick: D,
                  className:
                    "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/20",
                  children: "Get ₹500 Annual Pass",
                }),
                n.jsx("button", {
                  onClick: M,
                  className:
                    "px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-[10px] uppercase tracking-wider transition",
                  children: "Submit Idea / Find Team",
                }),
              ],
            }),
          ],
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-1",
                  children: [
                    n.jsx("div", { className: "h-[1px] w-8 bg-violet-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                      children: "Member Privileges",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-violet-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "What You Get as a WINQubit Member",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "A single ₹500 annual membership unlocks complete multi-campus maker infrastructure.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: v.map((S, b) => {
                const z = S.icon;
                return n.jsxs(
                  "div",
                  {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("div", {
                            className:
                              "w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-3",
                            children: n.jsx(z, {
                              className: `w-5 h-5 ${S.color}`,
                            }),
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: S.title,
                          }),
                          n.jsx("p", {
                            className: "text-xs text-gray-400 leading-relaxed",
                            children: S.desc,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500",
                        children: [
                          n.jsx("span", { children: "Included for 2026-27" }),
                          n.jsx("span", {
                            className: "text-emerald-400 font-semibold",
                            children: "✓ Verified Access",
                          }),
                        ],
                      }),
                    ],
                  },
                  b,
                );
              }),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-7 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                      children: [
                        n.jsx(Ji, { className: "w-3.5 h-3.5" }),
                        " High-Value Student Pass",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children: "One Pass. Endless Innovation.",
                    }),
                    n.jsx("p", {
                      className:
                        "text-xs sm:text-sm text-gray-300 leading-relaxed",
                      children:
                        "For less than the price of a single textbook, the ₹500 annual membership gives you full year-long credentials across TSEC, TSDC, TIAT, and TIHM labs, direct prototype micro-grant eligibility, and entry into hackathons.",
                    }),
                    n.jsxs("div", {
                      className:
                        "grid sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-1",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " Multi-campus maker lab pass",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " ₹1,00,000 POC Grant screening",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " 1-on-1 CTO & Founder office hours",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " InQubit Pre-Incubation Certificate",
                          ],
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "pt-2",
                      children: n.jsxs("button", {
                        onClick: D,
                        className:
                          "px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2",
                        children: [
                          n.jsx(Wf, { className: "w-3.5 h-3.5" }),
                          " Join for ₹500 / Academic Year",
                        ],
                      }),
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "lg:col-span-5",
                  children: n.jsxs("div", {
                    className:
                      "p-6 rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 border border-white/10 shadow-2xl relative overflow-hidden",
                    children: [
                      n.jsxs("div", {
                        className: "flex justify-between items-start mb-6",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-[9px] text-gray-400 uppercase tracking-widest font-mono",
                                children: "STUDENT INNOVATOR PASS",
                              }),
                              n.jsx("div", {
                                className:
                                  "font-display text-lg font-bold text-white mt-0.5",
                                children: "WINQubit × InQubit",
                              }),
                            ],
                          }),
                          n.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center font-display font-extrabold text-white text-sm",
                            children: "W",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "space-y-3 mb-5 text-xs",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-[9px] text-gray-400 uppercase tracking-wider",
                                children: "MEMBERSHIP PRIVILEGES",
                              }),
                              n.jsx("div", {
                                className:
                                  "text-gray-200 text-xs font-semibold",
                                children:
                                  "TSEC • TSDC • TIAT • TIHM Shared Labs",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-xs",
                            children: [
                              n.jsxs("div", {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-wider",
                                    children: "ANNUAL FEE",
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "text-emerald-400 font-bold text-sm font-mono",
                                    children: "₹500 / Year",
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-wider",
                                    children: "CYCLE",
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "text-gray-200 font-mono text-xs",
                                    children: "2026 – 2027",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between text-[9px] text-gray-400 font-mono",
                        children: [
                          n.jsx("span", {
                            children: "AUTHORIZED PRE-INCUBATION PASS",
                          }),
                          n.jsx("span", {
                            className: "text-cyan-400",
                            children: "STATUS: VERIFIED",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-1",
                  children: [
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-cyan-400",
                      children: "Lead on Campus",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Student Leadership Committees",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "Each partner campus selects 5 student leaders annually to direct technology, community, operations, and finance.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: H.map((S, b) => {
                const z = S.icon;
                return n.jsxs(
                  "div",
                  {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center gap-3 mb-2.5",
                            children: [
                              n.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400",
                                children: n.jsx(z, { className: "w-4 h-4" }),
                              }),
                              n.jsx("h3", {
                                className: "font-bold text-sm text-white",
                                children: S.role,
                              }),
                            ],
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-3",
                            children: S.desc,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "pt-2.5 border-t border-white/5",
                        children: [
                          n.jsx("div", {
                            className:
                              "text-[9px] text-gray-500 mb-1 uppercase font-semibold",
                            children: "Key Skills Built",
                          }),
                          n.jsx("div", {
                            className: "flex flex-wrap gap-1",
                            children: S.skills.map((U, ae) =>
                              n.jsx(
                                "span",
                                {
                                  className:
                                    "px-2 py-0.5 rounded-full bg-slate-900 border border-white/5 text-[9px] text-cyan-300 font-mono",
                                  children: U,
                                },
                                ae,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  b,
                );
              }),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
              n.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex items-center justify-center space-x-3 mb-1",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                      n.jsx("span", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                        children: "Got Questions?",
                      }),
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl font-bold text-white",
                    children: "Frequently Asked Questions",
                  }),
                ],
              }),
              n.jsx("div", {
                className: "space-y-2.5",
                children: Wh.map((S, b) => {
                  const z = o === b;
                  return n.jsxs(
                    "div",
                    {
                      className:
                        "rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition",
                      children: [
                        n.jsxs("button", {
                          onClick: () => E(b),
                          className:
                            "w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-cyan-300 transition",
                          children: [
                            n.jsx("span", { children: S.q }),
                            z
                              ? n.jsx(eh, {
                                  className: "w-4 h-4 text-cyan-400 shrink-0",
                                })
                              : n.jsx(Wm, {
                                  className: "w-4 h-4 text-gray-500 shrink-0",
                                }),
                          ],
                        }),
                        z &&
                          n.jsx("div", {
                            className:
                              "px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-3",
                            children: S.a,
                          }),
                      ],
                    },
                    b,
                  );
                }),
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 max-w-xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Ready to Build Something Real?",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400",
                children:
                  "Join 500+ student innovators across Mumbai. Claim your annual pass and start building today.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Get Member Pass (₹500)",
                  }),
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Submit Idea",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  tp = ({
    onNavigate: y,
    onOpenInnovate: D,
    onOpenJoin: M,
    onOpenCollaborate: o,
  }) =>
    n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Structured Incubation Tracks",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "WINQubit ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Programs",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "From first-year hackathons to deep-tech patent filings and venture creation with InQubit, explore our core flagship programs.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: Jh.map((j) =>
              n.jsxs(
                "div",
                {
                  className:
                    "p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center justify-between mb-3",
                          children: [
                            n.jsx("span", {
                              className:
                                "text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-white/5 font-mono",
                              children: j.category,
                            }),
                            n.jsx("span", {
                              className: "text-[10px] text-gray-500 font-mono",
                              children: j.frequency,
                            }),
                          ],
                        }),
                        n.jsx("h3", {
                          className: "text-base font-bold text-white mb-1.5",
                          children: j.title,
                        }),
                        n.jsx("p", {
                          className:
                            "text-xs text-gray-400 leading-relaxed mb-4",
                          children: j.description,
                        }),
                        n.jsxs("div", {
                          className: "space-y-1.5 mb-5",
                          children: [
                            n.jsx("div", {
                              className:
                                "text-[9px] font-bold text-gray-500 uppercase tracking-wider",
                              children: "Key Inclusions",
                            }),
                            j.highlights.map((E, v) =>
                              n.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-2 text-xs text-gray-300",
                                  children: [
                                    n.jsx(vt, {
                                      className:
                                        "w-3.5 h-3.5 text-emerald-400 shrink-0",
                                    }),
                                    n.jsx("span", { children: E }),
                                  ],
                                },
                                v,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "pt-3 border-t border-white/5 flex items-center justify-between",
                      children: [
                        n.jsxs("button", {
                          onClick: D,
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1",
                          children: [
                            "Apply for Track ",
                            n.jsx(Ft, { className: "w-3 h-3" }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "text-[9px] text-gray-500 font-mono",
                          children: "Zero Equity Grant",
                        }),
                      ],
                    }),
                  ],
                },
                j.id,
              ),
            ),
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20",
                      children: [
                        n.jsx(zr, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        "Flagship Funding Initiative",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children: "₹1 Lakh Prototype Micro-Grant Scheme",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "Hardware, cloud infrastructure, and component costs shouldn’t stand between an idea and a working proof-of-concept. The WINQubit Prototype Development fund provides zero-equity seed micro-grants directly to verified student teams across TSEC, TSDC, TIAT, and TIHM.",
                    }),
                    n.jsxs("div", {
                      className: "grid sm:grid-cols-3 gap-3 pt-1",
                      children: [
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "text-gray-400 text-[10px]",
                              children: "Phase 1: Seed",
                            }),
                            n.jsx("div", {
                              className:
                                "font-bold text-white text-sm font-mono",
                              children: "₹10,000 – ₹25,000",
                            }),
                            n.jsx("div", {
                              className: "text-[9px] text-gray-500",
                              children: "Component BOM & Bench Tests",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "text-gray-400 text-[10px]",
                              children: "Phase 2: Scale",
                            }),
                            n.jsx("div", {
                              className:
                                "font-bold text-white text-sm font-mono",
                              children: "₹50,000 – ₹1,00,000",
                            }),
                            n.jsx("div", {
                              className: "text-[9px] text-gray-500",
                              children: "Field Trial & Pilot Testing",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "text-gray-400 text-[10px]",
                              children: "Phase 3: InQubit",
                            }),
                            n.jsx("div", {
                              className:
                                "font-bold text-emerald-400 text-sm font-mono",
                              children: "Institutional Seed",
                            }),
                            n.jsx("div", {
                              className: "text-[9px] text-gray-500",
                              children: "Pvt Ltd Incubation Checks",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "lg:col-span-4 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5",
                  children: [
                    n.jsx("div", {
                      className:
                        "font-display text-4xl font-extrabold text-white mb-1",
                      children: "25",
                    }),
                    n.jsx("div", {
                      className: "text-xs font-bold text-cyan-400 mb-1",
                      children: "Prototypes Targeted (Year 1)",
                    }),
                    n.jsx("p", {
                      className: "text-[10px] text-gray-400 mb-5",
                      children:
                        "Evaluated and awarded on a rolling basis by the WINQubit Management Committee.",
                    }),
                    n.jsx("button", {
                      onClick: D,
                      className:
                        "w-full py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-cyan-400/20",
                      children: "Submit Proposal",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 max-w-xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Have Questions About Track Admissions?",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400",
                children:
                  "Talk directly to your campus Student Leadership Committee or attend the weekly open office hours.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: () => y("leadership"),
                    className:
                      "px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 text-gray-300 font-semibold text-[10px] uppercase tracking-wider transition",
                    children: "Find Campus Mentor",
                  }),
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Get Annual Pass (₹500)",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),