// ============================================================
// PINCH MASTER PRO v8.0 - APP.JS
// Developer: Hossein Sahraei
// ============================================================

// ==========================================
// TRANSLATIONS (i18n)
// ==========================================
const I18N = {
    fa: {
        subtitle: "نرم‌افزار جامع تحلیل تکنولوژی پینچ",
        settings: "تنظیمات", dtmin: "ΔTmin (°C)", language: "زبان", units: "واحدها",
        examples: "مثال‌ها", ex4: "۴ جریانه (Kemp)", ex7: "۷ جریانه (PDF)",
        clearAll: "پاک کردن", project: "پروژه", save: "ذخیره", export: "خروجی JSON",
        import: "ورود JSON", status: "وضعیت", streams: "جریان", hotcold: "گرم/سرد",
        help: "راهنما", openHelp: "راهنمای کامل", developer: "توسعه‌دهنده",
        tabData: "داده‌ها", tabPTA: "جدول مسئله", tabCurves: "منحنی‌ها",
        tabGrid: "پنجره‌ای", tabHEN: "طراحی HEN", tabSuper: "Supertargeting",
        tabUtils: "یوتیلیتی", tabProcess: "تغییر فرآیند", tabExergy: "اکسری",
        tabEquip: "تجهیزات", tabDist: "تقطیر", tabCHP: "CHP", tabRef: "تبرید و آب",
        tabReport: "گزارش", dataTitle: "ورود داده‌های جریان",
        colName: "نام", colTs: "Ts (°C)", colTt: "Tt (°C)", colCP: "CP (kW/K)",
        colH: "h (kW/m²K)", colType: "نوع", addRow: "افزودن", calculate: "محاسبه",
        ptaTitle: "جدول مسئله و کاسکاد", exportCSV: "خروجی CSV",
        curvesTitle: "منحنی‌های ترکیبی و جامع", gridTitle: "نمودار پنجره‌ای",
        henTitle: "طراحی شبکه مبدل‌ها (HEN)",
        henHint: "طراحی از پینچ شروع می‌شود. بالای پینچ: CPhot ≤ CPcold | پایین پینچ: CPhot ≥ CPcold",
        hHot: "ضریب h گرم (kW/m²K)", hCold: "ضریب h سرد (kW/m²K)", designHEN: "طراحی شبکه",
        superTitle: "Supertargeting - یافتن ΔTmin بهینه",
        superHint: "محاسبه نقطه بهینه اقتصادی بر اساس تعادل هزینه انرژی و سرمایه‌گذاری",
        hHotFilm: "ضریب h گرم (kW/m²K)", hColdFilm: "ضریب h سرد (kW/m²K)",
        energyCost: "هزینه انرژی (€/kWh)", annualHours: "ساعات کار سالانه",
        capitalA: "ضریب a (هزینه ثابت)", capitalB: "ضریب b (هزینه بر واحد سطح)",
        capitalC: "ضریب c (توان)", payback: "دوره بازگشت (سال)", runSuper: "محاسبه Supertargeting",
        utilTitle: "یوتیلیتی چندسطحی", utilHint: "تعریف سطوح مختلف بخار (HP/MP/LP) و انتخاب بهینه از روی GCC",
        runUtil: "تحلیل یوتیلیتی", processTitle: "تحلیل تغییر فرآیند",
        processHint: "Plus-Minus Principle و شناسایی مبدل‌های Cross-Pinch",
        plusMinus: "📊 اصل مثبت-منفی (Plus-Minus)", selectStream: "انتخاب جریان",
        newTs: "دمای شروع جدید Ts (°C)", newTt: "دمای پایان جدید Tt (°C)", runPlusMinus: "تحلیل تغییر",
        violators: "🚨 شناسایی مبدل‌های Cross-Pinch", violatorsHint: "مبدل‌های موجود را وارد کنید تا مبدل‌هایی که از پینچ عبور می‌کنند شناسایی شوند.",
        exName: "نام مبدل", exHot: "جریان گرم", exCold: "جریان سرد", exQ: "Q (kW)",
        addExchanger: "افزودن مبدل", detectViolators: "شناسایی",
        exergyTitle: "تحلیل اکسرژی", equipTitle: "جای‌گذاری تجهیزات",
        optFurnace: "🔥 کوره", optTurbine: "⚙️ توربین", optHeatpump: "♻️ پمپ حرارتی", optDistillation: "🏗️ برج تقطیر",
        distTitle: "تحلیل برج تقطیر (Split GCC)", distTreb: "دمای ریبویلر (°C)",
        distTcon: "دمای کندانسور (°C)", distQreb: "بار ریبویلر (kW)", distQcon: "بار کندانسور (kW)",
        chpTitle: "تحلیل CHP", chpHeat: "تقاضای حرارت (kW)", chpPower: "تقاضای برق (kW)",
        chpFuel: "هزینه سوخت (€/kWh)", chpElec: "قیمت برق (€/kWh)", chpBoiler: "راندمان بویلر",
        chpElecEff: "راندمان الکتریکی CHP", chpHeatEff: "راندمان حرارتی CHP", calcCHP: "محاسبه CHP",
        refTitle: "تحلیل تبرید", refLoad: "بار سرمایشی (kW)", refTproc: "دمای فرآیند (°C)",
        refTamb: "دمای محیط (°C)", refdTevap: "ΔT اواپراتور (K)", refdTcond: "ΔT کندانسور (K)",
        refEta: "راندمان آیزنتروپیک", calcRef: "محاسبه تبرید",
        waterTitle: "پینچ آب", calcWater: "تحلیل پینچ آب",
        reportTitle: "گزارش جامع", genReport: "تولید گزارش", savePDF: "ذخیره PDF"
    },
    en: {
        subtitle: "Comprehensive Pinch Technology Analysis Software",
        settings: "Settings", dtmin: "ΔTmin (°C)", language: "Language", units: "Units",
        examples: "Examples", ex4: "4-Stream (Kemp)", ex7: "7-Stream (PDF)",
        clearAll: "Clear All", project: "Project", save: "Save", export: "Export JSON",
        import: "Import JSON", status: "Status", streams: "Streams", hotcold: "Hot/Cold",
        help: "Help", openHelp: "Full Help", developer: "Developer",
        tabData: "Data", tabPTA: "Problem Table", tabCurves: "Curves",
        tabGrid: "Grid", tabHEN: "HEN Design", tabSuper: "Supertargeting",
        tabUtils: "Utilities", tabProcess: "Process Change", tabExergy: "Exergy",
        tabEquip: "Equipment", tabDist: "Distillation", tabCHP: "CHP", tabRef: "Refrigeration & Water",
        tabReport: "Report", dataTitle: "Stream Data Entry",
        colName: "Name", colTs: "Ts (°C)", colTt: "Tt (°C)", colCP: "CP (kW/K)",
        colH: "h (kW/m²K)", colType: "Type", addRow: "Add Row", calculate: "Calculate",
        ptaTitle: "Problem Table & Cascade", exportCSV: "Export CSV",
        curvesTitle: "Composite & Grand Composite Curves", gridTitle: "Grid Diagram",
        henTitle: "Heat Exchanger Network (HEN) Design",
        henHint: "Design starts at pinch. Above: CPhot ≤ CPcold | Below: CPhot ≥ CPcold",
        hHot: "Hot h (kW/m²K)", hCold: "Cold h (kW/m²K)", designHEN: "Design Network",
        superTitle: "Supertargeting - Optimal ΔTmin",
        superHint: "Find economic optimum balancing energy and capital costs",
        hHotFilm: "Hot h (kW/m²K)", hColdFilm: "Cold h (kW/m²K)",
        energyCost: "Energy Cost (€/kWh)", annualHours: "Annual Hours",
        capitalA: "Capital a (fixed)", capitalB: "Capital b (per unit area)",
        capitalC: "Capital c (power)", payback: "Payback (years)", runSuper: "Run Supertargeting",
        utilTitle: "Multi-Level Utilities", utilHint: "Define HP/MP/LP steam levels and optimize from GCC",
        runUtil: "Analyze Utilities", processTitle: "Process Change Analysis",
        processHint: "Plus-Minus Principle and Cross-Pinch Detection",
        plusMinus: "📊 Plus-Minus Principle", selectStream: "Select Stream",
        newTs: "New Supply Temp (°C)", newTt: "New Target Temp (°C)", runPlusMinus: "Analyze",
        violators: "🚨 Cross-Pinch Detection", violatorsHint: "Enter existing exchangers to detect cross-pinch violations",
        exName: "Exchanger Name", exHot: "Hot Stream", exCold: "Cold Stream", exQ: "Q (kW)",
        addExchanger: "Add Exchanger", detectViolators: "Detect",
        exergyTitle: "Exergy Analysis", equipTitle: "Equipment Placement",
        optFurnace: "🔥 Furnace", optTurbine: "⚙️ Turbine", optHeatpump: "♻️ Heat Pump", optDistillation: "🏗️ Distillation",
        distTitle: "Distillation Column (Split GCC)", distTreb: "Reboiler Temp (°C)",
        distTcon: "Condenser Temp (°C)", distQreb: "Reboiler Duty (kW)", distQcon: "Condenser Duty (kW)",
        chpTitle: "Combined Heat & Power (CHP)", chpHeat: "Heat Demand (kW)", chpPower: "Power Demand (kW)",
        chpFuel: "Fuel Cost (€/kWh)", chpElec: "Electricity Price (€/kWh)", chpBoiler: "Boiler Efficiency",
        chpElecEff: "CHP Electrical Efficiency", chpHeatEff: "CHP Heat Recovery", calcCHP: "Calculate CHP",
        refTitle: "Refrigeration Analysis", refLoad: "Cooling Load (kW)", refTproc: "Process Temp (°C)",
        refTamb: "Ambient Temp (°C)", refdTevap: "ΔT Evaporator (K)", refdTcond: "ΔT Condenser (K)",
        refEta: "Isentropic Efficiency", calcRef: "Calculate Refrigeration",
        waterTitle: "Water Pinch", calcWater: "Analyze Water Pinch",
        reportTitle: "Comprehensive Report", genReport: "Generate Report", savePDF: "Save PDF"
    }
};

