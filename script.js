document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", calculateDCA);
});

function calculateDCA() {
    let investment = parseFloat(document.getElementById("investment").value);
    let weeks = parseInt(document.getElementById("weeks").value);

    if (isNaN(investment) || isNaN(weeks) || investment <= 0 || weeks <= 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let totalInvestment = investment * weeks;
    let estimatedGrowth = totalInvestment * 1.5; // Placeholder for potential returns

    document.getElementById("result").innerText = `Total Invested: $${totalInvestment.toFixed(2)}\nEstimated Value: $${estimatedGrowth.toFixed(2)}`;
}

