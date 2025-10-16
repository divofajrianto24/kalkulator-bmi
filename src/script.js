const form = document.getElementById("bmiForm");
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value, 10);
    const sex = document.getElementById("sex").value;

    if (!weight || !heightCm || !age || !sex) {
        resultEl.innerHTML = `<p>Masukkan semua data dengan benar.</p>`;
        return;
    }
    if (weight <= 0 || heightCm <= 0 || age <= 0) {
        resultEl.innerHTML = `<p>Nilai tidak valid.</p>`;
        return;
    }

    const heightM = heightCm / 100;
    const bmiRaw = weight / (heightM * heightM);
    const bmi = Number.isFinite(bmiRaw) ? bmiRaw : 0;

    let category = "-";
    if (age >= 20) {
        if (bmi < 18.5) category = "Kurus (Underweight)";
        else if (bmi < 25) category = "Normal";
        else if (bmi < 30) category = "Gemuk (Overweight)";
        else category = "Obesitas";
    } else {
        category = "Gunakan BMI-for-age (kurva pertumbuhan)";
    }

    const sexMale = sex === "male" ? 1 : 0;
    let bodyFat = 1.20 * bmi + 0.23 * age - 10.8 * sexMale - 5.4;

    if (!Number.isFinite(bodyFat)) bodyFat = 0;
    bodyFat = Math.max(0, Math.min(bodyFat, 75));

    let bfCategory = "-";
    if (age >= 20) {
        if (sexMale) {
            if (bodyFat < 6) bfCategory = "Sangat rendah";
            else if (bodyFat < 14) bfCategory = "Athlete/Lean";
            else if (bodyFat < 18) bfCategory = "Fit";
            else if (bodyFat < 25) bfCategory = "Sehat";
            else bfCategory = "Tinggi";
        } else {
            if (bodyFat < 14) bfCategory = "Sangat rendah";
            else if (bodyFat < 21) bfCategory = "Athlete/Lean";
            else if (bodyFat < 25) bfCategory = "Fit";
            else if (bodyFat < 32) bfCategory = "Sehat";
            else bfCategory = "Tinggi";
        }
    } else {
        bfCategory = "Estimasi belum akurat untuk <20 th";
    }

    const bmiStr = bmi ? bmi.toFixed(1) : "0.0";
    const bfStr = bodyFat.toFixed(1);

    resultEl.innerHTML = `
    <div>
        <div class="big">BMI: <strong>${bmiStr}</strong>
            ${age >= 20 ? `<span class="badge">${category}</span>` : ""}
        </div>
            ${age < 20 ? `<p><em>Usia ${age} th: gunakan kurva BMI-for-age untuk kategori.</em></p>` : ""}
        <hr/>
        <p>
        Estimasi Lemak Tubuh: <strong>${bfStr}%</strong>
        <span class="badge">${bfCategory}</span>
        </p>
        <ul style="text-align:left; padding-left:18px; margin-top:10px;">
            <li>Berat: ${weight} kg</li>
            <li>Tinggi: ${heightCm} cm</li>
            <li>Umur: ${age} th</li>
            <li>Jenis Kelamin: ${sex === "male" ? "Laki-laki" : "Perempuan"}</li>
        </ul>
    </div>
    `;
});

resetBtn.addEventListener("click", () => {
    form.reset();
    resultEl.innerHTML = "";
});