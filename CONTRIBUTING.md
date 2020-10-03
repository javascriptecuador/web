## Contributing

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