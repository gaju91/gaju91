import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/contact/social-links";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="h-5 w-5" />
              <span>gajanand742@gmail.com</span>
              <Phone className="h-5 w-5" />
              <span>+91 9875763585</span>
            </div>
            <ContactForm />
          </Card>

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}