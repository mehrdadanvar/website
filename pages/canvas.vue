<template>
  <ClientOnly>
    <div>
      <div>
        <canvas id="canvas" width="500" height="500" class="border border-gray-500 rounded-lg"></canvas>
      </div>
      <div></div>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  pageTransition: false,
});
import { onMounted } from "vue";
console.log(onMounted);
onMounted(() => {
  setTimeout(() => {
    console.log("hi"); // WORKS!!
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const mean = 1; // Mean of the normal distribution
    const stdDeviation = 1; // Standard deviation of the normal distribution

    // Function to calculate the y-coordinate for a given x-coordinate
    function normalDistribution(x) {
      const coefficient = 1 / (stdDeviation * Math.sqrt(2 * Math.PI));
      const exponent = -((x - mean) ** 2) / (2 * stdDeviation ** 2);
      return coefficient * Math.exp(exponent);
    }

    // Draw the curve using the calculated points
    function drawNormalDistributionCurve() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      const step = 0.05; // Adjust the step value for smoother or coarser curve
      for (let x = -5; x <= 5; x += step) {
        const y = normalDistribution(x);
        const pixelX = (canvas.width / 10) * (x + 5); // Scale the x-coordinate to fit the canvas
        const pixelY = canvas.height - (canvas.height / 2) * y; // Scale the y-coordinate to fit the canvas
        if (x === -5) {
          ctx.moveTo(pixelX, pixelY);
        } else {
          ctx.lineTo(pixelX, pixelY);
        }
      }
      ctx.stroke();
    }

    // Call the function to draw the curve initially
    drawNormalDistributionCurve();
  }, 1000);
});
</script>

<style scoped></style>
