function generateFibonacci() {
    const input = document.getElementById("fibonacciInput");
    const result = document.getElementById("fibonacciResult");
    const n = parseInt(input.value);

    if (!isNaN(n) && n >= 0) {
        let fibonacci = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        result.textContent = `Deret Fibonacci: ${fibonacci.join(', ')}`;
    } else {
        result.textContent = "Masukkan jumlah angka valid (>= 0)";
    }
}

function calculateVolume() {
    const shapeSelect = document.getElementById("shapeSelect");
    const inputFields = document.getElementById("inputFields");
    const volumeResult = document.getElementById("volumeResult");
    
    const shape = shapeSelect.value;

    if (shape === "cube") {
        inputFields.innerHTML = '<input type="number" id="cubeSide" placeholder="Panjang sisi kubus">';
    } else if (shape === "sphere") {
        inputFields.innerHTML = '<input type="number" id="sphereRadius" placeholder="Jari-jari bola">';
    } else if (shape === "cylinder") {
        inputFields.innerHTML = `
            <input type="number" id="cylinderRadius" placeholder="Jari-jari silinder">
            <input type="number" id="cylinderHeight" placeholder="Tinggi silinder">
        `;
    }

    volumeResult.textContent = "";

    inputFields.innerHTML += '<button onclick="calculateVolumeResult()">Hitung</button>';
}

function calculateVolumeResult() {
    const shapeSelect = document.getElementById("shapeSelect");
    const volumeResult = document.getElementById("volumeResult");
    
    const shape = shapeSelect.value;
    let volume;

    if (shape === "cube") {
        const side = parseFloat(document.getElementById("cubeSide").value);
        volume = side ** 3;
    } else if (shape === "sphere") {
        const radius = parseFloat(document.getElementById("sphereRadius").value);
        volume = (4/3) * Math.PI * radius ** 3;
    } else if (shape === "cylinder") {
        const radius = parseFloat(document.getElementById("cylinderRadius").value);
        const height = parseFloat(document.getElementById("cylinderHeight").value);
        volume = Math.PI * radius ** 2 * height;
    }

    if (!isNaN(volume)) {
        volumeResult.textContent = `Volume ${shape}: ${volume.toFixed(2)}`;
    } else {
        volumeResult.textContent = "Masukkan angka yang valid";
    }
}
