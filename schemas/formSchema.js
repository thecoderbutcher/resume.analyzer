import { z } from "zod";

export const personalInformationSchema = z.object({
  fullname: z.string().min(4, "name error"),
  role: z.string().optional(),
  phone: z.string().min(11, "Ingresar un telefono valido"),
  email: z.email("Email invalido"),
  web: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
});

export const experienceSchema = z.object({
  position: z.string().min(3, "campo obligatorio"),
  company: z.string().min(3, "campo obligatorio"),
  startdate: z.string().min(3, "EL campo no puede ser vacio").optional(),
  enddate: z.string().optional(),
  workDescription: z.string().optional(),
});

export const educationSchema = z.object({
  degree: z.string().min(4, "compo obligatorio"),
  institution: z.string().min(4, "campo obligatorio"),
  state: z.string().min(4, "compo obligatorio"),
  hours: z.coerce.number().optional(),
  educationDescription: z.string().optional(),
});

export const extraSchema = z.object({
  language: z.string().min(3, "campo obligatorio"),
  level: z.string().min(3, "campo obligatorio"),
});
