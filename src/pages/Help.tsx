import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Search, Book, MessageCircle, Mail, ExternalLink } from 'lucide-react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by going to Settings > Security and clicking on "Update Password". Enter your current password and then your new password twice to confirm.',
  },
  {
    question: 'How do I add a new user?',
    answer: 'Navigate to the Users page and click the "Add User" button. Fill in the required information including name, email, role, and status, then click "Add User" to create the account.',
  },
  {
    question: 'How do I export reports?',
    answer: 'Go to the Reports page, find the report you want to export, and click the download icon. Reports can be exported in PDF, CSV, or Excel formats.',
  },
  {
    question: 'How do I change the theme?',
    answer: 'You can toggle between light and dark mode by clicking the sun/moon icon in the header, or go to Settings > Appearance to change your theme preference.',
  },
  {
    question: 'How do I manage notifications?',
    answer: 'Go to Settings > Notifications to customize your notification preferences. You can enable or disable email notifications, push notifications, and marketing emails.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact our support team by clicking the "Contact Support" button below, or by sending an email to support@insight.com. Our team typically responds within 24 hours.',
  },
];

const resources = [
  { title: 'Documentation', description: 'Comprehensive guides and API references', icon: Book, link: '#' },
  { title: 'Community Forum', description: 'Connect with other users and share tips', icon: MessageCircle, link: '#' },
  { title: 'Email Support', description: 'Get help from our support team', icon: Mail, link: '#' },
];

export function Help() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">Find answers and get support.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How can we help you?</CardTitle>
          <CardDescription>Search our knowledge base or browse FAQs below.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for help..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.title} className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 h-auto">
                Learn more <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Still need help?</CardTitle>
          <CardDescription>Our support team is here to assist you.</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button>
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Email Us
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
