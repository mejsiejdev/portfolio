"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMessage } from "@/app/(landing)/actions";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Activity } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long",
  }),
});

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const result = await sendMessage(data);
    if (result.success) {
      form.reset();
      toast.success("Message sent successfully");
    } else {
      toast.error("Failed to send message");
    }
  }

  return (
    <motion.section {...fadeInAnimation} id="contact">
      <h2>Get in Touch</h2>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  disabled={form.formState.isSubmitting}
                />
                <Activity mode={fieldState.invalid ? "visible" : "hidden"}>
                  <FieldError errors={[fieldState.error]} />
                </Activity>
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  disabled={form.formState.isSubmitting}
                />
                <Activity mode={fieldState.invalid ? "visible" : "hidden"}>
                  <FieldError errors={[fieldState.error]} />
                </Activity>
              </Field>
            )}
          />
        </div>
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                disabled={form.formState.isSubmitting}
              />
              <Activity mode={fieldState.invalid ? "visible" : "hidden"}>
                <FieldError errors={[fieldState.error]} />
              </Activity>
            </Field>
          )}
        />
        <Button
          type="submit"
          size={"lg"}
          className="cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          <Activity mode={form.formState.isSubmitting ? "hidden" : "visible"}>
            <Send className="h-5 w-5" /> Send Message
          </Activity>
          <Activity mode={form.formState.isSubmitting ? "visible" : "hidden"}>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </Activity>
        </Button>
      </form>
    </motion.section>
  );
}
