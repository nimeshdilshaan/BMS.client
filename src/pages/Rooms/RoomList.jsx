const RoomList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Room List</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Room 301</h3>
          <p>Capacity: 4</p>
          <p>Occupied: 3</p>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
