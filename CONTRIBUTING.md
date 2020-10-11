## ¿Cómo contribuir?

Hola👋 a todos.   
Las contribuciones a este repositorio son bienvenidas. Si deseas mejorar esta hoja de referencia o traducirla a otros idiomas, ¡considera abrir un nuevo [issue][1]! y lo trataremos juntos.

Si quieres contribuir debes leer y aceptar nuestro [Código de Conducta][2]

## Guías para colaborar
A continuación se detallan los pasos a seguir para configurar el repositorio y levantar el ambiente de desarrollo.

### :globe_with_meridians: GitHub 
- Acceder con la cuenta al repositorio *web* y realizar un [fork][3]
- Copiar la URL del repositorio copiado (**forked**)
- Elegir un [issue][4] en el cual trabajar 

### :page_facing_up: Pre-requisitos 
- Instalar [Node.js][5]
- Un editor de código [VS Code][6], [Vim][7], [Atom][8]

### :construction_worker: Configuración local 
- Abrir una terminal, navegar al directorio en el que se creará el proyecto y clonar el repositorio
    ```
    git clone https://github.com/[usuario-github]/web.git
    ```
- Crea una nueva rama cuyo nombre describa el issue en el que se va a trabajar, por ejemplo `arregla-issue-1`.
    ```
    git checkout -b tarea-issue-1
    ```

### :hammer: Levantar ambiente de desarrollo 
- Instalar [**GatsbyJS**][9]
    ```
    npm install -g gatsby-cli
    ```
- Instalar dependencias 
    ```
    npm install
    ```

- Ejecutar el proyecto de forma local
    ```
    gatsby develop
    ```
- Hacer los cambios necesarios. Se puede visualizarlos con `status`
    ```
    git status
    ``` 

### :arrow_up: Enviar cambios (commits) 
Para este proyecto usaremos [Commit Lint][10] que usa [Conventional Commits][11], esto nos proporcionará un estándar al momento de escribir un commit e identificar el propósito del mismo. 

- Realizar un commit usando las siguientes líneas
    ```
    git add archivos-creados-o-editados
    git commit -m "docs(README): Agregada sección de colaboradores"
    ```
    > Al final del documento se encuentra una guía detallada de **Conventional Commits**

- Una vez hecho el commit, subir la rama (branch) creada al fork.
    ```
    git push -u origin tarea-issue-1
    ```

### :rocket: Pull Request 
- Dirigirse al repositorio principal en [GitHub][12]
- Se presenta un mensaje sugiriendo crear un [`pull request`][13]. 
- Verificar que la rama base a la izquierda sea `master o main` y la rama a comparar a la derecha sea la creada (`tarea-issue-1` en este ejemplo).
- Reemplazar el texto del template indicando los cambios realizados y el `issue` que resuelve, en este caso de ejemplo  `close #1`.   

---
## Guía Conventional Commits

A continuación tenemos una estructura completa de un **Conventional Commit**:

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

### Explicación de los campos

**Tipo (obligatorio)** 
Los principales tipos de commits son
- **fix:** corrige un error
- **feat** introduce nuevas funcionalidades
- **docs** completa la documentación del proyecto

Se permiten otros tipos de commit pero se recomienda los que usan **Angular Convention**

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

[1]: <https://github.com/javascriptecuador/web/issues/new> "Nuevo issue"
[2]: <https://github.com/javascriptecuador/.github/blob/master/CODE_OF_CONDUCT.md> "Código de Conducta JavaScript Ecuador"
[3]: <https://help.github.com/articles/fork-a-repo/> "Fork a repo"
[4]: <https://github.com/javascriptecuador/web/issues> "Listado de issues"
[5]: <https://nodejs.org/en/> "Página oficial" 
[6]: <https://code.visualstudio.com/> "Página oficial" 
[7]: <https://www.vim.org/> "Página oficial" 
[8]: <https://atom.io/> "Página oficial" 
[9]: <https://www.gatsbyjs.com/tutorial/part-zero/> "Documentación oficial"
[10]: <https://commitlint.js.org/#/> "Página oficial" 
[11]: <https://www.conventionalcommits.org/en/v1.0.0/> "Página oficial" 
[12]: <https://github.com/javascriptecuador/web> "Repositorio web - JavaScript Ecuador" 
[13]: <https://help.github.com/articles/creating-a-pull-request/> "Creating a pull request"