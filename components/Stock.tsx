import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import config from "../config/config.json";

function StockList() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch(`${config.base_url}/products?api_key=${config.api_key}`)
        .then(response => response.json())
        .then(result => setProducts(result.data));
    }, []);
  
    const list = products.map((product, index) => <Text key={index} style={{color: '#ffffff'}}>{ product.name } - { product.stock }</Text>);
  
    return (
      <View>
        {list}
      </View>
    );
  }

export default function Stock() {
  return (
    <View>
      <Text style={{color: '#ffffff', fontSize: 24}}>Lagerförteckning</Text>
      <StockList/>
    </View>
  );
}