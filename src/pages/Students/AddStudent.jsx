const AddStudent = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Add Student</h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input className="border p-2 rounded" placeholder="Full Name" />
          <input className="border p-2 rounded" placeholder="Age" />
          <input className="border p-2 rounded" placeholder="Contact" />
          <input className="border p-2 rounded" placeholder="Address" />

          <button className="col-span-2 bg-blue-600 text-white p-3 rounded mt-3">
            Add Student
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddStudent;
