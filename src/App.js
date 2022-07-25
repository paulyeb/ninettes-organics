import Blogs from './components/Blog';
// import ClientRemarks from './components/ClientRemarks';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import BlogsProvider from './store/blogs_context';
import ProductsProvider from './store/products_context';

function App() {
  return ( 
      <ProductsProvider>
        <BlogsProvider>
          <Home />
          <Products />
          {/* <ClientRemarks /> */}
          <Blogs />
          <Footer />
        </BlogsProvider>
      </ProductsProvider> 
  );
}

export default App;
