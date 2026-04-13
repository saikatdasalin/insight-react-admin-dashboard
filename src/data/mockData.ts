import { User, Order, Product, Notification, ChartData } from '../types';

export const mockUsers: User[] = [
  { id: '1', name: 'John Smith', email: 'john@example.com', role: 'admin', status: 'active', createdAt: '2024-01-15', lastLogin: '2024-03-20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'manager', status: 'active', createdAt: '2024-02-10', lastLogin: '2024-03-19', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: '3', name: 'Mike Wilson', email: 'mike@example.com', role: 'user', status: 'active', createdAt: '2024-02-20', lastLogin: '2024-03-18', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', role: 'user', status: 'inactive', createdAt: '2024-01-05', lastLogin: '2024-02-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
  { id: '5', name: 'David Brown', email: 'david@example.com', role: 'user', status: 'pending', createdAt: '2024-03-01', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
  { id: '6', name: 'Lisa Anderson', email: 'lisa@example.com', role: 'manager', status: 'active', createdAt: '2024-01-20', lastLogin: '2024-03-20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' },
  { id: '7', name: 'James Taylor', email: 'james@example.com', role: 'user', status: 'active', createdAt: '2024-02-28', lastLogin: '2024-03-17', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { id: '8', name: 'Jennifer Martinez', email: 'jennifer@example.com', role: 'user', status: 'active', createdAt: '2024-03-05', lastLogin: '2024-03-19', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer' },
  { id: '9', name: 'Robert Garcia', email: 'robert@example.com', role: 'user', status: 'inactive', createdAt: '2024-01-10', lastLogin: '2024-02-01', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert' },
  { id: '10', name: 'Amanda White', email: 'amanda@example.com', role: 'user', status: 'active', createdAt: '2024-03-10', lastLogin: '2024-03-20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda' },
];

export const mockOrders: Order[] = [
  { id: 'ORD-001', customer: 'John Smith', email: 'john@example.com', product: 'Premium Plan', amount: 299.99, status: 'completed', date: '2024-03-20' },
  { id: 'ORD-002', customer: 'Sarah Johnson', email: 'sarah@example.com', product: 'Basic Plan', amount: 99.99, status: 'processing', date: '2024-03-19' },
  { id: 'ORD-003', customer: 'Mike Wilson', email: 'mike@example.com', product: 'Enterprise Plan', amount: 599.99, status: 'pending', date: '2024-03-18' },
  { id: 'ORD-004', customer: 'Emily Davis', email: 'emily@example.com', product: 'Premium Plan', amount: 299.99, status: 'completed', date: '2024-03-17' },
  { id: 'ORD-005', customer: 'David Brown', email: 'david@example.com', product: 'Basic Plan', amount: 99.99, status: 'cancelled', date: '2024-03-16' },
  { id: 'ORD-006', customer: 'Lisa Anderson', email: 'lisa@example.com', product: 'Premium Plan', amount: 299.99, status: 'completed', date: '2024-03-15' },
  { id: 'ORD-007', customer: 'James Taylor', email: 'james@example.com', product: 'Enterprise Plan', amount: 599.99, status: 'processing', date: '2024-03-14' },
  { id: 'ORD-008', customer: 'Jennifer Martinez', email: 'jennifer@example.com', product: 'Basic Plan', amount: 99.99, status: 'completed', date: '2024-03-13' },
];

export const mockProducts: Product[] = [
  { id: 'PRD-001', name: 'Basic Plan', category: 'Subscription', price: 99.99, stock: 999, status: 'in_stock' },
  { id: 'PRD-002', name: 'Premium Plan', category: 'Subscription', price: 299.99, stock: 999, status: 'in_stock' },
  { id: 'PRD-003', name: 'Enterprise Plan', category: 'Subscription', price: 599.99, stock: 999, status: 'in_stock' },
  { id: 'PRD-004', name: 'Analytics Add-on', category: 'Add-on', price: 49.99, stock: 50, status: 'low_stock' },
  { id: 'PRD-005', name: 'API Access', category: 'Add-on', price: 79.99, stock: 100, status: 'in_stock' },
  { id: 'PRD-006', name: 'Custom Integration', category: 'Service', price: 999.99, stock: 0, status: 'out_of_stock' },
];

export const mockNotifications: Notification[] = [
  { id: '1', title: 'New Order', message: 'You have received a new order from John Smith', type: 'success', read: false, createdAt: '2024-03-20T10:30:00' },
  { id: '2', title: 'Low Stock Alert', message: 'Analytics Add-on is running low on stock', type: 'warning', read: false, createdAt: '2024-03-20T09:15:00' },
  { id: '3', title: 'Payment Failed', message: 'Payment for order ORD-005 has failed', type: 'error', read: true, createdAt: '2024-03-19T16:45:00' },
  { id: '4', title: 'New User Registration', message: 'Amanda White has registered a new account', type: 'info', read: true, createdAt: '2024-03-19T14:20:00' },
  { id: '5', title: 'System Update', message: 'System maintenance scheduled for tonight', type: 'info', read: false, createdAt: '2024-03-19T11:00:00' },
];

export const revenueData: ChartData[] = [
  { name: 'Jan', revenue: 4000, orders: 240, users: 120 },
  { name: 'Feb', revenue: 3000, orders: 198, users: 98 },
  { name: 'Mar', revenue: 5000, orders: 300, users: 150 },
  { name: 'Apr', revenue: 4500, orders: 278, users: 140 },
  { name: 'May', revenue: 6000, orders: 389, users: 180 },
  { name: 'Jun', revenue: 5500, orders: 349, users: 165 },
  { name: 'Jul', revenue: 7000, orders: 430, users: 210 },
  { name: 'Aug', revenue: 6500, orders: 400, users: 195 },
  { name: 'Sep', revenue: 8000, orders: 480, users: 240 },
  { name: 'Oct', revenue: 7500, orders: 450, users: 225 },
  { name: 'Nov', revenue: 9000, orders: 520, users: 260 },
  { name: 'Dec', revenue: 10000, orders: 600, users: 300 },
];

export const trafficSourceData: ChartData[] = [
  { name: 'Direct', value: 4000 },
  { name: 'Organic Search', value: 3000 },
  { name: 'Paid Search', value: 2000 },
  { name: 'Social Media', value: 2780 },
  { name: 'Referral', value: 1890 },
  { name: 'Email', value: 2390 },
];

export const userActivityData: ChartData[] = [
  { name: 'Mon', active: 120, new: 20 },
  { name: 'Tue', active: 150, new: 25 },
  { name: 'Wed', active: 180, new: 30 },
  { name: 'Thu', active: 140, new: 22 },
  { name: 'Fri', active: 200, new: 35 },
  { name: 'Sat', active: 90, new: 15 },
  { name: 'Sun', active: 80, new: 12 },
];

export const salesByCategory: ChartData[] = [
  { name: 'Subscription', value: 65 },
  { name: 'Add-on', value: 25 },
  { name: 'Service', value: 10 },
];

export const performanceData: ChartData[] = [
  { name: 'Week 1', performance: 85, target: 80 },
  { name: 'Week 2', performance: 78, target: 80 },
  { name: 'Week 3', performance: 92, target: 80 },
  { name: 'Week 4', performance: 88, target: 80 },
];
