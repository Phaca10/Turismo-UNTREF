export class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña; 
    }
}

export class RegistroUsuarios {
    constructor() {
        this.usuarios = [];
        this.usuarioLogueado = null; // Para gestionar el usuario logueado
        this.recuperarUsuarios(); // Recuperar usuarios al inicializar
        this.recuperarUsuarioLogueado(); // Recuperar usuario logueado si está guardado
    }

    registrarUsuario(nombre, email, contraseña) {
        if (this.existeUsuario(email)) {
            throw new Error('El email ya está registrado.');
        }

        if (!nombre || !email || !contraseña) {
            throw new Error('Todos los campos son obligatorios.');
        }

       
        const nuevoUsuario = new Usuario(nombre, email, contraseña); 
        this.usuarios.push(nuevoUsuario);
        this.guardarUsuarios();
        return true;
    }

    existeUsuario(email) {
        return this.usuarios.some(usuario => usuario.email === email);
    }

    guardarUsuarios() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }

    recuperarUsuarios() {
        const usuariosGuardados = localStorage.getItem('usuarios');
        if (usuariosGuardados) {
            try {
                this.usuarios = JSON.parse(usuariosGuardados);
            } catch (error) {
                console.error('Error al recuperar los usuarios:', error);
                this.usuarios = []; 
            }
        }
    }

    recuperarUsuario(email) {
        return this.usuarios.find(usuario => usuario.email === email) || null;
    }

    iniciarSesion(email, contraseña) {
        const usuario = this.recuperarUsuario(email);
        if (usuario && usuario.contraseña === contraseña) {
            this.usuarioLogueado = usuario;
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            this.mostrarMensajeBienvenida(usuario); 
            return true;
        }
        throw new Error('Los datos ingresados son incorrectos.');
    }

    mostrarMensajeBienvenida(usuario) {
        alert(`Bienvenid@, ${usuario.nombre}!`); // muestra mensaje de bienvenida
    }

    cerrarSesion() {
        this.usuarioLogueado = null;
        localStorage.removeItem('usuarioLogueado');
    }

    sesionIniciada() {
        return localStorage.getItem('usuarioLogueado') !== null;
    }

    recuperarUsuarioLogueado() {
        const usuarioLogueado = localStorage.getItem('usuarioLogueado');
        if (usuarioLogueado) {
            try {
                this.usuarioLogueado = JSON.parse(usuarioLogueado);
            } catch (error) {
                console.error('Error al recuperar el usuario logueado:', error);
                this.usuarioLogueado = null;
            }
        }
    }
}














  