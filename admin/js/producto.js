let productos = [
    {
        "id": 1,
        "codigoBarras": "SKAM01",
        "nombreProducto": "Ambroxol",
        "nombreGenerico": "Ambroxol, Clorhidrato",
        "formaFarmaceutica": "Solución",
        "unidaMedida": "Mililitro",
        "presentacion": "Envase con 120 ml y dosificador",
        "principalIndicacion": "Bronquitis",
        "contraindicaciones": "Hipersensibilidad al fármaco",
        "concentracion": "300 mg a 100 ml",
        "UnidadesEnvase": "120",
        "precio": "277",
        "estatus": "Activo",
        "foto": "",
        "ruta foto": ""
    },
    {
        "id": 2,
        "codigoBarras": "PROFM02",
        "nombreProducto": "Ibuprofeno",
        "nombreGenerico": "Ibuprofeno",
        "formaFarmaceutica": "cápsula",
        "unidaMedida": "Miligramo",
        "presentacion": "Envase con 30 cápsulas",
        "principalIndicacion": "Dolor de leve a moderado.",
        "contraindicaciones": "Ninguna",
        "concentracion": "400 mg",
        "UnidadesEnvase": "30",
        "precio": "537",
        "estatus": "Activo",
        "foto": "",
        "ruta foto": ""
    },
    {
        "id": 3,
        "codigoBarras": "MEA3",
        "nombreProducto": "Metamizol",
        "nombreGenerico": "Metamizol sódico",
        "formaFarmaceutica": "comprimido",
        "unidaMedida": "comprimido",
        "presentacion": "Envase con 10 comprimidos",
        "principalIndicacion": "Fiebre",
        "contraindicaciones": "Hipersensibilidad al fármaco",
        "concentracion": "500 mg",
        "UnidadesEnvase": "10",
        "precio": "472",
        "estatus": "Activo",
        "foto": "",
        "ruta foto": ""
    },
    {
        "id": 4,
        "codigoBarras": "LICCA5",
        "nombreProducto": "Ciprofibrato",
        "nombreGenerico": "Ciprofibrato",
        "formaFarmaceutica": "capsula o tableta",
        "unidaMedida": "capsula",
        "presentacion": "Envase con 30 cápsulas o tabletas.",
        "principalIndicacion": "iperlipidemias",
        "contraindicaciones": "Hipersensibilidad al fármaco",
        "concentracion": "100 mg",
        "UnidadesEnvase": "30",
        "precio": "665",
        "estatus": "Activo",
        "foto": "",
        "ruta foto": ""
    },
    {
        "id": 5,
        "codigoBarras": "LICCA5",
        "nombreProducto": "Lidocaina",
        "nombreGenerico": "Lidocaina",
        "formaFarmaceutica": "gel",
        "unidaMedida": "Mililitro",
        "presentacion": "Envase con 20 ml",
        "principalIndicacion": "Anestesia local",
        "contraindicaciones": "Hipersensibilidad conocida a anestésicos locales",
        "concentracion": "20 mg",
        "UnidadesEnvase": "20",
        "precio": "306",
        "estatus": "Activo",
        "foto": "",
        "rutaFoto": ""
    }
];

//const filtrador = new mdb.Datatable(document.getElementById('')), data

//  Insert y update en el mismo metodo
export function inicializar()
{
    fillTableProducto();
    setDetalleProductosVisible(false);
}


export function getProducto()
{

}
//llena la tabla de producto
//con elarreglo.
function fillTableProducto()
{
    //aqui vamos a guardar el contenido del
    //tboby de la tabla de producto:
    let contenido = '';
    for (let i = 0; i < productos.length; i++)
    {
        contenido += '<tr>' +
                '<td>' + productos[i].id + '</td>' +
                '<td>' + productos[i].nombreProducto + '</td>' +
                '<td>' + productos[i].codigoProducto + '</td>' +
                '<td>' + productos[i].codigoBarras + '</td>' +
                '<td>' + productos[i].precio + '</td>' +
                '<td>' + productos[i].estatus + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleProducto(' + i + ');"><i class="bi bi-eye"></i></a> ' + '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyProductos").innerHTML = contenido;
}

export function cargarDetalleProducto(poscion)
{
    //Recuperamos el producto en la posicion indicada
    let pro = productos[poscion];

    document.getElementById("txtNombreProducto").value = pro.nombreProducto;
    document.getElementById("txtNombreGenerico").value = pro.nombreGenerico;
    document.getElementById("txtFormaFar").value = pro.formaFarmaceutica;
    document.getElementById("txtUnidaMedida").value = pro.unidaMedida;
    document.getElementById("txtPresen").value = pro.presentacion;
    document.getElementById("txtPrincIndi").value = pro.principalIndicacion;
    document.getElementById("fotoProdu").value = pro.foto;
    document.getElementById("txtContra").value = pro.contraindicaciones;
    document.getElementById("txtConcentra").value = pro.concentracion;
    document.getElementById("txtunidadesE").value = pro.UnidadesEnvase;
    document.getElementById("txtPrecio").value = pro.precio;
    document.getElementById("txtEstatus").value = pro.estatus;
    document.getElementById("txtIdProdu").value = pro.id;
    document.getElementById("txtCodigoBarras").value = pro.codigoBarras;
    document.getElementById("txtRutaFoto").value = pro.rutaFoto;


    setDetalleProductosVisible(true);
}



function buscarPosicionProductoPorid(id)
{
    for (let i = 0;
    i < productos.length; i++)
    {

        if (productos[i].id === id)
        {
            return i;
        }
        return -1;
    }
}
export function setDetalleProductosVisible(valor) {
    if (valor === true) {
        document.getElementById('divCatalogoproducto').style.display = 'none';
        document.getElementById('divDetalleProducto').style.display = '';
    } else
    {
        document.getElementById('divDetalleProducto').style.display = 'none';
        document.getElementById('divCatalogoproducto').style.display = '';
    }
}

export function clearAndShowDetalleProductos()
{
    clearForm();
    setDetalleProductosVisible(true);
}