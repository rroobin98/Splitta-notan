

const form = document.getElementById("split-bill-form");
const calculateButton = document.getElementById("calculate-button");
const resultElement = document.getElementById("result");



calculateButton.addEventListener("click", function() {
  // Get the values from the form
  const sum = Number(form.sum.value);
  const friends = Number(form.friends.value);
  const tip = Number(form.tip.value);

  // Calculate the amount each friend has to pay
  const total = sum + sum * tip;
  const amountPerFriend = total / friends;

  // Display the result
  resultElement.textContent = `Each friend has to pay ${amountPerFriend.toFixed(2)}`;
});
