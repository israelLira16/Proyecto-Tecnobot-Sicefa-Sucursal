let empleados = [
    {
        "id": 2001,
        "clave": "20100001",
        "puesto": "Administrador",
        "fechaContratacion": "2020/10/14",
        "salario": 16000,
        "estatus": 1,
        "email": "angelica@Outlook.com",
        "persona":
                {
                    "id": 1,
                    "nombre": "Angelica",
                    "apellidoPaterno": "Rocha",
                    "apellidoMaterno": "Gonzales",
                    "genero" : "Mujer",
                    "fechaNacimiento" : "200/02/12",
                    "rfc": "GOVM860812QA2",
                    "cp": "#38156",
                    "domicilio": "CALLE AGUSTIN LARA NO. 69-B, COL. EX-NORMAL TUXTEPEC",
                    "ciudad": "Léon",
                    "estado": "Guanajuato",
                    "telefono": "+525589577518",
                    "foto": "",
                    "curp": "AACM651123MTSLLR06"
                },
        "usuario":
                {
                    "id": 3001,
                    "nombreUsuario": "20100001Administrador",
                    "contrasenia": "20100001Administrador",
                    "rol": "Administrador"
                }
        
    },
    {
        "id": 2002,
        "clave": "19020002",
        "fechaContratacion": "2019/03/20",
        "puesto": "Empleado",
        "salario": 2000,
        "email": "Roberto@Outlook.com",
        "estatus": 1,
        "persona":
                {
                    "id": 2,
                    "nombre": "Roberto",
                    "apellidoPaterno": "Lira",
                    "apellidoMaterno": "Socorro",
                    "genero" : "Hombre",
                    "fechaNacimiento": "1990/12/01",
                    "rfc": "JACL841028Q62",
                    "cp": "364452",
                    "domicilio": "AV. INDEPENDENCIA NO. 241, COL. CENTRO TUXTEPEC",
                    "ciudad": "Saltillo",
                    "estado": "Coahuila",
                    "telefono": "+525589202761",
                    "foto": "",
                    "curp": "OOAZ900824MTSRLL08"
                },
        "usuario":
                {
                    "id": 3002,
                    "nombreUsuario": "19020002Empleado",
                    "contrasenia": "19020002Empleado",
                    "rol": "Empleado"
                }
    },
    {
        "id": 2003,
        "clave": "21050003",
        "fechaContratacion": "2021/05/31",
        "puesto": "Administrador",
        "salario": 12000,
        "email": "Maria@Outlook.com",
        "estatus": 1,
        "persona":
                {
                    "id": 3,
                    "nombre": "Maria",
                    "apellidoPaterno": "Sanchez",
                    "apellidoMaterno": "Soto",
                    "genero" : "Otro",
                    "fechaNacimiento": "1977/08/14",
                    "rfc": "MOMM770119F65",
                    "cp": "38356",
                    "domicilio": "AV. 20 DE NOVIEMBRE NO.1024, COL.CENTRO",
                    "ciudad": "Pachuca",
                    "estado": "Hidalgo",
                    "telefono": "+525585266521",
                    "foto": "",
                    "curp": "OIRY910429MTSRDL02"
                },
        "usuario":
                {
                    "id": 3003,
                    "nombreUsuario": "21050003Administrador",
                    "contrasenia": "21050003Administrador",
                    "rol": "Administrador"
                }
    },
    {
        "id": 2004,
        "clave": "22080004",
        "fechaContratacion": "2022/08/25",
        "puesto": "Empleado",
        "salario": 20000,
        "email": "Cesar@Outlook.com",
        "estatus": 1,
        "persona":
                {
                    "id": 4,
                    "nombre": "Cesar",
                    "apellidoPaterno": "Castro",
                    "apellidoMaterno": "Valdivia",
                    "genero" : "Hombre",
                    "fechaNacimiento": "1890/11/30",
                    "rfc": "GORJ8608234G3",
                    "cp": "36021",
                    "domicilio": "Calle matamoros no. 310, col. centro tuxtepec",
                    "ciudad": "León",
                    "estado": "Guanajuato",
                    "telefono": "+525585262853",
                    "foto": "",
                    "curp": "EIRJ720502HTSSDN06"
                },
        "usuario":
                {
                    "id": 3004,
                    "nombreUsuario": "22080004Empleado",
                    "contrasenia": "22080004Empleado",
                    "rol": "Empleado"
                }
       
    },
    {
        "id": 2005,
        "clave": "23040005",
        "fechaContratacion": "2023/04/01",
        "puesto": "Administrador",
        "salario": 15.000,
        "email": "Roc@Outlook.com",
        "estatus": 1,
        "persona":
                {
                    "id": 5,
                    "nombre": "Rocio",
                    "apellidoPaterno": "Vasquez",
                    "apellidoMaterno": "Luna",
                    "genero" : "Mujer",
                    "fechaNacimiento": "2002/04/21",
                    "rfc": "HUHL7205233T9",
                    "cp": "38014",
                    "domicilio": "blvd. benito juarez no. 1466-a, fracc. los angeles tuxtepec",
                    "ciudad": "Celaya",
                    "estado": "Guanajuato",
                    "telefono": "+525541708742",
                    "foto": "",
                    "curp": "RIVS770301HTSVZL05"
                },
        "usuario":
                {
                    "id": 3005,
                    "nombreUsuario": "23040005Administrador",
                    "contrasenia": "23040005Administrador",
                    "rol": "Administrador"
                }
        
    }
];
//const filtrador = new mdb.Datatable(document.getElementById('datatable'),data)
//sirve para inicializar el modulo de empleados
export function inicializar()
{
    setDetalleEmpleadoVisible(false);
    fillTableEmpleado();

    //Inicializamos filtro en la tabla
    //document.getElementById('txtFiltro')

}
//  Insert y update en el mismo metodo

