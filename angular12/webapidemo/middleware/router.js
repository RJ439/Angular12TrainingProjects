const KoaRouter = require("koa-router");
const router = new KoaRouter();
const Customerscontroller = require("../controllers/customerController")
const UsersAndRolesController = require("../controllers/usersAndRolesController")
const OrdersController = require("../controllers/orderController");
//Routing dictionary
router
.get("/",(ctx) => (ctx.body="Welcome to Customers and Orders API!"))
.get("/customers", Customerscontroller.getAllCustomers)
.get("/customers/:searchText", Customerscontroller.searchCustomers)

.get("/users", UsersAndRolesController.getAllUsers)
.post("/auth",UsersAndRolesController.authenticate)
.post("/authorize",UsersAndRolesController.authorize)
.get("/orders", OrdersController.getAllOrders)

module.exports = router
