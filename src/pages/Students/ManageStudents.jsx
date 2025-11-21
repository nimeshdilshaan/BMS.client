const ManageStudents = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Manage Students</h2>

      <table className="w-full bg-white shadow rounded-xl">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Room</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">Nimal</td>
            <td className="p-3">302</td>
            <td className="p-3">0712345678</td>
            <td className="p-3">
              <button className="text-blue-600">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudents;
