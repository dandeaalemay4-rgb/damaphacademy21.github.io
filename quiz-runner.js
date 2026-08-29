<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade 9 Math Unit 1 - DamaphAcademy21</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .box-section {
            background: var(--card-bg);
            border-left: 4px solid #0284c7;
            padding: 1.2rem;
            margin: 1.5rem 0;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .box-warning {
            border-left-color: #e11d48;
            background: rgba(225, 29, 72, 0.05);
        }
        .back-btn {
            display: inline-block;
            margin-bottom: 1rem;
            color: #0284c7;
            text-decoration: none;
            font-weight: bold;
        }
        /* Calc Box Styling */
        .calc-input {
            width: 100%;
            padding: 0.6rem;
            margin: 0.5rem 0;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            background: var(--bg-color);
            color: var(--text-color);
        }
        .calc-res {
            font-weight: bold;
            color: #0284c7;
            margin-top: 0.5rem;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">DamaphAcademy21</div>
        <nav>
            <a href="index.html">Home</a>
            <a href="grade9.html" class="active">Grade 9</a>
            <a href="grade10.html">Grade 10</a>
            <a href="grade11.html">Grade 11</a>
            <a href="grade12.html">Grade 12</a>
            <a href="sat-math.html">SAT Math</a>
        </nav>
        <button id="theme-toggle" class="theme-toggle">🌙 Dark</button>
    </header>

    <section class="main-content">
        <a href="grade9.html" class="back-btn">⬅ Back to Grade 9 Units</a>
        
        <h2>📐 Unit 1: Further on Sets</h2>

        <!-- 1. COMPREHENSIVE STUDY NOTES -->
        <div class="box-section">
            <h3>📘 Study Notes & Shortcuts</h3>
            <ul>
                <li><b>Union (A ∪ B):</b> Elements in A, B, or both. <i>A ∪ B = {x : x ∈ A or x ∈ B}</i></li>
                <li><b>Intersection (A ∩ B):</b> Elements common to both A and B. <i>A ∩ B = {x : x ∈ A and x ∈ B}</i></li>
                <li><b>Difference (A \ B):</b> Elements in A but NOT in B. <i>A \ B = {x : x ∈ A and x ∉ B}</i></li>
                <li><b>Complement (A′):</b> Elements in Universal Set U but NOT in A. <i>A′ = U \ A</i></li>
                <li><b>De Morgan's Laws:</b> (A ∪ B)′ = A′ ∩ B′  and  (A ∩ B)′ = A′ ∪ B′</li>
            </ul>
        </div>

        <!-- 2. EXAM TRAPS & WARNINGS -->
        <div class="box-section box-warning">
            <h3>⚠️ Common Exam Traps (በፈተና ተጠንቀቅ!)</h3>
            <ul>
                <li><b>Subset Count Trap:</b> ∅ (Empty set) is a subset of EVERY set. Total Subsets = 2<sup>n</sup>.</li>
                <li><b>Proper Subsets:</b> Proper Subsets = 2<sup>n</sup> - 1 (Excludes the set itself!).</li>
                <li><b>{0} vs ∅:</b> {0} is NOT an empty set! It contains one element (0). ∅ or { } is the empty set.</li>
            </ul>
        </div>

        <!-- 3. INTERACTIVE SUBSET CALCULATOR -->
        <div class="box-section">
            <h3>🧮 Interactive Subset Calculator</h3>
            <p>Enter the number of elements in a set (n):</p>
            <input type="number" id="num-elements" class="calc-input" placeholder="e.g. 4" min="0">
            <button class="btn" onclick="calculateSubsets()">Calculate Subsets</button>
            <div id="calc-result" class="calc-res"></div>
        </div>

        <!-- 4. PRACTICE QUIZ CONTAINER -->
        <h3>🎯 Practice MCQs</h3>
        <br>
        <div id="quiz-container"></div>

    </section>

    <footer>
        <p>&copy; 2026 DamaphAcademy21. All rights reserved.</p>
    </footer>

    <script>
        // Interactive Calculator Script
        function calculateSubsets() {
            const n = parseInt(document.getElementById('num-elements').value);
            const resDiv = document.getElementById('calc-result');
            if (isNaN(n) || n < 0) {
                resDiv.innerHTML = "Please enter a valid positive number.";
                return;
            }
            const total = Math.pow(2, n);
            const proper = total - 1;
            resDiv.innerHTML = `Total Subsets (2<sup>${n}</sup>): <b>${total}</b> | Proper Subsets: <b>${proper}</b>`;
        }
    </script>

    <script src="script.js"></script>
    <script src="questions-g9m1.js"></script>
    <script src="quiz-runner.js"></script>
</body>
</html>
