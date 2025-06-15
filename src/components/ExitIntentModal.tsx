import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Sparkles } from "lucide-react";

const leadFormSchema = z.object({
  email_or_alias: z.string().min(5, {
    message: "Please enter a valid email or phone number.",
  }),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export const ExitIntentModal = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) => {
  const { toast } = useToast();
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      email_or_alias: "",
      message: "",
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      const { error } = await supabase
        .from('boot_entries')
        .insert({
          email_or_alias: data.email_or_alias,
          message: data.message,
          timestamp: new Date().toISOString(),
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you! ✨",
        description: "I've received your contact info and will be in touch shortly.",
      });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem saving your info. Please try again.",
      });
    }
  };
    
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-background to-slate-900/50 border-border/50">
        <DialogHeader>
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <DialogTitle className="text-center text-2xl">Wait! Before You Go...</DialogTitle>
          <DialogDescription className="text-center">
            I'd love to connect. Leave your contact info and an optional message, and I'll get in touch. No spam, I promise.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="email_or_alias"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Contact Info</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@example.com or phone number"
                      {...field}
                      className="text-center"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Optional: Leave a message..."
                      className="resize-none text-center"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
