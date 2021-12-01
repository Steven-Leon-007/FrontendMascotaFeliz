
var form = document.getElementById("my-form");

        async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                status.innerHTML = "¡Gracias por tu envio!";
                form.reset()
            }).catch(error => {
                status.innerHTML = "Chale! Hubo un error al enviar el formulario"
            });
        }
        form.addEventListener("submit", handleSubmit)

