  np = ({ onNavigate: y, onOpenJoin: D, onOpenInnovate: M }) => {
    const [o, j] = se.useState("All"),
      [E, v] = se.useState(null),
      H = [
        "All",
        "Hackathon",
        "Workshop",
        "Conference",
        "Competition",
        "Mentorship",
      ],
      S = o === "All" ? Mr : Mr.filter((z) => z.category === o),
      b = (z) => {
        (v(z),
          setTimeout(() => {
            v(null);
          }, 4e3));
      };
    return n.jsxs("div", {
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
                  children: "Hackathons, Sprints & Mentorship",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Events & ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Opportunities",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "Participate in multi-campus hackathons, prototype showcases, industry challenges, and venture pitch days.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5 relative overflow-hidden",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                      children: [
                        n.jsx(Cr, { className: "w-3.5 h-3.5" }),
                        "Annual Flagship Hackathon",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children:
                        "HackSpark 2026: Multi-Campus Innovation Sprint",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "A 36-hour interdisciplinary hackathon uniting coders from TSEC, science researchers from TSDC, drone engineers from TIAT, and food creators from TIHM. Win from a prize pool of ₹2,50,000 and direct InQubit pre-incubation screening.",
                    }),
                    n.jsxs("div", {
                      className:
                        "flex flex-wrap gap-4 text-xs text-gray-300 pt-1 font-mono",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            n.jsx(Nr, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " October 15–16, 2026",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            n.jsx(Tr, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " TSEC Main Auditorium & Labs",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            n.jsx(Cr, {
                              className: "w-3.5 h-3.5 text-amber-400",
                            }),
                            " ₹2,50,000 Total Prize Pool",
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
                        "text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-1",
                      children: "Registration Status",
                    }),
                    n.jsx("div", {
                      className:
                        "text-lg font-bold text-emerald-400 font-mono mb-4",
                      children: "OPEN FOR ENTRIES",
                    }),
                    n.jsx("button", {
                      onClick: () =>
                        b("HackSpark 2026: Multi-Campus Hackathon"),
                      className:
                        "w-full py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg",
                      children: "Register Your Team",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        E &&
          n.jsxs("div", {
            className:
              "fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-900 border border-emerald-500/50 text-white text-xs shadow-2xl flex items-center gap-3 animate-in fade-in duration-200",
            children: [
              n.jsx(vt, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
              n.jsxs("div", {
                children: [
                  n.jsx("div", {
                    className: "font-bold text-emerald-300",
                    children: "Registration Confirmed!",
                  }),
                  n.jsxs("div", {
                    className: "text-gray-400 text-[11px]",
                    children: [
                      "You are registered for ",
                      E,
                      ". Details sent to member email.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className:
                "flex flex-wrap items-center justify-between gap-4 mb-6",
              children: [
                n.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: H.map((z) =>
                    n.jsx(
                      "button",
                      {
                        onClick: () => j(z),
                        className: `px-4 py-1.5 rounded-full text-xs font-semibold transition ${o === z ? "bg-violet-600 text-white" : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"}`,
                        children: z,
                      },
                      z,
                    ),
                  ),
                }),
                n.jsxs("div", {
                  className: "text-xs text-gray-500 font-mono",
                  children: [
                    "Showing ",
                    n.jsx("span", {
                      className: "text-white font-bold",
                      children: S.length,
                    }),
                    " upcoming sessions",
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: S.map((z) =>
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
                                children: z.category,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-[10px] text-gray-400 flex items-center gap-1 font-mono",
                                children: [
                                  n.jsx(Nr, { className: "w-3 h-3" }),
                                  " ",
                                  z.date,
                                ],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-base font-bold text-white mb-1.5",
                            children: z.title,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-4",
                            children: z.description,
                          }),
                          n.jsxs("div", {
                            className:
                              "space-y-1 text-[11px] text-gray-400 mb-5 bg-slate-900/60 p-3 rounded-xl border border-white/5",
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 text-gray-300",
                                children: [
                                  n.jsx(Tr, {
                                    className: "w-3 h-3 text-violet-400",
                                  }),
                                  n.jsx("span", { children: z.institution }),
                                ],
                              }),
                              z.time &&
                                n.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 text-gray-400 font-mono text-[10px]",
                                  children: [
                                    n.jsx(lh, {
                                      className: "w-3 h-3 text-cyan-400",
                                    }),
                                    n.jsx("span", { children: z.time }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between",
                        children: [
                          n.jsx("button", {
                            onClick: () => b(z.title),
                            className:
                              "px-4 py-1.5 rounded-full bg-violet-600/80 hover:bg-violet-600 text-white font-bold text-[10px] uppercase tracking-wider transition",
                            children: "Register",
                          }),
                          n.jsx("span", {
                            className: "text-[9px] text-gray-500 font-mono",
                            children: "Free for WINQubit Members",
                          }),
                        ],
                      }),
                    ],
                  },
                  z.id,
                ),
              ),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 max-w-xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Want to host an event or workshop?",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400",
                children:
                  "Student committees and partner companies can propose workshops, technical masterclasses, or sponsor hackathon tracks.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 text-gray-300 font-semibold text-[10px] uppercase tracking-wider transition",
                    children: "Submit Idea Proposal",
                  }),
                  n.jsx("button", {
                    onClick: D,
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
    });
  },