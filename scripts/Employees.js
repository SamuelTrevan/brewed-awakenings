import { getEmployees } from "./database.js";
import { getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, soldProduct] = itemClicked.id.split("--");
    for (const employee of employees) {
      if (employee.id === parseInt(soldProduct)) {
        let employeeSoldProducts = 0;
        for (const order of orders) {
          if (order.employeeId === parseInt(soldProduct)) {
            employeeSoldProducts++;
          }
        }
        window.alert(`${employee.name} has sold ${employeeSoldProducts}`);
      }
    }
  }
});

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
