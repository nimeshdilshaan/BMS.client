import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total Students" value="120" />
        <Card title="Total Rooms" value="45" />
        <Card title="Today Attendance" value="112" />
        <Card title="Pending Fees" value="5" />
      </div>
    </div>
  );
}
