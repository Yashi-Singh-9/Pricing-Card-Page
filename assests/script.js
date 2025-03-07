document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const dropdown = document.getElementById("monthly-mau");

  const starterPrice = document.querySelector(".cards:nth-of-type(1) h1");
  const proPrice = document.querySelector(".cards:nth-of-type(2) h1");
  const enterprisePrice = document.querySelector(".cards:nth-of-type(3) h1");

  // Monthly & Yearly Pricing for Pro Plan Options
  const proOptions = {
      monthly: [99, 149, 249, 449, 749, 1249],
      yearly: [990, 1490, 2490, 4490, 7490, 12490]
  };

  // MAU options for Monthly
  const monthlyMAUs = [2500, 5000, 10000, 25000, 50000, 100000];

  // Adjusted MAU options for Yearly (reduced by a certain factor)
  const yearlyMAUs = [2200, 4600, 9200, 23000, 46000, 92000]; // Adjusted for annual

  // Prices for Starter and Enterprise Plans (Fixed)
  const starterPrices = {
      monthly: 19,
      yearly: 190 // Discounted price for yearly plan
  };
  const enterprisePriceText = "Let's Talk"; // No price for the Enterprise plan

  // Function to update dropdown values
  function updateDropdown() {
      const isYearly = toggle.classList.contains("active");
      const prices = isYearly ? proOptions.yearly : proOptions.monthly;
      const maUs = isYearly ? yearlyMAUs : monthlyMAUs;

      // Update pricing
      starterPrice.textContent = `$${isYearly ? starterPrices.yearly : starterPrices.monthly}`;
      proPrice.innerHTML = `$${prices[0]}<span class="month">/ month</span>`; // Pro plan price
      enterprisePrice.textContent = enterprisePriceText;

      // Update the dropdown options
      dropdown.innerHTML = ""; // Clear existing options
      maUs.forEach((value, index) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = `${value.toLocaleString()} MAUs`;
          dropdown.appendChild(option);
      });
  }

  // Toggle Click Event
  toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      updateDropdown();
  });

  // Initialize Dropdown on Load
  updateDropdown();
});