// ==========================================
// ENGINE - Core Calculations
// ==========================================
const Engine = {
    round: (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n),

    problemTable(streams, dTmin) {
        const hot = streams.filter(s => s.Ts > s.Tt);
        const cold = streams.filter(s => s.Ts < s.Tt);
        const tempsSet = new Set();
        hot.forEach(s => {
            tempsSet.add(this.round(s.Ts - dTmin / 2, 4));
            tempsSet.add(this.round(s.Tt - dTmin / 2, 4));
        });
        cold.forEach(s => {
            tempsSet.add(this.round(s.Ts + dTmin / 2, 4));
            tempsSet.add(this.round(s.Tt + dTmin / 2, 4));
        });
        const temps = Array.from(tempsSet).sort((a, b) => b - a);
        const rows = [];
        for (let i = 0; i < temps.length - 1; i++) {
            const Th = temps[i], Tl = temps[i + 1], dT = Th - Tl;
            const cph = hot.filter(s => s.Ts - dTmin / 2 >= Th - 1e-5 && s.Tt - dTmin / 2 <= Tl + 1e-5).reduce((sum, s) => sum + s.CP, 0);
            const cpc = cold.filter(s => s.Tt + dTmin / 2 >= Th - 1e-5 && s.Ts + dTmin / 2 <= Tl + 1e-5).reduce((sum, s) => sum + s.CP, 0);
            rows.push({ Th, Tl, dT, CPh: cph, CPc: cpc, dH: (cph - cpc) * dT });
        }
        const cascade = [0];
        rows.forEach(r => cascade.push(cascade[cascade.length - 1] + r.dH));
        const minC = Math.min(...cascade);
        const QHmin = Math.max(0, -minC);
        const cascadeCorr = cascade.map(c => c + QHmin);
        const QCmin = cascadeCorr[cascadeCorr.length - 1];
        let pinchShifted, ptype;
        if (QHmin > 1e-5 && QCmin > 1e-5) { pinchShifted = temps[cascade.indexOf(minC)]; ptype = 'internal'; }
        else if (QHmin <= 1e-5) { pinchShifted = temps[0]; ptype = 'threshold_hot'; }
        else { pinchShifted = temps[temps.length - 1]; ptype = 'threshold_cold'; }
        return { temps, rows, cascade, cascadeCorr, QHmin, QCmin, pinchShifted,
            pinchHot: pinchShifted + dTmin / 2, pinchCold: pinchShifted - dTmin / 2, pinchType: ptype };
    },

    // Real composite curves with T-H data for hot and cold separately
    compositeCurves(streams, dTmin) {
        const hot = streams.filter(s => s.Ts > s.Tt);
        const cold = streams.filter(s => s.Ts < s.Tt);
        const shifted = (t, isHot) => isHot ? t - dTmin / 2 : t + dTmin / 2;

        // Hot composite
        const hotTemps = new Set();
        hot.forEach(s => { hotTemps.add(shifted(s.Ts, true)); hotTemps.add(shifted(s.Tt, true)); });
        const hTemps = Array.from(hotTemps).sort((a, b) => b - a);
        const hotCurve = [];
        let H = 0;
        for (let i = 0; i < hTemps.length - 1; i++) {
            const Th = hTemps[i], Tl = hTemps[i + 1];
            hotCurve.push({ T: Th, H: H });
            const cp = hot.filter(s => shifted(s.Ts, true) >= Th - 1e-5 && shifted(s.Tt, true) <= Tl + 1e-5).reduce((a, s) => a + s.CP, 0);
            H += cp * (Th - Tl);
        }
        if (hTemps.length > 0) hotCurve.push({ T: hTemps[hTemps.length - 1], H: H });

        // Cold composite
        const coldTemps = new Set();
        cold.forEach(s => { coldTemps.add(shifted(s.Ts, false)); coldTemps.add(shifted(s.Tt, false)); });
        const cTemps = Array.from(coldTemps).sort((a, b) => a - b);
        const coldCurve = [];
        let H2 = 0;
        for (let i = 0; i < cTemps.length - 1; i++) {
            const Tl = cTemps[i], Th = cTemps[i + 1];
            coldCurve.push({ T: Tl, H: H2 });
            const cp = cold.filter(s => shifted(s.Ts, false) <= Th + 1e-5 && shifted(s.Tt, false) >= Tl - 1e-5).reduce((a, s) => a + s.CP, 0);
            H2 += cp * (Th - Tl);
        }
        if (cTemps.length > 0) coldCurve.push({ T: cTemps[cTemps.length - 1], H: H2 });

        return { hot: hotCurve, cold: coldCurve, totalHot: H, totalCold: H2 };
    },

    // Area Targeting with individual film coefficients
    areaTargeting(streams, pt, dTmin, hHot = 0.5, hCold = 0.5) {
        const intervals = [];
        let totalArea = 0;
        for (let i = 0; i < pt.rows.length; i++) {
            const r = pt.rows[i];
            const hotStreams = streams.filter(s => s.Ts > s.Tt && s.Ts - dTmin / 2 >= r.Th - 1e-5 && s.Tt - dTmin / 2 <= r.Tl + 1e-5);
            const coldStreams = streams.filter(s => s.Ts < s.Tt && s.Tt + dTmin / 2 >= r.Th - 1e-5 && s.Ts + dTmin / 2 <= r.Tl + 1e-5);
            const Qh = hotStreams.reduce((sum, s) => sum + s.CP * r.dT, 0);
            const Qc = coldStreams.reduce((sum, s) => sum + s.CP * r.dT, 0);
            const hh = hotStreams.length > 0 ? hotStreams.reduce((s, x) => s + (x.h || hHot), 0) / hotStreams.length : hHot;
            const hc = coldStreams.length > 0 ? coldStreams.reduce((s, x) => s + (x.h || hCold), 0) / coldStreams.length : hCold;
            const LMTD = r.dT > 1e-5 ? r.dT : 1e-5;
            let area = 0;
            if (Qh > 1e-5 && hh > 0) area += Qh / (hh * LMTD);
            if (Qc > 1e-5 && hc > 0) area += Qc / (hc * LMTD);
            totalArea += area;
            intervals.push({ Th: r.Th, Tl: r.Tl, dT: r.dT, Qh, Qc, hh, hc, LMTD, area });
        }
        return { intervals, totalArea };
    },

    // Minimum number of units
    unitsTargeting(pt, streams, dTmin) {
        const isInternal = pt.pinchType === 'internal';
        if (!isInternal) {
            return { Nmin: streams.length - 1, formula: 'N-1 (no pinch)' };
        }
        const aboveHot = streams.filter(s => s.Ts > s.Tt && s.Ts > pt.pinchHot).length;
        const aboveCold = streams.filter(s => s.Ts < s.Tt && s.Tt > pt.pinchCold).length;
        const belowHot = streams.filter(s => s.Ts > s.Tt && s.Tt < pt.pinchHot).length;
        const belowCold = streams.filter(s => s.Ts < s.Tt && s.Ts < pt.pinchCold).length;
        const Nabove = aboveHot + aboveCold + 1; // +1 for hot utility
        const Nbelow = belowHot + belowCold + 1; // +1 for cold utility
        const Umin = Math.max(0, Nabove - 1) + Math.max(0, Nbelow - 1);
        return { Nmin: Umin, above: Nabove - 1, below: Nbelow - 1, formula: `Above: ${Nabove}-1 | Below: ${Nbelow}-1` };
    },

    exergy(streams, T0 = 298.15) {
        const results = streams.map(s => {
            let dE = 0;
            if (Math.abs(s.Ts - s.Tt) > 1e-5) {
                const Th = s.Ts + 273.15, Tc = s.Tt + 273.15;
                dE = s.CP * ((Tc - Th) - T0 * Math.log(Tc / Th));
            }
            return { name: s.Name, type: s.Ts > s.Tt ? 'Hot' : 'Cold', dE };
        });
        const Esup = -results.filter(r => r.type === 'Hot').reduce((s, r) => s + r.dE, 0);
        const Erec = results.filter(r => r.type === 'Cold').reduce((s, r) => s + r.dE, 0);
        return { results, Esup, Erec, Edest: Esup - Erec, eff: Esup > 0 ? Erec / Esup : 0 };
    },

    // HEN Design (Tick-off with stream splitting)
    designHEN(streams, pt, dTmin, hHot = 0.5, hCold = 0.5) {
        const matches = [], utilities = [];
        const regions = pt.pinchType === 'internal' ? ['above', 'below'] :
                        pt.pinchType === 'threshold_hot' ? ['below'] : ['above'];

        for (const region of regions) {
            const ph = pt.pinchShifted + dTmin / 2;
            const pc = pt.pinchShifted - dTmin / 2;
            let hot = [], cold = [];

            for (const s of streams) {
                if (s.Ts > s.Tt) {
                    let Th, Tc;
                    if (region === 'above' && s.Ts > ph + 1e-5) {
                        Th = s.Ts; Tc = Math.max(s.Tt, ph);
                    } else if (region === 'below' && s.Tt < ph - 1e-5) {
                        Th = Math.min(s.Ts, ph); Tc = s.Tt;
                    } else continue;
                    if (Th > Tc + 1e-5) {
                        hot.push({ name: s.Name, Th, Tc, CP: s.CP, Q: s.CP * (Th - Tc), front: pt.pinchShifted, h: s.h || hHot });
                    }
                } else {
                    let Th, Tc;
                    if (region === 'above' && s.Tt > pc + 1e-5) {
                        Th = s.Tt; Tc = Math.max(s.Ts, pc);
                    } else if (region === 'below' && s.Ts < pc - 1e-5) {
                        Th = Math.min(s.Tt, pc); Tc = s.Ts;
                    } else continue;
                    if (Th > Tc + 1e-5) {
                        cold.push({ name: s.Name, Th, Tc, CP: s.CP, Q: s.CP * (Th - Tc), front: pt.pinchShifted, h: s.h || hCold });
                    }
                }
            }

            let iterations = 0;
            while (hot.length && cold.length && iterations < 500) {
                iterations++;
                let level, h, c;
                if (region === 'above') {
                    hot.sort((a, b) => b.front - a.front);
                    cold.sort((a, b) => b.front - a.front);
                    level = Math.max(hot[0].front, cold[0].front);
                    h = hot[0]; c = cold[0];
                    if (h.CP > c.CP + 1e-5) {
                        const cpH = h.CP, cpC = c.CP;
                        const qNew = c.Q;
                        const h1 = { ...h, name: h.name + '.1', CP: cpC, Q: qNew };
                        const h2 = { ...h, name: h.name + '.2', CP: cpH - cpC, Q: h.Q - qNew };
                        hot.splice(0, 1, h1, h2); h = h1;
                    }
                } else {
                    hot.sort((a, b) => a.front - b.front);
                    cold.sort((a, b) => a.front - b.front);
                    level = Math.min(hot[0].front, cold[0].front);
                    h = hot[0]; c = cold[0];
                    if (h.CP < c.CP - 1e-5) {
                        const cpH = h.CP, cpC = c.CP;
                        const qNew = h.Q;
                        const c1 = { ...c, name: c.name + '.1', CP: cpH, Q: qNew };
                        const c2 = { ...c, name: c.name + '.2', CP: cpC - cpH, Q: c.Q - qNew };
                        cold.splice(0, 1, c1, c2); c = c1;
                    }
                }
                const Q = Math.min(h.Q, c.Q);
                const Thi = level + dTmin / 2, Tho = Thi - Q / h.CP;
                const Tci = level - dTmin / 2, Tco = Tci + Q / c.CP;
                const dT1 = Math.abs(Thi - Tco), dT2 = Math.abs(Tho - Tci);
                let LMTD;
                if (Math.abs(dT1 - dT2) < 1e-3) LMTD = dT1;
                else if (dT1 <= 0 || dT2 <= 0) LMTD = 1e-5;
                else LMTD = (dT1 - dT2) / Math.log(dT1 / dT2);
                const U = 1 / (1 / h.h + 1 / c.h);
                const area = Q / (U * LMTD);
                matches.push({ hot: h.name, cold: c.name, Q, LMTD, area, region });
                h.Q -= Q; c.Q -= Q;
                if (region === 'above') { h.front += Q / h.CP; c.front += Q / c.CP; }
                else { h.front -= Q / h.CP; c.front -= Q / c.CP; }
                hot = hot.filter(s => s.Q > 1e-5);
                cold = cold.filter(s => s.Q > 1e-5);
            }
            hot.forEach(s => utilities.push({ stream: s.name, Q: s.Q, utility: 'Cooling', region }));
            cold.forEach(s => utilities.push({ stream: s.name, Q: s.Q, utility: 'Heating', region }));
        }
        return { matches, utilities, totalArea: matches.reduce((s, m) => s + m.area, 0) };
    },

    // Supertargeting
    supertarget(streams, hHot, hCold, energyCost, hours, cA, cB, cC, payback) {
        const results = [];
        for (let dT = 2; dT <= 50; dT += 2) {
            const pt = this.problemTable(streams, dT);
            const at = this.areaTargeting(streams, pt, dT, hHot, hCold);
            const util = this.unitsTargeting(pt, streams, dT);
            const annualEnergy = (pt.QHmin + pt.QCmin) * hours * energyCost;
            const capital = cA + cB * Math.pow(at.totalArea, cC);
            const annualCapital = capital / payback;
            const total = annualEnergy + annualCapital;
            results.push({ dT, QHmin: pt.QHmin, QCmin: pt.QCmin, area: at.totalArea, Nmin: util.Nmin, annualEnergy, capital, annualCapital, total });
        }
        const best = results.reduce((min, r) => r.total < min.total ? r : min, results[0]);
        return { results, best };
    },

    // Multi-level utilities
    multiUtilities(pt, utilities) {
        // Order utilities by temperature (descending)
        const hotUtils = utilities.filter(u => u.type === 'hot').sort((a, b) => b.T - a.T);
        const coldUtils = utilities.filter(u => u.type === 'cold').sort((a, b) => a.T - b.T);
        
        // Simple allocation: use cheapest available at each temperature level
        let remainingH = pt.QHmin;
        let remainingC = pt.QCmin;
        const allocation = [];
        
        for (const u of hotUtils) {
            if (remainingH <= 0) break;
            const use = Math.min(remainingH, u.maxLoad || remainingH);
            if (use > 0.01) {
                allocation.push({ utility: u.name, T: u.T, load: use, cost: use * (u.cost || 0) });
                remainingH -= use;
            }
        }
        for (const u of coldUtils) {
            if (remainingC <= 0) break;
            const use = Math.min(remainingC, u.maxLoad || remainingC);
            if (use > 0.01) {
                allocation.push({ utility: u.name, T: u.T, load: use, cost: use * (u.cost || 0) });
                remainingC -= use;
            }
        }
        return { allocation, totalCost: allocation.reduce((s, a) => s + a.cost, 0) };
    },

    // Plus-Minus analysis
    plusMinus(streams, streamName, newTs, newTt, dTmin) {
        const modified = streams.map(s => s.Name === streamName ? { ...s, Ts: newTs, Tt: newTt } : { ...s });
        const ptOld = this.problemTable(streams, dTmin);
        const ptNew = this.problemTable(modified, dTmin);
        return {
            oldQH: ptOld.QHmin, oldQC: ptOld.QCmin,
            newQH: ptNew.QHmin, newQC: ptNew.QCmin,
            deltaQH: ptOld.QHmin - ptNew.QHmin,
            deltaQC: ptOld.QCmin - ptNew.QCmin,
            beneficial: (ptOld.QHmin - ptNew.QHmin) > 0.01
        };
    },

    // Detect cross-pinch violators
    detectViolators(exchangers, streams, pt) {
        const violators = [];
        for (const ex of exchangers) {
            const hotS = streams.find(s => s.Name === ex.hotStream);
            const coldS = streams.find(s => s.Name === ex.coldStream);
            if (!hotS || !coldS) continue;
            // Check if both streams exist above and below pinch
            const hotAbove = hotS.Ts > pt.pinchHot;
            const coldAbove = coldS.Tt > pt.pinchCold;
            const hotBelow = hotS.Tt < pt.pinchHot;
            const coldBelow = coldS.Ts < pt.pinchCold;
            
            const spansPinch = (hotAbove && coldBelow) || (hotBelow && coldAbove);
            // More accurate: check if match temperature range crosses pinch
            const hotMax = Math.max(hotS.Ts, hotS.Tt);
            const hotMin = Math.min(hotS.Ts, hotS.Tt);
            const coldMax = Math.max(coldS.Ts, coldS.Tt);
            const coldMin = Math.min(coldS.Ts, coldS.Tt);
            
            const matchAbovePinch = hotMax > pt.pinchHot && coldMax > pt.pinchCold;
            const matchBelowPinch = hotMin < pt.pinchHot && coldMin < pt.pinchCold;
            
            if (matchAbovePinch && matchBelowPinch) {
                violators.push({ ...ex, reason: 'Cross-Pinch (both above and below)' });
            }
        }
        return violators;
    },

    waterPinch(waterStreams, freshConc = 0) {
        waterStreams.forEach(s => { s.massLoad = s.flow * (s.Cout - s.Cin); });
        const concsSet = new Set([freshConc]);
        waterStreams.forEach(s => { concsSet.add(s.Cin); concsSet.add(s.Cout); });
        const concs = Array.from(concsSet).sort((a, b) => a - b);
        const intervals = [];
        for (let i = 0; i < concs.length - 1; i++) {
            const Clow = concs[i], Chigh = concs[i + 1];
            const active = waterStreams.filter(s => s.Cin <= Clow && s.Cout >= Chigh);
            const massLoad = active.reduce((sum, s) => sum + s.flow * (Chigh - Clow), 0);
            intervals.push({ Clow, Chigh, dC: Chigh - Clow, active: active.map(s => s.name).join(', ') || '-', massLoad });
        }
        let cumMass = 0;
        const lwpData = [{ C: freshConc, M: 0 }];
        intervals.forEach(intv => {
            cumMass += intv.massLoad;
            intv.cumMass = cumMass;
            lwpData.push({ C: intv.Chigh, M: cumMass });
        });
        let maxFlow = 0, pinchConc = freshConc, pinchPoint = null;
        lwpData.forEach(pt => {
            if (pt.C > freshConc) {
                const flow = pt.M / (pt.C - freshConc);
                if (flow > maxFlow) { maxFlow = flow; pinchConc = pt.C; pinchPoint = pt; }
            }
        });
        return { intervals, lwpData, FfwMin: maxFlow, FwwMin: maxFlow, pinchConc, pinchPoint, freshConc };
    },

    chp(heatDemand, powerDemand, fuelCost, elecPrice, boilerEff, chpElecEff, chpHeatEff) {
        const fuelBoilerBase = heatDemand / boilerEff;
        const costFuelBase = fuelBoilerBase * fuelCost;
        const costPowerBase = powerDemand * elecPrice;
        const totalCostBase = costFuelBase + costPowerBase;
        const fuelChp = powerDemand / chpElecEff;
        const heatRecovered = fuelChp * chpHeatEff;
        const heatDeficit = Math.max(0, heatDemand - heatRecovered);
        const fuelAuxBoiler = heatDeficit / boilerEff;
        const totalFuelChp = fuelChp + fuelAuxBoiler;
        const totalCostChp = totalFuelChp * fuelCost;
        return {
            base: { fuelBoiler: fuelBoilerBase, costFuel: costFuelBase, costPower: costPowerBase, total: totalCostBase },
            chp: { fuelChp, heatRecovered, heatDeficit, fuelAux: fuelAuxBoiler, totalFuel: totalFuelChp, total: totalCostChp },
            savings: totalCostBase - totalCostChp
        };
    },

    refrigeration(coolingLoad, Tproc, Tamb, dTevap, dTcond, etaIso) {
        const TevapK = (Tproc - dTevap) + 273.15;
        const TcondK = (Tamb + dTcond) + 273.15;
        if (TevapK >= TcondK) return null;
        const COPcarnot = TevapK / (TcondK - TevapK);
        const COPactual = COPcarnot * etaIso * 0.9;
        const power = coolingLoad / COPactual;
        return { Tevap: TevapK - 273.15, Tcond: TcondK - 273.15, COPcarnot, COPactual, power, heatRejected: coolingLoad + power };
    }
};

