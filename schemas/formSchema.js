import { z } from "zod";

export const personalInformationSchema = z.object({
  fullname: z.string().min(4, "name error"),
  position: z.string().optional(),
  phone: z.string().min(11, "Ingresar un telefono valido"),
  email: z.email("Email invalido"),
  web: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
});

export const experienceSchema = z.object({});

export const educationSchema = z.object({});

export const coursesSchema = z.object({});
