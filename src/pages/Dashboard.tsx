import { MetricCard } from '../components/dashboard/MetricCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { TrafficChart } from '../components/dashboard/TrafficChart';
import { UserActivityChart } from '../components/dashboard/UserActivityChart';
import { RecentOrders } from '../components/dashboard/RecentOrders';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$45,231.89"
          change={20.1}
          changeType="increase"
          icon={DollarSign}
          description="from last month"
        />
        <MetricCard
          title="Active Users"
          value="2,350"
          change={15.2}
          changeType="increase"
          icon={Users}
          description="from last month"
        />
        <MetricCard
          title="Total Orders"
          value="1,234"
          change={8.5}
          changeType="increase"
          icon={ShoppingCart}
          description="from last month"
        />
        <MetricCard
          title="Conversion Rate"
          value="3.2%"
          change={-2.4}
          changeType="decrease"
          icon={TrendingUp}
          description="from last month"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <RevenueChart />
        <TrafficChart />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <UserActivityChart />
        <RecentOrders />
      </div>
    </div>
  );
}
