  rp = ({ isOpen: y, onClose: D }) => {
    const [M, o] = se.useState({
        institution: "Thakur Shyamnarayan Engineering College (TSEC)",
        fullName: "",
        email: "",
        phone: "",
        rollNo: "",
        branch: "Computer Engineering",
        year: "SE",
        interestAreas: ["Artificial Intelligence", "Prototype Labs"],
        hasIdea: "no",
        ideaSnippet: "",
      }),
      [j, E] = se.useState(!1);
    if (!y) return null;
    const v = [
        "Artificial Intelligence & ML",
        "Robotics & Embedded IoT",
        "Aerospace & Drone Engineering",
        "Biotech & HealthTech",
        "Hospitality & Food Technology",
        "CleanTech & Sustainability",
        "FinTech & Business Modeling",
        "Patent & Research Writing",
      ],
      H = (z) => {
        o((U) => ({
          ...U,
          interestAreas: U.interestAreas.includes(z)
            ? U.interestAreas.filter((ae) => ae !== z)
            : [...U.interestAreas, z],
        }));
      },
      S = (z) => {
        (z.preventDefault(), E(!0));
      },
      b = () => {
        (E(!1), D());
      };
    return n.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto",
      children: n.jsxs("div", {
        className:
          "relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8",
        children: [
          n.jsx("div", {
            className:
              "h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 w-full",
          }),
          n.jsxs("div", {
            className: "p-6 md:p-8",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between pb-4 border-b border-white/5",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className:
                          "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-1 font-mono",
                        children: "Annual Student Pass (2026-27)",
                      }),
                      n.jsx("h3", {
                        className: "text-lg font-bold text-white",
                        children: "Join the WINQubit Ecosystem",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition",
                    "aria-label": "Close",
                    children: n.jsx(Wi, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              j
                ? n.jsxs("div", {
                    className: "text-center py-6 space-y-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-1",
                        children: n.jsx(vt, { className: "w-6 h-6" }),
                      }),
                      n.jsx("h4", {
                        className: "text-xl font-bold text-white",
                        children: "Welcome to WINQubit!",
                      }),
                      n.jsxs("p", {
                        className: "text-xs text-gray-300 max-w-sm mx-auto",
                        children: [
                          "Membership registration initialized for ",
                          n.jsx("span", {
                            className: "text-cyan-400 font-bold",
                            children: M.fullName || "Member",
                          }),
                          ". Your digital member card has been generated.",
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "relative p-5 rounded-[2rem] bg-slate-900/60 border border-white/10 text-left text-xs max-w-sm mx-auto shadow-xl",
                        children: [
                          n.jsxs("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                              n.jsxs("div", {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-widest font-mono",
                                    children: "Digital Innovator Pass",
                                  }),
                                  n.jsx("div", {
                                    className: "font-bold text-sm text-white",
                                    children: M.fullName || "Student Member",
                                  }),
                                  n.jsx("div", {
                                    className: "text-[10px] text-violet-300",
                                    children: M.institution,
                                  }),
                                ],
                              }),
                              n.jsx("div", {
                                className:
                                  "w-7 h-7 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xs",
                                children: "W",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "grid grid-cols-2 gap-2 text-[10px] border-t border-white/5 pt-3 text-gray-400",
                            children: [
                              n.jsxs("div", {
                                children: [
                                  n.jsx("span", {
                                    className: "text-[9px] font-mono",
                                    children: "MEMBER ID",
                                  }),
                                  n.jsxs("p", {
                                    className: "font-mono text-white font-bold",
                                    children: [
                                      "WQ-2026-",
                                      Math.floor(1e3 + Math.random() * 9e3),
                                    ],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                children: [
                                  n.jsx("span", {
                                    className: "text-[9px] font-mono",
                                    children: "STATUS",
                                  }),
                                  n.jsx("p", {
                                    className:
                                      "text-emerald-400 font-bold font-mono",
                                    children: "ACTIVE (2026-27)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsx("button", {
                          type: "button",
                          onClick: b,
                          className:
                            "px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[10px] uppercase tracking-wider font-bold transition shadow-lg",
                          children: "Close & Access Member Hub",
                        }),
                      }),
                    ],
                  })
                : n.jsxs("form", {
                    onSubmit: S,
                    className: "space-y-3.5 mt-5",
                    children: [
                      n.jsxs("div", {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className: "text-[11px] text-gray-400",
                                children: "Standard Annual Membership",
                              }),
                              n.jsxs("div", {
                                className:
                                  "text-xl font-bold text-white flex items-baseline gap-1 font-mono",
                                children: [
                                  "₹500 ",
                                  n.jsx("span", {
                                    className:
                                      "text-[11px] font-normal text-gray-400",
                                    children: "/ academic year",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "text-right text-[11px] text-emerald-400 flex items-center gap-1 font-semibold font-mono",
                            children: [
                              n.jsx(Ji, { className: "w-3.5 h-3.5" }),
                              " InQubit Lab Pass Included",
                            ],
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
                                className: "w-3.5 h-3.5 text-cyan-400",
                              }),
                              "Your College / Institution *",
                            ],
                          }),
                          n.jsxs("select", {
                            value: M.institution,
                            onChange: (z) =>
                              o({ ...M, institution: z.target.value }),
                            className:
                              "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
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
                                children: "Other Partner Institution",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx(Rh, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " Full Name *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder: "e.g. Sneha Patel",
                                value: M.fullName,
                                onChange: (z) =>
                                  o({ ...M, fullName: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx(Lm, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " Roll / Student ID *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder: "e.g. TSDC-2024-512",
                                value: M.rollNo,
                                onChange: (z) =>
                                  o({ ...M, rollNo: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 font-mono",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx(Ff, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " Email *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "email",
                                required: !0,
                                placeholder: "sneha@example.com",
                                value: M.email,
                                onChange: (z) =>
                                  o({ ...M, email: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx($f, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " WhatsApp Number *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "tel",
                                required: !0,
                                placeholder: "+91 9876543210",
                                value: M.phone,
                                onChange: (z) =>
                                  o({ ...M, phone: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 font-mono",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Branch / Course",
                              }),
                              n.jsx("input", {
                                type: "text",
                                placeholder: "e.g. AI & Data Science / BMM",
                                value: M.branch,
                                onChange: (z) =>
                                  o({ ...M, branch: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Academic Year",
                              }),
                              n.jsxs("select", {
                                value: M.year,
                                onChange: (z) =>
                                  o({ ...M, year: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
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
                                    children: "Final Year (BE / Final)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5",
                            children: [
                              n.jsx(yh, {
                                className: "w-3.5 h-3.5 text-violet-400",
                              }),
                              " Areas of Interest (Select all that apply)",
                            ],
                          }),
                          n.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: v.map((z) => {
                              const U = M.interestAreas.includes(z);
                              return n.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => H(z),
                                  className: `text-left px-2.5 py-1.5 rounded-xl text-[11px] font-medium border transition ${U ? "bg-violet-600/20 border-violet-400/60 text-violet-200" : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white"}`,
                                  children: [U ? "✓ " : "+ ", " ", z],
                                },
                                z,
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
                            children:
                              "Do you currently have a project or idea to submit?",
                          }),
                          n.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              n.jsxs("label", {
                                className:
                                  "flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "radio",
                                    name: "hasIdea",
                                    value: "no",
                                    checked: M.hasIdea === "no",
                                    onChange: () => o({ ...M, hasIdea: "no" }),
                                    className: "text-violet-600",
                                  }),
                                  "No, I want to learn & explore first",
                                ],
                              }),
                              n.jsxs("label", {
                                className:
                                  "flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "radio",
                                    name: "hasIdea",
                                    value: "yes",
                                    checked: M.hasIdea === "yes",
                                    onChange: () => o({ ...M, hasIdea: "yes" }),
                                    className: "text-violet-600",
                                  }),
                                  "Yes, I have an initial idea",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      M.hasIdea === "yes" &&
                        n.jsx("div", {
                          children: n.jsx("textarea", {
                            rows: 2,
                            placeholder:
                              "Brief 1-2 lines on what you're thinking of building...",
                            value: M.ideaSnippet,
                            onChange: (z) =>
                              o({ ...M, ideaSnippet: z.target.value }),
                            className:
                              "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                          }),
                        }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsxs("button", {
                          type: "submit",
                          className:
                            "w-full py-2.5 px-6 rounded-full font-bold text-[10px] uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-400 hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2",
                          children: [
                            n.jsx(Wf, { className: "w-3.5 h-3.5" }),
                            " Proceed to Confirm ₹500 Pass",
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
  },