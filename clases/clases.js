class Hotel {

    constructor(id_hotel, nombre_hotel, direccion, telefono_hotel) {
        this.id_hotel = id_hotel;
        this.nombre_hotel = nombre_hotel;
        this.direccion = direccion;
        this.telefono_hotel = telefono_hotel;
        this.habitaciones = [];
        this.reservas = [];
    }

    get Id_hotel() {
        return this.id_hotel;
    }

    get Nombre_hotel() {
        return this.nombre_hotel;
    }

    get Direccion() {
        return this.direccion;
    }

    get Telefono() {
        return this.telefono_hotel;
    }

    get Habitaciones() {
        return this.habitaciones;
    }

    get Reservas() {
        return this.reservas;
    }

    set Nombre(nuevoNombre_hotel) {
        if (!nuevoNombre_hotel || nuevoNombre_hotel.trim() === '') {
            throw new Error('Error: El nombre del hotel no puede estar vacío');
        }

        if (nuevoNombre_hotel.length < 2) {
            throw new Error('Error: El nombre del hotel debe tener al menos 2 caracteres');
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\-\.]+$/.test(nuevoNombre)) {
            throw new Error('Error: El nombre del hotel contiene caracteres inválidos');
        }

        const nombreAnterior = this.nombre_hotel;
        this.nombre_hotel = nuevoNombre_hotel.trim();
        console.log(`✅ Éxito: Nombre cambiado de "${nombreAnterior}" a "${this.nombre}"`);
    }

    set Direccion(nuevaDireccion) {
        if (!nuevaDireccion || nuevaDireccion.trim() === '') {
            throw new Error('Error: La dirección no puede estar vacía');
        }

        if (nuevaDireccion.length < 10) {
            throw new Error('Error: La dirección debe tener al menos 10 caracteres');
        }

        const direccionAnterior = this.direccion;
        this.direccion = nuevaDireccion.trim();
        console.log(`Éxito: Dirección cambiada de "${direccionAnterior}" a "${this.direccion}"`);
    }

    set Telefono(nuevoTelefono_hotel) {
        if (!nuevoTelefono_hotel) {
            throw new Error('Error: El teléfono no puede estar vacío');
        }

        // Convertir a string y limpiar espacios
        const telefonoStr = nuevoTelefono_hotel.toString().trim();

        // Validar formato de teléfono (permite números, espacios, paréntesis, guiones)
        if (!/^[\d\s\(\)\-\+]+$/.test(telefonoStr)) {
            throw new Error('Error: El teléfono contiene caracteres inválidos');
        }

        // Contar solo los dígitos numéricos
        const digitos = telefonoStr.replace(/\D/g, '');

        if (digitos.length < 7) {
            throw new Error('Error: El teléfono debe tener al menos 7 dígitos');
        }

        if (digitos.length > 15) {
            throw new Error('Error: El teléfono no puede tener más de 15 dígitos');
        }

        const telefonoAnterior = this.telefono_hotel;
        this.telefono_hotel = telefonoStr;
        console.log(`Éxito: Teléfono cambiado de "${telefonoAnterior}" a "${this.telefono_hotel}"`);
    }

    /* Método crear nuevo hotel */


}

class Habitacion {

    constructor(numero, tipo, precio_noche, estado, capacidad, disponibilidad) {
        this.numero = numero;
        this.tipo = tipo;
        this.precio_noche = precio_noche;
        this.estado = estado;
        this.capacidad = capacidad;
        this.disponibilidad = disponibilidad;
        this.servicios = [];
    }

    /* get Id_habitacion(){
        return this.id_habitacion; //No creo que sea necesaria el ID de la habitacion porque tiene numero.
    } */

    get Numero() {
        return this.numero;
    }

    get Tipo() {
        return this.tipo;
    }

    get Precio_noche() {
        return this.precio_noche;
    }

    get Estado() {
        return this.estado;
    }

    get Capacidad() {
        return this.capacidad;
    }

