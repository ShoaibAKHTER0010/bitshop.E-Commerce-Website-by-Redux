import { useState, useEffect } from 'react';

const useProductCount = (products) => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (products) {
      setProductCount(products.length);
    }
  }, [products]);

  return productCount;
};

export default useProductCount;
