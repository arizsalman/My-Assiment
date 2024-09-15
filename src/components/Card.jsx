import { data } from "autoprefixer";
import { useEffect, useState } from "react";

 
 const ProductList = () => {

  const [search,setSearch]=useState('')
 
  const items = [
    {
      title: "Product 1",
      image:
        "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRfJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
      price: 19.99,
      id: 1,
    },
    {
      title: "Product 2",
      image:
        "https://media.istockphoto.com/id/656678076/photo/polo-t-shirts.webp?b=1&s=612x612&w=0&k=20&c=pv3OtWH-A5yR-OVyMTO6hE0xAOlgmzWgn6Tqy6H0Xbw=",
      price: 29.99,
      id: 2,
    },
    {
      title: "Product 3",
      image:
        "https://media.istockphoto.com/id/1206570206/photo/grey-folded-t-shirt-isolated-on-white-background-with-clipping-path.webp?b=1&s=612x612&w=0&k=20&c=lsNDDxW6y5xAe8vTO9q83p9DlHUGyZhjAxd1eCAriNw=",
      price: 39.99,
      id: 3,
    },
    {
      title: "Product 4",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      price: 49.99,
      id: 4,
    },
    {
      title: "Product 5",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      price: 24.99,
      id: 5,
    },
    {
      title: "Product 6",
      image:
        "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      price: 34.99,
      id: 6,
    },
    {
      title: "Product 7",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      price: 44.99,
      id: 7,
    },
    {
      title: "Product 8",
      image:
        "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      price: 54.99,
      id: 8,
    },
    {
      title: "Product 9",
      image:
        "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      price: 14.99,
      id: 9,
    },
    {
      title: "Product 10",
      image:
        "https://media.istockphoto.com/id/691882846/photo/positively-charming.webp?b=1&s=612x612&w=0&k=20&c=jn6hhiyB-bUd9S9ORZ7ttubOgAWtinbUxjr-BOeP3AM=",
      price: 64.99,
      id: 10,
    },
    {
      title: "Product 11",
      image:
        "https://media.istockphoto.com/id/1193300116/photo/handsome-man-in-black-suit-near-his-old-classic-car.webp?b=1&s=612x612&w=0&k=20&c=UvqxBFTOd1BslLFfpZLaemlSgzIsS13M35sOxpNeDt0=",
      price: 74.99,
      id: 11,
    },
    {
      title: "Product 12",
      image:
        "https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.webp?b=1&s=612x612&w=0&k=20&c=5T9d2q0viYR1DVcq7FGllJpVTkSrfdpuLHODWiH1a5I=",
      price: 84.99,
      id: 12,
    },
    {
      title: "Product 13",
      image:
        "https://media.istockphoto.com/id/621487426/photo/lumbersexual-bearded-senior-men-hipster.webp?b=1&s=612x612&w=0&k=20&c=LAxXpMeLTLY-BK4dtYIrtT_gSR8fyVtYeee4HKS0cW0=",
      price: 94.99,
      id: 13,
    },
    {
      title: "Product 14",
      image:
        "https://media.istockphoto.com/id/482576252/photo/you-express-who-you-are-by-what-you-wear.webp?b=1&s=612x612&w=0&k=20&c=g18BeHo_d2nFr4Tco9csaVe_y6z5aJZp2j7dfBH8rzk=",
      price: 104.99,
      id: 14,
    },
    {
      title: "Product 15",
      image:
        "https://images.unsplash.com/photo-1717724162644-75f624f413ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D",
      price: 114.99,
      id: 15,
    },
    
    {
      title: "Product 16",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBG3ll2wQBNpe7Mz53BrCI5LHhAQQoolEcRO9zEGFXkVYQi6X-kiCJXdVdzrQC2lXecc&usqp=CAU",
      price: 199.99,
      id: 16,
    },
    {
      title: "Product 17",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fJ0XOcL9QQJtqOkEBuw3HS6eW7Dx7B6h8rfQf1H_JNujgU7EbZoF5hmKlBiV1Dcd8F0&usqp=CAU",
      price: 199.99,
      id: 17,
    },
   ];

  //  const [products,setProducts]=useState([]);
   
  // useEffect(()=>{

  // },[])

  // const fetchProducts=()=>{
  //   fetch(" https://api.escuelajs.co/api/v1/products")
  //   .then((res)=>res.json())
  //   .then((products)=>setProducts(products));
  // }


  const filtered= items.filter((data)=> 
    data.title.toLowerCase().includes(search.toLowerCase()))
  console.log(items);

 let [counter,setCounter]=useState(15)
  
//  let counter=20;
  const addClick=()=>{
    counter=counter+1
    setCounter(counter)
  }
  const reomveClick=()=>{
    counter=counter-1 ,counter >=20 ?"counter":"counter-1"
    setCounter(counter)
  }
  return (
    <div>

      <h1> My counter{counter}</h1>
      
      <button
      onClick={addClick}
      >
        Add</button>
      <button
      onClick={reomveClick}
      > Remove  </button>
      <input type="text"  placeholder=" Please Text Here" 
        onChange={(e)=>setSearch(e.target.value)}
      />
      <span />  <input type="number"placeholder=" type dollars"/> 


      
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px", width: "200px" }}>
          <img src={item.image} alt={item.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h2>{item.title}</h2>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;