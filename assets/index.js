document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.wp-block-code').forEach(function (codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerText = 'Copy Code';
        codeBlock.appendChild(button);

        const successMessage = document.createElement('div');
        successMessage.className = 'copy-code-success';
        successMessage.innerText = 'Code copied!';
        codeBlock.appendChild(successMessage);

        button.addEventListener('click', function () {
            const code = codeBlock.querySelector('pre').innerText;
            navigator.clipboard.writeText(code).then(function () {
                successMessage.style.display = 'block';
                setTimeout(function () {
                    successMessage.style.display = 'none';
                }, 2000);
            });
        });
    });
});
