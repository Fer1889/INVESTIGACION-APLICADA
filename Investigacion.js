// Expresiones regulares
const regexNombre = /^[a-zA-Z\s]+$/;
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
const regexTelefono = /^\d{8}$/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const form = document.getElementById('nuevoIngresoForm');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const password = document.getElementById('password');

const nombreMensaje = document.getElementById('nombreMensaje');
const correoMensaje = document.getElementById('correoMensaje');
const telefonoMensaje = document.getElementById('telefonoMensaje');
const passwordMensaje = document.getElementById('passwordMensaje');
const exitoMensaje = document.getElementById('exitoMensaje');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	let valido = true;
	// Validar nombre
	if (!regexNombre.test(nombre.value.trim())) {
		nombreMensaje.textContent = 'El nombre solo debe contener letras y espacios.';
		valido = false;
	} else {
		nombreMensaje.textContent = '';
	}
	// Validar correo
	if (!regexCorreo.test(correo.value.trim())) {
		correoMensaje.textContent = 'Ingrese un correo electrónico válido.';
		valido = false;
	} else {
		correoMensaje.textContent = '';
	}
	// Validar teléfono
	if (!regexTelefono.test(telefono.value.trim())) {
		telefonoMensaje.textContent = 'El teléfono debe tener exactamente 8 dígitos.';
		valido = false;
	} else {
		telefonoMensaje.textContent = '';
	}
	// Validar contraseña
	if (!regexPassword.test(password.value)) {
		passwordMensaje.textContent = 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.';
		valido = false;
	} else {
		passwordMensaje.textContent = '';
	}
	// Mensaje de éxito y mostrar ventana con datos
	if (valido) {
		exitoMensaje.textContent = 'Formulario enviado con éxito.';

		// Crear ventana modal con los datos
		const modal = document.createElement('div');
		modal.style.position = 'fixed';
		modal.style.top = '0';
		modal.style.left = '0';
		modal.style.width = '100vw';
		modal.style.height = '100vh';
		modal.style.background = 'rgba(0,0,0,0.35)';
		modal.style.display = 'flex';
		modal.style.alignItems = 'center';
		modal.style.justifyContent = 'center';
		modal.style.zIndex = '9999';

		const modalContent = document.createElement('div');
		modalContent.style.background = '#fff';
		modalContent.style.borderRadius = '10px';
		modalContent.style.padding = '32px 24px';
		modalContent.style.boxShadow = '0 4px 16px rgba(25,118,210,0.18)';
		modalContent.style.minWidth = '320px';
		modalContent.style.maxWidth = '90vw';
		modalContent.style.color = '#1976d2';
		modalContent.innerHTML = `
			<h3 style="margin-top:0;color:#1976d2;">Datos ingresados</h3>
			<p><strong>Nombre:</strong> ${nombre.value}</p>
			<p><strong>Correo electrónico:</strong> ${correo.value}</p>
			<p><strong>Teléfono:</strong> ${telefono.value}</p>
			<p><strong>Contraseña:</strong> ${password.value}</p>
			<button id="cerrarModalBtn" style="margin-top:18px;padding:8px 18px;background:#1976d2;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:1rem;transition:background 0.2s;">Cerrar</button>
		`;
		modal.appendChild(modalContent);
		document.body.appendChild(modal);

		document.getElementById('cerrarModalBtn').onclick = function() {
			document.body.removeChild(modal);
		};

		form.reset();
		// Opcional: limpiar logo a default si se desea
	} else {
		exitoMensaje.textContent = '';
	}
});

// Logo institucional: permite cambiar imagen
const logoInput = document.getElementById('logoInput');
const logoImg = document.getElementById('logo');
logoImg.addEventListener('click', () => {
	logoInput.click();
});
logoInput.addEventListener('change', function() {
	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			logoImg.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
});
