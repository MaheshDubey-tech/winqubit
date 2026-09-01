  op = ({ isOpen: y, onClose: D, defaultCategory: M = "institution" }) => {
    const [o, j] = se.useState(
        M === "institution"
          ? "college"
          : M === "industry"
            ? "industry"
            : "mentor",
      ),
      [E, v] = se.useState({
        orgName: "",
        contactPerson: "",
        designation: "",
        email: "",
        phone: "",
        city: "",
        collaborationGoals: [],
        notes: "",
      }),
      [H, S] = se.useState(!1);
    if (!y) return null;
    const b = [
        {
          id: "college",
          label: "College / University",
          icon: fh,
          desc: "Establish a WINQubit Innovation Chapter on campus",
        },
        {
          id: "industry",
          label: "Industry / Enterprise",
          icon: jr,
          desc: "Bring corporate challenges & hire top engineering talent",
        },
        {
          id: "startup",
          label: "Startup / Scaleup",
          icon: An,
          desc: "Mentor creators, test beta tech, and co-build MVPs",
        },
        {
          id: "csr",
          label: "CSR / Impact Foundation",
          icon: hh,
          desc: "Sponsor women in tech & prototype seed grants",
        },
        {
          id: "tech",
          label: "Technology / Cloud Vendor",
          icon: bh,
          desc: "Provide developer tools, hardware kits, and cloud credits",
        },
        {
          id: "mentor",
          label: "Individual Mentor / Investor",
          icon: Im,
          desc: "Guide student founders and review early stage pitches",
        },
      ],
      z = [
        "Establish Campus Innovation Chapter",
        "Bring Live Industry Problem Statements",
        "Offer Technical & Executive Mentorship",
        "Sponsor Student Prototype Grants",
        "Offer Internships & Pre-Placement Offers (PPOs)",
        "Co-host HackSpark Hackathons / Ideathons",
        "Establish Joint R&D / Testing Lab",
        "Explore InQubit Venture Co-Investment",
      ],
      U = (k) => {
        v((F) => ({
          ...F,
          collaborationGoals: F.collaborationGoals.includes(k)
            ? F.collaborationGoals.filter((Me) => Me !== k)
            : [...F.collaborationGoals, k],
        }));
      },
      ae = (k) => {
        (k.preventDefault(), S(!0));
      },
      De = () => {
        (S(!1), D());
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
              "h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 w-full",
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
                          "w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400",
                        children: n.jsx(Sr, { className: "w-4 h-4" }),
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("h3", {
                            className: "text-lg font-bold text-white",
                            children: "Partner with WINQubit",
                          }),
                          n.jsx("p", {
                            className: "text-[11px] text-gray-400",
                            children:
                              "Institutional, Corporate & Ecosystem Collaboration Hub",
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
              H
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
                        children: "Partnership Request Received!",
                      }),
                      n.jsxs("p", {
                        className: "text-xs text-gray-300 max-w-md mx-auto",
                        children: [
                          "Thank you, ",
                          n.jsx("span", {
                            className: "text-emerald-400 font-bold",
                            children: E.contactPerson,
                          }),
                          " from ",
                          n.jsx("span", {
                            className: "text-white font-semibold",
                            children: E.orgName || "your organization",
                          }),
                          ". The WINQubit Management Committee and Ecosystem Partnerships team will get in touch with you shortly.",
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm mx-auto text-xs text-gray-300 text-left space-y-1.5",
                        children: [
                          n.jsx("div", {
                            className: "text-gray-400 font-medium text-[11px]",
                            children: "Next Steps:",
                          }),
                          n.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-gray-300 text-[11px]",
                            children: [
                              n.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-emerald-400",
                              }),
                              "Partnership deck & MoU framework shared via email",
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-gray-300 text-[11px]",
                            children: [
                              n.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-emerald-400",
                              }),
                              "Introductory alignment call with Management Committee",
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
                            "px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[10px] uppercase tracking-wider font-bold transition shadow-lg",
                          children: "Close Window",
                        }),
                      }),
                    ],
                  })
                : n.jsxs("form", {
                    onSubmit: ae,
                    className: "space-y-4 mt-5",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-2",
                            children:
                              "What best describes your organization / profile?",
                          }),
                          n.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                            children: b.map((k) => {
                              const F = k.icon,
                                Me = o === k.id;
                              return n.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => j(k.id),
                                  className: `p-3 rounded-2xl text-left border transition ${Me ? "bg-emerald-500/15 border-emerald-400 text-white" : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/15"}`,
                                  children: [
                                    n.jsx(F, {
                                      className: `w-3.5 h-3.5 mb-1.5 ${Me ? "text-emerald-400" : "text-gray-400"}`,
                                    }),
                                    n.jsx("div", {
                                      className:
                                        "text-xs font-bold leading-tight text-white",
                                      children: k.label,
                                    }),
                                  ],
                                },
                                k.id,
                              );
                            }),
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
                                children: "Organization / Institution Name *",
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder:
                                  "e.g. Acme Tech Solutions / ABC Institute",
                                value: E.orgName,
                                onChange: (k) =>
                                  v({ ...E, orgName: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Contact Person Name *",
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder:
                                  "e.g. Dr. Rajesh Verma / VP Innovation",
                                value: E.contactPerson,
                                onChange: (k) =>
                                  v({ ...E, contactPerson: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
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
                                children: "Official Email Address *",
                              }),
                              n.jsx("input", {
                                type: "email",
                                required: !0,
                                placeholder: "partner@company.com",
                                value: E.email,
                                onChange: (k) =>
                                  v({ ...E, email: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Phone / Mobile Number *",
                              }),
                              n.jsx("input", {
                                type: "tel",
                                required: !0,
                                placeholder: "+91 98200 12345",
                                value: E.phone,
                                onChange: (k) =>
                                  v({ ...E, phone: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400 font-mono",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1.5",
                            children:
                              "How would you like to collaborate with WINQubit? (Select all that apply)",