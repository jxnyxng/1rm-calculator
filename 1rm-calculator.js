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
                  const bp1RM = calculate1RM(bpWeight, bpReps);
                  resultsHTML += `<p>벤치프레스 1RM: ${bp1RM} kg</p>`;
                  totalWeight += parseFloat(bp1RM);
                  exerciseCount++;
              }
              if (sqWeight && sqReps) {
                  const sq1RM = calculate1RM(sqWeight, sqReps);
                  resultsHTML += `<p>스쿼트 1RM: ${sq1RM} kg</p>`;
                  totalWeight += parseFloat(sq1RM);
                  exerciseCount++;
              }
              if (dlWeight && dlReps) {
                  const dl1RM = calculate1RM(dlWeight, dlReps);
                  resultsHTML += `<p>데드리프트 1RM: ${dl1RM} kg</p>`;
                  totalWeight += parseFloat(dl1RM);
                  exerciseCount++;
              }
      
              document.getElementById("result-container").innerHTML = resultsHTML;
      
              if (exerciseCount > 0) {
                  document.getElementById("total-1RM").innerHTML = `<p>${exerciseCount}대 운동 합산 1RM: ${totalWeight.toFixed(2)} kg</p>`;
              } else {
                  document.getElementById("total-1RM").innerHTML = "";
              }
          }
      
          document.querySelectorAll("input").forEach(input => {
              input.addEventListener("input", updateResults);
          });
      });
      
