import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/customers/CustomerColumns";
import { Separator } from "@/components/ui/separator";
import Customer from "@/lib/models/Customer";
import { connectToDB } from "@/lib/mongoDB";

const Customers = async () => {
  await connectToDB();

  const customers = await Customer.find().sort({ createdAt: "desc" });

  return (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Customer</p>
      <Separator className="bg-gray-700 my-5" />
      <DataTable columns={columns} data={customers} searchKey="name" />
    </div>
  );
};

export default Customers;

export const dynamic = "force-dynamic";
