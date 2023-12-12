import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/models/test";

export async function GET() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        // const res = Product.create({
        //     item : "Ring",
        //     price : "20000000/-",
        //     company: "Diamond"
        // });
        
        // // await res.save();
        const data = await Product.find();
        console.log("data", data);
        return NextResponse.json({ result: true, data });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ result: false, error: err.message });
    }
}
