# Nota
Porfié el uso de ESLint con Airbnb solo por comodidad, porque estoy acostumbrado a usar StandardJS y no quise gastar tiempo en configurar un nuevo linter

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Rutas
### `GET /issues` Listado de todos los issues

### `POST /issues` Creación de un nuevo issue
```
  @body title Título
  @body description Descripción
  @body flightCode Código del vuelo al que está asociado
```

El issue creado tendrá como `IssuerId` el Id del usuario logeado.

### `POST /issues/:id/assign` Asignación del issue
```
  @param id Id del issue a asignar
```

El issue correspondiente a `id` quedará con `ManagerId` como el Id del usuario logeado

### `POST /issues/:id/status` Cambio del status de un issue
```
  @param id Id del issue a actualizar
  @body status Nuevo status con el que quedara el issue
```

El issue correspondiente a `id` quedará con el `status` requerido

# TODO

* Add JWT
* Add follow up
