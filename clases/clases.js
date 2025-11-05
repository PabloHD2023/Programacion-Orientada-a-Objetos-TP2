class Hotel{
    
    constructor( id_hotel, nombre, direccion, telefono){
        this.id_hotel = id_hotel;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.habitaciones = [];
        this.reservas = [];
    }
    
    get Id_hotel(){
        return this.id_hotel;
    }

    get Nombre(){
        return this.nombre;
    }

    get Direccion(){
        return this.direccion;
    }

    get Telefono(){
        return this.telefono;
    }

    get Habitaciones(){
        return this.habitaciones;
    }

    get Reservas(){
        return this.reservas;
    }

    set Nombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set Direccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

    set Telefono(nuevoTelefono){
        this.telefono = nuevoTelefono;
    }

    /* Método crear nuevo hotel */


}

class Habitacion{

    constructor( id_habitacion, numero, tipo, precio_noche, estado, capacidad, disponibilidad){
        this.id_habitacion = id_habitacion;
        this.numero = numero;
        this.tipo = tipo;
        this.precio_noche = precio_noche;
        this.estado = estado;
        this.capacidad = capacidad;
        this.disponibilidad = disponibilidad;
        this.servicios = [];  
    }

    get Id_habitacion(){
        return this.id_habitacion;
    }

    get Numero(){
        return this.numero;
    }

    get Tipo(){
        return this.tipo;
    }

    get Precio_noche(){
        return this.precio_noche;
    }

    get Estado(){
        return this.estado;
    }

    get Capacidad(){
        return this.capacidad;
    }

    get Disponibilidad(){
        return this.disponibilidad;
    }

    get Servicios(){
        return this.servicios;
    }

    set Numero(nuevoNumero){
        this.numero = nuevoNumero;
    }

    set Tipo(nuevoTipo){
        this.tipo = nuevoTipo;
    }   

    set Precio_noche(nuevoPrecio_noche){
        this.precio_noche = nuevoPrecio_noche;
    }

    set Estado(nuevoEstado){
        this.estado = nuevoEstado;
    }

    set Capacidad(nuevaCapacidad){
        this.capacidad = nuevaCapacidad;
    }

    set Disponibilidad(nuevaDisponibilidad){
        this.disponibilidad = nuevaDisponibilidad;
    }
}

class Reserva{
    constructor( id_reserva, habitacion, fecha_checkin, fecha_checkout, estado){
        this.id_reserva = id_reserva;
        this.cliente = [];
        this.habitacion = habitacion;
        this.fecha_checkin = fecha_checkin;
        this.fecha_checkout = fecha_checkout;
        this.estado = estado;
    }

    get Id_reserva(){
        return this.id_reserva;
    }

    get Cliente(){
        return this.cliente;
    }

    get Habitacion(){
        return this.habitacion;
    }

    get Fecha_checkin(){
        return this.fecha_checkin;
    }

    get Fecha_checkout(){
        return this.fecha_checkout;
    }

    get Estado(){
        return this.estado;
    }

    set Habitacion(nuevaHabitacion){
        this.habitacion = nuevaHabitacion;
    }

    set Fecha_checkin(nuevaFecha_checkin){
        this.fecha_checkin = nuevaFecha_checkin;
    }

    set Fecha_checkout(nuevaFecha_checkout){
        this.fecha_checkout = nuevaFecha_checkout;
    }

    set Estado(nuevoEstado){
        this.estado = nuevoEstado;
    }

    /* Métodos para agregar y eliminar clientes de la reserva */
    /* Metodo calcular total de la reserva */
    /* Método cancelar reserva */
}

class Cliente{
    constructor( dni, nombre, apellido, email, telefono){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.reservas = [];
    }

    get Dni(){
        return this.dni;
    }

    get Nombre(){
        return this.nombre;
    }

    get Apellido(){
        return this.apellido;
    }

    get Email(){
        return this.email;
    }

    get Telefono(){
        return this.telefono;
    }

    get Reservas(){
        return this.reservas;
    }

    set Nombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set Apellido(nuevoApellido){
        this.apellido = nuevoApellido;
    }

    set Email(nuevoEmail){
        this.email = nuevoEmail;
    }

    set Telefono(nuevoTelefono){
        this.telefono = nuevoTelefono;
    }   
    
    /* Métodos para agregar, editar y eliminar clientes */

}

class Servicio{
    constructor(id_Servicio, nombre_servicio, descripcion, costo){
        this.id_Servicio = id_Servicio;
        this.nombre_servicio = nombre_servicio;
        this.descripcion = descripcion;
        this.costo = costo;
    }

    get Id_Servicio(){
        return this.id_Servicio;
    }

    get Nombre_servicio(){
        return this.nombre_servicio;
    }

    get Descripcion(){
        return this.descripcion;
    }

    get Costo(){
        return this.costo;
    }

    set id_Servicio(nuevoId_Servicio){
        this.id_Servicio = nuevoId_Servicio;
    }

    set Nombre_servicio(nuevoNombre_servicio){
        this.nombre_servicio = nuevoNombre_servicio;
    }

    set Descripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }

    set Costo(nuevoCosto){
        this.costo = nuevoCosto;
    }
}

class Pago{
    constructor(id_Pago, monto, metodo_pago, estado_pago, fecha_pago){
        this.id_Pago = id_Pago;
        this.monto = monto;
        this.metodo_pago = metodo_pago;
        this.estado_pago = estado_pago;
        this.fecha_pago = fecha_pago;
    }

    get Id_Pago(){
        return this.id_Pago; 
    }

    get Monto(){
        return this.monto;
    }

    get Metodo_pago(){
        return this.metodo_pago;
    }

    get Estado_pago(){
        return this.estado_pago;
    }

    get Fecha_pago(){
        return this.fecha_pago;
    }

    set Id_Pago(nuevoId_pago){
        this.id_Pago = nuevoId_pago;
    }

    set Monto(nuevoMonto){
        this.monto = nuevoMonto;
    }

    set Metodo_pago(nuevoMetodo_pago){
        this.metodo_pago = nuevoMetodo_pago;
    }

    set Estado_pago(nuevoEstado_pago){
        this.estado_pago = nuevoEstado_pago;
    }

    set Fecha_pago(nuevaFecha_pago){
        this.fecha_pago = nuevaFecha_pago;
    }

}
