  cp = ({ isOpen: y, onClose: D }) => {
    const [M, o] = se.useState(1),
      [j, E] = se.useState("idea"),
      [v, H] = se.useState({
        institution: "Thakur Shyamnarayan Engineering College (TSEC)",
        fullName: "",
        email: "",
        phone: "",
        rollNo: "",
        branch: "Computer Engineering",
        year: "TE",
        domain: "Artificial Intelligence & Deep Tech",
        ideaTitle: "",
        problemStatement: "",
        proposedSolution: "",
        currentStage: "Concept / Ideation",
        supportNeeded: [],
        teamSize: "1",
      }),
      [S, b] = se.useState(!1);
    if (!y) return null;
    const z = [
        {
          id: "idea",
          label: "I have an idea to build",
          icon: Ki,
          desc: "Submit your solution for technical validation & review",
        },
        {
          id: "team",
          label: "I need a multidisciplinary team",
          icon: Mn,
          desc: "Connect with coders, designers, or domain specialists",
        },
        {
          id: "mentor",
          label: "I need an industry mentor",
          icon: Uh,
          desc: "Get paired with senior founders and technical experts",
        },
        {
          id: "prototype",
          label: "I want to build a prototype",
          icon: Dr,
          desc: "Apply for lab access and prototype micro-grants",
        },
        {
          id: "challenge",
          label: "I want to solve industry challenges",
          icon: Cr,
          desc: "Participate in corporate & HackSpark challenges",
        },
      ],
      U = (k) => {
        H((F) => ({
          ...F,
          supportNeeded: F.supportNeeded.includes(k)
            ? F.supportNeeded.filter((Me) => Me !== k)
            : [...F.supportNeeded, k],
        }));
      },
      ae = (k) => {
        (k.preventDefault(), b(!0));
      },
      De = () => {
        (b(!1), o(1), D());
      };
    return n.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto",
      children: n.jsxs("div", {
        className:
          "relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8",
        children: [
          n.jsx("div", {
            className:
              "h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 w-full",
          }),
          n.jsxs("div", {
            className: "p-6 md:p-8",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between pb-4 border-b border-white/5",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-9 h-9 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400",
                        children: n.jsx(zl, { className: "w-4 h-4" }),
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("h3", {
                            className:
                              "text-lg font-bold text-white flex items-center gap-2",
                            children: "Student Innovation Portal",
                          }),
                          n.jsx("p", {
                            className: "text-[11px] text-gray-400",
                            children:
                              "WINQubit × InQubit Idea Intake & Acceleration Engine",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition",
                    "aria-label": "Close modal",
                    children: n.jsx(Wi, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              S
                ? n.jsxs("div", {
                    className: "text-center py-6 space-y-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-1",
                        children: n.jsx(vt, { className: "w-6 h-6" }),
                      }),
                      n.jsx("h4", {
                        className: "text-xl font-bold text-white",
                        children: "Innovation Proposal Submitted!",
                      }),
                      n.jsxs("p", {
                        className: "text-xs text-gray-300 max-w-md mx-auto",
                        children: [
                          "Thank you, ",
                          n.jsx("span", {
                            className: "text-cyan-400 font-semibold",
                            children: v.fullName || "Innovator",
                          }),
                          ". Your idea “",
                          n.jsx("span", {
                            className: "text-violet-300",
                            children: v.ideaTitle || "New Project",
                          }),
                          "” has been registered under ",
                          n.jsx("span", {
                            className: "font-semibold text-white",
                            children: v.institution,
                          }),
                          ".",
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "bg-white/[0.02] border border-white/5 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-gray-300",
                        children: [
                          n.jsxs("div", {
                            className:
                              "flex justify-between border-b border-white/5 pb-1.5",
                            children: [
                              n.jsx("span", {
                                className: "text-gray-400 text-[11px]",
                                children: "Tracking Reference:",
                              }),
                              n.jsxs("span", {
                                className:
                                  "font-mono text-cyan-400 font-bold text-[11px]",
                                children: [
                                  "WINQ-2026-",
                                  Math.floor(1e3 + Math.random() * 9e3),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "flex justify-between border-b border-white/5 pb-1.5",
                            children: [
                              n.jsx("span", {
                                className: "text-gray-400 text-[11px]",
                                children: "Next Review Stage:",
                              }),
                              n.jsx("span", {
                                className: "text-amber-300 text-[11px]",
                                children: "Institutional Faculty Review Board",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              n.jsx("span", {
                                className: "text-gray-400 text-[11px]",
                                children: "Target Response:",
                              }),
                              n.jsx("span", {
                                className:
                                  "text-emerald-400 font-medium text-[11px]",
                                children:
                                  "Within 72 Hours via WhatsApp / Email",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsx("button", {
                          type: "button",
                          onClick: De,
                          className:
                            "px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[10px] uppercase tracking-wider font-bold transition shadow-lg",
                          children: "Done & Return to Site",
                        }),
                      }),
                    ],
                  })
                : n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className: "flex items-center justify-between my-5",
                        children: [1, 2, 3, 4].map((k) =>
                          n.jsxs(
                            "div",
                            {
                              className: "flex items-center flex-1",
                              children: [
                                n.jsx("div", {
                                  className: `w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono transition-all ${M === k ? "bg-violet-600 text-white shadow-lg" : M > k ? "bg-cyan-500 text-slate-950" : "bg-white/[0.03] text-gray-500 border border-white/5"}`,
                                  children: M > k ? "✓" : k,
                                }),
                                k < 4 &&
                                  n.jsx("div", {
                                    className: `h-[1px] flex-1 mx-2 transition-all ${M > k ? "bg-cyan-500/50" : "bg-white/5"}`,
                                  }),
                              ],
                            },
                            k,
                          ),
                        ),
                      }),
                      M === 1 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children:
                                    "How can WINQubit power your journey?",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Select your primary reason for reaching out today.",
                                }),
                              ],
                            }),
                            n.jsx("div", {
                              className: "grid gap-2",
                              children: z.map((k) => {
                                const F = k.icon,
                                  Me = j === k.id;
                                return n.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => E(k.id),
                                    className: `flex items-start gap-3.5 p-3.5 rounded-2xl text-left border transition-all ${Me ? "bg-violet-600/15 border-violet-500/50 text-white" : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15"}`,
                                    children: [
                                      n.jsx("div", {
                                        className: `p-2 rounded-xl ${Me ? "bg-violet-600 text-white" : "bg-white/5 text-gray-400"}`,
                                        children: n.jsx(F, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      n.jsxs("div", {
                                        className: "flex-1",
                                        children: [
                                          n.jsx("div", {
                                            className:
                                              "font-semibold text-xs text-white",
                                            children: k.label,
                                          }),
                                          n.jsx("div", {
                                            className:
                                              "text-[11px] text-gray-400 mt-0.5 leading-relaxed",
                                            children: k.desc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  k.id,
                                );
                              }),
                            }),
                          ],
                        }),
                      M === 2 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children: "Student & Campus Details",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Tell us where you are studying and how we can reach you.",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                  children: [
                                    n.jsx(Ii, {
                                      className: "w-3.5 h-3.5 text-violet-400",
                                    }),
                                    "Select Your Academic Institution",
                                  ],
                                }),
                                n.jsxs("select", {
                                  value: v.institution,
                                  onChange: (k) =>
                                    H({ ...v, institution: k.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                  children: [
                                    n.jsx("option", {
                                      children:
                                        "Thakur Shyamnarayan Engineering College (TSEC)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Thakur Shyamnarayan Degree College (TSDC)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Thakur Institute of Aviation Technology (TIAT)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Thakur Institute of Hotel Management (TIHM)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Other Partner Institution / University",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Full Name *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      required: !0,
                                      placeholder: "e.g. Rahul Sharma",
                                      value: v.fullName,
                                      onChange: (k) =>
                                        H({ ...v, fullName: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Roll Number / Student ID *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      required: !0,
                                      placeholder: "e.g. TSEC-2024-089",
                                      value: v.rollNo,
                                      onChange: (k) =>
                                        H({ ...v, rollNo: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 font-mono",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Email Address *",
                                    }),
                                    n.jsx("input", {
                                      type: "email",
                                      required: !0,
                                      placeholder: "student@college.edu.in",
                                      value: v.email,
                                      onChange: (k) =>
                                        H({ ...v, email: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "WhatsApp Contact Number *",
                                    }),
                                    n.jsx("input", {
                                      type: "tel",
                                      required: !0,
                                      placeholder: "+91 98765 43210",
                                      value: v.phone,
                                      onChange: (k) =>
                                        H({ ...v, phone: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 font-mono",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Branch / Degree Course *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      placeholder:
                                        "e.g. Computer Engineering / B.Sc IT",
                                      value: v.branch,
                                      onChange: (k) =>
                                        H({ ...v, branch: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Current Year of Study",
                                    }),
                                    n.jsxs("select", {
                                      value: v.year,
                                      onChange: (k) =>
                                        H({ ...v, year: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                      children: [
                                        n.jsx("option", {
                                          value: "FE",
                                          children: "First Year (FE / FY)",
                                        }),
                                        n.jsx("option", {
                                          value: "SE",
                                          children: "Second Year (SE / SY)",
                                        }),
                                        n.jsx("option", {
                                          value: "TE",
                                          children: "Third Year (TE / TY)",
                                        }),
                                        n.jsx("option", {
                                          value: "BE",
                                          children:
                                            "Final Year (BE / B.Tech / Final)",
                                        }),
                                        n.jsx("option", {
                                          value: "Postgrad",
                                          children: "Postgraduate / Masters",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      M === 3 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children: "Innovation Domain & Problem",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Describe the problem you are passionate about solving.",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children: "Target Innovation Domain",
                                }),
                                n.jsxs("select", {
                                  value: v.domain,
                                  onChange: (k) =>
                                    H({ ...v, domain: k.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                  children: [
                                    n.jsx("option", {
                                      children:
                                        "Artificial Intelligence & Deep Tech",
                                    }),
                                    n.jsx("option", {
                                      children: "Aerospace, Drone & Mobility",
                                    }),
                                    n.jsx("option", {
                                      children: "HealthTech & Life Sciences",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Industry 4.0 & Advanced Hardware",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Creative, Culinary & Hospitality Tech",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Sustainability & Social Impact (SDGs)",
                                    }),
                                    n.jsx("option", {
                                      children: "FinTech & Digital Commerce",
                                    }),
                                    n.jsx("option", {
                                      children: "Other / Cross-Disciplinary",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children: "Idea / Project Title *",
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  placeholder:
                                    "e.g. AI-Powered Autonomous Agricultural Drone for Crop Disease Detection",
                                  value: v.ideaTitle,
                                  onChange: (k) =>
                                    H({ ...v, ideaTitle: k.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children:
                                    "Problem Statement (What pain point are you solving?) *",
                                }),
                                n.jsx("textarea", {
                                  rows: 3,
                                  placeholder:
                                    "Explain the real-world friction, target users, and why existing solutions are inadequate...",
                                  value: v.problemStatement,
                                  onChange: (k) =>
                                    H({
                                      ...v,
                                      problemStatement: k.target.value,
                                    }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Current Project Stage",
                                    }),
                                    n.jsxs("select", {
                                      value: v.currentStage,
                                      onChange: (k) =>
                                        H({
                                          ...v,
                                          currentStage: k.target.value,
                                        }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                      children: [
                                        n.jsx("option", {
                                          children: "Concept / Ideation",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Proof of Concept (POC) / Lab Simulation",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Working Prototype / MVP Built",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Initial User Testing / Campus Pilot",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Ready for Pre-Incubation / Patent Filing",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Current Team Size",
                                    }),
                                    n.jsxs("select", {
                                      value: v.teamSize,
                                      onChange: (k) =>
                                        H({ ...v, teamSize: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                      children: [
                                        n.jsx("option", {
                                          value: "1",
                                          children:
                                            "Solo Innovator (Looking for teammates)",
                                        }),
                                        n.jsx("option", {
                                          value: "2",
                                          children: "2 Members",
                                        }),
                                        n.jsx("option", {
                                          value: "3",
                                          children: "3-4 Members",
                                        }),
                                        n.jsx("option", {
                                          value: "5+",
                                          children:
                                            "5+ Members (Interdisciplinary)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      M === 4 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children: "Support & Resources Needed",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Select what resources you need from WINQubit & InQubit.",
                                }),
                              ],
                            }),
                            n.jsx("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-2",
                              children: [
                                "Prototype Seed Micro-Grants (up to ₹1,00,000)",
                                "1-on-1 Industry & Founder Mentorship",
                                "Access to Maker Labs (3D Printing, Drone Bay, IoT)",
                                "Patent Prior Art Search & Filing Assistance",
                                "Teammate Matching (Tech / Marketing / Finance)",
                                "Cloud Computing & AI API Credits",
                                "InQubit Fast-Track Incubation Evaluation",
                                "Representation in Smart India Hackathon & Global Expos",
                              ].map((k) => {
                                const F = v.supportNeeded.includes(k);
                                return n.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => U(k),
                                    className: `flex items-center gap-2 p-2.5 rounded-xl text-left border text-xs font-medium transition ${F ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-200" : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15"}`,
                                    children: [
                                      n.jsx("div", {
                                        className: `w-3.5 h-3.5 rounded flex items-center justify-center border text-[9px] font-bold ${F ? "bg-cyan-500 border-cyan-400 text-slate-950" : "border-white/20"}`,
                                        children: F && "✓",
                                      }),
                                      n.jsx("span", {
                                        className: "text-[11px] leading-tight",
                                        children: k,
                                      }),
                                    ],
                                  },
                                  k,
                                );
                              }),
                            }),
                            n.jsxs("div", {
                              className:
                                "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 space-y-1 mt-3",
                              children: [
                                n.jsxs("div", {
                                  className:
                                    "font-semibold text-violet-300 flex items-center gap-1.5 text-[11px]",
                                  children: [
                                    n.jsx(zl, { className: "w-3.5 h-3.5" }),
                                    "WINQubit Pre-Incubation Guarantee",
                                  ],
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] leading-relaxed",
                                  children:
                                    "Your submission is strictly confidential. You retain 100% IP ownership. Your institutional faculty coordinator and WINQubit review board will evaluate your submission within 3-5 business days.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      n.jsxs("div", {
                        className:
                          "flex items-center justify-between pt-4 mt-5 border-t border-white/5",
                        children: [
                          M > 1
                            ? n.jsxs("button", {
                                type: "button",
                                onClick: () => o(M - 1),
                                className:
                                  "flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20 transition",
                                children: [
                                  n.jsx(Qm, { className: "w-3.5 h-3.5" }),
                                  " Back",
                                ],
                              })
                            : n.jsx("div", {}),
                          M < 4
                            ? n.jsxs("button", {
                                type: "button",
                                onClick: () => o(M + 1),
                                className:
                                  "flex items-center gap-1.5 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition shadow-lg",
                                children: [
                                  "Next Step ",
                                  n.jsx(Ft, { className: "w-3.5 h-3.5" }),
                                ],
                              })
                            : n.jsxs("button", {
                                type: "button",
                                onClick: ae,
                                className:
                                  "flex items-center gap-1.5 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-lg shadow-violet-500/30",
                                children: [
                                  n.jsx(kr, { className: "w-3.5 h-3.5" }),
                                  " Submit Proposal",
                                ],
                              }),
                        ],
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  },