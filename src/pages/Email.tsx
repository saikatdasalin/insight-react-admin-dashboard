import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Checkbox } from '../components/ui/checkbox';
import { cn } from '../lib/utils';
import {
  Search,
  Inbox,
  Send,
  Star,
  Trash2,
  Archive,
  MoreVertical,
  RefreshCw,
  Pencil,
} from 'lucide-react';

const emails = [
  { id: 1, from: 'Sarah Johnson', subject: 'Project Update - Q1 Review', preview: 'Hi, I wanted to share the latest updates on our Q1 project...', time: '10:30 AM', read: false, starred: true },
  { id: 2, from: 'Mike Wilson', subject: 'Meeting Tomorrow', preview: 'Just a reminder about our meeting scheduled for tomorrow at 2 PM...', time: '9:15 AM', read: false, starred: false },
  { id: 3, from: 'Emily Davis', subject: 'Re: Budget Proposal', preview: 'Thank you for sending the budget proposal. I have reviewed it and...', time: 'Yesterday', read: true, starred: false },
  { id: 4, from: 'David Brown', subject: 'New Feature Request', preview: 'I have a suggestion for a new feature that could improve...', time: 'Yesterday', read: true, starred: true },
  { id: 5, from: 'Lisa Anderson', subject: 'Weekly Report', preview: 'Please find attached the weekly report for your review...', time: 'Mar 18', read: true, starred: false },
  { id: 6, from: 'James Taylor', subject: 'Client Feedback', preview: 'I received some feedback from our client regarding the latest...', time: 'Mar 17', read: true, starred: false },
  { id: 7, from: 'Jennifer Martinez', subject: 'Team Outing', preview: 'Hey everyone! I am planning a team outing for next month...', time: 'Mar 16', read: true, starred: false },
];

const folders = [
  { name: 'Inbox', icon: Inbox, count: 12 },
  { name: 'Sent', icon: Send, count: 0 },
  { name: 'Starred', icon: Star, count: 2 },
  { name: 'Archive', icon: Archive, count: 0 },
  { name: 'Trash', icon: Trash2, count: 0 },
];

export function Email() {
  const [selectedFolder, setSelectedFolder] = useState('Inbox');
  const [selectedEmail, setSelectedEmail] = useState(emails[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmails = emails.filter(
    (email) =>
      email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email</h1>
          <p className="text-muted-foreground">Manage your inbox and messages.</p>
        </div>
        <Button>
          <Pencil className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-4 h-[calc(100vh-220px)]">
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <nav className="space-y-1">
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                    selectedFolder === folder.name
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  )}
                  onClick={() => setSelectedFolder(folder.name)}
                >
                  <folder.icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{folder.name}</span>
                  {folder.count > 0 && (
                    <Badge variant={selectedFolder === folder.name ? 'secondary' : 'default'}>
                      {folder.count}
                    </Badge>
                  )}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{selectedFolder}</CardTitle>
              <Button variant="ghost" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search emails..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-380px)]">
              {filteredEmails.map((email) => (
                <div
                  key={email.id}
                  className={cn(
                    'flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors border-b',
                    selectedEmail.id === email.id && 'bg-muted',
                    !email.read && 'bg-primary/5'
                  )}
                  onClick={() => setSelectedEmail(email)}
                >
                  <Checkbox className="mt-1" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={cn('font-medium truncate', !email.read && 'font-semibold')}>
                        {email.from}
                      </p>
                      <span className="text-xs text-muted-foreground">{email.time}</span>
                    </div>
                    <p className={cn('text-sm truncate', !email.read && 'font-medium')}>
                      {email.subject}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{email.preview}</p>
                  </div>
                  {email.starred && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{selectedEmail.subject}</CardTitle>
                <CardDescription>From: {selectedEmail.from}</CardDescription>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Star className={cn('h-4 w-4', selectedEmail.starred && 'text-yellow-500 fill-yellow-500')} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Archive className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>Hi,</p>
              <p>{selectedEmail.preview}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>Best regards,<br />{selectedEmail.from}</p>
            </div>
            <div className="mt-6 flex gap-2">
              <Button>Reply</Button>
              <Button variant="outline">Forward</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
