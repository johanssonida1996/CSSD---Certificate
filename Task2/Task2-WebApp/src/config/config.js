window.validate = () => {
   const emailInputs = document.querySelectorAll('input[type=email]');

   let valid = true;

   emailInputs.forEach((emailInput) => {
      if (!emailInput.validity.valid) {
         valid = false;
         window.sv.addErrorMessage(emailInput, {
            message: emailInput.validationMessage,
            isValid: function (e) {
               return e.target.validity.valid;
            },
         });
      }
   });


   // Add call to sv.validate() for both custom
   // and default validation.
   return valid && window.sv.validate();
};

const validateEmail = (email) => {
   const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   window.sv.addErrorMessage(email, {
      message: email.validationMessage,
      isValid: function (e) {
         return e.target.validity.valid;
      },
   });

   return re.test(email);
   
}