    get Disponibilidad() {
        return this.disponibilidad;
    }

    get Servicios() {
        return this.servicios;
    }

    set Numero(nuevoNumero) {
        this.numero = nuevoNumero;
    }

    set Tipo(nuevoTipo) {
        this.tipo = nuevoTipo;
    }

    set Precio_noche(nuevoPrecio_noche) {
        this.precio_noche = nuevoPrecio_noche;
    }

    set Estado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    set Capacidad(nuevaCapacidad) {
        this.capacidad = nuevaCapacidad;
    }

    set Disponibilidad(nuevaDisponibilidad) {
        this.disponibilidad = nuevaDisponibilidad;
    }
}

class Reserva {
    constructor(id_reserva, numero_habitacion, fecha_checkin, fecha_checkout, estado) {
        this.id_reserva = id_reserva;
        this.cliente = [];
        this.numero_habitacion = numero_habitacion;
        this.fecha_checkin = fecha_checkin;
        this.fecha_checkout = fecha_checkout;
        this.estado = estado;
    }

    get Id_reserva() {
        return this.id_reserva;
    }

    get Numero_habitacion() {
        return this.numero_habitacion;
    }

    get Fecha_checkin() {
        return this.fecha_checkin;
    }

    get Fecha_checkout() {
        return this.fecha_checkout;
    }

    get Estado() {
        return this.estado;
    }

    set Numero(nuevoNumero_habitacion) {
        if (!nuevoNumero_habitacion && nuevoNumero_habitacion !== 0) {
            throw new Error('Error: El número de habitación no puede estar vacío');
        }

        const numeroStr = nuevoNumero_habitacion.toString().trim();

        if (!/^\d+$/.test(numeroStr)) {
            throw new Error('Error: El número de habitación debe contener solo dígitos');
        }

        if (parseInt(numeroStr) <= 0) {
            throw new Error('Error: El número de habitación debe ser mayor a 0');
        }

        if (numeroStr.length > 10) {
            throw new Error('Error: El número de habitación no puede tener más de 10 dígitos');
        }

        const numeroAnterior = this.numero_habitacion;
        this.numero_habtacion = parseInt(numeroStr);
        console.log(`✅ Éxito: Número cambiado de "${numeroAnterior}" a "${this.numero_habitacion}"`);
    }

    set Nueva_fecha_checking(fecha_checkin){
        if()
    }

        const estadosValidos = ['disponible', 'ocupada', 'mantenimiento', 'limpieza', 'reservada'];
        const estadoLower = nuevoEstado.toLowerCase().trim();

        if (!estadosValidos.includes(estadoLower)) {
            throw new Error(`Error: Estado inválido. Los estados válidos son: ${estadosValidos.join(', ')}`);
        }

        const estadoAnterior = this.estado;
        this.estado = estadoLower;
        console.log(`Éxito: Estado cambiado de "${estadoAnterior}" a "${this.estado}"`);
    }

    set Capacidad(nuevaCapacidad) {
        if (!nuevaCapacidad && nuevaCapacidad !== 0) {
            throw new Error('Error: La capacidad no puede estar vacía');
        }

        const capacidad = parseInt(nuevaCapacidad);

        if (isNaN(capacidad)) {
            throw new Error('Error: La capacidad debe ser un número entero válido');
        }

        if (capacidad <= 0) {
            throw new Error('Error: La capacidad debe ser mayor a 0');
        }

        if (capacidad > 10) {
            throw new Error('Error: La capacidad no puede exceder 10 personas');
        }

        const capacidadAnterior = this.capacidad;
        this.capacidad = capacidad;
        console.log(`Éxito: Capacidad cambiada de ${capacidadAnterior} a ${this.capacidad} personas`);
    }

    set Disponibilidad(nuevaDisponibilidad) {
        if (typeof nuevaDisponibilidad !== 'boolean') {
            throw new Error('Error: La disponibilidad debe ser un valor booleano (true/false)');
        }

        const disponibilidadAnterior = this.disponibilidad;
        this.disponibilidad = nuevaDisponibilidad;

        const mensajeAnterior = disponibilidadAnterior ? 'disponible' : 'no disponible';
        const mensajeNuevo = this.disponibilidad ? 'disponible' : 'no disponible';

        console.log(`Éxito: Disponibilidad cambiada de "${mensajeAnterior}" a "${mensajeNuevo}"`);
    }

    /* Métodos para agregar y eliminar clientes de la reserva */
    /* Metodo calcular total de la reserva */
    /* Método cancelar reserva */
}

