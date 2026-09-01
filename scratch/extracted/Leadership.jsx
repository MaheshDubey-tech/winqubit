  Ph = ({ onNavigate: y, onOpenJoin: D, onOpenCollaborate: M }) => {
    const [o, j] = se.useState("tsec"),
      E = Va.find((v) => v.id === o) || Va[0];
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
                  children:
                    "Connecting Academic Excellence with Industry Foresight",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Leadership & ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Governance",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "WINQubit unites a central management board with autonomous campus-level faculty and student innovation committees.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "bg-slate-900/40 rounded-[2rem] border border-white/5 p-6 md:p-8 text-center",
            children: [
              n.jsx("div", {
                className:
                  "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6",
                children: "Ecosystem Governance Architecture",
              }),
              n.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [
                  n.jsx("div", {
                    className:
                      "inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 border border-white/10 text-white shadow-lg shadow-violet-500/20 mb-3",
                    children: n.jsx("div", {
                      className:
                        "font-display font-bold text-sm tracking-wider uppercase",
                      children: "WINQubit Central Ecosystem",
                    }),
                  }),
                  n.jsx("div", {
                    className: "w-[1px] h-6 bg-violet-500/40 mx-auto",
                  }),
                  n.jsxs("div", {
                    className:
                      "inline-block px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-100 shadow-md mb-6",
                    children: [
                      n.jsx("div", {
                        className:
                          "font-bold text-xs text-cyan-400 uppercase tracking-widest",
                        children: "Overall Management Committee",
                      }),
                      n.jsx("div", {
                        className: "text-[11px] text-gray-400 mt-0.5",
                        children:
                          "Mr. Vishram Bapat • Mr. Dhruv Singh • Mr. Harnish Master",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "relative w-full max-w-2xl mx-auto hidden md:block",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] bg-white/10 w-full mb-6",
                      }),
                      n.jsx("div", {
                        className:
                          "absolute top-0 left-0 w-[1px] h-4 bg-white/10 -translate-y-full",
                      }),
                      n.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-[1px] h-4 bg-white/10 -translate-y-full",
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: Va.map((v) =>
                      n.jsxs(
                        "div",
                        {
                          onClick: () => j(v.id),
                          className: `p-3.5 rounded-2xl border text-center cursor-pointer transition ${o === v.id ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-lg shadow-cyan-500/10" : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/20 hover:text-white"}`,
                          children: [
                            n.jsx("div", {
                              className:
                                "font-display font-bold text-xs text-white",
                              children: v.shortName,
                            }),
                            n.jsx("div", {
                              className:
                                "text-[9px] uppercase tracking-wider text-gray-500 mt-0.5",
                              children: "Faculty & Students",
                            }),
                          ],
                        },
                        v.id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-6",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Central Management Board",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-3 gap-5 mb-10",
              children: Vh.map((v) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start space-y-4 hover:border-violet-500/40 transition group",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center space-x-4 w-full",
                        children: [
                          n.jsx("div", {
                            className:
                              "w-14 h-14 rounded-full bg-slate-800 border border-violet-500/50 flex-shrink-0 overflow-hidden",
                            children: n.jsx("img", {
                              src: v.photoUrl,
                              alt: v.name,
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("h3", {
                                className: "text-sm font-bold text-white",
                                children: v.name,
                              }),
                              n.jsx("p", {
                                className:
                                  "text-[10px] text-violet-400 uppercase font-semibold tracking-wider",
                                children: "Management Board",
                              }),
                              n.jsx("p", {
                                className: "text-[10px] text-gray-400",
                                children: v.designation.split("•")[0],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-400 leading-relaxed",
                        children: v.bio,
                      }),
                      n.jsx("div", {
                        className:
                          "flex flex-wrap gap-1.5 pt-2 border-t border-white/5 w-full",
                        children: v.focusAreas.map((H, S) =>
                          n.jsx(
                            "span",
                            {
                              className:
                                "px-2 py-0.5 rounded-full bg-white/[0.04] text-[9px] text-gray-300 border border-white/5 font-mono",
                              children: H,
                            },
                            S,
                          ),
                        ),
                      }),
                    ],
                  },
                  v.id,
                ),
              ),
            }),
            n.jsxs("div", {
              className:
                "p-6 rounded-[2rem] bg-white/[0.02] border border-white/5",
              children: [
                n.jsx("h3", {
                  className:
                    "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 text-center border-b border-white/5 pb-3",
                  children: "Core Mandate & Governance Oversight",
                }),
                n.jsx("div", {
                  className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: Xh.map((v, H) =>
                    n.jsxs(
                      "div",
                      {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center space-x-2.5 mb-1.5",
                            children: [
                              n.jsxs("span", {
                                className:
                                  "w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 text-[10px] font-bold flex items-center justify-center font-mono",
                                children: ["0", H + 1],
                              }),
                              n.jsx("div", {
                                className: "font-bold text-xs text-white",
                                children: v.title,
                              }),
                            ],
                          }),
                          n.jsx("p", {
                            className:
                              "text-[11px] text-gray-400 leading-relaxed pl-7",
                            children: v.description,
                          }),
                        ],
                      },
                      H,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "flex-1 flex flex-col bg-slate-900/40 rounded-[2rem] border border-white/5 p-6 md:p-8",
            children: [
              n.jsx("div", {
                className:
                  "flex items-center justify-center space-x-2 mb-8 flex-wrap gap-y-2",
                children: Va.map((v) => {
                  const H = o === v.id;
                  return n.jsx(
                    "button",
                    {
                      onClick: () => j(v.id),
                      className: `px-6 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${H ? "bg-cyan-500/10 border border-cyan-500/40 text-cyan-400" : "text-gray-500 hover:text-white"}`,
                      children: v.shortName,
                    },
                    v.id,
                  );
                }),
              }),
              n.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "lg:col-span-4 lg:border-r lg:border-white/5 lg:pr-8",
                    children: [
                      n.jsxs("h4", {
                        className:
                          "text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2",
                        children: ["Faculty Committee — ", E.shortName],
                      }),
                      n.jsx("div", {
                        className: "space-y-3",
                        children: E.faculty.map((v, H) =>
                          n.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center space-x-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "w-11 h-11 rounded-xl bg-slate-800 border border-cyan-500/30 overflow-hidden flex-shrink-0",
                                  children: n.jsx("img", {
                                    src: v.photoUrl,
                                    alt: v.name,
                                    className: "w-full h-full object-cover",
                                  }),
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("p", {
                                      className: "text-xs font-bold text-white",
                                      children: v.name,
                                    }),
                                    n.jsx("p", {
                                      className: "text-[9px] text-gray-400",
                                      children: v.designation,
                                    }),
                                    n.jsx("p", {
                                      className:
                                        "text-[9px] text-violet-400 font-semibold",
                                      children: v.roleInWINQubit,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            v.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "lg:col-span-8",
                    children: [
                      n.jsxs("h4", {
                        className:
                          "text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2",
                        children: [
                          "Student Innovation Committee — ",
                          E.shortName,
                        ],
                      }),
                      n.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                        children: E.students.map((v, H) => {
                          const S = [
                              "border-violet-500/30 text-violet-400",
                              "border-cyan-500/30 text-cyan-400",
                              "border-pink-500/30 text-pink-400",
                              "border-emerald-500/30 text-emerald-400",
                              "border-amber-500/30 text-amber-400",
                            ],
                            b = S[H % S.length],
                            [z, U] = b.split(" ");
                          return n.jsxs(
                            "div",
                            {
                              className:
                                "bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-center hover:border-white/20 transition",
                              children: [
                                n.jsx("div", {
                                  className: `w-14 h-14 bg-slate-800 rounded-full mx-auto mb-3 border ${z} overflow-hidden`,
                                  children: n.jsx("img", {
                                    src: v.photoUrl,
                                    alt: v.name,
                                    className: "w-full h-full object-cover",
                                  }),
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-xs font-bold text-white truncate",
                                  children: v.name,
                                }),
                                n.jsx("p", {
                                  className: `text-[9px] font-semibold mb-1 uppercase tracking-tight ${U}`,
                                  children: v.role,
                                }),
                                n.jsxs("p", {
                                  className:
                                    "text-[9px] text-gray-500 uppercase tracking-tighter font-mono",
                                  children: [v.branch, " | ", v.year],
                                }),
                              ],
                            },
                            v.id,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6",
            children: [
              n.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  n.jsx("h3", {
                    className: "text-lg font-bold text-white",
                    children: "Add Your Campus to the WINQubit Network",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 max-w-xl",
                    children:
                      "Modular governance framework designed for seamless collegiate expansion with dedicated faculty mentors and student leads.",
                  }),
                ],
              }),
              n.jsx("button", {
                onClick: M,
                className:
                  "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/20 whitespace-nowrap",
                children: "Apply for Campus Chapter",
              }),
            ],
          }),
        }),
      ],
    });
  },