  ap = ({ onNavigate: y, onOpenInnovate: D, onOpenCollaborate: M }) => {
    const [o, j] = se.useState(Ar[0]);
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
                  children: "Multidisciplinary Domains",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Innovation ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Areas",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "From cutting-edge drone avionics to AI agents, food engineering, and sustainable energy, WINQubit supports multidisciplinary cross-campus collaboration.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "grid lg:grid-cols-12 gap-6 items-start",
            children: [
              n.jsxs("div", {
                className: "lg:col-span-5 space-y-2",
                children: [
                  n.jsx("div", {
                    className:
                      "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 px-2",
                    children: "Select an Innovation Cluster",
                  }),
                  Ar.map((E) => {
                    const v = o.id === E.id;
                    return n.jsxs(
                      "button",
                      {
                        onClick: () => j(E),
                        className: `w-full p-4 rounded-2xl text-left transition flex items-center justify-between border ${v ? "bg-slate-900/90 border-violet-500/60 shadow-lg text-white" : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15 hover:text-white"}`,
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-[9px] font-mono text-cyan-400 mb-0.5",
                                children: E.id.toUpperCase(),
                              }),
                              n.jsx("div", {
                                className:
                                  "font-bold text-xs sm:text-sm leading-snug",
                                children: E.title,
                              }),
                            ],
                          }),
                          n.jsx($m, {
                            className: `w-4 h-4 ${v ? "text-cyan-400" : "text-gray-600"}`,
                          }),
                        ],
                      },
                      E.id,
                    );
                  }),
                ],
              }),
              n.jsx("div", {
                className: "lg:col-span-7",
                children: n.jsxs("div", {
                  className:
                    "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 relative overflow-hidden space-y-5",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between border-b border-white/5 pb-3",
                      children: [
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-mono",
                          children: "CLUSTER SPECIFICATION",
                        }),
                        n.jsx("span", {
                          className: "text-[10px] text-gray-500 font-mono",
                          children: "WINQubit × InQubit Scope",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("h3", {
                          className:
                            "text-xl sm:text-2xl font-bold text-white mb-1.5",
                          children: o.title,
                        }),
                        n.jsx("p", {
                          className: "text-xs text-gray-300 leading-relaxed",
                          children: o.description,
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("div", {
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2",
                          children: "Subfields & Technology Tracks",
                        }),
                        n.jsx("div", {
                          className: "flex flex-wrap gap-1.5",
                          children: o.subfields.map((E, v) =>
                            n.jsx(
                              "span",
                              {
                                className:
                                  "px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] font-mono text-gray-300",
                                children: E,
                              },
                              v,
                            ),
                          ),
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("div", {
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2",
                          children:
                            "Sample Open Problem Statements for 2026-27",
                        }),
                        n.jsx("div", {
                          className: "space-y-2",
                          children: o.sampleProblems.map((E, v) =>
                            n.jsxs(
                              "div",
                              {
                                className:
                                  "p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5",
                                children: [
                                  n.jsx(Ki, {
                                    className:
                                      "w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "text-xs text-gray-300 leading-relaxed",
                                    children: E,
                                  }),
                                ],
                              },
                              v,
                            ),
                          ),
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3",
                      children: [
                        n.jsxs("button", {
                          onClick: D,
                          className:
                            "w-full sm:w-auto px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-cyan-400/20 flex items-center justify-center gap-2",
                          children: [
                            n.jsx(Ki, { className: "w-3.5 h-3.5" }),
                            n.jsxs("span", {
                              children: [
                                "Submit Solution in ",
                                o.title.split("&")[0],
                              ],
                            }),
                          ],
                        }),
                        n.jsx("button", {
                          onClick: M,
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white",
                          children: "Bring Corporate Challenge →",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: [
              n.jsxs("div", {
                className: "text-center max-w-2xl mx-auto mb-8",
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
                        children: "Interdisciplinary Power",
                      }),
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl font-bold text-white mt-1",
                    children: "Cross-Campus Synergy Matrix",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 mt-1",
                    children:
                      "Why our 4-institution ecosystem creates unique advantages that single-discipline colleges cannot replicate.",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "TSEC + TIAT",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-cyan-400 font-bold mb-1.5",
                        children: "Autonomous Drone Logistics",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "Software & AI algorithms from TSEC paired with aircraft maintenance and aerodynamics testing at TIAT.",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "TSEC + TIHM",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-violet-400 font-bold mb-1.5",
                        children: "Smart Kitchen Robotics",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "Robotics automation from TSEC deployed in real culinary environments and food labs at TIHM.",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "TSDC + TSEC",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-emerald-400 font-bold mb-1.5",
                        children: "FinTech & Media AI",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "Media communications & financial analysis from TSDC merged with machine learning pipelines from TSEC.",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "All 4 + InQubit",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-pink-400 font-bold mb-1.5",
                        children: "Venture Incubation",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "A unified gateway from campus discovery to institutional seed funding and market scaling.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },