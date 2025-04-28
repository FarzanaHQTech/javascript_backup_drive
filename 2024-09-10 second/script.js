class FormValidation{
    submit() {
        let name = (document.querySelector('#name').value).trim()
        let email = (document.querySelector('#email').value).trim()
        let phone = (document.querySelector('#phone').value).trim()
        let roll = (document.querySelector('#roll').value).trim()
        if (name == '' || email == '' || phone == '' || roll == '') {
            if (name == '') {
                document.querySelector('#name').style.border = '1px solid red'
            } else {
                document.querySelector('#name').style.border = '1px solid gray'
            }
            if (email == '') {
                document.querySelector('#email').style.border = '1px solid red'
            } else {
                let pattern = /[\w]+@[\w]+\.[\w]/
                if (pattern.test(email)) {
                    document.querySelector('#email').style.border = '1px solid gray'
                } else {
                    document.querySelector('#email').style.border = '1px solid red'
                }
            }
            if (phone == '') {
                document.querySelector('#phone').style.border = '1px solid red'
            } else {
                let first = phone.substring(0, 2)
                if (first == '01' && phone.length == 11) {
                    document.querySelector('#phone').style.border = '1px solid gray'
                } else {
                    document.querySelector('#phone').style.border = '1px solid red'
                }
            }
            if (roll == '') {
                document.querySelector('#roll').style.border = '1px solid red'
            } else {
                document.querySelector('#roll').style.border = '1px solid gray'
            }
        } else {
            let status=true
            document.querySelector('#name').style.border = '1px solid gray'
            let pattern = /[\w]+@[\w]+\.[\w]/
            if (pattern.test(email)) {
                document.querySelector('#email').style.border = '1px solid gray'
            } else {
                document.querySelector('#email').style.border = '1px solid red'
                status=false
            }
            let first = phone.substring(0, 2)
            if (first == '01' && phone.length == 11) {
                document.querySelector('#phone').style.border = '1px solid gray'
            } else {
                document.querySelector('#phone').style.border = '1px solid red'
                status=false
            }
            if (isNaN(roll)) {
                document.querySelector('#roll').style.border = '1px solid red'
                status=false
            } else {
                document.querySelector('#roll').style.border = '1px solid gray'
            }
            if(status==true){
                console.log('Congratulations')
            }else{
                console.log('Something went wrong')
            }
        }
    }
}

let object=new FormValidation()  // creating object

