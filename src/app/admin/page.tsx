import AddArticleForm from "@/components/admin/AddArticleForm";

const AdminPage = () => {


  return (
    <div className="flex items-center justify-center bg-gray-100 px-5 lg:px-20 py-10">
      <div className="shadow-lg p-6 bg-white rounded-lg w-full max-w-3xl">
        <h2 className="text-2xl lg:text-3xl text-gray-800 font-semibold mb-6">
          Add New Article
        </h2>
        <AddArticleForm />
      </div>
    </div>
  );
};

export default AdminPage;