export function save()
{
    //Un objeto donde guardemos los datos del empleado:
    let emp = null;
    let posicion = -1; //Para saber si un empleado ya existe o no.
    let idEmpleado = 0;

//Revisamos si hay un id empleado:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {

        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);
//Si posicion es mayor o igual a 0, si encontramos a un empleado;

        if (posicion >= 0)
            emp = empleados[posicion];
        else
        {
            //si no hay un empleado con el id descrito,
            //creamos una nueva instancia del objeto;
            emp = new Object();
            emp.id = idEmpleado;

            emp.persona = new Object();
            emp.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());

            emp.usuario = new Object();
            emp.usuario.id = parseInt(document.getElementById("txtIdUsuario").value.trim());

//Insertamos el objeto emp dentro de el arreglo de empleados:
            empleados.push(emp);
        }
//Continuamos llenando los datos del objeto:
        emp.persona.nombre = document.getElementById("txtNombreEmpleado").value;
        emp.persona.apellidoPaterno = document.getElementById("txtApellidoPaternoEmpleado").value;
        emp.persona.apellidoMaterno = document.getElementById("txtApellidoMaternoEmpleado").value;
        emp.persona.genero = document.getElementById("cmbGeneroEmpleado").value;
        emp.persona.fechaNacimiento = document.getElementById("txtFechaNacimientoEmpleado").value;
        emp.persona.rfc = document.getElementById("txtRfcEmpleado").value;
        emp.persona.curp = document.getElementById("txtCurpEmpleado").value;
        emp.persona.domicilio = document.getElementById("txtDomicilioEmpleado").value;
        emp.persona.cp = document.getElementById("txtCpEmpleado").value;
        emp.persona.ciudad = document.getElementById("txtCiudadEmpleado").value;
        emp.persona.estado = document.getElementById("txtEstadoEmpleado").value;
        emp.persona.telefono = document.getElementById("txtTelefonoEmpleado").value;


        //Datos del empleado
        emp.clave = document.getElementById("txtCodigoEmpleado").value;
        emp.fechaContratacion = document.getElementById("txtFechaIngresoEmpleado").value;
        emp.puesto = document.getElementById("cmbPuestoEmpleado").value;
        emp.salario = document.getElementById("txtSalarioBrutoEmpleado").value;
        emp.email = document.getElementById("txtEmailEmpleado").value;
        emp.rol = document.getElementById("cmbEstatus").value;


        //Datos de Usuario
        emp.usuario.nombreUsuario = document.getElementById("txtNombreUsuario").value;
        emp.usuario.contrasenia = document.getElementById("txtContrasenia").value;
        emp.usuario.rol = document.getElementById("cmbRol").value;
        
        //refrescamos el catalogo de empleados:
        fillTableEmpleado();

        Swal.fire('Movimiento realizado', 'Datos empleado actualizados correctamente.', 'success');
    } else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                'Debe agregar un ID al empleado (valor num&eacute;rico).',
                'warning');
    }
}
export function deleteEmpleado()
{
    let posicion = -1;
    let idEmpleado = 0;
    //resvisamos si hay un id de empleado
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {

        //recuperamos el id del empleado que deseamos eliminar:
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());

        //Buscamos la posicion del empleado con ese id:
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);

        //Si la posicion del empleado existe, lo quitamos del arreglo:

        if (posicion >= 0)
        {
            empleados.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de empleado eliminado.', 'succes');
            fillTableEmpleado();

        } else
        {
            Swal.fire('', 'El id de emplpeado especificado no existe.', 'warning');
        }
    } else
    {
        Swal.fire('', 'Especifique un id de empleado.', 'warning');
    }
}

