import { AbstractControl, ValidationErrors } from "@angular/forms"

export const mayStart = (control: AbstractControl): ValidationErrors | null => {
  const nombre = control.value
  if (nombre[0] === nombre[0].toUpperCase()) {
  return null
  }
  return { empiezaPorMayuscula: true }
}
