                          }),
                          n.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                            children: z.map((k) => {
                              const F = E.collaborationGoals.includes(k);
                              return n.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => U(k),
                                  className: `text-left p-2.5 rounded-xl text-xs font-medium border transition ${F ? "bg-emerald-500/15 border-emerald-400 text-emerald-200" : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white"}`,
                                  children: [F ? "✓ " : "+ ", " ", k],
                                },
                                k,
                              );
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1",
                            children: "Specific Initiatives or Details",
                          }),
                          n.jsx("textarea", {
                            rows: 2,
                            placeholder:
                              "Share any specific requirements, student count, industry problem areas, or partnership timeline...",
                            value: E.notes,
                            onChange: (k) => v({ ...E, notes: k.target.value }),
                            className:
                              "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsxs("button", {
                          type: "submit",
                          className:
                            "w-full py-2.5 px-6 rounded-full font-bold text-[10px] uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2",
                          children: [
                            n.jsx(kr, { className: "w-3.5 h-3.5" }),
                            " Submit Collaboration Proposal",
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  };
function up() {
  const [y, D] = se.useState("home"),
    [M, o] = se.useState(!1),
    [j, E] = se.useState(!1),
    [v, H] = se.useState(!1),
    S = (b) => {
      (D(b), window.scrollTo({ top: 0, behavior: "smooth" }));
    };
  return n.jsxs("div", {
    className:
      "min-h-screen bg-[#020617] text-[#f8fafc] flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,transparent)]",
    children: [
      n.jsx(Lh, {
        activePage: y,
        onNavigate: S,
        onOpenInnovate: () => o(!0),
        onOpenJoin: () => E(!0),
        onOpenCollaborate: () => H(!0),
      }),
      n.jsxs("main", {
        className: "flex-grow",
        children: [
          y === "home" &&
            n.jsx(Fh, {
              onNavigate: S,
              onOpenInnovate: () => o(!0),
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "about" &&
            n.jsx($h, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "leadership" &&
            n.jsx(Ph, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "students" &&
            n.jsx(ep, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenInnovate: () => o(!0),
            }),
          y === "programs" &&
            n.jsx(tp, {
              onNavigate: S,
              onOpenInnovate: () => o(!0),
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "innovation" &&
            n.jsx(ap, {
              onNavigate: S,
              onOpenInnovate: () => o(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "partners" &&
            n.jsx(lp, {
              onNavigate: S,
              onOpenCollaborate: () => H(!0),
              onOpenJoin: () => E(!0),
            }),
          y === "events" &&
            n.jsx(np, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenInnovate: () => o(!0),
            }),
          y === "resources" &&
            n.jsx(ip, { onNavigate: S, onOpenJoin: () => E(!0) }),
          y === "contact" &&
            n.jsx(sp, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
        ],
      }),
      n.jsx(Zh, {
        onNavigate: S,
        onOpenInnovate: () => o(!0),
        onOpenJoin: () => E(!0),
        onOpenCollaborate: () => H(!0),
      }),
      n.jsx(cp, { isOpen: M, onClose: () => o(!1) }),
      n.jsx(rp, { isOpen: j, onClose: () => E(!1) }),
      n.jsx(op, { isOpen: v, onClose: () => H(!1) }),
    ],
  });
}
Dm.createRoot(document.getElementById("root")).render(
  n.jsx(se.StrictMode, { children: n.jsx(up, {}) }),
);
