import Tarea from '../models/Tarea.js';

export const tareaResolver = (root, args) => {
  return Tarea.findById(args._id).exec()
}

export const allTareasResolver = (root, args) => {
  return Tarea.find().exec()
}

export const addTareaResolver = (root, args) => {
  const tarea = new Tarea({ ...args })
  return tarea.save()
}

export const updateTareaResolver = async (root, args) => {
  const tarea = await (Tarea.findById(args._id).exec())
  tarea.titulo = args.titulo || tarea.titulo
  tarea.descripcion = args.descripcion || tarea.descripcion
  tarea.fecha_inicio = args.fecha_inicio || tarea.fecha_inicio
  tarea.fecha_fin = args.fecha_fin || tarea.fecha_fin
  tarea.estado = args.estado || tarea.estado
  tarea.columna = args.columna || tarea.columna
  tarea.fileName = args.fileName || tarea.fileName

  return tarea.save()
}

export const deleteTareaResolver = async (root, args) => {
  const tarea = await (Tarea.findById(args._id).exec())

  return tarea.delete()
}
