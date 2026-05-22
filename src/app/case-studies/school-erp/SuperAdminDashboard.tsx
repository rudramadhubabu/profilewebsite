import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard, School, CreditCard, BarChart3, Users, Settings,
  TrendingUp, TrendingDown, Search, Bell, ChevronDown, Plus, Filter,
  Download, Eye, MoreHorizontal, Edit, XCircle, ArrowUpRight, 
  CheckCircle, AlertCircle, Clock, IndianRupee, Activity, Zap,
  Mail, Shield, Globe, Key, Package, Target, RefreshCw
} from 'lucide-react';

export function SuperAdminDashboard() {
  const [activePage, setActivePage] = useState('dashboard');

  const pages = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'schools', name: 'School Management', icon: School },
    { id: 'subscriptions', name: 'Subscriptions', icon: CreditCard },
    { id: 'analytics', name: 'Platform Analytics', icon: BarChart3 },
    { id: 'users', name: 'User Management', icon: Users },
    { id: 'settings', name: 'System Settings', icon: Settings }
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border mx-4 md:mx-6 lg:mx-12" style={{ borderColor: '#E5E7EB', height: '800px' }}>
      <div className="relative h-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar pages={pages} activePage={activePage} onPageChange={setActivePage} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <TopNav />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto" style={{ backgroundColor: '#FAFBFC' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activePage === 'dashboard' && <DashboardScreen />}
                {activePage === 'schools' && <SchoolManagementScreen />}
                {activePage === 'subscriptions' && <SubscriptionScreen />}
                {activePage === 'analytics' && <AnalyticsScreen />}
                {activePage === 'users' && <UserManagementScreen />}
                {activePage === 'settings' && <SystemSettingsScreen />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ==================== SIDEBAR ==================== */
function Sidebar({ pages, activePage, onPageChange }: any) {
  return (
    <aside className="w-64 bg-white border-r flex-shrink-0" style={{ borderColor: '#E5E7EB' }}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <School className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">School ERP</div>
              <div className="text-xs text-gray-500">Super Admin</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-0.5">
            {pages.map((page: any) => {
              const Icon = page.icon;
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{page.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
              SA
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">Super Admin</div>
              <div className="text-xs text-gray-500 truncate">admin@schoolerp.com</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ==================== TOP NAV ==================== */
function TopNav() {
  return (
    <div className="h-16 bg-white border-b sticky top-0 z-10" style={{ borderColor: '#E5E7EB' }}>
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search schools, users, analytics..."
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: '#E5E7EB' }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-semibold">
              SA
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==================== DASHBOARD SCREEN ==================== */
function DashboardScreen() {
  const metrics = [
    { label: 'Total Schools', value: '248', change: '+12 this month', trend: 'up', icon: School, color: '#3B82F6' },
    { label: 'Active Schools', value: '232', change: '93.5% active', trend: 'up', icon: CheckCircle, color: '#10B981' },
    { label: 'Inactive Schools', value: '16', change: '6.5% inactive', trend: 'neutral', icon: XCircle, color: '#6B7280' },
    { label: 'Total Students', value: '45,234', change: '+1,234 this month', trend: 'up', icon: Users, color: '#8B5CF6' },
    { label: 'Total Teachers', value: '3,456', change: '+89 this month', trend: 'up', icon: Users, color: '#F59E0B' },
    { label: 'Monthly Revenue', value: '₹12,45,000', change: '+18.2% vs last month', trend: 'up', icon: IndianRupee, color: '#10B981' },
    { label: 'Active Subscriptions', value: '232', change: '93.5% renewal rate', trend: 'up', icon: CreditCard, color: '#3B82F6' },
    { label: 'Trial Accounts', value: '18', change: '12 started this week', trend: 'up', icon: Clock, color: '#F59E0B' }
  ];

  const recentSchools = [
    { name: 'Delhi Public School', city: 'Hyderabad', plan: 'Enterprise', students: 1250, date: '2 hours ago', status: 'Active' },
    { name: 'Ryan International', city: 'Vijayawada', plan: 'Premium', students: 980, date: '5 hours ago', status: 'Active' },
    { name: 'Nalanda High School', city: 'Warangal', plan: 'Basic', students: 650, date: '1 day ago', status: 'Active' },
    { name: 'St. Mary\'s School', city: 'Tirupati', plan: 'Premium', students: 820, date: '2 days ago', status: 'Active' }
  ];

  const aiInsights = [
    { 
      type: 'warning', 
      title: 'Churn Risk Alert', 
      description: '3 schools have shown declining usage patterns in the last 2 weeks',
      schools: 'DAV Public School, Sacred Heart, Cambridge International',
      action: 'Review engagement'
    },
    { 
      type: 'success', 
      title: 'Growth Opportunity', 
      description: '15 trial accounts are highly engaged and likely to convert',
      schools: 'High conversion probability based on feature usage',
      action: 'Send upgrade offers'
    },
    { 
      type: 'info', 
      title: 'Usage Anomaly Detected', 
      description: 'Student logins increased 45% in Vijayawada schools this week',
      schools: 'Possible exam period or new feature adoption',
      action: 'Monitor trends'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Super Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's what's happening with your platform today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg border"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${metric.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: metric.color }} />
                </div>
                {metric.trend === 'up' && (
                  <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                )}
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.change}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Trend */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Monthly Revenue Trend</h3>
              <p className="text-sm text-gray-500">Last 6 months</p>
            </div>
            <select className="px-3 py-1.5 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
              <option>6 months</option>
              <option>12 months</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-3">
            {[65, 72, 68, 78, 85, 92].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-blue-100 rounded-t-lg relative overflow-hidden" style={{ height: `${height}%` }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-500"
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* School Onboarding Growth */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">School Onboarding Growth</h3>
              <p className="text-sm text-gray-500">New schools per month</p>
            </div>
            <select className="px-3 py-1.5 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
              <option>This year</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-3">
            {[45, 52, 48, 58, 65, 72].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-purple-100 rounded-t-lg relative overflow-hidden" style={{ height: `${height}%` }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-purple-500"
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Insights Panel */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI Insights & Predictions</h3>
              <p className="text-sm text-gray-500">Automated analysis and recommendations</p>
            </div>
          </div>

          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  insight.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                  insight.type === 'success' ? 'bg-green-50 border-green-500' :
                  'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {insight.type === 'warning' && <AlertCircle className="w-5 h-5 text-orange-600" />}
                    {insight.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {insight.type === 'info' && <Activity className="w-5 h-5 text-blue-600" />}
                    <h4 className="font-semibold text-gray-900 text-sm">{insight.title}</h4>
                  </div>
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                    {insight.action} →
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
                <p className="text-xs text-gray-500">{insight.schools}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Schools */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Registrations</h3>
          <div className="space-y-4">
            {recentSchools.map((school, index) => (
              <div key={index} className="pb-4 border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm truncate">{school.name}</div>
                    <div className="text-xs text-gray-500">{school.city} • {school.students} students</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-medium">
                        {school.plan}
                      </span>
                      <span className="text-xs text-gray-400">{school.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== SCHOOL MANAGEMENT SCREEN ==================== */
function SchoolManagementScreen() {
  const schools = [
    { name: 'Delhi Public School', city: 'Hyderabad', state: 'Telangana', plan: 'Enterprise', students: 1250, teachers: 85, status: 'Active', billing: 'Mar 15, 2026' },
    { name: 'Ryan International', city: 'Vijayawada', state: 'Andhra Pradesh', plan: 'Premium', students: 980, teachers: 72, status: 'Active', billing: 'Mar 18, 2026' },
    { name: 'Kendriya Vidyalaya', city: 'Warangal', state: 'Telangana', plan: 'Enterprise', students: 2100, teachers: 142, status: 'Active', billing: 'Mar 22, 2026' },
    { name: 'DAV Public School', city: 'Guntur', state: 'Andhra Pradesh', plan: 'Basic', students: 756, teachers: 54, status: 'Trial', billing: 'Mar 25, 2026' },
    { name: 'St. Mary\'s School', city: 'Nellore', state: 'Andhra Pradesh', plan: 'Premium', students: 890, teachers: 68, status: 'Active', billing: 'Mar 20, 2026' },
    { name: 'Nalanda High School', city: 'Karimnagar', state: 'Telangana', plan: 'Basic', students: 650, teachers: 48, status: 'Active', billing: 'Mar 28, 2026' }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">School Management</h1>
          <p className="text-sm text-gray-500">Manage all schools on your platform</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add School
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border mb-6 flex items-center gap-3" style={{ borderColor: '#E5E7EB' }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search schools..."
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg"
            style={{ borderColor: '#E5E7EB' }}
          />
        </div>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>All States</option>
          <option>Telangana</option>
          <option>Andhra Pradesh</option>
        </select>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>All Plans</option>
          <option>Enterprise</option>
          <option>Premium</option>
          <option>Basic</option>
        </select>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>All Status</option>
          <option>Active</option>
          <option>Trial</option>
          <option>Inactive</option>
        </select>
        <button className="px-3 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
        <table className="w-full">
          <thead className="bg-gray-50 border-b" style={{ borderColor: '#E5E7EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">School Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">City</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Plan</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Teachers</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Next Billing</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E5E7EB' }}>
            {schools.map((school, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <School className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{school.name}</div>
                      <div className="text-xs text-gray-500">{school.state}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{school.city}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${
                    school.plan === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                    school.plan === 'Premium' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {school.plan}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{school.students.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{school.teachers}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
                    school.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${school.status === 'Active' ? 'bg-green-600' : 'bg-orange-600'}`} />
                    {school.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{school.billing}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ==================== SUBSCRIPTION SCREEN ==================== */
function SubscriptionScreen() {
  const plans = [
    { 
      name: 'Basic', 
      price: '₹2,999', 
      active: 45, 
      features: ['Up to 500 students', 'Basic reporting', 'Email support', 'Mobile apps'],
      color: 'gray'
    },
    { 
      name: 'Premium', 
      price: '₹5,999', 
      active: 158, 
      features: ['Up to 2000 students', 'Advanced analytics', 'Priority support', 'API access'],
      color: 'blue'
    },
    { 
      name: 'Enterprise', 
      price: '₹9,999', 
      active: 45, 
      features: ['Unlimited students', 'AI insights', 'Dedicated support', 'Custom integrations'],
      color: 'purple'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Subscription Management</h1>
        <p className="text-sm text-gray-500">Monitor revenue and manage subscription plans</p>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="text-sm text-gray-500 mb-2">Total Recurring Revenue</div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">₹12,45,000</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+18.2% vs last month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="text-sm text-gray-500 mb-2">Active Plans</div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">232</div>
          <div className="text-sm text-gray-600">93.5% renewal rate</div>
        </div>
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="text-sm text-gray-500 mb-2">Expired Plans</div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">16</div>
          <div className="text-sm text-orange-600">Requires attention</div>
        </div>
      </div>

      {/* Subscription Distribution */}
      <div className="bg-white p-6 rounded-lg border mb-8" style={{ borderColor: '#E5E7EB' }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Subscription Distribution by Plan Type</h3>
        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{plan.name}</span>
                <span className="text-sm text-gray-500">{plan.active} schools ({((plan.active / 248) * 100).toFixed(1)}%)</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(plan.active / 248) * 100}%` }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`h-full rounded-full ${
                    plan.color === 'gray' ? 'bg-gray-500' :
                    plan.color === 'blue' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Management */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan Management</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-1">{plan.name} Plan</div>
                <div className="text-3xl font-semibold text-gray-900">{plan.price}<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-3">{plan.active} active schools</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" style={{ borderColor: '#E5E7EB' }}>
                Edit Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==================== ANALYTICS SCREEN ==================== */
function AnalyticsScreen() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Platform Analytics</h1>
        <p className="text-sm text-gray-500">Advanced usage metrics and insights</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Daily Active Users', value: '8,234', icon: Activity, color: '#3B82F6' },
          { label: 'Weekly Active Users', value: '18,456', icon: TrendingUp, color: '#10B981' },
          { label: 'Avg Session Duration', value: '12m 34s', icon: Clock, color: '#F59E0B' },
          { label: 'Feature Adoption', value: '78.5%', icon: Target, color: '#8B5CF6' }
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${metric.color}15` }}>
                <Icon className="w-5 h-5" style={{ color: metric.color }} />
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-500">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">System Usage Trends</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[45, 62, 58, 72, 68, 78, 85, 82, 88, 92, 89, 95].map((height, i) => (
              <div key={i} className="flex-1 bg-blue-100 rounded-t" style={{ height: `${height}%` }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-gradient-to-t from-blue-600 to-blue-500 rounded-t"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Login Frequency Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="20" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="75 25" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="20" strokeDasharray="75 25" strokeDashoffset="-75" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="25 75" strokeDashoffset="-150" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900">8.2K</div>
                  <div className="text-xs text-gray-500">Total Logins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
            <p className="text-sm text-gray-500">Automated analysis of platform usage</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
            <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-600" />
              Schools at Risk of Cancellation
            </h4>
            <p className="text-sm text-gray-700 mb-2">3 schools showing declining engagement patterns</p>
            <p className="text-xs text-gray-500">DAV Public School, Sacred Heart, Cambridge International</p>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              High Feature Adoption Detected
            </h4>
            <p className="text-sm text-gray-700 mb-2">AI attendance tracking adopted by 85% of schools</p>
            <p className="text-xs text-gray-500">Highest adoption rate across all features</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== USER MANAGEMENT SCREEN ==================== */
function UserManagementScreen() {
  const admins = [
    { name: 'Rajesh Kumar', role: 'Super Admin', email: 'rajesh@schoolerp.com', access: 'Full Access', lastLogin: '2 hours ago', status: 'Active' },
    { name: 'Priya Sharma', role: 'Platform Admin', email: 'priya@schoolerp.com', access: 'Read/Write', lastLogin: '5 hours ago', status: 'Active' },
    { name: 'Arun Reddy', role: 'Support Admin', email: 'arun@schoolerp.com', access: 'Read Only', lastLogin: '1 day ago', status: 'Active' },
    { name: 'Sneha Patel', role: 'Analytics Admin', email: 'sneha@schoolerp.com', access: 'Analytics Only', lastLogin: '3 hours ago', status: 'Active' }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">User Management</h1>
          <p className="text-sm text-gray-500">Manage admin users and permissions</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Admin User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
        <table className="w-full">
          <thead className="bg-gray-50 border-b" style={{ borderColor: '#E5E7EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Admin Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Access Level</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E5E7EB' }}>
            {admins.map((admin, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                      {admin.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{admin.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{admin.role}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{admin.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700">
                    {admin.access}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{admin.lastLogin}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    {admin.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Permissions */}
      <div className="mt-8 bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Role Permissions Management</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { role: 'Super Admin', permissions: ['Full platform access', 'User management', 'System settings', 'Billing management'] },
            { role: 'Platform Admin', permissions: ['School management', 'Analytics access', 'Support tickets', 'Report generation'] },
            { role: 'Support Admin', permissions: ['View schools', 'View users', 'Support tickets', 'Read-only analytics'] },
            { role: 'Analytics Admin', permissions: ['Analytics access', 'Report generation', 'Data export', 'View schools'] }
          ].map((role, index) => (
            <div key={index} className="p-4 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="font-semibold text-gray-900 mb-3">{role.role}</div>
              <ul className="space-y-2">
                {role.permissions.map((permission, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==================== SYSTEM SETTINGS SCREEN ==================== */
function SystemSettingsScreen() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">System Settings</h1>
        <p className="text-sm text-gray-500">Configure platform-wide settings and integrations</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Email Notifications */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email Notification Templates</h3>
              <p className="text-sm text-gray-500">Customize email templates</p>
            </div>
          </div>
          <div className="space-y-3">
            {['Welcome Email', 'Trial Expiry', 'Payment Reminder', 'Subscription Renewal'].map((template, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">{template}</span>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Edit</button>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Settings */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Regional Language Support</h3>
              <p className="text-sm text-gray-500">Enable multiple languages</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { lang: 'English', enabled: true },
              { lang: 'Telugu', enabled: true },
              { lang: 'Hindi', enabled: true },
              { lang: 'Tamil', enabled: false }
            ].map((lang, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">{lang.lang}</span>
                <div className={`w-11 h-6 rounded-full transition-colors ${lang.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform m-0.5 ${lang.enabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Gateway */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Payment Gateway Integration</h3>
              <p className="text-sm text-gray-500">Configure payment providers</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { provider: 'Razorpay', status: 'Connected', color: 'green' },
              { provider: 'PayU', status: 'Not Connected', color: 'gray' },
              { provider: 'Stripe', status: 'Connected', color: 'green' }
            ].map((provider, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <div className="text-sm font-medium text-gray-900">{provider.provider}</div>
                  <div className={`text-xs ${provider.color === 'green' ? 'text-green-600' : 'text-gray-500'}`}>
                    {provider.status}
                  </div>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {provider.color === 'green' ? 'Configure' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Policies */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Security Policies</h3>
              <p className="text-sm text-gray-500">Platform security settings</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { setting: 'Two-Factor Authentication', enabled: true },
              { setting: 'Password Complexity', enabled: true },
              { setting: 'Session Timeout (30 min)', enabled: true },
              { setting: 'IP Whitelisting', enabled: false }
            ].map((setting, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{setting.setting}</span>
                <div className={`w-11 h-6 rounded-full transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform m-0.5 ${setting.enabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}