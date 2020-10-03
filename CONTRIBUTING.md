## ¿Cómo contribuir?

Hola, 👋 a todos. Las contribuciones a este repositorio son bienvenidas. Si deseas mejorar esta hoja de referencia o traducirla a otros idiomas, ¡considera abrir un nuevo  [issue](https://github.com/javascriptecuador/web/issues/new)! y lo trataremos juntos.

Si quieres contribuir debes leer y aceptar nuestro [Código de Conducta](https://github.com/javascriptecuador/.github/blob/master/CODE_OF_CONDUCT.md)

## Guías

### Guias para colaborar:

- [Has un Fork al repositorio](https://help.github.com/articles/fork-a-repo/)
- [Elije un issue en el cual trabajar ](https://github.com/javascriptecuador/web/issues)
- Crea una nueva rama cuyo nombre describa el issue en el que vas a trabajar, por ejemplo: `arregla-issue-1`, `archivo-contribuir`, etc
```
git checkout -b tarea-issue-1
```
- Has los cambios necesarios y deseados.
- Para visualizar los cambios realizados:
```
git status
``` 
- Para hacer un commit usa las siguientes líneas.
```
git add archivos-creados-o-editados.md
git commit -m "docs: Agrego guía para configurar linter"
```
- Una vez hecho el commit, sube la rama(branch) que creaste a tu fork.
```
git push -u origin tarea-issue-1
```
- [Crea u pull request](https://help.github.com/articles/creating-a-pull-request/). En github si te diriges al [repo principal](https://github.com/javascriptecuador/web) veras un mensaje sugiriéndote crear un `pull request`.

Debes verificar que la rama base a la izquierda sea `master o main` y la rama a compare a la derecha sea la que tu creaste en el caso de este ejemplo `tarea-issue-1`

Escribe un título y una descripción que explique los cambios que hiciste en tu pull resquest. Al final de la descripcion agrega `Close #numero-issue` numero-issue es el que elegiste para resolver, en este caso de ejemplo  `close #1`.


### Mensajes de Commit 

Para este proyecto usaremos [commitlint](https://commitlint.js.org/#/) que usa [Conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/), esto nos proporcionara un estándar al momento de escribir un commit e identificar el propósito del mismo. 

### Guía Conventional Commits

A continuación tenemos una estructura completa de un Conventional Commit:

```
[tipo]([ámbito opcional]): [descripción]

[cuerpo opcional]

[nota de pie opcional]
```

Aquí tenemos una estructura con solo los campos obligatorios:

```
[tipo]: [descripción]
```

Ejemplos:

```
feat(home): añadir pie alternativo al home

Implementar una versión alternativa del pie de página
Agregar iconos alternativos en la versión móvil del pie de página

Soluciona la incidencia #3
```

```
feat: cambiar títulos y estilos en la página de inicio
```

#### Explicación de los campos

**Tipo (obligatorio)** 
Los principales tipos de commits son
- **fix:** corrige un error
- **feat** introduce nuevas funcionalidades

Se permiten otros tipos de commit pero se recomienda los que usan Angular Convention

**Ámbito (opcional)** 
Se puede agregar un ámbito al tipo de commit para proveer información contextual adicional. Es opcional y se escribe entre paréntesis. Ejemplo:

```
feat(parser): añadir capacidad de parsear arrays
```

**Descripción (obligatoria)** 
Es obligatoria una descripción corta de los cambios realizados en el código.

**Cuerpo (opcional)** 
Puede agregarse después de la descripción, dando información adicional acerca de los cambios en el código. Debe iniciar con una línea en blanco después de la descripción.

**Nota de pie (opcional)** 
Puede agregarse tras una línea en blanco después del cuerpo o después de la descripción en caso de que no haya un cuerpo. Debe contener referencias adicionales a los números de problemas registrados sobre el cambio del código (ejemplo corrige incidencia #154).