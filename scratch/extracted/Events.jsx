  ip = ({ onNavigate: y, onOpenJoin: D }) => {
    const [M, o] = se.useState(null),
      j = (b) => {
        (o(b),
          setTimeout(() => {
            o(null);
          }, 3e3));
      },
      E = [
        { id: "all", label: "All Resources" },
        { id: "students", label: "Student Resources" },
        { id: "documents", label: "WINQubit Documents" },
        { id: "institutional", label: "Institutional Resources" },
        { id: "reports", label: "Reports & Whitepapers" },
      ],
      [v, H] = se.useState("all"),
      S =
        v === "all"
          ? Kf
          : Kf.filter((b) =>
              b.category.toLowerCase().includes(v.toLowerCase()),
            );
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
                  children: "Knowledge & Compliance Hub",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
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
                  children: "Resources",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "Explore student guides, grant application templates, patent filing prior-art checklists, institutional charter bylaws, and annual reports.",
            }),
          ],
        }),
        M &&
          n.jsxs("div", {
            className:
              "fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-900 border border-cyan-500/50 text-white text-xs shadow-2xl flex items-center gap-3 animate-in fade-in duration-200",
            children: [
              n.jsx(vt, { className: "w-4 h-4 text-cyan-400 shrink-0" }),
              n.jsxs("div", {
                children: [
                  n.jsx("div", {
                    className: "font-bold text-cyan-300",
                    children: "Document Downloaded!",
                  }),
                  n.jsxs("div", {
                    className: "text-gray-400 text-[11px]",
                    children: [M, " has been saved to your downloads."],
                  }),
                ],
              }),
            ],
          }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsx("div", {
              className:
                "flex flex-wrap items-center justify-center gap-2 mb-8",
              children: E.map((b) =>
                n.jsx(
                  "button",
                  {
                    onClick: () => H(b.id),
                    className: `px-4 py-1.5 rounded-full text-xs font-semibold transition ${v === b.id ? "bg-violet-600 text-white shadow-lg" : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"}`,
                    children: b.label,
                  },
                  b.id,
                ),
              ),
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: S.map((b) =>
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
                                  "text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-violet-300 border border-white/5 font-mono",
                                children: b.category,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-[10px] text-gray-500 font-mono",
                                children: [b.fileType, " • ", b.fileSize],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: b.title,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-4",
                            children: b.description,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between",
                        children: [
                          n.jsxs("button", {
                            onClick: () => j(b.title),
                            className:
                              "px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-cyan-400 hover:text-cyan-300 text-[10px] font-bold transition flex items-center gap-1.5 font-mono",
                            children: [
                              n.jsx(rh, { className: "w-3 h-3" }),
                              " Download Doc",
                            ],
                          }),
                          n.jsx("span", {
                            className: "text-[9px] text-gray-500 font-mono",
                            children: "Verified by Committee",
                          }),
                        ],
                      }),
                    ],
                  },
                  b.id,
                ),
              ),
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
                  className: "lg:col-span-8 space-y-3",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20",
                      children: [
                        n.jsx(Ji, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        "IP & Patent Support",
                      ],
                    }),
                    n.jsx("h3", {
                      className: "text-xl sm:text-2xl font-bold text-white",
                      children: "Need Help Drafting a Provisional Patent?",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "Student innovators retain 100% of their intellectual property during the pre-incubation phase. Our institutional patent mentors guide you through novelty assessment, Indian Patent Office (IPO) classifications, and claim drafting.",
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "lg:col-span-4 text-center",
                  children: n.jsx("button", {
                    onClick: () => y("contact"),
                    className:
                      "w-full py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg",
                    children: "Schedule IP Advisory Call",
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },