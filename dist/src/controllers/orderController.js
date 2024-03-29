"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderItems = exports.getOrders = exports.createOrders = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const OrderItems_1 = __importDefault(require("../models/OrderItems"));
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.default.create(req.body);
        res.json(order);
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.createOrders = createOrders;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.default.find({}).populate("orderItems");
        res.json(order);
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.getOrders = getOrders;
const createOrderItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItems = yield OrderItems_1.default.create(req.body);
        res.json({
            message: "Order Items Created",
            data: orderItems,
            success: true,
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.createOrderItems = createOrderItems;
//# sourceMappingURL=orderController.js.map