// ==========================================
// CHARTS
// ==========================================
const Charts = {
    config: { responsive: true, displaylogo: false, staticPlot: false },
    font: { family: 'Vazirmatn, Tahoma, sans-serif', size: 12 },
    base: { font: { family: 'Vazirmatn, Tahoma, sans-serif', size: 12 }, plot_bgcolor: '#fafbfc', paper_bgcolor: 'white' },

    cascade(pt, dTmin, tid = 'cascade-chart') {
        const yPos = pt.rows.map((_, i) => pt.rows.length - i);
        const dh = pt.rows.map(r => r.dH);
        Plotly.newPlot(tid, [{
            x: dh, y: yPos, mode: 'markers+text',
            marker: { size: 40, color: dh.map(v => v > 0 ? '#667eea' : '#f56565'), line: { width: 2, color: '#2d3748' } },
            text: dh.map(v => v.toFixed(1)), textposition: 'middle', textfont: { color: 'white', size: 10 }, type: 'scatter'
        }], {
            ...this.base, title: `Cascade Diagram (ΔTmin=${dTmin}°C)`,
            xaxis: { title: 'ΔH (kW)', zeroline: true },
            yaxis: { title: 'Shifted T (°C)', tickvals: yPos, ticktext: pt.rows.map(r => r.Th.toFixed(1)), autorange: 'reversed' },
            height: 500, margin: { t: 50, b: 60, l: 80, r: 40 }
        }, this.config);
    },

    composite(curves, pt, tid = 'composite-chart') {
        Plotly.newPlot(tid, [
            { x: curves.hot.map(p => p.H), y: curves.hot.map(p => p.T), mode: 'lines', name: 'Hot Composite', line: { color: '#c53030', width: 3 } },
            { x: curves.cold.map(p => p.H), y: curves.cold.map(p => p.T), mode: 'lines', name: 'Cold Composite', line: { color: '#3182ce', width: 3 } }
        ], {
            ...this.base, title: 'Composite Curves',
            xaxis: { title: 'Enthalpy (kW)' }, yaxis: { title: 'Shifted T (°C)' },
            height: 500, margin: { t: 50, b: 60, l: 80, r: 40 },
            shapes: [{ type: 'line', x0: 0, x1: Math.max(curves.totalHot, curves.totalCold), y0: pt.pinchShifted, y1: pt.pinchShifted, line: { color: '#718096', width: 1, dash: 'dash' } }]
        }, this.config);
    },

    gcc(pt, tid = 'gcc-chart') {
        Plotly.newPlot(tid, [{
            x: pt.cascadeCorr, y: pt.temps, mode: 'lines+markers',
            line: { color: '#764ba2', width: 3 }, marker: { size: 10 }
        }], {
            ...this.base, title: 'Grand Composite Curve (GCC)',
            xaxis: { title: 'Net Heat (kW)' }, yaxis: { title: 'Shifted T (°C)' },
            height: 450, margin: { t: 50, b: 60, l: 80, r: 40 },
            shapes: [{ type: 'line', x0: Math.min(...pt.cascadeCorr), x1: Math.max(...pt.cascadeCorr), y0: pt.pinchShifted, y1: pt.pinchShifted, line: { color: '#c53030', width: 2, dash: 'dash' } }],
            annotations: [
                { x: Math.max(...pt.cascadeCorr), y: pt.pinchShifted, text: `Pinch: ${pt.pinchShifted.toFixed(1)}°C`, showarrow: true, arrowhead: 3, arrowcolor: '#c53030', bgcolor: 'white', ax: -40, ay: -30 },
                { x: pt.QHmin / 2, y: Math.max(...pt.temps), text: `QH: ${pt.QHmin.toFixed(1)} kW`, showarrow: false, bgcolor: '#fed7d7', bordercolor: '#c53030' },
                { x: pt.QCmin / 2, y: Math.min(...pt.temps), text: `QC: ${pt.QCmin.toFixed(1)} kW`, showarrow: false, bgcolor: '#bee3f8', bordercolor: '#3182ce' }
            ]
        }, this.config);
    },

    balancedGCC(pt, utilities, tid = 'balanced-gcc-chart') {
        // Simple: GCC with utility arrows
        Plotly.newPlot(tid, [{
            x: pt.cascadeCorr, y: pt.temps, mode: 'lines+markers',
            line: { color: '#48bb78', width: 3 }, marker: { size: 8 }
        }], {
            ...this.base, title: 'Balanced GCC (with Utilities)',
            xaxis: { title: 'Net Heat (kW)' }, yaxis: { title: 'Shifted T (°C)' },
            height: 450, margin: { t: 50, b: 60, l: 80, r: 40 }
        }, this.config);
    },

    grid(streams, pt, tid = 'grid-chart') {
        const traces = [];
        const hot = streams.filter(s => s.Ts > s.Tt).sort((a, b) => b.Ts - a.Ts);
        const cold = streams.filter(s => s.Ts < s.Tt).sort((a, b) => b.Tt - a.Tt);
        const yMax = hot.length + cold.length + 2;
        hot.forEach((s, i) => {
            traces.push({ x: [0, 10], y: [hot.length - i, hot.length - i], mode: 'lines+text',
                line: { color: '#c53030', width: 3 },
                text: [`H${s.Name}`, `${s.Ts}→${s.Tt}°C`], textposition: ['middle right', 'middle right'],
                textfont: { color: '#c53030', size: 11 } });
        });
        cold.forEach((s, i) => {
            traces.push({ x: [0, 10], y: [cold.length - i, cold.length - i], mode: 'lines+text',
                line: { color: '#3182ce', width: 3 },
                text: [`${s.Ts}→${s.Tt}°C`, `C${s.Name}`], textposition: ['middle left', 'middle left'],
                textfont: { color: '#3182ce', size: 11 } });
        });
        Plotly.newPlot(tid, traces, {
            ...this.base, title: 'Grid Diagram',
            xaxis: { showgrid: false, showticklabels: false, range: [-1, 11] },
            yaxis: { showgrid: false, showticklabels: false, range: [0, yMax] },
            height: 450, margin: { t: 50, b: 40, l: 40, r: 40 },
            shapes: [{ type: 'line', x0: 5, x1: 5, y0: 0, y1: yMax, line: { color: '#2d3748', width: 2, dash: 'dash' } }],
            annotations: [{ x: 5, y: yMax - 0.5, text: `PINCH<br>Hot: ${pt.pinchHot.toFixed(1)}°C<br>Cold: ${pt.pinchCold.toFixed(1)}°C`, showarrow: false, bgcolor: 'white', bordercolor: '#2d3748', borderwidth: 1, font: { size: 11 } }]
        }, this.config);
    },

    supertarget(stData, tid = 'st-chart') {
        const dt = stData.results.map(r => r.dT);
        Plotly.newPlot(tid, [
            { x: dt, y: stData.results.map(r => r.annualEnergy), name: 'Annual Energy Cost', mode: 'lines+markers', line: { color: '#c53030', width: 3 } },
            { x: dt, y: stData.results.map(r => r.annualCapital), name: 'Annual Capital Cost', mode: 'lines+markers', line: { color: '#3182ce', width: 3 } },
            { x: dt, y: stData.results.map(r => r.total), name: 'Total Cost', mode: 'lines+markers', line: { color: '#48bb78', width: 4 } }
        ], {
            ...this.base, title: `Supertargeting (Optimal ΔTmin ≈ ${stData.best.dT}°C)`,
            xaxis: { title: 'ΔTmin (°C)' }, yaxis: { title: 'Annual Cost (€/year)' },
            height: 500, margin: { t: 50, b: 60, l: 80, r: 40 },
            shapes: [{ type: 'line', x0: stData.best.dT, x1: stData.best.dT, y0: 0, y1: Math.max(...stData.results.map(r => r.total)), line: { color: '#667eea', width: 2, dash: 'dot' } }]
        }, this.config);
    },

    utilities(pt, alloc, tid = 'util-chart') {
        const traces = [{
            x: pt.cascadeCorr, y: pt.temps, mode: 'lines+markers', name: 'GCC',
            line: { color: '#764ba2', width: 3 }
        }];
        Plotly.newPlot(tid, traces, {
            ...this.base, title: 'GCC with Multi-Level Utilities',
            xaxis: { title: 'Net Heat (kW)' }, yaxis: { title: 'Shifted T (°C)' },
            height: 450, margin: { t: 50, b: 60, l: 80, r: 40 }
        }, this.config);
    },

    waterLWP(res, tid = 'water-chart') {
        const traces = [{ x: res.lwpData.map(p => p.M), y: res.lwpData.map(p => p.C), mode: 'lines+markers', line: { color: '#3182ce', width: 3 }, marker: { size: 10 }, name: 'LWP' }];
        if (res.pinchPoint) {
            traces.push({ x: [0, res.pinchPoint.M], y: [res.freshConc, res.pinchPoint.C], mode: 'lines', line: { color: '#48bb78', width: 3, dash: 'dash' }, name: `Fresh (${res.FfwMin.toFixed(2)} t/h)` });
            traces.push({ x: [res.pinchPoint.M], y: [res.pinchPoint.C], mode: 'markers', marker: { size: 22, color: '#c53030', symbol: 'star' }, name: 'Pinch' });
        }
        Plotly.newPlot(tid, traces, {
            ...this.base, title: 'Water Pinch - LWP',
            xaxis: { title: 'Cumulative Mass (kg/h)' }, yaxis: { title: 'Concentration' },
            height: 500, margin: { t: 50, b: 60, l: 80, r: 40 }
        }, this.config);
    },

    splitDist(pt, Treb, Tcon, Qreb, Qcon, tid = 'dist-chart') {
        Plotly.newPlot(tid, [{
            x: pt.cascadeCorr, y: pt.temps, mode: 'lines+markers', line: { color: '#764ba2', width: 3 }, opacity: 0.6
        }], {
            ...this.base, title: 'Split GCC: Distillation',
            xaxis: { title: 'Heat (kW)' }, yaxis: { title: 'Shifted T (°C)' },
            height: 500, margin: { t: 50, b: 60, l: 80, r: 40 },
            shapes: [
                { type: 'line', x0: Math.min(...pt.cascadeCorr), x1: Math.max(...pt.cascadeCorr), y0: pt.pinchShifted, y1: pt.pinchShifted, line: { color: '#c53030', width: 2, dash: 'dash' } },
                { type: 'rect', x0: 0, x1: Math.max(Qreb, Qcon), y0: Tcon, y1: Treb, line: { color: '#d53f8c', width: 3, dash: 'dash' } }
            ],
            annotations: [
                { x: Qreb / 2, y: Treb + 5, text: `Reb: ${Qreb} kW`, showarrow: false, bgcolor: '#fed7e2', bordercolor: '#d53f8c', font: { size: 10 } },
                { x: Qcon / 2, y: Tcon - 10, text: `Con: ${Qcon} kW`, showarrow: false, bgcolor: '#bee3f8', bordercolor: '#3182ce', font: { size: 10 } }
            ]
        }, this.config);
    },

    equipGCC(pt, type, tid = 'equip-chart') {
        const traces = [{ x: pt.cascadeCorr, y: pt.temps, mode: 'lines+markers', line: { color: '#764ba2', width: 3 } }];
        const shapes = [
            { type: 'line', x0: 0, x1: 0, y0: Math.min(...pt.temps), y1: Math.max(...pt.temps), line: { color: '#718096', width: 1, dash: 'dot' } },
            { type: 'line', x0: Math.min(...pt.cascadeCorr), x1: Math.max(...pt.cascadeCorr), y0: pt.pinchShifted, y1: pt.pinchShifted, line: { color: '#c53030', width: 2, dash: 'dash' } }
        ];
        const annotations = [{ x: Math.max(...pt.cascadeCorr), y: pt.pinchShifted, text: `Pinch: ${pt.pinchShifted.toFixed(1)}°C`, showarrow: false, bgcolor: 'white', bordercolor: '#c53030', font: { size: 11 } }];
        if (type === 'furnace') {
            traces.push({ x: [0, pt.QHmin], y: [Math.max(...pt.temps) + 100, pt.pinchShifted + 20], mode: 'lines', line: { color: '#ed8936', width: 4, dash: 'dashdot' } });
            annotations.push({ x: pt.QHmin / 2, y: Math.max(...pt.temps) + 50, text: '🔥 Furnace', showarrow: false, bgcolor: '#feebc8', bordercolor: '#ed8936' });
        } else if (type === 'turbine') {
            shapes.push({ type: 'line', x0: 0, x1: 0, y0: Math.max(...pt.temps), y1: pt.pinchShifted + 10, line: { color: '#805ad5', width: 4 } });
            annotations.push({ x: -pt.QHmin * 0.15, y: (Math.max(...pt.temps) + pt.pinchShifted) / 2, text: 'Turbine', showarrow: false, bgcolor: '#e9d8fd', bordercolor: '#805ad5' });
        } else if (type === 'heatpump') {
            shapes.push({ type: 'line', x0: 0, x1: pt.QHmin * 0.3, y0: pt.pinchShifted - 20, y1: pt.pinchShifted + 20, line: { color: '#d69e2e', width: 4 } });
            annotations.push({ x: pt.QHmin * 0.15, y: pt.pinchShifted, text: 'Heat Pump', showarrow: false, bgcolor: '#fefcbf', bordercolor: '#d69e2e' });
        } else if (type === 'distillation') {
            const Treb = pt.pinchShifted + 40, Tcon = pt.pinchShifted - 40;
            shapes.push({ type: 'rect', x0: 0, x1: pt.QHmin * 0.5, y0: Tcon, y1: Treb, line: { color: '#d53f8c', width: 3, dash: 'dash' } });
            annotations.push({ x: pt.QHmin * 0.25, y: Treb, text: 'Reboiler', showarrow: false, bgcolor: '#fed7e2', bordercolor: '#d53f8c', font: { size: 10 } });
            annotations.push({ x: pt.QHmin * 0.25, y: Tcon, text: 'Condenser', showarrow: false, bgcolor: '#bee3f8', bordercolor: '#3182ce', font: { size: 10 } });
        }
        Plotly.newPlot(tid, traces, {
            ...this.base, title: `Placement: ${type}`,
            xaxis: { title: 'Net Heat (kW)' }, yaxis: { title: 'Shifted T (°C)' },
            height: 500, margin: { t: 50, b: 60, l: 80, r: 40 }, shapes, annotations
        }, this.config);
    }
};

