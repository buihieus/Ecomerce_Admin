import { getOrderWithProducts } from "@/actions/orders";
import PageComponent from "@/app/admin/orders/page-component";

const Orders = async () => {
  const ordersWithProducts = await getOrderWithProducts();
  
  if(!ordersWithProducts) return <div className="text-center font-bold text-2xl">
    No order found
  </div>;
  // console.log(ordersWithProducts);
  return (
    <PageComponent ordersWithProducts={ordersWithProducts} />
  )
}

export default Orders