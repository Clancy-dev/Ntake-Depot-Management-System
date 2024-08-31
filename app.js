function calculateDifference() {
    // Select all input elements and result elements
    const input1Elements = document.querySelectorAll('#input1');
    const input2Elements = document.querySelectorAll('#input2');
    const resultElements = document.querySelectorAll('#result');
    const priceElements = document.querySelectorAll('#price');
    const profitElements = document.querySelectorAll('#profit');
    var totalAmountFigure = document.querySelector(".total-amount-figure");
     // Get all the divs with the class 'number'
     const ProfitDivs = document.querySelectorAll('#profit');
     let sumTwo = 0;
 

    
    
 

   
   

   
    
    
    

    // Constants
    const sellingPricePerUnit = 5000; // Selling price per unit
    const buyingPricePerUnit = 4600;  // Buying price per unit
    const profitPerUnit = sellingPricePerUnit - buyingPricePerUnit; // Profit per unit

    // Iterate through each set of inputs
    input1Elements.forEach((input1, index) => {
        const input2 = input2Elements[index];
        const result = resultElements[index];
        const price = priceElements[index];
        const profit = profitElements[index];

        // Get values
        const value1 = parseFloat(input1.value) || 0;
        const value2 = parseFloat(input2.value) || 0;

        // Calculate difference
        const difference = value1 - value2;

        // Calculate total selling price and profit
        const totalPrice = difference * sellingPricePerUnit;
        const totalProfit = difference * profitPerUnit;

        // Update the results
        result.textContent = difference >= 0 ? difference : 0;
        price.textContent = totalPrice >= 0 ? totalPrice : 0;
        profit.textContent = totalProfit >= 0 ? totalProfit : 0;

        // Check if the difference is negative
        if (difference < 0) {
            alert("Quantity at the end of the day cannot be greater than Quantity at the beginning of the day. Unless if you Restocked. Declare it accordingly");
            input2.value = ''; // Clear Input 2
            result.textContent = 0;
            price.textContent = 0;
            profit.textContent = 0;
        }
          


      
   
  
    });

    /**
     * Total Amount
     */
    // Get all the divs with the class 'number'
    const numberDivs = document.querySelectorAll('#price');
    let sum = 0;

    // Loop through the divs and add the numbers
    numberDivs.forEach(div => {
        sum += parseFloat(div.textContent);
    });

    // Display the sum in the div with id 'sum'
    document.getElementById('sum').textContent = `Total Sales: ${sum}`;

    /**
     * Total Profit
     */
   

    // Loop through the divs and add the numbers
    ProfitDivs.forEach(div1 => {
        sumTwo += parseFloat(div1.textContent);
    });

    // Display the sum in the div with id 'sum'
    document.getElementById('sumTwo').textContent = `Total Profit: ${sumTwo}`;
}