// ==========================================
// APP - Main Logic
// ==========================================
const App = {
    streams: [],
    exchangers: [],
    pt: null,
    lang: 'fa',
    unit: 'kW',
    lastCHP: null,
    lastRef: null,
    lastWater: null,
    lastDist: null,

    t(key) { return (I18N[this.lang] && I18N[this.lang][key]) || I18N.fa[key] || key; },

    init() {
        this.loadFromStorage();
        this.setupTabs();
        if (this.streams.length === 0) this.loadExample(4);
        else { this.renderStreams(); this.calculate(); }
        this.updatePmStreams();
        this.applyLanguage();
    },

    setupTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
                setTimeout(() => {
                    const tab = btn.dataset.tab;
                    if (tab === 'pta' && this.pt) this.renderPTA();
                    if (tab === 'curves' && this.pt) this.renderCurves();
                    if (tab === 'grid' && this.pt) Charts.grid(this.streams, this.pt);
                    if (tab === 'equip' && this.pt) this.renderEquip();
                    if (tab === 'exergy' && this.pt) this.renderExergy();
                    if (tab === 'dist' && this.pt) this.renderDist();
                    if (tab === 'hen' && this.pt) this.designHEN();
                }, 100);
            });
        });
    },

    applyLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                // Don't change input values
            } else {
                el.textContent = text;
            }
        });
        document.documentElement.lang = this.lang;
        document.documentElement.dir = this.lang === 'fa' ? 'rtl' : 'ltr';
    },

    changeLanguage(lang) {
        this.lang = lang;
        this.applyLanguage();
    },

    changeUnits(unit) {
        this.unit = unit;
        this.calculate();
    },

    loadExample(n) {
        if (n === 4) {
            this.streams = [
                { Name: 'H1', Ts: 170, Tt: 60, CP: 3.0, h: 0.5 },
                { Name: 'H2', Ts: 150, Tt: 30, CP: 1.5, h: 0.5 },
                { Name: 'C1', Ts: 80, Tt: 140, CP: 4.0, h: 0.5 },
                { Name: 'C2', Ts: 20, Tt: 135, CP: 2.0, h: 0.5 }
            ];
        } else if (n === 7) {
            this.streams = [
                { Name: '1', Ts: 95, Tt: 205, CP: 2.88, h: 0.5 }, { Name: '2', Ts: 40, Tt: 220, CP: 2.88, h: 0.5 },
                { Name: '3', Ts: 310, Tt: 205, CP: 4.28, h: 0.5 }, { Name: '4', Ts: 150, Tt: 205, CP: 7.43, h: 0.5 },
                { Name: '5', Ts: 245, Tt: 95, CP: 2.84, h: 0.5 }, { Name: '6', Ts: 65, Tt: 140, CP: 4.72, h: 0.5 },
                { Name: '7', Ts: 280, Tt: 65, CP: 2.38, h: 0.5 }
            ];
        }
        document.getElementById('dtmin').value = 10;
        this.renderStreams();
        this.calculate();
        this.updatePmStreams();
    },

    clearData() {
        if (!confirm(this.lang === 'fa' ? 'همه داده‌ها پاک شود؟' : 'Clear all data?')) return;
        this.streams = []; this.exchangers = []; this.pt = null;
        this.renderStreams();
        this.updatePmStreams();
    },

    addRow() {
        this.streams.push({ Name: `S${this.streams.length + 1}`, Ts: 100, Tt: 50, CP: 1.0, h: 0.5 });
        this.renderStreams();
        this.updatePmStreams();
    },

    removeRow(i) { this.streams.splice(i, 1); this.renderStreams(); this.updatePmStreams(); },
    updateField(i, f, v) { this.streams[i][f] = v; this.updatePmStreams(); },

    renderStreams() {
        const tbody = document.getElementById('streams-body');
        tbody.innerHTML = '';
        this.streams.forEach((s, i) => {
            const type = s.Ts > s.Tt ? '🔥 Hot' : '❄️ Cold';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" value="${s.Name}" onchange="App.updateField(${i},'Name',this.value)"></td>
                <td><input type="number" value="${s.Ts}" step="0.1" onchange="App.updateField(${i},'Ts',parseFloat(this.value))"></td>
                <td><input type="number" value="${s.Tt}" step="0.1" onchange="App.updateField(${i},'Tt',parseFloat(this.value))"></td>
                <td><input type="number" value="${s.CP}" step="0.1" onchange="App.updateField(${i},'CP',parseFloat(this.value))"></td>
                <td><input type="number" value="${s.h || 0.5}" step="0.1" onchange="App.updateField(${i},'h',parseFloat(this.value))"></td>
                <td>${type}</td>
                <td><button class="btn-delete" onclick="App.removeRow(${i})">×</button></td>`;
            tbody.appendChild(tr);
        });
        const hot = this.streams.filter(s => s.Ts > s.Tt).length;
        document.getElementById('stat-count').textContent = this.streams.length;
        document.getElementById('stat-hotcold').textContent = `${hot} / ${this.streams.length - hot}`;
    },

    updatePmStreams() {
        const sel = document.getElementById('pm-stream');
        if (!sel) return;
        sel.innerHTML = this.streams.map(s => `<option value="${s.Name}">${s.Name}</option>`).join('');
        if (this.streams.length > 0) {
            const s = this.streams[0];
            document.getElementById('pm-ts').value = s.Ts;
            document.getElementById('pm-tt').value = s.Tt;
        }
    },

    calculate() {
        if (this.streams.length === 0) { alert('Enter data first'); return; }
        const dTmin = parseFloat(document.getElementById('dtmin').value);
        if (isNaN(dTmin) || dTmin <= 0) { alert('ΔTmin must be positive'); return; }
        this.pt = Engine.problemTable(this.streams, dTmin);
        this.renderPTA();
        this.saveToStorage();
    },

    renderPTA() {
        const pt = this.pt; if (!pt) return;
        const unit = this.unit === 'MW' ? 0.001 : 1;
        const uLabel = this.unit;
        document.getElementById('pta-metrics').innerHTML = `
            <div class="metric-card"><div class="metric-label">🔥 QHmin</div><div class="metric-value">${(pt.QHmin * unit).toFixed(2)} ${uLabel}</div></div>
            <div class="metric-card"><div class="metric-label">❄️ QCmin</div><div class="metric-value">${(pt.QCmin * unit).toFixed(2)} ${uLabel}</div></div>
            <div class="metric-card"><div class="metric-label">📍 Pinch (Shifted)</div><div class="metric-value">${pt.pinchShifted.toFixed(1)} °C</div></div>
            <div class="metric-card"><div class="metric-label">🌡️ Pinch Hot/Cold</div><div class="metric-value">${pt.pinchHot.toFixed(1)} / ${pt.pinchCold.toFixed(1)} °C</div></div>`;
        let html = '<table class="data-table"><thead><tr><th>Th (°C)</th><th>Tl (°C)</th><th>ΔT</th><th>ΣCPh</th><th>ΣCPc</th><th>ΔH</th><th>Cascade</th><th>Feasible</th></tr></thead><tbody>';
        pt.rows.forEach((r, i) => {
            html += `<tr><td>${r.Th.toFixed(1)}</td><td>${r.Tl.toFixed(1)}</td><td>${r.dT.toFixed(1)}</td><td>${r.CPh.toFixed(2)}</td><td>${r.CPc.toFixed(2)}</td><td class="${r.dH > 0 ? 'pos' : 'neg'}">${r.dH.toFixed(2)}</td><td>${pt.cascade[i + 1].toFixed(2)}</td><td>${pt.cascadeCorr[i + 1].toFixed(2)}</td></tr>`;
        });
        html += '</tbody></table>';
        document.getElementById('pta-table-wrap').innerHTML = html;
        Charts.cascade(pt, parseFloat(document.getElementById('dtmin').value));
    },

    renderCurves() {
        if (!this.pt) return;
        const dTmin = parseFloat(document.getElementById('dtmin').value);
        const curves = Engine.compositeCurves(this.streams, dTmin);
        Charts.composite(curves, this.pt);
        Charts.gcc(this.pt);
        Charts.balancedGCC(this.pt, []);
    },

    renderEquip() {
        if (!this.pt) return;
        const type = document.getElementById('equip-select').value;
        Charts.equipGCC(this.pt, type);
        const notes = {
            furnace: 'کوره باید در بالای پینچ قرار گیرد.',
            turbine: 'توربین در بالای پینچ برای تولید کار.',
            heatpump: 'پمپ حرارتی از عرض پینچ.',
            distillation: 'برج تقطیر نباید روی پینچ باشد.'
        };
        document.getElementById('equip-note').textContent = '💡 ' + notes[type];
    },

    renderExergy() {
        if (!this.pt) return;
        const ex = Engine.exergy(this.streams);
        const unit = this.unit === 'MW' ? 0.001 : 1;
        document.getElementById('exergy-metrics').innerHTML = `
            <div class="metric-card"><div class="metric-label">Supplied</div><div class="metric-value">${(ex.Esup * unit).toFixed(2)} ${this.unit}</div></div>
            <div class="metric-card"><div class="metric-label">Recovered</div><div class="metric-value">${(ex.Erec * unit).toFixed(2)} ${this.unit}</div></div>
            <div class="metric-card"><div class="metric-label">Destroyed</div><div class="metric-value">${(ex.Edest * unit).toFixed(2)} ${this.unit}</div></div>
            <div class="metric-card"><div class="metric-label">Efficiency</div><div class="metric-value">${(ex.eff * 100).toFixed(1)}%</div></div>`;
        let html = '<table class="data-table"><thead><tr><th>Stream</th><th>Type</th><th>ΔE</th></tr></thead><tbody>';
        ex.results.forEach(e => { html += `<tr><td>${e.name}</td><td>${e.type}</td><td>${(e.dE * unit).toFixed(3)}</td></tr>`; });
        html += '</tbody></table>';
        document.getElementById('exergy-table-wrap').innerHTML = html;
    },

    renderDist() {
        if (!this.pt) return;
        const Treb = parseFloat(document.getElementById('dist-treb').value);
        const Tcon = parseFloat(document.getElementById('dist-tcon').value);
        const Qreb = parseFloat(document.getElementById('dist-qreb').value);
        const Qcon = parseFloat(document.getElementById('dist-qcon').value);
        const isCross = Tcon < this.pt.pinchShifted && this.pt.pinchShifted < Treb;
        document.getElementById('dist-note').innerHTML = isCross
            ? '<div class="error-box">❌ Cross-Pinch violation!</div>'
            : '<div class="success-box">✅ Appropriate placement</div>';
        Charts.splitDist(this.pt, Treb, Tcon, Qreb, Qcon);
        this.lastDist = { Treb, Tcon, Qreb, Qcon, isCross };
    },

    designHEN() {
        if (!this.pt) { alert('Calculate first'); return; }
        const hH = parseFloat(document.getElementById('hen-hhot').value) || 0.5;
        const hC = parseFloat(document.getElementById('hen-hcold').value) || 0.5;
        const dTmin = parseFloat(document.getElementById('dtmin').value);
        const result = Engine.designHEN(this.streams, this.pt, dTmin, hH, hC);
        const util = Engine.unitsTargeting(this.pt, this.streams, dTmin);
        const unit = this.unit === 'MW' ? 0.001 : 1;
        document.getElementById('hen-summary').innerHTML = `
            <div class="metric-card"><div class="metric-label">تعداد مبدل</div><div class="metric-value">${result.matches.length}</div></div>
            <div class="metric-card"><div class="metric-label">مجموع سطح</div><div class="metric-value">${result.totalArea.toFixed(1)} m²</div></div>
            <div class="metric-card"><div class="metric-label">N_min (تئوری)</div><div class="metric-value">${util.Nmin}</div><div class="metric-sub">${util.formula}</div></div>`;
        
        let mHtml = '<h3>مبدل‌های داخلی</h3><table class="data-table"><thead><tr><th>Hot</th><th>Cold</th><th>Q (kW)</th><th>LMTD</th><th>Area (m²)</th><th>Region</th></tr></thead><tbody>';
        result.matches.forEach(m => {
            mHtml += `<tr><td>${m.hot}</td><td>${m.cold}</td><td>${(m.Q * unit).toFixed(2)}</td><td>${m.LMTD.toFixed(2)}</td><td>${m.area.toFixed(1)}</td><td>${m.region}</td></tr>`;
        });
        mHtml += '</tbody></table>';
        document.getElementById('hen-matches-wrap').innerHTML = mHtml;
        
        let uHtml = '<h3>یوتیلیتی‌ها</h3><table class="data-table"><thead><tr><th>Stream</th><th>Utility</th><th>Q (kW)</th><th>Region</th></tr></thead><tbody>';
        result.utilities.forEach(u => {
            uHtml += `<tr><td>${u.stream}</td><td>${u.utility}</td><td>${(u.Q * unit).toFixed(2)}</td><td>${u.region}</td></tr>`;
        });
        uHtml += '</tbody></table>';
        document.getElementById('hen-utilities-wrap').innerHTML = uHtml;
    },

    calculateSupertarget() {
        if (!this.pt) { alert('Calculate first'); return; }
        const hH = parseFloat(document.getElementById('st-hhot').value);
        const hC = parseFloat(document.getElementById('st-hcold').value);
        const ec = parseFloat(document.getElementById('st-ecost').value);
        const hours = parseFloat(document.getElementById('st-hours').value);
        const cA = parseFloat(document.getElementById('st-ca').value);
        const cB = parseFloat(document.getElementById('st-cb').value);
        const cC = parseFloat(document.getElementById('st-cc').value);
        const payback = parseFloat(document.getElementById('st-payback').value);
        
        const res = Engine.supertarget(this.streams, hH, hC, ec, hours, cA, cB, cC, payback);
        document.getElementById('st-results').innerHTML = `
            <div class="metric-card"><div class="metric-label">ΔTmin بهینه</div><div class="metric-value">${res.best.dT} °C</div></div>
            <div class="metric-card"><div class="metric-label">QHmin @ optimum</div><div class="metric-value">${res.best.QHmin.toFixed(1)} kW</div></div>
            <div class="metric-card"><div class="metric-label">QCmin @ optimum</div><div class="metric-value">${res.best.QCmin.toFixed(1)} kW</div></div>
            <div class="metric-card"><div class="metric-label">سطح بهینه</div><div class="metric-value">${res.best.area.toFixed(1)} m²</div></div>
            <div class="metric-card"><div class="metric-label">هزینه کل سالانه</div><div class="metric-value">€${res.best.total.toFixed(0)}</div></div>
            <div class="metric-card"><div class="metric-label">سرمایه‌گذاری</div><div class="metric-value">€${res.best.capital.toFixed(0)}</div></div>`;
        Charts.supertarget(res);
    },

    calculateMultiUtilities() {
        if (!this.pt) { alert('Calculate first'); return; }
        const utils = [
            { name: 'HP Steam', T: parseFloat(document.getElementById('util-hp').value), cost: parseFloat(document.getElementById('util-hp-cost').value), type: 'hot' },
            { name: 'MP Steam', T: parseFloat(document.getElementById('util-mp').value), cost: parseFloat(document.getElementById('util-mp-cost').value), type: 'hot' },
            { name: 'LP Steam', T: parseFloat(document.getElementById('util-lp').value), cost: parseFloat(document.getElementById('util-lp-cost').value), type: 'hot' },
            { name: 'Cooling Water', T: parseFloat(document.getElementById('util-cw').value), cost: parseFloat(document.getElementById('util-cw-cost').value), type: 'cold' }
        ];
        const res = Engine.multiUtilities(this.pt, utils);
        let html = '<h3>تخصیص یوتیلیتی</h3><table class="data-table"><thead><tr><th>Utility</th><th>T (°C)</th><th>Load (kW)</th><th>Cost (€/h)</th></tr></thead><tbody>';
        res.allocation.forEach(a => {
            html += `<tr><td>${a.utility}</td><td>${a.T}</td><td>${a.load.toFixed(1)}</td><td>${a.cost.toFixed(2)}</td></tr>`;
        });
        html += `<tr style="background:#c6f6d5;font-weight:bold;"><td colspan="3">Total Cost</td><td>€${res.totalCost.toFixed(2)}/h</td></tr>`;
        html += '</tbody></table>';
        document.getElementById('util-results').innerHTML = html;
        Charts.utilities(this.pt, res.allocation);
    },

    analyzePlusMinus() {
        if (!this.pt) { alert('Calculate first'); return; }
        const streamName = document.getElementById('pm-stream').value;
        const newTs = parseFloat(document.getElementById('pm-ts').value);
        const newTt = parseFloat(document.getElementById('pm-tt').value);
        const dTmin = parseFloat(document.getElementById('dtmin').value);
        const res = Engine.plusMinus(this.streams, streamName, newTs, newTt, dTmin);
        const status = res.beneficial
            ? '<div class="success-box">✅ تغییر مفید است!</div>'
            : '<div class="error-box">❌ تغییر بهینه نیست</div>';
        document.getElementById('pm-results').innerHTML = `
            ${status}
            <div class="metrics">
                <div class="metric-card"><div class="metric-label">QHmin قبلی</div><div class="metric-value">${res.oldQH.toFixed(1)} kW</div></div>
                <div class="metric-card"><div class="metric-label">QHmin جدید</div><div class="metric-value">${res.newQH.toFixed(1)} kW</div></div>
                <div class="metric-card"><div class="metric-label">ΔQH</div><div class="metric-value" style="color:${res.deltaQH > 0 ? '#48bb78' : '#f56565'}">${res.deltaQH.toFixed(1)} kW</div></div>
                <div class="metric-card"><div class="metric-label">ΔQC</div><div class="metric-value" style="color:${res.deltaQC > 0 ? '#48bb78' : '#f56565'}">${res.deltaQC.toFixed(1)} kW</div></div>
            </div>`;
    },

    addExchanger() {
        this.exchangers.push({ name: `E${this.exchangers.length + 1}`, hotStream: '', coldStream: '', Q: 100 });
        this.renderExchangers();
    },

    removeExchanger(i) {
        this.exchangers.splice(i, 1);
        this.renderExchangers();
    },

    renderExchangers() {
        const tbody = document.getElementById('exchangers-body');
        if (!tbody) return;
        tbody.innerHTML = '';
        this.exchangers.forEach((ex, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input value="${ex.name}" onchange="App.exchangers[${i}].name=this.value"></td>
                <td><input value="${ex.hotStream}" onchange="App.exchangers[${i}].hotStream=this.value"></td>
                <td><input value="${ex.coldStream}" onchange="App.exchangers[${i}].coldStream=this.value"></td>
                <td><input type="number" value="${ex.Q}" onchange="App.exchangers[${i}].Q=parseFloat(this.value)"></td>
                <td><button class="btn-delete" onclick="App.removeExchanger(${i})">×</button></td>`;
            tbody.appendChild(tr);
        });
    },

    detectViolators() {
        if (!this.pt) { alert('Calculate first'); return; }
        const violators = Engine.detectViolators(this.exchangers, this.streams, this.pt);
        if (violators.length === 0) {
            document.getElementById('violators-results').innerHTML = '<div class="success-box">✅ هیچ مبدل Cross-Pinch یافت نشد</div>';
        } else {
            let html = '<div class="error-box">❌ مبدل‌های مشکل‌دار:</div><table class="data-table"><thead><tr><th>Name</th><th>Hot</th><th>Cold</th><th>Q</th><th>Reason</th></tr></thead><tbody>';
            violators.forEach(v => {
                html += `<tr><td>${v.name}</td><td>${v.hotStream}</td><td>${v.coldStream}</td><td>${v.Q}</td><td class="warn">${v.reason}</td></tr>`;
            });
            html += '</tbody></table>';
            document.getElementById('violators-results').innerHTML = html;
        }
    },

    calcCHP() {
        const res = Engine.chp(
            parseFloat(document.getElementById('chp-heat').value),
            parseFloat(document.getElementById('chp-power').value),
            parseFloat(document.getElementById('chp-fuel').value),
            parseFloat(document.getElementById('chp-elec').value),
            parseFloat(document.getElementById('chp-boiler').value),
            parseFloat(document.getElementById('chp-elec-eff').value),
            parseFloat(document.getElementById('chp-heat-eff').value)
        );
        this.lastCHP = res;
        document.getElementById('chp-results').innerHTML = `
            <div class="metrics">
                <div class="metric-card"><div class="metric-label">بدون CHP</div><div class="metric-value">€${res.base.total.toFixed(2)}/h</div></div>
                <div class="metric-card"><div class="metric-label">با CHP</div><div class="metric-value">€${res.chp.total.toFixed(2)}/h</div></div>
                <div class="metric-card"><div class="metric-label">صرفه‌جویی</div><div class="metric-value" style="color:#48bb78">€${res.savings.toFixed(2)}/h</div></div>
            </div>`;
    },

    calcRef() {
        const res = Engine.refrigeration(
            parseFloat(document.getElementById('ref-load').value),
            parseFloat(document.getElementById('ref-tproc').value),
            parseFloat(document.getElementById('ref-tamb').value),
            parseFloat(document.getElementById('ref-dtevap').value),
            parseFloat(document.getElementById('ref-dtcond').value),
            parseFloat(document.getElementById('ref-eta').value)
        );
        this.lastRef = res;
        if (!res) { document.getElementById('ref-results').innerHTML = '<div class="error-box">Invalid temperatures</div>'; return; }
        document.getElementById('ref-results').innerHTML = `
            <div class="metrics">
                <div class="metric-card"><div class="metric-label">Power</div><div class="metric-value">${res.power.toFixed(2)} kW</div></div>
                <div class="metric-card"><div class="metric-label">Heat Rejected</div><div class="metric-value">${res.heatRejected.toFixed(2)} kW</div></div>
                <div class="metric-card"><div class="metric-label">COP Carnot</div><div class="metric-value">${res.COPcarnot.toFixed(2)}</div></div>
                <div class="metric-card"><div class="metric-label">COP Actual</div><div class="metric-value">${res.COPactual.toFixed(2)}</div></div>
            </div>`;
    },

    calcWater() {
        const ws = [];
        for (let i = 1; i <= 3; i++) {
            const name = document.getElementById(`w${i}-name`).value;
            const flow = parseFloat(document.getElementById(`w${i}-flow`).value);
            const cin = parseFloat(document.getElementById(`w${i}-cin`).value);
            const cout = parseFloat(document.getElementById(`w${i}-cout`).value);
            if (flow > 0 && cout > cin) ws.push({ name, flow, Cin: cin, Cout: cout });
        }
        if (ws.length === 0) { alert('Invalid water streams'); return; }
        const res = Engine.waterPinch(ws, 0);
        this.lastWater = res;
        document.getElementById('water-results').innerHTML = `
            <div class="metrics">
                <div class="metric-card"><div class="metric-label">حداقل آب تازه</div><div class="metric-value">${res.FfwMin.toFixed(2)} t/h</div></div>
                <div class="metric-card"><div class="metric-label">غلظت پینچ</div><div class="metric-value">${res.pinchConc.toFixed(4)}</div></div>
            </div>
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Clow</th><th>Chigh</th><th>ΔC</th><th>Active</th><th>Mass Load</th><th>Cumulative</th></tr></thead>
                    <tbody>
                        ${res.intervals.map(intv => `<tr><td>${intv.Clow.toFixed(4)}</td><td>${intv.Chigh.toFixed(4)}</td><td>${intv.dC.toFixed(4)}</td><td>${intv.active}</td><td>${intv.massLoad.toFixed(2)}</td><td>${intv.cumMass.toFixed(2)}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
            <div id="water-chart" class="chart-container"></div>`;
        setTimeout(() => Charts.waterLWP(res), 100);
    },

    exportTableCSV(type) {
        if (!this.pt) { alert('Calculate first'); return; }
        let csv = '', filename = '';
        if (type === 'pta') {
            csv = 'Th (°C),Tl (°C),ΔT (°C),ΣCPh,ΣCPc,ΔH (kW),Cascade,Feasible\n';
            this.pt.rows.forEach((r, i) => {
                csv += `${r.Th.toFixed(1)},${r.Tl.toFixed(1)},${r.dT.toFixed(1)},${r.CPh.toFixed(2)},${r.CPc.toFixed(2)},${r.dH.toFixed(2)},${this.pt.cascade[i + 1].toFixed(2)},${this.pt.cascadeCorr[i + 1].toFixed(2)}\n`;
            });
            filename = 'problem_table.csv';
        } else if (type === 'exergy') {
            const ex = Engine.exergy(this.streams);
            csv = 'Name,Type,ΔE (kW)\n';
            ex.results.forEach(e => { csv += `${e.name},${e.type},${e.dE.toFixed(3)}\n`; });
            filename = 'exergy.csv';
        }
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    },

    // Save / Load / Export / Import
    saveToStorage() {
        try {
            localStorage.setItem('pinchData', JSON.stringify({
                streams: this.streams,
                exchangers: this.exchangers,
                dTmin: parseFloat(document.getElementById('dtmin').value),
                lang: this.lang,
                unit: this.unit
            }));
        } catch (e) { console.log('Save failed:', e); }
    },

    loadFromStorage() {
        try {
            const data = JSON.parse(localStorage.getItem('pinchData') || 'null');
            if (data) {
                this.streams = data.streams || [];
                this.exchangers = data.exchangers || [];
                document.getElementById('dtmin').value = data.dTmin || 10;
                this.lang = data.lang || 'fa';
                this.unit = data.unit || 'kW';
            }
        } catch (e) { console.log('Load failed:', e); }
    },

    saveProject() {
        this.saveToStorage();
        alert('✅ Project saved to browser');
    },

    exportProject() {
        const data = { streams: this.streams, exchangers: this.exchangers, dTmin: parseFloat(document.getElementById('dtmin').value), lang: this.lang, unit: this.unit };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `pinch-project-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
    },

    importProject(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.streams = data.streams || [];
                this.exchangers = data.exchangers || [];
                document.getElementById('dtmin').value = data.dTmin || 10;
                this.lang = data.lang || 'fa';
                this.unit = data.unit || 'kW';
                this.renderStreams();
                this.renderExchangers();
                this.updatePmStreams();
                this.calculate();
                alert('✅ Project imported');
            } catch (err) { alert('❌ Invalid file'); }
        };
        reader.readAsText(file);
    },

    // Help Modal
    showHelp() {
        const modal = document.getElementById('help-modal');
        const content = document.getElementById('help-content');
        content.innerHTML = `
            <h3>🚀 Getting Started</h3>
            <ol>
                <li>Enter stream data in the <strong>Data</strong> tab (Name, Ts, Tt, CP, h)</li>
                <li>Set ΔTmin in the sidebar</li>
                <li>Press <strong>Calculate</strong></li>
                <li>Navigate through all tabs to explore results</li>
            </ol>
            <h3>📊 Pinch Analysis Basics</h3>
            <p>The <strong>pinch point</strong> is the location of minimum temperature difference between hot and cold composite curves. It divides the problem into two independent regions.</p>
            <h3>🔑 Golden Rules</h3>
            <ul>
                <li>❌ No heat transfer across the pinch</li>
                <li>❌ No cold utility above the pinch</li>
                <li>❌ No hot utility below the pinch</li>
            </ul>
            <h3>🎯 Supertargeting</h3>
            <p>Finds the optimal ΔTmin balancing energy cost vs. capital cost.</p>
            <h3>🔄 HEN Design</h3>
            <p>Tick-off algorithm respecting CP rules: above pinch CPhot ≤ CPcold, below pinch CPhot ≥ CPcold.</p>
            <h3>🔧 Process Change (Plus-Minus)</h3>
            <p>Test how changing a stream temperature affects QHmin/QCmin.</p>
            <h3>🚨 Violators</h3>
            <p>Detect exchangers that cross the pinch (retrofit targets).</p>
            <h3>💾 Save/Load</h3>
            <p>Auto-saves to browser. Manual save/load via JSON files in sidebar.</p>
            <h3>📖 References</h3>
            <ul>
                <li>Kemp, I.C. — Pinch Analysis & Process Integration</li>
                <li>Smith, R. — Chemical Process Design and Integration</li>
                <li>Linnhoff & Hindmarsh — Pinch Design Method</li>
                <li>Dr. Omidkhah — Pinch Technology Lecture Notes</li>
            </ul>
            <h3>👨‍💻 Developer</h3>
            <p><strong>Hossein Sahraei</strong> — Chemical Engineer</p>
            <p>Pinch Master Pro v8.0</p>
        `;
        modal.classList.add('show');
    },

    closeHelp() {
        document.getElementById('help-modal').classList.remove('show');
    },

    // Report (same as before but simplified for space)
    async generateReport() {
        if (!this.pt) { alert('Calculate first'); return; }
        const pt = this.pt;
        const ex = Engine.exergy(this.streams);
        const dTmin = parseFloat(document.getElementById('dtmin').value);
        const now = new Date().toLocaleString(this.lang === 'fa' ? 'fa-IR' : 'en-US');
        
        document.getElementById('report-status').innerHTML = '<div class="warning-box">⏳ Generating...</div>';
        
        const tmp = document.createElement('div');
        tmp.style.cssText = 'position:fixed;left:-99999px;top:0;width:900px;';
        document.body.appendChild(tmp);
        
        try {
            ['cascade','composite','gcc','grid'].forEach(id => {
                const div = document.createElement('div');
                div.id = 'tmp-' + id;
                tmp.appendChild(div);
            });
            
            const curves = Engine.compositeCurves(this.streams, dTmin);
            Charts.cascade(pt, dTmin, 'tmp-cascade');
            Charts.composite(curves, pt, 'tmp-composite');
            Charts.gcc(pt, 'tmp-gcc');
            Charts.grid(this.streams, pt, 'tmp-grid');
            
            await new Promise(r => setTimeout(r, 800));
            
            const imgs = {
                cascade: await Plotly.toImage('tmp-cascade', { format: 'png', width: 900, height: 500, scale: 1.5 }),
                composite: await Plotly.toImage('tmp-composite', { format: 'png', width: 900, height: 500, scale: 1.5 }),
                gcc: await Plotly.toImage('tmp-gcc', { format: 'png', width: 900, height: 450, scale: 1.5 }),
                grid: await Plotly.toImage('tmp-grid', { format: 'png', width: 900, height: 450, scale: 1.5 })
            };
            
            document.body.removeChild(tmp);
            
            let html = `<div style="font-family:Vazirmatn;direction:rtl;padding:10px;">
                <div style="text-align:center;padding-bottom:15px;border-bottom:3px solid #667eea;margin-bottom:20px;">
                    <h1 style="color:#667eea;margin:0 0 8px 0;font-size:1.8rem;">🏭 Pinch Master Pro v8.0</h1>
                    <h2 style="color:#2d3748;margin:0 0 5px 0;font-size:1.1rem;">گزارش تحلیل تکنولوژی پینچ</h2>
                    <p style="color:#718096;margin:5px 0;">${now} | ΔTmin = ${dTmin}°C</p>
                    <p style="color:#667eea;font-size:0.85rem;">Hossein Sahraei</p>
                </div>
                <h2 style="color:#667eea;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">خلاصه نتایج</h2>
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:8px;border:1px solid #e2e8f0;">QHmin</td><td style="padding:8px;border:1px solid #e2e8f0;"><strong>${pt.QHmin.toFixed(2)} kW</strong></td></tr>
                    <tr><td style="padding:8px;border:1px solid #e2e8f0;">QCmin</td><td style="padding:8px;border:1px solid #e2e8f0;"><strong>${pt.QCmin.toFixed(2)} kW</strong></td></tr>
                    <tr><td style="padding:8px;border:1px solid #e2e8f0;">Pinch (Shifted)</td><td style="padding:8px;border:1px solid #e2e8f0;"><strong>${pt.pinchShifted.toFixed(2)} °C</strong></td></tr>
                    <tr><td style="padding:8px;border:1px solid #e2e8f0;">Pinch Hot/Cold</td><td style="padding:8px;border:1px solid #e2e8f0;"><strong>${pt.pinchHot.toFixed(1)} / ${pt.pinchCold.toFixed(1)} °C</strong></td></tr>
                </table>
                <h2 style="color:#667eea;border-bottom:2px solid #e2e8f0;padding-bottom:8px;margin-top:20px;">داده‌های جریان</h2>
                <table style="width:100%;border-collapse:collapse;">
                    <thead><tr style="background:#667eea;color:white;">
                        <th style="padding:6px;border:1px solid #ddd;">نام</th><th style="padding:6px;border:1px solid #ddd;">نوع</th>
                        <th style="padding:6px;border:1px solid #ddd;">Ts</th><th style="padding:6px;border:1px solid #ddd;">Tt</th>
                        <th style="padding:6px;border:1px solid #ddd;">CP</th><th style="padding:6px;border:1px solid #ddd;">h</th>
                    </tr></thead><tbody>
                        ${this.streams.map(s => `<tr>
                            <td style="padding:6px;border:1px solid #e2e8f0;">${s.Name}</td>
                            <td style="padding:6px;border:1px solid #e2e8f0;">${s.Ts > s.Tt ? '🔥' : '❄️'}</td>
                            <td style="padding:6px;border:1px solid #e2e8f0;">${s.Ts}</td>
                            <td style="padding:6px;border:1px solid #e2e8f0;">${s.Tt}</td>
                            <td style="padding:6px;border:1px solid #e2e8f0;">${s.CP}</td>
                            <td style="padding:6px;border:1px solid #e2e8f0;">${s.h || 0.5}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
                <div style="page-break-before:always;">
                    <h2 style="color:#667eea;">نمودار آبشاری</h2>
                    <img src="${imgs.cascade}" style="width:100%;max-width:700px;display:block;margin:10px auto;">
                </div>
                <div style="page-break-before:always;">
                    <h2 style="color:#667eea;">منحنی‌های ترکیبی</h2>
                    <img src="${imgs.composite}" style="width:100%;max-width:700px;display:block;margin:10px auto;">
                </div>
                <div style="page-break-before:always;">
                    <h2 style="color:#667eea;">منحنی جامع (GCC)</h2>
                    <img src="${imgs.gcc}" style="width:100%;max-width:700px;display:block;margin:10px auto;">
                </div>
                <div style="page-break-before:always;">
                    <h2 style="color:#667eea;">نمودار پنجره‌ای</h2>
                    <img src="${imgs.grid}" style="width:100%;max-width:700px;display:block;margin:10px auto;">
                </div>
                <div style="page-break-before:always;">
                    <h2 style="color:#667eea;">تحلیل اکسرژی</h2>
                    <table style="width:100%;border-collapse:collapse;">
                        <tr><td style="padding:8px;border:1px solid #e2e8f0;">Exergy Supplied</td><td style="padding:8px;border:1px solid #e2e8f0;">${ex.Esup.toFixed(2)} kW</td></tr>
                        <tr><td style="padding:8px;border:1px solid #e2e8f0;">Exergy Recovered</td><td style="padding:8px;border:1px solid #e2e8f0;">${ex.Erec.toFixed(2)} kW</td></tr>
                        <tr><td style="padding:8px;border:1px solid #e2e8f0;">Exergy Destroyed</td><td style="padding:8px;border:1px solid #e2e8f0;">${ex.Edest.toFixed(2)} kW</td></tr>
                        <tr><td style="padding:8px;border:1px solid #e2e8f0;">Efficiency</td><td style="padding:8px;border:1px solid #e2e8f0;">${(ex.eff * 100).toFixed(1)}%</td></tr>
                    </table>
                </div>
                <div style="page-break-before:always;">
                    <h2 style="color:#667eea;">Methodology & References</h2>
                    <p><strong>Golden Rules:</strong></p>
                    <ul><li>No heat transfer across pinch</li><li>No cold utility above pinch</li><li>No hot utility below pinch</li></ul>
                    <p><strong>References:</strong> Kemp, Smith, Linnhoff, Omidkhah</p>
                </div>
                <div style="text-align:center;margin-top:30px;padding-top:15px;border-top:2px solid #e2e8f0;color:#718096;font-size:0.85rem;">
                    <p><strong>Pinch Master Pro v8.0</strong> | ${now}</p>
                    <p>Developed by Hossein Sahraei</p>
                </div>
            </div>`;
            
            document.getElementById('report-content').innerHTML = html;
            document.getElementById('report-status').innerHTML = '<div class="success-box">✅ Report ready! Click "Save PDF".</div>';
        } catch (err) {
            if (tmp.parentNode) document.body.removeChild(tmp);
            document.getElementById('report-status').innerHTML = `<div class="error-box">Error: ${err.message}</div>`;
        }
    },

    printReport() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        document.querySelector('[data-tab="report"]').classList.add('active');
        document.getElementById('tab-report').classList.add('active');
        const c = document.getElementById('report-content');
        if (!c.innerHTML.trim()) { alert('Generate report first'); return; }
        setTimeout(() => window.print(), 300);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
window.addEventListener('beforeunload', () => App.saveToStorage());