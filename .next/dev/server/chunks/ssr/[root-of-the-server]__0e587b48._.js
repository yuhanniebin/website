module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/components/CustomCursor.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/CustomCursor.js
__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function CustomCursor() {
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const updatePosition = (e)=>{
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', updatePosition);
        return ()=>window.removeEventListener('mousemove', updatePosition);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "hidden md:block w-8.5 h-8.5 rounded-full bg-gray-300/70 pointer-events-none fixed z-[9999] transition-transform duration-100 ease-out",
        style: {
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)'
        }
    }, void 0, false, {
        fileName: "[project]/components/CustomCursor.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[externals]/aos [external] (aos, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("aos", () => require("aos"));

module.exports = mod;
}),
"[externals]/@react-three/fiber [external] (@react-three/fiber, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@react-three/fiber", () => require("@react-three/fiber"));

module.exports = mod;
}),
"[externals]/@react-three/drei [external] (@react-three/drei, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@react-three/drei", () => require("@react-three/drei"));

module.exports = mod;
}),
"[next]/internal/font/google/poppins_52f48b23.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "poppins_52f48b23-module__VqoNZa__className",
});
}),
"[next]/internal/font/google/poppins_52f48b23.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_52f48b23$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_52f48b23.module.css [ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_52f48b23$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_52f48b23$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_52f48b23$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ========================
//  💖  2025‑07‑01 Refactored Projects Section
//    • Increased width of the projects section for more space.
//    • Styled each project as a distinct card with a default shadow.
//    • Enhanced the hover effect to make the card "pop" more prominently.
//    • Corrected minor font weight and icon issues.
// ---------------------------------------------------------------
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomCursor.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronDoubleDownIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDoubleDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronDoubleDownIcon.js [ssr] (ecmascript) <export default as ChevronDoubleDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js [ssr] (ecmascript) <export default as EnvelopeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTopRightOnSquareIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTopRightOnSquareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowTopRightOnSquareIcon.js [ssr] (ecmascript) <export default as ArrowTopRightOnSquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js [ssr] (ecmascript) <export default as CodeBracketIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [ssr] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CpuChipIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CpuChipIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CpuChipIcon.js [ssr] (ecmascript) <export default as CpuChipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ScaleIcon.js [ssr] (ecmascript) <export default as ScaleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js [ssr] (ecmascript) <export default as RocketLaunchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js [ssr] (ecmascript) <export default as WrenchScrewdriverIcon>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@react-three/fiber [external] (@react-three/fiber, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@react-three/drei [external] (@react-three/drei, cjs)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_52f48b23$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_52f48b23.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
// FIX: Integrated the 3D shape component
function RotatingShape() {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["useFrame"])((state, delta)=>{
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$29$__["Icosahedron"], {
        ref: meshRef,
        args: [
            2,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meshStandardMaterial", {
            color: "#FDA4BA",
            roughness: 0.5
        }, void 0, false, {
            fileName: "[project]/pages/index.js",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/index.js",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function Home() {
    const [visibleProjects, setVisibleProjects] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(4); // only 4 visible projects
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
            duration: 700,
            once: true
        });
    }, []);
    /* ────────── Experience Data ────────── */ const experiences = [
        {
            date: "Jun 2026 – ",
            role: "Incoming Data Science Intern",
            org: "Meta",
            bullets: [
                "Incoming Data Science Internship focused on driving data-informed insights across Meta products, user behavior, and experimentation."
            ]
        },
        {
            date: "Jun 2025 – Sept 2025",
            role: "Data Science Intern",
            org: "Handshakes",
            bullets: [
                "Collaborating with product and engineering teams to scope data-driven feature improvements for Handshakes' app.",
                "Designing and monitoring product analytics dashboards to evaluate feature adoption and performance using SQL and Python."
            ]
        },
        {
            date: "Jun 2025 – Present",
            role: "Brand Ambassador",
            org: "Adobe",
            bullets: [
                "Promoting Adobe Express through student workshops, social campaigns, and peer-to-peer engagement at UCLA."
            ]
        },
        {
            date: "Mar 2025 – Jun 2025",
            role: "Data Analytics Extern",
            org: "Amazon",
            bullets: [
                "Applied NLP methods to uncover themes and sentiment patterns in unstructured employee feedback.",
                "Conducted statistical analyses to link sentiment patterns with attrition drivers, informing a targeted retention strategy."
            ]
        },
        {
            date: "Jan 2025 – Jun 2025",
            role: "Data Science Intern",
            org: "Reinforced Ventures",
            bullets: [
                "Defined metrics of founder success using lab pedigree, patent count, and startup outcomes across robotics and biotech domains.",
                "Built predictive models to identify high-potential founders based on historical data from portfolio companies."
            ]
        },
        {
            date: "Mar 2025 – Jun 2025",
            role: "Research Assistant",
            org: "UCLA Health",
            bullets: [
                "Built a statistically sound sampling framework to estimate CO₂ emissions, enabling accurate life-cycle analysis of 25K+ medical products.",
                "- Developed the first variance-aware uncertainty quantification approach in this context to ensure defensible, high-confidence emissions estimates."
            ]
        },
        {
            date: "Jun 2024 – Aug 2024",
            role: "Data Engineer Intern",
            org: "CAAS",
            bullets: [
                "Built and maintained ETL pipelines in Azure Synapse Analytics to process 10GB of aviation data daily across 20+ tables.",
                "Automated data cleaning and integration scripts in Python and Excel VBA to streamline manual workflows and reduce errors."
            ]
        }
    ];
    /* ────────── Projects Data (Updated Structure) ────────── */ const projects = [
        {
            title: "DataFest Hackathon (🏅 Winner)",
            description: "Developed data-driven insights by identifying growth drivers and forecasting high-potential regions across tech, finance, and legal sectors. Delivered recommendations to guide client leasing decisions.",
            primaryTag: "Real Estate",
            tags: [
                "Python",
                "Data Cleaning",
                "EDA",
                "GIS Plotting"
            ],
            imageUrl: "/logos/datafest.png",
            link: "/datafest-hackathon"
        },
        {
            title: "K-drama Analytics & Recommendation System",
            description: "Analyzed viewership trends, genre popularity, and audience demographics of Korean dramas to identify key features driving drama success. Built a recommender system to match users with personalized K-drama suggestions.",
            primaryTag: "Entertainment",
            tags: [
                "Machine Learning",
                "TF-IDF",
                "Feature Engineering",
                "Data Visualization"
            ],
            imageUrl: "/logos/kdrama.png",
            link: "https://ucladatares.medium.com/facts-behind-fantasy-dissecting-the-captivating-world-of-korean-dramas-8f4ed7605a08"
        },
        {
            title: "Who Can Replace Busquets? Tactical + Statistical Deep Dive",
            description: "Used player performance metrics and clustering techniques to identify modern midfielders who mirror Sergio Busquets’ unique playing style. Combined data-driven analysis with tactical context to evaluate potential successors.",
            primaryTag: "Soccer Analytics",
            tags: [
                "Cosine Similarity",
                "PCA",
                "Metrics"
            ],
            imageUrl: "/logos/football.png",
            link: "https://www.bruinsportsanalytics.com/post/sergio-busquets-heir"
        },
        {
            title: "Balancing Performance and Longevity: Modeling Injury Risk in MLB Pitcher",
            description: "Developed statistical models to quantify the relationship between pitch-type usage, workload patterns, and short-term injury risk among MLB pitchers. Applied clustering and predictive modeling techniques to identify workload profiles associated with increased injury likelihood, balancing performance output with long-term durability.",
            primaryTag: "Baseball Analytics",
            tags: [
                "Pitch Metrics",
                "Logistic Regression",
                "Poisson Regression"
            ],
            imageUrl: "/logos/mlb.png",
            link: "/project/Poster.pdf"
        },
        {
            title: "Estimating CO₂ Emissions at UCSF Health Using a Hybrid Sampling Approach",
            description: "Developed a statistically grounded sampling framework to estimate CO₂ emissions across thousands of medical products, enabling accurate life-cycle assessment. Introduced a first-of-its-kind variance-aware uncertainty quantification method to deliver defensible, high-confidence emissions estimates for institutional decision-making.",
            primaryTag: "Sampling Design",
            tags: [
                "Propensity Scoring",
                "Confidence Intervals"
            ],
            imageUrl: "/logos/ucsf_health.jpg",
            link: "/project/Research Report.pdf"
        },
        {
            title: "How Music Shapes Young Minds",
            description: "Investigated how passive listening to different music genes affect short-term memory in elementary school children. The study offers data-backed, low-cost recommendations for integrating music into early education as a cognitive support tool",
            primaryTag: "Experimental Design",
            tags: [
                "ANOVA",
                "R programming",
                "Randomized Block Design"
            ],
            imageUrl: "/logos/music pic.png",
            link: "/project/How Music Shapes Young Minds.pdf"
        }
    ];
    /* ────────── Skills Data ────────── */ const skillCategories = [
        {
            category: "Programming Languages",
            skills: [
                "Python",
                "R",
                "SQL",
                "C++",
                "HTML",
                "CSS"
            ],
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__["CodeBracketIcon"], {
                className: "w-8 h-8 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 184,
                columnNumber: 13
            }, this)
        },
        {
            category: "Data Visualization",
            skills: [
                "Tableau",
                "PowerBI",
                "Matplotlib",
                "Seaborn",
                "ggplot2",
                "plotly"
            ],
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                className: "w-8 h-8 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 189,
                columnNumber: 13
            }, this)
        },
        {
            category: "Data Analysis & ML",
            skills: [
                "pandas",
                "numpy",
                "sciki-learn",
                "pytorch",
                "tensor flow",
                "keras",
                "Google Analytics"
            ],
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CpuChipIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CpuChipIcon$3e$__["CpuChipIcon"], {
                className: "w-8 h-8 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 196,
                columnNumber: 13
            }, this)
        },
        {
            category: "Statistics",
            skills: [
                "Hypothesis Testing",
                "A/B testing",
                "Bayesian Inference",
                "Experimental Design"
            ],
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__["ScaleIcon"], {
                className: "w-8 h-8 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 202,
                columnNumber: 13
            }, this)
        },
        {
            category: "Product",
            skills: [
                "User Research",
                "A/B Testing",
                "Agile Methodology",
                "Market Research",
                "Metrics & KPI Tracking"
            ],
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__["RocketLaunchIcon"], {
                className: "w-8 h-8 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 213,
                columnNumber: 13
            }, this)
        },
        {
            category: "Tools",
            skills: [
                "Git",
                "Figma",
                "AWS",
                "Jira"
            ],
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__["WrenchScrewdriverIcon"], {
                className: "w-8 h-8 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 218,
                columnNumber: 13
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "jsx-872df3da4629a56b" + " " + `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_52f48b23$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].className} min-h-screen w-full font-sans text-gray-900`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "jsx-872df3da4629a56b" + " " + "sticky top-0 z-50 w-full bg-[#FDEFF5]/90 backdrop-blur shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-872df3da4629a56b" + " " + "max-w-6xl mx-auto flex items-center justify-between px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "jsx-872df3da4629a56b" + " " + "text-lg md:text-xl font-semibold tracking-wide",
                            children: "Hannie X."
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            className: "jsx-872df3da4629a56b" + " " + "hidden md:flex space-x-8 text-sm md:text-base font-normal text-gray-600",
                            children: [
                                [
                                    {
                                        id: "about",
                                        label: "About"
                                    },
                                    {
                                        id: "experience",
                                        label: "Experiences"
                                    },
                                    {
                                        id: "projects",
                                        label: "Projects"
                                    },
                                    {
                                        id: "skills",
                                        label: "Skills"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "jsx-872df3da4629a56b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: `#${item.id}`,
                                            className: "jsx-872df3da4629a56b" + " " + "hover:text-pink-400 transition-colors",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    className: "jsx-872df3da4629a56b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/playground",
                                        className: "flex items-center gap-1 hover:text-pink-400 transition-colors",
                                        children: [
                                            "Playground",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTopRightOnSquareIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTopRightOnSquareIcon$3e$__["ArrowTopRightOnSquareIcon"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/hannie-xie/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "jsx-872df3da4629a56b" + " " + "rounded-full border border-gray-800 px-4 py-1 text-sm md:text-base font-medium hover:bg-gray-800 hover:text-white transition-colors",
                            children: "Connect"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "jsx-872df3da4629a56b" + " " + "relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden isolate bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 animate-gradient-x",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-872df3da4629a56b" + " " + "pointer-events-none overflow-hidden absolute inset-0 -z-10",
                        children: Array.from({
                            length: 75
                        }).map((_, i)=>{
                            const size = 4 + Math.random() * 8;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDuration: `${5 + Math.random() * 5}s`,
                                    animationDelay: `${Math.random() * 5}s`
                                },
                                className: "jsx-872df3da4629a56b" + " " + "absolute rounded-full bg-white opacity-70 animate-bubble"
                            }, i, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 273,
                                columnNumber: 5
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        "data-aos": "zoom-in",
                        className: "jsx-872df3da4629a56b" + " " + "relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/profile.jpg",
                            alt: "Hannie",
                            fill: true,
                            style: {
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        "data-aos": "fade-up",
                        className: "jsx-872df3da4629a56b" + " " + "mt-8 text-4xl md:text-6xl font-semibold animate-cannon",
                        children: "Hannie Xie"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150",
                        className: "jsx-872df3da4629a56b" + " " + "mt-4 text-lg md:text-2xl text-gray-700 max-w-5xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    textShadow: '0 0 6px rgba(255, 255, 0, 0.7)'
                                },
                                className: "jsx-872df3da4629a56b" + " " + "opacity-100",
                                children: " ✨"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 307,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-872df3da4629a56b" + " " + "font-extrabold opacity-70 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent",
                                children: "transforming"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 309,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    textShadow: '0 0 6px rgba(255, 255, 0, 0.7)'
                                },
                                className: "jsx-872df3da4629a56b" + " " + "opacity-100",
                                children: " ✨"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 313,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-872df3da4629a56b" + " " + "font-medium opacity-70",
                                children: [
                                    ' ',
                                    "data into insights • ",
                                    ' '
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 315,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    textShadow: '0 0 6px rgba(255, 255, 0, 0.7)'
                                },
                                className: "jsx-872df3da4629a56b" + " " + "opacity-100",
                                children: " ✨"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 319,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-872df3da4629a56b" + " " + "font-extrabold opacity-70 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent",
                                children: "building"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 321,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    textShadow: '0 0 6px rgba(255, 255, 0, 0.7)'
                                },
                                className: "jsx-872df3da4629a56b" + " " + "opacity-100",
                                children: " ✨"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 325,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-872df3da4629a56b" + " " + "font-medium opacity-70",
                                children: [
                                    ' ',
                                    "products that matter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 327,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250",
                        className: "jsx-872df3da4629a56b" + " " + "mt-6 flex space-x-6 text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/hannie-xie/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "jsx-872df3da4629a56b" + " " + "hover:text-pink-500 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-872df3da4629a56b" + " " + "w-7 h-7",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                        className: "jsx-872df3da4629a56b"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://github.com/yuhanniebin",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "jsx-872df3da4629a56b" + " " + "hover:text-pink-500 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-872df3da4629a56b" + " " + "w-7 h-7",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "M12 .5C5.373.5 0 5.872 0 12.5c0 5.295 3.438 9.787 8.205 11.387.6.111.793-.261.793-.58 0-.287-.01-1.04-.015-2.043-3.338.725-4.042-1.607-4.042-1.607-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.235-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.01-.322 3.3 1.23a11.495 11.495 0 0 1 3-.404c1.02.004 2.048.138 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.654 1.652.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.625-5.475 5.922.43.37.815 1.096.815 2.21 0 1.596-.015 2.884-.015 3.276 0 .321.192.697.8.579C20.565 22.284 24 17.793 24 12.5 24 5.872 18.627.5 12 .5z",
                                        className: "jsx-872df3da4629a56b"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "mailto:yuhannie@g.ucla.edu",
                                className: "jsx-872df3da4629a56b" + " " + "hover:text-pink-500 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__["EnvelopeIcon"], {
                                    className: "w-7 h-7"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "#about",
                        "aria-label": "Scroll to About",
                        className: "jsx-872df3da4629a56b" + " " + "mt-20 text-gray-700 hover:text-pink-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronDoubleDownIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDoubleDownIcon$3e$__["ChevronDoubleDownIcon"], {
                            className: "w-8 h-8 animate-bounce"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "about",
                className: "jsx-872df3da4629a56b" + " " + "bg-gradient-to-b from-slate-50 via-white to-pink-50 py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-872df3da4629a56b" + " " + "relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 text-center md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            "data-aos": "zoom-in",
                            className: "jsx-872df3da4629a56b" + " " + "relative w-85 h-100 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 ring-1 ring-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/about_photo.jpg",
                                alt: "Hannie at work",
                                width: 256,
                                height: 320,
                                className: "object-cover w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            "data-aos": "fade-left",
                            className: "jsx-872df3da4629a56b" + " " + "w-full md:max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-3xl md:text-5xl font-bold mb-6 text-pink-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-872df3da4629a56b" + " " + "animate-typewriter",
                                        children: "Hey there! I am Hannie!"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-lg leading-relaxed mt-6 text-gray-700",
                                    children: "📚 Stats & Data Science major | Data Science Engineering minor @ UCLA"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-lg leading-relaxed mt-6 text-gray-700",
                                    children: [
                                        "💡 I'm passionate about the intersection of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            className: "jsx-872df3da4629a56b",
                                            children: "data"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 386,
                                            columnNumber: 54
                                        }, this),
                                        " and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            className: "jsx-872df3da4629a56b",
                                            children: "product"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 386,
                                            columnNumber: 80
                                        }, this),
                                        " - where raw numbers transform into real insights, and these insights drive meaningful change. I love being part of the full journey: from making sense of messy data to uncovering patterns through analysis or machine learning, and using all that to shape smarter, more user-friendly products."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 385,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-lg leading-relaxed mt-4 text-gray-700",
                                    children: [
                                        "There’s something incredibly rewarding about knowing the work you do can help make someone’s experience ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                            className: "jsx-872df3da4629a56b",
                                            children: "smoother, faster,"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 391,
                                            columnNumber: 109
                                        }, this),
                                        " or just ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                            className: "jsx-872df3da4629a56b",
                                            children: "better."
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 391,
                                            columnNumber: 142
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 390,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-lg leading-relaxed mt-6 text-gray-700",
                                    children: "💖 Things I love: pink 🎀, boba 🧋, dancing💃🏻, watching movies and tv shows 🎬"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 394,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-lg leading-relaxed mt-6 text-gray-700",
                                    children: "📍 Welcome to my little corner of the internet! Please feel free to reach out and happy exploring!"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 398,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "experience",
                className: "jsx-872df3da4629a56b" + " " + "bg-gradient-to-b from-pink-50 via-white to-rose-50 py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-872df3da4629a56b" + " " + "relative max-w-5xl mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            "data-aos": "fade-up",
                            className: "jsx-872df3da4629a56b" + " " + "text-center text-4xl font-semibold mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 411,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-872df3da4629a56b" + " " + "flex flex-col",
                            children: experiences.map((exp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-delay": idx * 100,
                                    className: "jsx-872df3da4629a56b" + " " + "grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] md:gap-x-8 pb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-872df3da4629a56b" + " " + "md:text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-872df3da4629a56b" + " " + "text-gray-500 text-sm mb-1",
                                                    children: exp.date
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 428,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-872df3da4629a56b" + " " + "text-lg font-semibold leading-tight text-gray-800",
                                                    children: exp.org
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 429,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-872df3da4629a56b" + " " + "text-lg italic text-gray-600",
                                                    children: exp.role
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 430,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 427,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-872df3da4629a56b" + " " + "hidden md:flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-872df3da4629a56b" + " " + "w-4 h-4 bg-pink-300 rounded-full border-4 border-white shadow-lg flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 436,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-872df3da4629a56b" + " " + "w-px h-full bg-gray-300 mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 437,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 435,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "jsx-872df3da4629a56b" + " " + "list-disc list-inside space-y-2 text-gray-700 mt-4 md:mt-0",
                                            children: exp.bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    className: "jsx-872df3da4629a56b",
                                                    children: b
                                                }, i, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 443,
                                                    columnNumber: 15
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 441,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 420,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 418,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 410,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 406,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "jsx-872df3da4629a56b" + " " + "bg-gradient-to-b from-rose-50 via-pink-50 to-slate-50 py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-872df3da4629a56b" + " " + "relative max-w-7xl mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            "data-aos": "fade-up",
                            className: "jsx-872df3da4629a56b" + " " + "text-center text-4xl font-semibold mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",
                            children: "Featured Projects"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 458,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-872df3da4629a56b" + " " + "flex flex-col gap-16",
                            children: [
                                projects.slice(0, visibleProjects).map((project, idx)=>{
                                    const cardClasses = "block p-8 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2";
                                    const cardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-872df3da4629a56b" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-872df3da4629a56b" + " " + "flex flex-col gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-872df3da4629a56b" + " " + "text-2xl font-bold text-gray-800",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 472,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-872df3da4629a56b" + " " + "flex flex-wrap items-center gap-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-872df3da4629a56b" + " " + "text-sm font-semibold text-gray-700 bg-gray-200 px-3 py-1 rounded-full",
                                                            children: project.primaryTag
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.js",
                                                            lineNumber: 474,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 473,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "jsx-872df3da4629a56b" + " " + "text-gray-600 leading-relaxed mt-2",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 478,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-872df3da4629a56b" + " " + "flex flex-wrap gap-x-3 gap-y-2 mt-2",
                                                        children: project.tags.map((tag, tagIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-872df3da4629a56b" + " " + "text-sm text-gray-500 font-medium",
                                                                children: [
                                                                    tag,
                                                                    tagIdx < project.tags.length - 1 ? ' •' : ''
                                                                ]
                                                            }, tagIdx, true, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 481,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 479,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 471,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-872df3da4629a56b" + " " + "relative aspect-video rounded-xl overflow-hidden shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: project.imageUrl,
                                                    alt: `Screenshot of ${project.title}`,
                                                    layout: "fill",
                                                    className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                                    onError: (e)=>{
                                                        e.currentTarget.src = 'https://placehold.co/1600x900/fdeff5/374151?text=Project+Image';
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 488,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 487,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 470,
                                        columnNumber: 11
                                    }, this);
                                    const linkProps = {
                                        className: `${cardClasses} cursor-pointer`,
                                        "data-aos": "fade-up",
                                        "data-aos-delay": idx * 150,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    };
                                    return project.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: project.link,
                                        passHref: true,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            ...linkProps,
                                            className: "jsx-872df3da4629a56b" + " " + (linkProps && linkProps.className != null && linkProps.className || ""),
                                            children: cardContent
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 509,
                                            columnNumber: 13
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 508,
                                        columnNumber: 11
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": idx * 150,
                                        className: "jsx-872df3da4629a56b" + " " + (cardClasses || ""),
                                        children: cardContent
                                    }, idx, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 514,
                                        columnNumber: 11
                                    }, this);
                                }),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 465,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-872df3da4629a56b" + " " + "mt-16 text-center",
                            children: visibleProjects < projects.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setVisibleProjects(projects.length),
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.backgroundColor = '#FDA4BA';
                                    e.currentTarget.style.borderColor = 'transparent';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'black';
                                },
                                className: "jsx-872df3da4629a56b" + " " + "inline-flex items-center gap-2 text-black px-8 py-3 rounded-lg font-semibold border border-black bg-transparent transition-all duration-300 transform hover:scale-105 hover:text-white",
                                children: "View More"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 528,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 526,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 457,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 453,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "skills",
                className: "jsx-872df3da4629a56b" + " " + "bg-gradient-to-b from-slate-50 via-pink-50 to-rose-200 py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-872df3da4629a56b" + " " + "relative max-w-6xl mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            "data-aos": "fade-up",
                            className: "jsx-872df3da4629a56b" + " " + "text-center text-4xl font-semibold mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",
                            children: "Technical Skills"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-872df3da4629a56b" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: skillCategories.map((category, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-delay": idx * 100,
                                    className: "jsx-872df3da4629a56b" + " " + "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-500 ring-1 ring-gray-200 hover:ring-gray-200 transform hover:-translate-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-872df3da4629a56b" + " " + "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-872df3da4629a56b" + " " + "mr-4 flex-shrink-0",
                                                    children: category.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-872df3da4629a56b" + " " + "text-xl font-bold text-gray-800",
                                                    children: category.category
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 567,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-872df3da4629a56b" + " " + "grid grid-cols-2 gap-3",
                                            children: category.skills.map((skill, skillIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-872df3da4629a56b" + " " + "bg-pink-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-pink-100 transition-colors cursor-default border border-pink-100",
                                                    children: skill
                                                }, skillIdx, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 572,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            "data-aos": "fade-up",
                            className: "jsx-872df3da4629a56b" + " " + "mt-1 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-872df3da4629a56b" + " " + "h-96 w-full max-w-2xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["Canvas"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ambientLight", {
                                                intensity: 0.8,
                                                className: "jsx-872df3da4629a56b"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 588,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("directionalLight", {
                                                position: [
                                                    10,
                                                    10,
                                                    5
                                                ],
                                                intensity: 1.5,
                                                className: "jsx-872df3da4629a56b"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 589,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("directionalLight", {
                                                position: [
                                                    -10,
                                                    -10,
                                                    -5
                                                ],
                                                intensity: 0.7,
                                                className: "jsx-872df3da4629a56b"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 590,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RotatingShape, {}, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 591,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$29$__["OrbitControls"], {
                                                enableZoom: false,
                                                enablePan: false
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 592,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 587,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-872df3da4629a56b" + " " + "mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-872df3da4629a56b" + " " + "text-xl text-gray-700 mb-6",
                                            children: "Curious to know more about me and my work?"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/playground",
                                            passHref: true,
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                style: {
                                                    transition: 'all 0.3s ease'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.backgroundColor = '#FDA4BA';
                                                    e.currentTarget.style.borderColor = 'transparent';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                    e.currentTarget.style.borderColor = 'black';
                                                },
                                                className: "jsx-872df3da4629a56b" + " " + "inline-flex items-center gap-2 text-black px-8 py-3 rounded-full font-semibold border border-black bg-transparent transition-all duration-300 transform hover:scale-105 hover:text-white",
                                                children: [
                                                    "Explore my Playground",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTopRightOnSquareIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTopRightOnSquareIcon$3e$__["ArrowTopRightOnSquareIcon"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            "data-aos": "fade-up",
                            className: "jsx-872df3da4629a56b" + " " + "mt-10 border-t border-gray-300 pt-16 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-872df3da4629a56b" + " " + "text-4xl md:text-5xl font-medium text-gray-700 flex items-center justify-center gap-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            role: "img",
                                            "aria-label": "sparkle",
                                            className: "jsx-872df3da4629a56b" + " " + "text-3xl",
                                            children: "✨"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 627,
                                            columnNumber: 15
                                        }, this),
                                        "Get in touch",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            role: "img",
                                            "aria-label": "sparkle",
                                            className: "jsx-872df3da4629a56b" + " " + "text-3xl",
                                            children: "✨"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 626,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-872df3da4629a56b" + " " + "mt-6 text-lg text-gray-700 max-w-xl mx-auto",
                                    children: [
                                        "Feel free to contact me at",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "mailto:yuhan.xie04@gmail.com",
                                            className: "jsx-872df3da4629a56b" + " " + "text-pink-400 font-medium hover:underline",
                                            children: "yuhan.xie04@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-872df3da4629a56b" + " " + "mt-8 flex items-center justify-center gap-x-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "mailto:yuhan.xie04@gmail.com",
                                            "aria-label": "Email Hannie",
                                            title: "Email Hannie",
                                            className: "jsx-872df3da4629a56b" + " " + "text-gray-500 hover:text-pink-400 transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__["EnvelopeIcon"], {
                                                className: "w-8 h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 652,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/in/hannie-xie/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "Hannie's LinkedIn Profile",
                                            title: "LinkedIn Profile",
                                            className: "jsx-872df3da4629a56b" + " " + "text-gray-500 hover:text-pink-400 transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                "aria-hidden": "true",
                                                className: "jsx-872df3da4629a56b" + " " + "w-7 h-7",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                                    className: "jsx-872df3da4629a56b"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 666,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 665,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 547,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "872df3da4629a56b",
                children: "@keyframes gradient-x{0%,to{background-position:0%}50%{background-position:100%}}.animate-gradient-x{background-size:200% 200%;animation:10s ease-in-out infinite alternate gradient-x}@keyframes cannon{0%{opacity:0;transform:scale(.7)}30%{opacity:1;transform:scale(1.2)}50%{transform:scale(.9)}65%{transform:scale(1.1)}80%{transform:scale(.98)}to{transform:scale(1)}}.animate-cannon{animation:1.5s ease-in-out both cannon}@keyframes floatBubble{0%{opacity:0;transform:translate(0)scale(.9)}40%{opacity:.8;transform:translate(20px,-25px)scale(1.15)}70%{opacity:.8;transform:translate(-15px,20px)scale(1.05)}to{opacity:0;transform:translate(-10px,-15px)scale(.9)}}.animate-bubble{animation:12s ease-in-out infinite floatBubble}@keyframes typing{0%{width:0}to{width:19ch}}@keyframes blink-caret{0%,to{border-color:#0000}50%{border-color:#f9a8d4}}.animate-typewriter{white-space:nowrap;border-right:.15em solid #f472b6;animation-name:typing,blink-caret;animation-duration:2.5s,.75s;animation-timing-function:steps(24,end),step-end;animation-iteration-count:1,infinite;animation-direction:normal,normal;animation-play-state:paused;animation-delay:0s,0s;animation-fill-mode:forwards,none;animation-timeline:auto,auto;display:inline-block;overflow:hidden}[data-aos=fade-left].aos-animate .animate-typewriter{animation-play-state:running}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0e587b48._.js.map