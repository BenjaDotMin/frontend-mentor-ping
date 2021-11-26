window.onload = () => {
    let form = document.querySelector("form");
    let pristine = new Pristine(form);

    form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = pristine.validate();
    });
};