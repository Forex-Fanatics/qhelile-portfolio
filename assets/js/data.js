/* ============================================================
   SITE CONTENT
   Add new publications, projects, posters, or timeline entries
   by adding a new object to the matching array below.
   Nothing else in the code needs to change.
   ============================================================ */

const SITE_DATA = {
  roles: [
    "VR & Robotics Researcher",
    "HCI PhD Student",
    "Trading Systems Builder",
    "DJ & Music Creator"
  ],

  timeline: [
    {
      date: "2023 — Current",
      title: "Graduate Student Researcher",
      org: "Inclusive Interaction Lab (IIL), University of California, Merced",
      points: [
        "Conduct HCI research on virtual reality (VR) input and interaction techniques and telepresence robot control using the Ohmni robot platform.",
        "Design and run user studies comparing gesture-based, smartwatch, and VR-based control methods for robot teleoperation.",
        "Perform quantitative analysis of user performance and preference data to inform interface design."
      ]
    },
    {
      date: "2024 — Current",
      title: "Graduate Teaching Assistant",
      org: "University of California, Merced",
      points: [
        "Support instruction, grading, and office hours for Introduction to HCI and Full Stack Web Development."
      ]
    },
    {
      date: "2024 — 2025",
      title: "Delegate, Electrical Engineering & Computer Science",
      org: "UC Merced Graduate Student Association (GSA)",
      points: [
        "Represented EECS graduate students in the GSA Delegate Assembly.",
        "Contributed graphics and design support for GSA communications."
      ]
    }
  ],

  publications: [
    {
      type: "paper",
      year: "2026",
      venue: "IEEE TELEPRESENCE 2026 · To appear",
      title: "WristWalker: Enhancing Desktop Telepresence Robot Interfaces with Smartwatch-Based Control",
      authors: ["Qhelile Ozias Sibanda", "Ahmed Sabbir Arif"],
      me: "Qhelile Ozias Sibanda",
      links: []
    },
    {
      type: "paper",
      year: "2026",
      venue: "GI 2026 · To appear",
      title: "WinkSwype: A Wink-Based, Hands-Free Shape-Writing Method for VR Using Single-Eye Calibration",
      authors: ["Tafadzwa Joseph Dube", "Qhelile Ozias Sibanda", "I. Scott MacKenzie", "Ahmed Sabbir Arif"],
      me: "Qhelile Ozias Sibanda",
      links: []
    },
    {
      type: "paper",
      year: "2026",
      venue: "PETRA 2026 · To appear",
      title: "Designing for Everyday Mobility: A Market- and User-Driven Study of Adult e-Scooters",
      authors: ["Serenity Reign Bassett", "Qhelile Ozias Sibanda", "Ahmed Sabbir Arif"],
      me: "Qhelile Ozias Sibanda",
      links: []
    }
  ],

  projects: {
    research: [
      {
        stack: "Wear OS · Python · Node.js · WebSockets",
        title: "WristWalker",
        desc: "Compared smartwatch gesture control versus web-based control of an Ohmni telepresence robot across a 10-participant IRB-approved study."
      },
      {
        stack: "VR · Single-Eye Calibration",
        title: "WinkSwype",
        desc: "A wink-based, hands-free shape-writing method for VR, letting users swipe-type using winks instead of hand controllers."
      }
    ],
    personal: [
      {
        stack: "React",
        title: "TradeFlow — Trading Journal",
        desc: "A professional-grade trading journal,learning + mentorship platform,  with multi-account management, automatic P&L, and analytics dashboards.",
        link: "https://qtradeflow.com"
      },
      {
        stack: "MetaTrader 4/5 · MQL5 · Deriv",
        title: "MQL5 / MQL4 Trading Tools",
        desc: "A suite of automated trading tools including EMA crossover expert advisors, a supply and demand zone indicator, and an ICC state-machine expert advisor."
      },
      {
        stack: "OpenGL · Unity3D · C",
        title: "3D Race Game",
        desc: "A retro brick-game-inspired race game built with stack and queue data structures, later ported into virtual reality."
      },
      {
        stack: "Blender",
        title: "Cartoon Character Creation",
        desc: "A rigged, posable 3D human cartoon character modeled from scratch, covering sculpting, topology, UV unwrapping, texturing, and rigging."
      },
      {
        stack: "Python · Machine Learning",
        title: "WhatsApp Sports Betting Platform",
        desc: "An interactive WhatsApp chatbot that processed bets against live odds and stats, linked to a database for user management."
      },
      {
        stack: "Markdown · HTML · Excel/VBA",
        title: "CSE 005 Teaching Materials",
        desc: "Answer keys, grading guides, and interactive classroom review games for an introductory computer science course."
      }
    ]
  },

  posters: [
    {
      title: "WinkSwype: A Wink-Based, Hands-Free Shape-Writing Method for VR Using Single-Eye Calibration",
      venue: "52nd Graphics Interface Conference (GI 2026)"
    },
    {
      title: "Designing for Everyday Mobility: A Market- and User-Driven Study of Adult e-Scooters",
      venue: "PETRA 2026"
    }
  ],

  awards: [
    { name: "EECS Bobcat Summer Fellowship", amount: "$11,000", year: "2024, 2025, 2026", org: "University of California, Merced, CA, USA" },
    { name: "Forex Funded Account Trader", year: "2025", org: "Equity Edge Prop Firm, UK" },
    { name: "Best Worker of the Month", year: "2023", org: "Integrity Business Solutions, Bulawayo, Zimbabwe" },
    { name: "Best Student Award", year: "2021", org: "National University of Science and Technology, Zimbabwe" },
    { name: "Best Actor Award", year: "2016", org: "Thekwane High School, Zimbabwe" },
    { name: "Math's Wizard Award", year: "2015", org: "Thekwane High School, Zimbabwe" },
    { name: "Well Dressed Boy Award", year: "2014", org: "Thekwane High School, Zimbabwe" }
  ]
};
