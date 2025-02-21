document.addEventListener("DOMContentLoaded", function () {
    function calculate1RM(weight, reps) {
        if (weight > 0 && reps > 0) {
            return (weight * (1 + reps / 30)).toFixed(2); // Epley 공식 적용
        }
        return null;
    }

    function updateResults() {
        const bpWeight = parseFloat(document.querySelector(".BPWeight").value) || 0;
        const bpReps = parseFloat(document.querySelector(".BPRep").value) || 0;
        const sqWeight = parseFloat(document.querySelector(".SQWeight").value) || 0;
        const sqReps = parseFloat(document.querySelector(".SQRep").value) || 0;
        const dlWeight = parseFloat(document.querySelector(".DLWeight").value) || 0;
        const dlReps = parseFloat(document.querySelector(".DLRep").value) || 0;

        let resultsHTML = "";
        let totalWeight = 0;
        let exerciseCount = 0;

        if (bpWeight && bpReps) {
            let bp1RM = bpReps === 1 ? bpWeight : calculate1RM(bpWeight, bpReps);
            resultsHTML += `<div class="result-item">벤치프레스 1RM: ${bp1RM} kg</div>`;
            totalWeight += parseFloat(bp1RM);
            exerciseCount++;
        }
        if (sqWeight && sqReps) {
            let sq1RM = sqReps === 1 ? sqWeight : calculate1RM(sqWeight, sqReps);
            resultsHTML += `<div class="result-item">스쿼트 1RM: ${sq1RM} kg</div>`;
            totalWeight += parseFloat(sq1RM);
            exerciseCount++;
        }
        if (dlWeight && dlReps) {
            let dl1RM = dlReps === 1 ? dlWeight : calculate1RM(dlWeight, dlReps);
            resultsHTML += `<div class="result-item">데드리프트 1RM: ${dl1RM} kg</div>`;
            totalWeight += parseFloat(dl1RM);
            exerciseCount++;
        }

        document.getElementById("result-container").innerHTML = resultsHTML;
        document.getElementById("total-1RM").innerHTML =
            exerciseCount > 0 ? `<p>${exerciseCount}대 : ${totalWeight.toFixed(2)} kg</p>` : "";

    }

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateResults);
    });
});
