var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

var alumnosAprobados = alumnos.filter(alum => alum.nota >= 7);

document.writeln("<h1>Alumnos aprobados: </h1>")

for (var i = 0; i < alumnos.length; i++)
{
    document.write(alumnosAprobados[i].nombre + " - " + alumnosAprobados[i].nota + "<br>");
}