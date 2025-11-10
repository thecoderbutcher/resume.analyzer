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

export const experienceSchema = z.object({
  position: z.string().optional(),
  startdate: z.date().optional(),
  enddate: z.date().optional(),
  role: z.string().optional(),
  company: z.string().optional(),
  description: z.string().optional(),
});

export const educationSchema = z.object({
  degree: z.string().optional(),
  institution: z.string().optional(),
  state: z.string().optional(),
  description: z.string().optional(),
});
