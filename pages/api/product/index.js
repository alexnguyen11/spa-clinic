import dbConnect from "@/utils/mongo";
import Product from "@/models/Product";
import cloudinary from "@/utils/cloudinary";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while retrieving products.",
        error: err,
      });
    }
  }

  if (method === "POST") {
    const { productName, price, desc, image } = req.body;
    try {
      if (image) {
        const uploadedResponse = await cloudinary.uploader.upload(image, {
          upload_preset: "taichiacademy",
        });

        if (uploadedResponse) {
          const product = new Product({
            productName,
            price,
            desc,
            image: uploadedResponse,
          });
          const savedProduct = await product.save();
          res.status(201).send(savedProduct);
        }
      }
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while creating a product.",
        error: err,
      });
    }
  }
};

export default handler;
