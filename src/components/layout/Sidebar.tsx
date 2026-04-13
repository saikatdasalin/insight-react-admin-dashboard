import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  FileText,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Calendar,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: string | number;
}

const mainNavItems: NavItem[] = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Analytics', href: '/analytics', icon: BarChart3 },
  { title: 'Users', href: '/users', icon: Users },
  { title: 'Orders', href: '/orders', icon: ShoppingCart },
  { title: 'Products', href: '/products', icon: Package },
  { title: 'Reports', href: '/reports', icon: FileText },
];

const secondaryNavItems: NavItem[] = [
  { title: 'Calendar', href: '/calendar', icon: Calendar },
  { title: 'Messages', href: '/messages', icon: MessageSquare, badge: 5 },
  { title: 'Email', href: '/email', icon: Mail, badge: 12 },
];

const bottomNavItems: NavItem[] = [
  { title: 'Settings', href: '/settings', icon: Settings },
  { title: 'Help', href: '/help', icon: HelpCircle },
];

export function Sidebar() {
  const { isCollapsed, isMobileOpen, toggleCollapse, closeMobile } = useSidebar();
  const location = useLocation();

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;

    const linkContent = (
      <Link
        to={item.href}
        onClick={closeMobile}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent',
          isActive ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground hover:text-foreground',
          isCollapsed && 'justify-center px-2'
        )}
      >
        <Icon className="h-5 w-5 shrink-0" />
        {!isCollapsed && (
          <>
            <span className="flex-1">{item.title}</span>
            {item.badge && (
              <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
                {item.badge}
              </span>
            )}
          </>
        )}
      </Link>
    );

    if (isCollapsed) {
      return (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
          <TooltipContent side="right" className="flex items-center gap-2">
            {item.title}
            {item.badge && (
              <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
                {item.badge}
              </span>
            )}
          </TooltipContent>
        </Tooltip>
      );
    }

    return linkContent;
  };

  return (
    <TooltipProvider>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-full flex-col border-r bg-card transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className={cn('flex h-16 items-center border-b px-4', isCollapsed && 'justify-center px-2')}>
          {!isCollapsed && (
            <Link to="/" className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Insight</span>
            </Link>
          )}
          {isCollapsed && (
            <Link to="/">
              <Layers className="h-6 w-6 text-primary" />
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={closeMobile}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-1">
            {!isCollapsed && (
              <span className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground">
                Main
              </span>
            )}
            {mainNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}

            {!isCollapsed && (
              <span className="mb-2 mt-6 px-3 text-xs font-semibold uppercase text-muted-foreground">
                Apps
              </span>
            )}
            {isCollapsed && <div className="my-4 border-t" />}
            {secondaryNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </ScrollArea>

        <div className="border-t px-3 py-4">
          <nav className="flex flex-col gap-1">
            {bottomNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 hidden h-6 w-6 rounded-full border bg-background shadow-sm lg:flex"
          onClick={toggleCollapse}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </aside>
    </TooltipProvider>
  );
}
