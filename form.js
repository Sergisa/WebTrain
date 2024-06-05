(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const inputs = document.querySelectorAll('.needs-validation input,.needs-validation select')

    function checkValidity(form) {
        return form.checkValidity();
    }
    function checkFormElementValidity(input){
        return input.checkValidity();
    }

    Array.from(inputs).forEach(input => {
        input.addEventListener('input', event => {
            if(checkFormElementValidity(input)){
                input.classList.remove('is-invalid')
                input.classList.add('is-valid')
            }else{
                input.classList.remove('is-valid')
                input.classList.add('is-invalid')
            }
            console.log("changed")
        })
    })
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!checkValidity(form)) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()