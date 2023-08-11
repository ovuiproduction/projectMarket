// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


const paymentype = document.getElementById("btnpaymentmethod");

paymentype.addEventListener("click" , myFunction);

function myFunction() {
    var x = document.getElementById("Paymenttype").selectedIndex;
    var y = document.getElementById("Paymenttype").options;
    if( y[x].text === "Pay Right Now"){
      document.getElementById("Paymentmethodbox").style.display = "block";
    }
}
