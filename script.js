function calculateDCA() {
    let investment = parseFloat(document.getElementById("investment").value);
    let weeks = parseInt(document.getElementById("weeks").value);
    let totalInvestment = investment * weeks;
    let estimatedGrowth = totalInvestment * 1.5; // Placeholder for potential returns
    document.getElementById("result").innerText = `Total Invested: $${totalInvestment}\nEstimated Value: $${estimatedGrowth}`;
}
