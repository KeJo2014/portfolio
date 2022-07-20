var contactForm = {
    $form: null,
    init: function () {

        this.$form = jQuery('#contact');

        jQuery('body').on('click', '#submit-form', contactForm.initForm);

        jQuery('body').on('keyup', '#contact input, #contact textarea', contactForm.validate);

    },
    initForm: function () {


        contactForm.validate();


        if (contactForm.$form.find('.required').size() > 0) {

            alertify.error(msg1);

        } else {


            jQuery('#submit-form').addClass('disabled');
            alertify.message(msg2);

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://lujoso.ddns.net/services/5646364hfr78fh38h8fh86736/mailer/?auth=GJKISU8676ztzUBIZGTIGG899IOUOT&" + contactForm.$form.serialize());

            xhr.addEventListener('load', function () {
                alert(xhr.responseText);
                if (xhr.responseText == "int(1)") {
                    jQuery('#submit-form').removeClass('disabled');
                    alertify.success(msg3);
                }
            });

            xhr.onerror = function (e) {
                alertify.error(msg4);
            };

            //xhr.send(JSON.stringify({}));


            console.log(path + "?auth=GJKISU8676ztzUBIZGTIGG899IOUOT&" + contactForm.$form.serialize())



            //contactForm.$form.find('.required').removeClass('required');
            //contactForm.$form.find('input[type="text"], input[type="email"], textarea').val('');


            
            

        }

        return false;

    },
    validate: function () {

        if (contactForm.$form.find('input[type=email]').val() == '' || !contactForm.validateEmail(contactForm.$form.find('input[type=email]').val())) {

            contactForm.$form.find('input[type=email]').parent().addClass('required');

        } else {

            contactForm.$form.find('input[type=email]').parent().removeClass('required');
        }

        if (contactForm.$form.find('textarea').val() == '') {

            contactForm.$form.find('textarea').parent().addClass('required');

        } else {
            contactForm.$form.find('textarea').parent().removeClass('required');

        }

    },
    validateEmail: function (email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    },
    destroy: function () {
        jQuery('body').off('click', '#submit-form', contactForm.initForm);
        jQuery('body').off('keyup', '#contact input, #contact textarea', contactForm.validate);

    }



}


module.exports = contactForm;