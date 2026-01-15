  
        // Establecer fecha mínima como hoy
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('fecha').setAttribute('min', today);

        // Manejar el envío del formulario
        document.getElementById('reservationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar formulario
            if (!this.checkValidity()) {
                return;
            }

            // Recoger datos del formulario
            const formData = {
                nombre: document.getElementById('nombre').value,
                apellidos: document.getElementById('apellidos').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                fecha: document.getElementById('fecha').value,
                hora: document.getElementById('hora').value,
                personas: document.getElementById('personas').value,
                comentarios: document.getElementById('comentarios').value
            };

            // Mostrar mensaje de éxito
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            
            // Scroll al mensaje
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Aquí puedes agregar código para enviar los datos a un servidor
            console.log('Datos de reserva:', formData);
            
            // Opcional: Enviar por email o a tu backend
            // fetch('tu-endpoint-de-reservas', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            // Limpiar formulario después de 2 segundos
            setTimeout(() => {
                this.reset();
                successMessage.classList.remove('show');
            }, 3000);
        });

        function resetForm() {
            document.getElementById('reservationForm').reset();
            document.getElementById('successMessage').classList.remove('show');
        }

        // Animaciones de entrada para los campos del formulario
        const formGroups = document.querySelectorAll('.form-group');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50);
                }
            });
        }, { threshold: 0.1 });

        formGroups.forEach(group => {
            group.style.opacity = '0';
            group.style.transform = 'translateY(20px)';
            group.style.transition = 'all 0.5s ease-out';
            observer.observe(group);
        });
    