export function getEmpleado()
{

}
//Llena la tabla de empleados
//con el arreglo.
function fillTableEmpleado()
{
    //Aqui vamos a ir guardando el contenido del 
    //tbody de la tabla empleados:
    let contenido = '';

//recorremos el arreglo por elemento:
    for (let i = 0; i < empleados.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                empleados[i].persona.nombre + '' +
                empleados[i].persona.apellidoPaterno + '' +
                empleados[i].persona.apellidoMaterno +
                '</td>' +
                '<td>' + empleados[i].clave + '</td>' +
                '<td>' + empleados[i].usuario.nombreUsuario + '</td>' +
                '<td>' + empleados[i].persona.rfc + '</td>' +
                '<td>' + empleados[i].persona.curp + '</td>' +
                '<td>' + empleados[i].email + '</td>' +
                '<td>' + empleados[i].persona.telefono + '</td>' +
                '<td>' + empleados[i].estatus + '</td>' +
                '<td>' +
                '<a href="#"  class="text-info" onclick="cm.cargarDetalleEmpleado(' + i + ');"><i class="bi bi-eye"></i></a>' +
                '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyEmpleados").innerHTML = contenido;
}
export function cargarDetalleEmpleado(posicion)
{
    //recuperar empleado
    let  emp = empleados[posicion];
    //llenamos las cajas de texto
    document.getElementById("txtIdEmpleado").value = emp.id;
    document.getElementById("txtIdPersona").value = emp.persona.id;
    document.getElementById("txtIdUsuario").value = emp.usuario.id;
    document.getElementById("txtNombreEmpleado").value = emp.persona.nombre;
    document.getElementById("txtApellidoPaternoEmpleado").value = emp.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaternoEmpleado").value = emp.persona.apellidoMaterno;
    document.getElementById("cmbGeneroEmpleado").value = emp.persona.genero;
    document.getElementById("txtFechaNacimientoEmpleado").value = emp.persona.fechaNacimiento;
    document.getElementById("txtRfcEmpleado").value = emp.persona.rfc;
    document.getElementById("txtCurpEmpleado").value = emp.persona.curp;
    document.getElementById("txtDomicilioEmpleado").value = emp.persona.domicilio;
    document.getElementById("txtCpEmpleado").value = emp.persona.cp;
    document.getElementById("txtCiudadEmpleado").value = emp.persona.ciudad;
    document.getElementById("txtEstadoEmpleado").value = emp.persona.estado;
    document.getElementById("txtTelefonoEmpleado").value = emp.persona.telefono;

    //Datos del empleado
    document.getElementById("txtCodigoEmpleado").value = emp.clave;
    document.getElementById("txtFechaIngresoEmpleado").value = emp.fechaContratacion;
    document.getElementById("cmbPuestoEmpleado").value = emp.puesto;
    document.getElementById("txtSalarioBrutoEmpleado").value = emp.salarioBruto;
    document.getElementById("txtEmailEmpleado").value = emp.email;
    document.getElementById("cmbEstatus").value =  emp.estatus;


    //Datos de Usuario
    document.getElementById("txtNombreUsuario").value = emp.usuario.nombreUsuario;
    document.getElementById("txtContrasenia").value = emp.usuario.contrasenia;
    document.getElementById("cmbRol").value = emp.usuario.rol;


    setDetalleEmpleadoVisible(true);

}
export function clearForm()
{
    document.getElementById("txtIdEmpleado").value = '';
    document.getElementById("txtIdPersona").value = '';
    document.getElementById("txtIdUsuario").value = '';
    document.getElementById("txtNombreEmpleado").value = '';
    document.getElementById("txtApellidoPaternoEmpleado").value = '';
    document.getElementById("txtApellidoMaternoEmpleado").value = '';
    document.getElementById("cmbGeneroEmpleado").value = '';
    document.getElementById("txtFechaNacimientoEmpleado").value = '';
    document.getElementById("txtRfcEmpleado").value = '';
    document.getElementById("txtCurpEmpleado").value = '';
    document.getElementById("txtDomicilioEmpleado").value = '';
    document.getElementById("txtCpEmpleado").value = '';
    document.getElementById("txtCiudadEmpleado").value = '';
    document.getElementById("txtEstadoEmpleado").value = '';
    document.getElementById("txtTelefonoEmpleado").value = '';


    //Datos del empleado
    document.getElementById("txtCodigoEmpleado").value = '';
    document.getElementById("txtFechaIngresoEmpleado").value = '';
    document.getElementById("cmbPuestoEmpleado").value = '';
    document.getElementById("txtSalarioBrutoEmpleado").value = '';
    document.getElementById("txtEmailEmpleado").value = '';
    document.getElementById("cmbEstatus").value = '';


    //Datos de Usuario
    document.getElementById("txtNombreUsuario").value = '';
    document.getElementById("txtContrasenia").value = '';
    document.getElementById("cmbRol").value = '';

}

//busca la posicion de un objeto empleado
//si no se encuentra el id buscado, el metodo devuelve -1.
function buscarPosicionEmpleadoPorId(id)
{

    for (let i = 0;
    i < empleados.length; i++)
    {
        if (empleados[i].id === id)
            return i;
    }
    return -1;
}
export function setDetalleEmpleadoVisible(valor)
{
    if (valor === true)
    {
        //OCULTAMOS LA SECCION DE CATALOGO DE EMPLEADOS
        document.getElementById('divCatalogoEmpleados').style.display = 'none';

//MOSTRAMOS LA SECCION DETALLES
        document.getElementById('divDetalleEmpleado').style.display = '';
    } else
    {
        //OCULTAMOS LA SECCION DE DETALLE DE EMPLEADOS
        document.getElementById('divDetalleEmpleado').style.display = 'none';

//MOSTRAMOS LA SECCION DE CATALOGO DE EMPLEADOS
        document.getElementById('divCatalogoEmpleados').style.display = '';


    }
}
export function clearAndShowDetalleEmpleado()
{
    clearForm();
    setDetalleEmpleadoVisible(true);
}