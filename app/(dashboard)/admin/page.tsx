import AdminContractManagement from '@/components/AdminContractManagement';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminContractManagement />
    </div>
  );
} 