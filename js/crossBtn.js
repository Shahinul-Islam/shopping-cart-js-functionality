
// add functionality to the cross button 

document.getElementById('cart-div').addEventListener('click', function(e){
    if(e.target.classList=='remove-item'){
        e.target.parentNode.parentNode.parentNode.style.display='none'
         //get targeted items price
        const getPrice = (parseFloat(e.target.parentNode.children[1].innerText.split('$')[1]));
        const subTotalTextField = document.getElementById('subtotal-field');
        const subTotalTextFieldString = subTotalTextField.innerText;
        const subTotalArray = (subTotalTextFieldString.split(','))
        const subTotalString = subTotalArray.join('')
        const subTotalValue = parseFloat(subTotalString)

        const updatedSubTotal = subTotalValue - getPrice;
        subTotalTextField.innerText = (updatedSubTotal);
        //tax field setup
        const taxField =document.getElementById('tax-field');
        const taxCount = Math.ceil(updatedSubTotal * .1);
        taxField.innerText= taxCount;
        //grand total setup
        document.getElementById('total-field').innerText=(updatedSubTotal + taxCount)

    }
   
})