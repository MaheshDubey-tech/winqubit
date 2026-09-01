  lp = ({ onNavigate: y, onOpenCollaborate: D, onOpenJoin: M }) =>
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
                  children: "Ecosystem & Campus Alliance",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Our ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Partners",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "WINQubit unites academic powerhouses, incubation ventures, and industry leaders to create an unmatched innovation playground.",
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
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-cyan-400",
                      children: "Academic Pillars",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Institutional Partners",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "Higher education institutes in Mumbai powering WINQubit innovation chapters on campus.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 gap-4",
              children: Va.map((o) =>
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
                                  "font-display text-xl font-bold text-white",
                                children: o.shortName,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-[10px] font-mono px-3 py-0.5 rounded-full bg-slate-900 text-gray-400 border border-white/5",
                                children: ["Est. ", o.established],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-0.5",
                            children: o.name,
                          }),
                          n.jsx("div", {
                            className:
                              "text-xs font-semibold text-violet-400 mb-2",
                            children: o.tagline,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-4",
                            children: o.description,
                          }),
                          n.jsxs("div", {
                            className:
                              "p-3.5 rounded-xl bg-slate-900/60 border border-white/5 mb-4 text-xs text-gray-300",
                            children: [
                              n.jsx("div", {
                                className:
                                  "font-bold text-gray-300 text-[11px] mb-1",
                                children: "Campus Governance:",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between items-center text-[10px] text-gray-400",
                                children: [
                                  n.jsx("span", {
                                    children: "Principal + 2 Faculty Mentors",
                                  }),
                                  n.jsx("span", {
                                    className: "text-cyan-400 font-mono",
                                    children: "5 Student Leads",
                                  }),
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
                            onClick: () => y("leadership"),
                            className:
                              "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:underline",
                            children: "View Campus Committee →",
                          }),
                          n.jsx("span", {
                            className: "text-[10px] text-gray-500 font-mono",
                            children: o.campusLocation,
                          }),
                        ],
                      }),
                    ],
                  },
                  o.id,
                ),
              ),
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
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20",
                      children: [
                        n.jsx(An, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        "Venture Incubation Partner",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children: "InQubit Venture Incubator",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "InQubit serves as the formal incubation partner for WINQubit. Once student prototypes pass validation and initial user testing through our campus committees, InQubit provides legal company incorporation, angel seed checks, institutional co-working desks, and commercial distribution partnerships.",
                    }),
                    n.jsxs("div", {
                      className: "grid sm:grid-cols-3 gap-3 pt-1",
                      children: [
                        n.jsxs("div", {
                          className:
                            "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white mb-1",
                              children: "Pre-Seed Capital",
                            }),
                            n.jsx("div", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed",
                              children:
                                "Direct investment routes for vetted student-led ventures.",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white mb-1",
                              children: "Corporate Pilots",
                            }),
                            n.jsx("div", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed",
                              children:
                                "Introductions to enterprises for paid POC testing.",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white mb-1",
                              children: "Global Launch",
                            }),
                            n.jsx("div", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed",
                              children:
                                "Representations at national & international expos.",
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
                        "w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 mx-auto mb-3 flex items-center justify-center font-display text-2xl font-extrabold text-white",
                      children: "Q",
                    }),
                    n.jsx("div", {
                      className: "text-base font-bold text-white",
                      children: "InQubit Labs",
                    }),
                    n.jsx("div", {
                      className: "text-xs text-gray-400 mb-4 font-mono",
                      children: "Strategic Pre-Incubation Partner",
                    }),
                    n.jsx("button", {
                      onClick: D,
                      className:
                        "w-full py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                      children: "Inquire About Incubation",
                    }),
                  ],
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
                    n.jsx("div", {
                      className: "h-[1px] w-8 bg-emerald-500/30",
                    }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-emerald-400",
                      children: "How It Works",
                    }),
                    n.jsx("div", {
                      className: "h-[1px] w-8 bg-emerald-500/30",
                    }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Partner Onboarding Flow",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
              children: [
                {
                  step: "01",
                  title: "Submit Proposal",
                  desc: "Institutions or corporates fill out the online collaboration brief.",
                },
                {
                  step: "02",
                  title: "Management Alignment",
                  desc: "The Central Committee reviews scope, resources, and alignment.",
                },
                {
                  step: "03",
                  title: "MoU & Chapter Charter",
                  desc: "Formalize agreement and appoint Faculty & Student Leadership.",
                },
                {
                  step: "04",
                  title: "Launch & Kickoff",
                  desc: "Commence multi-campus access, hackathons, and micro-grant disbursements.",
                },
              ].map((o, j) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left",
                    children: [
                      n.jsx("div", {
                        className:
                          "font-mono text-xl font-bold text-cyan-400 mb-1",
                        children: o.step,
                      }),
                      n.jsx("div", {
                        className:
                          "font-bold text-xs sm:text-sm text-white mb-1",
                        children: o.title,
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children: o.desc,
                      }),
                    ],
                  },
                  j,
                ),
              ),
            }),
            n.jsx("div", {
              className: "mt-8 text-center",
              children: n.jsx("button", {
                onClick: D,
                className:
                  "px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-emerald-500/20",
                children: "Partner With Us (MoU Inquiries)",
              }),
            }),
          ],
        }),
      ],
    }),