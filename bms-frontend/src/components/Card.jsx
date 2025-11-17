export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow p-6 rounded-lg text-center">
      <p className="text-gray-600 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}
