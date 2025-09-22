document.getElementById('calculate-btn').addEventListener('click', function() { 
    const exercises = ['bench', 'squat', 'deadlift'];

    exercises.forEach(exercise => {
        // 각 운동에 해당하는 무게와 반복횟수 입력 요소를 가져오기
        const weightInput = document.getElementById(`${exercise}-weight`);
        const repsInput = document.getElementById(`${exercise}-reps`);
        const resultElement = document.getElementById(`${exercise}-result`);
 
        const weight = parseFloat(weightInput.value);
        const reps = parseFloat(repsInput.value);

        // 무게와 횟수가 모두 유효한 숫자인 경우에만 계산 수행
        if (!isNaN(weight) && !isNaN(reps) && weight > 0 && reps > 0) { 
            const oneRepMax = weight * (1 + reps / 30); 
            
            resultElement.textContent = `예상 1RM: ${oneRepMax.toFixed(2)} kg`;
        } else {
            resultElement.textContent = '예상 1RM: ';
        }
    });
});
