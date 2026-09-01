        key: "1xq2db",
      },
    ],
  ],
  Pf = I("zap", Gh),
  Lh = ({
    activePage: y,
    onNavigate: D,
    onOpenInnovate: M,
    onOpenJoin: o,
    onOpenCollaborate: j,
  }) => {
    const [E, v] = se.useState(!1),
      [H, S] = se.useState(!1);
    se.useEffect(() => {
      const z = () => {
        v(window.scrollY > 20);
      };
      return (
        window.addEventListener("scroll", z),
        () => window.removeEventListener("scroll", z)
      );
    }, []);
    const b = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "leadership", label: "Leadership" },
      { id: "students", label: "For Students" },
      { id: "programs", label: "Programs" },
      { id: "innovation", label: "Innovation" },
      { id: "partners", label: "Partners" },
      { id: "events", label: "Events" },
      { id: "resources", label: "Resources" },
      { id: "contact", label: "Contact" },
    ];
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx("div", {
          className:
            "bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border-b border-violet-800/30 text-[11px] py-1.5 px-4 text-center text-slate-300",
          children: n.jsxs("div", {
            className:
              "container mx-auto flex items-center justify-center gap-3",
            children: [
              n.jsxs("span", {
                className:
                  "inline-flex items-center gap-1 font-semibold text-violet-300",
                children: [
                  n.jsx(zl, { className: "w-3 h-3 text-cyan-400" }),
                  "HackSpark 2026 Innovation Challenge Open",
                ],
              }),
              n.jsx("span", {
                className: "hidden sm:inline text-slate-500",
                children: "•",
              }),
              n.jsx("span", {
                className: "hidden md:inline text-slate-400",
                children:
                  "₹2.5L Grants for Student POCs Across TSEC, TSDC, TIAT & TIHM",
              }),
              n.jsxs("button", {
                onClick: () => D("events"),
                className:
                  "text-cyan-400 hover:text-cyan-300 font-bold underline inline-flex items-center gap-0.5 ml-1",
                children: ["Explore ", n.jsx(Ft, { className: "w-2.5 h-2.5" })],
              }),
            ],
          }),
        }),
        n.jsxs("header", {
          className: `sticky top-0 z-40 w-full transition-all duration-300 ${E ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/50 py-3" : "bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-3.5"}`,
          children: [
            n.jsxs("div", {
              className:
                "container mx-auto px-4 md:px-8 flex items-center justify-between",
              children: [
                n.jsxs("button", {
                  onClick: () => D("home"),
                  className:
                    "flex items-center space-x-3 text-left group transition",
                  children: [
                    n.jsx("div", {
                      className:
                        "w-9 h-9 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition",
                      children: "W",
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsxs("div", {
                          className:
                            "font-display text-xl font-bold tracking-tighter text-white flex items-center",
                          children: [
                            "WIN",
                            n.jsx("span", {
                              className: "text-violet-400 font-light ml-0.5",
                              children: "Qubit",
                            }),
                          ],
                        }),
                        n.jsx("div", {
                          className:
                            "text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold -mt-1",
                          children: "Powered by InQubit",
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsx("nav", {
                  className:
                    "hidden xl:flex items-center space-x-6 text-[11px] font-semibold uppercase tracking-[0.18em]",
                  children: b.map((z) => {
                    const U = y === z.id;
                    return n.jsx(
                      "button",
                      {
                        onClick: () => D(z.id),
                        className: `transition-all duration-200 py-1 ${U ? "text-cyan-400 border-b-2 border-cyan-400 font-bold" : "text-gray-400 hover:text-white"}`,
                        children: z.label,
                      },
                      z.id,
                    );
                  }),
                }),
                n.jsxs("div", {
                  className: "hidden lg:flex items-center space-x-3",
                  children: [
                    n.jsxs("button", {
                      onClick: j,
                      className:
                        "text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition flex items-center gap-1.5",
                      title: "Collaborate / Partner",
                      children: [
                        n.jsx(Sr, {
                          className: "w-3.5 h-3.5 text-emerald-400",
                        }),
                        n.jsx("span", { children: "Partner" }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: M,
                      className:
                        "border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-[10px] font-bold hover:bg-cyan-500 hover:text-black transition uppercase tracking-wider",
                      children: "INNOVATE",
                    }),
                    n.jsx("button", {
                      onClick: o,
                      className:
                        "bg-violet-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-lg shadow-violet-600/20 hover:scale-105 transition uppercase tracking-wider",
                      children: "JOIN NOW",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex items-center gap-2 xl:hidden",
                  children: [
                    n.jsx("button", {
                      onClick: M,
                      className:
                        "sm:inline-flex hidden px-3 py-1.5 rounded-full text-[11px] font-bold text-cyan-400 border border-cyan-500/40",
                      children: "INNOVATE",
                    }),
                    n.jsx("button", {
                      onClick: () => S(!H),
                      className:
                        "p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800",
                      "aria-label": "Toggle navigation",
                      children: H
                        ? n.jsx(Wi, { className: "w-6 h-6" })
                        : n.jsx(Sh, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              ],
            }),
            H &&
              n.jsxs("div", {
                className:
                  "xl:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200",
                children: [
                  n.jsx("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: b.map((z) =>
                      n.jsx(
                        "button",
                        {
                          onClick: () => {
                            (D(z.id), S(!1));
                          },
                          className: `px-3 py-2 rounded-lg text-left text-xs font-semibold ${y === z.id ? "bg-violet-600 text-white font-bold" : "text-slate-300 hover:bg-slate-900"}`,
                          children: z.label,
                        },
                        z.id,
                      ),
                    ),
                  }),
                  n.jsxs("div", {
                    className:
                      "pt-3 border-t border-slate-800 flex flex-col gap-2",
                    children: [
                      n.jsx("button", {
                        onClick: () => {
                          (M(), S(!1));
                        },
                        className:
                          "w-full py-2.5 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black",
                        children: "SUBMIT IDEA (INNOVATE)",
                      }),
                      n.jsx("button", {
                        onClick: () => {
                          (o(), S(!1));
                        },
                        className:
                          "w-full py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500",
                        children: "JOIN WINQUBIT (₹500/YEAR)",
                      }),
                      n.jsxs("button", {
                        onClick: () => {
                          (j(), S(!1));
                        },
                        className:
                          "w-full py-2 rounded-xl text-xs font-semibold text-emerald-400 hover:bg-slate-900 flex items-center justify-center gap-1.5",
                        children: [
                          n.jsx(Sr, { className: "w-4 h-4" }),
                          " Partner With Us",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Vh = [
    {
      id: "vishram-bapat",
      name: "Mr. Vishram Bapat",
      designation: "Management Committee Member",
      organization: "WINQubit & InQubit Ecosystem",
      photoUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Pioneering strategist guiding ecosystem growth, institutional alignments, and high-impact incubator governance across higher education.",
      focusAreas: [
        "Ecosystem Governance",
        "Strategic Growth",
        "Incubator Alignment",
      ],
    },
    {
      id: "dhruv-singh",
      name: "Mr. Dhruv Singh",
      designation: "Management Committee Member",
      organization: "WINQubit & InQubit Ecosystem",
      photoUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Driving deep-tech ventures, pre-incubation pipelines, and industry challenge integration across collaborative student innovation hubs.",
      focusAreas: [
        "Deep-Tech Pipelines",
        "Industry Linkages",
        "Innovation Policy",
      ],
    },
    {
      id: "harnish-master",
      name: "Mr. Harnish Master",
      designation: "Management Committee Member",
      organization: "WINQubit & InQubit Ecosystem",
      photoUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Orchestrating venture enablement, early-stage prototype grants, and scalable entrepreneurship support from campus to market.",
      focusAreas: [
        "Venture Capital Readiness",
        "Prototype Grant Allocation",
        "Operational Strategy",
      ],
    },
  ],
  Xh = [
    {
      title: "Overall Strategy & Direction",
      description:
        "Setting network-wide milestones, long-term vision, and strategic goals for student innovation.",
    },
    {
      title: "Policy & Governance",
      description:
        "Enforcing ethical standards, inclusion mandates, intellectual property guidelines, and quality frameworks.",