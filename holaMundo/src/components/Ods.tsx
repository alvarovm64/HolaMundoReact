function ods(){
    enum listaODS {
        ods1 = "FinDeLaPobreza",
        ods2 = "HambreCero",
        ods3 = "SaludYBienestar", 
        ods4 = "EducacionDeCalidad", 
        ods5 = "IgualdadDeGenero", 
        ods6 = "AguaLimpia",
        ods7 = "EnergiaAsequible",
        ods8 = "TrabajoDecente"
    }

    type EstadoOds = 'Aprobado' | 'Ejecucion' | 'Completado' | 'Rechazado'


    interface InterfazSostenible{
        id: number,
        odsFav: listaODS,
        estado: EstadoOds;
    }

    const odsAlumnos: InterfazSostenible[] = [{
        id: 1,
        odsFav: listaODS.ods1,
        estado: 'Aprobado'
    },{
        id: 2,
        odsFav: listaODS.ods2,
        estado: 'Ejecucion'
    }
];

    let odsFav = listaODS.ods1

    function filtrarProyectosClimaticos(
        ods: InterfazSostenible[]): InterfazSostenible[] {
        return ods.filter((o) => o.estado === "Ejecucion",);
    }

    let resultadoFuncion = filtrarProyectosClimaticos(odsAlumnos);
    console.log(resultadoFuncion);
    return <h1>{JSON.stringify(resultadoFuncion,null, 3)}</h1>

}

export default ods;