class Cliente {
    constructor(dni, nombre, apellido, email, telefono) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.reservas = [];
    }

    get Dni() {
        return this.dni;
    }

    get Nombre() {
        return this.nombre;
    }

    get Apellido() {
        return this.apellido;
    }

    get Email() {
        return this.email;
    }

    get Telefono() {
        return this.telefono;
    }

    get Reservas() {
        return this.reservas;
    }

    set Nombre(nuevoNombre) {
        if (!nuevoNombre || nuevoNombre.trim() === '') {
            throw new Error('Error: El nombre del hotel no puede estar vacío');
        }

        if (nuevoNombre.length < 2) {
            throw new Error('Error: El nombre del hotel debe tener al menos 2 caracteres');
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\-\.]+$/.test(nuevoNombre)) {
            throw new Error('Error: El nombre del hotel contiene caracteres inválidos');
        }

        const nombreAnterior = this.nombre;
        this.nombre = nuevoNombre.trim();
        console.log(`✅ Éxito: Nombre cambiado de "${nombreAnterior}" a "${this.nombre}"`);
    }

    /* set Apellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }

    set Email(nuevoEmail) {
        this.email = nuevoEmail;
    }

    set Telefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    } */

    /* Métodos para agregar, editar y eliminar clientes */

}

class Servicio {
    constructor(id_Servicio, nombre_servicio, descripcion, costo) {
        this.id_Servicio = id_Servicio;
        this.nombre_servicio = nombre_servicio;
        this.descripcion = descripcion;
        this.costo = costo;
    }

    get Id_Servicio() {
        return this.id_Servicio;
    }

    get Nombre_servicio() {
        return this.nombre_servicio;
    }

    get Descripcion() {
        return this.descripcion;
    }

    get Costo() {
        return this.costo;
    }

    set id_Servicio(nuevoId_Servicio) {
        this.id_Servicio = nuevoId_Servicio;
    }

    set Nombre_servicio(nuevoNombre_servicio) {
        this.nombre_servicio = nuevoNombre_servicio;
    }

    set Descripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }

    set Costo(nuevoCosto) {
        this.costo = nuevoCosto;
    }
}

class Pago {
    constructor(id_Pago, monto, metodo_pago, estado_pago, fecha_pago) {
        this.id_Pago = id_Pago;
        this.monto = monto;
        this.metodo_pago = metodo_pago;
        this.estado_pago = estado_pago;
        this.fecha_pago = fecha_pago;
    }

    get Id_Pago() {
        return this.id_Pago;
    }

    get Monto() {
        return this.monto;
    }

    get Metodo_pago() {
        return this.metodo_pago;
    }

    get Estado_pago() {
        return this.estado_pago;
    }

    get Fecha_pago() {
        return this.fecha_pago;
    }

    set Id_Pago(nuevoId_pago) {
        this.id_Pago = nuevoId_pago;
    }

    set Monto(nuevoMonto) {
        this.monto = nuevoMonto;
    }

    set Metodo_pago(nuevoMetodo_pago) {
        this.metodo_pago = nuevoMetodo_pago;
    }

    set Estado_pago(nuevoEstado_pago) {
        this.estado_pago = nuevoEstado_pago;
    }

    set Fecha_pago(nuevaFecha_pago) {
        this.fecha_pago = nuevaFecha_pago;
    }

}
