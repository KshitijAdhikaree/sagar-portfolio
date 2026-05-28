import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const getFeatureLabel = (key) => {
    return key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export default function EPLPredictor() {
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");
    const [model, setModel] = useState("XGBoost");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const res = await fetch("/api/teams");
                if (!res.ok) {
                    throw new Error(
                        "Failed to retrieve teams list from prediction engine.",
                    );
                }
                const data = await res.json();
                setTeams(data);
            } catch (err) {
                console.error(err);
                setError(
                    "Failed to fetch team list. Please verify that the Hugging Face Space is active.",
                );
            }
        };
        fetchTeams();
    }, []);

    const handlePredict = async (e) => {
        e.preventDefault();
        if (!homeTeam || !awayTeam) {
            setError("Please select both home and away teams.");
            return;
        }
        if (homeTeam === awayTeam) {
            setError("Home and away teams must be different.");
            return;
        }

        setError("");
        setLoading(true);
        setPrediction(null);

        try {
            const res = await fetch(
                `/api/predict?home=${encodeURIComponent(homeTeam)}&away=${encodeURIComponent(awayTeam)}&model=${encodeURIComponent(model)}`,
            );
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || `API returned status ${res.status}`);
            }
            setPrediction(data);
        } catch (err) {
            console.error(err);
            setError(
                err.message ||
                "Failed to fetch prediction. Please check if the API and environment variables are properly set up.",
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Sagar | EPL Predictions</title>
                <meta name="description" content="EPL Predictions" />
            </Head>
            <TransitionEffect />
            <main className="w-full flex flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16">
                    <AnimatedText
                        text="EPL Matchup Predictor"
                        className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl text-center "
                    />
                  <article
  className="
    w-full relative
    rounded-3xl
    border border-dark dark:border-light
    bg-light dark:bg-dark
    p-10
    shadow-[0_35px_60px_-15px_rgba(0,0,0,0.35)]
  "
>
                        <div
                            className="absolute top-0 -right-3 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[101%] xs:w-[100%] xs:rounded-[1.5rem]"
                        />

                        <header className="mb-6 border-b-2 border-gray-800 dark:border-gray-300 pb-4">
                            {/* <div className="flex justify-between items-baseline flex-wrap gap-2">
                                <h1 className="text-3xl font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                                    ML Prediction Engine
                                </h1>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                                    Trained with EPL 2025/26 Match Data
                                </span>
                            </div> */}
                            <p className="text-xl text-gray-600 dark:text-gray-400 mt-2 text-justify leading-relaxed">
                                This Dashboard queries pretrained machine learning models hosted
                                on Hugging Face Spaces. I have trained seperate models for home and away teams given team&apos;s performance data.
                                The features include shot-wise match statistics, expected goals (xG) metrices, and recent performance curves
                                to predict the final scores. Select your matchup and preferred model to see the predicted scoreline with
                                probability distributions and the key features influencing the prediction.
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-justify leading-relaxed">
                                See the model documentation and code on my github:{" "}
                                <a
                                    href="https://github.com/sagara92/GameStatexG_Soccer_Predictor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                                >
                                    GameStatexG_Soccer_Predictor
                                </a>
                            </p>
                        </header>

                        {/* Selection Form Section */}
                        <form onSubmit={handlePredict} className="space-y-8">
                            <div className="relative">
                                <div className="grid grid-cols-5 gap-6 items-center">

                                    {/* Home Team */}
                                    <div className="col-span-2">
                                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 border border-blue-500/30 rounded-2xl p-5 backdrop-blur">
                                            <label className="block text-xs uppercase tracking-widest font-bold text-blue-400 mb-3">
                                                Home Team
                                            </label>

                                            <select
                                                value={homeTeam}
                                                onChange={(e) => setHomeTeam(e.target.value)}
                                                className=" w-full rounded-xl  border border-blue-500/30  bg-white dark:bg-slate-900  text-slate-900 dark:text-white px-4 py-3 text-sm font-medium  focus:outline-none   focus:ring-2 focus:ring-blue-500   focus:border-blue-500 "
                                            >
                                                <option
                                                    value=""
                                                    className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                                >
                                                    Select Team
                                                </option>

                                                {teams.map((team) => (
                                                    <option
                                                        key={team}
                                                        value={team}
                                                        className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                                    >
                                                        {team}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>

                                    {/* VS */}
                                    <div className="flex justify-center">
                                        <div className="relative flex items-center justify-center">

                                            {/* VS Circle */}
                                            <div className="relative h-20 w-20 rounded-full bg-dark  border-2 border-white/60 flex items-center justify-center shadow-lg dark:bg-light">
                                                <span className="text-white font-black text-2xl tracking-widest dark:text-dark">
                                                    VS
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Away Team */}
                                    <div className="col-span-2">
                                        <div className="bg-gradient-to-br from-red-500/10 to-red-700/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur">
                                            <label className="block text-xs uppercase tracking-widest font-bold text-red-400 mb-3">
                                                Away Team
                                            </label>

                                            <select
                                                value={awayTeam}
                                                onChange={(e) => setAwayTeam(e.target.value)}
                                                className="
    w-full
    rounded-xl
    border border-red-500/30
    bg-white dark:bg-slate-900
    text-slate-900 dark:text-white
    px-4 py-3
    text-sm font-medium
    focus:outline-none
    focus:ring-2 focus:ring-red-500
    focus:border-red-500
  "
                                            >
                                                <option
                                                    value=""
                                                    className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                                >
                                                    Select Team
                                                </option>

                                                {teams.map((team) => (
                                                    <option
                                                        key={team}
                                                        value={team}
                                                        className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                                    >
                                                        {team}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Model */}
                            <div className="max-w-md mx-auto">
                                <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                                    Prediction Model
                                </label>

                                <select
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    className="w-full bg-light border border-gray-700 rounded-xl px-4 py-3 dark:bg-dark"
                                >
                                    <option value="XGBoost">⚡ XGBoost</option>
                                    <option value="Random_Forest">🌲 Random Forest</option>
                                    <option value="Gradient_Boosting">📈 Gradient Boosting</option>
                                </select>
                            </div>

                            {/* Predict Button */}
                            <div className="flex justify-center pb-12">
                                
                                <button
                                    type="submit"
                                    disabled={
                                        loading ||
                                        !homeTeam ||
                                        !awayTeam ||
                                        homeTeam === awayTeam
                                    }
                                    className="
      relative overflow-hidden
      bg-dark border border-light
      dark:bg-light dark:border-dark dark:text-dark
      text-white font-black tracking-widest
      px-12 py-4 rounded-2xl
      shadow-xl
      transition-all duration-300
      hover:scale-105
      disabled:opacity-60 disabled:cursor-not-allowed
      min-w-[180px]
    "
                                >
                                    {/* Ping Animation */}
                                <div className="absolute h-10 w-24 rounded-full bg-blue-500/20 animate-ping" />
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-3 uppercase">
                                            <svg
                                                className="h-5 w-5 animate-spin"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                />
                                            </svg>

                                            Predicting...
                                        </span>
                                    ) : (
                                        "Predict"
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Results Block */}
                        {prediction && (
                            <div className="animate-fade-in">
                                {/* Score Summary Section */}
                                <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800/40 border border-gray-800 dark:border-gray-700 rounded-lg">
                                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 font-mono">
                                        Most Probable Outcome
                                    </h2>
                                    <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300 dark:border-gray-700">
                                        {/* Home */}
                                        <div className="w-5/12 text-right">
                                            <div className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                                {prediction.home_team}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1 uppercase font-semibold">
                                                Home
                                            </div>
                                        </div>

                                        {/* Score */}
                                        <div className="w-2/12 text-center">
                                            <div className="text-4xl md:text-5xl font-extrabold tracking-widest text-blue-600 dark:text-blue-400 flex justify-center items-center gap-1 select-none">
                                                <span>{prediction.predicted_home_goals}</span>
                                                <span className="text-gray-400 text-3xl font-light">
                                                    -
                                                </span>
                                                <span>{prediction.predicted_away_goals}</span>
                                            </div>
                                        </div>

                                        {/* Away */}
                                        <div className="w-5/12 text-left">
                                            <div className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                                {prediction.away_team}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1 uppercase font-semibold">
                                                Away
                                            </div>
                                        </div>
                                    </div>

                                    {/* Engine Details */}
                                    <div className="mt-4 flex flex-wrap justify-between items-center text-xs text-gray-600 dark:text-gray-400 font-mono gap-2">
                                        <div>
                                            MODEL:{" "}
                                            <span className="font-bold text-gray-900 dark:text-gray-200">
                                                {prediction.model}
                                            </span>
                                        </div>
                                        <div>
                                            ENGINE:{" "}
                                            <span className="font-bold text-gray-900 dark:text-gray-200">
                                                {prediction.fallback
                                                    ? "JS Fallback (Poisson)"
                                                    : "Hugging Face Space ML Engine"}
                                            </span>
                                        </div>
                                    </div>
                                </section>

                                {/* Outcome Probabilities Proportional Bar */}
                                <section className="mb-8">
                                    <h2 className="text-md font-bold mb-4 uppercase text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 pb-1">
                                        Win / Draw Probabilities
                                    </h2>

                                    {/* The bar */}
                                    <div className="w-full h-8 rounded overflow-hidden flex border border-gray-800 dark:border-gray-600 shadow-sm select-none">
                                        <div
                                            style={{ width: `${prediction.home_win_probability}%` }}
                                            className="bg-emerald-600 h-full flex items-center justify-center text-white text-xs font-bold transition-all relative group"
                                            title={`${prediction.home_team} Win`}
                                        >
                                            {prediction.home_win_probability > 15 &&
                                                `${prediction.home_win_probability}%`}
                                        </div>
                                        <div
                                            style={{ width: `${prediction.draw_probability}%` }}
                                            className="bg-gray-400 dark:bg-gray-600 h-full flex items-center justify-center text-white text-xs font-bold transition-all relative group"
                                            title="Draw"
                                        >
                                            {prediction.draw_probability > 15 &&
                                                `${prediction.draw_probability}%`}
                                        </div>
                                        <div
                                            style={{ width: `${prediction.away_win_probability}%` }}
                                            className="bg-blue-600 h-full flex items-center justify-center text-white text-xs font-bold transition-all relative group"
                                            title={`${prediction.away_team} Win`}
                                        >
                                            {prediction.away_win_probability > 15 &&
                                                `${prediction.away_win_probability}%`}
                                        </div>
                                    </div>

                                    {/* Legend Labels */}
                                    <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs font-semibold">
                                        <div className="flex items-center justify-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                                            <span className="w-3 h-3 bg-emerald-600 rounded-sm inline-block" />
                                            <span>
                                                {prediction.home_team} Win (
                                                {prediction.home_win_probability}%)
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center gap-1.5 text-gray-600 dark:text-gray-300">
                                            <span className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-sm inline-block" />
                                            <span>Draw ({prediction.draw_probability}%)</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-1.5 text-blue-700 dark:text-blue-400">
                                            <span className="w-3 h-3 bg-blue-600 rounded-sm inline-block" />
                                            <span>
                                                {prediction.away_team} Win (
                                                {prediction.away_win_probability}%)
                                            </span>
                                        </div>
                                    </div>
                                </section>

                                {/* Score Probability Heatmap */}
                                <section className="mb-8">
                                    <h2 className="text-md font-bold mb-4 uppercase text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 pb-1">
                                        Score Probability Matrix
                                    </h2>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 text-justify leading-relaxed">
                                        The matrix below maps the statistical likelihood of specific
                                        score lines. Shaded intensities indicate higher probability
                                        levels.
                                    </p>

                                    <div className="overflow-x-auto pb-2">
                                        <div className="min-w-[480px]">
                                            {/* Grid Heatmap */}
                                            <div className="grid grid-cols-7 gap-1 text-center font-mono">
                                                {/* Empty cell at top-left corner */}
                                                <div className="flex items-center justify-center text-xs font-bold text-gray-400">
                                                    H \ A
                                                </div>

                                                {/* Top column labels (Away Team Goals 0 to 5) */}
                                                {[0, 1, 2, 3, 4, 5].map((a) => (
                                                    <div
                                                        key={`col-${a}`}
                                                        className="text-xs font-bold uppercase py-1 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                                    >
                                                        {a} {a === 1 ? "Goal" : "Goals"}
                                                    </div>
                                                ))}

                                                {/* Rows: Home Goals 0 to 5 */}
                                                {[0, 1, 2, 3, 4, 5].map((h) => (
                                                    <React.Fragment key={`row-frag-${h}`}>
                                                        {/* Row Left Label: Home Goals */}
                                                        <div className="flex items-center justify-start pl-2 text-xs font-bold text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 pr-1">
                                                            {h} {h === 1 ? "Goal" : "Goals"}
                                                        </div>

                                                        {/* Row Cells */}
                                                        {[0, 1, 2, 3, 4, 5].map((a) => {
                                                            const cellValue = prediction.score_matrix[h][a];
                                                            const maxVal = 20; // 20% max normalization color
                                                            const intensity = Math.min(1, cellValue / maxVal);
                                                            const isHighlight =
                                                                h === prediction.predicted_home_goals &&
                                                                a === prediction.predicted_away_goals;

                                                            return (
                                                                <div
                                                                    key={`cell-${h}-${a}`}
                                                                    style={{
                                                                        backgroundColor: `rgba(37, 99, 235, ${intensity})`,
                                                                        color:
                                                                            intensity > 0.45 ? "#ffffff" : "inherit",
                                                                    }}
                                                                    className={`aspect-video flex flex-col justify-center items-center p-1 border rounded transition-all text-xs relative ${isHighlight
                                                                        ? "ring-2 ring-red-500 dark:ring-red-400 border-red-500 scale-[1.03] z-10"
                                                                        : "border-gray-200 dark:border-gray-800"
                                                                        }`}
                                                                    title={`${prediction.home_team} ${h} - ${a} ${prediction.away_team}: ${cellValue}% probability`}
                                                                >
                                                                    <span
                                                                        className={`font-bold ${intensity > 0.45 ? "text-white" : "text-gray-900 dark:text-gray-100"}`}
                                                                    >
                                                                        {cellValue}%
                                                                    </span>
                                                                    {isHighlight && (
                                                                        <span className="text-[9px] uppercase tracking-tighter font-extrabold text-red-500 dark:text-red-400 font-sans mt-0.5 animate-pulse">
                                                                            Most Probable
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Under the Hood Insights Section */}
                                <section className="mb-6">
                                    <h2 className="text-md font-bold mb-4 uppercase text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 pb-1">
                                        Model Features
                                    </h2>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 text-justify leading-relaxed">
                                        Key quantitative team differentials factored
                                        in by the classification model for the match prediction.
                                        Differences are calculated as [Home Stats] - [Away Stats].
                                    </p>

                                    <div className="border border-gray-800 dark:border-gray-700 rounded-lg overflow-hidden select-none">
                                        <table className="w-full text-left text-xs font-mono">
                                            <thead className="bg-gray-100 dark:bg-gray-800 font-bold uppercase text-gray-700 dark:text-gray-300 border-b border-gray-800 dark:border-gray-700">
                                                <tr>
                                                    <th className="py-2.5 px-4">Feature Indicator</th>
                                                    <th className="py-2.5 px-4 text-right">
                                                        Differential Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900/40">
                                                {Object.entries(prediction.features_used).map(
                                                    ([key, val]) => {
                                                        const isPositive = val > 0;
                                                        const isZero = val === 0;
                                                        return (
                                                            <tr
                                                                key={key}
                                                                className="hover:bg-gray-50 hover:dark:bg-gray-800/20 transition-colors"
                                                            >
                                                                <td className="py-2 px-4 truncate max-w-[280px] md:max-w-none text-gray-600 dark:text-gray-300 font-sans">
                                                                    {getFeatureLabel(key)}
                                                                </td>
                                                                <td
                                                                    className={`py-2 px-4 text-right font-bold ${isZero
                                                                        ? "text-gray-500"
                                                                        : isPositive
                                                                            ? "text-emerald-600 dark:text-emerald-400"
                                                                            : "text-red-600 dark:text-red-400"
                                                                        }`}
                                                                >
                                                                    {isZero
                                                                        ? "0.0000"
                                                                        : `${isPositive ? "+" : ""}${val.toFixed(4)}`}
                                                                </td>
                                                            </tr>
                                                        );
                                                    },
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* Document Footer (Resume footer style) */}
                        <footer className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700 text-center text-[10px] text-gray-500 dark:text-gray-400 font-mono">
                             EPL Predictor Report | Compiled on Sagar Adhikari&apos;s Research Environment
                        </footer>
                    </article>
                </Layout>
            </main>
        </>
    );
}
