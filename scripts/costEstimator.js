let prices = [
    {type:"queen", summer: 250 , calendar: 150},
    {type:"king", summer:250, calendar:150},
    {type:"suite", summer:250, calendar:210},
    ];

let discounts = [
    {type: "senior", percent: .10},
    {type: "military", percent: .20},
];
    "use strict";

    window.onload = handleOnload;
    
    function handleOnload() {
        const submitButtonEl = document.getElementById("submit");
    
        submitButtonEl.onclick = handleOnClick;
    }

    // function handleOnClick(){
    //     console.log("Submit button clicked!");
        
        // // data

        // const inputDateEl = document.getElementById("date");
        // const inputNightsEl = document.getElementById("nights");
        // const selectedRoomType = selectElement.value;
        // const selectedDiscountPercentage = selectElement.value;
        
        // // placeholders 

        // const originalCostEl = document.getElementById("originalCost")
        // const discountPercentEl = document.getElementById("discountPercent");
        // const discountedCostEl = document.getElementById("discountedCost");
        // const inputTaxEl = document.getElementById("tax");
        // const inputTotalEl = document.getElementById("total");

        // // selectedRoomType

        // const selectedRoom = prices.find(room => room.type === selectedRoomType);
        
        // // selectedDiscounts

        // const selectedDiscountType = document.querySelector('input[name="discountType"]:checked').value; 
        // const selectedDiscount = discounts.find(discount => discount.type === selectedDiscountType);
    
        function handleOnClick() {
            console.log("Submit button clicked!");
          
            // Data
            const inputNightsEl = document.getElementById("nights");
            const selectedRoomType = document.getElementById("roomType").value;
          
            // Placeholders
            const originalCostEl = document.getElementById("originalCost");
            const discountPercentEl = document.getElementById("discountPercent");
            const discountedCostEl = document.getElementById("discountedCost");
            const inputTaxEl = document.getElementById("tax");
            const inputTotalEl = document.getElementById("total");
          
            // Selected Room Type
            // const selectedRoom = prices.find(room => room.type === selectedRoomType);
            
            // Selected Discount
            const selectedDiscountType = document.querySelector('input[name="discountType"]:checked').value;
            const selectedDiscount = discounts.find(discount => discount.type === selectedDiscountType);
          
            // Calculate the cost based on the date
            const numberOfNights = parseInt(inputNightsEl.value);
            const currentDate = new Date();
            const isSummer = currentDate.getMonth() >= 5 && currentDate.getMonth() <= 7; 
            const roomCost = isSummer ? selectedRoom.summer : selectedRoom.calendar;
          
            const originalCost = numberOfNights * roomCost;
            const discountPercentage = selectedDiscount.percent;
            const discountAmount = originalCost * discountPercentage;
            const discountedCost = originalCost - discountAmount;
            const tax = discountedCost * 0.10;
            const total = discountedCost + tax;
          
            // Update the placeholders
            originalCostEl.value = originalCost;
            discountPercentEl.value = discountAmount;
            discountedCostEl.value = discountedCost;
            inputTaxEl.value = tax;
            inputTotalEl.value = total;
          }
