import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    //connect to db
    connectToDB();
    // encryting password using bcrypt .
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUSer = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    //saving the new user to database.
    await newUSer.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new user");
  }
  revalidatePath("/dashboard/users");

  //redirect
  redirect("/dashboard/users");
};

export const addProduct = async (formdata) => {
    "use server";
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formdata);

  try {
    //connect to db
    connectToDB();

    const newProduct = new Product({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });
    //saving the new product to database.
    await newProduct.save();
  } catch (err) {
    console.log("err -->", err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");

  //redirect
  redirect("/dashboard/products");
};
