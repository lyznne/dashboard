import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");


    const ITEM_PER_PAGE = 8

    try {
        connectToDB();

        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
        return { users, count }

    } catch (err) {
        console.log("Failed to feetch users!");
        throw new Error("Failed to fetch users")
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");


    const ITEM_PER_PAGE = 8

    try {
        connectToDB();

        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))

        return { products, count }

    } catch (err) {
        console.log("Failed to fetch products!");
        throw new Error("Failed to fetch products")
    }
}

export const fetchSingleUser = async (id) => {
    try {
        connectToDB()
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log('Failed to fetch single user!')
        throw new Error('Failed to fetch single user!')
    }
}


export const fetchSingleProduct = async (id) => {
    try {
        connectToDB()
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log('Failed to fetch single product!')
        throw new Error('Failed to fetch single product!')
    }
}