(function () {
    const input = document.getElementById('celular');

    input.addEventListener('input', function () {
        let v = input.value.replace(/\D/g, '').slice(0, 11); // só números
        let out = '';

        if (v.length > 0) {
        out = '(' + v.substring(0, Math.min(2, v.length));
        }
        if (v.length >= 3) {
        out += ') ' + v.substring(2, 3);
        } else if (v.length > 2) {
        out += ')';
        }
        if (v.length >= 4) {
        out += ' ' + v.substring(3, Math.min(7, v.length));
        }
        if (v.length >= 8) {
        out += '-' + v.substring(7, 11);
        }

        input.value = out;
    });

    input.addEventListener('keypress', function (e) {
        if (!/[0-9]/.test(e.key)) e.preventDefault();
    });

    input.addEventListener('paste', function (e) {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData('text');
        document.execCommand('insertText', false, text.replace(/\D/g, ''));
    });
})();