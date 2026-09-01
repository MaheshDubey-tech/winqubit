  sp = ({ onNavigate: y, onOpenJoin: D, onOpenCollaborate: M }) => {
    const [o, j] = se.useState({
        name: "",
        email: "",
        department: "General Inquiries",
        campus: "TSEC (Engineering)",
        message: "",
      }),
      [E, v] = se.useState(!1),
      H = (S) => {
        (S.preventDefault(), v(!0));
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
                  children: "Get in Touch with the Committee",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Contact ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "WINQubit",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "Reach our Central Management Committee, campus Faculty Coordinators, or Student Innovation Leads.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "grid lg:grid-cols-12 gap-6 items-start",
            children: [
              n.jsx("div", {
                className: "lg:col-span-5 space-y-6",
                children: n.jsxs("div", {
                  className:
                    "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 space-y-5",
                  children: [
                    n.jsx("h3", {
                      className: "text-lg font-bold text-white",
                      children: "Central Ecosystem Office",
                    }),
                    n.jsx("p", {
                      className: "text-xs text-gray-400 leading-relaxed",
                      children:
                        "Managed in coordination with Thakur Educational Campus innovation centers and InQubit Venture Labs.",
                    }),
                    n.jsxs("div", {
                      className: "space-y-3.5 text-xs text-gray-300",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 mt-0.5",
                              children: n.jsx(Tr, { className: "w-4 h-4" }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "font-bold text-white text-xs mb-0.5",
                                  children: "Main Innovation Hub",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] leading-relaxed",
                                  children:
                                    "Zagdu Singh Charitable Trust Campus, Thakur Village, Kandivali (East), Mumbai, Maharashtra 400101",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5",
                              children: n.jsx(Ff, { className: "w-4 h-4" }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "font-bold text-white text-xs mb-0.5",
                                  children: "Official Inquiries",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] font-mono",
                                  children:
                                    "info@winqubit.org • partnerships@winqubit.org",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5",
                              children: n.jsx($f, { className: "w-4 h-4" }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "font-bold text-white text-xs mb-0.5",
                                  children: "Helpline & WhatsApp Hub",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] font-mono",
                                  children: "+91 (022) 6730 8000 / 8100",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "pt-4 border-t border-white/5",
                      children: [
                        n.jsx("div", {
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2",
                          children: "Campus Coordinators",
                        }),
                        n.jsxs("div", {
                          className:
                            "grid grid-cols-2 gap-2 text-[11px] text-gray-300",
                          children: [
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TSEC Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Dr. Nirmala Kamble",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TSDC Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Mrs. Abha Dhote",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TIAT Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Mr. Vivek Kulkarni",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TIHM Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Faculty Coordinator",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              n.jsx("div", {
                className: "lg:col-span-7",
                children: n.jsxs("div", {
                  className:
                    "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-1.5",
                      children: "Send a Message",
                    }),
                    n.jsx("p", {
                      className: "text-xs text-gray-400 mb-5",
                      children:
                        "Fill in your query and the relevant Faculty Mentor or Student Committee representative will respond within 24 hours.",
                    }),
                    E
                      ? n.jsxs("div", {
                          className: "text-center py-8 space-y-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-1",
                              children: n.jsx(vt, { className: "w-6 h-6" }),
                            }),
                            n.jsx("h4", {
                              className: "text-xl font-bold text-white",
                              children: "Message Dispatched!",
                            }),
                            n.jsxs("p", {
                              className:
                                "text-xs text-gray-400 max-w-md mx-auto",
                              children: [
                                "Thank you, ",
                                n.jsx("span", {
                                  className: "text-cyan-400 font-bold",
                                  children: o.name,
                                }),
                                ". Your inquiry has been routed to the ",
                                n.jsx("span", {
                                  className: "text-white font-semibold",
                                  children: o.campus,
                                }),
                                " committee desk.",
                              ],
                            }),
                            n.jsx("button", {
                              type: "button",
                              onClick: () => {
                                (v(!1),
                                  j({
                                    name: "",
                                    email: "",
                                    department: "General Inquiries",
                                    campus: "TSEC (Engineering)",
                                    message: "",
                                  }));
                              },
                              className:
                                "px-6 py-2 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 text-white text-[10px] uppercase tracking-wider font-bold transition",
                              children: "Send Another Note",
                            }),
                          ],
                        })
                      : n.jsxs("form", {
                          onSubmit: H,
                          className: "space-y-4",
                          children: [
                            n.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Your Name *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      required: !0,
                                      placeholder: "e.g. Ananya Sharma",
                                      value: o.name,
                                      onChange: (S) =>
                                        j({ ...o, name: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                                    }),
                                  ],
                                }),
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
                                      placeholder: "ananya@example.com",
                                      value: o.email,
                                      onChange: (S) =>
                                        j({ ...o, email: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Inquiry Department",
                                    }),
                                    n.jsxs("select", {
                                      value: o.department,
                                      onChange: (S) =>
                                        j({ ...o, department: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
                                      children: [
                                        n.jsx("option", {
                                          children: "General Inquiries",
                                        }),
                                        n.jsx("option", {
                                          children: "Student Membership (₹500)",
                                        }),
                                        n.jsx("option", {
                                          children: "Prototype Micro-Grants",
                                        }),
                                        n.jsx("option", {
                                          children: "Patent & IP Guidance",
                                        }),
                                        n.jsx("option", {
                                          children: "Institutional Partnership",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Corporate / Industry Challenge",
                                        }),
                                        n.jsx("option", {
                                          children: "InQubit Incubation",
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
                                      children: "Target Campus",
                                    }),
                                    n.jsxs("select", {
                                      value: o.campus,
                                      onChange: (S) =>
                                        j({ ...o, campus: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
                                      children: [
                                        n.jsx("option", {
                                          children:
                                            "Central Management Committee",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "TSEC (Thakur Shyamnarayan Engineering)",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "TSDC (Thakur Shyamnarayan Degree)",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "TIAT (Aviation Technology)",
                                        }),
                                        n.jsx("option", {
                                          children: "TIHM (Hotel Management)",
                                        }),
                                        n.jsx("option", {
                                          children: "InQubit Venture Labs",
                                        }),
                                      ],
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
                                  children: "Your Message / Query *",
                                }),
                                n.jsx("textarea", {
                                  rows: 4,
                                  required: !0,
                                  placeholder:
                                    "Share your inquiry, question, or project outline in detail...",
                                  value: o.message,
                                  onChange: (S) =>
                                    j({ ...o, message: S.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/5 rounded-xl p-3 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                                }),
                              ],
                            }),
                            n.jsxs("button", {
                              type: "submit",
                              className:
                                "w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2",
                              children: [
                                n.jsx(kr, { className: "w-3.5 h-3.5" }),
                                " Send Message",
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },