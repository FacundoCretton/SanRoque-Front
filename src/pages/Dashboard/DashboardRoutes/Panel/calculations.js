export const calculateMonthlySales = (orders) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlySales = orders.filter(order => {
      const orderDate = new Date(order.date);
      return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
    });
    return monthlySales.reduce((total, order) => total + order.totalPrice, 0);
  };
  
  export const countUniqueClients = (orders) => {
    const uniqueClients = new Set(orders.map(order => order.name));
    return uniqueClients.size;
  };
  
  export const calculateInventory = (orders) => {
    return orders.length;
  };
  