import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Card className="w-64 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image || "/api/placeholder/256/192"}
          alt={product.title}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold leading-tight line-clamp-2">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <div className="flex gap-1 items-center justify-between p-4 bg-gray-50">
        <Button variant="default" size="sm" className="flex-1 mr-2">
          <ShoppingCartIcon className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon" className="w-9 h-9">
          <FavoriteBorderIcon className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
