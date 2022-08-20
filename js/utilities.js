
// plus button functionality added 

function plusBtnSetup(plusBtnId, inputFieldId, basePrice, textField){
    document.getElementById(plusBtnId).addEventListener('click', function(){
        let phoneInputValue = (parseInt(document.getElementById(inputFieldId).value))
        phoneInputValue = phoneInputValue + 1;
        document.getElementById(inputFieldId).value= phoneInputValue;
         const totalPrice = phoneInputValue * basePrice;
        document.getElementById(textField).innerText=totalPrice;

        //setting sub-total price
        const phoneTextField = document.getElementById('phone-bs-price');
        const phonerDam = (parseFloat(phoneTextField.innerText));
        const casingTextField = document.getElementById('casing-bs-price');
        const casingerDam = parseFloat(casingTextField.innerText)
        let subTotalTextField = document.getElementById('subtotal-field');
        const resultOfSubTotal = phonerDam + casingerDam;
        subTotalTextField.innerText = resultOfSubTotal;
        const taxField =document.getElementById('tax-field');
        const taxCount = Math.ceil(resultOfSubTotal * .1);
        taxField.innerText= taxCount;

        const grandTotal = taxCount + resultOfSubTotal;
        document.getElementById('total-field').innerText=grandTotal
        
    })
}

// minus button functionality added 

function minusBtnSetup(minusBtnId, inputFieldId, basePrice,textField){
    document.getElementById(minusBtnId).addEventListener('click', function(){
        let phoneInputValue = (parseInt(document.getElementById(inputFieldId).value))
        if(phoneInputValue===0){
            phoneInputValue = phoneInputValue + 0;
        document.getElementById(inputFieldId).value= phoneInputValue;
        }
        else if(phoneInputValue>0){
            phoneInputValue = phoneInputValue - 1;
        document.getElementById(inputFieldId).value= phoneInputValue;
    const totalPrice = phoneInputValue * basePrice;
    document.getElementById(textField).innerText=totalPrice;
        //setting sub-total price
        const phoneTextField = document.getElementById('phone-bs-price');
        const phonerDam = (parseFloat(phoneTextField.innerText));

        const casingTextField = document.getElementById('casing-bs-price');
        const casingerDam = parseFloat(casingTextField.innerText)

        let subTotalTextField = document.getElementById('subtotal-field');

        const resultOfSubTotal = phonerDam + casingerDam;

        subTotalTextField.innerText = resultOfSubTotal;

        
        const taxField =document.getElementById('tax-field');
        const taxCount = Math.ceil(resultOfSubTotal * .1);
        taxField.innerText= taxCount;

        const grandTotal = taxCount + resultOfSubTotal;

        document.getElementById('total-field').innerText=grandTotal


        }
    })
}
minusBtnSetup('mobile-minus-btn','phone-input-field',1219,'phone-bs-price')
plusBtnSetup('mobile-plus-btn','phone-input-field',1219,'phone-bs-price');
plusBtnSetup('casing-plus-btn','casing-input-field', 59,'casing-bs-price');
minusBtnSetup('casing-minus-btn','casing-input-field', 59,'casing-bs-price') 

