import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

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

export const deleteProduct = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
    // console.log(`deleted ${id} product`)
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log("err -->", err);
    throw new Error("Failed to delete user");
  }

  revalidatePath("dashboard/users");
};

export const updateUser = async (formData) => {
  "use server";
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updatedFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    ); 


    await User.findByIdAndUpdate(id, updatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users");

  //redirect
  redirect("/dashboard/users");
};


export const updateProduct = async (formData) => {
    "use server";

    const { id, title, cat, price, stock, color, size, desc } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updatedFields = {
        title, cat, price, stock, color, size, desc
      };
  
      Object.keys(updatedFields).forEach(
        (key) =>
          (updatedFields[key] === "" || undefined) && delete updatedFields[key]
      ); 
  
  
      await Product.findByIdAndUpdate(id, updatedFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product");
    }
  
    revalidatePath("/dashboard/products");
  
    //redirect
    redirect("/dashboard/products");
  };


  export const authenticate =  async (formData) => {
    "use server"
    const { username, password } = Object.fromEntries(formData);

    if (typeof username === "undefined" || typeof password === "undefined") {
      throw new Error("Invalid credentials");
    }


    try{
      await signIn("credentials", { username, password })
    } catch(err) {
     console.log(err)
     throw err
    }
  }