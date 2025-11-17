export default function Students() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>

      <button className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
        + Add Student
      </button>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Room</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-2">Nimesh Dilshan</td>
            <td className="p-2">Room 12</td>
            <td className="p-2">071 234 5678</td>
            <td className="p-2">
              <button className="px-3 py-1 bg-green-500 text-white rounded mr-2">Edit</button>
              <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
