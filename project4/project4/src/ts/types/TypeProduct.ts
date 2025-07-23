export type TypeProduct = {
    ProductSKU: string;
    ProductName: string;
    ProductDescription: string;
    ProductCategory: "Electronic" | "Clothing" | "Footwear" ,
    ProductImage: string;
    ProductFabricationDate: Date;
    ProductDueDate: Date;
};
