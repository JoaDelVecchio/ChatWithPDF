import Documents from "@/components/Documents";

const Dashboard = () => {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="font-extralight bg-gray-100 text-3xl p-5 text-blue-600">
        My Documents
      </h1>
      <Documents />
    </div>
  );
};

export default Dashboard;
