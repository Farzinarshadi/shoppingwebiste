document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('signin-form');
    var input = document.querySelector('input[name="Mobile"]'); // اطمینان از انتخاب درست فیلد ورودی
    var error = document.getElementById('error');
    var submitButton = document.getElementById('submit-button');

    function validateInput() {
        var value = input.value.trim();
        var errorMessage = "";

        if (value === "") {
            errorMessage = "لطفا این قسمت را خالی نگذارید";
        } else if (isNaN(value[0])) {
            if (!value.includes('@')) {
                errorMessage = "اگر ورودی با حرف شروع شده باید شامل @ باشد";
            }
        } else {
            if (value.length !== 11) {
                errorMessage = "شماره موبایل باید 11 کاراکتر باشد";
            }
        }

        error.innerHTML = errorMessage;

        // فعال یا غیرفعال کردن دکمه‌ی ارسال بر اساس وجود خطا
        if (errorMessage === "") {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }

        return errorMessage === "";
    }

    input.addEventListener('input', validateInput);

    form.addEventListener('submit', function(event) {
        if (!validateInput()) {
            event.preventDefault();
        }
    });

    // بررسی اولیه هنگام بارگذاری صفحه
    validateInput();
});
